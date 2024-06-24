import { $t } from "@/plugins/i18n";

export default {
  path: "/testD",
  redirect: "/testD/403",
  meta: {
    icon: "ep:edit",
    // showLink: false,
    title: $t("menus.pureTestDefinition"),
    rank: 9
  },
  children: [
    {
      path: "/testD/testCov",
      name: "testCov",
      component: () => import("@/views/TestDefinition/testCov.vue"),
      meta: {
        title: $t("menus.pureTestCoverage")
      }
    },
    {
      path: "/testD/testCase",
      name: "testCase",
      component: () => import("@/views/TestDefinition/testCase.vue"),
      meta: {
        title: $t("menus.pureTestCaseApprove")
      }
    }
  ]
} satisfies RouteConfigsTable;
