import Vue from "vue";
import Router from "vue-router";
import PcRoutes from "./module/pc/routes";
import MobileRoutes from "./module/mobile/routes";

Vue.use(Router);
let router: any;

if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
  router = new Router({
    routes: MobileRoutes,
    mode: "history"
  });
} else {
  router = new Router({
    routes: PcRoutes,
    mode: "history"
  });
}

router.beforeEach((to: any, from: any, next: any) => {
  const _PATHARR: string[] = to.path.split("/");
  let _PATH: string = _PATHARR[_PATHARR.length - 1];
  if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    if (_PATH && _PATH.slice(0, 2) !== "m-") {
      _PATH = "/m-" + _PATH;
      _PATHARR.pop();
      _PATH = _PATHARR.join("/") + _PATH;
      next({
        path: _PATH
      });
    } else {
      next();
    }
  } else {
    if (_PATH && _PATH.slice(0, 2) === "m-") {
      _PATH = "/" + _PATH.replace("m-", "");
      _PATHARR.pop();
      _PATH = _PATHARR.join("/") + _PATH;
      next({
        path: _PATH
      });
    } else {
      next();
    }
  }
});

router.afterEach(() => {
  window.scrollTo(0, 0);
});

export default router;
