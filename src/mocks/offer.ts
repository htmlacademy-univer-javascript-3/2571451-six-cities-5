import { Offer } from '@/types/offer';

export const offer = {
  id: '77899525-2b0d-4627-be80-f33c79e8fba7',
  title: 'Loft Studio in the Central Area',
  description:
    'Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.',
  type: 'house',
  price: 493,
  images: [
    'https://14.design.htmlacademy.pro/static/hotel/14.jpg',
    'https://14.design.htmlacademy.pro/static/hotel/17.jpg',
    'https://14.design.htmlacademy.pro/static/hotel/3.jpg',
    'https://14.design.htmlacademy.pro/static/hotel/13.jpg',
    'https://14.design.htmlacademy.pro/static/hotel/6.jpg',
    'https://14.design.htmlacademy.pro/static/hotel/8.jpg',
  ],
  city: {
    name: 'Amsterdam',
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13,
    },
  },
  location: {
    latitude: 52.36354,
    longitude: 4.889976,
    zoom: 16,
  },
  goods: [
    'Washer',
    'Coffee machine',
    'Towels',
    'Baby seat',
    'Wi-Fi',
    'Air conditioning',
    'Breakfast',
    'Heating',
  ],
  host: {
    isPro: true,
    name: 'Angelina',
    avatarUrl:
      'https://14.design.htmlacademy.pro/static/host/avatar-angelina.jpg',
  },
  isPremium: true,
  isFavorite: false,
  rating: 5,
  bedrooms: 1,
  maxAdults: 9,
} as Offer;
