import React, { useState } from 'react'
// import pinfood from '../assets/images/pin-food.jpg';
import food from "../../assets/images/pin-pis/food.jpg";
import jew from "../../assets/images/jew.jpg";
import nail from "../../assets/images/nail.jpg";
import goals from "../../assets/images/goals.jpg";
import woman1 from "../../assets/images/woman1.jpg";
import hair from "../../assets/images/hair.jpg";
import drinks from "../../assets/images/drinks.jpg";
import photography from "../../assets/images/photography.jpg";
import books from "../../assets/images/books.jpg";
import flowers from "../../assets/images/flowers.jpg";
import songs from "../../assets/images/songs.jpg";
import quotes from "../../assets/images/quotes.jpg";
import nature from "../../assets/images/nature.jpg";
import bodycare from "../../assets/images/bodycare.jpg";
import loveq from "../../assets/images/loveq.jpg";
import recipe from "../../assets/images/recipe.jpg";
import anime from "../../assets/images/anime.jpg";
import drawing from "../../assets/images/drawing.jpg";
import makeup from "../../assets/images/makeup.jpg";
import selfie from "../../assets/images/selfie.jpg";
import styleinspo from "../../assets/images/styleinspo.jpg";
import lipmakeup from "../../assets/images/lipmakeup.jpg";
import cute from "../../assets/images/cute.jpg";
import homedecor from "../../assets/images/homedecor.jpg";
import piercings from "../../assets/images/piercings.jpg";
import wallpaper from "../../assets/images/wallpaper.jpg";
import furniture from "../../assets/images/furniture.jpg";
import african from "../../assets/images/african.jpg";
import art from "../../assets/images/art.jpg";
import writing from "../../assets/images/writing.jpg";
import football from "../../assets/images/football.jpg";
import nba from "../../assets/images/nba.jpg";
import car from "../../assets/images/car.jpg";
import beards from "../../assets/images/beards.jpg";
import tattoo from "../../assets/images/tattoo.jpg";
import architecture from "../../assets/images/architecture.jpg";
import travel from "../../assets/images/travel.jpg";
import sneakers from "../../assets/images/sneakers.jpg";
import phoneaccessories from "../../assets/images/phoneaccessories.jpg";
import videogames from "../../assets/images/videogames.jpg";
import technology from "../../assets/images/technology.jpg";
import menfashion from "../../assets/images/menfashion.jpg";
import cartoon from "../../assets/images/cartoon.jpg";
import man from "../../assets/images/man.jpg";
import meme from "../../assets/images/meme.jpg";







const Categories = () => {
  const categories = [
    "Food",
    "Makeup",
    "Jewelry",
    "Nail",
    "Relationship",
    "Piercings",
    "Art",
    "Ankara",

    "Men",
    "Beauty",
    "Gentle",
    "Hair",
    "Style",
    "Photography",
    "Books",
    "Flowers",
    "Songs",
    "Quotes",
    "Nature",
    "Love",
    "Body",
    "Recipes",
    "Anime",
    "Drawing",
    "Drinks",
    "Selfie",
    
    "Lip",
    "Animals",
    "Home",
    "Meme",
    "Wallpapers",
    "Furniture",


    "Writing",
    "Cartoon",
    "Football",
    "NBA",
    "Cars",
    "Beards",
    "Tattoo",
    "Architecture",
    "Travel",
    "Sneakers",
    "Phone",
    "Games",
    "Technology",
  ];

  const [selectedCategories, setSelectedCategories] = useState([]);

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected Categories:", selectedCategories);
  };

  const categoryImages = {
    Jewelry: jew,
    Anime: anime,
    Meme: meme,
    Architecture: architecture,
    Sneakers: sneakers,
    Travel: travel,
    Cartoon: cartoon,
    Men: menfashion,
    Technology: technology,
    Phone: phoneaccessories,
    Games: videogames,
    Tattoo: tattoo,
    Tattoo: tattoo,
    Writing: writing,
    Football: football,
    Animals: cute,
    Gentle: man,
    NBA: nba,
    Cars: car,
    Art: art,
    Ankara: african,
    Beards: beards,
    Home: homedecor,
    Piercings: piercings,
    Makeup: makeup,
    Style: styleinspo,
    Lip: lipmakeup,
    Food: food,
    Wallpapers: wallpaper,
    Nail: nail,
    Relationship: goals,
    Beauty: woman1,
    Drinks: drinks,
    Furniture: furniture,
    Hair: hair,
    Photography: photography,
    Books: books,
    Selfie: selfie,
    Flowers: flowers,
    Songs: songs,
    Nature: nature,
    Quotes: quotes,
    Love: loveq,
    Body: bodycare,
    Recipes: recipe,
    Drawing: drawing,
  }

  return (
    <div className='flex flex-col border-2 h-[92vh] w-[60vw] mt-5 ml-72 rounded-2xl shadow-lg'>
      <form onSubmit={handleSubmit}>
        <div className=' flex flex-col items-center mt-10'>
          <p className='text-[1.7rem] font-semibold'>What are you interested in?</p>
          <p className='w-[30vw] text-center'>This will customize your home feed</p>
        </div>
        <div className='grid grid-cols-5 gap-y-4 ml-5 h-[52vh] overflow-y-scroll mt-7'>
          {categories.map((category) => (
            <button type='button' key={category} onClick={() => toggleCategory(category)} className={`relative w-[9rem] h-[9rem] border rounded-2xl ${selectedCategories.includes(category) ? "hover:border-2 border-black" : ""}`} style={{
              backgroundImage: `url(${categoryImages[category] || ""})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}>
              <div className='absolute inset-0 bg-black bg-opacity-15 rounded-2xl'></div>

              <div className='absolute left-2 bottom-2 text-white font-bold'>
                {category}
              </div>
            </button>
          ))}
        </div>
        <button type='submit' className='flex border-2 p-2 px-28 mt-8 ml-56 rounded-full'>Select 5 categories</button>
      </form>
    </div>
  )
}

export default Categories;