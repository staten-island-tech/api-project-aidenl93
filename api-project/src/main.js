const container = document.querySelector(".section");

async function getCharacters() {
  try {
    const response = await fetch("https://api.disneyapi.dev/character");

    if (!response.ok) {
      throw new Error("Request failed");
    }

    const result = await response.json();

    // loop through characters
    result.data.forEach(character => {
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
    <div class="character 
      font-[Montserrat]
      w-64 p-5 rounded-2xl
      bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500
      text-white
      shadow-xl
      backdrop-blur-md
      hover:scale-105 hover:shadow-2xl
      transition duration-300
      flex flex-col gap-2
    ">
      <h1 class="text-xl font-bold tracking-wide">
        ${item.name}
      </h1>

      <p class="text-sm opacity-80">
        ID: ${item._id}
      </p>

      <p class="text-sm">
        <span class="font-semibold">Films:</span><br>
        ${item.films}
      </p>
      
      <p class="text-sm">
        <span class="font-semibold">Films:</span><br>
        Video Games: ${item.videoGames}
      </p>
    </div>
    `
  );
}

getCharacters();

const input = document.getElementById("search");
const button = document.getElementById("searchBtn");

async function searchCharacter(name) {
  if (!name) return;

  try {
    const response = await fetch(
      `https://api.disneyapi.dev/character?name=${encodeURIComponent(name)}`
    );

    if (!response.ok) throw new Error("Request failed");

    const result = await response.json();

    container.innerHTML = "";

    if (!result.data.length) {
      container.innerHTML = `
        <p class="text-gray-500 text-lg">No characters found.</p>
      `;
      return;
    }

    result.data.forEach(inject);
  } catch (error) {
    console.error(error);
  }
}

button.addEventListener("click", () => {
  searchCharacter(input.value);
});


input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    searchCharacter(input.value);
  }
});
