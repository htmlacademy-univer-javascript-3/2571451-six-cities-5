import { Place } from '@/types/place';

export const offers = [
  {
    id: 'cd49b7c9-e44e-43af-a7a9-2ac3dbc21e61',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'hotel',
    price: 347,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/3.jpg',
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13,
      },
    },
    location: {
      latitude: 51.239402000000005,
      longitude: 6.756314000000001,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 3,
  },
  {
    id: '70f2cf1f-4b8f-4e1c-a7eb-d7cd037d71d0',
    title: 'The house among olive ',
    type: 'hotel',
    price: 475,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/11.jpg',
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13,
      },
    },
    location: {
      latitude: 51.243402,
      longitude: 6.791314,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.3,
  },
  {
    id: '703dfba8-d0ec-4dcf-a527-38a7cd05e701',
    title: 'The Pondhouse - A Magical Place',
    type: 'room',
    price: 154,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/18.jpg',
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13,
      },
    },
    location: {
      latitude: 51.214402,
      longitude: 6.764314000000001,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: false,
    rating: 1.1,
  },
  {
    id: '12007884-69de-4ec9-8b45-c47c2e34bc61',
    title: 'Loft Studio in the Central Area',
    type: 'apartment',
    price: 165,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/14.jpg',
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13,
      },
    },
    location: {
      latitude: 51.225402,
      longitude: 6.784314,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: false,
    rating: 1.4,
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
