import { Component, OnInit, Input } from '@angular/core';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'app-property-location',
  templateUrl: './property-location.component.html',
  styleUrls: ['./property-location.component.scss']
})
export class PropertyLocationComponent implements OnInit {

  @Input() properties$;
  texto: string = 'Wenceslau Braz - Cuidado com as cargas';
  lat: number;
  lng: number;
  zoom: number = 15;
  public mapRadius: number = 5000;
  constructor() { }

  ngOnInit() {
    console.log(this.properties$);
    this.properties$.subscribe(data => {
      console.log(data);
      if (data.length > 0) {
        let min = Math.max.apply(Math, data.map(cor =>  cor.location.x ))
        let max = Math.min.apply(Math, data.map(cor =>  cor.location.y ))
        console.log(min);
        console.log(max);
        this.lat = min
        this.lng = max
      }

    })



  }

  mouseOver(infoWindow, gm) {
    gm.animation = 'BOUNCE';
    if (gm.lastOpen != null) {
      gm.lastOpen.close();
    }

    gm.lastOpen = infoWindow;

    infoWindow.open();
  }

}
