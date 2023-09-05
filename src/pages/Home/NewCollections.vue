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
        <img class="images" :src="item2.img" alt="collections images" />
        <a class="tl h6" @click="open">{{ item2.title }}</a>
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
              <span class="price h7 ml-1">{{ item2.usd }} USD</span>
            </div>
          </div>
          <span class="h7 weight tend"> ~ VES {{ item2.localfiat }} </span>
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
                    <span class="text-h6" style="text-align: justify;">{{ text }}</span>
                  </v-card>
                  <div style="font-weight: bold" class="mt-15">
                    <a>
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
      dataNewCollections: [
        {
          collection: [
            {
              title: "Model A",
              img: "https://bafkreiec67ylmi2fits4izxlcjhbyejaytuv73jgbyklaezwlc5e3w7k6e.ipfs.nftstorage.link/",
              usd: "20",
              localfiat: "252.45",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi lacus sed viverra tellus. Donec ultrices tincidunt arcu non sodales. Pulvinar sapien et ligula ullamcorper malesuada. Quisque sagittis purus sit amet volutpat. Leo vel fringilla est ullamcorper eget nulla. Enim facilisis gravida neque convallis a cras semper. Maecenas pharetra convallis posuere morbi. Lobortis feugiat vivamus at augue eget arcu dictum. Velit ut tortor pretium viverra suspendisse potenti nullam ac tortor.",
            },
            {
              title: "Model B",
              img: "https://bafkreiftp2ccobha5u5cjxtgowyrdkblh6cfrfkp4konwkg4cbkoa3icd4.ipfs.nftstorage.link/",
              usd: "20",
              localfiat: "252.45",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi lacus sed viverra tellus. Donec ultrices tincidunt arcu non sodales. Pulvinar sapien et ligula ullamcorper malesuada. Quisque sagittis purus sit amet volutpat. Leo vel fringilla est ullamcorper eget nulla. Enim facilisis gravida neque convallis a cras semper. Maecenas pharetra convallis posuere morbi. Lobortis feugiat vivamus at augue eget arcu dictum. Velit ut tortor pretium viverra suspendisse potenti nullam ac tortor.",
            },
            {
              title: "Model C",
              img: "https://bafkreiactzrm5a3uouiwxwmnzgt2ltaobjxdh3tzvkjkj23ic7swwgb7uu.ipfs.nftstorage.link/",
              usd: "20",
              localfiat: "252.45",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi lacus sed viverra tellus. Donec ultrices tincidunt arcu non sodales. Pulvinar sapien et ligula ullamcorper malesuada. Quisque sagittis purus sit amet volutpat. Leo vel fringilla est ullamcorper eget nulla. Enim facilisis gravida neque convallis a cras semper. Maecenas pharetra convallis posuere morbi. Lobortis feugiat vivamus at augue eget arcu dictum. Velit ut tortor pretium viverra suspendisse potenti nullam ac tortor.",
            },
            {
              title: "Model D",
              img: "https://bafkreiecbb42s6hz7e7qzx7ppgad7hdl2cmxowzut3qzhocrmr2qijuij4.ipfs.nftstorage.link/",
              usd: "20",
              localfiat: "252.45",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi lacus sed viverra tellus. Donec ultrices tincidunt arcu non sodales. Pulvinar sapien et ligula ullamcorper malesuada. Quisque sagittis purus sit amet volutpat. Leo vel fringilla est ullamcorper eget nulla. Enim facilisis gravida neque convallis a cras semper. Maecenas pharetra convallis posuere morbi. Lobortis feugiat vivamus at augue eget arcu dictum. Velit ut tortor pretium viverra suspendisse potenti nullam ac tortor.",
            },
            {
              title: "Model E",
              img: "https://bafkreiec67ylmi2fits4izxlcjhbyejaytuv73jgbyklaezwlc5e3w7k6e.ipfs.nftstorage.link/",
              usd: "20",
              localfiat: "252.45",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi lacus sed viverra tellus. Donec ultrices tincidunt arcu non sodales. Pulvinar sapien et ligula ullamcorper malesuada. Quisque sagittis purus sit amet volutpat. Leo vel fringilla est ullamcorper eget nulla. Enim facilisis gravida neque convallis a cras semper. Maecenas pharetra convallis posuere morbi. Lobortis feugiat vivamus at augue eget arcu dictum. Velit ut tortor pretium viverra suspendisse potenti nullam ac tortor.",
            },
            {
              title: "Model F",
              img: "https://bafkreiax7kxyulhio2bgaceeeljhf47otlhjbjoiflsnutc6fszy3qrete.ipfs.nftstorage.link/",
              usd: "20",
              localfiat: "252.45",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi lacus sed viverra tellus. Donec ultrices tincidunt arcu non sodales. Pulvinar sapien et ligula ullamcorper malesuada. Quisque sagittis purus sit amet volutpat. Leo vel fringilla est ullamcorper eget nulla. Enim facilisis gravida neque convallis a cras semper. Maecenas pharetra convallis posuere morbi. Lobortis feugiat vivamus at augue eget arcu dictum. Velit ut tortor pretium viverra suspendisse potenti nullam ac tortor.",
            },
            {
              title: "Model G",
              img: "https://bafkreideblrwed34m3rxuuzvzahmvglgpzj6vuh3q2cxq7z6vj7pyzw24e.ipfs.nftstorage.link/",
              usd: "20",
              localfiat: "252.45",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi lacus sed viverra tellus. Donec ultrices tincidunt arcu non sodales. Pulvinar sapien et ligula ullamcorper malesuada. Quisque sagittis purus sit amet volutpat. Leo vel fringilla est ullamcorper eget nulla. Enim facilisis gravida neque convallis a cras semper. Maecenas pharetra convallis posuere morbi. Lobortis feugiat vivamus at augue eget arcu dictum. Velit ut tortor pretium viverra suspendisse potenti nullam ac tortor.",
            },
            {
              title: "Model H",
              img: "https://bafkreibhmgvde45fjpeh5g5p4ks254vwt2rfmjjwwk5j6xatkbajeytfi4.ipfs.nftstorage.link/",
              usd: "20",
              localfiat: "252.45",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi lacus sed viverra tellus. Donec ultrices tincidunt arcu non sodales. Pulvinar sapien et ligula ullamcorper malesuada. Quisque sagittis purus sit amet volutpat. Leo vel fringilla est ullamcorper eget nulla. Enim facilisis gravida neque convallis a cras semper. Maecenas pharetra convallis posuere morbi. Lobortis feugiat vivamus at augue eget arcu dictum. Velit ut tortor pretium viverra suspendisse potenti nullam ac tortor.",
            },
          ],
        },
      ],
    };
  },
  methods: {
    close() {
      this.dialog = false;
    },
    open(obj) {
      this.image = obj.img;
      this.text = obj.text;
      this.dialog = true;
    },
  },
};
</script>

<style src="../Pages.scss" lang="scss" />
