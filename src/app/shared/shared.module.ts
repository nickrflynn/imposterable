import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule, MatCardModule } from '@angular/material';

import { CardComponent } from './card/card.component';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatCardModule
    ],
    exports: [
        CardComponent
    ],
    declarations: [
        CardComponent
    ]
})
export class SharedModule { }
