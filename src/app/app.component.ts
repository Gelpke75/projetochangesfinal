import { Component } from '@angular/core';
import { Router , NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  showTabs: boolean = false;
  hideTabsOnPages: string[] = ['/login', '/cadastro', '/administrator' , '/edit']; // Páginas sem os tabs

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentPage = this.router.url; // Obtém a URL atual
        this.showTabs = !this.hideTabsOnPages.some(page => currentPage.includes(page));
      }
    });
  }
}

