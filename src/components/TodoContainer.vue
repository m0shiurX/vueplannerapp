<template>
  <div class="container relative">
    <div class="top-[-50px] absolute w-full text-white">
      <h1>Todo List</h1>
      <div class="space-y-5" v-for="(todo, index) in todolist" :key="index">
        <Todo :todo="todo" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import Todo from './Todo.vue';
const todolist = reactive([
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
