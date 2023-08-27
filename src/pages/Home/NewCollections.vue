<template>
  <section id="newCollections" class="componentSpace">
    <aside class="divrow acenter divwrapmobile jendmobile parent">
      <h2 class="h3 align center p">Collections</h2>
    </aside>

    <aside
      class="contdown"
      v-for="(item, index) in dataNewCollections"
      :key="index"
    >
      <v-card
        v-for="(object, index) in item.collection"
        :key="index"
        color="var(--colorCartas3)"
      >
        <img
          class="images"
          :src="object.image"
          :alt="'Collection Image #' + index"
        />
        <a href="#" class="tl h6">{{ object.title }}</a>
        <aside class="sectdown divcol">
          <div class="space">
            <span class="h7 weight">Bid</span>
            <div class="divrow acenter">
              <!-- <span class="price h7">$ {{ object.last_bid.value }} Dollars</span> -->
            </div>
          </div>
          <v-btn class="b1 h8-em mt-8" @click="openBid(object)" color="#D8D8D8"
            >Place a Bid/More info</v-btn
          >
        </aside>
      </v-card>
    </aside>
    <!-- dialog -->
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent width="auto">
        <v-overlay z-index="5" color="black" :value="overlay">
          <v-progress-circular indeterminate size="64"></v-progress-circular>
          Loading...
        </v-overlay>
        <v-card>
          <v-card-title>
            <span class="text-h5">Place a Bid</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="6">
                  <v-img
                    class="bg-grey-lighten-2"
                    width="550"
                    :aspect-ratio="1"
                    :src="selected.image"
                    cover
                  ></v-img>
                </v-col>
                <v-col cols="12" sm="6" md="6" class="pl-10">
                  <v-card color="basil">
                    <v-tabs
                      v-model="tab"
                      background-color="transparent"
                      color="basil"
                      grow
                    >
                      <v-tab v-for="item in items" :key="item">
                        {{ item }}
                      </v-tab>
                    </v-tabs>

                    <v-tabs-items v-model="tab">
                      <v-tab-item>
                        <v-card color="basil" flat>
                          <v-card-text
                            class="text-h6"
                            style="text-align: justify"
                          >
                            {{ selected.details }}
                          </v-card-text>
                          <v-divider class="mt-3"></v-divider>
                          <span class="text-h6">
                            <div style="text-align: justify" class="mt-3">
                              <v-icon size="large">mdi-clock</v-icon>
                              <span class="text-h7 ml-2">Auction ends in</span>
                              <p class="text-h6 mt-2 mb-2">
                                {{ selected.ends_in }}
                              </p>

                              <v-form
                                ref="form"
                                v-model="valid"
                                lazy-validation
                                class="mt-8"
                              >
                                <v-text-field
                                  v-if="selected.last_bid.user"
                                  v-model="bid.value"
                                  :label="
                                    'Minimun bid ($' +
                                    (selected.last_bid.value + 100) +
                                    ')'
                                  "
                                  :rules="[rules.required, rules.loanMinLast]"
                                  type="number"
                                ></v-text-field>
                                <v-text-field
                                  v-else
                                  v-model="bid.value"
                                  :label="
                                    'Minimun bid ($' +
                                    selected.last_bid.value +
                                    ')'
                                  "
                                  :rules="[rules.required, rules.loanMinInit]"
                                  type="number"
                                ></v-text-field>
                                <v-btn
                                  v-if="autorized"
                                  :disabled="!valid"
                                  @click="saveForm"
                                  :loading="loading"
                                  block
                                  class="b1 h8-em mt-2"
                                  color="#D8D8D8"
                                  >Place a Bid
                                  <template v-slot:loader>
                                    <span class="custom-loader">
                                      <v-icon light>mdi-cached</v-icon>
                                    </span>
                                  </template>
                                </v-btn>
                                <v-btn
                                  v-else
                                  block
                                  class="b1 h8-em mt-2"
                                  color="#D8D8D8"
                                  @click="
                                    (dialog_login = true), (overlay = true)
                                  "
                                  >First login
                                </v-btn>
                              </v-form>
                            </div>
                          </span>
                        </v-card>
                      </v-tab-item>
                      <v-tab-item>
                        <v-card color="basil" flat>
                          <v-card-text style="text-align: justify">
                            <v-list three-line>
                              <template v-for="(item, index) in bids">
                                <v-list-item :key="index">
                                  <v-list-item-avatar>
                                    <v-img
                                      v-if="item.id"
                                      :src="'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeZqt2CDVJaTxi_7N4q8SGxsLieLZ6QbcwolAREkfjdQS5QtVpU6N9zsL09WA8TV4ZwU&usqp=CAU'"
                                    ></v-img>
                                  </v-list-item-avatar>

                                  <v-list-item-content>
                                    <v-list-item-title>
                                      <span>{{ item.user }}</span>
                                    </v-list-item-title>
                                    <v-list-item-subtitle v-if="item.id">
                                      <span class="text--primary">Offered</span>
                                      &mdash; $ {{ item.value }}
                                    </v-list-item-subtitle>
                                  </v-list-item-content>
                                </v-list-item>
                              </template>
                            </v-list>
                          </v-card-text>
                        </v-card>
                      </v-tab-item>
                    </v-tabs-items>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="b1 h8-em" color="#D8D8D8" @click="close">
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-model="dialog_login" persistent max-width="600px">
        <v-overlay z-index="5" color="black" :value="overlay_login">
          <v-progress-circular indeterminate size="64"></v-progress-circular>
          Loading...
        </v-overlay>
        <v-card>
          <v-card-title>
            <span class="text-h5">Login</span>
          </v-card-title>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation class="mt-8">
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      label="Email*"
                      v-model="user.email"
                      :rules="emailRules"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      label="Password*"
                      type="password"
                      v-model="user.passwd"
                      :rules="passwdRules"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
              <small>*indicates required field</small>
              <v-btn
                :disabled="!valid"
                @click="postLogin"
                :loading="loading"
                block
                class="b1 h8-em mt-2"
                color="#D8D8D8"
                type="submit"
                >Login
                <template v-slot:loader>
                  <span class="custom-loader">
                    <v-icon light>mdi-cached</v-icon>
                  </span>
                </template>
              </v-btn>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="b1 h8-em" color="#D8D8D8" @click="closeDialogs">
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <!-- snackbar -->
      <v-snackbar v-model="snackbar" :timeout="-1" :color="color" :top="true">
        <b class="text-h6">{{ text }}</b>

        <template v-slot:action="{ attrs }">
          <v-btn
            class="b1 h8-em"
            color="#D8D8D8"
            v-bind="attrs"
            @click="snackbar = false"
          >
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </v-row>
  </section>
