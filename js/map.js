const PLACES = [
  // North America
  {
    id: "austin",
    name: "Austin, Texas",
    coords: [-97.7431, 30.2672],
    photo: "assets/map/austin.webp",
    reflection:
      "WHERE THE BRISKET MAKES ALL OTHER BARBECUE FEEL LIKE A PERSONAL ATTACK.",
  },
  {
    id: "dallas",
    name: "Dallas, Texas",
    coords: [-96.797, 32.7767],
    photo: "assets/map/dallas.webp",
    reflection: "BIGGER THAN EXPECTED — AND THAT WAS ALREADY THE EXPECTATION.",
  },
  {
    id: "fort-worth",
    name: "Fort Worth, Texas",
    coords: [-97.3208, 32.7555],
    photo: "assets/map/fort-worth.webp",
    reflection: "AUSTIN'S NEIGHBOUR. QUIETER, WHICH IS NOT A CRITICISM.",
  },
  {
    id: "houston",
    name: "Houston, Texas",
    coords: [-95.3698, 29.7604],
    photo: "assets/map/houston.webp",
    reflection: "THE FOOD SCENE ALONE IS A REASON TO STAY LONGER THAN PLANNED.",
  },
  {
    id: "new-york",
    name: "New York, USA",
    coords: [-74.006, 40.7128],
    photo: "assets/map/new-york.webp",
    reflection:
      "TOO LOUD, TOO FAST, EVERY FOOD FROM EVERYWHERE — I MEAN ALL OF THAT AS A COMPLIMENT.",
  },
  {
    id: "toronto",
    name: "Toronto, Canada",
    coords: [-79.3832, 43.6532],
    photo: "assets/map/toronto.webp",
    reflection:
      "HOME BASE, WHICH MEANS I PROBABLY APPRECIATE IT LESS THAN I SHOULD.",
  },
  {
    id: "elora",
    name: "Elora, Ontario",
    coords: [-80.4322, 43.686],
    photo: "assets/map/elora.webp",
    reflection:
      "A GORGE AND A SMALL TOWN, BOTH DOING THEIR BEST AND SUCCEEDING.",
  },
  {
    id: "vancouver",
    name: "Vancouver, Canada",
    coords: [-123.1207, 49.2827],
    photo: "assets/map/vancouver.webp",
    reflection:
      "THE MOUNTAINS BEHIND THE CITY ARE DOING SOMETHING UNFAIR TO EVERYONE'S EXPECTATIONS.",
  },
  {
    id: "niagara-falls",
    name: "Niagara Falls, Ontario",
    coords: [-79.0747, 43.0896],
    photo: "assets/map/niagara-falls.webp",
    reflection:
      "LOUDER THAN PHOTOS SUGGEST AND MORE BEAUTIFUL THAN THE TOURIST INFRASTRUCTURE DESERVES.",
  },
  {
    id: "muskoka",
    name: "Muskoka, Ontario",
    coords: [-79.3127, 45.0376],
    photo: "assets/map/muskoka.webp",
    reflection:
      "THE KIND OF PLACE THAT MAKES YOU UNDERSTAND WHY PEOPLE BUY COTTAGES.",
  },
  {
    id: "kawartha-lakes",
    name: "Kawartha Lakes, Ontario",
    coords: [-78.7466, 44.3481],
    photo: "assets/map/kawartha-lakes.webp",
    reflection: "WATER EVERYWHERE, WHICH IS EXACTLY THE POINT.",
  },
  {
    id: "algonquin-park",
    name: "Algonquin Park, Ontario",
    coords: [-78.3, 45.5],
    photo: "assets/map/algonquin-park.webp",
    reflection: "MORE TREES THAN I KNEW WHAT TO DO WITH — A WONDERFUL PROBLEM.",
  },
  {
    id: "montreal",
    name: "Montreal, Canada",
    coords: [-73.5673, 45.5017],
    photo: "assets/map/montreal.webp",
    reflection: "BILINGUAL AND BETTER FOR IT. THE BAGELS ARE NOT A DEBATE.",
  },
  {
    id: "barrie",
    name: "Barrie, Ontario",
    coords: [-79.6903, 44.3894],
    photo: "assets/map/barrie.webp",
    reflection:
      "A SOLID STOP ON THE WAY TO SOMEWHERE ELSE, AND OCCASIONALLY A DESTINATION IN ITS OWN RIGHT.",
  },
  {
    id: "blue-mountains",
    name: "Blue Mountains, Ontario",
    coords: [-80.4533, 44.5019],
    photo: "assets/map/blue-mountains.webp",
    reflection:
      "WHERE ONTARIANS GO WHEN THEY WANT TO FEEL LIKE THEY'VE SEEN A MOUNTAIN.",
  },
  {
    id: "tobermory",
    name: "Tobermory, Ontario",
    coords: [-81.6637, 45.2539],
    photo: "assets/map/tobermory.webp",
    reflection: "THE WATER IS ACTUALLY THAT COLOUR. IT IS NOT EDITED.",
  },
  {
    id: "brantford",
    name: "Brantford, Ontario",
    coords: [-80.2644, 43.1394],
    photo: "assets/map/brantford.webp",
    reflection:
      "SMALLER THAN THE HIGHWAY MAKES IT SEEM AND BIGGER THAN IT NEEDS TO BE.",
  },
  {
    id: "kingston",
    name: "Kingston, Ontario",
    coords: [-76.4813, 44.2312],
    photo: "assets/map/kingston.webp",
    reflection:
      "LIMESTONE BUILDINGS AND A LOT OF HISTORY NOT DOING MUCH TO HIDE.",
  },
  {
    id: "gibson",
    name: "Gibson, Ontario",
    coords: [-79.65, 45.27],
    photo: "assets/map/gibson.webp",
    reflection: "QUIET IN THE WAY THAT ONLY SMALL ONTARIO TOWNS UNDERSTAND.",
  },
  {
    id: "sechelt",
    name: "Sechelt, British Columbia",
    coords: [-123.75535324965688, 49.47416462801887],
    photo: "assets/map/sechelt.webp",
    reflection: "CRISP SALTY AIR BREEZE.",
  },

  // Vietnam
  {
    id: "hanoi",
    name: "Hanoi, Vietnam",
    coords: [105.8342, 21.0278],
    photo: "assets/map/hanoi.webp",
    reflection:
      "7AM, PLASTIC STOOL, BANH MI — THE REST OF THE DAY DID NOT MATTER AFTER THAT.",
  },
  {
    id: "saigon",
    name: "Saigon, Vietnam",
    coords: [106.6297, 10.8231],
    photo: "assets/map/saigon.webp",
    reflection:
      "FASTER THAN HANOI, LOUDER THAN MOST CITIES, AND SOMEHOW STILL CHARMING.",
  },
  {
    id: "danang",
    name: "Da Nang, Vietnam",
    coords: [108.2022, 16.0544],
    photo: "assets/map/danang.webp",
    reflection:
      "BEACH ON ONE SIDE, MOUNTAINS ON THE OTHER — GEOLOGY GAVE THIS PLACE AN UNFAIR ADVANTAGE.",
  },
  {
    id: "nha-trang",
    name: "Nha Trang, Vietnam",
    coords: [109.1967, 12.2388],
    photo: "assets/map/nha-trang.webp",
    reflection: "SALT AND SUN AND SEAFOOD — THE EQUATION WORKS.",
  },
  {
    id: "hoi-an",
    name: "Hội An, Vietnam",
    coords: [108.328, 15.8801],
    photo: "assets/map/hoi-an.webp",
    reflection:
      "LANTERNS AT NIGHT AND TAILOR SHOPS EVERYWHERE — BOTH ARE THE POINT.",
  },
  {
    id: "quang-ngai",
    name: "Quảng Ngãi, Vietnam",
    coords: [108.8043, 15.1203],
    photo: "assets/map/quang-ngai.webp",
    reflection:
      "OFF THE TOURIST CIRCUIT, WHICH MEANS YOU ACTUALLY SEE HOW PEOPLE LIVE.",
  },
  {
    id: "quy-nhon",
    name: "Quy Nhơn, Vietnam",
    coords: [109.2198, 13.7829],
    photo: "assets/map/quy-nhon.webp",
    reflection:
      "UNDERRATED IN THE WAY THAT MEANS IT WON'T STAY THAT WAY FOR LONG.",
  },
  {
    id: "pleiku",
    name: "Pleiku, Vietnam",
    coords: [108.0004, 13.9716],
    photo: "assets/map/pleiku.webp",
    reflection:
      "HIGHLANDS AND RED SOIL AND A CITY THAT KNOWS EXACTLY WHAT IT IS.",
  },
  {
    id: "ca-mau",
    name: "Cà Mau, Vietnam",
    coords: [105.15, 9.1769],
    photo: "assets/map/ca-mau.webp",
    reflection:
      "THE SOUTHERNMOST POINT, WHERE THE LAND RUNS OUT OF IDEAS AND BECOMES THE SEA.",
  },
  {
    id: "rach-gia",
    name: "Rạch Giá, Vietnam",
    coords: [105.0797, 10.0128],
    photo: "assets/map/rach-gia.webp",
    reflection:
      "A PORT CITY THAT SMELLS LIKE FISH AND HISTORY — BOTH IN A GOOD WAY.",
  },
  {
    id: "chau-doc",
    name: "Châu Đốc, Vietnam",
    coords: [105.1186, 10.7059],
    photo: "assets/map/chau-doc.webp",
    reflection:
      "FLOATING MARKETS AND A BORDER CROSSING AND THE SENSE OF BEING SOMEWHERE VERY SPECIFIC.",
  },
  {
    id: "vung-tau",
    name: "Vũng Tàu, Vietnam",
    coords: [107.0843, 10.346],
    photo: "assets/map/vung-tau.webp",
    reflection: "SAIGON'S WEEKEND ESCAPE, AND YOU UNDERSTAND IMMEDIATELY WHY.",
  },
  {
    id: "phan-thiet",
    name: "Phan Thiết, Vietnam",
    coords: [108.0994, 10.9279],
    photo: "assets/map/phan-thiet.webp",
    reflection: "WHITE SAND AND STRONG WIND AND A LIGHTHOUSE DOING ITS JOB.",
  },
  {
    id: "bac-ninh",
    name: "Bắc Ninh, Vietnam",
    coords: [106.0763, 21.1863],
    photo: "assets/map/bac-ninh.webp",
    reflection:
      "CERAMICS AND CRAFT VILLAGES AND THE QUIET INDUSTRY OF A PLACE THAT MAKES THINGS.",
  },
  {
    id: "bac-giang",
    name: "Bắc Giang, Vietnam",
    coords: [106.1975, 21.2731],
    photo: "assets/map/bac-giang.webp",
    reflection: "LYCHEES IN SEASON AND A TOWN THAT TAKES THAT VERY SERIOUSLY.",
  },
  {
    id: "moc-chau",
    name: "Mộc Châu, Vietnam",
    coords: [104.6791, 20.8346],
    photo: "assets/map/moc-chau.webp",
    reflection:
      "TEA FIELDS ON ROLLING HILLS AND THE FEELING OF ALTITUDE SITTING IN YOUR LUNGS.",
  },
  {
    id: "ta-xua",
    name: "Tà Xùa, Vietnam",
    coords: [104.26, 21.08],
    photo: "assets/map/ta-xua.webp",
    reflection:
      "CLOUDS BELOW THE PEAK AND THE PECULIAR FEELING OF STANDING ABOVE THE WEATHER.",
  },
  {
    id: "sapa",
    name: "Sa Pa, Vietnam",
    coords: [103.8437, 22.3364],
    photo: "assets/map/sapa.webp",
    reflection:
      "RICE TERRACES CARVED INTO MOUNTAINS BY PEOPLE WHO UNDERSTOOD THE LANDSCAPE BETTER THAN I EVER WILL.",
  },
  {
    id: "lao-cai",
    name: "Lào Cai, Vietnam",
    coords: [103.97, 22.4806],
    photo: "assets/map/lao-cai.webp",
    reflection:
      "THE GATEWAY TO THE HIGHLANDS AND A BORDER TOWN WITH THINGS TO SAY.",
  },
  {
    id: "hue",
    name: "Huế, Vietnam",
    coords: [107.5905, 16.4637],
    photo: "assets/map/hue.webp",
    reflection:
      "THE OLD IMPERIAL CAPITAL, STILL ACTING LIKE IT AND GETTING AWAY WITH IT.",
  },
  {
    id: "hai-phong",
    name: "Hải Phòng, Vietnam",
    coords: [106.6881, 20.8449],
    photo: "assets/map/hai-phong.webp",
    reflection:
      "A PORT CITY WITH ITS OWN PERSONALITY THAT HANOI AND SAIGON HAVE CAUSED PEOPLE TO OVERLOOK.",
  },
  {
    id: "ha-long",
    name: "Hạ Long, Vietnam",
    coords: [107.0843, 20.9101],
    photo: "assets/map/ha-long.webp",
    reflection:
      "LIMESTONE KARSTS RISING FROM THE SEA — THE GEOLOGY DEGREE MADE THIS ALMOST PERSONAL.",
  },
  {
    id: "cat-ba",
    name: "Cát Bà, Vietnam",
    coords: [107.05, 20.7267],
    photo: "assets/map/cat-ba.webp",
    reflection:
      "THE ISLAND AT THE EDGE OF THE BAY, QUIETER THAN HẠ LONG BY ENOUGH TO MATTER.",
  },
  {
    id: "kon-tum",
    name: "Kon Tum, Vietnam",
    coords: [107.9983, 14.3544],
    photo: "assets/map/kon-tum.webp",
    reflection:
      "CENTRAL HIGHLANDS AND WOODEN CHURCHES AND THE SENSE OF A PLACE THAT PRESERVED ITSELF.",
  },
  {
    id: "dak-lak",
    name: "Đắk Lắk, Vietnam",
    coords: [108.0376, 12.6667],
    photo: "assets/map/dak-lak.webp",
    reflection:
      "COFFEE CAPITAL OF VIETNAM AND A VERY VALID REASON TO SPEND AN AFTERNOON.",
  },
  {
    id: "ninh-binh",
    name: "Ninh Bình, Vietnam",
    coords: [105.9745, 20.2506],
    photo: "assets/map/ninh-binh.webp",
    reflection:
      "LIMESTONE KARSTS ON LAND THIS TIME, WITH RICE FIELDS INSTEAD OF SEA — GEOLOGY, AGAIN.",
  },
];

