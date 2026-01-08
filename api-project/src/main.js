async function fetchCharacters(chara) {
  try {
    const response = await fetch(
      `https://api.disneyapi.dev/character/${chara}`
    );

    if (response.status != 200) {
      throw new Error(response);
    } else {
      const data = await response.json();
      console.log(data.data);

      document.getElementById("api-response").textContent = data.name;
    }
  } catch (error) {
    console.log(error);
  }
}
fetchCharacters("308");
