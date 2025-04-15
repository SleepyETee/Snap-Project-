// /**
//  * Data Catalog Project Starter Code - SEA Stage 2
//  *
//  * This file is where you should be doing most of your work. You should
//  * also make changes to the HTML and CSS files, but we want you to prioritize
//  * demonstrating your understanding of data structures, and you'll do that
//  * with the JavaScript code you write in this file.
//  *
//  * The comments in this file are only to help you learn how the starter code
//  * works. The instructions for the project are in the README. That said, here
//  * are the three things you should do first to learn about the starter code:
//  * - 1 - Change something small in index.html or style.css, then reload your
//  *    browser and make sure you can see that change.
//  * - 2 - On your browser, right click anywhere on the page and select
//  *    "Inspect" to open the browser developer tools. Then, go to the "console"
//  *    tab in the new window that opened up. This console is where you will see
//  *    JavaScript errors and logs, which is extremely helpful for debugging.
//  *    (These instructions assume you're using Chrome, opening developer tools
//  *    may be different on other browsers. We suggest using Chrome.)
//  * - 3 - Add another string to the titles array a few lines down. Reload your
//  *    browser and observe what happens. You should see a fourth "card" appear
//  *    with the string you added to the array, but a broken image.
//  *
//  */

// const FRESH_PRINCE_URL =
//   "https://upload.wikimedia.org/wikipedia/en/3/33/Fresh_Prince_S1_DVD.jpg";
// const CURB_POSTER_URL =
//   "https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE2Y2MtZTFhMTU0MGI5ZDFlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg";
// const EAST_LOS_HIGH_POSTER_URL =
//   "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg";

// // This is an array of strings (TV show titles)
// let titles = [
//   "Fresh Prince of Bel Air",
//   "Curb Your Enthusiasm",
//   "East Los High",
// ];
// // Your final submission should have much more data than this, and
// // you should use more than just an array of strings to store it all.

// // This function adds cards the page to display the data in the array
// function showCards() {
//   const cardContainer = document.getElementById("card-container");
//   cardContainer.innerHTML = "";
//   const templateCard = document.querySelector(".card");

//   for (let i = 0; i < titles.length; i++) {
//     let title = titles[i];

//     // This part of the code doesn't scale very well! After you add your
//     // own data, you'll need to do something totally different here.
//     let imageURL = "";
//     if (i == 0) {
//       imageURL = FRESH_PRINCE_URL;
//     } else if (i == 1) {
//       imageURL = CURB_POSTER_URL;
//     } else if (i == 2) {
//       imageURL = EAST_LOS_HIGH_POSTER_URL;
//     }

//     const nextCard = templateCard.cloneNode(true); // Copy the template card
//     editCardContent(nextCard, title, imageURL); // Edit title and image
//     cardContainer.appendChild(nextCard); // Add new card to the container
//   }
// }

// function editCardContent(card, newTitle, newImageURL) {
//   card.style.display = "block";

//   const cardHeader = card.querySelector("h2");
//   cardHeader.textContent = newTitle;

//   const cardImage = card.querySelector("img");
//   cardImage.src = newImageURL;
//   cardImage.alt = newTitle + " Poster";

//   // You can use console.log to help you debug!
//   // View the output by right clicking on your website,
//   // select "Inspect", then click on the "Console" tab
//   console.log("new card:", newTitle, "- html: ", card);
// }

// // This calls the addCards() function when the page is first loaded
// document.addEventListener("DOMContentLoaded", showCards);

// function quoteAlert() {
//   console.log("Button Clicked!");
//   alert(
//     "I guess I can kiss heaven goodbye, because it got to be a sin to look this good!"
//   );
// }

// function removeLastCard() {
//   titles.pop(); // Remove last item in titles array
//   showCards(); // Call showCards again to refresh
// }




/**
 * LA TV Shows Data Catalog Project
*/

