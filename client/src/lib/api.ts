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

export const getEntries = async (fetchOverride?: typeof fetch): Promise<App.Entry[]> => {
  return [{
    id: 1,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque dictum turpis, eu porttitor ipsum dapibus sed. Nullam enim nisi, fringilla sit amet arcu a, scelerisque vulputate nisi. Praesent laoreet sagittis odio at commodo. Donec volutpat vestibulum venenatis. Nunc semper in augue id dictum. Aenean nec consectetur elit, ac tincidunt nibh. Suspendisse erat magna, sagittis eu tempus finibus, pulvinar et nulla. Ut facilisis enim id sem blandit, vitae finibus nunc interdum. Phasellus posuere elit ligula, quis eleifend sem accumsan sit amet. Donec placerat venenatis erat id interdum. Nulla a cursus sapien, nec auctor augue. Integer bibendum et velit eget vulputate. Vestibulum id lectus dictum, interdum ex at, fermentum erat. Nunc sed diam eu risus maximus efficitur sit amet sed tortor. Fusce ullamcorper eleifend ipsum, vel consequat odio finibus ac. Aenean eu ligula eget sem bibendum iaculis tristique vitae neque.",
    category: "test",
    created: Date.now()
  },
  {
    id: 2,
    content: "Suspendisse potenti. Vivamus eget vehicula orci. Quisque imperdiet laoreet sapien, sit amet volutpat lorem dignissim eget. Aenean at risus sollicitudin, vehicula libero ornare, auctor quam. Nunc commodo, libero id tempor luctus, lacus massa vulputate ex, id rhoncus ipsum tellus nec arcu. Cras sed eros arcu. In lobortis ipsum vitae\n\n\n metus vulputate, a consequat risus pretium. Nam vel suscipit mauris. Pellentesque non ante tellus.",
    created: Date.now() - 100000
  },
    {
      id: 3,
      content: "Vestibulum et imperdiet eros. In posuere, sem eget commodo dictum, lectus neque laoreet ipsum, vel convallis est leo quis sapien. Proin a congue lectus, vel aliquet sem. Nullam tincidunt lacinia nulla sit amet suscipit. Integer laoreet dui ut lorem maximus, in imperdiet orci varius. Praesent sapien libero, vestibulum vitae porttitor ac, ullamcorper nec dui. Maecenas accumsan ultrices erat. Ut non diam malesuada, cursus turpis sed, pretium dui. Nunc ante velit, vulputate at eros vitae, tincidunt tincidunt arcu. Nulla venenatis magna ac nisi pharetra scelerisque non non turpis. Praesent luctus ultricies velit vel mattis. Donec vel leo imperdiet, blandit nibh eu, mattis felis.",
      created: Date.now() + 10000
    }
  ].map(d=>{
    return {
      id: d.id,
      content: d.content,
      category: d.category,
      created: new Date(d.created)
    }
  });
}
