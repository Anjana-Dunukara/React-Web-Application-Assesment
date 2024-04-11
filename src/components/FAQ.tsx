import React, { useState } from "react";
import { questions } from "../constants/questions";
import SingleQuestion from "./SingleQuestion";

export default function App() {
  const [cards] = useState(questions);

  return (
    <>
      <section className="max-w-[846px] mx-auto py-20 px-4">
        <h1 className="text-center tracking-widest font-semibold mb-8 font-poppins text-[27px] leading-8 text-primary">
          Frequently asked questions
        </h1>

        <section className="grid grid-cols-1 gap-8">
          {cards.map((card, index) => (
            <SingleQuestion {...card} key={index} />
          ))}
        </section>
      </section>
    </>
  );
}
