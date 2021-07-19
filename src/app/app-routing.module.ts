import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BubbleSortComponent } from './bubble-sort/bubble-sort.component';
import { InsertionSortComponent } from './insertion-sort/insertion-sort.component';
import { MergeSortComponent } from './merge-sort/merge-sort.component';
import { QuickSortComponent } from './quick-sort/quick-sort.component';
import { SelectionSortComponent } from './selection-sort/selection-sort.component';


const routes: Routes = [
  { path: '', redirectTo: '/quick-sort', pathMatch: 'full' },
  { path: 'bubble-sort', component: BubbleSortComponent },
  { path: 'selection-sort', component: SelectionSortComponent },
  { path: 'quick-sort', component: QuickSortComponent },
  { path: 'insertion-sort', component: InsertionSortComponent },
  { path: 'merge-sort', component: MergeSortComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
