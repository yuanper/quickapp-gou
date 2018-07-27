(function(){
      
  var createPageHandler = function() {
    return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ({

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(21)
var $app_style$ = __webpack_require__(22)
var $app_script$ = __webpack_require__(23)

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})

$app_bootstrap$('@app-component/index',{ packagerVersion: '0.0.5'})


/***/ }),

/***/ 21:
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "my-info"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "set"
      ],
      "children": [
        {
          "type": "image",
          "attr": {
            "src": "/assets/set.png"
          },
          "events": {
            "click": function (evt) {this.route(evt)}
          }
        },
        {
          "type": "image",
          "attr": {
            "src": "/assets/message.png"
          }
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "info"
      ],
      "children": [
        {
          "type": "image",
          "attr": {
            "src": "/Common/logo.png"
          }
        },
        {
          "type": "text",
          "attr": {
            "value": "zengfp_5075016"
          },
          "classList": [
            "my-name"
          ]
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "list"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "list-title"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "我的订单"
              },
              "classList": [
                "title"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": "查看全部>"
              }
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "list-info"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "list-info-detail"
              ],
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": "/assets/daifukuan.png"
                  }
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "待付款"
                  }
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "list-info-detail"
              ],
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": "/assets/daifahuo.png"
                  }
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "待发货"
                  }
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "list-info-detail"
              ],
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": "/assets/daishouhuo.png"
                  }
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "待收货"
                  }
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "list-info-detail"
              ],
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": "/assets/daipingjia.png"
                  }
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "待评价"
                  }
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "list-info-detail"
              ],
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": "/assets/tuikuan.png"
                  }
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "退款/售后"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "list"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "list-title"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "我的订单"
              },
              "classList": [
                "title"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": "查看全部>"
              }
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "list-info"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "list-info-detail"
              ],
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": "/assets/daifukuan.png"
                  }
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "待付款"
                  }
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "list-info-detail"
              ],
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": "/assets/daifahuo.png"
                  }
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "待发货"
                  }
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "list-info-detail"
              ],
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": "/assets/daishouhuo.png"
                  }
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "待收货"
                  }
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "list-info-detail"
              ],
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": "/assets/daipingjia.png"
                  }
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "待评价"
                  }
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "list-info-detail"
              ],
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": "/assets/tuikuan.png"
                  }
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "退款/售后"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "list"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "list-title"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "我的订单"
              },
              "classList": [
                "title"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": "查看全部>"
              }
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "list-info"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "list-info-detail"
              ],
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": "/assets/daifukuan.png"
                  }
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "待付款"
                  }
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "list-info-detail"
              ],
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": "/assets/daifahuo.png"
                  }
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "待发货"
                  }
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "list-info-detail"
              ],
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": "/assets/daishouhuo.png"
                  }
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "待收货"
                  }
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "list-info-detail"
              ],
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": "/assets/daipingjia.png"
                  }
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "待评价"
                  }
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "list-info-detail"
              ],
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": "/assets/tuikuan.png"
                  }
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "退款/售后"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "list"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "list-title"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "我的订单"
              },
              "classList": [
                "title"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": "查看全部>"
              }
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "list-info"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "list-info-detail"
              ],
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": "/assets/daifukuan.png"
                  }
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "待付款"
                  }
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "list-info-detail"
              ],
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": "/assets/daifahuo.png"
                  }
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "待发货"
                  }
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "list-info-detail"
              ],
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": "/assets/daishouhuo.png"
                  }
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "待收货"
                  }
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "list-info-detail"
              ],
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": "/assets/daipingjia.png"
                  }
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "待评价"
                  }
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "list-info-detail"
              ],
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": "/assets/tuikuan.png"
                  }
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "退款/售后"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "list"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "list-title"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "我的订单"
              },
              "classList": [
                "title"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": "查看全部>"
              }
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "list-info"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "list-info-detail"
              ],
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": "/assets/daifukuan.png"
                  }
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "待付款"
                  }
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "list-info-detail"
              ],
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": "/assets/daifahuo.png"
                  }
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "待发货"
                  }
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "list-info-detail"
              ],
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": "/assets/daishouhuo.png"
                  }
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "待收货"
                  }
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "list-info-detail"
              ],
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": "/assets/daipingjia.png"
                  }
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "待评价"
                  }
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "list-info-detail"
              ],
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": "/assets/tuikuan.png"
                  }
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "退款/售后"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "list"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "list-title"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "我的订单"
              },
              "classList": [
                "title"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": "查看全部>"
              }
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "list-info"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "list-info-detail"
              ],
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": "/assets/daifukuan.png"
                  }
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "待付款"
                  }
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "list-info-detail"
              ],
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": "/assets/daifahuo.png"
                  }
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "待发货"
                  }
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "list-info-detail"
              ],
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": "/assets/daishouhuo.png"
                  }
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "待收货"
                  }
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "list-info-detail"
              ],
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": "/assets/daipingjia.png"
                  }
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "待评价"
                  }
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "list-info-detail"
              ],
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": "/assets/tuikuan.png"
                  }
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "退款/售后"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "list"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "list-title"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "我的订单"
              },
              "classList": [
                "title"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": "查看全部>"
              }
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "list-info"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "list-info-detail"
              ],
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": "/assets/daifukuan.png"
                  }
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "待付款"
                  }
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "list-info-detail"
              ],
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": "/assets/daifahuo.png"
                  }
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "待发货"
                  }
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "list-info-detail"
              ],
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": "/assets/daishouhuo.png"
                  }
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "待收货"
                  }
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "list-info-detail"
              ],
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": "/assets/daipingjia.png"
                  }
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "待评价"
                  }
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "list-info-detail"
              ],
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": "/assets/tuikuan.png"
                  }
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "退款/售后"
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ 22:
/***/ (function(module, exports) {

module.exports = {
  ".my-info": {
    "display": "flex",
    "flexDirection": "column",
    "width": "750px",
    "height": "100%",
    "alignItems": "flex-start"
  },
  ".set": {
    "height": "80px",
    "width": "100%",
    "flexDirection": "row",
    "paddingTop": "0px",
    "paddingRight": "35px",
    "paddingBottom": "0px",
    "paddingLeft": "35px",
    "alignItems": "center",
    "justifyContent": "space-between",
    "backgroundColor": "#ff1234"
  },
  ".set image": {
    "width": "50px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "set"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "image"
        }
      ]
    }
  },
  ".info": {
    "height": "120px",
    "flexDirection": "row",
    "paddingTop": "0px",
    "paddingRight": "35px",
    "paddingBottom": "0px",
    "paddingLeft": "35px",
    "width": "100%",
    "alignItems": "center",
    "justifyContent": "space-between",
    "backgroundColor": "#ff1234"
  },
  ".info image": {
    "width": "100px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "info"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "image"
        }
      ]
    }
  },
  ".my-name": {
    "fontSize": "28px",
    "color": "#ffffff"
  },
  ".list": {
    "display": "flex",
    "flexDirection": "column",
    "height": "240px",
    "width": "100%",
    "paddingTop": "0px",
    "paddingRight": "35px",
    "paddingBottom": "0px",
    "paddingLeft": "35px",
    "borderBottomWidth": "1px",
    "borderBottomColor": "#dedede",
    "borderStyle": "solid",
    "justifyContent": "center"
  },
  ".list-title": {
    "flexDirection": "row",
    "height": "100px",
    "lineHeight": "100px",
    "justifyContent": "space-between"
  },
  ".list-title .title": {
    "fontSize": "36px",
    "color": "#000000",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list-title"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "title"
        }
      ]
    }
  },
  ".list text": {
    "fontSize": "24px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "text"
        }
      ]
    }
  },
  ".list-info": {
    "alignItems": "center",
    "justifyContent": "space-between"
  },
  ".list-info-detail": {
    "display": "flex",
    "flexDirection": "column",
    "alignItems": "center",
    "justifyContent": "center"
  },
  ".list-info-detail image": {
    "width": "50px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list-info-detail"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "image"
        }
      ]
    }
  }
}

/***/ }),

/***/ 23:
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _system = $app_require$('@app-module/system.router');

var _system2 = _interopRequireDefault(_system);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  route: function route() {
    _system2.default.push({
      uri: '/Detail'
    });
  }
};


var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];

if (moduleOwn.data && accessors.some(function (acc) {
  return moduleOwn[acc];
})) {
  throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function (acc) {
    var accType = _typeof(moduleOwn[acc]);
    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
      for (var name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = { access: acc };
      }
    } else if (accType === 'function') {
      console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
    }
  });
}}

/***/ })

/******/ });
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=index.js.map