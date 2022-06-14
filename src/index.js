const CAT_API_KEY = "cc5937bc-590b-4ae7-a95f-dd70cf670735";

axios.defaults.headers.common["x-api-key"] = CAT_API_KEY;
axios.defaults.baseURL = "https://api.thecatapi.com/v1/";

const catGifPath = "/images/search?mime_types=gif";
const catPicPath = "/images/search?mime_types=png,jpg";
const breedSearchValue = "beng";
console.log(breedSearchValue);
const searchByBreedPath = `/images/search?breed_ids=${breedSearchValue}`;

function getCatGif() {
  axios
    .get(catGifPath)
    .then((res) => showOutput(res))
    .catch((err) => console.error(err));
}
function getCatPic() {
  axios
    .get(catPicPath)
    .then((res) => showOutput(res))
    .catch((err) => console.error(err));
}
function searchByBreed() {
  axios
    .get(searchByBreedPath)
    .then((res) => showOutput(res))
    .catch((err) => console.error(err));
}

function showOutput(res) {
  const imageUrl = res.data[0].url;
  return (document.getElementById("cat_image").src = imageUrl);
}

document.getElementById("cat_gif").addEventListener("click", getCatGif);
document.getElementById("cat_pic").addEventListener("click", getCatPic);
document.getElementById("breed").addEventListener("click", searchByBreed);
