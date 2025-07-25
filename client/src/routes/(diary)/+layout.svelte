<script>
  import {
    faAddressBook,
    faCalendar,
    faFeatherPointed,
    faMagnifyingGlass,
  } from "@fortawesome/free-solid-svg-icons";
  import {Fa} from "svelte-fa";
  import {page} from "$app/state";
  import {getContext} from "svelte";
  import {goto} from "$app/navigation";
  import Search from "$lib/components/Search.svelte";

  const user = getContext("user");

  let {children} = $props();
</script>

<div class="w-full h-full flex flex-col diary-cont max-w-3xl mx-auto rounded-lg
  p-4 gap-2">
  <div class="flex flex-row gap-4 flex-wrap">
    <div class="text-2xl opacity-90">
      <a href="/"><Fa icon={faAddressBook} size="lg"/></a>
    </div>
    {#if !["/login", "/register"].includes(page.url.pathname) && !!$user}
      <div class="hidden md:block mx-auto pl-8">
        <Search/>
      </div>
      <div class="ml-auto md:ml-0 text-2xl opacity-90">
        <a href="/calendar"><Fa icon={faCalendar}/></a>
      </div>
      <div class="text-2xl opacity-90">
        <a href="/write"><Fa icon={faFeatherPointed}/></a>
      </div>
      <div class="block md:hidden flex-grow">
        <Search/>
      </div>
    {/if}
  </div>
  {@render children()}
</div>
