const CAT_API_KEY = "<INSERT API KEY>";

axios.defaults.headers.common["x-api-key"] = CAT_API_KEY;
axios.defaults.baseURL = "https://api.thecatapi.com/v1/";

const catGifPath = "/images/search?mime_types=gif";
const catPicPath = "/images/search?mime_types=png,jpg";

const searchByBreedPath = `/images/search?breed_ids=amis`;

function getCatGif() {
  axios
    .get(catGifPath)
    .then((res) => displayImage(res, "Cat Gif"))
    .catch((err) => console.error(err));
}
function getCatPic() {
  axios
    .get(catPicPath)
    .then((res) => displayImage(res, "Cat Pic"))
    .catch((err) => console.error(err));
}
function searchByBreed() {
  axios
    .get(searchByBreedPath)
    .then((res) => {
      console.log(res);
      console.log(res.data[0].breeds[0].name);
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
  const data = res.data[0];
  const breedInfo = res.data[0].breeds[0];
  document.getElementById("cat_header").innerHTML = breedInfo.name;
  document.getElementById("render_res").innerHTML = `
  <div class="row">
    <div class="col">
    <img class="card-img-top" src="${data.url}">
    </div>
    <div class="col">
      <div class="card-body">
        <h5 class="card-title">${breedInfo.name}</h5>
          <p class="card-text">${breedInfo.description}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${breedInfo.temperament}</li>
        <li class="list-group-item">Life Span: ${breedInfo.life_span} Years</li>
        <li class="list-group-item">Origin: ${breedInfo.origin}</li>
      </ul>
      <div class="card-body">
        <a href="${breedInfo.wikipedia_url}" class="card-link">Wikipedia</a>
        <a href="#" class="card-link">Another link</a>
      </div>
  </div>
`;
}

document.getElementById("cat_gif").addEventListener("click", getCatGif);
document.getElementById("cat_pic").addEventListener("click", getCatPic);
document.getElementById("breed").addEventListener("click", searchByBreed);
