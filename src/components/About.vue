<template>
  <div id="inputComponent">
    <div id="aboutContainer">
      <ul>
        <li>
          <button
            @click="aboutButton"
            class="button"
            v-bind:class="{switched: !switched}"
            id="about"
          >Om sidan</button>
        </li>
        <li>
          <button @click="APIButton" class="button" v-bind:class="{switched: switched}" id="api">API</button>
        </li>
      </ul>
      <div id="textBox" v-html="textBoxText"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FavsComponent",
  data() {
    return {
      switched: false,
      textBoxText: `<p>
      Återskapad från grunden i Vue.js.
      Ett litet projekt för att öva på att hantera API:er. 
        Denna sida företräder inte och är inte på något sätt relaterad till Systembolaget Aktiebolag, 
        och inte heller något annat företag eller myndighet.
        <br>
        <br>
        Skapat av Marcel Rossi
        <br>
        <a href="https://github.com/MarcelR1998">github.com/MarcelR1998</a>
        </p>`
    };
  },
  methods: {
    aboutButton() {
      this.switched = false;
      this.textBoxText = `<p>
      Återskapad från grunden i Vue.js.
      Ett litet projekt för att öva på att hantera API:er. 
        Denna sida företräder inte och är inte på något sätt relaterad till Systembolaget Aktiebolag, 
        och inte heller något annat företag eller myndighet.
        <br>
        <br>
        Skapat av Marcel Rossi
        <br>
        <a href="https://github.com/MarcelR1998">github.com/MarcelR1998</a></p>`;
    },
    APIButton() {
      this.switched = true;
      this.textBoxText = `<div id="textTarget"><p>API:t jag använt mig av heter bolaget.io, och är en konvertering till JSON
         baserat på systembolagets officiella API.</p>
         
         <a href="https://bolaget.io/">bolaget.io</a>
         <br>
         <a href="https://www.systembolaget.se/api">systembolaget.se/api/</a>
         </div>`;
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

#aboutContainer {
  display: grid;
  grid-template-columns: 30% auto;
  grid-template-rows: auto;
  height: 14em;
}

#aboutContainer ul {
  padding-inline-start: 0;
  margin: 0;
}

#aboutContainer li {
  list-style: none;
}

.button {
  width: 100%;
  height: 3em;
  background-color: white;
  color: black;
  border: none;
  cursor: pointer;
  transition: 0.2s;
}

.switched {
  background-color: rgb(254, 212, 1);
}

#textBox {
  margin-left: 2em;
  font-size: 90%;
  text-align: justify;
}

@media only screen and (max-width: 420px) {
  #aboutContainer {
    grid-template-columns: auto;
    grid-template-rows: 20% auto;
  }

  #aboutContainer ul {
    display: flex;
  }

  #aboutContainer li {
    list-style: none;
    width: 50%;
    display: inline;
  }

  #textBox {
    margin-left: 0;
  }
}
</style>