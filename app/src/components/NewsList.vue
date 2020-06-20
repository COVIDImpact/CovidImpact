<template>
  <div>
    <div class="news">
      <h1 class="news--title text-center">
        {{ $t("message.newsList_latestNews") }}
      </h1>
      <div class="news--info text-center">
        {{ $t("message.newsList_relevantEvents") }}
      </div>
      <div class="news--info text-center">
        {{ $t("message.newsList_outlook") }}
        <div id="score">{{ score }}</div>
      </div>
    </div>

    <b-tooltip
      target="score"
      :title="$t('message.newsList_outlookDescription')"
    ></b-tooltip>

    <div class="news__con">
      <div class="text-center">
        <b-card-group columns>
          <div v-for="(item, index) in items" :key="index">
            <b-card
              class="news-item"
              :img-src="item.urlToImage"
              img-alt="item.title"
              :title="item.title"
            >
              <b-card-text>{{ item.description }}</b-card-text>
              <div class="news-metadata">
                <a :href="item.url"
                  ><i>{{ $t("message.newsList_source") }}</i></a
                >
                <small class="text-muted">
                  {{ moment(item.publishedAt) }}
                </small>
              </div>
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
  props: ["items", "score"],
  components: {
    BCard,
  },
  data() {
    return {};
  },
  methods: {
    moment: function(date) {
      return moment(date).format(" MMM DD, hh:mm a");
    },
  },
};
</script>
<style scoped>
.news {
  width: 100%;
}
.news--title {
  font-size: 3em;
}

.news-metadata {
  display: flex;
  justify-content: space-between;
}

.news__con {
  padding: 1em 1em;
}
.news--info {
  margin-bottom: 2em;
}

.news__con--content a {
  color: #f958ff;
  font-size: 0.85em;
}

.news-item {
  margin-bottom: 4em;
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
