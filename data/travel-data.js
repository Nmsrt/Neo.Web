// travel-data.js
// Single source of truth for all travel destinations.
//
// NOTE: Photos are now CDN-powered (Cloudinary).
// Flags are local and live under: assets/icons/flags/

(() => {
  const CLOUD_NAME = "dcnwpgvj5";
  const CDN_IMAGE_BASE = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;

  const cdnImg = (publicId, w = 1600) =>
    `${CDN_IMAGE_BASE}/q_auto,f_auto,c_limit,w_${w}/${publicId}`;

  const travelData = [
    {
      id: "singapore",
      name: "Singapore",
      region: "Southeast Asia",
      year: "20xx",
      flag: "singapore.png",
      hero: "[Description coming soon]",
      description: "[Description coming soon]",
      folder: "travel/singapore",
      prefix: "photo",
      images: [
        cdnImg("travel_singapore_1"),
        cdnImg("travel_singapore_2"),
        cdnImg("travel_singapore_3")
      ]
    },
    {
      id: "thailand",
      name: "Thailand",
      region: "Southeast Asia",
      year: "20xx",
      flag: "thailand.png",
      hero: "[Description coming soon]",
      description: "[Description coming soon]",
      folder: "travel/thailand",
      prefix: "photo",
      images: [
        cdnImg("travel_thailand_1"),
        cdnImg("travel_thailand_2"),
        cdnImg("travel_thailand_3")
      ]
    },
    {
      id: "indonesia",
      name: "Indonesia",
      region: "Southeast Asia",
      year: "20xx",
      flag: "indonesia.png",
      hero: "[Description coming soon]",
      description: "[Description coming soon]",
      folder: "travel/indonesia",
      prefix: "photo",
      images: [
        cdnImg("travel_indonesia_1"),
        cdnImg("travel_indonesia_2"),
        cdnImg("travel_indonesia_3")
      ]
    },
    {
      id: "malaysia",
      name: "Malaysia",
      region: "Southeast Asia",
      year: "20xx",
      flag: "malaysia.png",
      hero: "[Description coming soon]",
      description: "[Description coming soon]",
      folder: "travel/malaysia",
      prefix: "photo",
      images: [
        cdnImg("travel_malaysia_1"),
        cdnImg("travel_malaysia_2"),
        cdnImg("travel_malaysia_3")
      ]
    },
    {
      id: "philippines",
      name: "Philippines",
      region: "Southeast Asia",
      year: "Many years",
      flag: "philippines.png",
      hero: "[Description coming soon]",
      description: "[Description coming soon]",
      folder: "travel/philippines",
      prefix: "photo",
      images: [
        cdnImg("travel_philippines_1"),
        cdnImg("travel_philippines_2"),
        cdnImg("travel_philippines_3")
      ]
    },
    {
      id: "hongkong-macau",
      name: "Hong Kong / Macau",
      region: "East Asia",
      year: "20xx / 20xx",
      flag: "hongkong.png",
      hero: "[Description coming soon]",
      description: "[Description coming soon]",
      folder: "travel/hongkong-macau",
      prefix: "photo",
      images: [
        cdnImg("travel_hongkong_macau_1"),
        cdnImg("travel_hongkong_macau_2"),
        cdnImg("travel_hongkong_macau_3")
      ]
    },
    {
      id: "japan",
      name: "Japan",
      region: "East Asia",
      year: "20xx / 20xx / 20xx",
      flag: "japan.png",
      hero: "[Description coming soon]",
      description: "[Description coming soon]",
      folder: "travel/japan",
      prefix: "photo",
      images: [
        cdnImg("travel_japan_1"),
        cdnImg("travel_japan_2"),
        cdnImg("travel_japan_3")
      ]
    },
    {
      id: "south-korea",
      name: "South Korea",
      region: "East Asia",
      year: "20xx",
      flag: "southkorea.png",
      hero: "[Description coming soon]",
      description: "[Description coming soon]",
      folder: "travel/south-korea",
      prefix: "photo",
      images: [
        cdnImg("travel_southkorea_1"),
        cdnImg("travel_southkorea_2"),
        cdnImg("travel_southkorea_3")
      ]
    },
    {
      id: "uae",
      name: "United Arab Emirates",
      region: "Middle East",
      year: "20xx",
      flag: "uae.png",
      hero: "[Description coming soon]",
      description: "[Description coming soon]",
      folder: "travel/uae",
      prefix: "photo",
      images: [
        cdnImg("travel_uae_1"),
        cdnImg("travel_uae_2"),
        cdnImg("travel_uae_3")
      ]
    },
    {
      id: "usa",
      name: "United States",
      region: "North America",
      year: "20xx / 20xx",
      flag: "usa.png",
      hero: "[Description coming soon]",
      description: "[Description coming soon]",
      folder: "travel/usa",
      prefix: "photo",
      images: [
        cdnImg("travel_usa_1"),
        cdnImg("travel_usa_2"),
        cdnImg("travel_usa_3")
      ]
    },
    {
      id: "italy",
      name: "Italy",
      region: "Europe",
      year: "2019",
      flag: "italy.png",
      hero: "[Description coming soon]",
      description: "[Description coming soon]",
      folder: "travel/italy",
      prefix: "photo",
      images: [
        cdnImg("travel_italy_1"),
        cdnImg("travel_italy_2"),
        cdnImg("travel_italy_3")
      ]
    },
    {
      id: "belgium",
      name: "Belgium",
      region: "Europe",
      year: "2019",
      flag: "belgium.png",
      hero: "[Description coming soon]",
      description: "[Description coming soon]",
      folder: "travel/belgium",
      prefix: "photo",
      images: [
        cdnImg("travel_belgium_1"),
        cdnImg("travel_belgium_2"),
        cdnImg("travel_belgium_3")
      ]
    },
    {
      id: "france",
      name: "France",
      region: "Europe",
      year: "2019",
      flag: "france.png",
      hero: "[Description coming soon]",
      description: "[Description coming soon]",
      folder: "travel/france",
      prefix: "photo",
      images: [
        cdnImg("travel_france_1"),
        cdnImg("travel_france_2"),
        cdnImg("travel_france_3")
      ]
    },
    {
      id: "switzerland",
      name: "Switzerland",
      region: "Europe",
      year: "2019",
      flag: "switzerland.png",
      hero: "[Description coming soon]",
      description: "[Description coming soon]",
      folder: "travel/switzerland",
      prefix: "photo",
      images: [
        cdnImg("travel_switzerland_1"),
        cdnImg("travel_switzerland_2"),
        cdnImg("travel_switzerland_3")
      ]
    },
    {
      id: "vatican-city",
      name: "Vatican City",
      region: "Europe",
      year: "2019",
      flag: "vaticancity.png",
      hero: "[Description coming soon]",
      description: "[Description coming soon]",
      folder: "travel/vatican-city",
      prefix: "photo",
      images: [
        cdnImg("travel_vaticancity_1"),
        cdnImg("travel_vaticancity_2"),
        cdnImg("travel_vaticancity_3")
      ]
    }
  ];

  window.travelData = travelData;
})();
