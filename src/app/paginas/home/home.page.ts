// home.page.ts
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  posts: any[] = [];
  
  // Declare a propriedade newComment
  newComment = ''; // Variável para armazenar o novo comentário

  constructor(private apiService: ApiService) { }

  ngOnInit() {}

  doRefresh(event: { target: { complete: () => void; }; }) {
    setTimeout(() => {
      console.log('Operação de atualização completa');
      event.target.complete();
    }, 2000);
  }

  addComment(post: any) {
    // Adicionar lógica para adicionar um comentário ao post
    // Aqui você pode chamar o serviço de autenticação para adicionar um comentário com o usuário autenticado
  }



  
}