//  MAPBOX INIT
mapboxgl.accessToken =
  "pk.eyJ1Ijoic25lczE5eHgiLCJhIjoiY21scmgybmMxMGJyMjNlcG41cHllencyeSJ9.RTIqSU1jFU7TiidODxkttA";

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/light-v11",
  center: [20, 20],
  zoom: 1.6,
  minZoom: 1,
  maxZoom: 14,
  attributionControl: false,
  projection: "mercator",
});

map.addControl(
  new mapboxgl.AttributionControl({ compact: true }),
  "bottom-right",
);

new ResizeObserver(() => map.resize()).observe(document.getElementById("map"));

//  STATE
let currentPlace = null;
const markerElements = {};

const ZOOM_THRESHOLD = 5;
const ZOOM_IN_LEVEL = 8;

//  MARKERS

function createPinEl(place) {
  const wrapper = document.createElement("div");
  wrapper.className = "map-pin-wrapper";
  wrapper.setAttribute("role", "button");
  wrapper.setAttribute("tabindex", "0");
  wrapper.setAttribute("aria-label", place.name);

  const head = document.createElement("div");
  head.className = "map-pin-head";
  head.textContent = "·";

  const stem = document.createElement("div");
  stem.className = "map-pin-stem";

  wrapper.appendChild(head);
  wrapper.appendChild(stem);

  return wrapper;
}

