import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { NavController } from '@ionic/angular'; // Importe NavController

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.page.html',
  styleUrls: ['./administrator.page.scss'],
})
export class AdministratorPage implements OnInit {
  
  logins: any[] = [];
  login: any[] = [];
  loginEdit:any = null;


  constructor(private apiService: ApiService,private navCtrl: NavController) {}

  ngOnInit() {
    
  }


 

  
}
