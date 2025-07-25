import type {PageServerLoad} from "./$types";
import {API_URL} from "$lib/config";
import {getEntriesInCat, getEntry, getMe} from "$lib/api";

export const load: PageServerLoad = async ({url, params, fetch}) => {
  return {
    entries: await getEntriesInCat(decodeURIComponent(params.cat), fetch),
    category: params.cat,
  }
}