function addMarkers() {
  PLACES.forEach((place) => {
    const el = createPinEl(place);
    markerElements[place.id] = el;

    new mapboxgl.Marker({ element: el, anchor: "bottom" })
      .setLngLat(place.coords)
      .addTo(map);

    el.addEventListener("click", (e) => {
      e.stopPropagation();
      handlePinClick(place);
    });
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handlePinClick(place);
      }
    });
  });
}

//  PANEL
const panel = document.getElementById("info-panel");
const panelBody = document.getElementById("panel-body");
const panelPlace = document.getElementById("panel-place");
const panelImg = document.getElementById("panel-img");
const panelImgWrap = document.getElementById("panel-img-wrap");
const panelText = document.getElementById("panel-text");

function populatePanel(place) {
  panelPlace.textContent = place.name;
  panelText.textContent = place.reflection;

  if (place.photo) {
    panelImgWrap.style.display = "";
    panelImg.alt = place.name;
    panelImg.src = place.photo;
    panelImg.onerror = () => {
      panelImgWrap.style.display = "none";
    };
  } else {
    panelImgWrap.style.display = "none";
  }
}

function updateActivePins(place) {
  Object.values(markerElements).forEach((el) => el.classList.remove("active"));
  if (place) {
    markerElements[place.id].classList.add("active", "visited");
  }
}

