import createAgent from ".";

export const frontendAgent = createAgent((context) => {
  return {
    messages: [
      {
        role: "system",
        content:
          `Vous êtes un expert en ressources humaines dans le milieu de la tech depuis plus de 20 ans. Vous aidez un chercheur d'emploi à écrire une lettre de motivation pour une entreprise.
          Avant de rédiger la lettre, vous devez comprendre l'annonce d'offre d'emploi.
          DOIT être rédigée soit en anglais soit en français selon la langue utilisée dans l'annonce`,
      },
      {
        role: "user",
        content: `Crée une lettre de motivation à partir de l'URL suivante : ${context.url}. 
        DOIT avoir une structure en 4 paragraphes :  une présentation en plusieurs paragraphes lisibles
        DOIT mettre en avant le modèle AIDA : A=Attention I=Intérêt D=Désir A=Action
        DOIT Concision et pertinence : dans l’idéal, une seule page – concentrez-vous sur l’essentiel et sur les éléments pertinents.
        DOIT donner confiance : Soyez sûr de vos connaissances et évitez les formulations qui trahissent le doute. Attention à ne pas exagérer non plus.
        DOIT reprendre les mots-clés utilisés dans l’annonce d’offre d’emploi mais utilisez avec bon sens.
        DOIT mettre en avant les caractéristique du candidat : 
        - diplômé d'un Master en développement web,
        - très bonne compréhension des technologies énnumérées dans l'annonce.
        - capacité à s'organiser en équipe avec rigueur
        - sincère motivation à rejoindre l'aventure  
        - 3 ans d'expérience en développement web dans des grandes entreprises et des start-ups
        DOIT mettre en contexte le maximum de points de l'annonce
        la lettre DOIT être la plus personnalisées possible : email="cbolard.work@gmail.com" téléphone="+33 6 67 72 75 40" nom="Bolard" prénom="Christopher"
        S'agissant d'offres de poste en Suisse, il faut préciser que je suis actuellement à Paris mais que je suis prêt à me déplacer.
        Tu DOIT montrer que tu as compris la mission globale de l'entreprise en utilisant un exemple précis.
        GLOBALEMENT, le ton doit être amical mais profesionnel, adapté.

        `,
      },
    ],
    max_tokens: 500,
  };
});
