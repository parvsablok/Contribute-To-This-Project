:root {
  --dark-purple: #100633;
  --purple: #1f0b6b;
  --white: #fff;
  --light-grey: #f2f2f2;
  --light-grey1: #d2d6dc;
  --pink: #fa3d66;
  --orange: #ffbc22;
  --box-shadow: 1px 1px 5px 1px rgba(82, 81, 85, 0.25);
  --ease-out: 0.25s ease-in-out;
}

body {
  color: var(--dark-purple);
  background-size: 100% 400%;
  background-position: 100% 0%;
  transition: all 1s;
  box-sizing: border-box;
  font-family: 'Poppins', arial, sans-serif;
}

html {
  scroll-behavior: smooth;
}

header {
  margin: 10px auto 20px auto;
  text-align: left;
  max-width: 1575px;
}

a {
  color: #fa3d66;
  text-decoration: none;
}

a:link {
  color: var(--pink);
  text-decoration: none;
}

p {
  margin: 0;
  padding: 0;
  font-size: 18px;
}

.description {
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  line-height: 1.7;
}

.searchContainer {
  background: none;
  text-decoration: inherit;
  font-family: system-ui;
  font-size: 1rem;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 18px;
  transition: all 1s;
}

#searchbar {
  font-size: 1.1em;
  width: 500px;
  height: 50px;
  text-align: center;
  border: none;
  color: gray;
  font-weight: 400;
  transition: all 1s;
  border: 10px solid;
  border-image-slice: 1;
  border-width: 3px;
  box-shadow: 1px 1px 5px 1px rgba(82, 81, 85, 0.25);
  border-image-source: linear-gradient(90deg, var(--pink) 0%, var(--orange) 100%);
}

#searchbar:focus {
  outline: none;
}

.twitter-button {
  text-align: right;
  margin-bottom: 24px;
}

#contributions-number {
  color: var(--pink);
  transition: 2.8s;
  font-weight: bold;
  font-size: 36px;
}

.button {
  padding: 16px 22px;
  gap: 8px;
  color: var(--white) !important;
  width: 222px;
  border-radius: 5px;
  background: linear-gradient(90deg, var(--pink) 0%, var(--orange) 100%);
  border: none;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 24px 2px;
  cursor: pointer;
  -webkit-box-shadow: 1px 1px 5px 1px rgba(82, 81, 85, 0.25);
  -moz-box-shadow: 1px 1px 5px 1px rgba(82, 81, 85, 0.25);
  box-shadow: 1px 1px 5px 1px rgba(82, 81, 85, 0.25);
}

.button:hover {
  box-shadow: 4px 5px 27px 4px rgba(195, 164, 48, 1);
  -moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
}

.container {
  max-width: 1614px;
  margin: auto;
}

.grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
}

.column {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
}
.column-left {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-left: 16px;
  margin-right: 16px;
}

.column-left p {
  max-width: 675px;
  line-height: 22px;
}

.column-right {
  text-align: right;
  margin-left: 16px;
  margin-right: 16px;
}
.column-double {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
}

footer {
  height: 50px;
  text-align: center;
  line-height: 50px;
  letter-spacing: 2px;
  margin: 16px;
}

/* Card
------ */
.contact i {
  color: var(--pink);
}

.about {
  background-color: var(--white);
}

.resources p {
  font-weight: bold;
}

.card p {
  padding: 8px 24px 8px 24px;
}

.card {
  display: flex;
  flex-direction: column;
  margin: 18px;
  border-radius: 5px;
  width: 500px;
  -webkit-box-shadow: 1px 1px 5px 1px rgba(82, 81, 85, 0.25);
  -moz-box-shadow: 1px 1px 5px 1px rgba(82, 81, 85, 0.25);
  box-shadow: 1px 1px 5px 1px rgba(82, 81, 85, 0.2);
  transition: 0.5s;
}

.card:hover {
  -webkit-box-shadow: 1px 1px 5px 1px rgba(82, 81, 85, 0.5);
  -moz-box-shadow: 1px 1px 5px 1px rgba(82, 81, 85, 0.5);
  box-shadow: 2px 2px 5px 2px rgba(82, 81, 85, 0.35);
  transform: translateY(-5px);
}

.name {
  background-color: var(--white);
  font-weight: bold;
  border-radius: 5px 5px 0 0;
  font-size: 20px;
}

.contact {
  background-color: var(--white);
  border-bottom: 1px solid var(--dark-purple);
  margin-bottom: 8px;
}

