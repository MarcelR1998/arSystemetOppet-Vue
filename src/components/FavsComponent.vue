<template>
  <div id="favsComponent">
    <h2>sparade butiker</h2>
    <ul id="favContainer">
      <FavStore
        v-for="favorite in storeInfo.favorites"
        :key="favorite.address"
        :storeInfo="storeInfo"
        :favorite="favorite"
        @update-store="updateStore"
      />
    </ul>
  </div>
</template>

<script>
import FavStore from "./FavStore.vue";

export default {
  name: "FavsComponent",
  components: {
    FavStore
  },
  props: {
    storeInfo: Object
  },
  methods: {
    updateStore(e) {
      this.$emit("update-store", e);
    }
  },
  created() {
    this.storeInfo.favorites = JSON.parse(localStorage.getItem("favStores"));
    if (this.storeInfo.favorites == null) {
      this.storeInfo.favorites = {};
    }
  }
};
</script>

<style scoped>
#favsComponent {
  width: 75%;
  max-width: 325px;
  text-align: center;
  margin: auto;
  background-color: #fed401;
  margin-top: 1em;
  padding: 2em;
  -webkit-box-shadow: 0px 6px 5px 0px rgba(0, 0, 0, 0.23);
  -moz-box-shadow: 0px 6px 5px 0px rgba(0, 0, 0, 0.23);
  box-shadow: 0px 6px 5px 0px rgba(0, 0, 0, 0.23);
  border-radius: 0.5em;
}

#favContainer {
  padding-inline-start: 0;
}
</style>