const links = [
  'http://kennethpostigo.me/Basic-Portfolio/',
  'http://kennethpostigo.me/Bootstrap-Portfolio',
  'http://kennethpostigo.me/Word-Guess-Game/',
  'http://kennethpostigo.me/unit-4-game',
  'https://www.youtube.com/watch?v=wi4kLtpQrWU&list=PL5qWdIdE89dTaSz3-DdtAVUGXFZDCt8-u',
  'https://sites.tufts.edu/eeseniordesignhandbook/electrical-and-computer-engineering-design-handbook/senior-capstone-projects-summary-for-the-2016-17-academic-year/blue-team-2017/',
  'https://www.youtube.com/watch?v=L48ZfXnq5vE'
],
  labels = [
    'Basic Portfolio',
    'Bootstrap Portfolio',
    'Hangman Word Game',
    'Gem Game',
    'Swarm Bots',
    '3D Synthetic Aperture Radar (SAR) UAV Capstone Project, Poster, and Tech Notes',
    '3D SAR UAV Video'
  ];

var aboutBtn = $('.about-btn'),
  projectsBtn = $('.projects-btn'),
  contactBtn = $('.contact-btn');

$(document).ready(function () {
  hide();
});

$(document).on('click', '.about-btn', function (event) {
  if ($('.about').is(":visible")) {
    hide();
    clearstyles();
  } else {
    hide();
    clearstyles();
    $('.about').show();
    projectsBtn.css('opacity', 0.5);
    contactBtn.css('opacity', 0.5);
    aboutBtn.css('font-weight', 500);
  }
});

$(document).on('click', '.projects-btn', function (event) {
  if ($('.projects').is(":visible")) {
    hide();
    clearstyles();
  } else {
    hide();
    clearstyles();
    $('.projects').show();
    aboutBtn.css('opacity', 0.5);
    contactBtn.css('opacity', 0.5);
    projectsBtn.css('font-weight', 500);
  }
});

$(document).on('click', '.contact-btn', function (event) {
  if ($('.contact').is(":visible")) {
    hide();
    clearstyles();
  } else {
    hide();
    clearstyles();
    $('.contact').show();
    projectsBtn.css('opacity', 0.5);
    aboutBtn.css('opacity', 0.5);
    contactBtn.css('font-weight', 500);
  }
});

/* utility */

var clearstyles = () => {
  aboutBtn.css({
    'opacity': 1,
    'font-weight': 300
  });
  projectsBtn.css({
    'opacity': 1,
    'font-weight': 300
  });
  contactBtn.css({
    'opacity': 1,
    'font-weight': 300
  });
}

var hide = () => {
  $('.about').hide();
  $('.projects').hide();
  $('.contact').hide();
}