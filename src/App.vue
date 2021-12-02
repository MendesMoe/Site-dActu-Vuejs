<template>
  <div>
    <div id="nav">
      <div class="logo">VUE ACTU</div>
      <div class="nav_links">
        <router-link to="/"> Home </router-link>
        <router-link to="/search"> Filtrer par mot-clé </router-link>
      </div>
    </div>
    <router-view />

    <footer>
      <p align="center">Application Vue.js avec News API</p>
    </footer>
  </div>
</template>

  <script>
export default {};
</script>


<style>
/* import de la font-family Permanent Marker pour le header */
@import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap");

#nav {
  padding: 20px;
  background-color: #42b983;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 20px;
}
.logo {
  font-family: "Permanent Marker", cursive;
  font-size: 27px;
}
.nav_links {
  display: flex;
  width: 250px;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 15px;
}
#nav a {
  font-weight: bold;
  color: #1b2733;
  font-size: 18px;
  text-decoration: none;
}
#nav a:hover {
  text-decoration: underline;
}

#nav a.router-link-exact-active {
  color: #314253;
}

footer {
  background-color: #42b983;
  height: 60px;
  width: 100%;
  position: absolute;
  bottom: 0%;
}
</style>
