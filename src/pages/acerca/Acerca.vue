<template>
  <section id="newCollections" class="componentSpace">
    <aside class="divrow acenter divwrapmobile jendmobile parent">
      <h2 class="h3 align center p">Acerca De</h2>
      <div class="contright center">
        <a href="#/" class="h7">More</a>
        <v-btn class="right" icon>
          <v-icon medium style="color: #FFFFFF !important">mdi-chevron-right</v-icon>
        </v-btn>
      </div>
    </aside>

    <aside class="acerca">
        <section>
            <span
              ><p class="text-h5" style="text-align: justify;">
                ¡Descubre la perfecta combinación entre estilo y protección con
                los lentes Dubery!
              </p>
            </span>
            <span
              ><p class="text-h5" style="text-align: justify;">
                En Dubery, sabemos que unos lentes de sol adecuados no solo son
                un accesorio de moda, sino también una inversión en la salud
                visual. Por eso, nuestra colección de lentes Dubery no solo te
                ofrece un diseño moderno y vanguardista, sino también una
                protección excepcional contra los rayos solares.
              </p>
            </span>
            <span
              ><p class="text-h5" style="text-align: justify;">
                Ya sea que busques un look casual para el día a día o quieras
                lucir elegante en eventos especiales, nuestros lentes Dubery se
                adaptan a cualquier estilo y ocasión. Con una amplia variedad de
                modelos y colores, encontrarás el par perfecto que resalte tu
                personalidad y realce tu outfit.
              </p>
            </span>
            <span
              ><p class="text-h5" style="text-align: justify;">
                Pero no solo se trata de estética, nuestros lentes Dubery están
                fabricados con materiales de alta calidad y cuentan con lentes
                polarizadas que reducen el deslumbramiento y mejoran la claridad
                visual. Así estarás protegido/a de los dañinos rayos UV mientras
                disfrutas de una visión nítida y confortable.
              </p>
            </span>
            <span
              ><p class="text-h5" style="text-align: justify;">
                En Dubery, tu satisfacción es nuestra prioridad. Por eso,
                ofrecemos garantía de calidad en todos nuestros productos.
                Además, nuestro equipo de servicio al cliente estará encantado
                de ayudarte en todo momento, brindándote asesoramiento
                personalizado y resolviendo cualquier duda o consulta que puedas
                tener.
              </p>
            </span>
            <span
              ><p class="text-h5" style="text-align: justify;">
                No lo pienses más y atrévete a experimentar la elegancia y
                protección que solo los lentes Dubery pueden ofrecerte. Visita
                nuestra tienda en línea y encuentra el par ideal que te
                acompañará en tus aventuras diarias. ¡Descubre el mundo a través
                de unos lentes Dubery y destaca con estilo!
              </p>
            </span>
        </section>
    </aside>
  </section>
</template>

<script>
export default {
  name: "Acerca De",
  data() {
    return {
      dialog: false,
      image: "",
      text: "", 
      dataNewCollections: [
        {
          collection: [
            {
              title: "Model A",
              img: "https://bafkreiec67ylmi2fits4izxlcjhbyejaytuv73jgbyklaezwlc5e3w7k6e.ipfs.nftstorage.link/",
              usd: "20",
              localfiat: "252.45",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi lacus sed viverra tellus. Donec ultrices tincidunt arcu non sodales. Pulvinar sapien et ligula ullamcorper malesuada. Quisque sagittis purus sit amet volutpat. Leo vel fringilla est ullamcorper eget nulla. Enim facilisis gravida neque convallis a cras semper. Maecenas pharetra convallis posuere morbi. Lobortis feugiat vivamus at augue eget arcu dictum. Velit ut tortor pretium viverra suspendisse potenti nullam ac tortor."
            },
          ]
        }
      ]
    }
  },
  methods: {
      close() {
        this.dialog = false;
      },
      open(obj){
        this.image = obj.img;
        this.text = obj.text;
        this.dialog = true;
      }
    },
};

</script>

<style src="../Pages.scss" lang="scss" />
