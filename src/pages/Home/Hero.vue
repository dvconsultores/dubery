<template>
  <section id="hero" class="parent">
    <aside class="contup divwrap acenter">
      <img src="@/assets/images/hero.png" class="rounded-image" alt="Background image about NFT">
      <div class="conthero divcol jstart aend centermobile">
        <h1 class="bold tcentermobile">
          Dubery es Estilo y Protección para tus Ojos
        </h1>
        <span class="tcentermobile">
          Ya es hora de elevar tu estilo y proteger tus ojos con los lentes Dubery. 
          Explora nuestra colección ahora y descubre por qué somos la elección favorita de aquellos que buscan calidad, estilo y ahorro.
        </span>
      </div>
    </aside>
  </section>
</template>
<script>
export default {
  name: "Hero",
  data() {
    return {
      search: ""
    }
  },
};
</script>

<style src="../Pages.scss" lang="scss" />
