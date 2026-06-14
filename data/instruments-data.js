// js/instruments-data.js
// Central source of truth for instruments data (CDN-powered)

const CLOUD_NAME = "dcnwpgvj5";
const CDN_IMAGE_BASE = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;

/**
 * CDN helper for instrument photos
 * - Safe defaults
 * - Auto quality & format
 */
const cdnInstrumentImg = (publicId, w = 900) =>
  `${CDN_IMAGE_BASE}/q_auto,f_auto,c_limit,w_${w}/${publicId}`;

window.instrumentsData = [
  {
    id: "acoustic-kit",
    tag: "Drums",
    title: "Acoustic Kit",
    meta: "[Description coming soon]",
    image: {
      src: cdnInstrumentImg("drums"),
      alt: "Acoustic Drums",
    },
    specs: [{ label: "Model", value: "Pearl Export EXX" }],
    detailSpecs: [
      { label: "Model", value: "Pearl Export" },
      { label: "Cymbals", value: "Zildjian ZBT" },
      { label: "Pedal", value: "Pearl P930 Demonator" },
    ],
    description: "[Description coming soon]",
  },

  {
    id: "edrums",
    tag: "Drums",
    title: "Electronic Drum Kit",
    meta: "[Description coming soon]",
    image: {
      src: cdnInstrumentImg("edrums"),
      alt: "Electronic Drum Kit",
    },
    specs: [{ label: "Model", value: "Alesis Nitro Mesh" }],
    detailSpecs: [{ label: "Model", value: "Alesis Nitro Mesh" }],
    description: "[Description coming soon]",
  },

  {
    id: "keyboard",
    tag: "Keys",
    title: "Keyboard / Piano",
    meta: "[Description coming soon]",
    image: {
      src: cdnInstrumentImg("piano"),
      alt: "Keyboard",
    },
    specs: [{ label: "Model", value: "Casio WK-110" }],
    detailSpecs: [
      { label: "Model", value: "Casio WK-110" },
      { label: "Keys", value: "76 keys" },
    ],
    description: "[Description coming soon]",
  },

  {
    id: "guitar",
    tag: "Guitar",
    title: "Electric Guitar",
    meta: "[Description coming soon]",
    image: {
      src: cdnInstrumentImg("guitar"),
      alt: "Electric Guitar",
    },
    specs: [{ label: "Brand", value: "Yamaha Pacifica 012" }],
    detailSpecs: [
      { label: "Brand", value: "Yamaha Pacifica 012" },
      { label: "Pickups", value: "Single Coil / Humbucker" },
      { label: "Strings", value: "Elixir 10–46 Nanoweb Coating" },
    ],
    description: "[Description coming soon]",
  },

  {
    id: "amp",
    tag: "Amplifier",
    title: "Guitar Amp",
    meta: "[Description coming soon]",
    image: {
      src: cdnInstrumentImg("amplifier"),
      alt: "Guitar Amplifier",
    },
    specs: [{ label: "Brand", value: "Laney AH-FREESTYLE" }],
    detailSpecs: [
      { label: "Brand", value: "Laney AH-FREESTYLE" },
      { label: "Power", value: "5W" },
    ],
    description: "[Description coming soon]",
  },
];
