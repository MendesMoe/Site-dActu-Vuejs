<template>
<div>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/page2">Page 2</router-link> |
    <router-link to="/page3">Page 3</router-link>
  </div>
  <router-view/>

  <footer>
    <p>pied de page</p>
  </footer>
  
</div>
  </template>

  <script>
  export default {
    
  }
  </script>


<style>


#nav {
  padding: 30px;
  background-color: #42b983;
  justify-content: center;
  align-items: center;

}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}



footer{
  background-color: #42b983;
  height:60px;
  width: 100%;
  position:absolute;
  bottom:0%;
}
</style>
