const categories = [
  {
    id: "1",
    name: "General",
    tags: ["topics", "inspirations"],
    count: 25,
    image: require("../assets/icons/question.png")
  },
  {
    id: "2",
    name: "HTML/CSS",
    tags: ["topics", "more"],
    count: 16,
    image: require("../assets/icons/html.png")
  },
  {
    id: "3",
    name: "Javascript",
    tags: ["topics", "inspirations"],
    count: 50,
    image: require("../assets/icons/javascript.png")
  },
  {
    id: "4",
    name: "UX/UI",
    tags: ["topics", "more"],
    count: 17,
    image: require("../assets/icons/browser.png")
  },
  {
    id: "5",
    name: "Product",
    tags: ["topics", "more"],
    count: 10,
    image: require("../assets/icons/archive.png")
  },
  {
    id: "6",
    name: "Software Engineer",
    tags: ["topics", "more"],
    count: 15,
    image: require("../assets/icons/algorithm.png")
  }
];

const products = [
  {
    id: 1,
    name: "16 Best Plants That Thrive In Your Bedroom",
    description:
      "Bedrooms deserve to be decorated with lush greenery just like every other room in the house – but it can be tricky to find a plant that thrives here. Low light, high humidity and warm temperatures mean only certain houseplants will flourish.",
    tags: ["Interior", "27 m²", "Ideas"],
    images: [
      require("../assets/images/plants_1.png"),
      require("../assets/images/plants_2.png"),
      require("../assets/images/plants_3.png"),
      // showing only 3 images, show +6 for the rest
      require("../assets/images/plants_1.png"),
      require("../assets/images/plants_2.png"),
      require("../assets/images/plants_3.png"),
      require("../assets/images/plants_1.png"),
      require("../assets/images/plants_2.png"),
      require("../assets/images/plants_3.png")
    ]
  }
];

const explore = [
  // images
  require("../assets/images/explore_1.png"),
  require("../assets/images/explore_2.png"),
  require("../assets/images/explore_3.png"),
  require("../assets/images/explore_4.png"),
  require("../assets/images/explore_5.png"),
  require("../assets/images/explore_6.png")
];

const profile = {
  username: "react-ui-kit",
  location: "Europe",
  email: "contact@react-ui-kit.com",
  avatar: require("../assets/images/avatar.png"),
  budget: 1000,
  monthly_cap: 5000,
  notifications: true,
  newsletter: false
};

export { categories, explore, products, profile };
