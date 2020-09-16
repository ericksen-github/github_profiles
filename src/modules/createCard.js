const createCard = (user) => {
  const cardHTML = `
    <div class = "card">
        <img src="${user.avatar_url}" alt = "${user.name}"
        <div> 
            <h2>${user.name}</h2>
            <p>${user.bio}</p>
        </div>
        <div>
            <p>Repos</p>
            <p>${user.public_repos}</p>
        </div>
    </div>`;

  console.log(user);
  document.getElementById("main").innerHTML = cardHTML;
};

export { createCard };
