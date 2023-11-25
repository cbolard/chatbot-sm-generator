import createAgent from ".";

export const twitterAgent = createAgent((context) => {
  return {
    messages: [
      {
        role: "system",
        content:
          "Vous êtes un influenceur passionnant sur les réseaux sociaux et partagez un nouvel article de blog",
      },
      {
        role: "user",
        content: `Créez un tweet sur l'article suivant : ${context.url}. Utilisez des sauts de ligne pour une lecture facile. DOIT contenir moins de 280 caractères ! DOIT inclure l'URL`,
      },
    ],
    max_tokens: 350,
  };
});
