import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoggedInService } from './core/services/user.service';
import { environment } from '../environments/environment';
import { MatCheckboxModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTooltipModule,
    MatCheckboxModule,
    ServiceWorkerModule.register('ngsw-config.json', { enabled: environment.production })
  ],
  providers: [LoggedInService],
  bootstrap: [AppComponent]
})
export class AppModule { }
