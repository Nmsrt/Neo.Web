// js/data/gaming-data.js
// Single source of truth for gaming genres, games, and IGNs

const CLOUD_NAME = "dcnwpgvj5";
const CDN_IMAGE_BASE = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;

/**
 * CDN helper
 * - Accepts FULL Cloudinary URLs (recommended)
 * - Or publicId (case-sensitive)
 * - SAFE for .ico, .png, .jpg
 */
const cdnGameLogo = (publicIdOrUrl, size = 96) => {
  if (!publicIdOrUrl) return "";
  if (publicIdOrUrl.startsWith("http")) return publicIdOrUrl;
  return `${CDN_IMAGE_BASE}/q_auto,c_limit,w_${size}/${publicIdOrUrl}`;
};

const GAMING_GENRES = [
  {
    id: "fps-tactical",
    label: "FPS · Tactical Shooters",
    games: [
      {
        id: "valorant",
        title: "Valorant",
        type: "Riot",
        notes: "[Description coming soon]",
        url: "https://playvalorant.com/",
        imageSrc: cdnGameLogo("Valorant"),
        imageAlt: "Valorant",
      },
      {
        id: "cs2",
        title: "Counter-Strike 2",
        type: "Steam",
        notes: "[Description coming soon]",
        url: "https://www.counter-strike.net/",
        imageSrc: cdnGameLogo("CS2"),
        imageAlt: "Counter-Strike 2",
      },
      {
        id: "overwatch",
        title: "Overwatch",
        type: "Steam",
        notes: "[Description coming soon]",
        url: "https://overwatch.blizzard.com/",
        imageSrc: cdnGameLogo("Overwatch"),
        imageAlt: "Overwatch",
      },
      {
        id: "cod",
        title: "Call of Duty",
        type: "Steam",
        notes: "[Description coming soon]",
        url: "https://www.callofduty.com/",
        imageSrc: cdnGameLogo("CallOfDuty"),
        imageAlt: "Call of Duty",
      },
    ],
  },

  {
    id: "fps-zombie",
    label: "FPS · Zombie Shooters",
    games: [
      {
        id: "left4dead",
        title: "Left 4 Dead",
        type: "Steam",
        notes: "[Description coming soon]",
        url: "https://store.steampowered.com/app/500/Left_4_Dead/",
        imageSrc: cdnGameLogo(
          "https://res.cloudinary.com/dcnwpgvj5/image/upload/v1765598080/Left4Dead.jpg"
        ),
        imageAlt: "Left 4 Dead",
      },
      {
        id: "dying-light-1",
        title: "Dying Light",
        type: "Steam",
        notes: "[Description coming soon]",
        url: "https://dyinglightgame.com/",
        imageSrc: cdnGameLogo(
          "https://res.cloudinary.com/dcnwpgvj5/image/upload/v1765598083/DyingLight.ico"
        ),
        imageAlt: "Dying Light",
      },
      {
        id: "back4blood",
        title: "Back 4 Blood",
        type: "Steam",
        notes: "[Description coming soon]",
        url: "https://back4blood.com/",
        imageSrc: cdnGameLogo("Back4Blood"),
        imageAlt: "Back 4 Blood",
      },
    ],
  },

  {
    id: "singleplayer-story",
    label: "Single-Player & Story-Driven",
    games: [
      {
        id: "gta-v",
        title: "GTA V",
        type: "Steam",
        notes: "[Description coming soon]",
        url: "https://www.rockstargames.com/V/",
        imageSrc: cdnGameLogo("GTAV"),
        imageAlt: "GTA V",
      },
      {
        id: "once-human",
        title: "Once Human",
        type: "Steam",
        notes: "[Description coming soon]",
        url: "https://www.oncehuman.game/",
        imageSrc: cdnGameLogo("OnceHuman"),
        imageAlt: "Once Human",
      },
    ],
  },

  {
    id: "sports-racing",
    label: "Sports & Racing",
    games: [
      {
        id: "ea-fc",
        title: "EA FC / FIFA Series",
        type: "Steam",
        notes: "[Description coming soon]",
        url: "https://www.ea.com/games/ea-sports-fc",
        imageSrc: cdnGameLogo("EAFC"),
        imageAlt: "EA FC / FIFA Series",
      },
      {
        id: "efootball",
        title: "EFootball",
        type: "Steam",
        notes: "[Description coming soon]",
        url: "https://www.konami.com/efootball/",
        imageSrc: cdnGameLogo("EFootball"),
        imageAlt: "EFootball",
      },
    ],
  },

  {
    id: "fighting",
    label: "Fighting",
    games: [
      {
        id: "tekken-8",
        title: "Tekken 8",
        type: "Steam",
        notes: "[Description coming soon]",
        url: "https://tekken.com/",
        imageSrc:
          "https://res.cloudinary.com/dcnwpgvj5/image/upload/v1765598111/Tekken8.ico",
        imageAlt: "Tekken 8",
      },
      {
        id: "naruto-uns4",
        title: "Naruto Ultimate Ninja Storm 4",
        type: "Steam",
        notes: "[Description coming soon]",
        url:
          "https://store.steampowered.com/app/349040/NARUTO_SHIPPUDEN_Ultimate_Ninja_STORM_4/",
        imageSrc:
          "https://res.cloudinary.com/dcnwpgvj5/image/upload/v1765598101/NarutoUNS4.ico",
        imageAlt: "Naruto Ultimate Ninja Storm 4",
      },
    ],
  },

  {
    id: "rhythm-music",
    label: "Rhythm & Music",
    games: [
      {
        id: "osu",
        title: "Osu!",
        type: "PC",
        notes: "[Description coming soon]",
        url: "https://osu.ppy.sh/",
        imageSrc: cdnGameLogo("Osu"),
        imageAlt: "Osu!",
      },
    ],
  },

  {
    id: "moba",
    label: "MOBA",
    games: [
      {
        id: "mobile-legends",
        title: "Mobile Legends",
        type: "Mobile",
        notes: "[Description coming soon]",
        url: "https://mobilelegends.com/",
        imageSrc:
          "https://res.cloudinary.com/dcnwpgvj5/image/upload/v1765598082/MobileLegends.jpg",
        imageAlt: "Mobile Legends",
      },
    ],
  },
];

const GAMING_IGNS = [
  { platform: "Riot Games", name: "CallMeSenpai #1010" },
  { platform: "Steam", name: "CallMeSenpai" },
  { platform: "Epic Games", name: "Neo_Messi" },
  { platform: "Moonton", name: "." },
];
