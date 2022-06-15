# Cat App

This app was created using HTML,CSS,JavaScript, bootstrap and axios.

This app displays pictures, gifs and breed information of cats. This is done through sending requests to the catAPI endpoints.

- `Cat Gif` - sends a GET request to `https://api.thecatapi.com/v1/images/search?mime_types=png,jpg` to retrieve a random image url
- `Cat Pic` - sends a GET request to `https://api.thecatapi.com/v1/images/search?mime_types=gif` to retrieve a random gif url
- `Search by breed` - sends a GET request to `https://api.thecatapi.com/v1/breeds/search?q=<breed>` to retrieve the specific breed info inputted into the search bar

## Running the App

Clone the repo

```
git clone https://github.com/numansafi/catApp.git
```

Change to catApp directory

```
cd catApp
```

Open index.js

```
cd src/index.js
code .
```

Input catAPI key in `index.js` file

```js
const CAT_API_KEY = "<INSERT API KEY>";
```

Open the app within the browser

```
open src/index.html
```
