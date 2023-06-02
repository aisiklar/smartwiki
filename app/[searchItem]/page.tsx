import { Metadata } from "next";

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

  return <div></div>;
}
