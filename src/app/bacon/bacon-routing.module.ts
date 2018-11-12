import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaconComponent } from './main/bacon.component';

const routes: Routes=[
  { path: '', pathMatch: 'full', redirectTo: '/' },
  { path: ':id', component: BaconComponent },
  // craft-bacon
  { path: '**', redirectTo: '' }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaconRoutingModule { }
