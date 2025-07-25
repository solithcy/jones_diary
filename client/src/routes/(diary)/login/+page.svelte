<script>
  import PasswordEntry from "$lib/components/PasswordEntry.svelte";
</script>

<h1 class="font-title text-center text-5xl">Login</h1>

<form onsubmit={(e)=>{

}} class="flex flex-col items-center gap-2 max-w-md mx-auto text-lg">
  <input type="text" class="w-full" placeholder="Username" name="username" autocomplete="username">
  <PasswordEntry type="password" class="w-full" placeholder="Password" name="password" autocomplete="current-password"/>
  <button class="btn w-full">Login</button>
</form>
<p class="text-center">Don't have an account? <a href="/register" class="underline">Register</a> instead.</p>
