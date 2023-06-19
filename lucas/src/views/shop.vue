<template>
  <cart v-show="showBoard" class="mt-10 pa-10" />
  <div class="d-flex flex-wrap justify-space-around mt-16">
    <div v-for="list in lists" class="ma-10" v-show="!showBoard">
      <card :list="list" />
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import Cart from "./Cart.vue";
import axios from "axios";

export default {
  name: "Shop",
  data() {
    return {
      lists: [],
    };
  },
  mounted() {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => (this.lists = response.data));
  },
  computed: {
    showBoard() {
      return this.$store.state.show;
    },
  },
  components: {
    Card,
    Cart,
  },
};
</script>
