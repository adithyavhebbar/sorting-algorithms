import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SortVisualizerComponent } from './sort-visualizer/sort-visualizer.component';
import { QuickSortComponent } from './quick-sort/quick-sort.component';
import { InsertionSortComponent } from './insertion-sort/insertion-sort.component';
import { MergeSortComponent } from './merge-sort/merge-sort.component';
import { SelectionSortComponent } from './selection-sort/selection-sort.component';
import { HeapSortComponent } from './heap-sort/heap-sort.component';
import { BubbleSortComponent } from './bubble-sort/bubble-sort.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./shared/material.module";
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    SortVisualizerComponent,
    QuickSortComponent,
    InsertionSortComponent,
    MergeSortComponent,
    SelectionSortComponent,
    HeapSortComponent,
    BubbleSortComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
