import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  clicker :number = 10;
  constructor() { }

  countDonate() {
    this.clicker +=10;
    
  }

  ngOnInit(): void {
  }

}
