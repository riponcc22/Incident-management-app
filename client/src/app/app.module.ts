
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import routeConfig from './routes';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routeConfig) // Configure the router with your routes
  ],
  providers: [],
  bootstrap: [] // No need for AppComponent in bootstrap, as it's standalone
})
export class AppModule {}

