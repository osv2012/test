SystemJS.config({
  devConfig: {
    'map': {
      'babel-preset-react': 'npm:babel-preset-react@6.23.0',
      'react-addons-test-utils': 'npm:react-addons-test-utils@15.4.2'
    },
    'packages': {
      'npm:babel-preset-react@6.23.0': {
        'map': {
          'babel-plugin-transform-react-jsx-self': 'npm:babel-plugin-transform-react-jsx-self@6.22.0',
          'babel-plugin-transform-react-jsx': 'npm:babel-plugin-transform-react-jsx@6.23.0',
          'babel-preset-flow': 'npm:babel-preset-flow@6.23.0',
          'babel-plugin-transform-react-display-name': 'npm:babel-plugin-transform-react-display-name@6.23.0',
          'babel-plugin-transform-react-jsx-source': 'npm:babel-plugin-transform-react-jsx-source@6.22.0',
          'babel-plugin-syntax-jsx': 'npm:babel-plugin-syntax-jsx@6.18.0'
        }
      },
      'npm:babel-plugin-transform-react-jsx-self@6.22.0': {
        'map': {
          'babel-plugin-syntax-jsx': 'npm:babel-plugin-syntax-jsx@6.18.0',
          'babel-runtime': 'npm:babel-runtime@6.23.0'
        }
      },
      'npm:babel-plugin-transform-react-jsx@6.23.0': {
        'map': {
          'babel-plugin-syntax-jsx': 'npm:babel-plugin-syntax-jsx@6.18.0',
          'babel-runtime': 'npm:babel-runtime@6.23.0',
          'babel-helper-builder-react-jsx': 'npm:babel-helper-builder-react-jsx@6.23.0'
        }
      },
      'npm:react-addons-test-utils@15.4.2': {
        'map': {
          'object-assign': 'npm:object-assign@4.1.1',
          'fbjs': 'npm:fbjs@0.8.9'
        }
      },
      'npm:babel-plugin-transform-react-jsx-source@6.22.0': {
        'map': {
          'babel-plugin-syntax-jsx': 'npm:babel-plugin-syntax-jsx@6.18.0',
          'babel-runtime': 'npm:babel-runtime@6.23.0'
        }
      },
      'npm:babel-plugin-transform-react-display-name@6.23.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.23.0'
        }
      },
      'npm:babel-preset-flow@6.23.0': {
        'map': {
          'babel-plugin-transform-flow-strip-types': 'npm:babel-plugin-transform-flow-strip-types@6.22.0'
        }
      },
      'npm:babel-helper-builder-react-jsx@6.23.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.23.0',
          'lodash': 'npm:lodash@4.17.4',
          'esutils': 'npm:esutils@2.0.2',
          'babel-types': 'npm:babel-types@6.23.0'
        }
      },
      'npm:babel-plugin-transform-flow-strip-types@6.22.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.23.0',
          'babel-plugin-syntax-flow': 'npm:babel-plugin-syntax-flow@6.18.0'
        }
      },
      'npm:babel-types@6.23.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.23.0',
          'esutils': 'npm:esutils@2.0.2',
          'lodash': 'npm:lodash@4.17.4',
          'to-fast-properties': 'npm:to-fast-properties@1.0.2'
        }
      }
    }
  },
  packages: {
    'src': {
      'defaultExtension': 'tsx',
      'main': 'index'
    }
  },
  transpiler: 'ts',
  typescriptOptions: {
    'sourceMap': true,
    'emitDecoratorMetadata': true,
    'experimentalDecorators': true,
    'removeComments': false,
    'noImplicitAny': false,
    'jsx': 2
  }
});

