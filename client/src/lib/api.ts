import {API_URL} from "$lib/config";
import {browser} from "$app/environment";

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

export const getEntries = async (fetchOverride?: typeof fetch): Promise<App.Entry[]> => {
  return (fetchOverride || fetch)(API_URL + "/entries", {
    credentials: "include",
  }).then(r=>r.json()).then(r=>{
    return r.map((e: App.Entry)=>({
      ...e,
      created: new Date(e.created)
    }));
  });
}

export const createEntry = async (content: string, category: string, created: string): Promise<App.Entry> => {
  return fetch(API_URL + "/entries", {
    credentials: "include",
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      content, category, date: created
    })
  }).then(r=>r.json());
}


export const getEntry = async (id: string): Promise<App.Entry | undefined> => {
  return fetch(API_URL + "/entry/" + id, {
    credentials: "include",
  }).then(r=>r.json()).then(r=>r?.id ? r : undefined);
}
