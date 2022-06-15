const CAT_API_KEY = "<INSERT API KEY>";

axios.defaults.headers.common["x-api-key"] = CAT_API_KEY;
axios.defaults.baseURL = "https://api.thecatapi.com/v1/";

const catGifPath = "/images/search?mime_types=gif";
const catPicPath = "/images/search?mime_types=png,jpg";

// Sends GET request and displays the image
function getCatGif() {
  axios
    .get(catGifPath)
    .then((res) => {
      displayImage(res, "Cat Gif");
    })
    .catch((err) => console.error(err));
}

function getCatPic() {
  axios
    .get(catPicPath)
    .then((res) => {
      displayImage(res, "Cat Pic");
    })
    .catch((err) => console.error(err));
}

function searchByBreed() {
  // get value inputted in the search bar
  const breed = document.getElementById("breed_search").value;
  const searchByBreedPath = `breeds/search?q=${breed}`;
  axios
    .get(searchByBreedPath)
    .then((res) => {
      displayBreedInfo(res);
    })
    .catch((err) => console.error(err));
}

function displayImage(res, header) {
  const imageUrl = res.data[0].url;
  document.getElementById("cat_header").innerHTML = header;
  document.getElementById("render_res").innerHTML = `
  <img class="thumbnail img-responsive" src="${imageUrl}" />`;
}

function displayBreedInfo(res) {
  const breedInfo = res.data[0];
  const imageUrl = `https://cdn2.thecatapi.com/images/${breedInfo.reference_image_id}.png`;
  document.getElementById("cat_header").innerHTML = breedInfo.name;
  document.getElementById("render_res").innerHTML = `
  <div class="row">
    <div class="col">
    <img id='image' class="card-img-top" src="${imageUrl}">
    </div>
    <div class="col">
      <div class="card-body">
        <h5 class="card-title">${breedInfo.name}</h5>
          <p class="card-text">${breedInfo.description}</p>
      </div>
      <ul class="list-group list-group-flush">
      <li class="list-group-item">Origin: ${breedInfo.origin}</li>
      <li class="list-group-item">${breedInfo.temperament}</li>
      <li class="list-group-item">Life Span: ${breedInfo.life_span} Years</li>
      </ul>
      <div class="card-body">
        <a href="${breedInfo.wikipedia_url}" class="card-link">Wikipedia</a>
        <a href="${breedInfo.cfa_url}" class="card-link">CFA</a>
      </div>
  </div>
`;
  const img = document.getElementById("image");
  // if image is not loaded change url to end with jpg
  // otherwise will need to make another Get request for the image
  img.addEventListener("error", function (event) {
    event.target.src = `https://cdn2.thecatapi.com/images/${breedInfo.reference_image_id}.jpg`;
    event.onerror = null;
  });
  document.getElementById("search_bar").reset();
}

document.getElementById("cat_gif").addEventListener("click", getCatGif);
document.getElementById("cat_pic").addEventListener("click", getCatPic);
document.getElementById("breed").addEventListener("click", searchByBreed);
