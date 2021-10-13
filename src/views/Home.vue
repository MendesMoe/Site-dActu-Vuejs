<template>
  <div class="home">
    <div >
          <h1  class="">Actualités en France </h1>
          </div>  

          <div class="card">
          
          <Article
            v-for="(element,index) in tableauActu"
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
import Article from '../components/Article.vue'


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

    for(let i=0; i<5; i++ ){
    this.tableauActu.push({
    title : actuData.articles[i].title,
    author :actuData.articles[i].author,
    description :actuData.articles[i].description,
    lien:actuData.articles[i].url,
    image:actuData.articles[i].urlToImage,
    });
    }

  },

  
};
</script>


<style>
.card{
  display:flex;
  flex-direction: row;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;

}

</style>
