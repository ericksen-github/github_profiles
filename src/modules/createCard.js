const createCard = (user) => {
  const cardHTML = `
    <div class = "card">
        <div id = "imgContainer">
          <img src="${user.avatar_url}" alt = "${user.name}"
        </div>
        <div id = "infoContainer">
          <h2>${user.name}</h2>
          <p id = "bio">${user.bio}</p>
          <ul>
            <li>${user.public_repos}<p>Repos</p></li>
            <li>${user.followers}<p>Followers</p></li>
            <li>${user.following}<p>Following</p></li>
          </ul>
        </div>
    </div>`;

  document.getElementById("main").innerHTML = cardHTML;
};

export { createCard };
