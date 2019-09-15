import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { BehaviorSubject, Subject, EMPTY, of, pipe } from 'rxjs';
import { map, catchError, combineLatest, tap } from 'rxjs/operators';


import { MapsAPILoader, MouseEvent } from '@agm/core';

import _lodash from 'lodash';

/* Models */
import { FilterModel, filterFlag } from './models/filter.model';
import { templateValues } from './models/filter-template-list';
import { PropertyService } from './services/property.service';
import { PropertyModel } from './models/property.model';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})
export class PropertiesComponent implements OnInit {

  /***Search Info */
  latitude: number;
  longitude: number;
  address: string;
  private geoCoder;

  @ViewChild('search', {static: true}) search: ElementRef


  /**Search End */

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];

  private listOfCategoriesSubject = new BehaviorSubject<any>([]);
  listOfCategories$ = this.listOfCategoriesSubject.asObservable();

  /* Async Filtered Properties */
  private filteredPropertiesSubject = new BehaviorSubject<any>([]);
  filteredProperties$ = this.filteredPropertiesSubject.asObservable();
  // filteredProperties$;

  /* Copy of properties */
  propertiesCopy = [];
  filteredResult = [];
  filterOptions: any = {};

  /* Error Message */
  private errorMessageSubject = new Subject<string>();
  errorMessage$ = this.errorMessageSubject.asObservable();

  /* Loading */
  private loadingSubject = new BehaviorSubject<boolean>(true);
  viewLoading$ = this.loadingSubject.asObservable();


  /* Filter Form */
  filterListForm: FormGroup;

  constructor(private fb: FormBuilder, private propertyService: PropertyService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
    ) {
    // this.filterCategory();
  }

  ngOnInit() {
    console.log(templateValues);
     this.initFilterListForm();
    // this.loadProperties();


      //load Places Autocomplete
      this.mapsAPILoader.load().then(() => {
        this.geoCoder = new google.maps.Geocoder;
        console.log(this.search);
        let autocomplete = new google.maps.places.Autocomplete(this.search.nativeElement, {
          types: ["address"]
        });
        console.log(autocomplete);
        autocomplete.addListener("place_changed", () => {
          this.ngZone.run(() => {
            //get the place result
            let place: google.maps.places.PlaceResult = autocomplete.getPlace();
            console.log(place);
            //verify result
            if (place.geometry === undefined || place.geometry === null) {
              return;
            }
            //set latitude, longitude and zoom
            this.latitude = place.geometry.location.lat();
            this.longitude = place.geometry.location.lng();
            console.log(this.latitude);

            this.filterHandler('SEARCH', '');
          });
        });
      });
  }

  initFilterListForm() {
    this.filterListForm = this.fb.group({
      MIN_RANGE: [''],
      MAX_RANGE: [''],
      beds: ['0'],
      baths: ['0'],
      DOG: [''],
      CAT: [''],
      ALL_PETS: [''],
      APT: [''],
      CONDO: [''],
      HOUSE: [''],
      TOWNHOME: [''],
      'IN-UNIT': [''],
      HOOKUP: [''],
      'ON-SITE': [''],
      AIR_CONDITION: [''],
      CABLE_SATELLITE: [''],
      DISABOLITY_ACCESS: [''],
      DISHWASHER: [''],
      FIREPLACE: [''],
      FITNESS_CENTER: [''],
      FURNISHED: [''],
      GARAGES: [''],
      HARDWOOD_FLOORS: [''],
      PATIO_BALCONY: [''],
      POOL: [''],
      WALK_IN_CLOSETS: [''],
      UTILITIES_INCLUDED: [''],
      INCOME_RESTRICTED: [''],
      LUXURY: [''],
      SHORT_LEASE: ['']
    });

    /* Clear Filters */
    this.filterCategory();
    this.loadProperties();

  }

  loadProperties() {
    this.filteredProperties$ = this.propertyService.propertyList$.pipe(
      map(res => {
        console.log(res);
        this.propertiesCopy = res;
        // this.filteredPropertiesSubject.next(res);
        this.loadingSubject.next(false);
        return res;
      }),
      catchError(err => {
        console.log(err);
        this.errorMessageSubject.next(err);
        this.loadingSubject.next(false);
        return EMPTY;
      })
    );
  }

