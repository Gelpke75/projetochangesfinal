import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage {
  hideTabs: boolean = true;
  // Restante do código...


  login: any = {
    username: '',
    adm: false,
    password: ''
  };

  constructor(private apiService: ApiService) {}

  cadastrar() {
    this.apiService.cadastrarUsuario(this.login).subscribe(
      (response) => {
        console.log('Usuário cadastrado com sucesso:', response);
        this.limparFormulario();
      },
      (error) => {
        console.error('Erro ao cadastrar usuário:', error);
      }
    );
  }

  limparFormulario() {
    this.login = {
      username: '',
      adm: false,
      password: ''
    };
  }
}
