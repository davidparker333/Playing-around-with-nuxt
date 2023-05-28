<template>
  <div class="app w-screen h-screen bg-slate-900 text-slate-50 font-sans">
    <div class="container mx-auto flex flex-wrap justify-center pt-10">
      <div class="title text-xl font-bold w-full flex justify-center pb-10">
        {{ title }}
      </div>
      <form
        @submit.prevent="search"
        class="input-container w-full flex justify-center mb-20"
      >
        <input
          type="text"
          class="w-1/3 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Search for a pokemon"
        />
        <input
          type="submit"
          value="Search"
          class="w-20 ml-3 rounded outline outline-blue-500/50"
        />
      </form>
      <Result v-if="!noResults" :result="result" />
      <div v-else>No results</div>
    </div>
  </div>
</template>

<script setup>
import Result from "./result";
import { PokemonClient } from "pokenode-ts";

const title = ref("Nuxt App Test");
let result = ref({});
const noResults = computed(() => !Object.keys(result.value).length);

const search = async (e) => {
  const input = e.target[0].value;

  const api = new PokemonClient();
  let res = {};

  try {
    res = await api.getPokemonByName(input);
  } catch {
    res = {};
  }
  // Results with the 'count' key returned a list of hits
  result.value = res.hasOwnProperty("count") ? {} : res;
};
</script>
