<template>
  <section id="recomended" class="componentSpace">
    <aside class="space parent divcolmobile centermobile">
      <h2 class="h3">Estilos recomendados</h2>
      <div class="contflechas divrow">
        <v-btn class="left marginrightmobile" icon @click="changeSlides('prev')">
          <v-icon medium style="color: #FFFFFF !important">mdi-chevron-left</v-icon>
        </v-btn>
        <v-btn class="right marginleftmobile" icon @click="changeSlides('next')">
          <v-icon medium style="color: #FFFFFF !important">mdi-chevron-right</v-icon>
        </v-btn>
      </div>
    </aside>

    <aside class="contdown parent">
      <v-carousel
        v-model="carousel"
        hide-delimiters
        :show-arrows="false"
      >
        <template v-for="(item, index) in slider">
          <v-carousel-item
            v-if="(index + 1) % columns === 1 || columns === 1"
            :key="index"
          > 
            <v-row class="fill-height">
              <template v-for="(n,i) in columns">
                <template v-if="(+index + i) < slider.length">
                  <v-col :key="i" class="jcenter">
                    <v-card class="relative" color="var(--colorCartas3)">
                      <img :src="slider[+index + i].nft" alt="NFT">
                    </v-card>

                    <aside class="divcol center tcenter align">
                      <span class="h6-em">{{ slider[+index + i].title }}</span>
                      <p class="h8-em">
                        {{ slider[+index + i].desc }}
                      </p>
                    </aside>
                  </v-col>
                </template> 
              </template> 
            </v-row> 
          </v-carousel-item> 
        </template> 
      </v-carousel>  
    </aside>
  </section>
</template>

<script>
export default {
  name: "Recomended",
  data() {
    return {
      carousel: 0,
      slider: [
        {
          nft: "https://bafkreicpqhnkvzzk2tzll7mmjhfyrnbrl7rbjsxr6yzd4qcn55zeiujhla.ipfs.nftstorage.link/",
          title: "Artist Name",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, iure repellendus earum dolore quo officiis tenetur consequatur. consequatur.consequatur."
        },
        {
          nft: "https://bafkreiho7z5h3dyb7fyxc5jpjbs43hcoxotjc2efczeoex5wgmbzgqx2mi.ipfs.nftstorage.link/",
          title: "Artist Name",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, iure repellendus earum dolore quo officiis tenetur consequatur. consequatur.consequatur."
        },
        {
          nft: "https://bafkreibnmo4dvrpd64nhsapmwkogo6wo32m3husf2a47v4amrzgo6jbici.ipfs.nftstorage.link/",
          title: "Artist Name",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, iure repellendus earum dolore quo officiis tenetur consequatur. consequatur.consequatur."
        },
        {
          nft: "https://bafkreibajmzd5oeeanawo55vbhqxqcg7ycaphtwad32hzmwj6husdow6vi.ipfs.nftstorage.link/",
          title: "Artist Name",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, iure repellendus earum dolore quo officiis tenetur consequatur. consequatur.consequatur."
        },
        {
          nft: "https://bafkreifgjyirvtvjfw5gtcvy6nf5c4npdjqa5we3tz2mqotvmjsfba2uvy.ipfs.nftstorage.link/",
          title: "Artist Name",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, iure repellendus earum dolore quo officiis tenetur consequatur. consequatur.consequatur."
        },
        {
          nft: "https://bafkreia2kx5vgvme3tdrhhhjkghwfi5vhq2vxvnb6q47gfxyr6knza6ay4.ipfs.nftstorage.link/",
          title: "Artist Name",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, iure repellendus earum dolore quo officiis tenetur consequatur. consequatur.consequatur."
        },
        {
          nft: "https://bafkreicxwbyzlb7pg7ouzpsvz2t6s2xavbjbduzmj54ewh5moiustpfe34.ipfs.nftstorage.link/",
          title: "Artist Name",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, iure repellendus earum dolore quo officiis tenetur consequatur. consequatur.consequatur."
        },
        {
          nft: "https://bafkreigznnemyixohevqmluzzhpahvdl67s43lm77r5ieg3ozxtmr7s5s4.ipfs.nftstorage.link/",
          title: "Artist Name",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, iure repellendus earum dolore quo officiis tenetur consequatur. consequatur.consequatur."
        },
      ]
		}
  },
  computed: {
    columns() {
      if (this.$vuetify.breakpoint.lg) {
        return 4;
      }

      if (this.$vuetify.breakpoint.md) {
        return 3;
      }

      if (this.$vuetify.breakpoint.sm) {
        return 2;
      }

      return 1;
    }
  },
  methods: {
    changeSlides(item) {
      if (item == "next") {
        this.carousel++
      }
      if (item == "prev") {
        this.carousel--
      }
    }
  }
};
</script>

<style src="../Pages.scss" lang="scss" />
