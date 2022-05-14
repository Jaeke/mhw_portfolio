import {
  InteriorOne,
  InteriorTwo,
  InteriorThree,
  InteriorFour,
  InteriorFive,
} from '../../assets/interiorDesign';
import {
  RetailEight,
  RetailEleven,
  RetailFive,
  RetailFour,
  RetailNine,
  RetailOne,
  RetailSeven,
  RetailSix,
  RetailTen,
  RetailThree,
  RetailTwo,
} from '../../assets/retailSpace';
import { RestaurantOne, RestaurantTwo } from '../../assets/restaurantSpace';
import {
  FloralFive,
  FloralFour,
  FloralOne,
  FloralThree,
  FloralTwo,
} from '../../assets/floralDesign';

export const imgData = [
  {
    id: 1,
    group: 'residential',
    imgSrc: [
      InteriorOne,
      InteriorTwo,
      InteriorThree,
      InteriorFour,
      InteriorFive,
    ],
  },
  {
    id: 2,
    group: 'retail',
    imgSrc: [
      RetailOne,
      RetailTwo,
      RetailThree,
      RetailFour,
      RetailFive,
      RetailSix,
      RetailSeven,
      RetailEight,
      RetailNine,
      RetailTen,
      RetailEleven,
    ],
  },
  {
    id: 3,
    group: 'restaurant',
    imgSrc: [RestaurantOne, RestaurantTwo],
  },
  {
    id: 4,
    group: 'floral',
    imgSrc: [FloralOne, FloralTwo, FloralThree, FloralFour, FloralFive],
  },
  {
    id: 5,
    group: 'furniture',
    imgSrc: [],
  },
  // {
  //   id: 6,
  //   group: 'furniture',
  //   imgSrc: [],
  // },
  // {
  //   id: 7,
  //   group: 'furniture',
  //   imgSrc: [],
  // },
  // {
  //   id: 8,
  //   group: 'furniture',
  //   imgSrc: [],
  // },
];
