<template>
  <div class="bg-slate-700 mb-2 py-2 px-3">
    [{{ props.todo.status }}] - {{ props.todo.desc }}
  </div>
</template>

<script setup>
const props = defineProps({
  todo: Object,
});
</script>
