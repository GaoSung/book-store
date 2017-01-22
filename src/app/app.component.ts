import { Component } from '@angular/core';
import {Router, NavigationEnd, ActivatedRoute} from "@angular/router";

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
        let currPath = "";
        this.breadcrumb = [];
        while (child&&(child.url.length>0||child.data["title"])){
          this.breadcrumb.push({"link":`${currPath}/${child.url[0]}`,"text":child.data["title"]});
          currPath += `/${child.url[0]}`;
          child = child.firstChild;
        }
      }
    });
  }
}
