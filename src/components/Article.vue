<template>
  <div id="one_article">
    <h3>{{ titleArticle }}</h3>

    <p>{{ authorArticle }}</p>
    <img :src="imgArticle" />
    <p class="one_article_description">{{ descriptionArticle }}</p>
    <a class="one_article_link" :href="linkArticle">Lire l'article</a>

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
<style>
#one_article {
  margin: 10px;
  width: 250px;
  height: 90%;
  border: 1px solid #42b983;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 11px;
}
.one_article_description {
  text-align: justify;
  font-size: 18px;
}
#one_article h3 {
  color: rgb(114, 1, 1);
}
</style>