<script setup lang="ts">
const props = defineProps<{
    url:string;
    temperature:number;
}>()
const {chat, state, firstMessage} = useChatAi({agent: "frontend"})

const announcement = computed(()=> firstMessage.value?.content)

const generate = () => nextTick(()=>chat(props));
defineExpose({
    generate
})
</script>
<template>
    <CardGeneric
    title="Lettre de motivation - frontend"
    :state="state"
    :body="announcement"
    :class="mb-10"
    >
    <div class="flex w-full justify-between items-center">
        <div class="text-xs">
            Nombre de caractères :
            <strong>{{ announcement.length }}</strong>
        </div>
    </div>
    <button class="btn btn-neutral" @click="generate()">Régénérer</button>
    <a class="btn btn-primary" target="_blank">Publier</a>

</CardGeneric>

</template>
