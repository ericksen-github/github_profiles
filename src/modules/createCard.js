const createCard = (user) => {
  const cardHTML = `

    <div class = "card">
        <div>
            <img src="${user.avatar_url}" alt = "${user.name}"
        </div>
    </div>`;

  document.getElementById("main").innerHTML = cardHTML;
};

export { createCard };
