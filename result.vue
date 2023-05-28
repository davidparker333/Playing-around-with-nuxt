<template>
  <div class="result w-2/3 flex flex-wrap">
    <div class="name w-full flex justify-center">{{ prettyName }}</div>
    <div class="image w-full flex justify-center"><img :src="sprite" /></div>
  </div>
</template>

<script setup>
const props = defineProps({
  result: Object,
});

const sprite = computed(() => props.result.sprites.front_default);

const prettyName = computed(() => {
  const name = props.result.name;
  return name.charAt(0).toUpperCase() + name.slice(1);
});
</script>
