<template>
  <v-footer id="footer" color="var(--colorFooter)"
    height="auto" absolute>
    <v-row no-gutters class="divcol align" style="max-width: 90%">
      <!-- content -->
      <section class="space" style="width: 100%">
        <img class="logoFooter" :src="`${$store.state.baseURL}themes/${$store.state.theme}/logoFooter.png`"
          alt="Logo Footer">

        <aside class="contcenter divrow">
          <div class="divcol" v-for="(item, index) in dataFooter" :key="index">
            <span class="h6-em colorFooter bold">
              {{ item.title }}
            </span>
            <a v-for="(item2, index) in item.footerLink" :key="index"
              href="#" class="h7-em" style="color: #FFFFFF !important;">
              {{ item2.link }}
            </a>
          </div>
        </aside>

        <aside class="contright divrow">
          <div class="divcol">
            <span class="h6-em colorFooter bold">Síguenos</span>
            <div class="divrow">
              <a v-for="(item, index) in dataIconos" v-bind:key="index"
                class="divpadd paddleftdel marginright" :href="item.link" target="_blank">
                <v-icon large color="#FFFFFF !important">{{ item.icon }}</v-icon>
              </a>
            </div>
          </div>
        </aside>
      </section>

      <span class="tcenter h7-em colorFooter">
        &copy;2021 GlobalDV, All Rights Reserved.
      </span>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      dataFooter : [
      ],
      dataIconos: [
        {
          icon: "mdi-instagram",
          link: "https://instagram.com/duberyvalencia?igshid=MzRlODBiNWFlZA=="
        },
      ]
    }
  }
}
</script>

<style src="./Layout.scss" lang="scss" />
