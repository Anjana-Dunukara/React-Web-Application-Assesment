import React, { useState } from "react";
import { BiMinus } from "react-icons/bi";
import { BsPlusLg } from "react-icons/bs";

export default function SingleQuestion({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <div className="gap-[15px] bg-accent3">
        <article className="flex items-center justify-between p-4 lg:p-6">
          <h2
            className={`cursor-pointer font-medium font-inter text-[22px] leading-7 ${
              showAnswer ? "text-primary" : "text-black"
            }`}
            onClick={() => setShowAnswer(!showAnswer)}
          >
            {question}
          </h2>
          <ul>
            {!showAnswer && (
              <li>
                <button onClick={() => setShowAnswer(true)}>
                  <BsPlusLg />
                </button>
              </li>
            )}
            {showAnswer && (
              <li>
                <button onClick={() => setShowAnswer(false)}>
                  <BiMinus />
                </button>
              </li>
            )}
          </ul>
        </article>

        <article className={`${showAnswer && "p-4 lg:p-6"}`}>
          {showAnswer && (
            <p className="font-normal font-inter text-[18px] leading-7 text-primary">
              {answer}
            </p>
          )}
        </article>
      </div>
    </>
  );
}
