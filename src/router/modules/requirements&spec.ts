import { $t } from "@/plugins/i18n";

export default {
  path: "/req",
  redirect: "/req/403",
  meta: {
    icon: "ep:menu",
    // showLink: false,
    title: $t("menus.pureRequirements_spec"),
    rank: 9
  },
  children: [
    {
      path: "/req/features",
      name: "features",
      component: () => import("@/views/requirements&spec/features.vue"),
      meta: {
        title: $t("menus.pureFeatures")
      }
    },
    {
      path: "/req/design",
      name: "design",
      component: () => import("@/views/requirements&spec/design.vue"),
      meta: {
        title: $t("menus.pureDesign")
      }
    },
    {
      path: "/req/requirements",
      name: "requirements",
      component: () => import("@/views/requirements&spec/requirements.vue"),
      meta: {
        title: $t("menus.pureRequirements")
      }
    },
    {
      path: "/req/userStory",
      name: "userStory",
      component: () => import("@/views/requirements&spec/userStory.vue"),
      meta: {
        title: $t("menus.pureUserStory")
      }
    }
  ]
} satisfies RouteConfigsTable;
