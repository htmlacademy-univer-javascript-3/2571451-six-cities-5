import { Offer } from '@/types/offer';

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
] as Offer[];
