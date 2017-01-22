import { Component } from '@angular/core';
import {Router, NavigationEnd} from "@angular/router";

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
        while (child&&child.firstChild&&child.url.length>0){
          child = child.firstChild;
        }
        let currPath = "";
        this.breadcrumb = [];
        for (let path of child.pathFromRoot){
          if(path.url[0]){
            this.breadcrumb.push({"link":`${currPath}/${path.url[0]}`,"text":path.data["title"]});
            currPath += `/${path.url[0]}`;
          }else if(path.data["title"]){
            this.breadcrumb.push({"link":`${currPath}`,"text":path.data["title"]});
          }
        }
        console.log(this.breadcrumb);
      }
    });
  }
}
