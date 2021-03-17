// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"scripts/test.js":[function(require,module,exports) {
var logo = "Epizyme Logo,http://email.mail.verteobiopharma.com/c/eJx9UctugzAQ_Bq4FRkbAjlwICG0VaMqUdSoN8vgTbBiYwQG2nx9cV7KqZa1Wu3Mzo7XPAEezFyRYIR9RFDoh4Rg5PkewYRkKA6j5dzP8mXkBEgxIb0BWgO6ELqpWKuYV2rlVglCc1xiUgTBoZjzKPCDOYkOQUjiOC54GbvfL2tWgEycaOFg3LSa96V551PukHSKDKE4RfaQUzrMtunKQng5xRZK0QiozYMMjTj_KjDQGbCmusncSYryZN08-lgzjRmAryzleZRvbqPQ2Mlqm6aPFvgx0Nbswa57Ka-Ibo9PEghld4nFpyRf6auFosyVSWVMcyHl0x3H0buZvVrLHZL3RtFO920JDsmgOSs6AAzMwTOLKOCiVxaxtm_FUtfGLoBkUh_1vchUw8SxnqrT7yG62tF8TTe7D_q23NC94KDp5e10b_XdNvl3b3_YW6AS,Watch the video to learn more,http://email.mail.verteobiopharma.com/c/eJx9T8tugzAQ_Bq4Fa3tgJMDBweSqlIfiqoq7dHgbbEwGBmTNv36mj5QTl2tVivN7MysylGtsljnFCgBBilJGaOQkIRRxkpYp7zYkHJf8GgFndQmOaHzaCtth0a6Tia17eImryTBjaQEeVatXjdVDWvJKRKZ1SxTaRY_X93KCk0e8W1E6eCsmmp_o8IeMRGmBFgLmIu14pQdxG6GaBGmw1oPGnu_kHHQn-cOPY4e51BjCNcaXbdzmuVODsHmhGo3Uy6tiP-1gvfRNAchlhP88Oh6ubD7yZgfxLq3CwmA8k9ie2_Yk7ieIV7GJm-8H8Zv1j702U5-SioMq3rhd8fx-LB7tLHL_33hC1ZDd2o,Full Prescribing Information,http://email.mail.verteobiopharma.com/c/eJx9UMtugzAQ_Bq4BS2YR3Lg4ECoKlWVcqjUq7GXYMVgyzihzdfXpCnKqZa1WmlmZ2ZXlCjSPJRlAkkMBLI4IySBKI5IQkgN26yodnHdVEWQwsCkiq5oHepWatMzO7CI6yHsy5RjtwMvsIM0z0VeiAJaTKHt4qzlLA8_N2-sRVUGxT5IEmO1uHD3KnwfEOorA9hSWB4502t-pIcFSipfLXJpJI5uJaORt-8BHU4Ol1CTD3dWkp-XNOscM97miuKwUJ6tYvewgnlS_ZHSdQS_HNqRrezxotQvou3pSQKg_pPYvyvyQV8WqKhDVfbOmenOavyf5zly7OaPJh_hmkqP7r5MY0S3VIsTt7KV42kjx077ozqpx8ijoS3_XfUHxyiGpQ,Hero image: Help support your patients with the Tazverik patient starter kit,http://email.mail.verteobiopharma.com/c/eJx9T8tugzAQ_Bq4Fa3tgJMDBweSqlIfiqoq7dHgbbEwGBmTNv36mj5QTl2tVivN7MysylGtsljnFCgBBilJGaOQkIRRxkpYp7zYkHJf8GgFndQmOaHzaCtth0a6Tia17eImryTBjaQEeVatXjdVDWvJKRKZ1SxTaRY_X93KCk0e8W1E6eCsmmp_o8IeMRGmBFgLmIu14pQdxG6GaBGmw1oPGnu_kHHQn-cOPY4e51BjCNcaXbdzmuVODsHmhGo3Uy6tiP-1gvfRNAchlhP88Oh6ubD7yZgfxLq3CwmA8k9ie2_Yk7ieIV7GJm-8H8Zv1j702U5-SioMq3rhd8fx-LB7tLHL_33hC1ZDd2o,Watch the short video,http://email.mail.verteobiopharma.com/c/eJx9T8tugzAQ_Bq4Fa3tgJMDBweSqlIfiqoq7dHgbbEwGBmTNv36mj5QTl2tVivN7MysylGtsljnFCgBBilJGaOQkIRRxkpYp7zYkHJf8GgFndQmOaHzaCtth0a6Tia17eImryTBjaQEeVatXjdVDWvJKRKZ1SxTaRY_X93KCk0e8W1E6eCsmmp_o8IeMRGmBFgLmIu14pQdxG6GaBGmw1oPGnu_kHHQn-cOPY4e51BjCNcaXbdzmuVODsHmhGo3Uy6tiP-1gvfRNAchlhP88Oh6ubD7yZgfxLq3CwmA8k9ie2_Yk7ieIV7GJm-8H8Zv1j702U5-SioMq3rhd8fx-LB7tLHL_33hC1ZDd2o,Epizyme logo,http://email.mail.verteobiopharma.com/c/eJx9kctuwjAQRb8m2TXyA5ywyCIQ0lZFFQgVdWeZZAALO46CE1q-vjaPiFUty7J87sy9GlcpVCMWypQgghFFYzymlKAIR5RQmqNkHM8mOC9mcTBCWkgV9dBaMFtpmoNotYhKo8NDyihGJSKTJMHA4mQ0YVTQHUasZJiJHQu_XxZiCyoN4mlASNOaqivte-XuAc3cKRBKMuQXPWY9W2Vzj8jMnS2UspFQ20EMjbz8arBwsuBDnVy4o5Ll0acZ6kTjbHqo5l7ybIXt3QqdT-qwyrKhBH4stLUY1HWn1I2Ydv_UAqH80WL6qehX9upRnIcqPVjbXEWF2-fzObqHvUUrAlp0VvOT6doSAppDc9G8B-hFQJgnGirZaU987PtjaWrrB0DznTEuIldmbx5M6EbIfe2g-0TE52teLPhy_cHfZku-kRUYfh0B33ibsE3_Hd8ftJiilw,epizyme.com,http://email.mail.verteobiopharma.com/c/eJx9kV9vgyAUxT-Nvs0g2FoffLBat2XN0qZZszdC5dqSghiLduunH_SP6dMIIYTfufecXHgKPJr6IsUIh4igSTghBKMgDAgmpECzSZwnYVHmsRchxYQMBugM6J3Q7YF1igWVVv7BlsdhwutZFCUzEscch5ME6l2Cqgjhalr73y9LtgOZevHcw7jtNO8r887t3SOZPRlCswy5RY7ZMF1nC4dwbs8OKtEKaMwohlZcfhUYOBlwoU423FGK6ujSjHWstTYD8IWTPFuF5m6Fzid5WGfZWAI_BrqGjeqml_JGdLd_aoFQ8Wgx_5TkK3t1KC58mR6Maa-i0u7z-Rzcw96ilR4pe6PoSfddBR4poL0oOgAMzMNTRxRw0StHXOz7Y6Ub4wZAilprG5FK0RwfjKmWiX1jof1ERBcbWi7pavNB3_IV3QoOml5HQLfOxu_Sf8f3B2xIov8,Unsubscribe,http://email.mail.verteobiopharma.com/c/eJx9Uttq4zAQ_Rr7LWYk-ZYHP7hxsiyU3S1tofTF6DKOTXwRtuxu9-t3nDShD6VCDCPNmXMOGpkMTRj7TcaBMxAQsUgIDgELBBeigDRKdltWHHaJF0InmzZYcHQ4qGawtRw7Geih82tqr1RoUq05hMaklRBVKNRW0CEymET-y-ZeKmwzL7nzOLfjYGbtfhrKPZFTlABpDusSp3yJH_L9WuI7iiPqxjbYuxsYbfPvvUOHk8PV1ETmTm2jT6ubW5-0JLOg2a-Qz1LMfUjB29TWD3l-a8G_Dsde3tD93LaXyjAeP1EAFFeKu1-teM5_rKWk8Nusds5OZ9SBdqc3wDbkZDNP9HS4SD12F5cHDiIQAQOgXNqG4sIozP00q0mPjUJPHK7mRfGV7fj32RYN6gtD8TzheC_74yyPRFVgXz4_rterwLlr_-eVrsrd0Dt63vLp3WK5fyyfBttoAubWFoP-EO-v_HX4Fl3E-6HXK3EUpgYhTCDmW2QR31aKPhJLt8poKZUAk6SKY6g5Cm1klfKoiqOUK2BVSOMgKn_Mvh3qfyOWyBY,Terms of Use,http://email.mail.verteobiopharma.com/c/eJx9UdFugyAU_Rp9q0Gw2j34YLVuy5qlTbNmb4TKtZKKGEW79esHnTN9GiEEOOeec7jwGHgQuiLGCPuIoKW_JAQjz_cIJiRDq2WUPvlZnkZOgCQTtTdCp0GdhGor1knmFUq6VRwyHJQrU8kiFBSlHxB0YiEnfklCzAlyPxdbdoI6dqK1g3HbKT4U-pWbvUMSszKEVgmyg1ySMdwnGwvh1KwdFKIV0OiZDK24fUvQ0GuwoXoT7lKL4mLTzHWsNTYj8I2lPFr5erJC176u9kkyl8CXhq5hM7sZ6voXUd35QQKh7E9i_V6Tj-TZQlHm1nGlddvfWbmZ1-vV0-xmmiamcLlxkP1ClYuhB4fkg5a0V0NXmEMG7U3SEWBkDg4tIoGLQVrEPmK6LFSjbTtIdteiqqRWawKZbJk4NwY1f4ro5kDzLd0d3uhLuqNHwUHRe0fo0fq4XfxvN38AkuCo-Q,Privacy Policy,http://email.mail.verteobiopharma.com/c/eJx9UV1vwiAU_TXt2xpa-uEe-lCt3ZaZRWNm9kaQ3iqxFEJpnf76geuMTyPkhnDOPfdwqHOo49TneYSiEGGUhAnGEQrCAEcYl2iWZIvnsKwWmRcjQXkbjKANyD2X6ki1oAGTwj_mzT6DJkY0TWPMGpZkaRbu0wQwZAlAE_pfTyu6hzb3srkXRUrLemDmrbZnDxe2UoRmBXILn4ox3RRLB0ULWzUwrjh05k4Gxa8XAQZ6A85Ub82dWs5Ozs29jyo7ZoR66SiPo0IzjULnvj1uiuLeAt8GdEfv7G5o219E6sODBELln8T8o8WfxYuDstJv86Mxqr-xKrvP53Ng6NWGxidzldJ8pOzypKR1fPFwNRhBejloBh4uQV0FGQFG6kWpQwTUfBAOcc-YLpnsjAsEl5MamdQmmApF-aGzuP1XRJZbUq3IevtOXhdrsuM1SHJLhezcJF_n_yb6Aywkq9g";
var newLogo = [];
var allLinks = logo.split(','); // for(i = 0; i < allLinks.length; i + 2) {
//     var obj = {};
//     obj.name = allLinks[i];
//     newLogo.push(obj);
// }
// for(i = 1; 1 < allLinks.length; i + 2) {
//     newLogo[i]['ogUrl'] = allLinks[i];
// }

var linksObj = {};
allLinks.forEach(function (link, index) {
  if (index === 0 || index % 2 === 0) {
    linksObj.name = link;
  } else {
    console.log(index, link);
    linksObj.ogUrl = link;
    newLogo.push(linksObj);
    linksObj = {};
  }
});
console.log(newLogo);
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55593" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","scripts/test.js"], null)
//# sourceMappingURL=/test.c9078b0e.js.map