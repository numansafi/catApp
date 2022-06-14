axios.defaults.headers.common["x-api-key"] =
  "cc5937bc-590b-4ae7-a95f-dd70cf670735";
axios.defaults.baseURL = "https://api.thecatapi.com/v1/";

const getCatGif = async () => {
  try {
    const response = await axios.get(
      `images/search?limit=1&size=full&mime_types=gif`
    );
    const data = response.data[0];

    console.log(response);
    showOutput(data);
  } catch (errors) {
    console.error(errors);
  }
};

function showOutput(res) {
  document.getElementById("res").innerHTML = `
  <div class="card card-body mb-3">
  <img src="${res.url}" alt="">
  </div>
`;
}

document.getElementById("catgifs").addEventListener("click", getCatGif);
