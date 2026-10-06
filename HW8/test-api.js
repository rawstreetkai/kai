async function main() {
  const apiKey = process.env.NYT_API_KEY;

  if (!apiKey) {
    throw new Error("NYT_API_KEY is not set.");
  }

  const url =
    "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=New%20York&api-key=" +
    encodeURIComponent(apiKey);

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      "NY Times request failed: " +
      response.status +
      " " +
      await response.text()
    );
  }

  const data = await response.json();

  if (!data.response || !Array.isArray(data.response.docs)) {
    throw new Error("Unexpected NY Times response format.");
  }

  console.log("NY Times API verified. Articles returned:", data.response.docs.length);
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
