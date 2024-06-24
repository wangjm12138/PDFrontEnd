import { $t } from "@/plugins/i18n";

export default {
  path: "/testX",
  redirect: "/testX/403",
  meta: {
    icon: "ep:histogram",
    // showLink: false,
    title: $t("menus.pureTestExcution"),
    rank: 9
  },
  children: [
    {
      path: "/testX/testPlans",
      name: "testPlans",
      component: () => import("@/views/TestExcutions/testPlans.vue"),
      meta: {
        title: $t("menus.pureTestPlans")
      }
    },
    {
      path: "/testX/testMaturity",
      name: "testMaturity",
      component: () => import("@/views/TestExcutions/testMaturity.vue"),
      meta: {
        title: $t("menus.pureTestMaturity")
      }
    },
    {
      path: "/testX/testFeatures",
      name: "testFeatures",
      component: () => import("@/views/TestExcutions/testFeatures.vue"),
      meta: {
        title: $t("menus.pureTestFeatures")
      }
    },
    {
      path: "/testX/testRequirements",
      name: "testRequirements",
      component: () => import("@/views/TestExcutions/testRequirements.vue"),
      meta: {
        title: $t("menus.pureTestRequirements")
      }
    }
  ]
} satisfies RouteConfigsTable;
