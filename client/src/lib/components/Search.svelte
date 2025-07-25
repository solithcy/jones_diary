<script>
import {goto} from "$app/navigation";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {Fa} from "svelte-fa";
</script>

<form class="mx-auto glass-cont glass-cont-sm items-center px-2" onsubmit={e=>{
  e.preventDefault();
  const form = new FormData(e.currentTarget);
  // @ts-ignore
  goto(`/category/${encodeURIComponent(form.get("cat"))}`);
}}>
  <span><Fa icon={faMagnifyingGlass}></Fa></span>
  <input type="text" placeholder="Search category" name="cat" class="in-glass">
</form>
