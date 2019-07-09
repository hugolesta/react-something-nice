"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _allowedLanguages = _interopRequireDefault(require("./allowedLanguages"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var messages = ["Have a great day ☕️!", "Lets' continue bringing out the best in one another 👌", "Thank you for your dedication, your time and your talent 👍", "Thank you for your hard work ✨", "Thank you 👏!", "We're glad that you're part of our team 🤗", "Your engineering team wishes you a fantastic day ♥"];
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
var mensajes = ["Que tengas un buen día = !", "Gracias por trabajar tanto!", "Muchas gracias :)", "Que bien lo estás haciendo 👌", "Gracias por tu dedicación, tu tiempo y tu talento 👍", "Gracias 👏!", "Estamos contentos de que seas parte de nuestro grupo 🤗", "Tu grupo de ingrenieria te desea un fantastico día ♥"];

var languages = function languages(lang) {
  var l = {
    en: messages,
    es: mensajes
  };
  return l[lang];
};

var getMessage = function getMessage(lang) {
  if (!lang) lang = 'en';

  var currentLangCheck = _allowedLanguages["default"].some(function (language) {
    return language.includes(lang);
  });

  if (!currentLangCheck) lang = 'en';
=======
var mensajes = ["Que tengas un buen día = !", "Gracias por trabajar tanto!", "Muchas gracias :)"];
=======
var mensajes = ["Que tengas un buen día = !", "Gracias por trabajar tanto!", "Muchas gracias :)", "Que bien lo estás haciendo 👌", "Gracias por tu dedicación, tu tiempo y tu talento 👍", "Gracias 👏!", "Estamos contentos de que seas parte de nuestro grupo 🤗", "Tu grupo de ingrenieria te desea un fantastico día ♥"];
>>>>>>> added build for spanish messages as well

var languages = function languages(lang) {
  var l = {
    en: messages,
    es: mensajes
  };
  return l[lang];
};

var getMessage = function getMessage(lang) {
  if (!lang) lang = 'en';
<<<<<<< HEAD
>>>>>>> added new language ES and EN as default.
=======

  var currentLangCheck = _allowedLanguages["default"].some(function (language) {
    return language.includes(lang);
  });

  if (!currentLangCheck) lang = 'en';
>>>>>>> simplified language check and deleted console.logs
=======
var mensajes = ["Que tengas un buen día = !", "Gracias por trabajar tanto!", "Muchas gracias :)"];

var languages = function languages(lang) {
  var l = {
    en: messages,
    es: mensajes
  };
  return l[lang];
};

var getMessage = function getMessage(lang) {
  console.log("Lang en getMessage ".concat(lang));
  if (!lang) lang = 'en';
>>>>>>> added new language ES and EN as default.
  var idiom = languages(lang);
  return idiom[Math.floor(Math.random() * idiom.length)];
};

var _default = getMessage;
exports["default"] = _default;