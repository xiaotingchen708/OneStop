/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface SEOKeyword {
  keyword: string;
  category: string;
}

export interface OfferItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  products?: { name: string; price: string }[];
}

export interface ChoiceItem {
  id: string;
  title: string;
  description: string;
}

export interface LocalService {
  title: string;
  detail: string;
}

// Storing references to the generated images
import heroImg from "./assets/images/hero_bg_garden_1779884921832.png";
import aboutImg from "./assets/images/about_village_life_1779883683205.png";
import chooseUsImg from "./assets/images/choose_us_lifestyle_1779883698357.png";
import experienceImg from "./assets/images/cappuccino_croissant_1780734557521.png";
import eventsImg from "./assets/images/community_events_1779883732824.png";
import eventsTeaImg from "./assets/images/village_cafe_afternoon_garden_snapshot_1779932301613.png";
import eventsHerbImg from "./assets/images/events_herb_natural_clean_1779963023778.png";
import eventsFamilyImg from "./assets/images/village_cafe_day_1779931195995.png";
import groceryCardImg from "./assets/images/grocery_essentials_1779884516999.png";
import postalCardImg from "./assets/images/postal_services_card_1779884533934.png";
import bakeryCardImg from "./assets/images/fresh_bakery_card_1779884551091.png";
import cafeCardImg from "./assets/images/garden_cafe_events_card_1779884565787.png";

// slideshow - restored to original sourdough, bench, shelf
import sliceSourdough from "./assets/images/village_cafe_slice_sourdough_1779955607152.png";
import sliceRusticBench from "./assets/images/village_cafe_slice_rustic_bench_1779955622213.png";
import sliceArtisanalShelf from "./assets/images/village_cafe_slice_artisanal_shelf_1779955636573.png";

// cafe thumbnails (new coffee, hot chocolate, crepe from user's photos)
import cafeThumb1 from "./assets/images/iced_latte_crepe_1780734522490.png";
import cafeThumb2 from "./assets/images/hot_chocolate_cookie_1780734539673.png";
import cafeThumb3 from "./assets/images/cappuccino_croissant_1780734557521.png";

export const IMAGE_ASSETS = {
  hero: heroImg,
  about: aboutImg,
  chooseUs: chooseUsImg,
  experience: experienceImg,
  events: eventsImg,
  eventsTea: eventsTeaImg,
  eventsHerb: eventsHerbImg,
  eventsFamily: eventsFamilyImg,
  groceryCard: groceryCardImg,
  postalCard: postalCardImg,
  bakeryCard: bakeryCardImg,
  cafeCard: cafeCardImg,
  slideshow: [
    sliceSourdough,
    sliceRusticBench,
    sliceArtisanalShelf,
    aboutImg
  ],
  cafeThumbnails: [
    cafeThumb1,
    cafeThumb2,
    cafeThumb3
  ]
};

// SEO Keywords requested by the brief to naturally incorporate and feature in metadata/index
export const SEO_KEYWORDS: SEOKeyword[] = [
  { keyword: "British village community hub", category: "Brand" },
  { keyword: "local postal services", category: "Postal" },
  { keyword: "village garden café", category: "Café" },
  { keyword: "fresh artisan bakery", category: "Bakery" },
  { keyword: "local grocery essentials", category: "Grocery" },
  { keyword: "seasonal village events", category: "Community" },
  { keyword: "handcrafted pastries and bakes", category: "Bakery" },
  { keyword: "parcel collection and drop-off", category: "Postal" }
];

export const OFFER_ITEMS: OfferItem[] = [
  {
    id: "grocery",
    title: "Grocery Essentials",
    description: "Daily essentials nearby",
    iconName: "Store",
    products: [
      { name: "Seasonal Veg Box", price: "£5.90" },
      { name: "Homemade Fruit Jam", price: "£4.50" }
    ]
  },
  {
    id: "postal",
    title: "Postal Services",
    description: "Quick parcel drop-off and collection",
    iconName: "Mail",
    products: [
      { name: "UK Standard Letter Post", price: "£1.45" },
      { name: "Under-2kg Small Parcel Delivery", price: "£4.80" }
    ]
  },
  {
    id: "bakery",
    title: "Fresh Bakery",
    description: "Freshly baked treats every day",
    iconName: "Croissant",
    products: [
      { name: "Artisan Sourdough Loaf", price: "£4.20" },
      { name: "Butter Croissant", price: "£2.10" }
    ]
  },
  {
    id: "cafe",
    title: "Garden Café and Events",
    description: "Relax, meet, and connect",
    iconName: "Coffee",
    products: [
      { name: "Filter House Coffee", price: "£3.50" },
      { name: "Traditional Cream Tea Set", price: "£6.80" }
    ]
  }
];

export const CHOICE_ITEMS: ChoiceItem[] = [
  {
    id: "needs",
    title: "One Place for Daily Needs",
    description: "Saves you travel, combining bakes, post, and pantry."
  },
  {
    id: "local",
    title: "Fresh Local Products",
    description: "Sourced within Leicestershire to support community farms."
  },
  {
    id: "garden",
    title: "Relaxing Garden Seating",
    description: "A sunny outdoor courtyard lined with English flowers."
  },
  {
    id: "community",
    title: "Community-Focused",
    description: "Owned, staffed, and inspired by village hospitality."
  }
];

export const COMMUNITY_TRUST_ITEMS = [
  {
    title: "Proudly serving residents",
    description: "Providing a reliable and warm point of contact for daily necessities, secure postage, and neighborly interactions."
  },
  {
    title: "Supporting local suppliers and partners",
    description: "Fostering local economies by prioritizing fresh local bakes, handpicked flowers, and regional farm produce."
  },
  {
    title: "Friendly service and fresh local products",
    description: "Ensuring an atmosphere of relaxed convenience, genuine conversation, and honest, high-quality, delicious treats."
  }
];
