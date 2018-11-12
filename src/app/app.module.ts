import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
// import { AboutUsComponent } from './about-us/about-us.component';
// import { BaconModule } from './bacon/bacon.module';
// import { BrowseModule } from './browse/browse.module';
// import { AuthenticationModule } from './authentication/authentication.module';
import { NavbarModule } from './navbar/navbar.module';
// import { ProfileModule } from './profile/profile.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    // AboutUsComponent,
    AppComponent
  ],
  imports: [
    NavbarModule,
    // AuthenticationModule,
    // BaconModule,
    // BrowseModule,
    BrowserModule,
    // ProfileModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
