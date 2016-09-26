SystemJS.config({
  paths: {
    "github:": "jspm_packages/github/",
    "npm:": "jspm_packages/npm/"
  },
  browserConfig: {
    "paths": {
      "spyfall/": "/"
    }
  },
  nodeConfig: {
    "paths": {
      "spyfall/": ""
    }
  },
  transpiler: "plugin-babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  map: {
    "babel": "npm:babel-core@5.8.38"
  },
  packages: {
    "spyfall": {
      "main": "shared/app.js",
      "format": "esm",
      "meta": {
        "*.js": {
          "babelOptions": {
            "plugins": [
              "babel-plugin-transform-react-jsx",
              "babel-plugin-transform-decorators-legacy"
            ]
          }
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
    "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
    "capaj/jspm-hot-reloader": "github:capaj/systemjs-hot-reloader@0.4.3",
    "child_process": "github:jspm/nodelibs-child_process@0.2.0-alpha",
    "constants": "github:jspm/nodelibs-constants@0.2.0-alpha",
    "crypto": "github:jspm/nodelibs-crypto@0.2.0-alpha",
    "css": "npm:jspm-loader-css-modules@1.0.1-beta1",
    "domain": "github:jspm/nodelibs-domain@0.2.0-alpha",
    "events": "github:jspm/nodelibs-events@0.2.0-alpha",
    "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
    "http": "github:jspm/nodelibs-http@0.2.0-alpha",
    "https": "github:jspm/nodelibs-https@0.2.0-alpha",
    "immutable": "npm:immutable@3.8.1",
    "json": "github:systemjs/plugin-json@0.1.2",
    "os": "github:jspm/nodelibs-os@0.2.0-alpha",
    "path": "github:jspm/nodelibs-path@0.2.0-alpha",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "react": "npm:react@15.3.2",
    "react-dom": "npm:react-dom@15.3.2",
    "react-intl": "npm:react-intl@2.0.0-beta-1",
    "react-redux": "npm:react-redux@4.4.5",
    "react-tap-event-plugin": "npm:react-tap-event-plugin@0.2.2",
    "redux": "npm:redux@3.6.0",
    "socket.io": "npm:socket.io-client@1.4.8",
    "socket.io-client": "github:socketio/socket.io-client@1.4.8",
    "stream": "github:jspm/nodelibs-stream@0.2.0-alpha",
    "string_decoder": "github:jspm/nodelibs-string_decoder@0.2.0-alpha",
    "timers": "github:jspm/nodelibs-timers@0.2.0-alpha",
    "tls": "github:jspm/nodelibs-tls@0.2.0-alpha",
    "url": "github:jspm/nodelibs-url@0.2.0-alpha",
    "util": "github:jspm/nodelibs-util@0.2.0-alpha",
    "vm": "github:jspm/nodelibs-vm@0.2.0-alpha",
    "webrtc-adapter": "npm:webrtc-adapter@0.0.7",
    "zlib": "github:jspm/nodelibs-zlib@0.2.0-alpha"
  },
  packages: {
    "github:capaj/systemjs-hot-reloader@0.4.3": {
      "map": {
        "debug": "npm:debug@2.2.0",
        "lodash.clonedeep": "npm:lodash.clonedeep@3.0.2",
        "socket.io-client": "github:socketio/socket.io-client@1.4.8",
        "weakee": "npm:weakee@0.9.1"
      }
    },
    "npm:asap@2.0.5": {
      "map": {}
    },
    "npm:benchmark@1.0.0": {
      "map": {}
    },
    "npm:better-assert@1.0.2": {
      "map": {
        "callsite": "npm:callsite@1.0.0"
      }
    },
    "npm:browserify-zlib@0.1.4": {
      "map": {
        "pako": "npm:pako@0.2.9",
        "readable-stream": "npm:readable-stream@2.1.5",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:buffer-shims@1.0.0": {
      "map": {}
    },
    "npm:core-js@1.2.7": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:core-util-is@1.0.2": {
      "map": {}
    },
    "npm:css-modules-loader-core@1.0.1": {
      "map": {
        "icss-replace-symbols": "npm:icss-replace-symbols@1.0.2",
        "postcss": "npm:postcss@5.1.2",
        "postcss-modules-extract-imports": "npm:postcss-modules-extract-imports@1.0.0",
        "postcss-modules-local-by-default": "npm:postcss-modules-local-by-default@1.1.1",
        "postcss-modules-scope": "npm:postcss-modules-scope@1.0.2",
        "postcss-modules-values": "npm:postcss-modules-values@1.2.2"
      }
    },
    "npm:css-selector-tokenizer@0.6.0": {
      "map": {
        "cssesc": "npm:cssesc@0.1.0",
        "fastparse": "npm:fastparse@1.1.1",
        "regexpu-core": "npm:regexpu-core@1.0.0"
      }
    },
    "npm:debounce@1.0.0": {
      "map": {
        "date-now": "npm:date-now@1.0.1"
      }
    },
    "npm:debug@2.2.0": {
      "map": {
        "ms": "npm:ms@0.7.1"
      }
    },
    "npm:domain-browser@1.1.7": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:encoding@0.1.12": {
      "map": {
        "iconv-lite": "npm:iconv-lite@0.4.13"
      }
    },
    "npm:engine.io-client@1.6.11": {
      "map": {
        "component-emitter": "npm:component-emitter@1.1.2",
        "component-inherit": "npm:component-inherit@0.0.3",
        "debug": "npm:debug@2.2.0",
        "engine.io-parser": "npm:engine.io-parser@1.2.4",
        "has-cors": "npm:has-cors@1.1.0",
        "indexof": "npm:indexof@0.0.1",
        "parsejson": "npm:parsejson@0.0.1",
        "parseqs": "npm:parseqs@0.0.2",
        "parseuri": "npm:parseuri@0.0.4",
        "yeast": "npm:yeast@0.1.2",
        "xmlhttprequest-ssl": "npm:xmlhttprequest-ssl@1.5.1",
        "ws": "npm:ws@1.0.1",
        "node-ws": "npm:ws@1.0.1",
        "node-xmlhttprequest-ssl": "npm:xmlhttprequest-ssl@1.5.1"
      }
    },
    "npm:engine.io-parser@1.2.4": {
      "map": {
        "after": "npm:after@0.8.1",
        "arraybuffer.slice": "npm:arraybuffer.slice@0.0.6",
        "base64-arraybuffer": "npm:base64-arraybuffer@0.1.2",
        "blob": "npm:blob@0.0.4",
        "has-binary": "npm:has-binary@0.1.6",
        "utf8": "npm:utf8@2.1.0"
      }
    },
    "npm:fastparse@1.1.1": {
      "map": {}
    },
    "npm:fbjs@0.2.1": {
      "map": {
        "core-js": "npm:core-js@1.2.7",
        "promise": "npm:promise@7.1.1",
        "whatwg-fetch": "npm:whatwg-fetch@0.9.0"
      }
    },
    "npm:fbjs@0.6.1": {
      "map": {}
    },
    "npm:fbjs@0.8.4": {
      "map": {
        "core-js": "npm:core-js@1.2.7",
        "immutable": "npm:immutable@3.8.1",
        "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
        "loose-envify": "npm:loose-envify@1.2.0",
        "object-assign": "npm:object-assign@4.1.0",
        "promise": "npm:promise@7.1.1",
        "ua-parser-js": "npm:ua-parser-js@0.7.10"
      }
    },
    "npm:has-binary@0.1.6": {
      "map": {
        "isarray": "npm:isarray@0.0.1"
      }
    },
    "npm:has-binary@0.1.7": {
      "map": {
        "isarray": "npm:isarray@0.0.1"
      }
    },
    "npm:has-flag@1.0.0": {
      "map": {}
    },
    "npm:iconv-lite@0.4.13": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:immutable@3.8.1": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:inherits@2.0.1": {
      "map": {}
    },
    "npm:intl-messageformat@1.2.0": {
      "map": {
        "intl-messageformat-parser": "npm:intl-messageformat-parser@1.2.0"
      }
    },
    "npm:intl-relativeformat@1.2.0": {
      "map": {
        "intl-messageformat": "npm:intl-messageformat@1.2.0"
      }
    },
    "npm:invariant@2.2.1": {
      "map": {
        "loose-envify": "npm:loose-envify@1.2.0"
      }
    },
    "npm:isarray@1.0.0": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:isomorphic-fetch@2.2.1": {
      "map": {
        "node-fetch": "npm:node-fetch@1.6.3",
        "whatwg-fetch": "npm:whatwg-fetch@1.0.0"
      }
    },
    "npm:js-base64@2.1.9": {
      "map": {}
    },
    "npm:jspm-loader-css-modules@1.0.1-beta1": {
      "map": {
        "jspm-loader-css": "npm:jspm-loader-css@1.0.1-beta1"
      }
    },
    "npm:jspm-loader-css@1.0.1-beta1": {
      "map": {
        "css-modules-loader-core": "npm:css-modules-loader-core@1.0.1",
        "debounce": "npm:debounce@1.0.0",
        "path": "npm:path@0.12.7",
        "toposort": "npm:toposort@0.2.12"
      }
    },
    "npm:lodash._baseassign@3.2.0": {
      "map": {
        "lodash._basecopy": "npm:lodash._basecopy@3.0.1",
        "lodash.keys": "npm:lodash.keys@3.1.2"
      }
    },
    "npm:lodash._baseclone@3.3.0": {
      "map": {
        "lodash._arraycopy": "npm:lodash._arraycopy@3.0.0",
        "lodash._arrayeach": "npm:lodash._arrayeach@3.0.0",
        "lodash._baseassign": "npm:lodash._baseassign@3.2.0",
        "lodash._basefor": "npm:lodash._basefor@3.0.3",
        "lodash.isarray": "npm:lodash.isarray@3.0.4",
        "lodash.keys": "npm:lodash.keys@3.1.2"
      }
    },
    "npm:lodash.clonedeep@3.0.2": {
      "map": {
        "lodash._baseclone": "npm:lodash._baseclone@3.3.0",
        "lodash._bindcallback": "npm:lodash._bindcallback@3.0.1"
      }
    },
    "npm:lodash.keys@3.1.2": {
      "map": {
        "lodash._getnative": "npm:lodash._getnative@3.9.1",
        "lodash.isarguments": "npm:lodash.isarguments@3.1.0",
        "lodash.isarray": "npm:lodash.isarray@3.0.4"
      }
    },
    "npm:loose-envify@1.2.0": {
      "map": {
        "js-tokens": "npm:js-tokens@1.0.3",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:node-fetch@1.6.3": {
      "map": {
        "encoding": "npm:encoding@0.1.12",
        "is-stream": "npm:is-stream@1.1.0"
      }
    },
    "npm:pako@0.2.9": {
      "map": {}
    },
    "npm:parsejson@0.0.1": {
      "map": {
        "better-assert": "npm:better-assert@1.0.2"
      }
    },
    "npm:parseqs@0.0.2": {
      "map": {
        "better-assert": "npm:better-assert@1.0.2"
      }
    },
    "npm:parseuri@0.0.4": {
      "map": {
        "better-assert": "npm:better-assert@1.0.2"
      }
    },
    "npm:path@0.12.7": {
      "map": {
        "process": "npm:process@0.11.9",
        "util": "npm:util@0.10.3"
      }
    },
    "npm:postcss-modules-extract-imports@1.0.0": {
      "map": {
        "postcss": "npm:postcss@5.1.2"
      }
    },
    "npm:postcss-modules-local-by-default@1.1.1": {
      "map": {
        "css-selector-tokenizer": "npm:css-selector-tokenizer@0.6.0",
        "postcss": "npm:postcss@5.1.2"
      }
    },
    "npm:postcss-modules-scope@1.0.2": {
      "map": {
        "css-selector-tokenizer": "npm:css-selector-tokenizer@0.6.0",
        "postcss": "npm:postcss@5.1.2"
      }
    },
    "npm:postcss-modules-values@1.2.2": {
      "map": {
        "icss-replace-symbols": "npm:icss-replace-symbols@1.0.2",
        "postcss": "npm:postcss@5.1.2"
      }
    },
    "npm:postcss@5.1.2": {
      "map": {
        "js-base64": "npm:js-base64@2.1.9",
        "source-map": "npm:source-map@0.5.6",
        "supports-color": "npm:supports-color@3.1.2"
      }
    },
    "npm:process-nextick-args@1.0.7": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:process@0.11.9": {
      "map": {}
    },
    "npm:promise@7.1.1": {
      "map": {
        "asap": "npm:asap@2.0.5"
      }
    },
    "npm:punycode@1.3.2": {
      "map": {}
    },
    "npm:querystring@0.2.0": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:react-intl@2.0.0-beta-1": {
      "map": {
        "intl-format-cache": "npm:intl-format-cache@2.0.4",
        "intl-messageformat": "npm:intl-messageformat@1.2.0",
        "intl-relativeformat": "npm:intl-relativeformat@1.2.0",
        "invariant": "npm:invariant@2.2.1",
        "react": "npm:react@0.14.8"
      }
    },
    "npm:react-redux@4.4.5": {
      "map": {
        "hoist-non-react-statics": "npm:hoist-non-react-statics@1.2.0",
        "invariant": "npm:invariant@2.2.1",
        "lodash": "npm:lodash@4.16.2",
        "loose-envify": "npm:loose-envify@1.2.0",
        "react": "npm:react@15.3.2",
        "redux": "npm:redux@3.6.0"
      }
    },
    "npm:react-tap-event-plugin@0.2.2": {
      "map": {
        "fbjs": "npm:fbjs@0.2.1",
        "react": "npm:react@0.14.8"
      }
    },
    "npm:react@0.14.8": {
      "map": {
        "fbjs": "npm:fbjs@0.6.1"
      }
    },
    "npm:react@15.3.2": {
      "map": {
        "fbjs": "npm:fbjs@0.8.4",
        "loose-envify": "npm:loose-envify@1.2.0",
        "object-assign": "npm:object-assign@4.1.0"
      }
    },
    "npm:readable-stream@2.1.5": {
      "map": {
        "buffer-shims": "npm:buffer-shims@1.0.0",
        "core-util-is": "npm:core-util-is@1.0.2",
        "inherits": "npm:inherits@2.0.3",
        "isarray": "npm:isarray@1.0.0",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "string_decoder": "npm:string_decoder@0.10.31",
        "util-deprecate": "npm:util-deprecate@1.0.2"
      }
    },
    "npm:redux@3.6.0": {
      "map": {
        "lodash": "npm:lodash@4.16.2",
        "lodash-es": "npm:lodash-es@4.16.2",
        "loose-envify": "npm:loose-envify@1.2.0",
        "symbol-observable": "npm:symbol-observable@1.0.2"
      }
    },
    "npm:regexpu-core@1.0.0": {
      "map": {
        "regenerate": "npm:regenerate@1.3.1",
        "regjsgen": "npm:regjsgen@0.2.0",
        "regjsparser": "npm:regjsparser@0.1.5",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:regjsparser@0.1.5": {
      "map": {
        "jsesc": "npm:jsesc@0.5.0"
      }
    },
    "npm:socket.io-client@1.4.8": {
      "map": {
        "backo2": "npm:backo2@1.0.2",
        "component-bind": "npm:component-bind@1.0.0",
        "component-emitter": "npm:component-emitter@1.2.0",
        "debug": "npm:debug@2.2.0",
        "engine.io-client": "npm:engine.io-client@1.6.11",
        "has-binary": "npm:has-binary@0.1.7",
        "indexof": "npm:indexof@0.0.1",
        "object-component": "npm:object-component@0.0.3",
        "parseuri": "npm:parseuri@0.0.4",
        "socket.io-parser": "npm:socket.io-parser@2.2.6",
        "to-array": "npm:to-array@0.1.4"
      }
    },
    "npm:socket.io-parser@2.2.6": {
      "map": {
        "benchmark": "npm:benchmark@1.0.0",
        "component-emitter": "npm:component-emitter@1.1.2",
        "debug": "npm:debug@2.2.0",
        "isarray": "npm:isarray@0.0.1",
        "json3": "npm:json3@3.3.2"
      }
    },
    "npm:source-map@0.5.6": {
      "map": {}
    },
    "npm:string_decoder@0.10.31": {
      "map": {}
    },
    "npm:supports-color@3.1.2": {
      "map": {
        "has-flag": "npm:has-flag@1.0.0"
      }
    },
    "npm:toposort@0.2.12": {
      "map": {}
    },
    "npm:ua-parser-js@0.7.10": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:utf8@2.1.0": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:util-deprecate@1.0.2": {
      "map": {}
    },
    "npm:util@0.10.3": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:weakee@0.9.1": {
      "map": {}
    },
    "npm:webrtc-adapter@0.0.7": {
      "map": {}
    },
    "npm:ws@1.0.1": {
      "map": {
        "options": "npm:options@0.0.6",
        "utf-8-validate": "npm:utf-8-validate@1.2.1",
        "bufferutil": "npm:bufferutil@1.2.1",
        "ultron": "npm:ultron@1.0.2"
      }
    },
    "npm:utf-8-validate@1.2.1": {
      "map": {
        "bindings": "npm:bindings@1.2.1",
        "nan": "npm:nan@2.4.0"
      }
    },
    "npm:bufferutil@1.2.1": {
      "map": {
        "bindings": "npm:bindings@1.2.1",
        "nan": "npm:nan@2.4.0"
      }
    },
    "github:jspm/nodelibs-domain@0.2.0-alpha": {
      "map": {
        "domain-browserify": "npm:domain-browser@1.1.7"
      }
    },
    "github:jspm/nodelibs-stream@0.2.0-alpha": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.1.5"
      }
    },
    "github:jspm/nodelibs-url@0.2.0-alpha": {
      "map": {
        "url-browserify": "npm:url@0.11.0"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "punycode": "npm:punycode@1.3.2",
        "querystring": "npm:querystring@0.2.0"
      }
    },
    "github:jspm/nodelibs-http@0.2.0-alpha": {
      "map": {
        "http-browserify": "npm:stream-http@2.4.0"
      }
    },
    "npm:stream-http@2.4.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.1.5",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
        "builtin-status-codes": "npm:builtin-status-codes@2.0.0",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "github:jspm/nodelibs-timers@0.2.0-alpha": {
      "map": {
        "timers-browserify": "npm:timers-browserify@1.4.2"
      }
    },
    "npm:timers-browserify@1.4.2": {
      "map": {
        "process": "npm:process@0.11.9"
      }
    },
    "github:jspm/nodelibs-buffer@0.2.0-alpha": {
      "map": {
        "buffer-browserify": "npm:buffer@4.9.1"
      }
    },
    "npm:buffer@4.9.1": {
      "map": {
        "ieee754": "npm:ieee754@1.1.6",
        "isarray": "npm:isarray@1.0.0",
        "base64-js": "npm:base64-js@1.2.0"
      }
    },
    "github:jspm/nodelibs-crypto@0.2.0-alpha": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.11.0"
      }
    },
    "npm:crypto-browserify@3.11.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "browserify-cipher": "npm:browserify-cipher@1.0.0",
        "browserify-sign": "npm:browserify-sign@4.0.0",
        "create-hash": "npm:create-hash@1.1.2",
        "create-hmac": "npm:create-hmac@1.1.4",
        "public-encrypt": "npm:public-encrypt@4.0.0",
        "randombytes": "npm:randombytes@2.0.3",
        "diffie-hellman": "npm:diffie-hellman@5.0.2",
        "pbkdf2": "npm:pbkdf2@3.0.8"
      }
    },
    "npm:browserify-sign@4.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "create-hash": "npm:create-hash@1.1.2",
        "create-hmac": "npm:create-hmac@1.1.4",
        "parse-asn1": "npm:parse-asn1@5.0.0",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "elliptic": "npm:elliptic@6.3.2",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:create-hmac@1.1.4": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "create-hash": "npm:create-hash@1.1.2"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "randombytes": "npm:randombytes@2.0.3",
        "parse-asn1": "npm:parse-asn1@5.0.0",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:create-hash@1.1.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "ripemd160": "npm:ripemd160@1.0.1",
        "cipher-base": "npm:cipher-base@1.0.3",
        "sha.js": "npm:sha.js@2.4.5"
      }
    },
    "npm:diffie-hellman@5.0.2": {
      "map": {
        "randombytes": "npm:randombytes@2.0.3",
        "miller-rabin": "npm:miller-rabin@4.0.0",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:pbkdf2@3.0.8": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.4"
      }
    },
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "browserify-des": "npm:browserify-des@1.0.0",
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "cipher-base": "npm:cipher-base@1.0.3",
        "des.js": "npm:des.js@1.0.0"
      }
    },
    "npm:browserify-aes@1.0.6": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "cipher-base": "npm:cipher-base@1.0.3",
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "buffer-xor": "npm:buffer-xor@1.0.3"
      }
    },
    "npm:parse-asn1@5.0.0": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "pbkdf2": "npm:pbkdf2@3.0.8",
        "asn1.js": "npm:asn1.js@4.8.1"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "randombytes": "npm:randombytes@2.0.3",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:cipher-base@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "elliptic": "npm:elliptic@6.3.2",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:evp_bytestokey@1.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2"
      }
    },
    "npm:miller-rabin@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "brorand": "npm:brorand@1.0.6"
      }
    },
    "npm:elliptic@6.3.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "bn.js": "npm:bn.js@4.11.6",
        "brorand": "npm:brorand@1.0.6",
        "hash.js": "npm:hash.js@1.0.3"
      }
    },
    "npm:sha.js@2.4.5": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "github:jspm/nodelibs-zlib@0.2.0-alpha": {
      "map": {
        "zlib-browserify": "npm:browserify-zlib@0.1.4"
      }
    },
    "npm:asn1.js@4.8.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "bn.js": "npm:bn.js@4.11.6",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:hash.js@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "github:jspm/nodelibs-string_decoder@0.2.0-alpha": {
      "map": {
        "string_decoder-browserify": "npm:string_decoder@0.10.31"
      }
    },
    "github:jspm/nodelibs-os@0.2.0-alpha": {
      "map": {
        "os-browserify": "npm:os-browserify@0.2.1"
      }
    }
  }
});