function panTo(place) {
  map.easeTo({
    center: place.coords,
    offset: [0, window.innerHeight * 0.2],
    duration: 700,
  });
}

function handlePinClick(place) {
  if (map.getZoom() < ZOOM_THRESHOLD) {
    map.flyTo({
      center: place.coords,
      zoom: ZOOM_IN_LEVEL,
      duration: 1100,
      essential: true,
    });
    return;
  }

  if (currentPlace?.id === place.id) {
    closePanel();
    return;
  }

  openPanel(place);
}

function openPanel(place) {
  const wasOpen = !!currentPlace;
  currentPlace = place;

  updateActivePins(place);
  panTo(place);

  if (wasOpen) {
    panelBody.classList.add("swapping");
    setTimeout(() => {
      populatePanel(place);
      panelBody.classList.remove("swapping");
    }, 160);
  } else {
    populatePanel(place);
    document.body.classList.add("panel-open");
    panel.setAttribute("aria-hidden", "false");
  }
}

function closePanel() {
  if (!currentPlace) return;
  currentPlace = null;

  updateActivePins(null);
  document.body.classList.remove("panel-open");
  panel.setAttribute("aria-hidden", "true");
}

//  EVENT LISTENERS
document.getElementById("panel-close").addEventListener("click", closePanel);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closePanel();
});

