// Table of people data [each one is an object]
const peopleData = [
  {
    id: 1,
    name: "Rebecca Cooper",
    position: "Data analyst",
    img: "https://www.course-api.com/images/people/person-1.jpeg",
    description:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "Veronica Watson",
    position: "web designer",
    img: "https://www.course-api.com/images/people/person-2.jpeg",
    description:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "Peter Jones",
    position: "intern",
    img: "https://www.course-api.com/images/people/person-4.jpeg",
    description:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "Bill Anderson",
    position: "the boss",
    img: "https://www.course-api.com/images/people/person-3.jpeg",
    description:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

// SELECTORS

const namE = document.querySelector(".name");
// console.log(namE);

const position = document.querySelector(".position");
// console.log(position);

const img = document.querySelector(".person-img");
// console.log(img);

const description = document.querySelector(".description-info");
// console.log(description);

const left = document.querySelector(".fa-angles-left");
// console.log(left);
const right = document.querySelector(".fa-angles-right");
// console.log(right);

const randm = document.querySelector(".random-btn");
// console.log(randm);

var accessTableElem = 0;

window.addEventListener("DOMContentLoaded", () => {
  exposePerson(accessTableElem);
});

right.addEventListener("click", () => {
  accessTableElem++;

//   console.log(peopleData.length);

  if (accessTableElem > peopleData.length-1) {
    accessTableElem = 0;
  }
  exposePerson(accessTableElem);
});

left.addEventListener("click", () => {
  accessTableElem--;
  if (accessTableElem < 0) {
    accessTableElem = peopleData.length-1;
  }

  exposePerson(accessTableElem);
});

randm.addEventListener("click", () => {
  accessTableElem = getRandomInt(peopleData.length);
  exposePerson(accessTableElem);
});

const exposePerson = (tabElem) => {

  const person = peopleData[tabElem];
  
  img.src = person.img;
  namE.textContent = person.name;
  position.textContent = person.position;
  description.textContent = person.description;
};

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


