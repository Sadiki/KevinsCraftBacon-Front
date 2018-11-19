import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
    { path: '', loadChildren: './browse/browse.module#BrowseModule', pathMatch: 'full' },
    { path: 'about-us', loadChildren: './about-us/about-us.module#AboutUsModule' },
    { path: 'auth', loadChildren: './authentication/authentication.module#AuthenticationModule' },
    { path: 'bacon', loadChildren: './bacon/bacon.module#BaconModule' },
    { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' },
    { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
    { path: 'shipping', loadChildren: './shipping/shipping.module#ShippingModule'},
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
