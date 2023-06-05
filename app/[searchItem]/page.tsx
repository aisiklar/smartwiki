import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getWikiResults } from "../library/getWikiResults";

type Props = {
  params: {
    searchItem: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  console.log("in generateMetaData: params: ", params);
  return {
    title: `wiki-${params.searchItem}`,
    description: `results for ${params.searchItem}, smart Wiki App, developed by m-alptekin`,
  };
}

/* export default function searchParam({ params }: Props) {}
 */

//typescript 2
export default async function SearchUserInput({
  params: { searchItem },
}: Props) {
  console.log("searchItem: ", searchItem, typeof searchItem);
  let wikiResults = await getWikiResults(searchItem);
  let data = await wikiResults;
  console.log("data received from wiki: ", data);
  console.log(
    "typeof data.query.pages received from wiki: ",
    typeof data.query.pages
  );
  //console.log("data.query.pages received from wiki: ", data.query.pages);

  let resultsArray: wikiResultsArr = [];

  for (let item of Object.values(data.query.pages)) {
    resultsArray.push(item as wikiResult);
  }
  console.log("resultsArray:", resultsArray);

  if (!data) {
    notFound();
  }

  return (
    <div>
      {resultsArray.map((item) => (
        <p key={item.pageid}>
          {item.title}, <br></br> {item.extract}
        </p>
      ))}
    </div>
  );
}
