import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
// import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
    { path: '', loadChildren: './browse/browse.module#BrowseModule' },
    // { path: 'about-us', component: AboutUsComponent },
    { path: 'authentication', loadChildren: './authentication/authentication.module#AuthenticationModule' },
    { path: 'bacon', loadChildren: './bacon/bacon.module#BaconModule' },
    { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' },
    // orders
    { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    // imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
