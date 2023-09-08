<template>
  <div class="flex flex-col gap-4">
    <h4
      class="text-3xl text-white font-extrabold rounded-lg border flex items-center justify-center border-blue-500 p-4 sm:p-6 lg:p-8"
    >
      Contador con Vue
    </h4>
    <span
      class="rounded-lg border flex items-center justify-center text-2xl border-blue-500 p-4 sm:p-6 lg:p-8"
      >{{ $count }}</span
    >
    <div class="flex flex-row gap-4 justify-between">
      <div @click="increment">
        <slot name="increment">Increment</slot>
      </div>
      <div @click="decrement">
        <slot name="decrement">decrement</slot>
      </div>
    </div>
    <footer class="text-xs text-gray-500 max-w-sm">
      Usando vue 3 js con nanostores para guardar el estado del contador y no se
      reinicie al cambiar de pagina 
    </footer>
  </div>
</template>

<script setup>
import { count } from "../stores/counter.ts";
import { useStore } from "@nanostores/vue";

const $count = useStore(count);
const increment = () => count.set($count.value + 1);
const decrement = () => count.set($count.value - 1);
</script>

<style></style>