const defaultCatalog = [
  // --- Comedy ---
  {
    id: 1,
    name: "Fresh Prince of Bel Air",
    category: "comedy",
    description: "A hilarious drama-comedy following a street-smart teen adjusting to life in a wealthy Los Angeles mansion.",
    value: 1990, 
    rarity: "NBC", 
    rating: 9,     
    element: "Will Smith", 
    bonusEffect: "Iconic theme song", 
    imageURL: "https://upload.wikimedia.org/wikipedia/en/3/33/Fresh_Prince_S1_DVD.jpg"
  },
  {
    id: 2,
    name: "Curb Your Enthusiasm",
    category: "comedy",
    description: "A semi-improvised look at the misadventures of Larry David in everyday life.",
    value: 2000,
    rarity: "HBO",
    rating: 8,
    element: "Larry David",
    bonusEffect: "Awkward humor",
    imageURL: "https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE2Y2MtZTFhMTU0MGI5ZDFlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg"
  },
  {
    id: 3,
    name: "Friends",
    category: "comedy",
    description: "An ensemble sitcom about six friends living in New York City, full of witty banter and iconic moments.",
    value: 1994,
    rarity: "NBC",
    rating: 9,
    element: "Jennifer Aniston, Courteney Cox, Lisa Kudrow",
    bonusEffect: "Timeless humor",
    imageURL: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/2koX1xLkpTQM4IZebYvKysFW1Nh.jpg"
  },
  {
    id: 4,
    name: "Family Guy",
    category: "comedy",
    description: "An animated series following the eccentric Griffin family and their outrageous adventures.",
    value: 1999,
    rarity: "FOX",
    rating: 8,
    element: "Seth MacFarlane",
    bonusEffect: "Irreverent comedy",
    imageURL: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/8o8kiBkWFK3gVytHdyzEWUBXVfK.jpg"
  },
  {
    id: 5,
    name: "Workaholics",
    category: "comedy",
    description: "A group of friends navigate the absurdities of life while working together in an office.",
    value: 2010,
    rarity: "Comedy Central",
    rating: 7,
    element: "Blake Anderson, Adam DeVine, Anders Holm",
    bonusEffect: "Offbeat humor",
    imageURL: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/kXg4tFUHN7h7bNdBTeLIIKqw9UJ.jpg"
  },
  
  // --- Drama ---
  {
    id: 6,
    name: "Breaking Bad",
    category: "drama",
    description: "A high school chemistry teacher turned methamphetamine producer faces a drastic descent into chaos.",
    value: 2008,
    rarity: "AMC",
    rating: 10,
    element: "Bryan Cranston",
    bonusEffect: "Gripping storytelling",
    imageURL: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/ineLOBPG8AZsluYwnkMpHRyu7L.jpg"
  },
  {
    id: 7,
    name: "East Los High",
    category: "drama",
    description: "A dramatic series capturing the life and culture in East Los Angeles.",
    value: 2013,
    rarity: "ABC",
    rating: 7,
    element: "Ensemble Cast",
    bonusEffect: "Culturally rich narrative",
    imageURL: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/8jtyfMM3OIwtXRIk7dbfUsbXa8s.jpg"
  },
  {
    id: 8,
    name: "L.A. Law",
    category: "drama",
    description: "An ensemble legal drama exploring the personal and professional lives in a Los Angeles law firm.",
    value: 1986,
    rarity: "NBC",
    rating: 8,
    element: "Corbin Bernsen, Susan Ruttan",
    bonusEffect: "Classic legal drama",
    imageURL: "https://image.tmdb.org/t/p/original/hs1TBk6KlPBlnb7ybpqgK6IzcCx.jpg"
  },
  {
    id: 9,
    name: "Mad Men",
    category: "drama",
    description: "A stylish drama set in a 1960s advertising agency with complex characters and social commentary.",
    value: 2007,
    rarity: "AMC",
    rating: 9,
    element: "Jon Hamm",
    bonusEffect: "Intricate character studies",
    imageURL: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/7v8iCNzKFpdlrCMcqCoJyn74Nsa.jpg"
  },
  {
    id: 10,
    name: "House of Cards",
    category: "drama",
    description: "A political drama that follows a ruthless politician's path to power in Washington, D.C.",
    value: 2013,
    rarity: "Netflix",
    rating: 8,
    element: "Kevin Spacey",
    bonusEffect: "Dark political intrigue",
    imageURL: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/hKWxWjFwnMvkWQawbhvC0Y7ygQ8.jpg"
  },
  
  // --- Reality ---
  {
    id: 11,
    name: "Jersey Shore",
    category: "reality",
    description: "An unfiltered look into the lives and antics of a group of young adults at the Jersey Shore.",
    value: 2009,
    rarity: "MTV",
    rating: 7,
    element: "Snooki, The Situation",
    bonusEffect: "Over-the-top reality",
    imageURL: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/9ropZHoebQlYX8VziojRplv4smu.jpg"
  },
  {
    id: 12,
    name: "The Real Housewives of Beverly Hills",
    category: "reality",
    description: "A reality series following the lavish lives of affluent women in Beverly Hills.",
    value: 2010,
    rarity: "Bravo",
    rating: 7,
    element: "Ensemble Cast",
    bonusEffect: "Glamorous drama",
    imageURL: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/gHZmEmtQzobW9PVdpGrYP7SU9RH.jpg"
  },
  {
    id: 13,
    name: "Keeping Up with the Kardashians",
    category: "reality",
    description: "A peek into the lives of the Kardashian-Jenner family and their personal and business ventures.",
    value: 2007,
    rarity: "E! Entertainment",
    rating: 8,
    element: "Kim, Khloé, Kourtney",
    bonusEffect: "Celebrity reality",
    imageURL: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/nddXOC8wYpIDv7giLzjjqIg8WDA.jpg"
  },
  {
    id: 14,
    name: "The Osbournes",
    category: "reality",
    description: "A reality series following the chaotic daily lives of Ozzy Osbourne and his family.",
    value: 2002,
    rarity: "MTV",
    rating: 7,
    element: "Ozzy, Sharon, Kelly",
    bonusEffect: "Rock star lifestyle",
    imageURL: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/kTqCW7e2YtK8DrSHb9FkYDuuhY9.jpg"
  },
  {
    id: 15,
    name: "Real World/Road Rules Challenge",
    category: "reality",
    description: "A competitive reality series that brings together cast members from The Real World and Road Rules.",
    value: 1998,
    rarity: "MTV",
    rating: 8,
    element: "Reality stars",
    bonusEffect: "High-stakes competition",
    imageURL: "https://image.tmdb.org/t/p/w1280/gHglz5TlLvHyP4Y680ofcoM8uFc.jpg"
  },
  
  // --- Documentary ---
  {
    id: 16,
    name: "The Source Family",
    category: "documentary",
    description: "A charismatic leader founds a commune in Los Angeles in the early '70s centered on natural foods, spiritual practices, and psychedelics.",
    value: 2012,         
    rarity: "Independent",   
    rating: 6.8,               
    element: "Directors: Maria Demopoulos, Jodi Wille",
    bonusEffect: "Stars: Ahom Aquarian, Isis Aquarian, Don Bolles",
    imageURL: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/b39CESSCHbZsPhRyyMOGFJbhlUX.jpg"
  },
  {
    id: 17,
    name: "Inventing L.A.: The Chandlers and Their Times",
    category: "documentary",
    description: "Chronicles how the Los Angeles Times and the Chandler family shaped the city, while revealing the darker side of the American Dream.",
    value: 2009,
    rarity: "PBS",
    rating: 7.0,
    element: "Director: Peter Jones",
    bonusEffect: "Stars: Dorothy Chandler, Harry Brant Chandler, Otis Chandler",
    imageURL: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/iVq6BK1yxPpLSgG23Pv1oakCvRg.jpg"
  },
  {
    id: 18,
    name: "Los Angeles Plays Itself",
    category: "documentary",
    description: "A film examining how Los Angeles has been portrayed—and misrepresented—across decades of cinema.",
    value: 2003,
    rarity: "Independent",
    rating: 8.0,
    element: "Director: Thom Andersen",
    bonusEffect: "Explores the city's cinematic identity",
    imageURL: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/wmzGSQktsLf2JvfkhBaLSdG4G3Z.jpg"
  },
  {
    id: 19,
    name: "Wattstax",
    category: "documentary",
    description: "Features performances from the 1972 Watts Summer Festival by Stax Records artists such as Isaac Hayes, Rufus Thomas, and The Staple Singers.",
    value: 1973,
    rarity: "Stax",
    rating: 7.6,
    element: "Director: Mel Stuart",
    bonusEffect: "A seminal concert documentary",
    imageURL: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/gVPZCtlPDLTyEk4rDY1O7mXjqYv.jpg"
  },
  {
    id: 20,
    name: "The Decline of Western Civilization",
    category: "documentary",
    description: "A pivotal look at the Los Angeles punk rock scene of the late 1970s, capturing its raw energy and cultural impact.",
    value: 1981,
    rarity: "Independent",
    rating: 7.6,
    element: "Director: Penelope Spheeris",
    bonusEffect: "Iconic LA punk documentary",
    imageURL: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/36YfDJQKZfoCn5NLJ7mcrekE511.jpg"
  }
];


