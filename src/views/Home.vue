<template>
  <div class="home">
    <div class="page__top">
      <h1 class="page__txt">Actualités en France</h1>
    </div>

    <div class="table-articles">
      <Article
        v-for="(element, index) in tableauActu"
        :key="index"
        :titleArticle="element.title"
        :authorArticle="element.author"
        :descriptionArticle="element.description"
        :imgArticle="element.image"
        :linkArticle="element.lien"
      />
    </div>
  </div>
</template>

<script>
import Article from "../components/Article.vue";

export default {
  components: {
    Article: Article,
  },

  data() {
    return {
      tableauActu: [],
    };
  },

  /* Mounted */
  async mounted() {
    const response = await fetch(
      "https://newsapi.org/v2/top-headlines?country=fr&apiKey=817ed8ea1c004f859e2a802c336a4457"
    );
    const actuData = await response.json();
    console.log("la requete est bien parti");
    console.log(actuData);

    for (let i = 0; i < 5; i++) {
      this.tableauActu.push({
        title: actuData.articles[i].title,
        author: actuData.articles[i].author,
        description: actuData.articles[i].description,
        lien: actuData.articles[i].url,
        image: actuData.articles[i].urlToImage,
      });
    }
  },
};
</script>


<style>
.page__top {
  max-width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-bottom: 20px;
}
.table-articles {
  display: flex;
  max-width: 90%;
  overflow: auto;
  flex-direction: row;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
}
</style>
