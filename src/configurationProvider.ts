export const configuration = {
  serviceUrls: {
    backendUrl: process.env.REACT_APP_SERVER_ACCESS_TOKEN,
  },
  map: {
    defaultViewportSettings: {
      latitude: 40.736,
      longitude: -73.99,
      zoom: 12.2,
      width: "50vw",
      height: window.innerHeight - 60,
    },
  },
};
