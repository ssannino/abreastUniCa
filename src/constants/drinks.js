import pint_a from "assets/images/drinks/pint-a.svg";
import pint_b from "assets/images/drinks/pint-b.svg";
import beercan_500ml from "assets/images/drinks/beercan-500ml.svg";
import wine_125ml from "assets/images/drinks/wine-125ml.svg";
import wine_175ml from "assets/images/drinks/wine-175ml.svg";
import wine_250ml from "assets/images/drinks/wine-250ml.svg";
import wine_bottle_750ml from "assets/images/drinks/wine-bottle-750ml.svg";
import champagne from "assets/images/drinks/champagne.svg";
import alcopop_275ml from "assets/images/drinks/alcopop-275ml.svg";
import spirit_small_glass from "assets/images/drinks/spirit-small-glass.svg";
import spirit_double from "assets/images/drinks/spirit-double.svg";
import cream_liqeur from "assets/images/drinks/cream-liqueur.svg";
import fortified_wine from "assets/images/drinks/fortified-wine.svg";
import pimms from "assets/images/drinks/pimms.svg";

export const drinksList = [
  {
    id: "lowStrengthPint",
    image: pint_a,
    container: "Pint",
    ml: 568,
    abv: 4,
    units: 2.3,
    kcal: 227
  },
  {
    id: "higherStrengthPint",
    image: pint_b,
    container: "Pint",
    ml: 568,
    abv: 7,
    units: 4,
    kcal: 341
  },
  {
    id: "lowStrengthCan",
    image: beercan_500ml,
    container: "Bottle",
    ml: 500,
    abv: 4,
    units: 2,
    kcal: 200
  },
  {
    id: "higherStrengthCan",
    image: beercan_500ml,
    container: "Small can",
    ml: 440,
    abv: 7,
    units: 3.5,
    kcal: 300
  },
  {
    id: "smallWine",
    image: wine_125ml,
    container: "Small glass",
    ml: 125,
    abv: 13,
    units: 1.6,
    kcal: 95
  },
  {
    id: "regularWine",
    image: wine_175ml,
    container: "Standard glass",
    ml: 175,
    abv: 13,
    units: 2.3,
    kcal: 133
  },
  {
    id: "largeWine",
    image: wine_250ml,
    container: "Large glass",
    ml: 250,
    abv: 13,
    units: 3.2,
    kcal: 190
  },
  {
    id: "bottleWine",
    image: wine_bottle_750ml,
    container: "Bottle",
    ml: 750,
    abv: 13,
    units: 9.8,
    kcal: 570
  },
  {
    id: "champagne",
    image: champagne,
    container: "Glass",
    ml: 175,
    abv: 12,
    units: 2.1,
    kcal: 147
  },
  {
    id: "alcopop",
    image: alcopop_275ml,
    container: "Bottle",
    ml: 275,
    abv: 4,
    units: 1.1,
    kcal: 143
  },
  {
    id: "singleSpirit",
    image: spirit_small_glass,
    container: "Glass",
    ml: 25,
    abv: 38,
    units: 0.9,
    kcal: 48
  },
  {
    id: "doubleSprit",
    image: spirit_double,
    container: "Glass",
    ml: 50,
    abv: 38,
    units: 1.9,
    kcal: 96
  },
  {
    id: "creamliqueur",
    image: cream_liqeur,
    container: "Glass",
    ml: 50,
    abv: 17,
    units: 0.8,
    kcal: 153
  },
  {
    id: "fortified_wine",
    image: fortified_wine,
    container: "Glass",
    ml: 50,
    abv: 20,
    units: 1,
    kcal: 68
  },
  {
    id: "pimms",
    image: pimms,
    container: "Glass",
    ml: 100,
    abv: 25,
    units: 1.2,
    kcal: 160
  }
];
