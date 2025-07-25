<script>
  import { Fa } from "svelte-fa";
  import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";

  export let {name, placeholder = "", autocomplete = "current-password"} = $$props;

  let shown = false;
</script>

<div class="pswd-cont">
  <input type={shown ? "password" : "text"} class={($$props.class || '') + " pswd"} {placeholder} {name} {autocomplete}>
  <button onclick={()=>{shown = !shown}} class="mr-3 opacity-50 cursor-pointer duration-300 hover:opacity-75">
    <Fa icon={shown ? faEyeSlash : faEye}/>
  </button>
</div>
