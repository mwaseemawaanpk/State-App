import React from "react";
import Mobile from "./Mobile";
const mobileData = [
  {
    name: "PIXEL 8 pro",
    specification: "Tensor G3, Andriod 14,OLD 120HD display",
    price: 930,
    photoName: "images/pixel8.jpg",
    soldOut: false,
  },
  {
    name: "IPHONE 15 PRO MAX",
    specification: "Bionic 16, Ios 8.7,Oled display",
    price: 1000,
    photoName: "images/iphone15.jpg",
    soldOut: false,
  },
  {
    name: "SAMSUNG S24 ULTRA",
    specification: "Snapdragon 8 gen 3, Andriod 14,Amoled display",
    price: 1400,
    photoName: "images/samsungs24.jpg",
    soldOut: false,
  },
  {
    name: "MOTROLA EDGE 40 5G",
    specification: "Dimensity 8020, Andriod 14,Oled 144 display",
    price: 650,
    photoName: "/images/motrola40.jpg",
    soldOut: false,
  },
  {
    name: "REDMI NOTE 13 PRO ULTRA",
    specification: "Dimensity 8020, Andriod 12,Oled 120 display",
    price: 600,
    photoName: "/images/redmiNote13.jpg",
    soldOut: true,
  },
  {
    name: "PIXEL 5",
    specification: "Snapdragon 765 5g, Andriod 14,Oled 90 display",
    price: 200,
    photo: "/pixel5.jpg",
    soldOut: false,
  },
];

const Menu = () => {
  return (
    <>
      <main className="menu">
        <h2>Available Stock</h2>
      </main>

      <div>
        {mobileData.map((i) => (
          <Mobile mobileObject={i} />
        ))}
      </div>
    </>
  );
};

export default Menu;
