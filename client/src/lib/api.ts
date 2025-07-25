import {API_URL} from "$lib/config";

export const getMe = (fetchOverride?: typeof fetch): Promise<undefined | App.User> => {
  return (fetchOverride || fetch)(API_URL  + "/me")
    .then(r=>r.status !== 200 ? undefined : r.json())
    .catch(()=>undefined);
}
