import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-pesquisar',
  templateUrl: './pesquisar.page.html',
  styleUrls: ['./pesquisar.page.scss'],
})
export class PesquisarPage {
  login: any;
  username: string = '';

  constructor(private apiService: ApiService) {}

  buscarLoginPorUsername() {
    this.apiService.getLoginPorUsername(this.username).subscribe(
      (response) => {
        this.login = response[0]; // Supondo que retorne um único usuário
      },
      (error) => {
        console.error('Erro ao buscar login por username:', error);
      }
    );
  }
}
