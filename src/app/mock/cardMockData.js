import mock from "../utils/mock";

mock.onGet("/api/account/cards").reply(200, [
  {
    id: "5e887fa38598b6fe61667757",
    title: "Student Life",
    Apr: 18,
    Transfer: 0,
    PurchaseOfferDuration: 6,
    credit: 1600,
    img: "images/studentlife.png",
  },
  {
    id: "5e887fa3dd598b6fe61667757",
    title: "Anywhere Card",
    img: "images/anywherecard.png",
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
    img: "images/liquidcard.png",
  },
]);


mock.onPost("/api/account/searchcards").reply((body) => {
const parsedBody = JSON.parse(body.data)

  let eligableCards = [
    {
      id: "5e887fa3dd598b6fe61667757",
      title: "Anywhere Card",
      img: "images/anywherecard.png",
      Apr: 33.9,
      Transfer: 0,
      PurchaseOfferDuration: 0,
      credit: 300,
    },
  ];

  if (parsedBody.income > 16000) {
    eligableCards.push({
      id: "5e887fa38asd598b6fe61667757",
      title: "Liquid Card",
      img: "images/liquidcard.png",
      Apr: 33.9,
      Transfer: 12,
      PurchaseOfferDuration: 6,
      credit: 3000,
    });
  }
  if(parsedBody.status === "Student"){
    eligableCards.push(    {
      id: "5e887fa38598b6fe61667757",
      title: "Student Life",
      img: "images/studentlife.png",
      Apr: 18,
      Transfer: 0,
      PurchaseOfferDuration: 6,
      credit: 1600,
    });
  }
  return [200,eligableCards]
})