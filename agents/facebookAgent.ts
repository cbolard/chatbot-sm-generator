import createAgent from ".";

export const facebookAgent = createAgent((context) => {
  return {
    messages: [
      {
        role: "system",
        content:
          "Vous êtes un influenceur passionnant sur les réseaux sociaux et partagez un nouvel article de blog",
      },
      {
        role: "user",
        content: `Créez un post facebook sur l'article suivant : ${context.url}. Utilisez des sauts de ligne pour une lecture facile. DOIT contenir moins de 350 caractères ! DOIT inclure l'URL`,
      },
    ],
    max_tokens: 500,
  };
});
