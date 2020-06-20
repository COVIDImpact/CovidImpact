import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import("../pages/Home.vue");
const Assessment = () => import("../pages/Assessment.vue");
const FinancialAid = () => import("../pages/FinancialAid.vue");
const News = () => import("../pages/News.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
    meta: {
      title: "CovidImpact - COVID-19 Small Business Support Care Package",
      metaTags: [
        {
          name: "description",
          content:
            "CovidImpact is a small business care bundle to support you in immunizing your company!",
        },
        {
          property: "og:home",
          content:
            "CovidImpact is a small business care bundle to support you in immunizing your company!",
        },
      ],
    },
  },
  {
    path: "/assessment",
    component: Assessment,
    meta: {
      title: "Assessment Page - Small Business Immunizer",
      metaTags: [
        {
          name: "description",
          content:
            "Personalized recommendations to support your Small Business.",
        },
        {
          property: "og:Assessment",
          content:
            "Personalized recommendations to support your Small Business.",
        },
      ],
    },
  },
  {
    path: "/financial-aid",
    component: FinancialAid,
    meta: {
      title: "Financial Aid Programs - Top Small Business Support Options",
      metaTags: [
        {
          name: "description",
          content: "A curated list of Financial Aid programs.",
        },
        {
          property: "og:FinancialAid",
          content: "A curated list of Financial Aid programs.",
        },
      ],
    },
  },
  {
    path: "/news",
    component: News,
    meta: {
      title: "Smart News - Small Business News Canada",
      metaTags: [
        {
          name: "description",
          content:
            "Find sentiment analysis parsed small business news real time.",
        },
        {
          property: "og:News",
          content:
            "Find sentiment analysis parsed small business news real time.",
        },
      ],
    },
  },
];
const router = new VueRouter({
  routes,
  mode: "history",
  base: process.env.BASE_URL,
});
// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.metaTags);
  //const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) document.title = nearestWithTitle.meta.title;

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(
    document.querySelectorAll("[data-vue-router-controlled]")
  ).map((el) => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags
    .map((tagDef) => {
      const tag = document.createElement("meta");

      Object.keys(tagDef).forEach((key) => {
        tag.setAttribute(key, tagDef[key]);
      });

      // We use this to track which meta tags we create, so we don't interfere with other ones.
      tag.setAttribute("data-vue-router-controlled", "");

      return tag;
    })
    // Add the meta tags to the document head.
    .forEach((tag) => document.head.appendChild(tag));

  next();
});

export default router;
