<script>
  import {faAddressBook, faCalendar, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
  import {Fa} from "svelte-fa";
  import {page} from "$app/state";
  import {getContext} from "svelte";
  import {goto} from "$app/navigation";

  const user = getContext("user");

  let {children} = $props();
</script>

<div class="w-full h-full flex flex-col diary-cont max-w-3xl mx-auto rounded-lg
  p-4 gap-2">
  <div class="flex flex-row gap-4">
    <div class="text-2xl opacity-90">
      <a href="/"><Fa icon={faAddressBook} size="lg"/></a>
    </div>
    {#if !["/login", "/register"].includes(page.url.pathname) && !!$user}
      <form class="mx-auto glass-cont glass-cont-sm items-center px-2" onsubmit={e=>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        // @ts-ignore
        goto(`/category/${encodeURIComponent(form.get("cat"))}`);
      }}>
        <span><Fa icon={faMagnifyingGlass}></Fa></span>
        <input type="text" placeholder="Search category" name="cat" class="in-glass">
      </form>
      <div class="text-2xl opacity-90">
        <a href="/calendar"><Fa icon={faCalendar} size="lg"/></a>
      </div>
    {/if}
  </div>
  {@render children()}
</div>
