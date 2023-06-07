type wikiResult = {
  pageid: number;
  ns: number;
  title: string;
  index: number;
  contentmodel: string;
  pagelanguage: string;
  pagelanguagehtmlcode: string;
  pagelanguagedir: string;
  touched: string;
  lastrevid: number;
  length: number;
  fullurl: string;
  editurl: string;
  canonicalurl: string;
  extract: string;
  thumbnail?: {
    source: string;
    width: number;
    height: number;
  };
};

//type wikiResultsArr = Array<wikiResult>

type wikiResultsArr = wikiResult[];

// eski type (info ve inprop eklenmeden önceki)
/* type wikiResult = {
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
}; */
