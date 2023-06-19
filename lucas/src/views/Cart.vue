<style>
.w-40 {
  width: 40%;
}
</style>
<template>
  <div>
    <div v-for="id in computedValue" class="ma-10">
      <item :id="id" :key="id" />
    </div>
  </div>
</template>
<script>
import Item from "../components/Item.vue";
import { mapMutations } from "vuex";

export default {
  data: () => ({
    elevate: 8,
    lists: [],
  }),
  updated() {
    this.lists = this.$store.state.listId;
  },
  computed: {
    computedValue() {
      return this.$store.state.listId;
    },
  },
  components: {
    Item,
  },
  methods: {
    ...mapMutations(["ADD"]),
  },
};
</script>
