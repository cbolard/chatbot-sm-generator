<script setup lang="ts">
const props = defineProps<{
    url:string;
    temperature:number;
}>()
const {chat, state, firstMessage} = useChatAi({agent: "facebook"})

const announcement = computed(()=> firstMessage.value?.content)

const generate = () => nextTick(()=>chat(props));
defineExpose({
    generate
})
</script>
<template>
    <CardGeneric
    title="Facebook"
    :state="state"
    :body="announcement"
    >
    <button class="btn btn-neutral" @click="generate()">Régénérer</button>
    <a class="btn btn-primary" target="_blank">Publier</a>

</CardGeneric>

</template>
