const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "lJImZ8ymE2JJxGMuOtXVow==yF5Xnd8Ku7UfBcbU";


var limit = 3;

const request = {
  url: 'https://api.api-ninjas.com/v1/dadjokes?limit=' + limit,
  headers: {
    'X-Api-Key': apiKey,
    'Content-Type': 'application/json'
  },
}

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=" + limit;

async function getJoke() {
  try {
    jokeEl.innerText = "Updating...";
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";
    const response = await fetch(apiURL, request);
    const data = await response.json();
    console.log(data);

    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke";

    jokeEl.innerText = data[0].joke;
  } catch (error) {
    jokeEl.innerText = "An error happened, try again later";
    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke";
    console.log(error);
  }
}

btnEl.addEventListener("click", getJoke);
