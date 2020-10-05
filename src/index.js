import { apiFunctions } from "./modules/apiCall";
import { createTutorialCard } from "./modules/tutorialCard";

const form = document.getElementById("form");
const search = document.getElementById("search");

search.value = ""; // keeps search box clear on load

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = search.value;
  apiFunctions.newCall(user);
});

document.getElementById("tutorial").addEventListener("click", () => {
  createTutorialCard();
});
