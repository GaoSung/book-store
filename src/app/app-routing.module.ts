/**
 * Created by Administrator on 2016/12/14.
 */
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {BookShelfComponent} from "./components/book-shelf/book-shelf.component";
import {BookStoreComponent} from "./components/book-store/book-store.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {BookShelfDetailComponent} from "./components/book-shelf/book-shelf-detail.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: '首页'
    },
    children:[
      {
        path: 'shelf',
        component: BookShelfComponent,
        data: {
          title: '书架'
        },
        children: [
          {
            path: ':id',
            component: BookShelfDetailComponent,
            data: {
              title: '书架详情'
            }
          }
        ]
      },
      {
        path: 'store',
        component: BookStoreComponent,
        data: {
          title: '仓库'
        }
      }
    ]
  },
  {
    path: '',
    component: HomeComponent,
    data: {
      title: '首页'
    }
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
