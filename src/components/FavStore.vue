<template>
  <li class="favStore">
    <p>{{favorite.address}}</p>
    <p>{{favorite.city}}</p>
    <button @click="deleteStore" class="deleteButton" :id="favorite.address">ta bort</button>
  </li>
</template>
<script>
export default {
  name: "FavStore",
  props: {
    storeInfo: Object,
    favorite: Object
  },
  methods: {
    deleteStore() {
      let storeInfo = { ...this.storeInfo.favorites };
      delete storeInfo[`${this.favorite.address}`];
      this.updateValue(storeInfo);
    },
    updateValue: function(value) {
      this.$emit("update-store", value);
    }
  }
};
</script>

<style scoped>
li {
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid;
  cursor: pointer;
  transition: 0.3s;
}

li:hover {
  background: rgba(0, 0, 0, 0.05);
}

p {
  width: fit-content;
}

.deleteButton {
  color: black;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: 0.3s;
}

.deleteButton:hover {
  background: rgba(0, 0, 0, 0.05);
}
</style>