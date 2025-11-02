const input = document.querySelector(".search");
const button = document.querySelector(".search-btn");
const results = document.querySelector(".results");

button.addEventListener("click", async function () {
  const search = input.value;
  const apiUrl =
    "https://data.winnipeg.ca/resource/it4w-cpf4.json?" +
    `$where=lower(address) LIKE lower('%${search}%')`;

  const encodedURL = encodeURI(apiUrl);

  const response = await fetch(encodedURL);
  const data = await response.json();

  results.innerHTML =
    data[0].address +
    "<br>" +
    data[0].permit_number +
    "<br>" +
    data[0].status +
    "<br>" +
    data[0].permit_group;
});
