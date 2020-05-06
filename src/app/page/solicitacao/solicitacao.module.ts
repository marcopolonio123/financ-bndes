import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolicitacaoPageRoutingModule } from './solicitacao-routing.module';

import { SolicitacaoPage } from './solicitacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolicitacaoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [SolicitacaoPage]
})
export class SolicitacaoPageModule {}
