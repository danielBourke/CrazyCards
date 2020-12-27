export const user1 = {
  title: "Mr",
  name: "Ollie Murphree",
  dob: 15689940000,
  income: 34000,
  housenum: 700,
  postcode: "BS14 9PR",
  status: "Full time",
};

export const user2 = {
  title: "Miss",
  name: "Elizabeth Edmundson",
  dob: 457370100000,
  income: 17000,
  housenum: 177,
  postcode: "PH12 8UW",
  status: "Student",
};

export const user3 = {
    title: "Mr",
    name: "Trevor Rieck",
    dob: 652720800000,
    income: 15000,
    housenum: 343,
    postcode: "TS25 2NF",
    status: "Part time",
  };

export const expectedDataUser1 = {
  cards: {},
  eligiblecards: [
    {
      id: "5e887fa3dd598b6fe61667757",
      title: "Anywhere Card",
      Apr: 33.9,
      Transfer: 0,
      PurchaseOfferDuration: 0,
      credit: 300,
    },
    {
      id: "5e887fa38asd598b6fe61667757",
      title: "Liquid Card",
      Apr: 33.9,
      Transfer: 12,
      PurchaseOfferDuration: 6,
      credit: 3000,
    },
  ],
};
export const expectedDataUser3 = {
    cards: {},
    eligiblecards: [
      {
        id: "5e887fa3dd598b6fe61667757",
        title: "Anywhere Card",
        Apr: 33.9,
        Transfer: 0,
        PurchaseOfferDuration: 0,
        credit: 300,
      },

    ],
  };
export const expectedDataUser2 = {
  cards: {},
  eligiblecards: [
    {
      id: "5e887fa3dd598b6fe61667757",
      title: "Anywhere Card",
      Apr: 33.9,
      Transfer: 0,
      PurchaseOfferDuration: 0,
      credit: 300,
    },
    {
      id: "5e887fa38asd598b6fe61667757",
      title: "Liquid Card",
      Apr: 33.9,
      Transfer: 12,
      PurchaseOfferDuration: 6,
      credit: 3000,
    },
    {
      id: "5e887fa38598b6fe61667757",
      title: "Student Life",
      Apr: 18,
      Transfer: 0,
      PurchaseOfferDuration: 6,
      credit: 1600,
    },
  ],
};

export const expectedFullListCards = {
  cards: [
    {
      id: "5e887fa38598b6fe61667757",
      title: "Student Life",
      Apr: 18,
      Transfer: 0,
      PurchaseOfferDuration: 6,
      credit: 1600,
    },
    {
      id: "5e887fa3dd598b6fe61667757",
      title: "Anywhere Card",
      Apr: 33.9,
      Transfer: 0,
      PurchaseOfferDuration: 0,
      credit: 300,
    },
    {
      id: "5e887fa38asd598b6fe61667757",
      title: "Liquid Card",
      Apr: 33.9,
      Transfer: 12,
      PurchaseOfferDuration: 6,
      credit: 3000,
    },
  ],
  eligiblecards: {},
};

export const fullListCards = [
  {
    id: "5e887fa38598b6fe61667757",
    title: "Student Life",
    Apr: 18,
    Transfer: 0,
    PurchaseOfferDuration: 6,
    credit: 1600,
  },
  {
    id: "5e887fa3dd598b6fe61667757",
    title: "Anywhere Card",
    Apr: 33.9,
    Transfer: 0,
    PurchaseOfferDuration: 0,
    credit: 300,
  },
  {
    id: "5e887fa38asd598b6fe61667757",
    title: "Liquid Card",
    Apr: 33.9,
    Transfer: 12,
    PurchaseOfferDuration: 6,
    credit: 3000,
  },
];
