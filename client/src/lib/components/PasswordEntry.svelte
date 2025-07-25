<script>
  import { Fa } from "svelte-fa";
  import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";

  export let {name, placeholder = "", autocomplete = "current-password"} = $$props;

  let shown = false;
</script>

<div class="glass-cont">
  <input type={shown ? "text" : "password"} class={($$props.class || '') + " in-glass"} {placeholder} {name} {autocomplete}>
  <button type="button" onclick={()=>{shown = !shown}} class="mr-3 opacity-50 cursor-pointer duration-300 hover:opacity-75">
    <Fa icon={shown ? faEyeSlash : faEye}/>
  </button>
</div>
