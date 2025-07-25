<script>
  import PasswordEntry from "$lib/components/PasswordEntry.svelte";
  import {login} from "$lib/api.js";
  import {getContext} from "svelte";
  import {goto} from "$app/navigation";

  const userStore = getContext("user");
  let error = "";
</script>

<h1 class="font-title text-center text-5xl">Login</h1>

<form onsubmit={async (e)=>{
  e.preventDefault();
  const form = new FormData(e.currentTarget);
  // @ts-ignore
  const user = await login(form.get("username"), form.get("password"));
  if(user === undefined) return error = "Incorrect username or password";
  if(user.token) window.document.cookie = `token=${user.token};${new Date(Date.now() + (1000 * 60 * 60 * 24 * 6.9))};path=/`;
  userStore.set(user);
  goto("/");
}} class="flex flex-col items-center gap-2 max-w-md mx-auto text-lg">
  <input type="text" class="w-full" placeholder="Username" name="username" autocomplete="username">
  <PasswordEntry type="password" class="w-full" placeholder="Password" name="password" autocomplete="current-password"/>
  <button class="btn w-full">Login</button>
</form>
<p class="text-center">Don't have an account? <a href="/register" class="underline">Register</a> instead.</p>
