import { sights } from "@/store/sights";

describe("sights", () => {
  describe("sights", () => {
    test("should match snapshot", () => {
      expect(sights).toMatchInlineSnapshot(`
Array [
  Object {
    "description": "The Chrysler Building is an Art Deco–style skyscraper located on the East Side of Midtown Manhattan in New York City, at the intersection of 42nd Street and Lexington Avenue in the Turtle Bay neighborhood of Manhattan.",
    "icon": "new-york-chrysler-building.svg",
    "id": 2459115,
    "location": "New York, USA",
    "name": "Chrysler Building",
  },
  Object {
    "description": "The Leaning Tower of Pisa or simply the Tower of Pisa is the campanile, or freestanding bell tower, of the cathedral of the Italian city of Pisa, known worldwide for its unintended tilt.",
    "icon": "italy-pisa-leaning-tower-of-pisa.svg",
    "id": 721943,
    "location": "Pisa, Italy",
    "name": "Leaning Tower of Pisa",
  },
  Object {
    "description": "The Ming tombs are a collection of mausoleums built by the emperors of the Ming dynasty of China. The first Ming emperor's tomb is located near his capital Nanjing. However, the majority of the Ming tombs are located in a cluster near Beijing and collectively known as the Thirteen Tombs of the Ming Dynasty.",
    "icon": "china-ming-dynasty-tombs.svg",
    "id": 2151330,
    "location": "Beijing, China",
    "name": "Ming Tombs",
  },
  Object {
    "description": "Chartres Cathedral, also known as the Cathedral of Our Lady of Chartres, is a Roman Catholic church in Chartres, France, about 80 km southwest of Paris. It is in the Gothic and Romanesque styles, mostly constructed between 1194 and 1220.",
    "icon": "france-chartres-cathedral.svg",
    "id": 615702,
    "location": "Chartres, France",
    "name": "Chartres Cathedral",
  },
  Object {
    "description": "The Brandenburg Gate is an 18th-century neoclassical monument in Berlin, built on the orders of Prussian king Frederick William II after the successful restoration of order during the early Batavian Revolution.",
    "icon": "germany-berlin-brandenburg-gate.svg",
    "id": 638242,
    "location": "Berlin, Germany",
    "name": "Brandenburg Gate",
  },
  Object {
    "description": "The Puerta de Alcalá is a Neo-classical monument in the Plaza de la Independencia in Madrid, Spain. It is regarded as the first modern post-Roman triumphal arch built in Europe, older than the similar monuments Arc de Triomphe in Paris and Brandenburg Gate in Berlin.",
    "icon": "madrid-alcala-gate.svg",
    "id": 766273,
    "location": "Madrid, Spain",
    "name": "Alcala Gate",
  },
  Object {
    "description": "The Hassan II Mosque or Grande Mosquée Hassan II is a mosque in Casablanca, Morocco. It is the largest mosque in Morocco, the second largest in Africa, and the 5th largest in the world. Its minaret is the world's tallest minaret at 210 metres. Completed in 1993, it was designed by Michel Pinseau and built by Bouygues.",
    "icon": "morocco-hassan-mosque.svg",
    "id": 1532755,
    "location": "Casablanca, Morocco",
    "name": "Hassan II Mosque",
  },
  Object {
    "description": "The Great Buddha of Thailand, also known as The Big Buddha, The Big Buddha of Thailand, Phra Buddha Maha Nawamin, and Mahaminh Sakayamunee Visejchaicharn, is the tallest statue in Thailand, the second-tallest statue in Southeast Asia, and the seventh-tallest in the world.",
    "icon": "thailand-great-buddha-of-thailand.svg",
    "id": 1225448,
    "location": "Wiset Chai Chan, Thailand",
    "name": "Great Buddha of Thailand",
  },
]
`);
    });
  });
});
