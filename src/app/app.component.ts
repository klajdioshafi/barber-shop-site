import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  closed: boolean = true;

  onOpenSidenav(sidenav: HTMLDivElement, menu: HTMLImageElement) {
    this.closed = false;
    sidenav.style.right = "0px";
    menu.src = "../assets/img/close.png";
  }

  onCloseSidenav(sidenav: HTMLDivElement, menu: HTMLImageElement) {
    this.closed = true;
    sidenav.style.right = "-250px";
    menu.src = "../assets/img/menu.png";
  }
}