.resources {
  background-color: var(--white);
  height: 100%;
  padding-right: 25px;
  border-radius: 0 0 5px 5px;
  word-break: break-word;
}

.resources a:hover {
  color: var(--purple);
}

/* Night Mode Code */

.night .contact i {
  color: var(--orange);
}

.night .resources a:hover {
  color: var(--orange);
}

.night .container {
  color: var(--light-grey1);
}

.night h1 {
  color: var(--orange);
}

.night .card {
  border: 1px solid var(--orange);
}

.night .card:hover {
  background-color: var(--orange);
}

.toggle-box-label-left:empty {
  margin-left: -10px;
}

body.night {
  background-position: 100% 100%;
  background-color: var(--dark-purple);
}

.night .name {
  color: var(--light-grey1);
  background-color: var(--purple);
}

.night .contact {
  background-color: var(--purple);
  border-bottom: 1px solid var(--orange);
}

.night .about {
  color: var(--light-grey1);
  background-color: var(--dark-purple);
}

.night .resources {
  color: var(--light-grey1);
  background-color: var(--dark-purple);
}

.night .resources:hover {
  color: var(--pink);
  background-color: var(--purple);
}

.night #searchbar {
  background-color: var(--dark-purple);
  color: var(--light-grey1);
}

.toggle-box-label-left:before,
.toggle-box-label-left:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  /*transition*/
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
  outline: none;
}

.toggle-box input[type='checkbox'],
.toggle-box input[type='checkbox']:active {
  height: 0;
  width: 0;
  opacity: 0;
  border: none;
  outline: none;
}

.toggle-box label {
  display: inline-block;
  position: relative;
  padding: 0px;
  margin-bottom: 20px;
  font-size: 14px;
  line-height: 16px;
  cursor: pointer;
  color: rgba(149, 149, 149, 0.51);
  font-weight: normal;
  left: 9px;
  top: 5px;
}

.toggle-box-label-left:before {
  content: '';
  display: block;
  position: absolute;
  z-index: 1;
  line-height: 34px;
  text-indent: 40px;
  height: 16px;
  width: 16px;
  margin: 4px;
  /*border-radius*/
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  border-radius: 100%;
  right: 26px;
  bottom: 0px;
  background: var(--orange);
  transform: rotate(-45deg);
  box-shadow: 0 0 10px var(--white);
}

.toggle-box-label-left:after {
  content: '';
  display: inline-block;
  width: 40px;
  height: 24px;
  /*border-radius*/
  -webkit-border-radius: 16px;
  -moz-border-radius: 16px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.15);
  vertical-align: middle;
  margin: 0 10px;
  border: 2px solid var(--orange);
}

.toggle-box input[type='checkbox']:checked + .toggle-box-label-left:before {
  right: 17px;
  box-shadow: 5px 5px 0 0 var(--white);
  background: transparent;
}

.toggle-box input[type='checkbox']:checked + .toggle-box-label-left:after {
  background: rgba(0, 0, 0, 0.15);
  border: 2px solid var(--white);
}

.toggle-box input[type='checkbox'] + .toggle-box-label-left {
  color: rgba(250, 250, 250, 0.51);
  font-weight: bold;
}

.toggle-box input[type='checkbox']:checked + .toggle-box-label-left {
  color: rgba(149, 149, 149, 0.51);
  font-weight: normal;
}

.toggle-box input[type='checkbox']:checked + .toggle-box-label-left + .toggle-box-label {
  color: rgba(250, 250, 250, 0.51);
  font-weight: bold;
}

@media screen and (min-width: 800px) {
  .column {
    flex: 1;
  }
  .double-column {
    flex: 2;
  }
}

#topButton {
  display: none;
  align-items: center;
  position: fixed; /* Fixed/sticky position */
  bottom: 20px; /* Place the button at the bottom of the page */
  right: 30px; /* Place the button 30px from the right */
  z-index: 99; /* Make sure it does not overlap */
  border: none; /* Remove borders */
  outline: none; /* Remove outline */
  background: linear-gradient(90deg, var(--pink) 0%, var(--orange) 100%);
  color: white; /* Text color */
  cursor: pointer; /* Add a mouse pointer on hover */
  padding: 12px; /* Some padding */
  border-radius: 8.471rem !important;
  width: 3.088rem;
  height: 3.088rem;
}

#topButton:hover {
  background-color: #555; /* Add a dark-grey background on hover */
}

@media screen and (max-width: 550px) {
  #topButton {
    width: 2.5rem;
    height: 2.5rem;
  }
}

