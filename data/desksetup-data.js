// js/data/desksetup-data.js
// Central source of truth for desk setup items (CDN-powered)

const CLOUD_NAME = "dcnwpgvj5";
const CDN_IMAGE_BASE = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;

/**
 * CDN helper for desk setup images
 * - Uses Cloudinary public IDs (case-sensitive)
 * - Matches your current uploads (root IDs like "monitor", "webcam")
 */
const cdnDeskImg = (publicId, w = 900) =>
  `${CDN_IMAGE_BASE}/q_auto,f_auto,c_limit,w_${w}/${publicId}`;

window.DESK_ITEMS = [
  {
    id: "laptop",
    tag: "Core Machine",
    title: "Laptop",
    meta: "[Description coming soon]",
    image: {
      src: cdnDeskImg("laptop", 1200),
      alt: "Laptop",
    },
    specs: [
      { label: "Model", value: "Acer Predator Helios 16" },
      { label: "CPU", value: "Intel i9-13900HX" },
      { label: "GPU", value: "NVIDIA RTX 4070" },
      { label: "RAM", value: "32GB DDR5 (5600MHz)" },
    ],
  },

  {
    id: "primary-monitor",
    tag: "Display",
    title: "Primary Monitor",
    meta: "[Description coming soon]",
    image: {
      src: cdnDeskImg("monitor", 1200),
      alt: "Primary monitor",
    },
    specs: [
      { label: "Model", value: "ASUS TUF VG249Q1A" },
      { label: "Size", value: "23.8-inch" },
      { label: "Refresh Rate", value: "165Hz" },
      { label: "Resolution", value: "FHD (1920×1080)" },
    ],
  },

  {
    id: "keyboard",
    tag: "Input",
    title: "Keyboard",
    meta: "[Description coming soon]",
    image: {
      src: cdnDeskImg("keyboard", 1200),
      alt: "Keyboard",
    },
    specs: [
      { label: "Model", value: "Wooting 60HE+" },
      { label: "Polling Rate", value: "1000 Hz" },
      { label: "Switches", value: "Lekker Hall Effect switches" },
    ],
  },

  {
    id: "mouse",
    tag: "Navigation",
    title: "Mouse",
    meta: "[Description coming soon]",
    image: {
      src: cdnDeskImg("mouse", 1200),
      alt: "Mouse",
    },
    specs: [
      { label: "Model", value: "Logitech G Pro X Superlight" },
      { label: "Polling Rate", value: "1000 Hz" },
      { label: "Mouse Skates", value: "Corepad Mouse Skatez" },
    ],
  },

  {
    id: "mousepad",
    tag: "Navigation",
    title: "Mousepad",
    meta: "[Description coming soon]",
    image: {
      src: cdnDeskImg("mousepad", 1200),
      alt: "Mousepad",
    },
    specs: [
      { label: "Model", value: "Artisan Zero" },
      { label: "Type", value: "Soft" },
      { label: "Size", value: "XL" },
    ],
  },

  {
    id: "microphone",
    tag: "Audio",
    title: "Microphone",
    meta: "[Description coming soon]",
    image: {
      src: cdnDeskImg("microphone", 1200),
      alt: "Microphone",
    },
    specs: [
      { label: "Model", value: "HyperX Solocast" },
      { label: "Type", value: "Electret condenser microphone" },
      { label: "Bit Depth & Sample Rate", value: "16-bit / 48 kHz" },
    ],
  },

  {
    id: "audio-interface",
    tag: "Audio",
    title: "Audio Interface",
    meta: "[Description coming soon]",
    image: {
      src: cdnDeskImg("audiointerface", 1200),
      alt: "Audio Interface",
    },
    specs: [
      { label: "Model", value: "Focusrite Scarlett 2i2 (3rd Gen)" },
      { label: "Inputs", value: "2 Combo Inputs (XLR / ¼″ TRS)" },
      {
        label: "Outputs",
        value:
          "2 Line Outputs (¼″ TRS, L/R)<br>1 Headphone Output (¼″ TRS, stereo)",
        allowHtml: true,
      },
    ],
  },

  {
    id: "headphones",
    tag: "Audio",
    title: "Headphones",
    meta: "[Description coming soon]",
    image: {
      src: cdnDeskImg("headphones", 1200),
      alt: "Headphones",
    },
    specs: [
      { label: "Model", value: "Audio-Technica M50X" },
      { label: "Driver", value: "45 mm dynamic drivers" },
      { label: "Frequency Response", value: "15 Hz – 28,000 Hz" },
      { label: "Impedance", value: "38 Ω" },
    ],
  },

  {
    id: "inears",
    tag: "Audio",
    title: "In-ear Monitors",
    meta: "[Description coming soon]",
    image: {
      src: cdnDeskImg("in-ear", 1200),
      alt: "In-ear Monitors",
    },
    specs: [
      { label: "Model", value: "KZ ZSN Pro X" },
      {
        label: "Driver",
        value: "1× Dynamic (10 mm) + 1× Balanced Armature",
      },
      { label: "Frequency Response", value: "7 Hz – 40,000 Hz" },
      { label: "Impedance", value: "25 Ω" },
    ],
  },

  {
    id: "webcam",
    tag: "Extras",
    title: "Webcam",
    meta: "[Description coming soon]",
    image: {
      src: cdnDeskImg("webcam", 1200),
      alt: "Webcam",
    },
    specs: [
      { label: "Model", value: "Logitech Brio 100" },
      { label: "Resolution", value: "1080p @ 30 FPS" },
      { label: "Field of View", value: "58°" },
    ],
  },

  {
    id: "monitor-light",
    tag: "Extras",
    title: "Monitor Light",
    meta: "[Description coming soon]",
    image: {
      src: cdnDeskImg("monitorlight", 1200),
      alt: "Monitor Light Bar",
    },
    specs: [{ label: "Model", value: "Baseus Iwok 3" }],
  },

  {
    id: "controller",
    tag: "Extras",
    title: "Controller",
    meta: "[Description coming soon]",
    image: {
      src: cdnDeskImg("controller", 1200),
      alt: "Xbox Wireless Controller – Gold Shadow Special Edition",
    },
    specs: [
      {
        label: "Model",
        value: "Xbox Wireless Controller – Gold Shadow Special Edition",
      },
    ],
  },
];
