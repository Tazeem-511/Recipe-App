"use client"
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import "./home.css";

export default function MainHome() {
  const [activeIndex, setActiveIndex] = useState(0);

  const sliderItems = [
    { 
      src: "/hero-1.jpg", 
      alt: "Delicious Dish 1", 
      title: "Hearty Italian Pasta", 
      description: "Experience the rich flavors of authentic Italian pasta tossed in a creamy tomato sauce, topped with fresh basil." 
    },
    { 
      src: "/hero-2.jpg", 
      alt: "Delicious Dish 2", 
      title: "Exotic Thai Curry", 
      description: "Indulge in the warm, aromatic spices of this coconut-based Thai curry, perfectly paired with steamed jasmine rice." 
    },
    { 
      src: "/hero-3.jpg", 
      alt: "Delicious Dish 3", 
      title: "Classic Chocolate Cake", 
      description: "Satisfy your sweet cravings with this moist, decadent chocolate cake layered with rich ganache." 
    }
  ];
  

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % sliderItems.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [sliderItems.length]);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Food Recipe - Delicious & Easy</title>
        <meta name="description" content="A collection of amazing food recipes." />
        <link rel="shortcut icon" href="/assets/favicon.svg" type="image/svg+xml" />
        
      </Head>

    

      {/* Full-screen image slider */}
      <section className="hero-slider">
        <div className="slider-container">
          {sliderItems.map((item, index) => (
            <div
              key={index}
              className={`slider-item ${index === activeIndex ? "active" : ""}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={1920}
                height={1080}
                className="slider-image"
              />
              <div className="slider-content">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <Link href="/recipe" className="btn btn-primary">
                  View Recipe
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation Links */}
     

      {/* Content Section */}
      <section className="content">
        <h2>Welcome to the World of Delicious Recipes!</h2>
        <p>Explore a variety of mouth-watering recipes and learn how to make them at home. From easy snacks to gourmet dishes, we have it all!</p>
        <p>Start your cooking adventure today and impress your friends and family with these delicious creations.</p>
      </section>
    </>
  );
}
