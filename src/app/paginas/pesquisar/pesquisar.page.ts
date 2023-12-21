import { Component } from '@angular/core';

interface User {
  id: number;
  username: string;
  password: string;
  posts: any[];
}

@Component({
  selector: 'app-pesquisar',
  templateUrl: './pesquisar.page.html',
  styleUrls: ['./pesquisar.page.scss'],
})
export class PesquisarPage {
  logins: User[] = [];
  searchResult: User[] = [];

  constructor() {
    this.loadUsers();
  }

  loadUsers() {
    // Simulação de carga de dados localmente
    this.logins = [
      {
        id: 1,
        username: 'admin',
        password: '123456',
        posts: [],
      },
      {
        id: 2,
        username: 'bb',
        password: '111',
        posts: [],
      },
      // Outros usuários...
    ];

    this.searchResult = this.logins;
  }

  search(event: any) {
    const searchTerm: string = event.target.value.toLowerCase();

    if (!searchTerm || searchTerm === '') {
      this.searchResult = this.logins;
    } else {
      this.searchResult = this.logins.filter((user: User) =>
        user.username.toLowerCase().includes(searchTerm)
      );
    }
  }
}
