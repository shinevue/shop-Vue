import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { registerPlugins } from "@/plugins";

import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "vuetify/styles";

import { createStore } from "vuex";

const store = createStore({
  state: {
    counts: 0,
    listId: [],
    show: 0,
  },
  mutations: {
    ADD(state, payload) {
      if (!(state.listId.find((item) => item === payload) > 0)) {
        state.counts++;
        state.listId.push(payload);
      }
    },
    REMOVE(state, payload) {
      const tmp = state.listId.filter((id) => id != payload);
      {
        state.listId = [...tmp];
        state.counts--;
      }
    },
    BUY(state, payload) {
      const tmp = state.listId.filter((id) => id != payload);
      {
        state.listId = [...tmp];
        state.counts--;
      }
    },
    CHANGEBOARD(state, payload) {
      state.show ^= 1;
    },
  },
});

const app = createApp(App);

const vuetify = createVuetify({
  components,
  directives,
});
registerPlugins(app);
app.use(router);
app.use(store);
app.use(vuetify);
app.mount("#app");
