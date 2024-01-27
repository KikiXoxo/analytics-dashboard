export default interface Orders {
  key: number;
  image: string;
  name: string;
  date: string;
  amount: string;
  status: "Paid" | "Refund";
}
