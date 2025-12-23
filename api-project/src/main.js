async function fetchCocktails(cocktail) {
  try {
    const response = await fetch(
      `www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`
    );
    if (response.status != 200) {
      throw new Error(response);
    } else {
      const data = await response.json();
      console.log(data);
      document.getElementById("api-response").textContent = data.name;
    }
  } catch (error) {
    console.log(error);
  }
}
fetchCocktails("margarita");
