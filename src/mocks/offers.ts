import { Place } from '@/types/place';

export const offers = [
  {
    id: '77899525-2b0d-4627-be80-f33c79e8fba7',
    title: 'Loft Studio in the Central Area',
    type: 'house',
    price: 493,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/6.jpg',
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
    isFavorite: false,
    isPremium: true,
    rating: 5,
  },
  {
    id: 'af26d3cf-0c4b-4062-aa9f-b457dc7b76e7',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'room',
    price: 204,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/6.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13,
      },
    },
    location: {
      latitude: 52.388540000000006,
      longitude: 4.899976,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.9,
  },
  {
    id: '4ea32a12-8f5e-4d02-a2ee-882acd795613',
    title: 'House in countryside',
    type: 'hotel',
    price: 146,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/9.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13,
      },
    },
    location: {
      latitude: 52.36954,
      longitude: 4.914976,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.6,
  },
  {
    id: '6a500e69-03a4-43dc-8da1-3b4b50540014',
    title: 'Perfectly located Castro',
    type: 'room',
    price: 107,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/15.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13,
      },
    },
    location: {
      latitude: 52.37554,
      longitude: 4.9019759999999994,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 1.9,
  },
  {
    id: 'fe8d8e93-70de-49a0-8753-56e60c7a257c',
    title: 'Waterfront with extraordinary view',
    type: 'house',
    price: 156,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/12.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13,
      },
    },
    location: {
      latitude: 52.385540000000006,
      longitude: 4.886976,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 1.3,
  },
] as Place[];

export const favorites = [
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8,
      },
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    isFavorite: false,
    isPremium: false,
    rating: 4,
    previewImage: 'https://url-to-image/image.png',
  },
] as Place[];
