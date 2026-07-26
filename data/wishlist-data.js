// js/data/wishlist-data.js
// Central source of truth for wishlist / dream-buy items (CDN-powered)

const WISH_CLOUD_NAME = "dcnwpgvj5";
const WISH_CDN_IMAGE_BASE = `https://res.cloudinary.com/${WISH_CLOUD_NAME}/image/upload`;

/**
 * CDN helper for wishlist images
 * - Upload images to Cloudinary, then reference by public ID below.
 * - Leave `image` off an item to show a "photo coming soon" placeholder.
 *
 * Per-item fields (all optional except title/tag):
 *   title  — name shown in list + modal
 *   tag    — category group
 *   specs  — [{ label, value }]  shown as dim line in list + spec table in modal
 *   image  — { src: cdnWishImg("publicId"), alt: "..." }   shown in modal
 *   desc   — paragraph shown under specs in modal
 *
 * Example with photo + description:
 *   {
 *     id: "boots", tag: "Football", title: "Shoes",
 *     specs: [{ label: "Model", value: "Adidas F50" }],
 *     image: { src: cdnWishImg("f50_boots"), alt: "Adidas F50" },
 *     desc: "Messi World Cup 2026 colourway. Lightweight speed boot.",
 *   }
 */
const cdnWishImg = (publicId, w = 900) =>
  `${WISH_CDN_IMAGE_BASE}/q_auto,f_auto,c_limit,w_${w}/${publicId}`;

// Items within each category are ordered by perceived price, high → low.
window.WISHLIST_ITEMS = [
  // ── Football ──
  {
    id: "boots",
    tag: "Football",
    title: "Shoes",
    specs: [{ label: "Model", value: "Adidas F50 (Messi World Cup 2026 edition)" }],
    image: { src: "../assets/wishlist/f50-ultimo-tango.png", alt: "Adidas F50 Ultimo Tango" },
  },
  {
    id: "ball",
    tag: "Football",
    title: "Ball",
    specs: [{ label: "Model", value: "TBD" }],
  },

  // ── Music ──
  {
    id: "e-drums",
    tag: "Music",
    title: "E-Drum Set",
    specs: [{ label: "Model", value: "TBD" }],
  },
  {
    id: "acoustic-drums",
    tag: "Music",
    title: "Acoustic Drum Set",
    specs: [{ label: "Model", value: "TBD" }],
  },
  {
    id: "bass",
    tag: "Music",
    title: "Bass Guitar",
    specs: [{ label: "Model", value: "TBD" }],
  },
  {
    id: "multifx",
    tag: "Music",
    title: "Guitar Multi-Effects Pedal",
    specs: [{ label: "Model", value: "TBD" }],
  },
  {
    id: "midi",
    tag: "Music",
    title: "MIDI Keyboard",
    specs: [{ label: "Model", value: "TBD" }],
  },
  {
    id: "sm57",
    tag: "Music",
    title: "Microphone",
    specs: [{ label: "Model", value: "Shure SM57" }],
    image: { src: "../assets/wishlist/shure-sm57.png", alt: "Shure SM57" },
  },

  // ── Desk Setup ──
  {
    id: "desktop",
    tag: "Desk Setup",
    title: "Desktop PC",
    specs: [{ label: "Model", value: "TBD" }],
  },
  {
    id: "monitor",
    tag: "Desk Setup",
    title: "Monitor",
    specs: [
      { label: "Model", value: "TBD" },
      { label: "Refresh Rate", value: "240Hz or higher" },
    ],
  },
  {
    id: "chair",
    tag: "Desk Setup",
    title: "Office Chair",
    specs: [{ label: "Model", value: "TBD" }],
  },
  {
    id: "mouse",
    tag: "Desk Setup",
    title: "Mouse",
    specs: [{ label: "Model", value: "Logitech G X2 Superstrike" }],
    image: { src: "../assets/wishlist/logitech-g-x2-superstrike.png", alt: "Logitech G X2 Superstrike" },
  },
  {
    id: "webcam",
    tag: "Desk Setup",
    title: "Webcam",
    specs: [{ label: "Model", value: "TBD" }],
  },
  {
    id: "mic-arm",
    tag: "Desk Setup",
    title: "Mic Arm",
    specs: [{ label: "Model", value: "TBD" }],
  },
];
