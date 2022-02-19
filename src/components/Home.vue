<template>
  <div class="font-josefin">
    <!-- Header -->
    <header
      class="bg-hero bg-no-repeat bg-cover pt-[48px] pb-[132px] sm:pt-[70px] sm:pb-[180px]"
    >
      <div class="flex items-center container">
        <h1 class="text-white tracking-[10px] flex-1 text-xl sm:text-4xl">
          TODO
        </h1>
        <img src="../assets/img/icon-moon.svg" alt="" />
      </div>
    </header>
    <!-- Add Todo -->
    <section class="container relative">
      <div class="absolute top-[-150px] w-full">
        <div class="flex items-center relative">
          <input class="absolute left-4 h-full" type="checkbox" />
          <input
            class="w-full py-5 px-10 text-white placeholder:text-gray-400 bg-light-grayish-blue rounded-md focus:outline-none border-2 border-solid border-transparent"
            type="text"
            placeholder="Add Todo"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup></script>
