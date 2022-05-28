import React from "react";

const Card = ({cardTitle, para, cardIcon}) => {
  return (
    <div>
      <div class="card lg:card-side bg-base-100 shadow-xl">
        <div class="card-body">
            <p>{cardIcon}</p>
          <h2 class="text-2xl font-bold text-center">{cardTitle}</h2>
          <p className="text-center">{para}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
