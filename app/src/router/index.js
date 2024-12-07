import { createRouter, createWebHistory } from "vue-router";
import IntroPage from "@/pages/IntroPage.vue"; // Вводная страница
import OrganizationsPage from "@/pages/OrganizationsPage.vue"; // Пример страницы

const routes = [
  { path: "/", name: "intro", component: IntroPage },
  { path: "/organizations", name: "organizations", component: OrganizationsPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;