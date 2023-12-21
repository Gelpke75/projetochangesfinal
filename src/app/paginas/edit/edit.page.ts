import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { NavController } from '@ionic/angular'; // Importe NavController
@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  logins: any[] = [];
  login: any[] = [];
  loginEdit: any = null;

  constructor(private apiService: ApiService,private navCtrl: NavController) {}

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

  deleteLogin(loginId: number) {
    this.apiService.deleteLogin(loginId).subscribe(
      (response) => {
        console.log('Login deletado com sucesso!', response);
        this.getAllLogins(); // Atualiza a lista após deletar
      },
      (error) => {
        console.error('Erro ao deletar o login:', error);
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
}
