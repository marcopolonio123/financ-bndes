import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinancBNDESPageRoutingModule } from './financ-bndes-routing.module';

import { FinancBNDESPage } from './financ-bndes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinancBNDESPageRoutingModule
  ],
  declarations: [FinancBNDESPage]
})
export class FinancBNDESPageModule {}
