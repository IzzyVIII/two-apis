# Two APIs

Build a small web page that uses **at least two** third-party APIs together — ideally where the result of one feeds into the other (the same chained-fetch pattern from today's lesson).

A starter `index.html`, `app.js`, and `styles.css` are included.

## Requirements

1. **Add a user input** to the page (a button, dropdown, search field — your call).
2. **Call API #1** when the user interacts with the input.
3. **Call API #2** using *something* from API #1's response (a name, a country code, a category, an id — anything).  This chained pattern is the key thing to practice.
4. **Render the combined result** to the DOM using vanilla DOM methods (no React yet).
5. Show a "loading…" state while a fetch is in flight, and handle errors gracefully if either API fails.

## Live APIs (no sign-up)

- [TheCocktailDB](https://www.thecocktaildb.com/api.php) — search cocktails by name, ingredient, or random
- [Cat Facts](https://catfact.ninja/) — random cat facts
- [Open Trivia DB](https://opentdb.com/api_config.php) — random trivia questions by category
- [REST Countries](https://restcountries.com/) — country data (population, currencies, flags, languages)
- [Dog API](https://dog.ceo/dog-api/) — random dog images by breed
- [ipapi.co](https://ipapi.co/json) — your current IP's geolocation
- [Image Charts](https://documentation.image-charts.com/) — generate chart images from URL params
- [Imgflip](https://imgflip.com/api) — popular meme templates
- [Open Food Facts](https://world.openfoodfacts.org/data) — product data by barcode
- [Star Wars API](https://swapi.dev/) — films, people, planets, vehicles
- [Open-Meteo](https://open-meteo.com/) — weather, no key required
- [PokéAPI](https://pokeapi.co/) — pokemon data

> All checked live as of writing.  If you find another API you want to use, go for it — just make sure it doesn't require an API key.

## Ideas for chaining two APIs

- **Drink + photo**: random cocktail (TheCocktailDB) → fetch a dog photo (Dog API) "to keep you company while you sip"
- **Pokemon + trivia**: random pokemon (PokéAPI) → trivia question on its type-themed category (Open Trivia DB)
- **Country + weather**: pick a country (REST Countries) → fetch current weather for its capital city (Open-Meteo)
- **Geo + facts**: get user's IP location (ipapi.co) → fetch country info for the detected country (REST Countries)
- **Pokemon + chart**: random pokemon (PokéAPI) → render its stats as a pie chart (Image Charts)

## Things to think about
- Should your second fetch run as soon as the first finishes, or only after the user reacts to the first result?
- If the first API succeeds but the second fails, what does the page show?
- The lesson used `await` inside a `for` loop to chain calls.  When would `Promise.all` make more sense?

## Stretch
- Cache responses so a repeat user input doesn't hit the API again with the same arguments.
- Add a third API and let the user pick which combination to render.
- Show response times for each fetch (use `performance.now()`).

> Stuck? Have a code error? Use the ["4 Before Me"](https://docs.google.com/document/d/1nseOs5oabYBKNHfwJZNAR7GlU0zkZxNagsw63AD7XV0/edit) debugging checklist to help you solve it!
