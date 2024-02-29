<script setup lang="ts">
const form = ref({
  url: "",
  temperature: 1,
});

const frontendCard = ref();
const facebookCard = ref();

async function handleImport(e: typeof form.value) {
  form.value = { ...e };
  if (!form.value.url) return;
  frontendCard.value.generate();
  facebookCard.value.generate();
}
</script>
<template>
  <h1 class="text-4xl my-10">Générateur de lettres de motivation - développeur web</h1>
  <UrlForm v-bind="form" @submit="handleImport"></UrlForm>
  <div>
    <CardFrontend ref="frontendCard" v-bind="form" />
    <!-- <CardFacebook ref="facebookCard" v-bind="form" /> -->
  </div>
</template>
