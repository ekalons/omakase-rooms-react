export const configuration = {
  serviceUrls: {
    backendUrl: import.meta.env.VITE_SERVER_ACCESS_TOKEN,
    newBackendUrl: import.meta.env.VITE_NEW_SERVER_ACCESS_TOKEN,
  },
  migratedServer: import.meta.env.VITE_USE_NEW_SERVER === "true",
  map: {
    defaultViewportSettingsNYC: {
      latitude: 40.736,
      longitude: -73.99,
      zoom: 12.2,
    },
    mapboxApiAccessToken: import.meta.env.VITE_MAPBOX_ACCESS_TOKEN,
    mapStyle: import.meta.env.VITE_MAPBOX_STYLES_TOKEN,
  },
};
