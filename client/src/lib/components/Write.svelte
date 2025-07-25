<script>
  import {goto, invalidateAll} from "$app/navigation";
  import {createEntry, updateEntry} from "$lib/api.js";

  const edit = $$props.edit || false;
  const entry = $$props.entry || undefined;
</script>


<h1 class="font-title text-center text-5xl">{edit ? "Edit" : "New"} Entry</h1>
<form onsubmit={async e=>{
  e.preventDefault();
  const form = new FormData(e.currentTarget);
  const content = form.get("content") || "";
  const created = form.get("created") || "";
  const category = form.get("category") || "";

  if(edit && !!entry){
    await updateEntry(entry.id, content.toString(), category.toString(), created.toString());
    await invalidateAll();
    goto(`/entry/${entry.id}`)
  }else{
    const newEntry = await createEntry(content.toString(), category.toString(), created.toString());
    goto(`/entry/${newEntry.id}`);
  }
}} class="flex flex-col gap-2">
  <label for="content">Entry Content<span class="text-red-300">*</span></label>
  <textarea name="content" id="content" placeholder="Content" required cols="30" rows="10">{entry ? entry.content : ""}</textarea>
  <div class="flex flex-row flex-wrap gap-2">
    <div class="flex flex-col gap-1">
      <label for="cat">Category</label>
      <input type="text" name="cat" id="cat" value={entry ? entry.category : undefined} placeholder="Category" class="input-sm">
    </div>
    <div class="flex flex-col gap-1">
      <label for="created">Created<span class="text-red-300">*</span></label>
      <input type="datetime-local" required name="created" id="created" value={(entry ? entry.created : new Date()).toISOString().slice(0, -8)} class="input-sm">
    </div>
  </div>
  <button class="btn text-lg">{edit ? "Edit" : "Create"}</button>
</form>
