import Button from "../button/button";
import { CheckIcon } from "@heroicons/react/solid";
import classes from "./pricingCard.module.css";

const PricingCard = () => {
  return (
    <div className={classes.pricingCard}>
      <h6 className={classes.card_title}>PREMIUM</h6>
      <div className={classes.price_box}>
        <p className={classes.price}>$7.99</p>
        <p>Monthly</p>
      </div>

      <ul className="w-full text-white flex flex-col space-y-6  ">
        <li className={classes.list_item}>
          <div className="flex gap-2 items-center ">
            <CheckIcon className={classes.icon} />
            <p> Video quality</p>
          </div>
          <p>good</p>
        </li>

        <li className={classes.list_item}>
          <div className="flex gap-2 items-center ">
            <CheckIcon className={classes.icon} />
            <p> Resolution</p>
          </div>
          <p>720p</p>
        </li>

        <li className={classes.list_item}>
          <div className="flex gap-2 items-center ">
            <CheckIcon className={classes.icon} />
            <p> Screens you can watch</p>
          </div>
          <p>1</p>
        </li>

        <li className={classes.list_item}>
          <div className="flex gap-2 items-center ">
            <CheckIcon className={classes.icon} />
            <p>Cancel anytime </p>
          </div>
        </li>
      </ul>

      <Button className="text-white mt-8">buy Now</Button>
    </div>
  );
};

export default PricingCard;
