import type {LayoutServerLoad} from "./$types";
import {API_URL} from "$lib/config";
import {getMe} from "$lib/api";

export const load: LayoutServerLoad = async ({request, cookies, fetch, locals}) => {
  locals.user = await getMe(fetch);

  return {
    user: locals.user
  }
}
