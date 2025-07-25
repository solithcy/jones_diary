import type {PageLoad} from "./$types";
import {getEntries} from "$lib/api";

export const load: PageLoad = async ({parent, fetch}) => {
  const data = await parent();
  if(data?.user !== undefined){
    return {
      entries: await getEntries(fetch)
    }
  }
  return {
    entries: []
  }
}
