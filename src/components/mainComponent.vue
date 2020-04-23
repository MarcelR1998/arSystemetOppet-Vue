<template>
  <div id="mainComponent">
    <input-component v-bind:storeInfo="storeInfo" />
    <store-card v-bind:storeInfo="storeInfo" @update-store="updateStore" />
    <favs-component v-bind:storeInfo="storeInfo" @update-store="updateStore" />
  </div>
</template>

<script>
import inputComponent from "./inputComponent.vue";
import StoreCard from "./StoreCard.vue";
import FavsComponent from "./FavsComponent.vue";

export default {
  name: "mainComponent",
  components: {
    inputComponent,
    StoreCard,
    FavsComponent
  },
  data() {
    return {
      storeInfo: {
        store: {},
        hideStoreCard: true,
        status: "Öppetider ej tillgängliga",
        open: false,
        closed: false,
        favorites: {}
      }
    };
  },
  methods: {
    updateStore(e) {
      this.storeInfo.favorites = e;
    }
  }
};
</script>