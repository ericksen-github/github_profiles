const APIURL = "https://api.github.com/users/";

const apiFunctions = (() => {
  // starts the api call process
  async function newCall() {
    try {
      const response = await fetch(APIURL + "ericksen-github", {
        mode: "cors",
      });

      sortUserData(await response.json());
    } catch (error) {
      alert("There was an error with your search.");
    }
  }

  const sortUserData = (data) => {
    console.log(data.avatar_url);
  };

  return {
    newCall,
  };
})();

export { apiFunctions };
