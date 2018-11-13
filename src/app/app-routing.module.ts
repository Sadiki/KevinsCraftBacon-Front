import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
    { path: '', loadChildren: './browse/browse.module#BrowseModule', pathMatch: 'full' },
    { path: 'about-us', loadChildren: './about-us/about-us.module#AboutUsModule' },
    { path: 'authentication', loadChildren: './authentication/authentication.module#AuthenticationModule' },
    { path: 'bacon', loadChildren: './bacon/bacon.module#BaconModule' },
    { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    // imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
