import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProcedimentoPageRoutingModule } from './procedimento-routing.module';

import { ProcedimentoPage } from './procedimento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProcedimentoPageRoutingModule
  ],
  declarations: [ProcedimentoPage]
})
export class ProcedimentoPageModule {}
