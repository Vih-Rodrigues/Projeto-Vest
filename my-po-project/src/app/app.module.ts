import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrincipalPageComponent } from './PrincipalPage/PrincipalPage.component';
import { AppRoutingModule } from './app-routing.module';
import { PoModule } from '@po-ui/ng-components';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PoTemplatesModule } from '@po-ui/ng-templates';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    PoTemplatesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }