import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { NavController } from '@ionic/angular'; // Importe NavController

interface Login {
  id: number;
  // Outras propriedades do login...
}

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  logins: any[] = [];
  login: any[] = [];
  loginEdit: any = null;
  adm:any;

  constructor(private apiService: ApiService, private navCtrl: NavController) {}

  ngOnInit() {
    this.carregarLogins(); // Chame a função para carregar os logins ao inicializar a página
  }

  getAllLogins() {
    this.apiService.getAllLogins().subscribe(
      (data) => {
        this.logins = data;
      },
      (error) => {
        console.error('Erro ao obter os logins:', error);
      }
    );
  }

  carregarLogins() {
    this.apiService.getLogin().subscribe(
      (response: any) => {
        this.logins = response; // Atualize a lista de logins com a resposta do serviço
      },
      (error: any) => {
        console.error('Erro ao carregar logins:', error);
      }
    );
  }

  ionViewWillEnter() {
    this.carregarLogins();
  }

  updateLogin(loginId: number, newData: any) {
    this.apiService.updateLogin(loginId, newData).subscribe(
      (response) => {
        console.log('Login atualizado com sucesso!', response);
        this.getAllLogins(); // Atualiza a lista após a edição
      },
      (error) => {
        console.error('Erro ao atualizar o login:', error);
      }
    );
  }

  excluirLogin(login: Login) {
    this.apiService.excluirLogin(login.id).subscribe(
      () => {
        console.log(`Login com ID ${login.id} excluído com sucesso`);
        this.carregarLogins(); // Atualize a lista após a exclusão
      },
      (error) => {
        console.error('Erro ao excluir login:', error);
      }
    );
  }

  editarLogin(login: any) {
    this.loginEdit = { ...login };
    console.log(this.loginEdit);
  }

  cancelar() {
    this.loginEdit = null;
  }

  salvarEdicao() {
    this.apiService.atualizarLogin(this.loginEdit.id, this.loginEdit).subscribe(
      (response) => {
        console.log('Login atualizado com sucesso:', response);
        this.carregarLogins(); 
        this.cancelar();
      },
      (error) => {
        console.error('Erro ao atualizar login:', error);
      }
    );
  }

  getAdmClass(adm: boolean | string) {
    if (typeof adm === 'boolean') {
      return adm ? 'isTrue' : 'isFalse';
    } else {
      return adm === 'true' ? 'isTrue' : 'isFalse';
    }
  }
}