let catalogItems = JSON.parse(JSON.stringify(defaultCatalog));
// let isGroupedView = false;


// Helper Function: Create a TV Show Card using the Hidden Template
function createItemCard(item) {
  // Get the hidden card template element
  const templateCard = document.querySelector(".card");
  if (!templateCard) {
    console.error("Card template element with class 'card' not found.");
    return null;
  }
  const card = templateCard.cloneNode(true);
  // Make it visible
  card.style.display = "block";

  editCardContent(card, item);
  return card;
}

// Helper Function: Update the Content of a Card
function editCardContent(card, item) {
  const cardContent = card.querySelector(".card-content");
  if (!cardContent) return;
  
  // Construct the inner HTML with details from the item
  cardContent.innerHTML = `
    <h2>${item.name}</h2>
    <img src="${item.imageURL}" alt="${item.name} Poster" />
    <ul>
      <li><strong>Genre:</strong> ${item.category}</li>
      <li><strong>Network:</strong> ${item.rarity}</li>
      <li><strong>Year:</strong> ${item.value}</li>
      <li><strong>Rating:</strong> ${item.rating}</li>
      <li><strong>Lead:</strong> ${item.element}</li>
      <li><strong>Tagline:</strong> ${item.bonusEffect}</li>
      <li><strong>Description:</strong> ${item.description}</li>
    </ul>
    <div class="actions">
      <button class="edit" onclick="editItem(${item.id})">Edit</button>
      <button class="delete" onclick="deleteItem(${item.id})">Delete</button>
    </div>
  `;
}

