const createTutorialCard = () => {
  const body = document.getElementById("body");

  const card = document.createElement("div");
  const container = document.createElement("div");
  const h = document.createElement("h2");
  const p = document.createElement("p");
  const button = document.createElement("div");

  card.id = "card";
  container.id = "innerCard";

  h.innerHTML = "How it works";
  container.appendChild(h);

  p.innerHTML =
    "This project allows you to look up and retrieve basic info from a ";

  p.innerHTML += "GitHub profile using the GitHub API. After searching, click ";
  p.innerHTML +=
    "on the name or image to link directly to that profile. Click ";
  p.innerHTML += "on the links to be taken to that specific repository. ";

  container.appendChild(p);

  button.id = "closeButton";
  button.innerHTML = "Close";
  button.addEventListener("click", () => {
    document.getElementById("card").remove();
    document.getElementById("overlay").style.display = "none";
  });

  container.appendChild(button);
  card.appendChild(container);
  body.appendChild(card);
  document.getElementById("overlay").style.display = "block";
};

export { createTutorialCard };
