try {
  const response = await fetch(`https://api.disneyapi.dev/character/`);

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

const container = document.querySelector(".section");
function inject(item) {
  container.insertAdjacentHTML(
    "afterbegin",
    `
    <h2></h2>
    <h2>id: ${data.data._id}</h2>
    <h2></h2>
    `
  );
}
