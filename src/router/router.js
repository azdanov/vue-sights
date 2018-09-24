import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import Sight from "@/views/Sight.vue";
import matchSorter from "match-sorter";
import store from "@/store/store";
import { toKebabCase } from "@/utils";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: { title: route => route.name }
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/About.vue"),
      meta: { title: route => route.name }
    },
    {
      path: "/404",
      name: "404",
      component: () =>
        import(/* webpackChunkName: "notFound" */ "@/views/NotFound.vue"),
      meta: { title: route => route.name }
    },
    {
      path: "/:slug",
      name: "sight",
      component: Sight,
      props: true,
      beforeEnter(to, _from, next) {
        const { id } = to.params;

        if (!id) {
          const { slug } = to.params;
          const foundSights = matchSorter(store.state.sights, slug, {
            keys: [sight => toKebabCase(sight.name)]
          });

          const foundId = foundSights[0] ? foundSights[0].id : null;
          const foundTitle = foundSights[0] ? foundSights[0].name : null;

          if (!foundId) {
            return next("/404");
          }
          to.params.id = foundId;
          to.params.title = foundTitle;
        }

        return next();
      },
      meta: {
        title: route => (route.params.title ? route.params.title : route.name)
      }
    }
  ]
});

router.afterEach(to => {
  Vue.nextTick(() => {
    const title = to.meta.title(to);
    document.title = `${process.env.VUE_APP_TITLE} | ${title[0].toUpperCase() +
      title.slice(1)}`;
  });
});

export default router;
