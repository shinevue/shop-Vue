<template>
  <v-hover :key="key" v-slot="{ isHovering, props }">
    <v-card
      v-bind="props"
      :elevation="isHovering ? 24 : 6"
      class="mx-auto pa-6 mx-auto rounded-xl d-flex"
      width="1000"
      height="auto"
    >
      <v-img :src="list.image" height="280" width="220" class="mx-5"></v-img>
      <div class="w-75">
        <v-card-title class="d-flex text-subtitle-1 text-black text-capitalize">
          {{ list.category }}
        </v-card-title>

        <div class="d-flex mt-n5">
          <v-card-subtitle class="text-red text-h6 mt-7">
            $ {{ list.price }}
          </v-card-subtitle>

          <v-card-actions class="pa-4 text-light-blue">
            <v-rating
              v-model="rate"
              color="white"
              active-color="yellow-accent-4"
              half-increments
              hover
              size="18"
            ></v-rating>
            <v-spacer class="ms-4 mt-2"
              >{{ rate }} ({{ count }} reviews)</v-spacer
            >
          </v-card-actions>
        </div>

        <div>{{ list.description }}</div>

        <div class="mt-2 text-end">
          <v-btn @:click="BUY(list.id)" class="me-8">Buy Item</v-btn>
          <v-btn color="primary" class="ma-2" @click="dialog = true"
            >Remove Item</v-btn
          >
        </div>

        <div>
          <v-row justify="center">
            <v-dialog v-model="dialog" width="auto">
              <v-card>
                <v-card-title> Are you remove this item? </v-card-title>

                <v-card-text>
                  <v-btn color="primary" @:click="REMOVE(list.id)"
                    >Remove Item</v-btn
                  >
                  <v-btn class="ma-2" @click="dialog = false"> Cancel </v-btn>
                </v-card-text>
              </v-card>
            </v-dialog>
          </v-row>
        </div>
      </div>
    </v-card>
  </v-hover>
</template>

<script>
import axios from "axios";
import { mapMutations } from "vuex";

export default {
  props: ["id", "key"],
  data: () => ({
    list: [],
    rate: 0,
    count: 0,
    elevate: 8,
    dialog: false,
  }),
  mounted() {
    axios
      .get(`https://fakestoreapi.com/products/${this.id}`)
      .then(
        (response) => (
          (this.list = response.data),
          (this.rate = response.data.rating.rate),
          (this.count = response.data.rating.count)
        )
      );
  },
  components: {},
  methods: {
    ...mapMutations(["REMOVE"]),
    ...mapMutations(["BUY"]),
  },
};
</script>
