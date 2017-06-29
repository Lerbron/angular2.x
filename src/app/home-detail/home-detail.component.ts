import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent implements OnInit {
  head = 'home detail';
  constructor( public location: Location) { }

  ngOnInit() {
  }
  goBack() {
    this.location.back();
  }

}
