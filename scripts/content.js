var prefix = 'JIRA Board Extension >>>>>>>>>> ';

// Hide top navigation
var parentDiv = document.querySelector("#jira-frontend");
parentDiv ? parentDiv.style.display = "block" : console.log(prefix + 'parentDiv not found');

var navHeaderContainer = document.querySelector("#jira-frontend > div:nth-child(5) > div:nth-child(2)");
navHeaderContainer ? navHeaderContainer.style.display = "block" : console.log(prefix + 'navHeaderContainer not found');

var navHeader = document.querySelector("#ak-jira-navigation");
navHeader ? navHeader.style.display = "none" : console.log(prefix + 'navHeader not found');

// Apply some margin on the top so columns are not touching the edge
var section = document.querySelector("section");
section ? section.style.marginTop = "10px" : console.log(prefix + 'section not found');

// Hide side navigation
var sideNavigation = document.querySelector("#ak-side-navigation");
sideNavigation ? sideNavigation.style.display = "none" : console.log(prefix + 'sideNavigation not found');

// Hide board title and filters
var contentHeader = document.querySelector("#ak-main-content > div > div > div:nth-child(1)");
contentHeader ? contentHeader.style.display = "none" : console.log(prefix + 'contentHeader not found');

// Remove unwanted elements from all cards
var cards = document.querySelectorAll('[id^="card-"]');
cards.forEach(function(card) {
    // TODO fix query
    // var cardFooter = document.querySelector('#' + card.id + " div:nth-child(1) > div > div.css-dkd0qj > div > div:nth-child(4) > div");
    // cardFooter.style.setProperty('grid-template', 'none');
});