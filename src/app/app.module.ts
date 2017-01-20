import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import { HomeComponent } from './components/home/home.component';
import { BookShelfComponent } from './components/book-shelf/book-shelf.component';
import { BookStoreComponent } from './components/book-store/book-store.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {BookShelfDetailComponent} from "./components/book-shelf/book-shelf-detail.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookShelfComponent,
    BookStoreComponent,
    PageNotFoundComponent,
    BookShelfDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
