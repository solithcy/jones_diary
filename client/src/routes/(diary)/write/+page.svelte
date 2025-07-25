<script>
  import {getContext} from "svelte";
  import {goto} from "$app/navigation";
  import Write from "$lib/components/Write.svelte";

  const user = getContext("user");
  if(!$user) goto("/")
</script>

<Write/>
