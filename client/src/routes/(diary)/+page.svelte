<script>
  import {getContext} from "svelte";
  import Entry from "$lib/components/Entry.svelte";

  const user = getContext("user");
  const {data} = $props();
</script>

<h1 class="font-title text-center text-5xl">Diary</h1>

{#if !!$user}
  <div class="flex flex-col divide-y divide-white/20">
    {#each data.entries.sort((a, b) => {
      return a.created < b.created ? 1 : -1;
    }) as entry}
      <Entry {entry}/>
    {/each}
  </div>
{:else}
  <h2 class="text-center text-3xl mt-4">You aren't signed in</h2>
  <div class="flex flex-row justify-center flex-wrap gap-4">
    <a href="/login" class="btn text-xl w-fit">Login</a>
    <a href="/register" class="btn text-xl w-fit">Register</a>
  </div>
{/if}
