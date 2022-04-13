import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    exports: [
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatDividerModule
    ]
})
export class MaterialModule { }
