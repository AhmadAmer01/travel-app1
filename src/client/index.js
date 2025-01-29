//src/client/js/index.js

import "./styles/style.scss";
import { handleSubmit } from "./js/app";

document.getElementById("travelForm").addEventListener("submit", handleSubmit);
document.getElementById('remove-trip').addEventListener('click', () => {
  document.getElementById('output-city').innerText = '-';
  document.getElementById('output-country').innerText = '-';
  document.getElementById('output-weather').innerText = '-';
  document.getElementById('output-date').innerText = '-';
  document.getElementById('output-image').remove();
 
});
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(reg => console.log('Service Worker registered', reg))
      .catch(err => console.error('Service Worker registration failed', err));
  });
}