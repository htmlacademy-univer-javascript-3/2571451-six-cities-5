import { useRef, useEffect } from 'react';
import leaflet, { Marker, layerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useMap } from '@/hooks/use-map';
import { URL_MARKER, URL_MARKER_ACTIVE } from '@/const';
import { Location } from '@/types/location';
import { Place } from '@/types/place';

function Map({
  location,
  places,
  hoverPlace,
}: {
  location: Location;
  places: Place[];
  hoverPlace?: Place;
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
      const markerLayer = layerGroup().addTo(map);
      places.forEach((place) => {
        const marker = new Marker({
          lat: place.location.latitude,
          lng: place.location.longitude,
        });

        marker
          .setIcon(
            hoverPlace && place.id === hoverPlace.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [currentCustomIcon, defaultCustomIcon, hoverPlace, map, places]);

  return <div style={{ width: '100%', height: '100%' }} ref={mapRef}></div>;
}

export default Map;
