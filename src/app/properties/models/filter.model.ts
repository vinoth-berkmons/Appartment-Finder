export class FilterModel {
  seqNo: number;
  filterType: string;
  title: string;
  secondaryTitle: string;
  isOption: boolean;
  isCheckbox: boolean;
  isInput: boolean;
  value: string;
  values: Array<FilterValues>;
}

export class FilterValues {
  label: string;
  value: string;
  isSecondaryValue: boolean;
  constructor(label: string, value: string, isSecondaryValue: boolean){
    this.label = label;
    this.value = value;
    this.isSecondaryValue = isSecondaryValue;
  }
}

export const filterFlag = {
    MIN_RANGE: 'MIN_RANGE',
    MAX_RANGE: 'MAX_RANGE',
    ALL_BEDS: 'ALL_BEDS',
    STUDIO: 'STUDIO',
    ONE_BED: 'ONE_BED',
    TWO_BEDS: 'TWO_BEDS',
    THREE_BEDS: 'THREE_BEDS',
    FOUR_PLUS_BEDS: 'FOUR_PLUS_BEDS',
    ALL_BATHS : 'ALL_BATHS',
    ONE_PLUS_BATHS: 'ONE_PLUS_BATHS',
    TWO_PLUS_BATHS: 'TWO_PLUS_BATHS',
    THREE_PLUS_BATHS: 'THREE_PLUS_BATHS',
    DOGS: 'DOGS',
    CATS: 'CATS',
    ALL_PETS: 'ALL_PETS',
    APPARTMENTS: 'APPARTMENTS',
    CONDOS: 'CONDOS',
    HOUSES: 'HOUSES',
    TOWNHOMES: 'TOWNHOMES',
    IN_UNIT: 'IN_UNIT',
    HOOKUPS: 'HOOKUPS',
    ON_SITE: 'ON_SITE',
    AIR_CONDITION: 'AIR_CONDITION',
    CABLE_SATELLITE: 'CABLE_SATELLITE',
    DISABOLITY_ACCESS: 'DISABOLITY_ACCESS',
    DISHWASHER: 'DISHWASHER',
    FIREPLACE: 'FIREPLACE',
    FITNESS_CENTER: 'FITNESS_CENTER',
    FURNISHED: 'FURNISHED',
    GARAGES: 'GARAGES',
    HARDWOOD_FLOORS: 'HARDWOOD_FLOORS',
    PATIO_BALCONY: 'PATIO_BALCONY',
    POOL: 'POOL',
    WALK_IN_CLOSETS: 'WALK_IN_CLOSETS',
    UTILITIES_INCLUDED: 'UTILITIES_INCLUDED',
    INCOME_RESTRICTED: 'INCOME_RESTRICTED',
    LUXURY: 'LUXURY',
    SHORT_LEASE: 'SHORT_LEASE'
  };