</template>
<script>
export default {
  name: "NewCollections",
  data() {
    return {
      loading: true,
      dialog: false,
      dialog_login: false,
      user: {
        passwd: "",
        first_name: "",
        last_name: "",
        email: "",
        number: "",
      },
      passwdRules: [(v) => !!v || "Required"],
      emailRules: [
        (v) =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail must be valid",
      ],
      snackbar: false,
      overlay: false,
      overlay_login: false,
      valid: true,
      text: "Bid placed successfully",
      bid: { value: 0 },
      color: "success",
      rules: {
        required: (value) => !!value || "Required.",
      },
      img: null,
      price: 0,
      tab: null,
      items: ["Details", "Bids"],
      bids: [{ user: "Please Login to view the bids", id: null, value: null }],
      selected: { last_bid: { value: 0, user: null } },
      dataNewCollections: [{}],
      interval_auction: null,
      interval_bid: null,
      autorized: false,
      message_if_login: "",
    };
  },
  mounted() {
    this.loading = true;
    this.fetchAuctions();
  },
  methods: {
    fetchAuctions() {
      // this.autorized = localStorage.getItem("Authorization") ? true : false;
      this.dataNewCollections[0].collection = [{
        id: 1,
        last_bid: {
          value: 450,
          user: null,
        },
        ends_in: "3 days, 22:59:18",
        image:
          "https://bafkreiho7z5h3dyb7fyxc5jpjbs43hcoxotjc2efczeoex5wgmbzgqx2mi.ipfs.nftstorage.link/",
        url_image:
          "https://bafkreiho7z5h3dyb7fyxc5jpjbs43hcoxotjc2efczeoex5wgmbzgqx2mi.ipfs.nftstorage.link/",
        init_price: "450.00",
        init_date: "2023-08-21T14:24:55.803963Z",
        end_date: "2023-08-31T00:00:00Z",
        details:
          "The story of a housewife with nowhere to go and nothing to do in the middle of a pandemic. She is stuck at home with kids and studies online, 120 thousand snacks a day and three meals after, she is exhausted. She thought of maybe taking a break and pulled out the most expensive pair of shoes she owned and decided to hide in the Laundry machine to escape from the ongoing tasks of her children. She imagined Marie Antoniette and the pandemic and thought she would have had a heart attack! THat woman probably didn't even know how to cook an egg. Less alone make a bathtub. Or clean a toilet. She was grateful to at least have the know how. She laughed while she was in tere of herself and stayed in there enjoying the solitude and the peace she felt to be in a place where no one could find her.\r\n\r\nThe artist put her timer on and went into the laundry machine with a dress and Badgley Mishka shoes to create this image.",
        title: "MidUniverse",
       },
        {
          id: 2,
          last_bid: {
            value: 450,
            user: null,
          },
          ends_in: "3 days, 22:59:18",
          image:
            "https://bafkreibnmo4dvrpd64nhsapmwkogo6wo32m3husf2a47v4amrzgo6jbici.ipfs.nftstorage.link/",
          url_image:
            "https://bafkreibnmo4dvrpd64nhsapmwkogo6wo32m3husf2a47v4amrzgo6jbici.ipfs.nftstorage.link/",
          init_price: "450.00",
          init_date: "2023-08-21T14:25:26.588885Z",
          end_date: "2023-08-31T00:00:00Z",
          details:
            "The wicked witch of the west decided to come and take the beautiful pink shoes the girl had on, Toto was not to be found anywhere, but she was in fear of her shoes being gone and not being able to tap her heels twice and go back home where she belonged. This pandemic was unknown and the witch was rude and spiteful!\r\n\r\nThe artist made two images by putting them together in photoshop and got her inspiration from the wizard of OZ.",
          title: "Ozziying",
        },
        {
          id: 3,
          last_bid: {
            value: 450,
            user: null,
          },
          ends_in: "3 days, 22:59:18",
          image:
            "https://bafkreibajmzd5oeeanawo55vbhqxqcg7ycaphtwad32hzmwj6husdow6vi.ipfs.nftstorage.link/",
          url_image:
            "https://bafkreibajmzd5oeeanawo55vbhqxqcg7ycaphtwad32hzmwj6husdow6vi.ipfs.nftstorage.link/",
          init_price: "450.00",
          init_date: "2023-08-21T14:25:34.043299Z",
          end_date: "2023-08-31T00:00:00Z",
          details:
            "We wear so many hats on a constant basis, we are constantly changing places and characters in our lives. This image is about that, about the hustle that is always taking us upon new tasks. We thrive but we change constantly to please sometimes everyone except ourselves.\r\n\r\nThe artist placed some nails on the wall and created this image by using the timer on her camera.",
          title: "Manyhats",
        },
        {
          id: 4,
          last_bid: {
            value: 450,
            user: null,
          },
          ends_in: "3 days, 22:59:18",
          image:
            "https://bafkreifgjyirvtvjfw5gtcvy6nf5c4npdjqa5we3tz2mqotvmjsfba2uvy.ipfs.nftstorage.link/",
          url_image:
            "https://bafkreifgjyirvtvjfw5gtcvy6nf5c4npdjqa5we3tz2mqotvmjsfba2uvy.ipfs.nftstorage.link/",
          init_price: "450.00",
          init_date: "2023-08-21T14:25:40.337910Z",
          end_date: "2023-08-31T00:00:00Z",
          details:
            "Fellini inspired the image of a russian woman stuck in storage in the middle of the pandemic, she is looking for toilet paper as she has run out and the shortage is real. The woman looks out into the horizon asking herself when this will be over.\r\n\r\nThe artist was inspired by her obsession with Fellini who was one of the first moving image makers that made the image seem unreal.",
          title: "Fellinistories",
        },
        {
          id: 5,
          last_bid: {
            id: 1,
            value: 450,
            dtime: "2023-08-23",
            user: "Andrés.Dominguez_2",
          },
          ends_in: "3 days, 22:59:18",
          image:
            "https://bafkreia2kx5vgvme3tdrhhhjkghwfi5vhq2vxvnb6q47gfxyr6knza6ay4.ipfs.nftstorage.link/",
          url_image:
            "https://bafkreia2kx5vgvme3tdrhhhjkghwfi5vhq2vxvnb6q47gfxyr6knza6ay4.ipfs.nftstorage.link/",
          init_price: "450.00",
          init_date: "2023-08-21T14:25:57.176295Z",
          end_date: "2023-08-31T00:00:00Z",
          details:
            "Identity and color. How do we represent ourselves in the world? Do our facial details have to do with that and who we are or feel we are? The color of our skin, the religion we practice or the things we call our values? We are all built of color and that is what is important, our traditions, our dance, our bibrance. This is what makes us unique!\r\n\r\nThe artist made two images, one of the scarf, and one of her face covered in the scarf. She took many images while being blindfolded with this Hermes scarf. Then put them together in photoshop. This image has been shown in many exhibitions and in 2024 it will be in a museum show called Wrapped.",
          title: "Seeme",
        },
        {
          id: 8,
          last_bid: {
            value: 450,
            user: null,
          },
          ends_in: "3 days, 22:59:18",
          image:
            "https://bafkreicpqhnkvzzk2tzll7mmjhfyrnbrl7rbjsxr6yzd4qcn55zeiujhla.ipfs.nftstorage.link/",
          url_image:
            "https://bafkreicpqhnkvzzk2tzll7mmjhfyrnbrl7rbjsxr6yzd4qcn55zeiujhla.ipfs.nftstorage.link/",
          init_price: "450.00",
          init_date: "2023-08-21T14:26:16.547391Z",
          end_date: "2023-08-31T00:00:00Z",
          details:
            "Discipline was to be set in the midst of an unknown future that she lived in between the kids and her life's purpose. We all needed to be a part of the organizing and the cleaning.  sit down and do your shores!\r\n\r\nThe artist got inspired by an image she made in 2008 while going through her first time being a mom. This time around making it a funny laugh for her and the kids.",
          title: "Discipline",
        },
        {
          id: 9,
          last_bid: {
            value: 450,
            user: null,
          },
          ends_in: "3 days, 22:59:18",
          image:
            "https://bafkreibursrvx2r247ovzmrduerdwdihj5rssodxaueso742hnlj7gkt7q.ipfs.nftstorage.link/",
          url_image:
            "https://bafkreibursrvx2r247ovzmrduerdwdihj5rssodxaueso742hnlj7gkt7q.ipfs.nftstorage.link/",
          init_price: "450.00",
          init_date: "2023-08-21T14:26:22.999167Z",
          end_date: "2023-08-31T00:00:00Z",
          details:
            "Sewing your shadow back on. Sit down and start getting a grip on your own life and what you want and who you are. Be authentic with your ideas. Take the time to find where you got lost and take that shadow and sew it back on like Peter Pan had to do. Misplaced shadows are part of life but always important to make things right and bring them back to be with us and follow us.\r\n\r\nThe artist made two images here. One of her shadows standing in front of the bed with a light placed to make that shadow, the other image is of her sitting on the bed pretending to sew her shadow on her feet just like Peter Pan did in the movie.",
          title: "Sewitup",
        },
        {
          id: 10,
          last_bid: {
            value: 450,
            user: null,
          },
          ends_in: "3 days, 22:59:18",
          image:
            "https://bafkreiactzrm5a3uouiwxwmnzgt2ltaobjxdh3tzvkjkj23ic7swwgb7uu.ipfs.nftstorage.link/",
          url_image:
            "https://bafkreiactzrm5a3uouiwxwmnzgt2ltaobjxdh3tzvkjkj23ic7swwgb7uu.ipfs.nftstorage.link/",
          init_price: "450.00",
          init_date: "2023-08-21T14:26:33.466498Z",
          end_date: "2023-08-31T00:00:00Z",
          details:
            "Blasted. The cleaning situation has gotten out of hand. The objects have now found even a strange life that they now live in, they don't want to cooperate, and decided to beat her up in the process of cleaning the kitchen.\r\n\r\nThe artist took everything out from under the sink where all the cleaning products were. She made fun of herself while doing this image. It took an hour to make as it needed to be perfect.",
          title: "Blasted",
        },
        {
          id: 11,
          last_bid: {
            value: 450,
            user: null,
          },
          ends_in: "3 days, 22:59:18",
          image:
            "https://bafkreifirihquaguzuh3bg2jmfynsvc5pspbw4dbvsc2u7rhucn7tzlkfe.ipfs.nftstorage.link/",
          url_image:
            "https://bafkreifirihquaguzuh3bg2jmfynsvc5pspbw4dbvsc2u7rhucn7tzlkfe.ipfs.nftstorage.link/",
          init_price: "450.00",
          init_date: "2023-08-21T14:26:40.022396Z",
          end_date: "2023-08-31T00:00:00Z",
          details:
            "The magic she felt within made things start flying, manifesting magic is part of the universe playing with us. The tea cups that she saw as beautiful now had started floating all around her, her dress opened up as if it was going to fly and wind up in the skies with the moon shining down her cheek. She knew she had the power to get through anything. She was taught by this that she could fly!\r\n\r\nThe artist placed all of her cute tea cups on the terrace floor and held some in different planes of the images to be able to place all the different layers in photoshop",
          title: "AliceMagic",
        },
        {
          id: 12,
          last_bid: {
            value: 450,
            user: null,
          },
          ends_in: "3 days, 22:59:18",
          image:
            "https://bafkreibejeh24u3aek7r6ocrdmh6okjuru2epqhe6fg2daqqlg3pqrm76e.ipfs.nftstorage.link/",
          url_image:
            "https://bafkreibejeh24u3aek7r6ocrdmh6okjuru2epqhe6fg2daqqlg3pqrm76e.ipfs.nftstorage.link/",
          init_price: "450.00",
          init_date: "2023-08-21T14:26:49.028184Z",
          end_date: "2023-08-31T00:00:00Z",
          details:
            "Sometimes we have the tendency to become forgotten like the shoes at the entrance of the house. You are home but are still not a part of the home you have been left behind at the door. She stood there waiting for someone to tell her what to do and how to do it, what to say and how to say it. She felt like dirty shoes were left behind! but NOOOOOOO go on take the reins of the situation and keep moving forward and feel like the entrance of that home is the place where you can breathe and grow. You are not a piece of clothes left in a closet!\r\n\r\nThe artist just made this image thinking of how she was feeling. left behind like a door rug. NO response into who she wanted to be, she was lost and slowly after all this work she made she started finding herself.",
          title: "DoorMat",
        }],
        this.loading = false;
    },
    fetchBids() {
      if (localStorage.getItem("Authorization")) {
        this.axios
          .get("api/bid/?auction_id=" + this.selected.id)
          .then((res) => {
            if (res.data.length > 0) {
              this.bids = res.data[0].id
                ? res.data
                : [{ user: "Loading...", id: null, value: null }];
            } else {
              this.bids = [{ user: "No bids...", id: null, value: null }];
            }
          });
      }
    },
    saveForm() {
      if (this.$refs.form.validate()) {
        this.overlay = true;
        this.axios
          .post("api/bid/", this.bid)
          .then((res) => {
            this.bid = res.data;
            this.finalizePost(
              this.message_if_login + "Bid placed successfully",
              "success"
            );
          })
          .catch((error) => {
            if (error.response.data.detail) {
              this.finalizePost(error.response.data.detail, "error");
            } else {
              this.finalizePost(error.response.data, "error");
            }
          });
      }
    },
    finalizePost(message, color) {
      // Text for bid reult, success or error, Bid placed successfully for succes, An error ocurred for error
      this.text = message;
      // Success or error dependeing on result
      this.color = color;
      this.dialog = false;
      this.dialog_login = false;
      this.snackbar = true;
      this.overlay = false;
      this.$refs.form.reset();
      this.message_if_login = "";
    },
    openBid(auction) {
      this.dialog = true;
      this.selected = auction;
      this.interval_bid = setInterval(() => {
        this.fetchBids();
      }, 3000);
      if (auction.last_bid.user) {
        this.bid = {
          value: auction.last_bid.value + 100,
          email: "",
          auction: auction.id,
        };
      } else {
        this.bid = {
          value: auction.last_bid.value,
          email: "",
          auction: auction.id,
        };
      }
    },
    close() {
      this.bids = [{ user: "Loading...", id: null, value: null }];
      this.dialog = false;
      this.$refs.form.reset();
      clearInterval(this.interval_bid);
    },
    addToken(value) {
      if (value) {
        this.axios.defaults.headers.common.Authorization = "token " + value;
      }
    },
    postLogin() {
      this.dialog_login = true;
      this.axios
        .post("api/login/", {
          email: this.user.email,
          password: this.user.passwd,
        })
        .then((res) => {
          localStorage.setItem("Authorization", res.data.token);
          localStorage.setItem("Username", res.data.username);
          this.addToken(localStorage.getItem("Authorization"));
          this.message_if_login = "Login and ";
          this.saveForm();
        })
        .catch((error) => {
          this.finalizePost(error.response.data, "error");
        });
    },
    closeDialogs() {
      this.dialog_login = false;
    },
  },
};
</script>

<style src="../Pages.scss" lang="scss">
.cancelar:hover {
  cursor: pointer;
}
</style>
