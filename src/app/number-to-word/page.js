import React from "react";
import NumberToWord from "../componets/NumberToWordConverter";
export default function NmberToWord() {

  console.log("change");
  return (
    <article className="mt-8 prose md:prose-lg lg:prose-xl  max-w-none">
      <h1>Number to word converter</h1>
      <NumberToWord />
      <p>
        For years parents have espoused the health benefits of eating garlic
        bread with cheese to their children, with the food earning such an
        iconic status in our culture that kids will often dress up as warm,
        cheesy loaf for Halloween.
      </p>
      <p>
        But a recent study shows that the celebrated appetizer may be linked to
        a series of rabies cases springing up around the country.
      </p>
    </article>
  );
}
