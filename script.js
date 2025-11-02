const input = document.querySelector(".search");
const button = document.querySelector(".search-btn");
const results = document.querySelector(".results");

button.addEventListener("click", async function () {
  const search = input.value;
  const apiUrl =
    "https://data.winnipeg.ca/resource/it4w-cpf4.json?" +
    `$where=lower(address) LIKE lower('%${search}%')`;

  const encodedURL = encodeURI(apiUrl);

  try {
    const response = await fetch(encodedURL);

    if (!response.ok) {
      throw new Error(`HTTP Error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.length === 0) {
      results.innerHTML = "Please check address";
      return;
    }

    results.innerHTML =
      data[0].address +
      "<br>" +
      data[0].permit_number +
      "<br>" +
      data[0].status +
      "<br>" +
      data[0].permit_group;
  } catch (error) {
    console.error("Error:", error);
    results.innerHTML = "Unexpected error.";
  }
});
