<template>
  <div id="texte">
    <h3>L'e-Lab, l'espace jeux-vidéos</h3>
    <p>
      Pour une autre approche du jeu vidéo
      Immersif, évolutif, ludique et informatif, l’e-LAB  explore le jeu vidéo sous toutes ses facettes : ses technologies, ses métiers, son impact sur la société. L'e-LAB permet de s'immerger dans cet univers, de l'analyser, d'en débattre, et bien sûr de jouer !

      L’espace expose un large panorama de la création vidéoludique. Plus d’une vingtaine de jeux sont présentés : jeux rétro, atypiques, blockbusters du moment ; sur tablette ou sur écran géant...
      Sur des équipements dernière génération, les joueurs peuvent en apprendre davantage sur leur propre façon de jouer grâce à des capteurs de données physiologiques. Des dispositifs de jeu exclusifs qui apportent une expérience inédite, dite « augmentée » et offrent au joueur la possibilité de profiter d’une immersion de jeu inaccessible chez lui.
    </p>
    <figure>
      <img id="img1" src="../img/img1.png">
      <figcaption><b>Le simulateur</b>,Ce dispositif dédié au pilotage est  équipé des interfaces les plus pointues, pour un réalisme qui décoiffe !</figcaption>
    </figure>
    <figure>
      <img id="img2" src="../img/img2.png">
      <figcaption>
        <b>Le dispositif jeu d'aventure,</b> avec un triple écran géant, les termes « immersion » et « exploration » prennent un autre sens.</figcaption>
    </figure>

  </div>
</template>

<script>
export default {
  name: 'Texte'
}
</script>

<style scoped>
  h3 {
    margin-top: 5%;
  }

  p {
    margin-top: 5%;
  }

  #img1, #img2 {
    width: 30%;
  }

</style>
