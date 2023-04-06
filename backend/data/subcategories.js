const subcategories = [
  {
    id: 101,
    name: "Fiction",
    category: 1,
  },
  {
    id: 102,
    name: "Non-fiction",
    category: 1,
  },
  {
    id: 103,
    name: "Mystery",
    category: 1,
  },
  {
    id: 104,
    name: "Romance",
    category: 1,
  },
  {
    id: 105,
    name: "Science fiction & fantasy",
    category: 1,
  },
  {
    id: 106,
    name: "Young adult",
    category: 1,
  },
  {
    id: 201,
    name: "Computers & Accessories",
    category: 2,
  },
  {
    id: 202,
    name: "Televisions & Video",
    category: 2,
  },
  {
    id: 203,
    name: "Headphones",
    category: 2,
  },
  {
    id: 204,
    name: "Cameras & Photography",
    category: 2,
  },
  {
    id: 205,
    name: "Mobile Phones & Accessories",
    category: 2,
  },
  {
    id: 301,
    name: "Men's Clothing",
    category: 3,
  },
  {
    id: 302,
    name: "Women's Clothing",
    category: 3,
  },
  {
    id: 303,
    name: "Kids & Baby Clothing",
    category: 3,
  },
  {
    id: 304,
    name: "Shoes",
    category: 3,
  },
  {
    id: 305,
    name: "Accessories",
    category: 3,
  },
  {
    id: 401,
    name: "Kitchen & Dining",
    category: 4,
  },
  {
    id: 402,
    name: "Furniture",
    category: 4,
  },
  {
    id: 403,
    name: "Home Decor",
    category: 4,
  },
  {
    id: 404,
    name: "Bedding & Bath",
    category: 4,
  },
  {
    id: 405,
    name: "Appliances",
    category: 4,
  },
  {
    id: 501,
    name: "Exercise & Fitness",
    category: 5,
  },
  {
    id: 502,
    name: "Outdoor Recreation",
    category: 5,
  },
  {
    id: 503,
    name: "Cycling",
    category: 5,
  },
  {
    id: 504,
    name: "Hunting & Fishing",
    category: 5,
  },
  {
    id: 505,
    name: "Team Sports",
    category: 5,
  },
  {
    id: 601,
    name: "Action Figures & Dolls",
    category: 6,
  },
  {
    id: 602,
    name: "Board Games & Puzzles",
    category: 6,
  },
  {
    id: 603,
    name: "Building Sets & Blocks",
    category: 6,
  },
  {
    id: 604,
    name: "Role-Playing & Fantasy Games",
    category: 6,
  },
  {
    id: 605,
    name: "Electronic Games",
    category: 6,
  },
  {
    id: 701,
    name: "Makeup & Cosmetics",
    category: 7,
  },
  {
    id: 702,
    name: "Skin Care",
    category: 7,
  },
  {
    id: 703,
    name: "Hair Care",
    category: 7,
  },
  {
    id: 704,
    name: "Personal Care Appliances",
    category: 7,
  },
  {
    id: 705,
    name: "Fragrances",
    category: 7,
  },
  {
    id: 801,
    name: "Snacks & Candy",
    category: 8,
  },
  {
    id: 802,
    name: "Beverages",
    category: 8,
  },
  {
    id: 803,
    name: "Pantry Staples",
    category: 8,
  },
  {
    id: 804,
    name: "Gourmet Food",
    category: 8,
  },
  {
    id: 805,
    name: "Baby Food & Formula",
    category: 8,
  },
  {
    id: 901,
    name: "Rock",
    category: 9,
  },
  {
    id: 902,
    name: "Pop",
    category: 9,
  },
  {
    id: 903,
    name: "Hip Hop",
    category: 9,
  },
  {
    id: 904,
    name: "Country",
    category: 9,
  },
  {
    id: 905,
    name: "Classical",
    category: 9,
  },
  {
    id: 1001,
    name: "Action & Adventure",
    category: 10,
  },
  {
    id: 1002,
    name: "Drama",
    category: 10,
  },
  {
    id: 1003,
    name: "Comedy",
    category: 10,
  },
  {
    id: 1004,
    name: "Documentary",
    category: 10,
  },
  {
    id: 1005,
    name: "Kids & Family",
    category: 10,
  },
  {
    id: 1101,
    name: "Supplements & Vitamins",
    category: 11,
  },
  {
    id: 1102,
    name: "Personal Care Products",
    category: 11,
  },
  {
    id: 1103,
    name: "Yoga & Meditation",
    category: 11,
  },
  {
    id: 1104,
    name: "Exercise Equipment",
    category: 11,
  },
  {
    id: 1105,
    name: "Health Monitors",
    category: 11,
  },
  {
    id: 1201,
    name: "Paper Products",
    category: 12,
  },
  {
    id: 1202,
    name: "Writing & Correction",
    category: 12,
  },
  {
    id: 1203,
    name: "Desk Accessories",
    category: 12,
  },
  {
    id: 1204,
    name: "Filing & Organization",
    category: 12,
  },
  {
    id: 1205,
    name: "Binders & Binding Supplies",
    category: 12,
  },
  {
    id: 1301,
    name: "Dogs",
    category: 13,
  },
  {
    id: 1302,
    name: "Cats",
    category: 13,
  },
  {
    id: 1303,
    name: "Fish & Aquatic Pets",
    category: 13,
  },
  {
    id: 1304,
    name: "Birds",
    category: 13,
  },
  {
    id: 1305,
    name: "Small Animals",
    category: 13,
  },
  {
    id: 1401,
    name: "Luggage & Travel Gear",
    category: 14,
  },
  {
    id: 1402,
    name: "Travel Accessories",
    category: 14,
  },
  {
    id: 1403,
    name: "Sports & Duffel Bags",
    category: 14,
  },
  {
    id: 1404,
    name: "Backpacks",
    category: 14,
  },
  {
    id: 1405,
    name: "Briefcases",
    category: 14,
  },
  {
    id: 1501,
    name: "Power & Hand Tools",
    category: 15,
  },
  {
    id: 1502,
    name: "Electrical",
    category: 15,
  },
  {
    id: 1503,
    name: "Hardware",
    category: 15,
  },
  {
    id: 1504,
    name: "Building Supplies",
    category: 15,
  },
  {
    id: 1505,
    name: "Lighting & Ceiling Fans",
    category: 15,
  },
];
console.log(subcategories.length);
