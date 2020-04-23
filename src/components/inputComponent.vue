<template>
  <div id="inputComponent">
    <h1>Är Systemet Öppet?</h1>
    <input id="cityInput" type="text" placeholder="Välj stad" v-model="city" />
    <button id="submit" @click="fetchStores">sök</button>
    <select name="address" id="address" v-model="selectedStore" @change="onChange">
      <option value>Välj butik</option>
      <option v-for="store in stores" :key="store.address">{{store.address}}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "inputComponent",
  props: {
    storeInfo: Object
  },
  data() {
    return {
      city: "",
      selectedStore: "",
      stores: []
    };
  },
  methods: {
    fetchStores() {
      fetch(`https://bolaget.io/stores?city=${this.city}&limit=100`)
        .then(res => {
          return res.json();
        })
        .then(data => {
          //Adds placeholder option
          /*addPlaceholder(); */
          /*  data.forEach(store => {
            createAndAppendContent(store);
          }); */
          this.stores = data;
        });
      /*       this.city = ""; */
    },
    updateValue: function(value) {
      this.$emit("update:storeInfo", value);
    },
    onChange() {
      if (this.selectedStore !== "") {
        this.storeInfo.hideStoreCard = false;
      } else {
        this.storeInfo.hideStoreCard = true;
      }
      this.stores.forEach(store => {
        if (store.address == this.selectedStore) {
          this.storeInfo.store = store;
          if (store.opening_hours[1]) {
            let opening = Number(store.opening_hours[0].slice(11, 13));
            let closing = Number(store.opening_hours[0].slice(17, 19));
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
    }
  }
};
</script>

<style scoped>
#inputComponent {
  width: 75%;
  max-width: 325px;
  text-align: center;
  margin: auto;
  background-color: white;
  margin-top: 1em;
  padding: 2em;
  -webkit-box-shadow: 0px 6px 5px 0px rgba(0, 0, 0, 0.23);
  -moz-box-shadow: 0px 6px 5px 0px rgba(0, 0, 0, 0.23);
  box-shadow: 0px 6px 5px 0px rgba(0, 0, 0, 0.23);
  border-radius: 0.5em;
}

#cityInput {
  padding: 0.5em;
}

#submit {
  padding: 0.5em;
  background-color: #fed401;
  border: 2px solid #fed401;
  transition: 0.3s;
}

#submit:hover {
  filter: brightness(0.9);
  cursor: pointer;
}

#address {
  padding: 0.5em;
  margin-top: 1em;
  width: 100%;
}

select option {
  -webkit-appearance: none !important;
}
</style>
