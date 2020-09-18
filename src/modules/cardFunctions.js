const APIURL = "https://api.github.com/users/";

const cardFunctions = (() => {
  const createCard = (user) => {
    const cardHTML = `
      <div class = "card">
          <div id = "imgContainer">
            <img src="${user.avatar_url}" alt = "${user.name}" />
          </div>
          <div id = "infoContainer">
            <h2>${user.name}</h2>
            <p id = "bio">${user.bio}</p>

            <ul>
              <li>${user.public_repos}<p>Repos</p></li>
              <li>${user.followers}<p>Followers</p></li>
              <li>${user.following}<p>Following</p></li>
            </ul>

            <div id = "repoContainer"></div>
          </div>
      </div>`;

    document.getElementById("main").innerHTML = cardHTML;
    getRepos(user.login);
  };

  async function getRepos(userName) {
    const response = await fetch(APIURL + userName + "/repos");
    addReposToCard(await response.json());
  }

  const addReposToCard = (repos) => {
    const repoContainer = document.getElementById("repoContainer");

    repos.forEach((ele) => {
      const newLink = document.createElement("a");
      newLink.classList.add("repoLink");
      newLink.innerHTML = ele.name;
      newLink.href = ele.html_url;
      newLink.target = "_blank";
      repoContainer.appendChild(newLink);
    });
  };

  return {
    createCard,
  };
})();

export { cardFunctions };
