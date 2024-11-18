import { useState } from "react";
import { Codecs } from "../codecs/codecs";
import { Count } from "../count/count";
import { Reviews } from "../reviews/reviews";

export const Headphone = ({ headphone }) => {
  const { name, reviews, codecs } = headphone;
  const [state, setState] = useState();

  if (!name) {
    return null;
  }

  return (
    <div>
      <h2>{name}</h2>
      {Boolean(reviews.length) && <Reviews reviews={reviews} />}
      <Codecs codecs={codecs} state={state} />
      <Count onChange={console.log} />
    </div>
  );
};
