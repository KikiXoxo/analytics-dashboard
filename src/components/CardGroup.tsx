import Card from "../components/Card";
import { cards } from "../data/cards";

export default function CardGroup() {
  return (
    <div className="flex justify-between flex-wrap gap-6 md:w-2/5">
      {cards.map(
        ({ key, image, graph, heading, value, icon, trend, currency }) => (
          <Card
            key={key}
            image={image}
            graph={graph}
            heading={heading}
            value={value}
            icon={icon}
            trend={trend}
            currency={currency}
          />
        )
      )}
    </div>
  );
}
