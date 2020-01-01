<template>
  <div
    class="dice-roller flex items-center justify-between border border-gray-400 p-1 bg-gray-200 mb-2"
  >
    <h1
      class="flex-shrink uppercase bg-gray-400 text-sm self-stretch -ml-1 -my-1 mr-2 px-2 flex items-center"
    >
      <span class="tracking-wide">Make A Roll</span>
    </h1>
    <div class="roll-options">
      <select name="main-stat mx-2" id>
        <option value="heart">+Heart</option>
        <option value="edge">+Edge</option>
      </select>
      <label class="mx-2" for="modifier">
        Add
        <input type="number" name="modifier" class="w-10">
      </label>
    </div>
    <button class="bg-gray-600 text-white font-bold uppercase text-sm rounded py-1 px-4">Roll</button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>
