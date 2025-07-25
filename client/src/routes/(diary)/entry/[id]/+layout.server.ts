import type {LayoutServerLoad} from "./$types";
import {API_URL} from "$lib/config";
import {getEntry, getMe} from "$lib/api";

export const load: LayoutServerLoad = async ({url, params}) => {
  return {
    entry: await getEntry(params.id)
  }
}
