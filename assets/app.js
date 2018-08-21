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

$('.about').hide();
$('.projects').hide();
$('.contact').hide();

$(document).click(function (event) {
  if (!$(event.target).closest(aboutBtn).length) {
    if ($('.about').is(":visible")) {
      $('.about').hide();
    }
    projectsBtn.css('opacity', 1);
    contactBtn.css('opacity', 1);
    aboutBtn.css('font-weight', 300);
  }
  if ($(event.target).closest(aboutBtn).length) {
    projectsBtn.css('opacity', 0.5);
    contactBtn.css('opacity', 0.5);
    aboutBtn.css('font-weight', 500);
    $('.about').show();
  }

  if (!$(event.target).closest(projectsBtn).length) {
    if ($('.projects').is(":visible")) {
      $('.projects').hide();
    }
    aboutBtn.css('opacity', 1);
    contactBtn.css('opacity', 1);
    projectsBtn.css('font-weight', 300);
  }
  if ($(event.target).closest(projectsBtn).length){
    contactBtn.css('opacity', 0.5);
    aboutBtn.css('opacity', 0.5);
    projectsBtn.css('font-weight', 500);
    $('.projects').show();
  }

  if (!$(event.target).closest(contactBtn).length) {
    if ($('.contact').is(":visible")) {
      $('.contact').hide();
    }
    projectsBtn.css('opacity', 1);
    aboutBtn.css('opacity', 1);
    contactBtn.css('font-weight', 300);
  }
  if ($(event.target).closest(contactBtn).length){
    projectsBtn.css('opacity', 0.5);
    aboutBtn.css('opacity', 0.5);
    contactBtn.css('font-weight', 500);
    $('.contact').show();
  }
});