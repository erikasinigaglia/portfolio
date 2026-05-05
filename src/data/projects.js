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
      "E-commerce e identità digitale.\nDue righe esempio: campi description e year sono opzionali, credo.",
    year: 2024,
    widthClass: "media-w-1",
    cover: {
      type: "video",
      src: "/media/camperlab/cover.mp4",
      alt: "Camperlab cover"
    },
    gallery: [
      { type: "video", src: "/media/camperlab/01.mp4", },
      { type: "video", src: "/media/camperlab/02.mp4", },
      { type: "image", src: "/media/camperlab/03.jpg", },
      { type: "video", src: "/media/camperlab/04.mp4", },
      { type: "image", src: "/media/camperlab/05.jpg", },
    ]
  },
  {
    id: "loewe",
    title: "Loewe Craft Prize 2025",
    url: "https://craftprizeexhibition.loewe.com/",
    widthClass: "media-w-2",
    cover: {
      type: "image",
      src: "/media/loewe/cover.jpg",
      alt: "Loewe Craft Prize 2025 cover"
    },
    gallery: [
      { type: "video", src: "/media/loewe/01.mp4", },
      { type: "video", src: "/media/loewe/02.mp4", },
      { type: "image", src: "/media/loewe/03.jpg", },
      { type: "video", src: "/media/loewe/04.mp4", },
      { type: "video", src: "/media/loewe/05.mp4", },
      { type: "image", src: "/media/loewe/06.jpg", },
    ]
  },
  {
    id: "ottolinger",
    title: "Ottolinger",
    url: "http://ottolinger.com/",
    widthClass: "media-w-1",
    cover: {
      type: "video",
      src: "/media/ottolinger/cover.mp4",
      alt: "Ottolinger cover"
    },
    gallery: [
      { type: "image", src: "/media/ottolinger/01.jpg" },
      { type: "video", src: "/media/ottolinger/02.mp4" },
      { type: "image", src: "/media/ottolinger/03.jpg" },
      { type: "video", src: "/media/ottolinger/04.mp4" },
      { type: "image", src: "/media/ottolinger/05.jpg" },
    ]
  },
  {
    id: "Valentina Cameranesi Sgroi",
    title: "Valentina Cameranesi Sgroi",
    url: "https://valentinacameranesisgroi.com/",
    widthClass: "media-w-4",
    cover: {
      type: "image",
      src: "/media/valentinacameranesi/cover.jpg",
      alt: "Valentina Cameranesi Sgroi cover"
    },
    gallery: [
      { type: "video", src: "/media/valentinacameranesi/01.mp4", },
      { type: "image", src: "/media/valentinacameranesi/02.jpg", },
      { type: "image", src: "/media/valentinacameranesi/03.jpg", },
      { type: "video", src: "/media/valentinacameranesi/04.mp4", },
      { type: "image", src: "/media/valentinacameranesi/05.jpg", },
      { type: "image", src: "/media/valentinacameranesi/06.jpg", },
    ]
  },
  {
    id: "cc-tapis",
    title: "cc-tapis",
    url: "https://cc-tapis.com/",
    widthClass: "media-w-3",
    cover: {
      type: "video",
      src: "media/cctapis/cover.mp4",
      alt: "cc-tapis cover"
    },
    gallery: [
      { type: "video", src: "media/cctapis/01.mp4", },
      { type: "video", src: "media/cctapis/02.mp4", },
      { type: "video", src: "media/cctapis/03.mp4", },
      { type: "image", src: "media/cctapis/04.jpg", },
      { type: "video", src: "media/cctapis/05.mp4", },
      { type: "video", src: "media/cctapis/06.mp4", },
    ]
  },
  {
    id: "nm3",
    title: "NM3",
    url: "https://nm3.xyz/",
    widthClass: "media-w-4",
    cover: {
      type: "image",
      src: "media/nm3/cover.jpg",
      alt: "NM3 cover"
    },
    gallery: [
      { type: "video", src: "/media/nm3/01.mp4" },
      { type: "image", src: "/media/nm3/02.jpg" },
      { type: "image", src: "/media/nm3/03.jpg" },
      { type: "video", src: "/media/nm3/04.mp4" },
      { type: "image", src: "/media/nm3/05.jpg" },
      { type: "image", src: "/media/nm3/06.jpg" },
    ]
  },
  {
    id: "truecolor",
    title: "Truecolor",
    description: "Progetto senza URL in elenco: titolo senza freccia ↗.",
    year: 2023,
    widthClass: "media-w-3",
    cover: {
      type: "video",
      src: "media/truecolor/cover.mov",
      alt: "Truecolor cover"
    },
    gallery: [
      { type: "image", src: img("north 01", "#e0e0db", "#5a5a56"), },
      { type: "image", src: img("north 02", "#d2d2cd", "#4d4d49"), },
      { type: "image", src: img("north 03", "#dbdbd6", "#565652"), },
      { type: "image", src: img("north 04", "#cecec9", "#4a4a47"), }
    ]
  },
  {
    id: "onsitestudio",
    title: "Onsitestudio",
    url: "https://onsitestudio.it/",
    widthClass: "media-w-4",
    cover: {
      type: "video",
      src: "media/onsitestudio/cover.mp4",
      alt: "Onsitestudio cover"
    },
    gallery: [
      { type: "image", src: "/media/onsitestudio/01.jpg", },
      { type: "image", src: "/media/onsitestudio/02.jpg", },
      { type: "image", src: "/media/onsitestudio/03.jpg", },
      { type: "image", src: "/media/onsitestudio/04.jpg", },
      { type: "image", src: "/media/onsitestudio/05.jpg", },
    ]
  },
  {
    id: "mdc",
    title: "Massimo De Carlo",
    url: "https://massimodecarlo.com/",
    cover: {
      type: "video",
      src: "media/mdc/cover.mp4",
      alt: "Massimo De Carlo cover"
    },
    gallery: [
      { type: "video", src: "/media/mdc/01.mp4", },
      { type: "video", src: "/media/mdc/02.mp4", },
      { type: "image", src: "/media/mdc/03.jpg", },
      { type: "image", src: "/media/mdc/04.jpg", },
    ]
  },
];

export const projects = rawProjects.map(resolveProjectMedia);