// Display the Catalog Items
function displayCatalog(items) {
  const container = document.getElementById("card-container");
  if (!container) {
    console.error("Element with id 'card-container' not found.");
    return;
  }
  container.innerHTML = ""; 
  
  items.forEach(item => {
    const card = createItemCard(item);
    if (card) {
      container.appendChild(card);
    }
  });
}

// Data Operation Functions

// Filter by genre
function filterCatalog(category) {
  return category === "all" ? catalogItems : catalogItems.filter(item => item.category === category);
}

// Search name (case-insensitive)
function searchCatalog(query) {
  query = query.toLowerCase();
  return catalogItems.filter(item =>
    item.name.toLowerCase().includes(query) ||
    item.category.toLowerCase().includes(query) ||
    item.description.toLowerCase().includes(query) ||
    item.rarity.toLowerCase().includes(query) ||
    item.element.toLowerCase().includes(query) ||
    item.bonusEffect.toLowerCase().includes(query)
  );
}


// Sort by name
function sortCatalog(items) {
  return items.slice().sort((a, b) => a.name.localeCompare(b.name));
}
// Sort by release year, ascending or descending (default is ascending)
function sortByYear(items, order = 'asc') {
  return items.slice().sort((a, b) => {
    if (order === 'asc') {
      return a.value - b.value;  
    } else {
      return b.value - a.value;
    }
  });
}

