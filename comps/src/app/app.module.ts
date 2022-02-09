import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElementsModule } from './elements/elements.module';
import { CollectionssModule } from './collectionss/collectionss.module';
@NgModule({
  declarations: [
    AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ElementsModule,
    CollectionssModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
