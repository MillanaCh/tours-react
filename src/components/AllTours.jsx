import React from "react";
import Tour from "./Tour";
export default function AllTours({AllDataTours}) {
  return (
    <section>
      <div className="title">
        <h1>Our Tours</h1>
        <div className="underline"></div>
      </div>
      <div>
        {AllDataTours.map((el) => {
          return <Tour key={el.id} {...AllDataTours}/>;
        })}
      </div>
    </section>
  );
}
