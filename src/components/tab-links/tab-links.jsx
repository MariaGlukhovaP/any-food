"use client";

import { useState } from "react";
import { TabLink } from "../tab-link/tab-link";
import { RestaurantsTabs } from "../restaurants-tabs/restaurants-tabs";

import styles from "./tab-links.module.css";

export const TabLinks = ({ restaurants }) => {
  const [selectedDescription, setSelectedDescription] = useState("Все");

  const matchingRestaurants =
    selectedDescription === "Все"
      ? restaurants
      : restaurants.filter(
          ({ description }) => description === selectedDescription
        );

  console.log(matchingRestaurants);

  const handleSetSelectedDescription = (description) => {
    if (selectedDescription === description) {
      return;
    }
    setSelectedDescription(description);
  };

  return (
    <>
      <div className={styles.tabLinks}>
        <TabLink
          title="Все"
          key="all"
          onClick={() => handleSetSelectedDescription("Все")}
          isActive={selectedDescription === "Все"}
        />
        {restaurants.map(({ id, description }) => (
          <TabLink
            title={description}
            key={id}
            onClick={() => handleSetSelectedDescription(description)}
            isActive={description === selectedDescription}
          />
        ))}
      </div>
      <RestaurantsTabs restaurants={matchingRestaurants} />
    </>
  );
};
