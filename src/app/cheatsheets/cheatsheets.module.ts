import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CheatsheetsComponent } from './cheatsheets.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [CheatsheetsComponent]
})
export class CheatsheetsModule { }
