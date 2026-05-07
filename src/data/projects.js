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
      type: "hls",
      src: "https://vz-cedda648-3b2.b-cdn.net/6a7994e9-2863-4a62-892a-92fa911b9d18/playlist.m3u8",
      poster: "./media/camperlab/cover-poster.webp",
      alt: "Camperlab cover"
    },
    gallery: [
      { type: "hls", src: "https://vz-cedda648-3b2.b-cdn.net/5afb904f-07e4-4533-ae83-b32b32694b06/playlist.m3u8", poster: "./media/camperlab/01-poster.webp" },
      { type: "hls", src: "https://vz-cedda648-3b2.b-cdn.net/a11374d0-5f36-4809-bd0c-d1e289db7a22/playlist.m3u8", poster: "./media/camperlab/02-poster.webp" },
      { type: "image", src: "./media/camperlab/03.webp", },
      { type: "hls", src: "https://vz-cedda648-3b2.b-cdn.net/230b6df1-b7da-4e45-a299-0fbba5faba0e/playlist.m3u8", poster: "./media/camperlab/04-poster.webp" },
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
      { type: "hls", src: "https://vz-cedda648-3b2.b-cdn.net/bf243f42-d103-4aa7-8664-7d1c530ecda0/playlist.m3u8", poster: "./media/loewe/01-poster.webp"},
      { type: "hls", src: "https://vz-cedda648-3b2.b-cdn.net/70fabf6f-3084-4032-b8d8-53180ff3232c/playlist.m3u8", poster: "./media/loewe/02-poster.webp"},
      { type: "image", src: "./media/loewe/03.webp", },
      { type: "hls", src: "https://vz-cedda648-3b2.b-cdn.net/776f9bec-8d31-4777-84e7-3b246b876166/playlist.m3u8", poster: "./media/loewe/04-poster.webp"},
      { type: "hls", src: "https://vz-cedda648-3b2.b-cdn.net/7ed539af-8924-4fb5-a624-69a15d795608/playlist.m3u8", poster: "./media/loewe/05-poster.webp"},
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
      type: "hls",
      src: "https://vz-cedda648-3b2.b-cdn.net/d3fe5653-3f40-4620-887a-384ee6170ce3/playlist.m3u8",
      poster: "./media/ottolinger/cover-poster.webp",
      alt: "Ottolinger cover"
    },
    gallery: [
      { type: "image", src: "./media/ottolinger/01.webp" },
      { type: "hls", src: "https://vz-cedda648-3b2.b-cdn.net/ddcc54c8-eb96-4478-afb6-2476d88aa8b2/playlist.m3u8", poster: "./media/ottolinger/02-poster.webp" },
      { type: "image", src: "./media/ottolinger/03.webp" },
      { type: "hls", src: "https://vz-cedda648-3b2.b-cdn.net/c5502c82-5120-4abb-b54e-b3d075bf5a3a/playlist.m3u8", poster: "./media/ottolinger/04-poster.webp" },
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
      { type: "hls", src: "https://vz-cedda648-3b2.b-cdn.net/01f77dc6-5433-4060-9bb9-8853e355a752/playlist.m3u8", poster: "./media/valentinacameranesi/01-poster.webp" },
      { type: "image", src: "./media/valentinacameranesi/02.webp", },
      { type: "image", src: "./media/valentinacameranesi/03.webp", },
      { type: "hls", src: "https://vz-cedda648-3b2.b-cdn.net/4d16a11b-1348-4e8a-ab3c-4861234a4ddf/playlist.m3u8", poster: "./media/valentinacameranesi/04-poster.webp"},
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
      type: "hls",
      src: "./media/cctapis/cover.mp4",
      poster: "./media/cctapis/cover-poster.webp",
      alt: "cc-tapis cover"
    },
    gallery: [
      { type: "hls", src: "https://vz-cedda648-3b2.b-cdn.net/e4a4e876-080e-4767-a676-5273bbb70586/playlist.m3u8", poster: "./media/cctapis/01-poster.webp"},
      { type: "hls", src: "https://vz-cedda648-3b2.b-cdn.net/1043724b-d428-4fe6-868b-f6a75f0b9225/playlist.m3u8", poster: "./media/cctapis/02-poster.webp"},
      { type: "hls", src: "https://vz-cedda648-3b2.b-cdn.net/3b0c5009-3a0b-4add-ae15-51daac9c5289/playlist.m3u8", poster: "./media/cctapis/03-poster.webp"},
      { type: "image", src: "./media/cctapis/04.webp", },
      { type: "hls", src: "https://vz-cedda648-3b2.b-cdn.net/73fcc956-9686-4368-9039-8451a0dc5012/playlist.m3u8", poster: "./media/cctapis/05-poster.webp"},
      { type: "hls", src: "https://vz-cedda648-3b2.b-cdn.net/986e09f0-c772-457b-9a48-22c65628c806/playlist.m3u8", poster: "./media/cctapis/06-poster.webp"},
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
      { type: "hls", src: "https://vz-cedda648-3b2.b-cdn.net/97a40406-6ed5-436a-9fdb-86939ae2abff/playlist.m3u8", poster: "./media/nm3/01-poster.webp" },
      { type: "image", src: "./media/nm3/02.webp" },
      { type: "image", src: "./media/nm3/03.webp" },
      { type: "hls", src: "https://vz-cedda648-3b2.b-cdn.net/12a55183-7064-4542-8da1-9ec2c512bfc4/playlist.m3u8", poster: "./media/nm3/04-poster.webp" },
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
      src: "https://vz-cedda648-3b2.b-cdn.net/1abb1574-dfe5-41d7-9b42-dc4db92e45ac/playlist.m3u8",
      poster: "./media/truecolor/cover-poster.webp",
      alt: "Truecolor cover"
    },
    gallery: [
      { type: "hls", src: "https://vz-cedda648-3b2.b-cdn.net/316e6cf6-e9b2-40b5-9989-5a88bdfee033/playlist.m3u8", poster: "./media/truecolor/01-poster.webp" },
      { type: "hls", src: "https://vz-cedda648-3b2.b-cdn.net/a41987ca-47f4-4c58-b729-b738eb0a0587/playlist.m3u8", poster: "./media/truecolor/02-poster.webp" },
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
      type: "hls",
      src: "https://vz-cedda648-3b2.b-cdn.net/21efc3d4-0405-4fe5-808b-89b65ef8484f/playlist.m3u8",
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
      type: "hls",
      src: "https://vz-cedda648-3b2.b-cdn.net/6bffb911-309f-48a2-84ad-99b9e69d2956/playlist.m3u8",
      poster: "./media/mdc/cover-poster.webp",
      alt: "Massimo De Carlo cover"
    },
    gallery: [
      { type: "hls", src: "https://vz-cedda648-3b2.b-cdn.net/1e4990ab-fd7c-457e-92c7-5bcc6854f0c0/playlist.m3u8", poster: "./media/mdc/01-poster.webp" },
      { type: "hls", src: "https://vz-cedda648-3b2.b-cdn.net/1a8a23e4-6cd1-4701-a586-ea614a6e487f/playlist.m3u8", poster: "./media/mdc/02-poster.webp" },
      { type: "image", src: "./media/mdc/03.webp", },
      { type: "image", src: "./media/mdc/04.webp", },
    ]
  },
];

export const projects = rawProjects.map(resolveProjectMedia);
