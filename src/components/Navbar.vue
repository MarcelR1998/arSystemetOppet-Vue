<template>
  <nav>
    <ul id="navUl">
      <li>
        <router-link to="/">Hem</router-link>
      </li>
      <li>
        <router-link to="/about">Om</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped>
nav {
  width: 100%;
  height: 7vh;
  background-color: white;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  -webkit-box-shadow: 0px 6px 5px 0px rgba(0, 0, 0, 0.23);
  -moz-box-shadow: 0px 6px 5px 0px rgba(0, 0, 0, 0.23);
  box-shadow: 0px 6px 5px 0px rgba(0, 0, 0, 0.23);
}

#navUl {
  display: flex;
  width: 20em;
  margin: auto;
  padding-inline-start: 0;
  flex-direction: row;
  justify-content: space-around;
  height: 100%;
}

#navUl li {
  list-style: none;
  height: 100%;
  width: 100%;
}

#navUl li {
  list-style: none;
  height: 100%;
  width: 100%;
}

#navUl li a {
  color: black;
  text-decoration: none;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: 0.2s;
}

#navUl li a:hover {
  background-color: #fed401;
}
</style>