map.on("click", () => {
  if (currentPlace) closePanel();
});


const ROUTES = [
  {
    id: "route-america",
    color: "#c9b99a",
    width: 1.8,
    opacity: 0.7,
    placeIds: ["toronto", "new-york", "houston", "austin", "fort-worth", "dallas"],
    delay: 600,
    msPerSeg: 900,
  },
  {
    // Ontario circuit
    id: "route-ontario",
    color: "#7fb8c8",
    width: 1.8,
    opacity: 0.65,
    placeIds: [
      "toronto", "elora", "brantford", "blue-mountains", "barrie",
      "muskoka", "gibson", "algonquin-park", "kawartha-lakes",
      "kingston", "montreal", "niagara-falls", "toronto",
    ],
    delay: 1000,
    msPerSeg: 380,
  },
  {
    // Vietnam north → south
    id: "route-vietnam",
    color: "#e8a0b0",
    width: 1.8,
    opacity: 0.65,
    placeIds: [
      "hanoi", "ninh-binh", "hue", "danang", "hoi-an",
      "quang-ngai", "quy-nhon", "nha-trang", "phan-thiet",
      "saigon", "ca-mau",
    ],
    delay: 1400,
    msPerSeg: 380,
  },
];

function coordsFor(id) {
  const p = PLACES.find((pl) => pl.id === id);
  return p ? p.coords : null;
}

function animateRoute(route) {
  const allCoords = route.placeIds.map(coordsFor).filter(Boolean);
  if (allCoords.length < 2) return;

  const sourceId = route.id + "-src";
  const layerId = route.id + "-layer";

  map.addSource(sourceId, {
    type: "geojson",
    data: {
      type: "Feature",
      geometry: { type: "LineString", coordinates: [allCoords[0]] },
    },
  });

  const beforeId = map.getLayer("road-label") ? "road-label" : undefined;

  map.addLayer(
    {
      id: layerId,
      type: "line",
      source: sourceId,
      layout: { "line-cap": "round", "line-join": "round" },
      paint: {
        "line-color": route.color,
        "line-width": route.width,
        "line-dasharray": [3, 4],
        "line-opacity": route.opacity,
      },
    },
    beforeId,
  );

  let segIdx = 0;
  let t = 0;
  let lastTs = null;

  function draw(ts) {
    if (!lastTs) lastTs = ts;
    t += (ts - lastTs) / route.msPerSeg;
    lastTs = ts;

    while (t >= 1 && segIdx < allCoords.length - 2) {
      t -= 1;
      segIdx++;
    }

    if (segIdx >= allCoords.length - 1) {
      map.getSource(sourceId).setData({
        type: "Feature",
        geometry: { type: "LineString", coordinates: allCoords },
      });
      return;
    }

    const a = allCoords[segIdx];
    const b = allCoords[segIdx + 1];
    const f = Math.min(t, 1);
    const tip = [a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f];

    map.getSource(sourceId).setData({
      type: "Feature",
      geometry: {
        type: "LineString",
        coordinates: [...allCoords.slice(0, segIdx + 1), tip],
      },
    });

    requestAnimationFrame(draw);
  }

  setTimeout(() => requestAnimationFrame(draw), route.delay);
}

//  MAP LOAD
map.on("load", () => {
  if (map.getLayer("water")) {
    map.setPaintProperty("water", "fill-color", "#f5c8d8");
  }

  ROUTES.forEach(animateRoute);
  addMarkers();
});

//  LOADER
document.addEventListener("DOMContentLoaded", () => {
  runLoader("assets", "mapLoaded").then(() => {
    document.body.classList.add("loaded");
    setTimeout(() => {
      document.body.classList.add("nav-settled");
    }, 1200);
  });
});
