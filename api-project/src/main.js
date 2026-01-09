const container = document.querySelector(".section");

async function getCharacters() {
  try {
    const response = await fetch("https://api.disneyapi.dev/character");

    if (!response.ok) {
      throw new Error("Request failed");
    }

    const result = await response.json();

    // loop through characters
    result.data.forEach((character) => {
      inject(character);
    });
  } catch (error) {
    console.log(error);
  }
}

function inject(item) {
  container.insertAdjacentHTML(
    "beforeend",
    `
    <div class="character">
      <h1>${item.name}</h1>
      <p>ID: ${item._id}</p>
      <p>Films: ${item.films || "no films"} </p>
    </div>
    `
  );
}

getCharacters();

const input = document.getElementById("search");
const button = document.getElementById("searchBtn");

async function searchCharacter(name) {
  try {
    const response = await fetch(
      `https://api.disneyapi.dev/character?name=${name}`
    );

    if (!response.ok) throw new Error("Request failed");

    const result = await response.json();

    container.innerHTML = "";

    if (result.data.length === 0) {
      container.textContent = "none.";
      return;
    }

    result.data.forEach(inject);
  } catch (error) {
    console.log(error);
  }
}
