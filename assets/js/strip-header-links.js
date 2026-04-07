/**
 * main.min.js 会在 DOM ready 后给带 id 的标题插入 a.header-link（Permalink）。
 * 在脚本加载顺序上晚于主题主脚本，反复移除直到稳定。
 */
(function () {
  function strip() {
    document.querySelectorAll("a.header-link").forEach(function (el) {
      el.remove();
    });
  }

  strip();
  document.addEventListener("DOMContentLoaded", strip);
  window.addEventListener("load", strip);
  setTimeout(strip, 0);
  setTimeout(strip, 50);
  setTimeout(strip, 200);
  setTimeout(strip, 500);
})();
