<script lang="ts">
  import "$lib/css/index.css";
  import { writable } from "svelte/store";
  import {setContext} from "svelte";
  let { children, data } = $props();

  let user = writable(data.user);
  setContext("user", user);
</script>

<main class="flex flex-col h-full bg-slate-200 p-8">
  {@render children()}
</main>