SystemJS.config({
  packageConfigPaths: [
    'npm:@*/*.json',
    'npm:*.json',
    'github:*/*.json'
  ],
  map: {
    'assert': 'github:jspm/nodelibs-assert@0.2.0-alpha',
    'babel-polyfill': 'npm:babel-polyfill@6.23.0',
    'buffer': 'github:jspm/nodelibs-buffer@0.2.0-alpha',
    'child_process': 'github:jspm/nodelibs-child_process@0.2.0-alpha',
    'classnames': 'npm:classnames@2.2.5',
    'constants': 'github:jspm/nodelibs-constants@0.2.0-alpha',
    'crypto': 'github:jspm/nodelibs-crypto@0.2.0-alpha',
    'css': 'github:systemjs/plugin-css@0.1.32',
    'domain': 'github:jspm/nodelibs-domain@0.2.0-alpha',
    'es6-shim': 'npm:es6-shim@0.35.3',
    'events': 'github:jspm/nodelibs-events@0.2.0-alpha',
    'fs': 'github:jspm/nodelibs-fs@0.2.0-alpha',
    'http': 'github:jspm/nodelibs-http@0.2.0-alpha',
    'https': 'github:jspm/nodelibs-https@0.2.0-alpha',
    'module': 'github:jspm/nodelibs-module@0.2.0-alpha',
    'net': 'github:jspm/nodelibs-net@0.2.0-alpha',
    'os': 'github:jspm/nodelibs-os@0.2.0-alpha',
    'path': 'github:jspm/nodelibs-path@0.2.0-alpha',
    'process': 'github:jspm/nodelibs-process@0.2.0-alpha',
    'react': 'npm:react@15.4.2',
    'react-dom': 'npm:react-dom@15.4.2',
    'react-redux': 'npm:react-redux@5.0.3',
    'redux': 'npm:redux@3.6.0',
    'stream': 'github:jspm/nodelibs-stream@0.2.0-alpha',
    'string_decoder': 'github:jspm/nodelibs-string_decoder@0.2.0-alpha',
    'todomvc-app-css': 'npm:todomvc-app-css@2.0.6',
    'ts': 'github:frankwallis/plugin-typescript@7.0.3',
    'typescript': 'npm:typescript@2.2.1',
    'url': 'github:jspm/nodelibs-url@0.2.0-alpha',
    'util': 'github:jspm/nodelibs-util@0.2.0-alpha',
    'vm': 'github:jspm/nodelibs-vm@0.2.0-alpha',
    'zlib': 'github:jspm/nodelibs-zlib@0.2.0-alpha'
  },
  packages: {
    'npm:babel-polyfill@6.23.0': {
      'map': {
        'regenerator-runtime': 'npm:regenerator-runtime@0.10.3',
        'babel-runtime': 'npm:babel-runtime@6.23.0',
        'core-js': 'npm:core-js@2.4.1'
      }
    },
    'npm:redux@3.6.0': {
      'map': {
        'symbol-observable': 'npm:symbol-observable@1.0.4',
        'loose-envify': 'npm:loose-envify@1.3.1',
        'lodash-es': 'npm:lodash-es@4.17.4',
        'lodash': 'npm:lodash@4.17.4'
      }
    },
    'npm:react-dom@15.4.2': {
      'map': {
        'loose-envify': 'npm:loose-envify@1.3.1',
        'object-assign': 'npm:object-assign@4.1.1',
        'fbjs': 'npm:fbjs@0.8.9'
      }
    },
    'npm:react-redux@5.0.3': {
      'map': {
        'loose-envify': 'npm:loose-envify@1.3.1',
        'invariant': 'npm:invariant@2.2.2',
        'hoist-non-react-statics': 'npm:hoist-non-react-statics@1.2.0',
        'lodash-es': 'npm:lodash-es@4.17.4',
        'lodash': 'npm:lodash@4.17.4'
      }
    },
    'npm:react@15.4.2': {
      'map': {
        'loose-envify': 'npm:loose-envify@1.3.1',
        'object-assign': 'npm:object-assign@4.1.1',
        'fbjs': 'npm:fbjs@0.8.9'
      }
    },
    'npm:invariant@2.2.2': {
      'map': {
        'loose-envify': 'npm:loose-envify@1.3.1'
      }
    },
    'npm:babel-runtime@6.23.0': {
      'map': {
        'regenerator-runtime': 'npm:regenerator-runtime@0.10.3',
        'core-js': 'npm:core-js@2.4.1'
      }
    },
    'npm:fbjs@0.8.9': {
      'map': {
        'loose-envify': 'npm:loose-envify@1.3.1',
        'object-assign': 'npm:object-assign@4.1.1',
        'core-js': 'npm:core-js@1.2.7',
        'setimmediate': 'npm:setimmediate@1.0.5',
        'isomorphic-fetch': 'npm:isomorphic-fetch@2.2.1',
        'promise': 'npm:promise@7.1.1',
        'ua-parser-js': 'npm:ua-parser-js@0.7.12'
      }
    },
    'npm:loose-envify@1.3.1': {
      'map': {
        'js-tokens': 'npm:js-tokens@3.0.1'
      }
    },
    'npm:promise@7.1.1': {
      'map': {
        'asap': 'npm:asap@2.0.5'
      }
    },
    'npm:isomorphic-fetch@2.2.1': {
      'map': {
        'whatwg-fetch': 'npm:whatwg-fetch@2.0.3',
        'node-fetch': 'npm:node-fetch@1.6.3'
      }
    },
    'npm:node-fetch@1.6.3': {
      'map': {
        'is-stream': 'npm:is-stream@1.1.0',
        'encoding': 'npm:encoding@0.1.12'
      }
    },
    'npm:encoding@0.1.12': {
      'map': {
        'iconv-lite': 'npm:iconv-lite@0.4.15'
      }
    },
    'npm:typescript@2.2.1': {
      'map': {
        'source-map-support': 'npm:source-map-support@0.4.11'
      }
    },
    'npm:source-map-support@0.4.11': {
      'map': {
        'source-map': 'npm:source-map@0.5.6'
      }
    },
    'github:jspm/nodelibs-stream@0.2.0-alpha': {
      'map': {
        'stream-browserify': 'npm:stream-browserify@2.0.1'
      }
    },
    'npm:stream-browserify@2.0.1': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'readable-stream': 'npm:readable-stream@2.2.3'
      }
    },
    'npm:readable-stream@2.2.3': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'core-util-is': 'npm:core-util-is@1.0.2',
        'process-nextick-args': 'npm:process-nextick-args@1.0.7',
        'string_decoder': 'npm:string_decoder@0.10.31',
        'buffer-shims': 'npm:buffer-shims@1.0.0',
        'util-deprecate': 'npm:util-deprecate@1.0.2',
        'isarray': 'npm:isarray@1.0.0'
      }
    },
    'github:jspm/nodelibs-domain@0.2.0-alpha': {
      'map': {
        'domain-browserify': 'npm:domain-browser@1.1.7'
      }
    },
    'github:jspm/nodelibs-string_decoder@0.2.0-alpha': {
      'map': {
        'string_decoder-browserify': 'npm:string_decoder@0.10.31'
      }
    },
    'github:jspm/nodelibs-buffer@0.2.0-alpha': {
      'map': {
        'buffer-browserify': 'npm:buffer@4.9.1'
      }
    },
    'npm:buffer@4.9.1': {
      'map': {
        'isarray': 'npm:isarray@1.0.0',
        'base64-js': 'npm:base64-js@1.2.0',
        'ieee754': 'npm:ieee754@1.1.8'
      }
    },
    'github:jspm/nodelibs-os@0.2.0-alpha': {
      'map': {
        'os-browserify': 'npm:os-browserify@0.2.1'
      }
    },
    'github:jspm/nodelibs-crypto@0.2.0-alpha': {
      'map': {
        'crypto-browserify': 'npm:crypto-browserify@3.11.0'
      }
    },
    'npm:crypto-browserify@3.11.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'randombytes': 'npm:randombytes@2.0.3',
        'create-hmac': 'npm:create-hmac@1.1.4',
        'create-ecdh': 'npm:create-ecdh@4.0.0',
        'public-encrypt': 'npm:public-encrypt@4.0.0',
        'create-hash': 'npm:create-hash@1.1.2',
        'browserify-cipher': 'npm:browserify-cipher@1.0.0',
        'diffie-hellman': 'npm:diffie-hellman@5.0.2',
        'pbkdf2': 'npm:pbkdf2@3.0.9',
        'browserify-sign': 'npm:browserify-sign@4.0.0'
      }
    },
    'npm:create-hmac@1.1.4': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'create-hash': 'npm:create-hash@1.1.2'
      }
    },
    'npm:public-encrypt@4.0.0': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.2',
        'randombytes': 'npm:randombytes@2.0.3',
        'browserify-rsa': 'npm:browserify-rsa@4.0.1',
        'parse-asn1': 'npm:parse-asn1@5.0.0',
        'bn.js': 'npm:bn.js@4.11.6'
      }
    },
    'npm:create-hash@1.1.2': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'cipher-base': 'npm:cipher-base@1.0.3',
        'ripemd160': 'npm:ripemd160@1.0.1',
        'sha.js': 'npm:sha.js@2.4.8'
      }
    },
    'npm:diffie-hellman@5.0.2': {
      'map': {
        'randombytes': 'npm:randombytes@2.0.3',
        'miller-rabin': 'npm:miller-rabin@4.0.0',
        'bn.js': 'npm:bn.js@4.11.6'
      }
    },
    'npm:pbkdf2@3.0.9': {
      'map': {
        'create-hmac': 'npm:create-hmac@1.1.4'
      }
    },
    'npm:browserify-sign@4.0.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'create-hash': 'npm:create-hash@1.1.2',
        'create-hmac': 'npm:create-hmac@1.1.4',
        'browserify-rsa': 'npm:browserify-rsa@4.0.1',
        'parse-asn1': 'npm:parse-asn1@5.0.0',
        'elliptic': 'npm:elliptic@6.4.0',
        'bn.js': 'npm:bn.js@4.11.6'
      }
    },
    'npm:browserify-cipher@1.0.0': {
      'map': {
        'browserify-des': 'npm:browserify-des@1.0.0',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.0',
        'browserify-aes': 'npm:browserify-aes@1.0.6'
      }
    },
    'npm:cipher-base@1.0.3': {
      'map': {
        'inherits': 'npm:inherits@2.0.3'
      }
    },
    'npm:browserify-des@1.0.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'cipher-base': 'npm:cipher-base@1.0.3',
        'des.js': 'npm:des.js@1.0.0'
      }
    },
    'npm:browserify-rsa@4.0.1': {
      'map': {
        'randombytes': 'npm:randombytes@2.0.3',
        'bn.js': 'npm:bn.js@4.11.6'
      }
    },
    'npm:parse-asn1@5.0.0': {
      'map': {
        'browserify-aes': 'npm:browserify-aes@1.0.6',
        'create-hash': 'npm:create-hash@1.1.2',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.0',
        'pbkdf2': 'npm:pbkdf2@3.0.9',
        'asn1.js': 'npm:asn1.js@4.9.1'
      }
    },
    'npm:evp_bytestokey@1.0.0': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.2'
      }
    },
    'npm:browserify-aes@1.0.6': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'cipher-base': 'npm:cipher-base@1.0.3',
        'create-hash': 'npm:create-hash@1.1.2',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.0',
        'buffer-xor': 'npm:buffer-xor@1.0.3'
      }
    },
    'npm:create-ecdh@4.0.0': {
      'map': {
        'elliptic': 'npm:elliptic@6.4.0',
        'bn.js': 'npm:bn.js@4.11.6'
      }
    },
    'npm:sha.js@2.4.8': {
      'map': {
        'inherits': 'npm:inherits@2.0.3'
      }
    },
    'npm:miller-rabin@4.0.0': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.6',
        'brorand': 'npm:brorand@1.1.0'
      }
    },
    'npm:elliptic@6.4.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'bn.js': 'npm:bn.js@4.11.6',
        'brorand': 'npm:brorand@1.1.0',
        'hmac-drbg': 'npm:hmac-drbg@1.0.0',
        'minimalistic-crypto-utils': 'npm:minimalistic-crypto-utils@1.0.1',
        'hash.js': 'npm:hash.js@1.0.3',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0'
      }
    },
    'npm:des.js@1.0.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0'
      }
    },
    'npm:asn1.js@4.9.1': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'bn.js': 'npm:bn.js@4.11.6',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0'
      }
    },
    'npm:hmac-drbg@1.0.0': {
      'map': {
        'hash.js': 'npm:hash.js@1.0.3',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0',
        'minimalistic-crypto-utils': 'npm:minimalistic-crypto-utils@1.0.1'
      }
    },
    'npm:hash.js@1.0.3': {
      'map': {
        'inherits': 'npm:inherits@2.0.3'
      }
    },
    'github:jspm/nodelibs-url@0.2.0-alpha': {
      'map': {
        'url-browserify': 'npm:url@0.11.0'
      }
    },
    'github:jspm/nodelibs-http@0.2.0-alpha': {
      'map': {
        'http-browserify': 'npm:stream-http@2.6.3'
      }
    },
    'npm:stream-http@2.6.3': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'readable-stream': 'npm:readable-stream@2.2.3',
        'to-arraybuffer': 'npm:to-arraybuffer@1.0.1',
        'builtin-status-codes': 'npm:builtin-status-codes@3.0.0',
        'xtend': 'npm:xtend@4.0.1'
      }
    },
    'npm:url@0.11.0': {
      'map': {
        'querystring': 'npm:querystring@0.2.0',
        'punycode': 'npm:punycode@1.3.2'
      }
    },
    'github:jspm/nodelibs-zlib@0.2.0-alpha': {
      'map': {
        'zlib-browserify': 'npm:browserify-zlib@0.1.4'
      }
    },
    'npm:browserify-zlib@0.1.4': {
      'map': {
        'readable-stream': 'npm:readable-stream@2.2.3',
        'pako': 'npm:pako@0.2.9'
      }
    }
  }
});
