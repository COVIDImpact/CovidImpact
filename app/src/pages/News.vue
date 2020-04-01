<template>
  <div>
    <CallToAction></CallToAction>
    <Navbar></Navbar>

    <div>
      <div v-if="isLoading">Loading</div>
      <div v-else>
        <ul id="example-1">
          <NewsList :items="newsArray"></NewsList>
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

const url =
  'https://newsapi.org/v2/everything?q="canadian businesses"AND Covid&sortBy=popularity&apiKey=c1b7824e846c4aeb91684b4b7ef6874c&pageSize=29&page=1&fbclid=IwAR1zJknmRvxP6QkFxlJ23UqMy4eXUv2X36sbEugYQTsxwFsUaY2uKILjxZ8';
// "https://newsapi.org/v2/top-headlines?country=ca&category=business&q=COVID&from=2020-03-01&sortBy=popularity&apiKey=c1b7824e846c4aeb91684b4b7ef6874c&pageSize=100&page=1&fbclid=IwAR1zJknmRvxP6QkFxlJ23UqMy4eXUv2X36sbEugYQTsxwFsUaY2uKILjxZ8";

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
      newsArray: []
    };
  },
  async mounted() {
    this.getNewsItems();
  },
  methods: {
    getNewsItems() {
      this.axios
        .get(url)
        .then(response => {
          console.log(response.data.articles);
          this.newsArray = response.data.articles;
          console.log(this.newsArray);
          this.isLoading = !true;
          console.log(this.isLoading);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(e => {
          console.log(e);
        });
    }
  }
};
</script>
<style scoped></style>
