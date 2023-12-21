import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/login'; // Altere para o URL correto do seu backend
  private loginUrl = 'http://localhost:3000/login';
  private Url = 'http://localhost:3000';
  private products = new BehaviorSubject<any[]>([]);
  enableNotifications: boolean = false;
  selectedLanguage: string = 'en';


  constructor(private http: HttpClient) {}

  cadastrarUsuario(usuario: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, usuario);
  }


  authenticate(username: string, password: string): Observable<any> {
    return this.http.get<any[]>(this.loginUrl, { observe: 'response' });
  }

    // Buscar todos os posts
     getUsersWithPosts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }
  
    // Adicionar um comentário a um post específico
    addCommentToPost(postId: number, comment: any): Observable<any> {
      return this.http.post(`${this.apiUrl}/posts/${postId}/comments`, comment);
    }
  // Adicione outras operações CRUD ou métodos necessários aqui

  getProducts() {
    return this.products.asObservable();
  }

  loadProductsFromBackend() {
    this.http.get<any[]>(`${this.apiUrl}/products`).subscribe(
      (data: any[]) => {
        this.products.next(data); // Atualiza os produtos no BehaviorSubject
      },
      (error) => {
        console.error('Erro ao carregar os produtos:', error);
      }
    );
  }

  getAllLogins() {
    return this.http.get<any[]>(this.apiUrl);
  }

  updateLogin(loginId: number, newData: any) {
    return this.http.put<any>(`${this.apiUrl}/${loginId}`, newData); // Correção da concatenação do loginId
  }
  
  deleteLogin(loginId: number) {
    return this.http.delete<any>(`${this.apiUrl}${loginId}`);
  }

  
getLogin(): Observable<any> {
  return this.http.get(this.apiUrl);
}

atualizarLogin(id: number, login: any): Observable<any> {
  const url = `${this.apiUrl}/${id}`;
  return this.http.put(url, login);
}


excluirLogin(id: number): Observable<any> {
  const url = `${this.apiUrl}/${id}`;
  return this.http.delete(url);
}



getPosts(): Observable<any[]> {
  return this.http.get<any[]>(`${this.Url}/posts`);
}

}
  
  


