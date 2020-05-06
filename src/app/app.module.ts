import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NgModule, LOCALE_ID } from '@angular/core';
import { SQLite, SQLiteObject  } from '@ionic-native/sqlite/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SolicitacaoService, SolicitacaoData } from './solicitacao.service';
import { DatabaseService } from './database.service';
import { CredencialService } from './credencial.service';
import { FolderPage } from './folder/folder.page';

@NgModule({
  declarations: [AppComponent, FolderPage],
  entryComponents: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ], 
  providers: [
    StatusBar,
    SplashScreen,
    {provide: LOCALE_ID, useValue: 'pt-BR'},
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    SQLite,
    SolicitacaoService,
    DatabaseService,
    CredencialService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

