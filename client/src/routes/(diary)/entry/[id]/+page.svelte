<script>
  import Entry from "$lib/components/Entry.svelte";

  const entry = $$props.data.entry;
</script>

<Entry {entry} detailed={true}/>
