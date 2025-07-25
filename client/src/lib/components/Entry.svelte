<script lang="ts">
  const entry: App.Entry = $$props.entry;
</script>

<div class="entry">
  <p class="text-lg entry-content">
    {entry.content}
  </p>
  <div class="flex flex-row flex-wrap text-sm items-center gap-2">
    <p>
      {entry.created.toLocaleString()}
    </p>
    {#if entry.category}
      <div class="bg-white/20 p-1 rounded-lg ml-auto">
        <p>{entry.category}</p>
      </div>
    {/if}
  </div>
</div>
