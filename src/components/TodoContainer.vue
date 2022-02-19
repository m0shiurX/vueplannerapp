<template>
  <div class="container relative">
    <div class="top-[-50px] absolute w-full">
      <h1>Todo Container</h1>
      <div v-for="(todo, index) in todos" :key="index">
        <Todo :todo="todo" />
      </div>
    </div>
  </div>
</template>

<script setup>
// import { reactive } from '@vue/reactivity';
import { reactive } from 'vue';
import Todo from './Todo.vue';
const todos = reactive([
  {
    status: 'done',
    desc: 'bla bla bla',
  },
  {
    status: 'done',
    desc: 'clear',
  },
]);
</script>
