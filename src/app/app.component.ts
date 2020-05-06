import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { DatabaseService } from './database.service';
import { FolderPage } from './folder/folder.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  rootPage: any = null;
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '/folder/Home',
      icon: 'home'
    },
    {
      title: 'Quem Somos',
      url: '/folder/QuemSomos',
      icon: 'people'
    },
    {
      title: 'Financiamento BNDES', 
      icon: 'create',
      children : [ 
        {
          title: 'Login',
          url: 'financ-bndes',
          icon: 'people'
        },  
        {
          title: 'Preencher intenção de financiamento',
          url: 'solicitacao',
          icon: 'people'
        },
        {
          title: 'Minhas solicitações',
          url: 'financ-bndes',
          icon: 'people'
        },  
      ]
    },
    {
      title: 'Contato',
      url: '/folder/Contato',
      icon: 'mail'
    },
    {
      title: 'Sair',
      url: '/folder/Sair',
      icon: 'exit'
    }
  ];
  
  constructor(
    private platform: Platform, 
    private statusBar: StatusBar, 
    private splashScreen: SplashScreen, 
    private databaseService: DatabaseService) 
  {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      //Criando o banco de dados
      this.databaseService.createDatabase()
        .then(() => {
          // fechando a SplashScreen somente quando o banco for criado
          this.openHomePage(this.splashScreen);
        })
        .catch(() => {
          // ou se houver erro na criação do banco
          this.openHomePage(this.splashScreen);
        });
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
  private openHomePage(splashScreen: SplashScreen) {
    splashScreen.hide();
    this.rootPage = FolderPage;
  }
}

