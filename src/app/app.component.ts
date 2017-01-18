import { Component } from '@angular/core';
import {Router, NavigationEnd, Route, ActivatedRoute, ActivatedRouteSnapshot} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router:Router,private route:ActivatedRoute){
    router.events.subscribe(event =>{
      if (event instanceof NavigationEnd) {
        console.log(this.router.url);
        console.log(this.route.routeConfig);
      }
    });
  }
}
