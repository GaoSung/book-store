/**
 * Created by Administrator on 2016/12/14.
 */
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {BookShelfComponent} from "./components/book-shelf/book-shelf.component";
import {BookStoreComponent} from "./components/book-store/book-store.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full',
    data: {
      title: 'home page'
    }
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'home page'
    }
  },
  { path: 'shelf', component: BookShelfComponent},
  { path: 'store', component: BookStoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
