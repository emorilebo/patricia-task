import React from "react";
import Activity from "./Activity";
import ActivityHeading from "./ActivityHeading";
import WidgetHeader from "./WidgetHeader";

const activities = [
  {
    id: 1,
    imageUrl: "/amazon.png",
    name: "Amazon",
    date: "Just now",
    amount: "$377.23",
  },
  {
    id: 2,
    imageUrl: "/nike.jpg",
    name: "Nike",
    date: "Today",
    amount: "$237,737.55",
  },
  {
    id: 3,
    imageUrl: "/starbucks.png",
    name: "Starbucks",
    date: "Yesterday",
    amount: "$873,873,834.3",
  },
  {
    id: 4,
    imageUrl: "/netflix.png",
    name: "Netflix",
    date: "June 17",
    amount: "$599",
  },
  {
    id: 5,
    imageUrl: "/apples1.png",
    name: "Apple",
    date: "June 15",
    amount: "$875",
  },
  {
    id: 6,
    imageUrl: "/starbucks.png",
    name: "Starbucks",
    date: "June 13",
    amount: "$244.55",
  },
  {
    id: 7,
    imageUrl: "/nike.jpg",
    name: "Nike",
    date: "June 11",
    amount: "$452",
  },
  {
    id: 8,
    imageUrl: "/apples.png",
    name: "Apple",
    date: "June 09",
    amount: "$990",
  },
];

function Widget() {
  return (
    <div className="bg-gray-100">
      <WidgetHeader/>
      <div className="bg-white m-5 rounded-md p-4">
        <ActivityHeading />
        <div className="pt-5">
          {activities?.map(({ id, imageUrl, name, date, amount }) => (
            <Activity
              key={id}
              imageUrl={imageUrl}
              name={name}
              date={date}
              amount={amount}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Widget;
