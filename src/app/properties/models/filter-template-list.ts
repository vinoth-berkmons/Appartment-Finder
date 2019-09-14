import { FilterModel } from './filter.model';


export const templateValues: Array<FilterModel> = [
  {
    seqNo: 1,
    filterType: 'RANGE',
    title: 'Rent Range',
    secondaryTitle: '',
    isOption: false,
    isCheckbox: false,
    isInput: true,
    value: '',
    values: [
      {
        label: 'Min',
        value: 'MIN_RANGE',
        isSecondaryValue: false
      },
      {
        label: 'Max',
        value: 'MAX_RANGE',
        isSecondaryValue: false
      }
    ]
  },
  {
    seqNo: 2,
    filterType: 'BEDS',
    title: 'Beds',
    secondaryTitle: '',
    isOption: true,
    isCheckbox: false,
    isInput: false,
    value: 'beds',
    values: [
      {
        label: 'All Beds',
        value: '0',
        isSecondaryValue: false
      },
      {
        label: 'Studio',
        value: 'STUDIO',
        isSecondaryValue: false
      },
      {
        label: '1 Bed',
        value: '1',
        isSecondaryValue: false
      },
      {
        label: '2 Beds',
        value: '2',
        isSecondaryValue: false
      },
      {
        label: '3 Beds',
        value: '3',
        isSecondaryValue: false
      },
      {
        label: '4 + Beds',
        value: '4',
        isSecondaryValue: false
      }
    ]
  },
  {
    seqNo: 3,
    filterType: 'BATHS',
    title: 'Baths',
    secondaryTitle: '',
    isOption: true,
    isCheckbox: false,
    isInput: false,
    value: 'baths',
    values: [
      {
        label: 'All Baths',
        value: '0',
        isSecondaryValue: false
      },
      {
        label: '1 + Baths',
        value: '1',
        isSecondaryValue: false
      },
      {
        label: '2 + Baths',
        value: '2',
        isSecondaryValue: false
      },
      {
        label: '3 + Baths',
        value: '3',
        isSecondaryValue: false
      }
    ]
  },
  {
    seqNo: 4,
    filterType: 'PETS',
    title: 'Pets',
    secondaryTitle: 'Style',
    isOption: false,
    isCheckbox: true,
    isInput: false,
    value: '',
    values: [
      {
        label: 'Dogs',
        value: 'DOG',
        isSecondaryValue: false
      },
      {
        label: 'Cats',
        value: 'CAT',
        isSecondaryValue: false
      },
      {
        label: 'All',
        value: 'ALL_PETS',
        isSecondaryValue: false
      }
    ]
  },
  {
    seqNo: 5,
    filterType: 'STYLE',
    title: 'Style',
    secondaryTitle: '',
    isOption: false,
    isCheckbox: true,
    isInput: false,
    value: '',
    values: [
      {
        label: 'Appartments',
        value: 'APT',
        isSecondaryValue: true
      },
      {
        label: 'Condos',
        value: 'CONDO',
        isSecondaryValue: true
      },
      {
        label: 'Houses',
        value: 'HOUSE',
        isSecondaryValue: true
      },
      {
        label: 'Townhomes',
        value: 'TOWNHOME',
        isSecondaryValue: true
      }
    ]
  },
  {
    seqNo: 6,
    filterType: 'LAUNDRY',
    title: 'Laundry',
    secondaryTitle: '',
    isOption: false,
    isCheckbox: true,
    isInput: false,
    value: '',
    values: [
      {
        label: 'In Unit',
        value: 'IN-UNIT',
        isSecondaryValue: false
      },
      {
        label: 'Hookups',
        value: 'HOOKUP',
        isSecondaryValue: false
      },
      {
        label: 'On Site',
        value: 'ON-SITE',
        isSecondaryValue: false
      }
    ]
  },
  // {
  //   seqNo: 7,
  //   filterType: 'INTERIOR',
  //   title: 'Interior & Community Amenities',
  //   secondaryTitle: '',
  //   isOption: false,
  //   isCheckbox: true,
  //   isInput: false,
  //   value: '',
  //   values: [
  //     {
  //       label: 'Air Condition',
  //       value: 'AIR_CONDITION',
  //       isSecondaryValue: false
  //     },
  //     {
  //       label: 'Cable or Satellite',
  //       value: 'CABLE_SATELLITE',
  //       isSecondaryValue: false
  //     },
  //     {
  //       label: 'Disability Access',
  //       value: 'DISABOLITY_ACCESS',
  //       isSecondaryValue: false
  //     },
  //     {
  //       label: 'DishWasher',
  //       value: 'DISHWASHER',
  //       isSecondaryValue: false
  //     },
  //     {
  //       label: 'Fireplace',
  //       value: 'FIREPLACE',
  //       isSecondaryValue: false
  //     },
  //     {
  //       label: 'Fitness Center',
  //       value: 'FITNESS_CENTER',
  //       isSecondaryValue: false
  //     },
  //     {
  //       label: 'Furnished Available',
  //       value: 'FURNISHED',
  //       isSecondaryValue: false
  //     },
  //     {
  //       label: 'Garages',
  //       value: 'GARAGES',
  //       isSecondaryValue: false
  //     },
  //     {
  //       label: 'Hardwood Floors',
  //       value: 'HARDWOOD_FLOORS',
  //       isSecondaryValue: false
  //     },

  //     {
  //       label: 'Patio or Balcony',
  //       value: 'PATIO_BALCONY',
  //       isSecondaryValue: false
  //     },
  //     {
  //       label: 'Pool',
  //       value: 'POOL',
  //       isSecondaryValue: false
  //     },
  //     {
  //       label: 'Walk-in Closets',
  //       value: 'WALK_IN_CLOSETS',
  //       isSecondaryValue: false
  //     },
  //     {
  //       label: 'Utilities Included',
  //       value: 'UTILITIES_INCLUDED',
  //       isSecondaryValue: false
  //     }
  //   ]
  // },
  // {
  //   seqNo: 8,
  //   filterType: 'SPECIALTIES',
  //   title: 'Specialties',
  //   secondaryTitle: '',
  //   isOption: false,
  //   isCheckbox: true,
  //   isInput: false,
  //   value: '',
  //   values: [
  //     {
  //       label: 'Income Restricted',
  //       value: 'INCOME_RESTRICTED',
  //       isSecondaryValue: false
  //     },
  //     {
  //       label: 'Luxury',
  //       value: 'LUXURY',
  //       isSecondaryValue: false
  //     },
  //     {
  //       label: 'Short Term Lease',
  //       value: 'SHORT_LEASE',
  //       isSecondaryValue: false
  //     }
  //   ]
  // },
];
