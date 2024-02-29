<script setup lang="ts">
import type { AsyncState } from "~~/types";
const props = defineProps<{
  title?: string;
  body?: string;
  state?: AsyncState;
}>();

const isError = computed(() => props.state === "error");
const isLoading = computed(() => props.state === "loading");

</script>
<template>
  <div class="card bg-base-100 shadow-xl border-t-4 border-primary">
    <div class="card-body">
      <h2 class="card-title">
        <slot name="title">{{ title }}</slot>
        <AppLoading v-if="isLoading" />
        <span v-if="isError" class="text-red-500 text-sm font-normal">
          Erreur lors de la génération de la lettre
        </span>
      </h2>

      <div v-if="body">
        <hr class="opacity-10 pb-5" />
        <pre class="whitespace-pre-wrap font-sans text-lg">
          <textarea style="width: 100%; height:800px; border:none">
          {{ body }}
            </textarea>
        </pre>
      </div>
      <div v-else>
        <span class="italic opacity-80"
          >Importer une offre d'emploi pour générer une lettre</span
        >
      </div>

      <div class="card-actions justify-end" v-if="body">
        <slot>

          

        </slot>
      </div>
    </div>
  </div>
</template>
