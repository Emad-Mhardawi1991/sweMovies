import Image from "next/image";
import Button from "../button/button";
import { CalculatorIcon, ClockIcon } from '@heroicons/react/solid'
import classes from "./hero.module.css";

const Hero = () => {
  return (
    <div className={classes.hero}>
      <div className={classes.overlay}></div>
      <div className={` container ${classes.hero_content}`}>
        <div className={classes.text_content}>
          <h6>SweMovies</h6>
          <h2 className={classes.hero_text}>
            Unlimited <span className="text-primary_red">Movie</span>, TV Shows,
            & More.
          </h2>
          <ul className={classes.banners}>
            <p className={classes.age_banner}>PG 18</p>
            <p className={classes.quality_banner}>HD</p>
            <p className={classes.category}>Romance, Drama</p>
            <div className={classes.time}>
              <div className={classes.release_date}>
                
                <CalculatorIcon className={classes.icon}/>
                <p>2021</p>
              </div>
              <div className={classes.duration}>
              <ClockIcon className={classes.icon}/>
                <p>128 Min</p>
              </div>
            </div>
          </ul>
          <Button className={classes.button}>Watch Now</Button>
        </div>
        <div className={classes.image_box}>
          <img alt="movie" src="/images/hero-img.jpg" />
        </div>
      </div>
    </div>
  );
};

export default Hero;