import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BiographiesComponent } from './biographies.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [BiographiesComponent]
})
export class BiographiesModule { }
