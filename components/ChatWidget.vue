<script setup lang="ts">
import { Message, User } from "~~/types";

const me = ref<User>({
  id: "user",
  avatar: "/avatar.jpg",
  name: "You",
});
const bot = ref<User>({
  id: "assistant",
  avatar: "/bot.jpg",
  name: "Botman",
});

const users = computed(() => [me.value, bot.value]);

const messages = ref<Message[]>([]);

const usersTyping = ref<User[]>([]);

// send messages to Chat API here
// and in the empty function below

//  1. On créé une variable qui va contenir les messages à envoyer à l'API
const messagesForApi = computed(() => 
  messages.value.map(m => ({
    role: m.userId,
    content: m.text,
  })).slice(-2)
)

async function handleNewMessage(message: Message) {
  // On ajoute le message de l'utilisateur à la liste des messages
  messages.value.push(message);

  // Le bot va écrire
  usersTyping.value.push(bot.value);

  // On envoie la requête au serveur pour avoir la réponse du bot
  const res = await $fetch("/api/ai", {
    method: "POST",
    body: {
      messages: messagesForApi.value,
    },
  });

  // Si la réponse n'est pas valide, on arrête
  if (!res.choices[0].message?.content) return;

  // On créé le message du bot à partir de la réponse du serveur
  const msg = {
    id: res.id,
    userId: bot.value.id,
    createdAt: new Date(),
    text: res.choices[0].message?.content,
  };

  // On ajoute le message du bot à la liste des messages
  messages.value.push(msg);

  // On enlève le bot de la liste des utilisateurs en train d'écrire
  usersTyping.value = [];
}
</script>
<template>
  <ChatBox
    :me="me"
    :users="users"
    :messages="messages"
    @new-message="handleNewMessage"
    :usersTyping="usersTyping"
  />
</template>
