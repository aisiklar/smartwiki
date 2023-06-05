type wikiResult = {
  pageid: string;
  ns: string;
  title: string;
  index: number;
  extract: string;
  pageimage: string;
  thumbnail?: {
    source: string;
    width: number;
    height: number;
  };
};

//type wikiResultsArr = Array<wikiResult>

type wikiResultsArr = wikiResult[];
