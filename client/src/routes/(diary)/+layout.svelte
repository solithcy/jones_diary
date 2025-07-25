<script>
    import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
  import {Fa} from "svelte-fa";

  let {children} = $props();
</script>

<div class="w-full h-full flex flex-col diary-cont max-w-3xl mx-auto rounded-lg
  p-4 gap-2">
  <div class="text-2xl opacity-90">
    <a href="/"><Fa icon={faAddressBook} size="lg"/></a>
  </div>
  {@render children()}
</div>
