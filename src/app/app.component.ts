import { Component } from '@angular/core';
import {Router, NavigationEnd, Route, ActivatedRoute, ActivatedRouteSnapshot} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  breadcrumb = [];

  constructor(private router:Router){
    router.events.subscribe(event =>{
      if (event instanceof NavigationEnd) {
        let root = this.router.routerState.snapshot.root;
        let child = root.firstChild;
        this.breadcrumb = [{"link":"/home","text":"首页"}];
        while (child&&child.url.length>0){
          if(child.url[0].path!=="home"){
            this.breadcrumb.push({"link":`/${child.url[0]}`,"text":child.data["title"]});
          }
          child = child.firstChild;
        }
      }
    });
  }
}
