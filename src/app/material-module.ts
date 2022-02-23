import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from "@angular/material/core";

import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';

import {  MatFormFieldModule } from "@angular/material/form-field";
import { MatCheckboxModule } from '@angular/material/checkbox';

import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';



@NgModule({
    exports: [
        ReactiveFormsModule,
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatButtonModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule,
        MatChipsModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatDialogModule,
        MatListModule

    ]
})

export class DemoMaterialModule { }