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
export const IMAGE_ASSETS = {
  hero: "/src/assets/images/hero_bg_garden_1779884921832.png",
  about: "/src/assets/images/about_village_life_1779883683205.png",
  chooseUs: "/src/assets/images/choose_us_lifestyle_1779883698357.png",
  experience: "/src/assets/images/village_experience_1779883715535.png",
  events: "/src/assets/images/community_events_1779883732824.png",
  eventsTea: "/src/assets/images/village_cafe_afternoon_garden_snapshot_1779932301613.png",
  eventsHerb: "/src/assets/images/events_herb_natural_clean_1779963023778.png",
  eventsFamily: "/src/assets/images/village_cafe_day_1779931195995.png",
  groceryCard: "/src/assets/images/grocery_essentials_1779884516999.png",
  postalCard: "/src/assets/images/postal_services_card_1779884533934.png",
  bakeryCard: "/src/assets/images/fresh_bakery_card_1779884551091.png",
  cafeCard: "/src/assets/images/garden_cafe_events_card_1779884565787.png",
  slideshow: [
    "/src/assets/images/village_cafe_slice_sourdough_1779955607152.png",
    "/src/assets/images/village_cafe_slice_rustic_bench_1779955622213.png",
    "/src/assets/images/village_cafe_slice_artisanal_shelf_1779955636573.png",
    "/src/assets/images/about_village_life_1779883683205.png"
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
    iconName: "Store"
  },
  {
    id: "postal",
    title: "Postal Services",
    description: "Quick parcel drop-off and collection",
    iconName: "Mail"
  },
  {
    id: "bakery",
    title: "Fresh Bakery",
    description: "Freshly baked treats every day",
    iconName: "Croissant"
  },
  {
    id: "cafe",
    title: "Garden Café and Events",
    description: "Relax, meet, and connect",
    iconName: "Coffee"
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
