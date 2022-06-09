import pint_a from "assets/images/drinks/pint-a.svg";
import wine_175ml from "assets/images/drinks/wine-175ml.svg";
import spirit_double from "assets/images/drinks/spirit-double.svg";
import aperitivo80ml from "assets/images/drinks/aperitivo80ml.png";

export const drinksList = [
  {
    id: "lowStrengthPint",
    image: pint_a,
    container: "Pint",
    ml: 330,
    abv: 4.5,
    units: 2.3,
    kcal: 74
  },
  {
    id: "regularWine",
    image: wine_175ml,
    container: "Standard glass",
    ml: 125,
    abv: 12,
    units: 2.3,
    kcal: 83
  },
  {
    id: "doubleSprit",
    image: spirit_double,
    container: "Glass",
    ml: 40,
    abv: 40,
    units: 1.9,
    kcal: 88
  },
  {
    id: "aperitivo80ml",
    image: aperitivo80ml,
    container: "Glass",
    ml: 80,
    abv: 18,
    units: 1.2,
    kcal: 80
  }
];
