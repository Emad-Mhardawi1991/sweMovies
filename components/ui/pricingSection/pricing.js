import { CheckIcon } from "@heroicons/react/solid";
import Button from "../button/button";
import PricingCard from "../pricingCard/pricingCard";

import classes from "./pricing.module.css";

const PricingSection = () => {
  return (
    <div className={classes.pricingSection}>
      <div className="container ">
        <h5 className={classes.title}>Our Pricing Strategy</h5>

        <div className={classes.cards_container}>
          <PricingCard />
          <PricingCard />
          <PricingCard />
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
