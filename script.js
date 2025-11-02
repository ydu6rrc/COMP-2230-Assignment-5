async function getPermits() {
  const api = "https://data.winnipeg.ca/resource/it4w-cpf4.json";
  const response = await fetch(api);
  const data = await response.json();
  console.log(data);
}

getPermits();