export const configuration = {
  serviceUrls: {
    backendUrl: import.meta.env.VITE_SERVER_ACCESS_TOKEN,
  },
  map: {
    defaultViewportSettings: {
      latitude: 40.736,
      longitude: -73.99,
      zoom: 12.2,
      width: "50vw",
      height: window.innerHeight - 60,
    },
    mapboxApiAccessToken: import.meta.env.VITE_MAPBOX_ACCESS_TOKEN,
    mapStyle: import.meta.env.VITE_MAPBOX_STYLES_TOKEN,
  },
};
