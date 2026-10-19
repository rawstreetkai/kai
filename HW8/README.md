# Homework 8 — New York Times Article Search

This assignment uses the New York Times Article Search API.

## Files

- [index.html](index.html) — interactive search page with a search term and API key input.
- [results.html](results.html) — HTML page with 10 article search results obtained from an API request.
- [test-api.js](test-api.js) — Node.js script used to verify the API and generate results.html.

## How to view it

Download or open `results.html` in a browser to view the saved article results without entering an API key.

To perform a new interactive search, open `index.html`, enter a valid New York Times API key and a search term, then select **Search**.

## Key handling

The API key for the automated verification is stored as a GitHub Actions secret named `NYT_API_KEY`. It is not embedded in the HTML results or committed to the repository. The interactive page requires the viewer to provide a key for new searches.
