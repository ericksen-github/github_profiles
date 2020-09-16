import { createCard } from "./createCard";

const APIURL = "https://api.github.com/users/";

const apiFunctions = (() => {
  // starts the api call process
  async function newCall() {
    try {
      const response = await fetch(APIURL + "ericksen-github", {
        mode: "cors",
      });

      createCard(await response.json());
    } catch (error) {
      alert("There was an error with your search.");
    }
  }

  return {
    newCall,
  };
})();

export { apiFunctions };
