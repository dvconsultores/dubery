<template>
  <section id="newCollections" class="componentSpace">
    <aside class="divrow acenter divwrapmobile jendmobile parent">
      <h2 class="h3 align center p">Contáctenos</h2>
      <div class="contright center pr-3">
        <a href="#/" class="h7">Home</a>
        <v-btn class="right" icon>
          <v-icon medium style="color: #FFFFFF !important">mdi-chevron-right</v-icon>
        </v-btn>
      </div>
    </aside>

    <aside class="acerca">
        <section>
            <span
              ><p class="text-h5" style="text-align: justify;">
                ¡Gracias por elegir Lentes Dubery!
              </p>
            </span>
            <span
              ><p class="text-h5" style="text-align: justify;">
                ¿Tienes alguna pregunta sobre nuestros productos o servicios? ¿Quieres realizar un pedido o solicitar información adicional? Estamos aquí para ayudarte.
              </p>
            </span>
            <span
              ><p class="text-h5" style="text-align: justify;">
                Puedes ponerte en contacto con nuestro equipo de atención al cliente de las siguientes maneras:
              </p>
            </span>
            <span
              ><p class="text-h5" style="text-align: justify;">
                Número de teléfono: Escríbenos al  <a style="color: darkgreen !important;" href="https://wa.me/584144186688"><b>Whatsapp</b></a> estaremos encantados de atenderte en horario laboral.
              </p>
            </span>
            <span
              ><p class="text-h5" style="text-align: justify;">
                Correo electrónico: Envíanos un mensaje a <a style="color: darkgreen !important;" href="mailto:adominguez@dvconsultores.com"><b>Correo</b></a> y te responderemos lo antes posible.
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
