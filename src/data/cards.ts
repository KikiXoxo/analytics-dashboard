import {
  rotate3d,
  shoppingCart,
  boxTick,
  coin,
  graph1,
  graph2,
  graph3,
  graph4,
} from "../assets/";

import Card from "../types/card";

export const cards: Card[] = [
  {
    key: 0,
    image: boxTick,
    graph: graph1,
    heading: "Total Order",
    value: 350,
    icon: "up",
    trend: 23.5,
    currency: false,
  },
  {
    key: 1,
    image: rotate3d,
    graph: graph2,
    heading: "Total Refund",
    value: 270,
    icon: "down",
    trend: 23.5,
    currency: false,
  },
  {
    key: 2,
    image: shoppingCart,
    graph: graph3,
    heading: "Average Sales",
    value: 1567,
    icon: "down",
    trend: 23.5,
    currency: false,
  },
  {
    key: 3,
    image: coin,
    graph: graph4,
    heading: "Total Income",
    value: 350.0,
    icon: "up",
    trend: 23.5,
    currency: true,
  },
];
