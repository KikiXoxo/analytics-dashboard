export default function randomNum(min: number, max: number): number {
  return Math.round(Math.random() * (max - min)) + min;
}
