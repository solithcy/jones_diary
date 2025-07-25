import {API_URL} from "$lib/config";

export const getMe = (fetchOverride?: typeof fetch): Promise<undefined | App.User> => {
  return (fetchOverride || fetch)(API_URL  + "/me")
    .then(r=>r.status !== 200 ? undefined : r.json())
    .catch(()=>undefined);
}

export const login = (username: string, password: string): Promise<undefined | App.User> => {
  return fetch(API_URL + "/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({username, password})
  }).then(r=>r.json())
    .catch(e=>({}))
    .then(r=>r.id !== undefined ? r : undefined);
}
