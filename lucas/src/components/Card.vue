<template>
  <v-hover v-slot="{ isHovering, props }">
    <v-card
      v-bind="props"
      :elevation="isHovering ? 24 : 6"
      class="mx-auto pa-6 mx-auto rounded-xl"
      width="344"
    >
      <v-img :src="list.image" height="400" cover></v-img>

      <div class="d-flex justify-space-around mt-4">
        <v-card-title
          class="d-flex justify-center text-subtitle-1 text-black text-capitalize"
        >
          {{ list.category }}
        </v-card-title>

        <v-card-subtitle class="text-red text-h6 mt-4">
          $ {{ list.price }}
        </v-card-subtitle>
      </div>

      <v-card-actions class="pa-4 text-light-blue">
        <span class="text-grey-lighten-1 text-caption me-2">
          ({{ list.rating.rate }})
        </span>

        <v-rating
          v-model="list.rating.rate"
          color="white"
          active-color="yellow-accent-4"
          half-increments
          hover
          size="18"
        ></v-rating>
        <v-spacer></v-spacer>
        <v-spacer>({{ list.rating.count }} reviews)</v-spacer>
      </v-card-actions>
      <div class="d-flex justify-end pe-5">
        <v-btn
          icon="mdi-information-variant"
          border
          size="small"
          variant="elevated"
          :href="`/detail/${list.id}`"
        ></v-btn>
        <v-btn
          icon="mdi-cart-plus"
          border
          class="ms-4"
          size="small"
          variant="elevated"
          @:click="ADD(list.id)"
        ></v-btn>
      </div>
    </v-card>
  </v-hover>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: ["list"],
  data: () => ({
    elevate: 8,
  }),
  mounted() {
    this.elevate = this.$store.state.count;
  },
  computed: {},
  methods: {
    ...mapMutations(["ADD"]),
  },
};
</script>
