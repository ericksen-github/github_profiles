const APIURL = "https://api.github.com/users/";

const apiFunctions = (() => {
  // starts the api call process
  async function newCall(user) {
    try {
      const response = await fetch(APIURL + user, { mode: "cors" });

      console.log(await response.json());
    } catch (error) {
      alert("There was an error with your search.");
    }
  }

  return {
    newCall,
  };
})();

export { apiFunctions };
