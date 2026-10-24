
export const raffleEvent = {
    title: "United Kickoff Party & Raffle",
    date: "2026-11-01",
    startTime: "12:00 PM",
    endTime: "4:00 PM",
    timeZone: "America/New_York",
    countdownTarget: "2026-11-01T12:00:00-05:00",
  
    venue: "The Elks",
    address: "117 S Elmer Avenue",
    city: "Sayre",
    state: "PA",
  
    ticketPrice: 10,
    currency: "USD",
  
    description:
      "Join the United Training Facility community for an afternoon of fun, fundraising, and great raffle prizes. Every contribution helps support our wrestlers and strengthen the United family.",
  
    fundraisingPurpose:
      "Supporting United Training Facility and helping provide discounted United gear for club members.",
  };
  
  export type RafflePrize = {
    id: number;
    title: string;
    value: number;
    description: string;
    contents: string[];
    image?: string;
  };
  
  export const rafflePrizes: RafflePrize[] = [
    {
      id: 1,
      title: "Private Wrestling Lessons",
      value: 300,
      description:
        "Five private, one-hour wrestling lessons with Coach Courtney.",
      contents: [
        "Five one-hour private wrestling lessons",
        "Personalized coaching with Coach Courtney",
        "Sessions may be split among multiple wrestlers",
        "Valid for one year",
      ],
    },
    {
      id: 2,
      title: "Bryans Meat Cutting Pork Bundle",
      value: 400,
      description:
        "A half-pig pork bundle donated by Bryans Meat Cutting, featuring a variety of fresh and smoked cuts.",
      contents: [
        "Smoked bacon",
        "Smoked ham roasts",
        "Ham steaks",
        "Shoulder roasts",
        "Shoulder steaks",
        "Pork chops",
        "Spare ribs",
        "Sweet Italian link sausage",
        "Breakfast bulk sausage",
      ],
    },
    {
      id: 3,
      title: "Local Favorites Gift Package",
      value: 315,
      description:
        "A collection of local dining, beauty, grooming, and wellness prizes.",
      contents: [
        "Johnny D's — $30 gift card",
        "Broad Street Pub — $25 gift card",
        "The Grille — $25 gift card",
        "Callear's — $10 gift card and a bottle of sauce",
        "Grumpy Grizzley — $15 gift card",
        "Mooney's — $30 gift card",
        "Ashley's Kitchen — $30 gift card",
        "Fresh Aesthetics — Free manicure",
        "Touch of Grace Massage — Free 30-minute massage",
        "Scott Watkins Barbershop — $40 gift card",
      ],
    },
    {
      id: 4,
      title: "Dining, Beauty & Golf Package",
      value: 314,
      description:
        "Enjoy local restaurants, specialty shopping, beauty services, and a round of golf with a friend.",
      contents: [
        "Johnny D's — $20 gift card",
        "Broad Street Pub — $25 gift card",
        "Chumpy's Pizzeria — $25 gift card",
        "Raven Heart Bookstore — $10 gift card",
        "Beeman's — $20 gift card",
        "Bird's Nest Cafe — $35 gift card",
        "Fresh Aesthetics — $100 off Botox",
        "Shepard Hills — Two free rounds of golf with cart",
      ],
    },
    {
      id: 5,
      title: "Food, Beauty & Golf Package",
      value: 294,
      description:
        "A variety of local dining favorites, beauty services, and golf.",
      contents: [
        "Johnny D's — $20 gift card",
        "Alliger's House of Wings — $25 gift card",
        "The Grille — $25 gift card",
        "Coaches Pizza — Free sheet pizza",
        "Applebee's — $10 gift card",
        "Nana's Country Kitchen — $30 gift card",
        "Becky's Diner — $25 gift card",
        "Urban Connection — Builder gel manicure",
        "Shepard Hills — Two free rounds of golf with cart",
      ],
    },
    {
      id: 6,
      title: "Entertainment & Local Favorites Package",
      value: 470,
      description:
        "An entertainment-focused package featuring local dining, services, and a year of movies.",
      contents: [
        "Johnny D's — $20 gift card",
        "Alliger's House of Wings — $25 gift card",
        "Parrish Family Deli — Free sheet pizza",
        "Applebee's — $10 gift card",
        "Bluestone Brewing Co. — $25 gift card",
        "Becky's Diner — $25 gift card",
        "Urban Connection — $40 hair service",
        "Bradford County Regional Arts Council — Golden Ticket: Free movies for one year at the Sayre and Keystone theaters",
      ],
    },
  ];
  
  export const raffleDetails = {
    ticketPrice: raffleEvent.ticketPrice,
  
    totalPrizeValue: rafflePrizes.reduce(
      (total, prize) => total + prize.value,
      0,
    ),
  
    prizeCount: rafflePrizes.length,
    memberTicketGoal: 10,
  
    instructions: [
      "Choose which prize drawing you would like to enter.",
      "Each raffle ticket costs $10.",
      "You may enter multiple prize drawings.",
      "Include your name, phone number, prize selections, and the wrestler you're supporting in your payment memo.",
      "Coach Courtney will confirm your entries by text after payment is verified.",
    ],
  };
  