import Orders from "../types/orders";
import person1 from "../assets/person1.png";
import person2 from "../assets/person1.png";
import person3 from "../assets/person1.png";
import person4 from "../assets/person1.png";
import person5 from "../assets/person1.png";

export const orders: Orders[] = [
  {
    key: 0,
    image: person1,
    name: "Marcus Bergson",
    date: "Nov 15, 2023",
    amount: "80,000",
    status: "Paid",
  },
  {
    key: 1,
    image: person2,
    name: "Jaydon Vaccaro",
    date: "Nov 15, 2023",
    amount: "150,000",
    status: "Refund",
  },
  {
    key: 2,
    image: person3,
    name: "Corey Schleifer",
    date: "Nov 14, 2023",
    amount: "87,000",
    status: "Paid",
  },
  {
    key: 3,
    image: person4,
    name: "Cooper Press",
    date: "Nov 14, 2023",
    amount: "100,000",
    status: "Refund",
  },
  {
    key: 4,
    image: person5,
    name: "Phillip Lubin",
    date: "Nov 13, 2023",
    amount: "78,000",
    status: "Paid",
  },
];
