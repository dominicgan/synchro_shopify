var propertyArr = [
  "clientWidth",
  "1LywWaG",
  "iframe",
  "img.lazy2",
  "Yes-optimization",
  "DOMContentLoaded2",
  "Linux\x20x86_64",
  "responseText",
  "setAttribute",
  "classList",
  "innerHeight",
  "location",
  "https://cdn.shopify.com/shopifycloud/shopify/assets/storefront/features-87e8399988880142f2c62771b9d8f2ff6c290b3ff745dd426eb0dfe0db9d1dae.js",
  "wnw_load",
  "querySelectorAll",
  "src",
  "1PhCoBU",
  "onload",
  "GET",
  "left",
  "width",
  "20949nRlcFJ",
  "href",
  "documentElement",
  "addEventListener",
  "innerHTML",
  "bottom",
  "33578jMTbMf",
  "https://cdn.shopify.com/s/files/1/0155/0195/t/37/assets/main.css?v=",
  "log",
  "status",
  "1805ycdNzn",
  "getElementById",
  "script",
  "rel",
  "531124IiaHzv",
  "forEach",
  "top",
  ".lazybg",
  "type",
  "lazy2",
  "/checkout",
  "https://fonts.googleapis.com/css?family=Karla:400italic,700italic,400,700",
  "link",
  "style",
  "269142VSlVVF",
  "touchstart",
  "7HrzZJd",
  "505xBBhug",
  "appendChild",
  "getAttribute",
  "163093IjiXuR",
  "lazybg",
  "getElementsByTagName",
  "async",
  "head",
  "mobsrc",
  "function",
  "No-optimization",
  "dataset",
  "indexOf",
  "remove",
  "https://cdn.shopify.com/shopifycloud/shopify/assets/storefront/load_feature-d8a6f1446d67009c524ed4e68648800ba9082eb75548ee28e1050331cbe7ba28.js",
  "synchro.myshopify.com",
  "mousemove",
  "mobstyle",
  "body",
  "/cart",
  "dispatchEvent",
  "text/javascript",
  "createElement",
  "right",
  "stylesheet",
  "13HIwpfP",
  "scroll",
  "10159mcwtyE",
  "onreadystatechange",
  "innerWidth",
];

var decrypt = function (index, _0x3268f1) {
  index = index - 0x1d2;
  var decrypedValue = propertyArr[index];
  return decrypedValue;
};
var _0x5cb795 = decrypt;

(function (_0x2412a5, _0x30a601) {
  var _0x14a81e = decrypt;
  while (!![]) {
    try {
      var _0x6b4c5 =
        parseInt(_0x14a81e(0x1d9)) +
        -parseInt(_0x14a81e(0x1dc)) * -parseInt(_0x14a81e(0x219)) +
        -parseInt(_0x14a81e(0x21d)) +
        -parseInt(_0x14a81e(0x1db)) * -parseInt(_0x14a81e(0x1f7)) +
        parseInt(_0x14a81e(0x20a)) * parseInt(_0x14a81e(0x1df)) +
        parseInt(_0x14a81e(0x1fb)) * parseInt(_0x14a81e(0x20f)) +
        parseInt(_0x14a81e(0x1f5)) * -parseInt(_0x14a81e(0x215));
      if (_0x6b4c5 === _0x30a601) break;
      else _0x2412a5["push"](_0x2412a5["shift"]());
    } catch (_0x3c585b) {
      _0x2412a5["push"](_0x2412a5["shift"]());
    }
  }
})(propertyArr, 0x724d8);

var windowWidth,
  lazyLink,
  lazyImages,
  lazyBackground,
  lazyIframe,
  lazyScripts,
  lazyLoadedJS,
  s,
  i,
  j,
  flag;

function wnw_init() {
  0x1 == flag &&
    ((flag = 0),
    lazyLoadImg(),
    lazyLoadBackground(),
    lazyLoadIframe(),
    load_all_js());
}

function isElementInViewport(elementObj) {
  'function' == typeof jQuery &&
    elementObj instanceof jQuery &&
    (elementObj = elementObj[0]);
  var domRect = elementObj["getBoundingClientRect"]();
  return (
    domRect.top >= 0 &&
    domRect.left >= 0 &&
    domRect.bottom <=
      (window.innerHeight ||
        document.documentElement["clientHeight"]) &&
    domRect.right <=
      (window.innerWidth || document.documentElement['clientWidth'])
  );
}

function lazyLoadLink() {
  lazyLink.forEach(function (linkObj) {
    linkObj.href =
      null == linkObj["dataset"].href
        ? linkObj["href"]
        : linkObj.dataset.href;
  });
}

function lazyLoadImg() {
  lazyImages.forEach(function (imageObj) {
    (imageObj.src =
      windowWidth < 600
        ? null == imageObj.dataset.mobsrc
          ? imageObj.dataset.src
          : imageObj.dataset.mobsrc
        : imageObj.dataset.src),
      imageObj.classList.remove('lazy2');
  });
}

function lazyLoadBackground() {
  lazyBackground.forEach(function (backgroundObj) {
    (backgroundObj.style =
      windowWidth < 600
        ? null == backgroundObj.dataset.mobstyle
          ? backgroundObj.dataset.style
          : backgroundObj.dataset.mobstyle
        : backgroundObj.dataset.style),
      backgroundObj.classList.remove("lazybg");
  });
}

