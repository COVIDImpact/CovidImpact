<template>
  <div>
    <CallToAction></CallToAction>
    <Navbar></Navbar>

    <div>
      <div v-if="isLoading">{{$t("message.loading")}}</div>
      <div v-else>
        <ul id="example-1">
          <NewsList :items="news" :score="score"></NewsList>
        </ul>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
const CallToAction = () => import("@/components/CallToAction.vue");
const Navbar = () => import("@/components/Navbar.vue");
const Footer = () => import("@/components/Footer.vue");
const NewsList = () => import("@/components/NewsList.vue");
import { median } from "mathjs";

const newsApiUrl =
  'https://newsapi.org/v2/everything?apiKey=c1b7824e846c4aeb91684b4b7ef6874c&pageSize=29&page=1&fbclid=IwAR1zJknmRvxP6QkFxlJ23UqMy4eXUv2X36sbEugYQTsxwFsUaY2uKILjxZ8&sortBy=publishedAt&q="canadian businesses"AND Covid';
const sentimentApiUrl =
  'https://twinword-sentiment-analysis.p.rapidapi.com/analyze/';

export default {
  name: "financialaid",
  components: {
    CallToAction,
    Navbar,
    Footer,
    NewsList
  },
  data() {
    return {
      isLoading: true,
      news: [],
      sentimentScores: {},
      score: "🇨🇦",
    };
  },
  async mounted() {
    await this.getNewsItems();
    console.log(this.news);
    const promises = this.news.map((item, index) => this.getSentiment(index, item.description));
    await Promise.all(promises);
    const scores = Object.entries(this.sentimentScores).map(entry => entry[1]);
    console.log(scores);
    this.score = this.mapScoreToEmoji(scores);
  },
  methods: {
    async getNewsItems() {
      try {
        const response = await this.axios.get(newsApiUrl);
        this.news = response.data.articles;
        this.isLoading = false;
      } catch (error) {
        console.log(error);
      }
    },
    async getSentiment(index, description) {
      const headers = {
        "x-rapidapi-host": "twinword-sentiment-analysis.p.rapidapi.com",
        "x-rapidapi-key": "b75a76b087msh356e8673d46d70bp1b6196jsndb89ae387702",
        "content-type": "application/x-www-form-urlencoded"
      };
      const data = "text=" + description;
      const response  = await this.axios.post(sentimentApiUrl, data, {headers});
      this.sentimentScores[index] = response.data.score;
    },
    mapScoreToEmoji(scores) {
      const med = median(scores);
      if (med > 0.5) {
        return "😃";
      } else if (med < 0.5) {
        return "🙁";
      } else {
        return "🇨🇦";
      }
    }
  }
};
</script>
<style scoped></style>
