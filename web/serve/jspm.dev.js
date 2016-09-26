SystemJS.config({
  map: {
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "core-js": "npm:core-js@2.4.1",
    "plugin-babel": "npm:systemjs-plugin-babel@0.0.15",
    "babel-plugin-transform-react-jsx": "npm:babel-plugin-transform-react-jsx@6.8.0",
    "babel-plugin-transform-decorators-legacy": "npm:babel-plugin-transform-decorators-legacy@1.3.4"
  },
  packages: {
    "npm:babel-runtime@5.8.38": {
      "map": {}
    },
    "npm:babel-plugin-transform-react-jsx@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.11.6",
        "babel-helper-builder-react-jsx": "npm:babel-helper-builder-react-jsx@6.9.0",
        "babel-plugin-syntax-jsx": "npm:babel-plugin-syntax-jsx@6.13.0"
      }
    },
    "npm:babel-runtime@6.11.6": {
      "map": {
        "core-js": "npm:core-js@2.4.1",
        "regenerator-runtime": "npm:regenerator-runtime@0.9.5"
      }
    },
    "npm:babel-helper-builder-react-jsx@6.9.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.11.6",
        "esutils": "npm:esutils@2.0.2",
        "lodash": "npm:lodash@4.16.2",
        "babel-types": "npm:babel-types@6.15.0"
      }
    },
    "npm:babel-types@6.15.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.11.6",
        "esutils": "npm:esutils@2.0.2",
        "lodash": "npm:lodash@4.16.2",
        "to-fast-properties": "npm:to-fast-properties@1.0.2"
      }
    },
    "npm:babel-plugin-transform-decorators-legacy@1.3.4": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.11.6",
        "babel-plugin-syntax-decorators": "npm:babel-plugin-syntax-decorators@6.13.0",
        "babel-template": "npm:babel-template@6.15.0"
      }
    },
    "npm:babel-template@6.15.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.11.6",
        "lodash": "npm:lodash@4.16.2",
        "babel-types": "npm:babel-types@6.15.0",
        "babel-traverse": "npm:babel-traverse@6.15.0",
        "babylon": "npm:babylon@6.11.2"
      }
    },
    "npm:babel-traverse@6.15.0": {
      "map": {
        "babylon": "npm:babylon@6.11.2",
        "babel-runtime": "npm:babel-runtime@6.11.6",
        "babel-types": "npm:babel-types@6.15.0",
        "lodash": "npm:lodash@4.16.2",
        "babel-messages": "npm:babel-messages@6.8.0",
        "babel-code-frame": "npm:babel-code-frame@6.11.0",
        "invariant": "npm:invariant@2.2.1",
        "globals": "npm:globals@8.18.0",
        "debug": "npm:debug@2.2.0"
      }
    },
    "npm:babel-messages@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.11.6"
      }
    },
    "npm:babel-code-frame@6.11.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.11.6",
        "esutils": "npm:esutils@2.0.2",
        "js-tokens": "npm:js-tokens@2.0.0",
        "chalk": "npm:chalk@1.1.3"
      }
    },
    "npm:chalk@1.1.3": {
      "map": {
        "supports-color": "npm:supports-color@2.0.0",
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "has-ansi": "npm:has-ansi@2.0.0",
        "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
        "ansi-styles": "npm:ansi-styles@2.2.1"
      }
    },
    "npm:strip-ansi@3.0.1": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.0.0"
      }
    },
    "npm:has-ansi@2.0.0": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.0.0"
      }
    }
  }
});
