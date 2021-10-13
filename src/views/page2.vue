<template>
  <div class="about">
    <h1>RECHERCHE DES ACTUALITES PAR PAYS</h1>
    <input v-model="info" @keyup.enter="newInfo"/>
    <button @click="newInfo" >VALIDER</button>
  
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

      info:"sport",
      
      tableauActu: [
        
      ],    
    };
  },

  
  async mounted() {
    const response = await fetch(
      "https://newsapi.org/v2/everything?q="+this.info+"&apiKey=817ed8ea1c004f859e2a802c336a4457"
    );
    const actuData = await response.json();
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

  methods:{
    async newInfo(){
      this.tableauActu = [];
      const response = await fetch(
      "https://newsapi.org/v2/everything?q="+this.info+"&apiKey=817ed8ea1c004f859e2a802c336a4457"
    );
    const actuData = await response.json();
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
    
    }
  }

  
};

</script>


<style>
.card{

  height:500px;
  width: 1000px;
  display:flex;
  flex-direction: row;
  justify-content: center;
  overflow-x: scroll;
  
}

</style>
