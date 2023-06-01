type searchInputType = string;

export default async function getWikiResults(search: searchInputType) {
  console.log("in getWikiResults, passed in search: ", search);

  let searchParams = new URLSearchParams({
    action: "query",
    generator: "seacrh",
    gsrseacrh: search,
    gsrlimit: "20",
    prop: "info|extracts|images",
    exchars: "100",
    exintro: "true",
    exlimit: "max",
    format: "json",
    inprop: "url",
    origin: "*",
  });

  const url = "https://en.wikipedia.org/w/api.php?" + searchParams;

  let fetchResult = await fetch(url);

  console.log("fetchResult: ", fetchResult);

  let result = fetchResult.json();

  console.log("result: ", result);
  return result;
}
