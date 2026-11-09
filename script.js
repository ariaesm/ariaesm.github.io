// Highlight the navigation link of the section currently in view.
(function () {
  var links = document.querySelectorAll(".top nav a[href^='#']");
  if (!("IntersectionObserver" in window) || !links.length) return;

  var byId = {};
  links.forEach(function (a) {
    byId[a.getAttribute("href").slice(1)] = a;
  });

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        var link = byId[entry.target.id];
        if (!link) return;
        if (entry.isIntersecting) {
          links.forEach(function (a) { a.removeAttribute("aria-current"); });
          link.setAttribute("aria-current", "true");
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );

  Object.keys(byId).forEach(function (id) {
    var section = document.getElementById(id);
    if (section) observer.observe(section);
  });
})();
