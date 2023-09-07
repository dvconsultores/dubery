<template>
  <section id="newCollections" class="componentSpace">
    <aside class="divrow acenter divwrapmobile jendmobile parent">
      <h2 class="h3 align center p">Catálogo</h2>

    </aside>

    <aside
      class="contdown"
      v-for="(item, index) in dataNewCollections"
      :key="index"
    >
      <v-card
        v-for="(item2, index) in item.collection"
        :key="index"
        color="var(--colorCartas3)"
        @click="open(item2)"
      >
        <img class="images" :src="item2.imagenUrl" alt="collections images" />
        <a class="tl h6" @click="open">{{ item2.nombre }}</a>
        <aside class="sectdown divcol">
          <div class="space">
            <span class="h7 weight">Precio</span>
            <div class="divrow acenter">
              <img
                class="near filter"
                width="20"
                src="@/assets/logos/USD.png"
                alt="near"
              />
              <span class="price h7 ml-1">{{ item2.precio }} USD</span>
            </div>
          </div>
          <span class="h7 weight tend"> ~ VES {{ item2.precio * ves }} </span>
        </aside>
      </v-card>
    </aside>
    <!-- dialog -->
    <v-row justify="center">
      <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
        scrollable
      >
        <v-card color="var(--colorCartas3)">
          <v-card-title>
            <v-toolbar flat dark color="var(--colorFondoCartas)">
              <v-btn icon dark @click="dialog = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <v-toolbar-title><span>Más Información</span></v-toolbar-title>
              <v-spacer></v-spacer>
              <v-toolbar-items>
                <v-btn dark text @click="dialog = false">
                  <v-icon medium style="color: #ffffff !important"
                    >mdi-chevron-left</v-icon
                  >
                  <span class="text-h6">Regresar</span>
                </v-btn>
              </v-toolbar-items>
            </v-toolbar>
          </v-card-title>
          <v-card-text>
              <v-row>
                <v-col cols="12" sm="6" md="6">
                  <v-img
                    class="bg-grey-lighten-2 rounded-image-dialog mt-5"
                    :src="image"
                  ></v-img>
                </v-col>
                <v-col cols="12" sm="6" md="6" class="mt-5">
                  <v-card color="var(--colorCartas3)">
                    <span class="text-h6"><div style="text-align: justify; padding-right: 3px;">{{ text }}</div></span>
                  </v-card>
                  <div v-if="ispaypal" style="font-weight: bold" class="mt-15">
                    <a href="https://paypal.me/DvConsultoresVE?country.x=VE&locale.x=es_XC" target="_blank">
                      <img
                        class="logo"
                        :src="`${$store.state.baseURL}themes/${$store.state.theme}/paypal.svg`"
                        alt="paypal"
                      />
                      Comprar con Paypal
                    </a>
                  </div>
                </v-col>
              </v-row>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-row>
  </section>
</template>

<script>
export default {
  name: "NewCollections",
  data() {
    return {
      dialog: false,
      image: "",
      text: "",
      ispaypal: false,
      ves: [],
      dataNewCollections: [{collection: []}]
    };
  },
  mounted() {
    this.fetch();
    this.fetchVes();
  },
  methods: {
    close() {
      this.dialog = false;
    },
    open(obj) {
      this.image = obj.imagenUrl;
      this.text = obj.descripcion;
      this.ispaypal = obj.ispaypal;
      this.dialog = true;
    },
    fetch(){
      var url = this.$api;
      this.axios
        .get(`${url}/lentes/`)
        .then((res) => {
          this.dataNewCollections[0].collection = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    fetchVes(){
      var url = this.$ves;
      this.axios
        .post(`${url}/get-price/`, {"fiat": "VES", "crypto": "USDT"})
        .then((res) => {
          this.ves = res.data[0].value;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
};
</script>

<style src="../Pages.scss" lang="scss" />
