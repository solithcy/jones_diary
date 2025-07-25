<script lang="ts">
  const entry: App.Entry = $$props.entry;
  const detailed: boolean = $$props.detailed || false;
</script>

<div class="entry">
  <p class="text-lg entry-content">
    {entry.content}
  </p>
  <div class="flex flex-row flex-wrap text-sm items-center gap-2">
    <p>
      {entry.created.toLocaleString()}
    </p>
    <div class="ml-auto"></div>
    {#if entry.category}
      <div class="bg-white/20 p-1 rounded-lg">
        <p>{entry.category}</p>
      </div>
    {/if}
    {#if !detailed}
      <a href="/entry/{entry.id}">
        <div class="bg-white/20 hover:bg-white/40 duration-300 p-1 rounded-lg underline">
          <p>details</p>
        </div>
      </a>
    {/if}
    <a href="/entry/{entry.id}/edit">
      <div class="bg-white/20 hover:bg-white/40 duration-300 p-1 rounded-lg underline">
        <p>edit</p>
      </div>
    </a>
  </div>
</div>
