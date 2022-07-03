// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getSourceJson } from '../../lib/apiFetcher';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {

  const results = await getSourceJson();
  res.status(200).json({ results: results });

}
