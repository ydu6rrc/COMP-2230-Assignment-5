const input = document.querySelector(".search");
const button = document.querySelector(".search-btn");
const results = document.querySelector(".results");

button.addEventListener("click", async function (event) {
  event.preventDefault();

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
    results.innerHTML = "";

    for (let i = 0; i < 3 && i < data.length; i++) {
      results.innerHTML +=
        "Address: " +
        data[i].address +
        "<br>" +
        "Permit Number: " +
        data[i].permit_number +
        "<br>" +
        "Status: " +
        data[i].status +
        "<br>" +
        "Permit Group: " +
        data[i].permit_group +
        "<br><br>";
    }
  } catch (error) {
    console.error("Error:", error);
    results.innerHTML = "Unexpected error.";
  }
});