/* Setting up Categories */
  filterCategory() {
    this.listOfCategoriesSubject.next(templateValues);
    console.log(this.listOfCategories$);
    this.filterOptions = {
      'MIN_RANGE': 0,
      'MAX_RANGE': 0,
      "beds": 0,
      "baths": 0,
      "DOG": false,
      "CAT": false,
      "ALL_PETS": false,
      "APT": false,
      "CONDO": false,
      "HOUSE": false,
      "TOWNHOME": false,
      "IN-UNIT": false,
      "HOOKUP": false,
      "ON-SITE": false,
      "lat": 0,
      "long": 0
    }
  }

  /* Filter handler from template */
  filterHandler(category, property, sts?) {

    /* Loading Starts*/
    this.loadingSubject.next(true);

    /* Getting Min and Max Range */
    let minRange = this.filterListForm.get('MIN_RANGE').value === '' ? 0 : this.filterListForm.get('MIN_RANGE').value;
    let maxRange = this.filterListForm.get('MAX_RANGE').value === '' ? 0 : this.filterListForm.get('MAX_RANGE').value;

    if (category.filterType === 'BEDS' || category.filterType === 'BATHS') {
      _lodash.set(this.filterOptions, category.value, +property.value);
    } else if(property.value === 'MIN_RANGE') {
      _lodash.set(this.filterOptions, property.value, +minRange);
    } else if( property.value === 'MAX_RANGE') {
      _lodash.set(this.filterOptions, property.value, +maxRange);
    } else if(category === 'SEARCH') {
      _lodash.set(this.filterOptions, 'lat', this.longitude );
      _lodash.set(this.filterOptions, 'long', this.latitude);
    } else {
      _lodash.set(this.filterOptions, property.value, sts);
    }

    this.applyFilter();

  }

  applyFilter() {

    const filter = this.filterOptions;

    console.log(filter);
  

    const result = this.propertiesCopy;

    this.filteredResult = result.filter((item) => {

      /* Search */
      if(filter.lat > 0 && filter.lat > item.location.x){
        return false;
      }
      if(filter.long > 0 && filter.long < item.location.y){
        return false;
      }

      /* RANGE */
      if(filter.MIN_RANGE > 0 && filter.MIN_RANGE > item.price){
        return false;
      }
      if(filter.MAX_RANGE > 0 && filter.MAX_RANGE < item.price){
        return false;
      }

      /* BEDS */
      if (filter.beds !== 0 && filter.beds !== item.beds) {
        console.log('bed ', filter.beds);
        return false;
      }

      /* BATHS */
      if (filter.baths !== 0 && filter.baths !== item.bath) {
        console.log('bath ', filter.baths);
        return false;
      }

      /* PETS */
      if (filter.DOG || filter.CAT) {
        if (filter.DOG && !filter.CAT && item.pets_allowed !== 'DOG') {
          return false;
        }
        if (!filter.DOG && filter.CAT && item.pets_allowed !== 'CAT') {
          return false;
        }
        if (filter.DOG && filter.CAT && item.pets_allowed !== 'DOG' && item.pets_allowed !== 'CAT') {
          return false;
        }
      }

      /* STYLE */
      if (filter.APT || filter.CONDO || filter.HOUSE || filter.TOWNHOME) {
        let styleFound = false;
        let styleAnyFound = false;
        for (let style in filter) {
          if (filter[style] && item.property_type === style) {
            styleFound = true;
          }
          if (filter[style]) {
            styleAnyFound = true;
          }
        }
        if (!styleFound && styleAnyFound) {
          return false;
        }
      }

      /* Laundry */
      if (filter['IN-UNIT'] || filter.HOOKUP || filter['ON-SITE']) {
        console.log('clicked alundry');
        let laundryFound = false;
        let laundryAnyFound = false;
        for (let style in filter) {
          if (filter[style] && item.laundry === style) {
            laundryFound = true;
          }
          if (filter[style]) {
            laundryAnyFound = true;
          }
        }
        if (!laundryFound && laundryAnyFound) {
          return false;
        }
      }

      return true;
    });

    /* Filtered props setting to observable */
    this.filteredProperties$ = of(this.filteredResult);
     /* Loading End */
    this.loadingSubject.next(false);
  }


}
