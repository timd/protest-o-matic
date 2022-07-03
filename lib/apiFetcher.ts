import axios from 'axios';
import { format } from 'date-fns';

interface ApiResponse {
  results: Object
  messages: Object
  item: Array<Object>
  index: Array<IDemonstration>
 
}

export interface IDemonstration {
  id: string
  von: string
  bis: string
  plz: string
  datum: string
  thema: string
  lfdnr: string
  strasse_nr: string
  aufzugsstrecke: string
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

  filteredResults.forEach( demo => {
    const newThema = demo.thema.split(' (vom');
    demo.thema = newThema[0];
  })

  return filteredResults;
}