// Sort by rating, ascending or descending (default is descending)
function sortByRating(items, order = 'desc') {
  return items.slice().sort((a, b) => {
    if (order === 'asc') {
      return a.rating - b.rating;
    } else {
      return b.rating - a.rating;
    }
  });
}

function filterByValueRange(min, max) {
  return catalogItems.filter(item => item.value >= min && item.value <= max);
}

// // Group by genre 
// function groupCatalogByCategory() {
//   return catalogItems.reduce((groups, item) => {
//     if (!groups[item.category]) groups[item.category] = [];
//     groups[item.category].push(item);
//     return groups;
//   }, {});
// }

// Shuffle using Fisher–Yates algorithm
function shuffleCatalog() {
  let shuffled = catalogItems.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  catalogItems = shuffled;
  updateCatalogDisplay();
}

// Add a new TV show
function addItem(newItem) {
  newItem.id = catalogItems.length ? Math.max(...catalogItems.map(i => i.id)) + 1 : 1;
  catalogItems.push(newItem);
  updateCatalogDisplay();
}

function updateItem(updatedItem) {
  catalogItems = catalogItems.map(item => item.id === updatedItem.id ? updatedItem : item);
  updateCatalogDisplay();
}

// Delete function
function deleteItem(id) {
  catalogItems = catalogItems.filter(item => item.id !== id);
  updateCatalogDisplay();
}

// Reset to default catalog
function resetCatalog() {
  catalogItems = JSON.parse(JSON.stringify(defaultCatalog));
  updateCatalogDisplay();
}

// // Toggle between grouped and ungrouped view
// function toggleGroupView() {
//   isGroupedView = !isGroupedView;
//   updateCatalogDisplay();
// }

// Update as search/filter
function updateCatalogDisplay() {
  const category = document.getElementById("filterSelect").value;
  const searchQuery = document.getElementById("searchInput").value;
  const minValue = parseInt(document.getElementById("minValue")?.value, 10);
  const maxValue = parseInt(document.getElementById("maxValue")?.value, 10);

  let updatedList = filterCatalog(category);
  
  if (searchQuery.trim() !== "") {
    // Use the updated searchCatalog that searches in multiple fields:
    updatedList = searchCatalog(searchQuery);
  }
  
  if (!isNaN(minValue) && !isNaN(maxValue)) {
    updatedList = updatedList.filter(item => item.value >= minValue && item.value <= maxValue);
  }
  displayCatalog(updatedList);
}

// Debounce utility to improve search performance
function debounce(func, delay) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}

// Event Listeners
document.getElementById("searchInput").addEventListener("input", debounce(updateCatalogDisplay, 300));
document.getElementById("filterSelect").addEventListener("change", updateCatalogDisplay);
document.getElementById("sortSelect").addEventListener("change", () => {
  const sortOption = document.getElementById("sortSelect").value;
  const category = document.getElementById("filterSelect").value;
  let list = filterCatalog(category);
  const searchQuery = document.getElementById("searchInput").value.trim().toLowerCase();

  // Combine filters: if a search term is provided, filter the already category-filtered list
  if (searchQuery !== "") {
    list = list.filter(item => {
      return item.name.toLowerCase().includes(searchQuery) ||
             item.category.toLowerCase().includes(searchQuery) ||
             item.description.toLowerCase().includes(searchQuery) ||
             item.rarity.toLowerCase().includes(searchQuery) ||
             item.element.toLowerCase().includes(searchQuery) ||
             item.bonusEffect.toLowerCase().includes(searchQuery);
    });
  }

  // Choose the sort method based on the option selected
  let sortedList;
  switch (sortOption) {
    case "name":
      sortedList = sortCatalog(list); 
      break;
    case "yearAsc":
      sortedList = sortByYear(list, 'asc'); 
      break;
    case "yearDesc":
      sortedList = sortByYear(list, 'desc');
      break;
    case "ratingAsc":
      sortedList = sortByRating(list, 'asc'); 
      break;
    case "ratingDesc":
      sortedList = sortByRating(list, 'desc');
      break;
    default:
      sortedList = list; 
  }
  displayCatalog(sortedList);
});


