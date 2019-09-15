import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PropertiesComponent } from './properties.component';
import { PropertyLocationComponent } from './property-location/property-location.component';
import { PropertyListComponent } from './property-list/property-list.component';

/* ANGULAR GOOGLE MAP */
import { AgmCoreModule } from '@agm/core';

/* Material Module */
import { MaterialModule } from '../material/material.module';
/* Ng-bootstrap */
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {
    path: '',
    component: PropertiesComponent
  }
]

@NgModule({
  declarations: [PropertiesComponent, PropertyLocationComponent, PropertyListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_KEY',
      libraries: ["places"]
    })
  ]
})
export class PropertiesModule { }
