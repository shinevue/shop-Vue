<template>
  <v-card max-width="448" class="mx-auto" color="grey-lighten-3">
    <v-layout>
      <v-app-bar
        color="teal-darken-4"
        image="https://picsum.photos/1920/1080?random"
      >
        <template v-slot:image>
          <v-img
            gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
          ></v-img>
        </template>

        <template v-slot:prepend>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>Shopping</v-app-bar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
        <v-btn @:click="CHANGEBOARD" icon>
          <v-badge :content="countItem" color="error">
            <v-icon>mdi-cart-outline</v-icon>
          </v-badge>
        </v-btn>
      </v-app-bar>
    </v-layout>
  </v-card>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "AppBar",
  data() {},
  mounted() {},
  computed: {
    countItem() {
      return this.$store.state.counts;
    },
  },
  components: {},
  methods: {
    ...mapMutations(["CHANGEBOARD"]),
  },
};
</script>
