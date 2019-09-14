import { Component, OnInit, Input } from '@angular/core';

import { PropertyModel } from './../models/property.model';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {

  @Input() property: PropertyModel;

  phNumber;

  defaultImage = [];

  constructor() { }

  ngOnInit() {
    console.log(this.property);
    this.phNumber =  Math.floor(Math.random() * 10000000000) + 1;
    this.defaultImage = ['../../../assets/images/IconHomeTypeNormal.png'];
    // this.images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  }

}
