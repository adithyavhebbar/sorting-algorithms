import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from "@angular/material/button";


@NgModule({
    imports: [
        MatToolbarModule,
        MatSliderModule,
        MatButtonModule
    ],
    exports: [
        MatToolbarModule,
        MatSliderModule,
        MatButtonModule
    ]
})

export class MaterialModule { }