import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  hideTabs: boolean = true;
  // Restante do código...

  
  username = '';
  password = '';
  usuarioLogado = false;
  adm = true;
  errorMessage = ''; // Adicionando variável para armazenar mensagem de erro

  constructor(
    private http: HttpClient,
    private router: Router,
    public nav: NavController,
    private navCtrl: NavController ,private apiService : ApiService
  ) {}

  ngOnInit() {}


  verificarAutenticacao() {
    this.usuarioLogado = true;
  }

  login() {
    if (this.username.trim() === '' || this.password.trim() === '') {
      this.errorMessage = 'Por favor, preencha todos os campos.';
      return; // Impede a continuação do processo se os campos estiverem vazios
    }

    this.http.get<any[]>('http://localhost:3000/login', { observe: 'response' }).subscribe(
      (response) => {
        const users = response.body;
        if (users) {
          const user = users.find((u) => u.username === this.username && u.password === this.password);
          if (user) {
            if (user.adm === true) {
              this.router.navigate(['/administrator']);
            } else {
              this.router.navigate(['/home']);
            }
          }
        } else {
          console.log('Não foi possível obter a lista de usuários.');
        }
      },
      (error) => {
        console.error('Erro na requisição HTTP:', error);
      }
    );
  }
}
