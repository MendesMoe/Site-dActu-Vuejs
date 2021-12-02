<template>
  <div class="home">
    <div class="page__top">
      <h1 class="page__txt">Rechercher par mot-clé</h1>
      <div class="page__input">
        <input v-model="info" @keyup.enter="newInfo" />
        <button @click="newInfo">VALIDER</button>
      </div>
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
      info: "sport",

      tableauActu: [],
    };
  },

  async mounted() {
    const response = await fetch(
      "https://newsapi.org/v2/everything?q=" +
        this.info +
        "&apiKey=817ed8ea1c004f859e2a802c336a4457"
    );
    const actuData = await response.json();
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

  methods: {
    async newInfo() {
      this.tableauActu = [];
      const response = await fetch(
        "https://newsapi.org/v2/everything?q=" +
          this.info +
          "&apiKey=817ed8ea1c004f859e2a802c336a4457"
      );
      const actuData = await response.json();
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
  },
};
</script>


<style>
.table-articles {
  display: flex;
  max-width: 90%;
  overflow: auto;
  flex-direction: row;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
}
.page__input {
  margin-bottom: 20px;
}
.page__input input {
  font-size: 18px;
}
</style>
