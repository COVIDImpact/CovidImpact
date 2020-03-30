<template>
  <div>
    <div class="news">
      <h1 class="news--title text-center">Latest News</h1>
      <div class="news--info text-center">Relevant events for your business</div>
    </div>

    <div class="news__con">
      <div class="news__con--content">
        <b-card-group deck>
          <div v-for="(item, index) in items" :key="index">
            <b-card class="bcard news-item" :img-src="item.urlToImage" :title="item.title">
              <b-card-text>{{ item.description }}</b-card-text>
              <template v-slot:footer>
                <span class="float-left">
                  <a :href="item.url">[Source]</a>
                </span>
                <div class="float-right">
                  <small class="text-muted">
                    {{
                    moment(item.publishedAt)
                    }}
                  </small>
                </div>
              </template>
            </b-card>
          </div>
        </b-card-group>
      </div>
    </div>
  </div>
</template>

<script>
import { BCard } from "bootstrap-vue";
import moment from "moment";

export default {
  name: "financialaid",
  props: ["items"],
  components: {
    BCard
  },
  data() {
    return {};
  },
  methods: {
    moment: function(date) {
      return moment(date).format(" MMM DD, hh:mm a");
    }
  }
};
</script>
<style scoped>
.news {
  width: 100%;
}
.news--title {
  font-size: 3em;
}
.news__con {
  padding: 1em 1em;
}
.news--info {
  margin-bottom: 2em;
}
.news__con--title {
  font-size: 2em;
  margin-top: 0em;
}
.news__con--content {
  width: 100%;
  margin-bottom: 1em;
}
.news__con--content a {
  color: #f958ff;
  font-size: 0.85em;
}
.bcard {
  width: 50%;
  margin: 0 auto; /* Added */
  float: none; /* Added */
  margin-bottom: 10px; /* Added */
}

.news__con--values {
  font-weight: bold;
}

.news__con--time-stamp {
  position: relative;
  right: 0px;
  top: 0px;
}

.news-item {
  /* width: 100%;
  margin-bottom: 4em; */
}

@media screen and (min-width: 768px) {
  .news__con--content {
    width: 768px;
    margin: 0 auto;
    margin-bottom: 2em;
  }
}
@media screen and (min-width: 768px) {
  .news__con {
  }
}
</style>
