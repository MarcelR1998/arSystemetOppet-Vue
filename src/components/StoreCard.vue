<template>
  <div class="storeDiv" v-bind:class="{hidden: storeInfo.hideStoreCard}">
    <!-- Store Address -->
    <h3>{{storeInfo.store.address}}</h3>
    <!-- Store Name -->
    <p>{{storeInfo.store.name}}</p>
    <!-- Status -->
    <h3
      v-bind:class="{open: storeInfo.open, closedBig: storeInfo.closed, notOpen: !storeInfo.open}"
    >
      {{storeInfo.status}}
      <span v-bind:class="{hidden: !storeInfo.open}">
        <i class="fas fa-glass-cheers"></i>
      </span>
    </h3>

    <!-- Opening Hours -->
    <p v-if="storeInfo.store.opening_hours">{{storeInfo.store.opening_hours[0]}}</p>
    <button @click="saveStore" class="favButton">favoritmarkera</button>
    <button @click="closeCard" class="closeButton">stäng</button>
  </div>
</template>

<script>
export default {
  name: "StoreCard",
  props: {
    storeInfo: Object
  },
  data() {
    return {};
  },
  methods: {
    saveStore() {
      let storeInfo = { ...this.storeInfo.favorites };
      storeInfo[`${this.storeInfo.store.address}`] = {
        address: this.storeInfo.store.address,
        city: this.storeInfo.store.city
      };
      this.updateValue(storeInfo);
    },
    updateValue: function(value) {
      this.$emit("update-store", value);
    },
    closeCard() {
      this.storeInfo.hideStoreCard = true;
    }
  }
};
</script>

<style scoped>
.hidden {
  display: none;
}

.storeDiv {
  position: relative;
  background-color: white;
  width: 85%;
  margin: 1em auto 1em auto;
  max-width: 300px;
  box-shadow: 0px 6px 5px 0px rgba(0, 0, 0, 0.23);
  border-radius: 0.5em;
  padding: 1em;
}

.closeButton {
  padding: 0.5em;
  background-color: white;
  border: none;
  transition: 0.3s;
  cursor: pointer;
}

.closeButton:hover {
  filter: brightness(0.9);
}

.favButton {
  padding: 0.5em;
  background-color: white;
  border: none;
  transition: 0.3s;
  cursor: pointer;
}

.favButton:hover {
  filter: brightness(0.9);
}

.open {
  color: green;
  font-size: 36px;
}

.notOpen {
  color: red;
}

.closedBig {
  font-size: 36px;
}

.hidden {
  display: none;
}
</style>