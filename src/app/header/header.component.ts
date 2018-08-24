import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  aboutclass = false;
  contactclass = false;
  constructor() { }

  ngOnInit() {
  }

  headerlinkclick(event) {
    if (event.target.id === 'home') {
      this.aboutclass = false;
      this.contactclass = false;
    } else if (event.target.id === 'about') {
      this.aboutclass = true;
      this.contactclass = false;
    } else if (event.target.id === 'contact') {
      this.aboutclass = false;
      this.contactclass = true;
    }
  }

  scroll(el) {
    el.scrollIntoView();
  }

}
