function svgPlaceholder(label, bg = "#d8d8d3", fg = "#4f4f4c") {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1600" viewBox="0 0 1200 1600">
      <rect width="1200" height="1600" fill="${bg}" />
      <line x1="120" y1="240" x2="1080" y2="240" stroke="${fg}" stroke-width="2" opacity="0.35" />
      <line x1="120" y1="1360" x2="1080" y2="1360" stroke="${fg}" stroke-width="2" opacity="0.35" />
      <text
        x="600"
        y="820"
        text-anchor="middle"
        fill="${fg}"
        font-family="Helvetica, Arial, sans-serif"
        font-size="42"
        letter-spacing="3"
      >
        ${label}
      </text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

const img = (label, bg, fg) => svgPlaceholder(label, bg, fg);

function resolvePublicSrc(src) {
  if (typeof src !== "string" || !src.startsWith("/")) return src;
  return `${import.meta.env.BASE_URL}${src.slice(1)}`;
}

function resolveProjectMedia(project) {
  const mapItem = (item) =>
    item && typeof item.src === "string"
      ? { ...item, src: resolvePublicSrc(item.src) }
      : item;

  return {
    ...project,
    cover: mapItem(project.cover),
    gallery: project.gallery.map(mapItem)
  };
}

const rawProjects = [
  // Width controls in homepage feed:
  // - widthClass: "media-w-1" | "media-w-2" | "media-w-3"
  // - width: any CSS value (e.g. "260px", "18vw"). If set, overrides widthClass.
  {
    id: "camperlab",
    title: "Camperlab",
    url: "https://www.camperlab.com/",
    description:
      "Website design and design system development for camperlab.com\n done at giga",
    year: 2025,
    widthClass: "media-w-1",
    cover: {
      type: "video",
      src: "./media/camperlab/cover.mp4",
      poster: "./media/camperlab/cover-poster.webp",
      alt: "Camperlab cover"
    },
    gallery: [
      // { type: "video", src: "./media/camperlab/01.mp4", poster: "./media/camperlab/01-poster.webp" },
      { type: "hls", src: "https://vz-90e2339e-a8a.b-cdn.net/85e245eb-0ea5-4a5f-8a4f-043508af6d7d/playlist.m3u8", poster: "./media/camperlab/01-poster.webp" },
      { type: "video", src: "./media/camperlab/02.mp4", poster: "./media/camperlab/02-poster.webp" },
      { type: "image", src: "./media/camperlab/03.webp", },
      { type: "video", src: "./media/camperlab/04.mp4", poster: "./media/camperlab/04-poster.webp" },
      { type: "image", src: "./media/camperlab/05.webp", },
    ]
  },
  {
    id: "loewe",
    title: "Loewe Craft Prize 2025",
    url: "https://craftprizeexhibition.loewe.com/",
    description:
    "Digital twin exhibition design and UX interface for Loewe Craft Prize 2025 in Madrid \n done at giga \n art direction by Valentina Cameranesi Sgroi ",
    year: 2025,
    widthClass: "media-w-2",
    cover: {
      type: "image",
      src: "./media/loewe/cover.webp",
      alt: "Loewe Craft Prize 2025 cover"
    },
    gallery: [
      { type: "video", src: "./media/loewe/01.mp4", poster: "./media/loewe/01-poster.webp"},
      { type: "video", src: "./media/loewe/02.mp4", poster: "./media/loewe/02-poster.webp"},
      { type: "image", src: "./media/loewe/03.webp", },
      { type: "video", src: "./media/loewe/04.mov", poster: "./media/loewe/04-poster.webp"},
      { type: "video", src: "./media/loewe/05.mp4", poster: "./media/loewe/05-poster.webp"},
      { type: "image", src: "./media/loewe/06.webp", },
    ]
  },
  {
    id: "ottolinger",
    title: "Ottolinger",
    url: "http://ottolinger.com/",
    description:
    "Design system and website design for ottolinger.com \n done at giga \n art direction by Kasper-Florio",
    year: 2023,
    widthClass: "media-w-1",
    cover: {
      type: "video",
      src: "./media/ottolinger/cover.mp4",
      poster: "./media/ottolinger/cover-poster.webp",
      alt: "Ottolinger cover"
    },
    gallery: [
      { type: "image", src: "./media/ottolinger/01.webp" },
      { type: "video", src: "./media/ottolinger/02.mp4", poster: "./media/ottolinger/02-poster.webp" },
      { type: "image", src: "./media/ottolinger/03.webp" },
      { type: "video", src: "./media/ottolinger/04.mp4", poster: "./media/ottolinger/04-poster.webp" },
      { type: "image", src: "./media/ottolinger/05.webp" },
    ]
  },
  {
    id: "Valentina Cameranesi Sgroi",
    title: "Valentina Cameranesi Sgroi",
    url: "https://valentinacameranesisgroi.com/",
    description:
    "Personal portfolio for art director Valentina Cameranesi Sgroi \n done at giga",
    year: 2026,
    widthClass: "media-w-4",
    cover: {
      type: "image",
      src: "./media/valentinacameranesi/cover.webp",
      alt: "Valentina Cameranesi Sgroi cover"
    },
    gallery: [
      { type: "video", src: "./media/valentinacameranesi/01.mp4", poster: "./media/valentinacameranesi/01-poster.webp" },
      { type: "image", src: "./media/valentinacameranesi/02.webp", },
      { type: "image", src: "./media/valentinacameranesi/03.webp", },
      { type: "video", src: "./media/valentinacameranesi/04.mp4", poster: "./media/valentinacameranesi/04-poster.webp"},
      { type: "image", src: "./media/valentinacameranesi/05.webp", },
      { type: "image", src: "./media/valentinacameranesi/06.webp", },
    ]
  },
  {
    id: "cc-tapis",
    title: "cc-tapis",
    url: "https://cc-tapis.com/",
    description:
    "Digital identity and visual languages development + website design for rug company cc-tapis \n done at giga",
    year: 2024,
    widthClass: "media-w-3",
    cover: {
      type: "video",
      src: "./media/cctapis/cover.mp4",
      poster: "./media/cctapis/cover-poster.webp",
      alt: "cc-tapis cover"
    },
    gallery: [
      { type: "video", src: "./media/cctapis/01.mp4", poster: "./media/cctapis/01-poster.webp"},
      { type: "video", src: "./media/cctapis/02.mp4", poster: "./media/cctapis/02-poster.webp"},
      { type: "video", src: "./media/cctapis/03.mp4", poster: "./media/cctapis/03-poster.webp"},
      { type: "image", src: "./media/cctapis/04.webp", },
      { type: "video", src: "./media/cctapis/05.mp4", poster: "./media/cctapis/05-poster.webp"},
      { type: "video", src: "./media/cctapis/06.mp4", poster: "./media/cctapis/06-poster.webp"},
    ]
  },
  {
    id: "nm3",
    title: "NM3",
    url: "https://nm3.xyz/",
    description:
    "Website design for nm3.com \n done at giga",
    year: 2024,
    widthClass: "media-w-4",
    cover: {
      type: "image",
      src: "./media/nm3/cover.webp",
      alt: "NM3 cover"
    },
    gallery: [
      { type: "video", src: "./media/nm3/01.mp4", poster: "./media/nm3/01-poster.webp" },
      { type: "image", src: "./media/nm3/02.webp" },
      { type: "image", src: "./media/nm3/03.webp" },
      { type: "video", src: "./media/nm3/04.mp4", poster: "./media/nm3/04-poster.webp" },
      { type: "image", src: "./media/nm3/05.webp" },
      { type: "image", src: "./media/nm3/06.webp" },
    ]
  },
  {
    id: "truecolor",
    title: "Truecolor",
    description: "Temporary website design and identity for truecolor.com \n done at giga",
    year: 2025,
    widthClass: "media-w-3",
    cover: {
      type: "video",
      src: "./media/truecolor/cover.mov",
      poster: "./media/truecolor/cover-poster.webp",
      alt: "Truecolor cover"
    },
    gallery: [
      { type: "video", src: "./media/truecolor/01.mov", poster: "./media/truecolor/01-poster.webp" },
      { type: "video", src: "./media/truecolor/02.mov", poster: "./media/truecolor/02-poster.webp" },
    ]
  },
  {
    id: "onsitestudio",
    title: "Onsitestudio",
    url: "https://onsitestudio.it/",
    description: "Identity and website design for architecture studio onsitestudio.it\n done at giga",
    year: 2025,
    widthClass: "media-w-4",
    cover: {
      type: "video",
      src: "./media/onsitestudio/cover.mp4",
      poster: "./media/onsitestudio/cover-poster.webp",
      alt: "Onsitestudio cover"
    },
    gallery: [
      { type: "image", src: "./media/onsitestudio/01.webp", },
      { type: "image", src: "./media/onsitestudio/02.webp", },
      { type: "image", src: "./media/onsitestudio/03.webp", },
      { type: "image", src: "./media/onsitestudio/04.webp", },
      { type: "image", src: "./media/onsitestudio/05.webp", },
    ]
  },
  {
    id: "mdc",
    title: "Massimo De Carlo",
    url: "https://massimodecarlo.com/",
    description: "Digital platform for contemporary art gallery massimodecarlo.com\n done at giga",
    year: 2023,
    cover: {
      type: "video",
      src: "./media/mdc/cover.mp4",
      poster: "./media/mdc/cover-poster.webp",
      alt: "Massimo De Carlo cover"
    },
    gallery: [
      { type: "video", src: "./media/mdc/01.mp4", poster: "./media/mdc/01-poster.webp" },
      { type: "video", src: "./media/mdc/02.mp4", poster: "./media/mdc/02-poster.webp" },
      { type: "image", src: "./media/mdc/03.webp", },
      { type: "image", src: "./media/mdc/04.webp", },
    ]
  },
];

export const projects = rawProjects.map(resolveProjectMedia);