document.getElementById("shuffleButton").addEventListener("click", shuffleCatalog);
document.getElementById("resetButton").addEventListener("click", resetCatalog);
// document.getElementById("groupToggleButton").addEventListener("click", toggleGroupView);

// Add New Form submission
document.getElementById("addItemForm").addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("itemName").value.trim();
  const category = document.getElementById("itemCategory").value;
  const description = document.getElementById("itemDescription").value.trim();
  const value = parseInt(document.getElementById("itemValue").value, 10);
  const rarity = document.getElementById("itemRarity").value; // Network
  const rating = parseInt(document.getElementById("itemRating").value, 10);
  const element = document.getElementById("itemElement").value.trim(); // Lead actor/actress
  const bonusEffect = document.getElementById("itemBonus").value.trim(); // Tagline
  
  if (name && category && description && !isNaN(value) && rarity && !isNaN(rating) && element && bonusEffect) {
    addItem({ name, category, description, value, rarity, rating, element, bonusEffect });
    e.target.reset();
  }
});

// Edit function
function editItem(id) {
  const item = catalogItems.find(item => item.id === id);
  if (item) {
    const newName = prompt("Enter new show name:", item.name) || item.name;
    const newCategory = prompt("Enter new genre:", item.category) || item.category;
    const newDescription = prompt("Enter new description:", item.description) || item.description;
    const newValue = prompt("Enter new release year:", item.value);
    const newRarity = prompt("Enter new network (e.g., NBC, HBO):", item.rarity) || item.rarity;
    const newRating = prompt("Enter new rating (1-10):", item.rating);
    const newElement = prompt("Enter new lead actor/actress:", item.element) || item.element;
    const newBonus = prompt("Enter new tagline:", item.bonusEffect) || item.bonusEffect;
    
    if (newValue !== null && !isNaN(parseInt(newValue, 10)) &&
        newRating !== null && !isNaN(parseInt(newRating, 10))) {
      const updatedItem = {
        ...item,
        name: newName,
        category: newCategory,
        description: newDescription,
        value: parseInt(newValue, 10),
        rarity: newRarity,
        rating: parseInt(newRating, 10),
        element: newElement,
        bonusEffect: newBonus
      };
      updateItem(updatedItem);
    }
  }
}

// Initialization
document.addEventListener("DOMContentLoaded", () => {
  displayCatalog(catalogItems);
});

// Particles math
function initializeParticles() {
  const particleContainer = document.createElement("div");
  particleContainer.classList.add("particle-container");
  document.body.appendChild(particleContainer);
  
  for (let i = 0; i < 100; i++) {
    const particle = document.createElement("div");
    particle.classList.add("contact-particle");
    particle.style.left = Math.random() * 100 + "vw";
    particle.style.top = Math.random() * 100 + "vh";
    particle.style.animationDelay = Math.random() * 5 + "s";
    const size = Math.random() * 4 + 2 + "px";
    particle.style.width = size;
    particle.style.height = size;
    particleContainer.appendChild(particle);
  }
}
window.addEventListener("load", initializeParticles);

function adjustBackgroundContainerHeight() {
  const bgContainer = document.querySelector(".background-container");
  if (bgContainer) {
    bgContainer.style.height = document.body.scrollHeight + "px";
  }
}
window.addEventListener("load", adjustBackgroundContainerHeight);
window.addEventListener("resize", adjustBackgroundContainerHeight);
