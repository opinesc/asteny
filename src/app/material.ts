import { NgModule } from '../../node_modules/@angular/core';
import {
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
} from '@angular/material';

// modulos de Material

const modulos = [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
];

@NgModule ({
    imports: modulos,
    exports: modulos
})

export class MaterialModule{}
