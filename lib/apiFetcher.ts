import axios from 'axios';
import { format } from 'date-fns';

interface ApiResponse {
  messages: Object
  results: Object
  index: Array<IDemonstration>
  item: Array<Object>
}

export interface IDemonstration {
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

export async function getProtests() {

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

function parseSourceJson(index: Array<IDemonstration>): Array<IDemonstration> {

  const today = new Date();
  const filterString = format(today, 'dd.LL.yyyy');

  const filteredResults = index.filter(demo => {
    return demo.datum == filterString;
  });
  return filteredResults;
}