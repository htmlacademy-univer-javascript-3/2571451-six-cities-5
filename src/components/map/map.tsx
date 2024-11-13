import { useRef, useEffect } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useMap } from '@/hooks/map';
import { URL_MARKER, URL_MARKER_ACTIVE } from '@/const';
import { Location } from '@/types/location';
import { Place } from '@/types/place';

function Map({
  location,
  places,
  selectedPlace,
}: {
  location: Location;
  places: Place[];
  selectedPlace: Place | null;
}) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, location);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_ACTIVE,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      places.forEach((place) => {
        leaflet
          .marker(
            {
              lat: place.location.latitude,
              lng: place.location.longitude,
            },
            {
              icon:
                place.id === selectedPlace?.id
                  ? currentCustomIcon
                  : defaultCustomIcon,
            }
          )
          .addTo(map);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map, places, selectedPlace]);

  return <div style={{ width: '100%', height: '100%' }} ref={mapRef}></div>;
}

export default Map;
