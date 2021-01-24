<template>
  <div class="smartsearch ">
    <ais-instant-search :search-client="searchClient" index-name="covidimpact">
      <b-container>
        <ais-search-box placeholder="Discover opportunities..." />
      </b-container>
      <br />
      <b-container>
        <ais-hits>
          <div slot-scope="{ items }">
            <b-card-group deck>
              <b-card
                class="grant__card mb-4"
                v-for="(item, index) in items"
                :key="item.grant"
                :img-src="generateImg(index)"
              >
                <b-card-title>
                  {{ item }}
                </b-card-title>
                <b-card-title>
                  {{ item.grant }}
                </b-card-title>
                <b-card-text>
                  {{ truncateText(item.description) }}
                </b-card-text>
                <b-card-text class="h4 mt-4 grant__card-amount">
                  {{ item.amount }} {{ item.currency }}
                </b-card-text>

                <!-- <b-card-footer>
                  
                </b-card-footer> -->
                <div class="text-center">
                  <b-button
                    :href="item.link"
                    size="lg"
                    variant="active"
                    class="grant__card-button"
                    target="_blank"
                    pill
                  >
                    Check it Out
                  </b-button>
                </div>
              </b-card>
            </b-card-group>
          </div>
        </ais-hits>
      </b-container>
    </ais-instant-search>
  </div>
</template>

<script>
import axios from "axios";

import "instantsearch.css/themes/algolia-min.css";
// For the default version
const algoliasearch = require("algoliasearch");
const algoliaAPITable = "";
const algoliaAPIKey = "";
//DON'T push the following key, need to hide it from Frontend, create a cloud function that runs every few hours and takes everything from the database and converts it into Algolia
const client = algoliasearch(algoliaAPITable, algoliaAPIKey);
const index = client.initIndex("covidimpact");

const apiToken = ""; // use your own key!
const airTableApp = "";
const airTableName = "";
export default {
  components: {},
  data() {
    return {
      searchClient: algoliasearch(algoliaAPITable, algoliaAPIKey),
    };
  },
  mounted() {
    this.pullGrants();
  },
  methods: {
    pullGrants() {
      // this.items = [];
      //https://picsum.photos/600/300
      axios
        .get(`https://api.airtable.com/v0/${airTableApp}/${airTableName}`, {
          headers: { Authorization: "Bearer " + apiToken },
        })
        .then((response) => {
          // load the API response into items for datatable
          response.data.records.map((item) => {
            index
              .saveObject(item.fields, {
                autoGenerateObjectIDIfNotExist: true,
              })
              .then(({ objectIDs }) => {
                console.log(objectIDs);
              });
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    truncateText(input) {
      if (input !== undefined) {
        console.log(input);
        if (input.length > 50) {
          return input.substring(0, 170) + "...";
        }
      }
      return input;
    },
    generateImg(index) {
      console.log(index);
      return "https://picsum.photos/600/30" + index + "/";
    },
  },
};
</script>

<style>
.grant__card {
  min-width: 21em;
  min-height: 32em;
  max-width: 21em;
  max-height: 32em;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 0px 5px;
  border-radius: 4px;
  /* height: 75px; */
  color: #414141;
  box-shadow: 0 0 0 1px rgba(35, 38, 59, 0.05),
    0 1px 3px 0 rgba(35, 38, 59, 0.15);
  background: rgb(248, 248, 248);
}
.grant__card-button {
  position: absolute;
  left: 50%;
  bottom: 1px;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  background: lightblue;
}
.grant__card-button:hover {
  background: lightskyblue;
}
.grant__card-amount {
  font-size: "h1";
  color: green;
}
.table__card {
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 0px 5px;
  margin-bottom: 10px;
  padding: 8px 16px;
  border-radius: 4px;
  /* height: 75px; */
  color: #414141;
  box-shadow: 0 0 0 1px rgba(35, 38, 59, 0.05),
    0 1px 3px 0 rgba(35, 38, 59, 0.15);
  /* transition: all 0.01s cubic-bezier(0.05, 0.03, 0.35, 1); */
  cursor: pointer;
}

.grant__card:hover {
  box-shadow: 0 7px 14px 0 rgba(50, 50, 93, 0.1),
    0 3px 6px 0 rgba(0, 0, 0, 0.08), inset 0 0 1px 0 rgba(0, 0, 0, 0.06);
}
/* transform: translate(0px, -3px); */
.grant__card:active {
  transform: scale(0.95);
}
</style>