import numberOfFiles from '../archive/archiveFilesTotal.js';

const contributionsDisplay = document.getElementById('contributions-number');
const displayClass = document.getElementById('contributions-number').classList;
let displayNumber = 0;

// Create an array of ascending numbers corresponding with the number of archive files
const numberOfFilesArray = Array.from({ length: numberOfFiles }, (_, index) => index + 1);
const archiveCardsDirectory = './archive/cards';

// Import all archived cards and insert into the DOM
const importArchiveCards = async () => {
  for (const number of numberOfFilesArray) {
    try {
      const response = await fetch(`${archiveCardsDirectory}/archive_${number}.json`);
      const data = await response.json();
      const file = `archive_${number}.json`;
      const link = `https://github.com/Syknapse/Contribute-To-This-Project/blob/master/archive/cards/${file}`;

      const cards = data
        .map(card => {
          const { name, contacts, about, resources } = card;
          return `
            <div class="card">
              <!-- Fetched from Archive: ${file} -->
              <p class="name">${name}</p>
              <p class="contact">
              ${contacts
                .map(
                  contact => `
                    <i class="${contact.icon}"></i>
                    <a href="${contact.link}" target="_blank">${contact.handle}</a>
                    `
                )
                .join('')}
              </p>
              <p class="about">${about}</p>
              <div class="resources">
                <p>3 Useful Dev Resources</p>
                <ul>
                ${resources
                  .map(
                    resource => `
                    <li>
                      <a href="${resource.link}" target="_blank" title="${resource.title}">${resource.text}</a>
                    </li>
                  `
                  )
                  .join('')}
                </ul>
              </div>
              <p><small>Fetched From: <a href="${link}" target="_blank">${file}</a></small></p>
            </div>
          `;
        })
        .join('');
      const grid = document.getElementById('contributions');
      grid.innerHTML += cards;
    } catch (error) {
      console.error('Error importing archive JSON files:', error);
    } finally {
      countUp();
    }
  }
};

// Prompt to archive when there are too many cards
const showInfoInConsole = () => {
  const cardsInIndex = document.getElementsByClassName('card').length - 1;

  console.info('Cards in index.html', cardsInIndex);
  if (cardsInIndex > 100)
    console.warn(
      `Too many cards in index.html: ${cardsInIndex}. Run the archive_cards script. Follow instructions in archive/archiving_cards_guide`
    );
};
showInfoInConsole();

// display for the number of contributions
const countUp = () => {
  const numberOfCards = document.getElementsByClassName('card').length;
  const numberOfContributors = numberOfCards - 1; // minus the example card

  setTimeout(() => {
    if (displayNumber < numberOfContributors) {
      displayNumber++;
      contributionsDisplay.textContent = displayNumber;
      countUp();
    }

    if (displayNumber === numberOfContributors) displayClass.add('rubberBand');
  }, 15);
};

// night mode feature
document.getElementById('toggle-box-checkbox').addEventListener('change', e => {
  if (e.target.checked) {
    document.body.classList.add('night');
  } else {
    document.body.classList.remove('night');
  }
});

// Current year for footer
const currentYearSpan = document.getElementById('currentYear');
const currentYear = new Date().getFullYear();
currentYearSpan.innerText = currentYear;

// Search bar
// const searchBar = document.getElementById('searchbar')
// searchBar.addEventListener('input', searchCard)

// function clearSearchHighlights() {
//   const marks = Array.from(document.querySelectorAll('mark'))
//   if (marks.length > 0) {
//     marks.forEach(mark => {
//       mark.parentNode.replaceChild(mark.firstChild, mark)
//     })
//   }
// }

// function searchCard(e) {
//   const text = e.target.value.toLowerCase()
//   clearSearchHighlights()

//   const cards = document.querySelectorAll('.card')

//   cards.forEach(card => {
//     const cardText = card.textContent.toLowerCase()

//     if (cardText.indexOf(text) !== -1) {
//       const regex = new RegExp(text, 'gi')
//       const newText = cardText.replace(regex, match => `<mark>${match}</mark>`)
//       card.innerHTML = newText
//       card.style.display = 'block'
//     } else {
//       card.style.display = 'none'
//     }
//   })
// }

// Smooth scrolling for the 'Back to Top' button
const topButton = document.getElementById('topButton');

window.addEventListener('scroll', () => {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    topButton.style.display = 'block';
  } else {
    topButton.style.display = 'none';
  }
});

topButton.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// Initialize the page
importArchiveCards();
