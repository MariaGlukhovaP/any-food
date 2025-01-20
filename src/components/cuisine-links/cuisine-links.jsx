"use client";

import { useState } from "react";
import { ButtonLink } from "../button-link/button-link";
import { RestaurantsTabs } from "../restaurants-tabs/restaurants-tabs";
import { LinksContainer } from "../links-container/links-container";
import { PageContainer } from "../page-container/page-container";

export const CuisineLinks = ({ restaurants }) => {
  const [selectedDescription, setSelectedDescription] = useState("Все");

  const matchingRestaurants =
    selectedDescription === "Все"
      ? restaurants
      : restaurants.filter(
          ({ description }) => description === selectedDescription
        );

  const handleSetSelectedDescription = (description) => {
    if (selectedDescription === description) {
      return;
    }
    setSelectedDescription(description);
  };

  return (
    <>
      <LinksContainer>
        <ButtonLink
          title="Все"
          key="all"
          onClick={() => handleSetSelectedDescription("Все")}
          isActive={selectedDescription === "Все"}
        />
        {restaurants.map(({ id, description }) => (
          <ButtonLink
            title={description}
            key={id}
            onClick={() => handleSetSelectedDescription(description)}
            isActive={description === selectedDescription}
          />
        ))}
      </LinksContainer>
      <PageContainer>
        <RestaurantsTabs restaurants={matchingRestaurants} />
      </PageContainer>
    </>
  );
};
