import axios from 'axios';

interface ApiResponse {
  messages: Object
  results: Object
  index: Array<Demonstration>
  item: Array<Object>
}

interface Demonstration {
  id: string
  datum: string
  von: string
  bis: string
  thema: string
  plz: string
  strasse_nr: string
  aufzugsstrecke: string
  lfdnr: string
}

export async function getSourceJson() {

  const parsedResults = await axios.get<ApiResponse>('https://www.berlin.de/polizei/service/versammlungsbehoerde/versammlungen-aufzuege/index.php/index/index.json?q=datum')
  .then( results => {
    return parseSourceJson(results.data.index);
  }).catch( err => {
    if (axios.isAxiosError(err)) {
      if (err.response && err.response.status === 404) {
       return err.message ;
      }
    } else {
      return 'Unknown Axios error';
    }
  });

  return parsedResults;

}

function parseSourceJson(index: Array<Demonstration>): Array<Demonstration> {
  const filteredResults = index.filter(demo => {
    return demo.datum == "03.07.2022";
  });
  return filteredResults;
}