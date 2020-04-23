<template>
  <li @click="selectStore" class="favStore">
    <p>{{favorite.address}}</p>
    <p>{{favorite.city}}</p>
    <button @click="deleteStore" class="deleteButton" id="delete">ta bort</button>
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
      let storeInfo = { ...this.storeInfo };
      delete storeInfo.favorites[`${this.favorite.address}`];
      this.updateValue(storeInfo);
      localStorage.setItem(
        "favStores",
        JSON.stringify(this.storeInfo.favorites)
      );
    },
    updateValue: function(value) {
      this.$emit("update-store", value);
    },
    selectStore(e) {
      if (e.target.id !== "delete") {
        fetch(`https://bolaget.io/stores?city=${this.favorite.city}&limit=100`)
          .then(res => {
            return res.json();
          })
          .then(data => {
            data.forEach(fetchedStore => {
              if (this.favorite.address == fetchedStore.address) {
                this.storeInfo.store = fetchedStore;
                if (fetchedStore.opening_hours[1]) {
                  let opening = Number(
                    fetchedStore.opening_hours[0].slice(11, 13)
                  );
                  let closing = Number(
                    fetchedStore.opening_hours[0].slice(17, 19)
                  );
                  let time = new Date().getHours();
                  if (time >= opening && time < closing) {
                    this.storeInfo.status = "Öppet!";
                    this.storeInfo.open = true;
                    this.storeInfo.closed = false;
                  } else {
                    this.storeInfo.status = "Stängt";
                    this.storeInfo.open = false;
                    this.storeInfo.closed = true;
                  }
                } else {
                  this.storeInfo.status = "Öppetider ej tillgängliga";
                  this.storeInfo.open = false;
                  this.storeInfo.closed = false;
                }
              }
            });
          });
        this.storeInfo.hideStoreCard = false;
      }
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