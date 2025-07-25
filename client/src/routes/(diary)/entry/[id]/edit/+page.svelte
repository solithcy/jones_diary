<script>
  import Write from "$lib/components/Write.svelte";

  const entry = $$props.data.entry;
</script>

<Write {entry} edit={true}/>
