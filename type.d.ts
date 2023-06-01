
type wikiResult = {
    pageId: string,
    ns: string,
    title: string,
    index: number,
    extract: string,
    thumbnail?: {
        source: string,
        width: number,
        height: number,
    },
    pageimage: string
}

//type wikiResultsArr = Array<wikiResult>

type wikiResultsArr = wikiResult[];

