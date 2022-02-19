<template>
  <div>{{ props.todo.status }}</div>
  <div>{{ props.todo.desc }}</div>
</template>

<script setup>
const props = defineProps({
  status: String,
  desc: String,
});
</script>

<style></style>