function lazyLoadIframe() {
  lazyIframe.forEach(function (iframeObj) {
    iframeObj.src =
      null == iframeObj.dataset.src ? iframeObj.src : iframeObj.dataset.src;
  });
}

function lazyLoadScripts() {
  j != lazyScripts.length &&
    ("lazyload2" == lazyScripts[j].getAttribute("type")
      ? (lazyScripts[j].setAttribute("type", "lazyloaded"),
        void 0x0 !== lazyScripts[j].dataset.src
          ? (((s = document.createElement("script")).type = "text/javascript"),
            (s.async = true),
            (s.src = lazyScripts[j].dataset.src),
            (x = document.getElementsByTagName("body")[0]),
            x.appendChild(s),
            (s.onload = function () {
              j++, lazyLoadScripts();
            }))
          : (((s = document.createElement("script")).type = "text/javascript"),
            (s.async = true),
            (s.innerHTML = lazyScripts[j].innerHTML),
            (x = document.getElementsByTagName("body")[0]),
            x.appendChild(s),
            j++,
            lazyLoadScripts()))
      : (j++, lazyLoadScripts()));
}

function lazyLoadCss(cssUrl) {
  ((s = document.createElement("link")).rel = "stylesheet"),
    (s.href = cssUrl),
    document.getElementsByTagName("head")[0x0].appendChild(s);
}

function lazyLoadCss2(cssUrl, elemId) {
  xmlHttpRequest = new XMLHttpRequest();
  (xmlHttpRequest.onreadystatechange = function () {
    0x4 == this.readyState &&
      0xc8 == this.status &&
      (document.getElementById(_0x4d5abc).innerHTML =
        this.responseText);
  }),
    xmlHttpRequest.open("GET", cssUrl, true),
    xmlHttpRequest.send();
}

function lazyLoadJS(scriptUrl) {
  lazyLoadedJS &&
    (setTimeout(function () {
      lazyLoadJS(scriptUrl);
    }, 0xc8),
    (lazyLoadedJS = 0)),
    (lazyLoadedJS = 1),
    ((s = document.createElement("script")).src = scriptUrl),
    (s["onload"] = function () {
      lazyLoadedJS = 0;
    }),
    document["body"].appendChild(s);
}

function load_all_js() {
  //   lazyLoadCss('https://cdn.shopify.com/s/files/1/0155/0195/t/37/assets/theme.scss.css?v=' + Date['now']()),
  //   lazyLoadCss(_0x466b48(0x216) + Date['now']()),
  //   lazyLoadCss('https://cdn.shopify.com/s/files/1/0155/0195/t/37/assets/mmenu.scss.css?v=' + Date['now']()),
  //   lazyLoadCss(_0x466b48(0x1d6)),
  //   lazyLoadCss('https://fonts.googleapis.com/css?family=Montserrat:400,700'),
    lazyLoadCss('https://use.fontawesome.com/releases/v5.15.3/css/all.css'),
  window.location.href.indexOf("synchro.myshopify.com") > -1 ||
  window.location.href.indexOf("/cart") > -1 ||
  window.location.href.indexOf("/checkout") > -1
    ? console.log("No-optimization")
    : (console.log("Yes-optimization"),
      setTimeout(function () {
        eventWnwLoad = new Event("wnw_load");
        window.dispatchEvent(eventWnwLoad);
      }, 0xc8),
      lazyLoadJS(
        "https://cdn.shopify.com/shopifycloud/shopify/assets/storefront/load_feature-d8a6f1446d67009c524ed4e68648800ba9082eb75548ee28e1050331cbe7ba28.js"
      ),
      lazyLoadJS(
        "https://cdn.shopify.com/shopifycloud/shopify/assets/shopify_pay/storefront-b61f50798075db890698930c4405673937fe89353f7fea7be88b5ce16a9c0af8.js"
      ),
      lazyLoadJS(
        "https://cdn.shopify.com/shopifycloud/shopify/assets/storefront/features-87e8399988880142f2c62771b9d8f2ff6c290b3ff745dd426eb0dfe0db9d1dae.js"
      )),
    (j = 0),
    (lazyScripts = document.getElementsByTagName("script")),
    lazyLoadScripts(),
    setTimeout(function () {
      eventDomContentLoaded2 = new Event("DOMContentLoaded2", {
        bubbles: true,
        cancelable: true,
      });
      window.dispatchEvent(eventDomContentLoaded2);
    }, 0xfa0),
    setInterval(function () {
      (lazyImages = document.querySelectorAll("img.lazy2")),
        (lazyBackground = document.querySelectorAll(".lazybg")),
        lazyLoadImg(),
        lazyLoadBackground();
    }, 0x7d0);
}

document.addEventListener("DOMContentLoaded", function () {
  (windowWidth = screen.width),
    (lazyLink = document.querySelectorAll("link")),
    (lazyImages = document.querySelectorAll("img.lazy2")),
    (lazyBackground = document.querySelectorAll(".lazybg")),
    (lazyIframe = document.querySelectorAll("iframe")),
    (lazyScripts = document.getElementsByTagName("script")),
    (i = 0x0),
    (j = 0x0),
    (flag = 0x1),
    window.addEventListener("scroll", function () {
      wnw_init();
    }),
    "Linux x86_64" != navigator.platform && wnw_init(),
    window.addEventListener("mousemove", function () {
      wnw_init();
    }),
    window.addEventListener("touchstart", function () {
      wnw_init();
    });
});
