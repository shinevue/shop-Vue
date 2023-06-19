<style>
.w-40 {
  width: 40%;
}
</style>
<template>
  <div class="w-75 ma-auto my-16 border d-flex">
    <v-img
      class="w-40 border"
      :height="650"
      aspect-ratio="4/3"
      cover
      :src="list.image"
    />
    <div class="pa-7">
      <h1 class="pa-5 text-center">{{ list.title }}</h1>

      <v-card-actions class="pa-4 text-light-blue">
        <v-rating
          class="text-red mt-n2"
          v-model="rate"
          color="white"
          active-color="yellow-accent-4"
          half-increments
          hover
          size="18"
        ></v-rating>
        <span class="ms-5 me-3">
          {{ rate }}
        </span>
        ({{ count }} reviews)
      </v-card-actions>

      <v-card-title class="text-h6 text-black text-capitalize">
        {{ list.category }}
      </v-card-title>

      <v-card-title class="text-red text-h4">
        Price: $ {{ list.price }}
      </v-card-title>
      <h2 class="ma-4">Description</h2>
      <div>{{ list.description }}</div>
      <div class="mt-2 text-end">
        <v-btn href="/shopping" class="me-8" @:click="ADD(list.id)"
          >Go to Shopping</v-btn
        >

        <v-btn color="primary" class="me-8" @:click="ADD(list.id)"
          >Add to Cart</v-btn
        >

        <v-btn color="secondary" class="ma-2" @click="dialog = true"
          >Remove Item</v-btn
        >
      </div>
      <div>
        <v-row justify="center">
          <v-dialog v-model="dialog" width="auto">
            <v-card>
              <v-card-title> Are you remove this item? </v-card-title>
              <v-card-text>
                <v-btn
                  color="primary"
                  @:click="REMOVE(list.id), (dialog = false)"
                  >Remove Item</v-btn
                >
                <v-btn class="ma-2" @click="dialog = false"> Cancel </v-btn>
              </v-card-text>
            </v-card>
          </v-dialog>
        </v-row>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { mapMutations } from "vuex";

export default {
  data: () => ({
    elevate: 8,
    id: 0,
    list: {},
    rate: 0,
    count: 0,
    dialog: false,
  }),
  mounted() {
    this.id = this.$route.params.id;
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
