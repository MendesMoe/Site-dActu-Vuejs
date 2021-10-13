<template>
  <div id="one-article">
    <h3>{{ titleArticle }}</h3>
    <p>{{ authorArticle }}</p>
    <img :src="imgArticle" />
    <p>{{ descriptionArticle }}</p>
    <a :href="linkArticle"> </a>

    <!-- ici thomas m'a prevenue -->
  </div>
</template>

<script>
export default {
  name: "Article",
  props: {
    titleArticle: String,
    authorArticle: String,
    descriptionArticle: String,
    imgArticle: String,
    linkArticle: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#one-article {
  margin:10px;
  width: 200px;
  height: 450px;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px;
}
#one-article h3 {
  color: red;
}
</style>