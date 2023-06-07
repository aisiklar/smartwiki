import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getWikiResults } from "../library/getWikiResults";
import Image from "next/image";
import ListItem from "./components/ListItem.comp";

type Props = {
  params: {
    searchItem: string;
  };
};

type myData = wikiResult;

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

  let resultsArray: wikiResultsArr = [];

  if (data.query) {
    console.log("in if(data) block!....");
    console.log("data received from wiki: ", data);
    console.log("data.query.pages received from wiki: ", data.query.pages);
    console.log(
      "typeof data.query.pages received from wiki: ",
      typeof data.query.pages
    );
    for (let item of Object.values(data.query.pages)) {
      resultsArray.push(item as wikiResult);
    }
    console.log("resultsArray:", resultsArray);
  }

  if (!data.query) {
    console.log("no data.query. call notFound()");
    notFound();
  }

  const contents = (
    <main>
      {resultsArray.map((item) => (
        <ListItem key={data.pageid} data={item} />
      ))}
    </main>
  );

  return contents;
}

/*

 {resultsArray.map((item) => (
        <p key={item.pageid}>
          {item.thumbnail ? (
            <Image
              src={item.thumbnail.source}
              alt="xx"
              width={20}
              height={20}
            ></Image>
          ) : null}
          {item.title}, <br></br> {item.extract}
        </p>
      ))}
*/
