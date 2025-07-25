<script>
import PasswordEntry from "$lib/components/PasswordEntry.svelte";
</script>

<h1 class="font-title text-center text-5xl">Register</h1>

<form onsubmit={(e)=>{

}} class="flex flex-col items-center gap-2 max-w-md mx-auto text-lg">
  <input type="text" class="w-full" placeholder="Username" name="username" autocomplete="username">
  <PasswordEntry type="password" class="w-full" placeholder="Password" name="password" autocomplete="new-password"/>
  <PasswordEntry type="password" class="w-full" placeholder="Confirm Password" name="confirm-password" autocomplete="new-password"/>
  <button class="btn w-full">Register</button>
</form>

<p class="text-center">Already have an account? <a href="/login" class="underline">Login</a> instead.</p>
