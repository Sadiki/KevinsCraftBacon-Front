import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaconComponent } from './main/bacon.component';
import { CraftComponent } from './craft/craft.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: ':id', component: BaconComponent },
  { path: 'craft', component: CraftComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaconRoutingModule { }
