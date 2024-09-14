import React from "react";
import { MdPlayArrow } from "react-icons/md";
import ReactStars from "react-rating-stars-component";
import Banner_image from "../assest/banner_img.webp";
import GIF_1 from "../assest/GIF_1.gif";
import GIF_2 from "../assest/GIF_2.gif";
import meet from "../assest/meet_img.webp";
import Shopify_img from "../assest/shopify_monotone_black.svg";
import wcg_img from "../assest/why_choose_img.webp";


const Banner = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <>
      <section>
        <div className="banner">
        <div className="banner_p">
          <p className="Banner_p_1">
            Print on demand for your ecommerce business
          </p>
          <p className="Banner_p_2">
            Sign up for free and only pay for what you sell
          </p>
          <p className="Banner_p_3">
            Turn your passion into profit with the world's largest{" "}
            <a href="/">print on demand</a> network.
          </p>
          <div className="Banner_button">
          <button className="Banner_button_1">Get Started for free</button>
          <button className="Banner_button_2">See Our Products</button>
          </div>

          <img className="Shopify_img" src={Shopify_img} alt="Shopify_img" />
          <section className="Banner_section2">
          <div>
            
            <div className="Rating">
              
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={30}
                activeColor="#ffd700"
              />
              <a className="rating_no" href="/">4.8/5 based on 887 reviews</a>
            </div>
          </div>
        </section>
          </div>
          <img className="Banner_img" src={Banner_image} alt="banner_1" />
        </div>
      </section>

      <section className="services_section">
        <div className="services">
          <div>90%<p>of all orders are produced locally</p></div>
          <div>90%<p>of orders arrive within 5 days of ordering</p></div>
          <div>140+<p>print providers across 32 countries</p></div>
        </div>
      </section>

      <section className="wcg_section">
        <h2 className="wcg_h2">Why choose Gelato</h2>
        <div>
          <img className="wcg_img" src={wcg_img} alt="wcg_img" />
          <div className="wcg_inline">
            <p className="bold_p"><MdPlayArrow /> World's largest print-on-demand network</p>
            <p className="bold_p_g">140+ print partners in 32 countries. Gelato is a truly global service.</p>
            <p className="bold_p"><MdPlayArrow /> Sell globally, produce locally</p>
            <p className="bold_p_g" >Your products are produced close to your customers, wherever they are.</p>
            <p className="bold_p"><MdPlayArrow /> 100% free editing tools</p>
            <p className="bold_p_g">Create your custom products using our suite of free tools.</p>
            <p className="bold_p"><MdPlayArrow /> 60+ logistics partners</p>
            <p className="bold_p_g">Our global network of logistics partners ensures your products are delivered fast.</p>
            <p className="bold_p"><MdPlayArrow /> High-quality products</p>
            <p className="bold_p_g">We partner with the world's leading brands to ensure the best quality products.</p>
            <p className="bold_p"><MdPlayArrow /> Endless creativity with Shutterstock Images</p>
            <p className="bold_p_g">Access millions of images and graphics to create unique products you can sell in your store.</p>
            <p className="bold_p"><MdPlayArrow /> 1-click integration to the leading ecommerce platforms</p>
            <p className="bold_p_g">Connect your store to Gelato using our integrations with Shopify, Etsy and more.</p>
          </div>
        </div>
      </section>

      <section className="banner_last_section">
        <div className="banner_last">
          <p className="last_p">For print on demand sellers</p>
          <p className="last_p_1">Accelerate business growth with innovative design tools and apps</p>
          <p className="last_p_2">See how our cutting-edge solutions can help you reach new customers and maximize your profits.</p>
          <button className="last_button">Get Started</button>
        </div>
        
        <img className="gif_1" src={GIF_1} alt="GIF_1" />
      </section>
      <section>
        <div className="G_connect">
          <img src={GIF_2} alt="GIF_2" className="gif_2"/>
          <div className="connect">
          <p className="connect_p">For print producers</p>
          <p className="connect_p_1">GelatoConnect</p>
          <p className="connect_p_2">Elevate efficiency, cut costs, and seamlessly automate with our all-in-one software solution for the print industry</p>
          <button className="connect_button">Learn more</button>
        </div>
        </div>

      </section>
      <section>
        <div className="G_meet">
        <div className="meet">
          <p className="meet_p_1">Meet GelatoConnect at Printing United</p>
          <p className="meet_p_2">Meet us at Printing United from September 10-12 in Las Vegas. Book your meeting slot to discover the innovative ways GelatoConnect is transforming the landscape and driving success for businesses like yours.</p>
          <button className="meet_button">Book a meeting</button>
        </div>
          <img src={meet} alt="GIF_2" className="meet_img"/>
        </div>

      </section>
    </>
  );
};

export default Banner;

