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
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "goods"
  ],
  "children": [
    {
      "type": "image",
      "attr": {
        "src": function () {return this.goodsImage}
      },
      "classList": [
        "goods-image"
      ]
    },
    {
      "type": "text",
      "attr": {
        "value": function () {return this.goodsTitle}
      },
      "classList": [
        "goods-name"
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "goods-bottom"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": function () {return '¥' + (this.goodsPrice)}
          },
          "classList": [
            "goods-price"
          ]
        },
        {
          "type": "image",
          "attr": {
            "src": "/assets/car.png"
          },
          "classList": [
            "car-image"
          ]
        }
      ]
    }
  ]
}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {
  ".goods": {
    "display": "flex",
    "flexDirection": "column",
    "width": "90%",
    "height": "100%",
    "alignItems": "center",
    "justifyContent": "center",
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderStyle": "solid",
    "borderTopColor": "#dddddd",
    "borderRightColor": "#dddddd",
    "borderBottomColor": "#dddddd",
    "borderLeftColor": "#dddddd"
  },
  ".goods-image": {
    "width": "100%",
    "height": "80%"
  },
  ".goods-name": {
    "lines": 2,
    "height": "60px",
    "fontSize": "24px",
    "textOverflow": "ellipsis",
    "textAlign": "center"
  },
  ".goods-bottom": {
    "display": "flex",
    "flexDirection": "row",
    "alignItems": "center",
    "width": "90%",
    "justifyContent": "space-between"
  },
  ".goods-price": {
    "color": "#ff1234"
  },
  ".car-image": {
    "width": "50px",
    "height": "50px"
  }
}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
        value: true
});
exports.default = {
        props: ['goodsImage', 'goodsTitle', 'goodsPrice']
};}

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(25)
__webpack_require__(37)
__webpack_require__(50)
var $app_template$ = __webpack_require__(54)
var $app_style$ = __webpack_require__(55)
var $app_script$ = __webpack_require__(56)

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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(26)
__webpack_require__(31)
var $app_template$ = __webpack_require__(34)
var $app_style$ = __webpack_require__(35)
var $app_script$ = __webpack_require__(36)

$app_define$('@app-component/comp-home', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(27)
var $app_template$ = __webpack_require__(28)
var $app_style$ = __webpack_require__(29)
var $app_script$ = __webpack_require__(30)

$app_define$('@app-component/list-home', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(0)
var $app_style$ = __webpack_require__(1)
var $app_script$ = __webpack_require__(2)

$app_define$('@app-component/comp-goods-info', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = {
  "type": "stack",
  "attr": {},
  "classList": [
    "home-wrapper"
  ],
  "children": [
    {
      "type": "refresh",
      "attr": {
        "refreshing": function () {return this.refreshing}
      },
      "events": {
        "refresh": "refresh"
      },
      "children": [
        {
          "type": "list",
          "attr": {
            "id": "list"
          },
          "id": "list",
          "events": {
            "scrollbottom": "renderMoreListItem",
            "scroll": "scroll"
          },
          "classList": [
            "list-wrapper"
          ],
          "children": [
            {
              "type": "block",
              "attr": {},
              "repeat": function () {return this.goodsList},
              "children": [
                {
                  "type": "list-item",
                  "attr": {
                    "type": "goods"
                  },
                  "classList": [
                    "list-item"
                  ],
                  "children": [
                    {
                      "type": "comp-goods-info",
                      "attr": {
                        "goodsImage": function () {return this.$item.goods_image},
                        "goodsTitle": function () {return this.$item.goods_title},
                        "goodsPrice": function () {return this.$item.goods_price}
                      }
                    }
                  ]
                }
              ]
            },
            {
              "type": "list-item",
              "attr": {
                "type": "loadStatus"
              },
              "classList": [
                "load-status"
              ],
              "children": [
                {
                  "type": "progress",
                  "attr": {
                    "type": "circular",
                    "show": function () {return this.hasMoreData}
                  }
                },
                {
                  "type": "text",
                  "attr": {
                    "show": function () {return this.hasMoreData},
                    "value": "加载更多..."
                  },
                  "classList": [
                    "loading"
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "show": function () {return !this.hasMoreData},
                    "value": "没有更多了~"
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
      "classList": function () {return ['scroll-top', this.iconStyle]},
      "shown": function () {return this.showTop},
      "events": {
        "click": "scrollToTop"
      },
      "children": [
        {
          "type": "image",
          "attr": {
            "src": "/assets/top.png"
          }
        }
      ]
    }
  ]
}

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = {
  ".home-wrapper": {
    "flexDirection": "column"
  },
  ".list-wrapper": {
    "width": "750px",
    "height": "100%",
    "flexDirection": "column",
    "columns": 2
  },
  ".list-item": {
    "height": "500px",
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center",
    "marginTop": "20px"
  },
  ".load-status": {
    "display": "flex",
    "height": "100px",
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center",
    "columnSpan": 2
  },
  ".scroll-top": {
    "marginTop": "800px",
    "marginLeft": "650px",
    "display": "flex",
    "flexDirection": "column",
    "width": "80px",
    "height": "80px",
    "alignItems": "center",
    "justifyContent": "center",
    "backgroundColor": "#f2f2f2",
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderStyle": "solid",
    "borderTopColor": "#f2f2f2",
    "borderRightColor": "#f2f2f2",
    "borderBottomColor": "#f2f2f2",
    "borderLeftColor": "#f2f2f2",
    "borderRadius": "80px"
  },
  ".scroll-top image": {
    "width": "50px",
    "height": "50px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "scroll-top"
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
  ".showIcon": {
    "animationName": "showIcon",
    "animationDuration": "200ms",
    "animationTimingFunction": "linear"
  },
  "@KEYFRAMES": {
    "showIcon": [
      {
        "transform": "{\"translateY\":\"1000px\"}",
        "time": 0
      },
      {
        "transform": "{\"translateY\":\"800px\"}",
        "time": 100
      }
    ],
    "hideIcon": [
      {
        "transform": "{\"translateY\":\"800px\"}",
        "time": 0
      },
      {
        "transform": "{\"translateY\":\"1000px\"}",
        "time": 100
      }
    ]
  },
  ".hideIcon": {
    "animationName": "hideIcon",
    "animationDuration": "200ms",
    "animationTimingFunction": "linear"
  }
}

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _system = $app_require$('@app-module/system.fetch');

var _system2 = _interopRequireDefault(_system);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var memList = [];
exports.default = {
    props: ['title'],
    data: {
        type: '',
        refreshing: false,
        hasMoreData: true,
        isLoadingData: false,
        goodsList: [],
        size: 4,
        scrollY: 0,
        currentY: 0,
        showTop: false,
        iconStyle: ''
    },
    onInit: function onInit() {
        switch (this.title) {
            case '推荐':
                this.type = '推荐';
                break;
            case '时尚':
                this.type = '时尚';
                break;
            case '女装':
                this.type = '女装';
                break;
            default:
                this.type = '推荐';
                break;
        };
        this.loadAndRender();
        this.showTop = false;
    },
    refresh: function refresh() {
        this.refreshing = true;
        memList = [];
        this.goodsList = [];
        this.loadAndRender();
    },
    loadAndRender: function loadAndRender() {
        var doRender = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

        this.isLoadingData = true;
        this.getData(function (resList) {
            this.isLoadingData = false;
            this.refreshing = false;
            if (!resList) {
                console.error('数据请求错误');
            } else if (!resList.list.length) {
                this.hasMoreData = false;
            } else {
                memList = memList.concat(resList.list);
                if (doRender) {
                    this._renderList();
                }
            }
        }.bind(this));
    },
    _renderList: function _renderList() {
        if (memList.length > 0) {
            var list = memList.splice(0, this.size);
            this.goodsList = this.goodsList.concat(list);
        }
        if (memList.length <= this.size) {
            this.loadAndRender(false);
        }
    },
    renderMoreListItem: function renderMoreListItem() {
        if (!this.isLoadingData) {
            this._renderList();
        }
    },
    getData: function getData(cb) {
        _system2.default && _system2.default.fetch({
            url: 'http://apk.gou.3gtest.gionee.com/api/apk_index/taoHot',
            success: function success(result) {
                var res = JSON.parse(result.data);
                cb(res.data);
            },
            fail: function fail(result, code) {
                console.log('handing fail,code=' + code);
                cb([]);
            }
        });
    },
    scroll: function scroll(evt) {
        this.scrollY += evt.scrollY;
        console.log(this.scrollY);
        if (this.scrollY > 750 && evt.scrollY < 0) {
            this.showTop = true;
            this.iconStyle = 'showIcon';
        } else {
            this.showTop = false;
            this.iconStyle = 'hideIcon';
        }
    },
    scrollToTop: function scrollToTop() {
        this.$element('list').scrollTo({ index: 1 });
    }
};}

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(32)
var $app_style$ = __webpack_require__(33)

$app_define$('@app-component/comp-search', [], function($app_require$, $app_exports$, $app_module$){
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = {
  "type": "stack",
  "attr": {},
  "classList": [
    "search"
  ],
  "children": [
    {
      "type": "image",
      "attr": {
        "src": "/assets/search.png"
      },
      "style": {
        "width": "50px"
      },
      "classList": [
        "search-img"
      ]
    },
    {
      "type": "input",
      "attr": {
        "type": "text",
        "placeholder": "输入商品名或粘贴标题",
        "enterkeytype": "search"
      },
      "classList": [
        "search-input"
      ],
      "events": {
        "enterkeyclick": "searchGoods"
      }
    }
  ]
}

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = {
  ".search": {
    "display": "flex",
    "width": "750px",
    "alignItems": "center",
    "height": "200px",
    "paddingTop": "10px",
    "paddingRight": "0px",
    "paddingBottom": "10px",
    "paddingLeft": "0px",
    "marginBottom": "20px",
    "backgroundColor": "#f2f2f2"
  },
  ".search-input": {
    "width": "660px",
    "height": "80px",
    "paddingLeft": "70px",
    "paddingRight": "20px",
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderStyle": "solid",
    "borderTopColor": "#666666",
    "borderRightColor": "#666666",
    "borderBottomColor": "#666666",
    "borderLeftColor": "#666666",
    "marginLeft": "45px",
    "borderRadius": "80px",
    "fontSize": "28px",
    "color": "#ff1234"
  },
  ".search-img": {
    "marginLeft": "70px"
  }
}

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = {
  "type": "stack",
  "attr": {},
  "classList": [
    "home"
  ],
  "children": [
    {
      "type": "comp-search",
      "attr": {}
    },
    {
      "type": "tabs",
      "attr": {},
      "events": {
        "change": "onChangeTabIndex"
      },
      "classList": [
        "tab"
      ],
      "children": [
        {
          "type": "tab-bar",
          "attr": {
            "mode": "scrollable"
          },
          "classList": [
            "tab-bar"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "repeat": function () {return this.tabHeadList},
              "classList": function () {return [this.$idx==this.currentIndex?'active':'tab-item-warp']},
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.$item.title}
                  },
                  "style": {
                    "color": function () {return this.$idx==this.currentIndex?this.theme.color:'#666666'}
                  },
                  "classList": [
                    "tab-item"
                  ]
                }
              ]
            }
          ]
        },
        {
          "type": "tab-content",
          "attr": {},
          "classList": [
            "tab-content"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "repeat": function () {return this.tabHeadList},
              "children": [
                {
                  "type": "list-home",
                  "attr": {
                    "index": function () {return this.$idx},
                    "title": function () {return this.$item.title}
                  },
                  "shown": function () {return this.renderTabContent(this.$idx)}
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
/* 35 */
/***/ (function(module, exports) {

module.exports = {
  ".home": {
    "display": "flex",
    "flexDirection": "column",
    "height": "100%",
    "width": "750px"
  },
  ".tab": {
    "display": "flex",
    "width": "100%",
    "flexDirection": "column",
    "marginTop": "200px"
  },
  ".tab-item-warp": {
    "width": "20%",
    "height": "100px",
    "display": "flex",
    "flexDirection": "column",
    "alignItems": "center",
    "justifyContent": "center"
  },
  ".active": {
    "width": "20%",
    "height": "100px",
    "display": "flex",
    "flexDirection": "column",
    "alignItems": "center",
    "justifyContent": "center",
    "borderBottomWidth": "4px",
    "borderStyle": "solid",
    "borderBottomColor": "#ff1234"
  },
  ".tab-bar": {
    "width": "750px",
    "borderBottomWidth": "1px",
    "borderBottomColor": "#eeeeee",
    "borderStyle": "solid"
  }
}

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    data: {
        tabHeadList: [{ title: "推荐", render: true }, { title: "时尚", render: false }, { title: "女装", render: false }, { title: "男装", render: false }, { title: "母婴用品", render: false }, { title: '电子数码', render: false }, { title: '手机电脑', render: false }],
        currentIndex: 0,
        theme: { color: '#ff1234' }
    },
    onReady: function onReady() {
        this.changeTabIndex(0);
    },
    changeTabIndex: function changeTabIndex(index) {
        var item = Object.assign({}, this.tabHeadList[index]);
        item.render = true;
        this.tabHeadList.splice(index, 1, item);
    },
    onChangeTabIndex: function onChangeTabIndex(evt) {
        this.currentIndex = evt.index;
        this.changeTabIndex(evt.index);
    },
    renderTabContent: function renderTabContent(index) {
        return !!this.tabHeadList[index].render;
    }
};}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(38)
__webpack_require__(43)
var $app_template$ = __webpack_require__(47)
var $app_style$ = __webpack_require__(48)
var $app_script$ = __webpack_require__(49)

$app_define$('@app-component/comp-category', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(39)
var $app_template$ = __webpack_require__(40)
var $app_style$ = __webpack_require__(41)
var $app_script$ = __webpack_require__(42)

$app_define$('@app-component/comp-category-info', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(0)
var $app_style$ = __webpack_require__(1)
var $app_script$ = __webpack_require__(2)

$app_define$('@app-component/comp-goods-detail', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "category-info"
  ],
  "children": [
    {
      "type": "text",
      "attr": {
        "value": function () {return this.goodsTitle}
      },
      "classList": [
        "title"
      ]
    },
    {
      "type": "div",
      "attr": {},
      "repeat": function () {return this.goodsList},
      "classList": [
        "goods-list"
      ],
      "children": [
        {
          "type": "comp-goods-detail",
          "attr": {
            "goodsImage": function () {return this.$item.goods_image},
            "goodsTitle": function () {return this.$item.goods_title},
            "goodsPrice": function () {return this.$item.goods_price}
          }
        }
      ]
    }
  ]
}

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = {
  ".category-info": {
    "display": "flex",
    "flexDirection": "row",
    "flexWrap": "wrap",
    "width": "100%",
    "justifyContent": "center",
    "alignItems": "center"
  },
  ".title": {
    "width": "100%",
    "height": "80px",
    "lineHeight": "80px",
    "textAlign": "center",
    "fontSize": "30px"
  },
  ".goods-list": {
    "display": "flex",
    "flexDirection": "row",
    "width": "50%",
    "height": "500px",
    "alignItems": "center",
    "justifyContent": "center",
    "marginTop": "20px"
  }
}

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
        value: true
});
exports.default = {
        props: ['goodsList', 'goodsTitle']
};}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(44)
var $app_style$ = __webpack_require__(45)
var $app_script$ = __webpack_require__(46)

$app_define$('@app-component/comp-swiper', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "wrapper"
  ],
  "children": [
    {
      "type": "swiper",
      "attr": {
        "autoplay": function () {return this.isAutoPlay},
        "interval": function () {return this.interval},
        "indicator": function () {return this.indicator}
      },
      "classList": [
        "swiper"
      ],
      "style": {
        "indicatorColor": function () {return this.indicatorColor},
        "indicatorSelectedColor": function () {return this.indicatorSelectedColor}
      },
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "swiper-img"
          ],
          "repeat": function () {return this.swiperImageList},
          "children": [
            {
              "type": "image",
              "attr": {
                "src": function () {return this.$item.url}
              }
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = {
  ".wrapper": {
    "width": "750px",
    "display": "flex",
    "flexDirection": "column",
    "alignItems": "center",
    "justifyContent": "center"
  },
  ".swiper": {
    "width": "99%",
    "height": "400px"
  },
  ".swiper .swiper-img image": {
    "width": "100%",
    "height": "100%",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "swiper"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "swiper-img"
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
/* 46 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
        value: true
});
exports.default = {
        props: ['swiperImageList', 'isAutoPlay', 'interval', 'indicator', 'indicatorColor', 'indicatorSelectedColor']
};}

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "category"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "header"
          ],
          "children": [
            {
              "type": "image",
              "attr": {
                "src": "/assets/category-default.png"
              },
              "events": {
                "click": "showCategory"
              }
            },
            {
              "type": "text",
              "attr": {
                "value": "分类"
              },
              "classList": [
                "header-title"
              ]
            },
            {
              "type": "image",
              "attr": {
                "src": "/assets/search.png"
              },
              "events": {
                "click": "search"
              }
            }
          ]
        },
        {
          "type": "list",
          "attr": {
            "scrollpage": "true",
            "id": "list"
          },
          "id": "list",
          "children": [
            {
              "type": "list-item",
              "attr": {
                "type": "banner"
              },
              "children": [
                {
                  "type": "comp-swiper",
                  "attr": {
                    "swiperImageList": function () {return this.bannerList},
                    "isAutoPlay": function () {return this.isAutoPlay},
                    "interval": function () {return this.time},
                    "indicator": function () {return this.isIndicator},
                    "indicatorColor": function () {return this.indicatorColor},
                    "indicatorSelectedColor": function () {return this.indicatorSelectedColor}
                  }
                }
              ]
            },
            {
              "type": "list-item",
              "attr": {
                "type": "hotGoods"
              },
              "children": [
                {
                  "type": "comp-category-info",
                  "attr": {
                    "goodsList": function () {return this.hotGoods},
                    "goodsTitle": function () {return this.title}
                  }
                }
              ]
            },
            {
              "type": "list-item",
              "attr": {
                "type": "lifeGoods"
              },
              "children": [
                {
                  "type": "comp-category-info",
                  "attr": {
                    "goodsList": function () {return this.lifeGoods},
                    "goodsTitle": function () {return this.lifeTitle}
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
/* 48 */
/***/ (function(module, exports) {

module.exports = {
  ".category": {
    "flexDirection": "column",
    "width": "750px",
    "height": "100%",
    "alignItems": "center"
  },
  ".header": {
    "width": "100%",
    "height": "150px",
    "justifyContent": "space-between",
    "alignItems": "center",
    "backgroundColor": "#f2f2f2",
    "paddingTop": "0px",
    "paddingRight": "35px",
    "paddingBottom": "0px",
    "paddingLeft": "35px"
  },
  ".header-title": {
    "textAlign": "center",
    "fontSize": "36px"
  },
  ".header image": {
    "width": "50px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "header"
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
  ".hot-goods": {
    "width": "100%",
    "height": "100%"
  },
  ".content-item": {
    "flexDirection": "column"
  }
}

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _system = $app_require$('@app-module/system.fetch');

var _system2 = _interopRequireDefault(_system);

var _system3 = $app_require$('@app-module/system.prompt');

var _system4 = _interopRequireDefault(_system3);

var _system5 = $app_require$('@app-module/system.router');

var _system6 = _interopRequireDefault(_system5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    data: {
        bannerList: [{ url: '/assets/swiper_1.jpg' }, { url: '/assets/swiper_2.jpg' }, { url: '/assets/swiper_1.jpg' }, { url: '/assets/swiper_2.jpg' }],
        isAutoPlay: true,
        time: 3000,
        isIndicator: true,
        indicatorColor: 'rgba(0, 0, 0, 0.5)',
        indicatorSelectedColor: '#33b4ff',
        hotGoods: [],
        title: '热卖商品',
        lifeGoods: [{ goods_image: '/assets/hufushuang.png', goods_title: '护肤霜', goods_price: '19.9', detail_url: '' }, { goods_image: '/assets/gouwudai.png', goods_title: '购物袋', goods_price: '39.9', detail_url: '' }, { goods_image: '/assets/hufushuang.png', goods_title: '护肤霜', goods_price: '19.9', detail_url: '' }, { goods_image: '/assets/gouwudai.png', goods_title: '购物袋', goods_price: '39.9', detail_url: '' }],
        lifeTitle: '生活用品'
    },
    onInit: function onInit() {
        this.getHotGoods();
    },
    getHotGoods: function getHotGoods() {
        var self = this;
        _system2.default && _system2.default.fetch({
            url: 'http://apk.gou.3gtest.gionee.com/api/apk_index/taoHot',
            success: function success(result) {
                var res = JSON.parse(result.data);
                self.hotGoods = res.data.list;
                console.log(JSON.stringify(self.hotGoods));
            },
            fail: function fail(result, code) {
                console.log('handing fail,code=' + code);
            }
        });
    },
    search: function search() {
        _system4.default.showToast({
            message: '此功能未做'
        });
    },
    showCategory: function showCategory() {
        _system6.default.push({
            uri: '/Category'
        });
    }
};}

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(51)
var $app_style$ = __webpack_require__(52)
var $app_script$ = __webpack_require__(53)

$app_define$('@app-component/comp-me', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "me"
  ],
  "children": [
    {
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
          "type": "list",
          "attr": {},
          "children": [
            {
              "type": "list-item",
              "attr": {
                "type": "order"
              },
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
                      },
                      "events": {
                        "click": "checkAll"
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
              "type": "list-item",
              "attr": {
                "type": "store"
              },
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
                        "value": "我的收藏"
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
              "type": "list-item",
              "attr": {
                "type": "card"
              },
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
                        "value": "我的购物卡"
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
              "type": "list-item",
              "attr": {
                "type": "store"
              },
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
                        "value": "我的足迹"
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
              "type": "list-item",
              "attr": {
                "type": "gongju"
              },
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
                        "value": "我的工具"
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
      ]
    }
  ]
}

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = {
  ".my-info": {
    "display": "flex",
    "flexDirection": "column",
    "width": "750px",
    "paddingBottom": "121px"
  },
  ".set": {
    "height": "80px",
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
/* 53 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _system = $app_require$('@app-module/system.router');

var _system2 = _interopRequireDefault(_system);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    route: function route() {
        _system2.default.push({
            uri: '/Detail'
        });
    },
    checkAll: function checkAll() {
        _system2.default.push({
            uri: '/Address'
        });
    }
};}

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "home-warp"
  ],
  "children": [
    {
      "type": "div",
      "attr": {
        "show": function () {return this.list[this.currentIndex].type=='home'}
      },
      "classList": [
        "content-warp"
      ],
      "children": [
        {
          "type": "comp-home",
          "attr": {},
          "classList": [
            "item-content"
          ],
          "events": {
            "to-detail": "toHome"
          }
        }
      ]
    },
    {
      "type": "div",
      "attr": {
        "show": function () {return this.list[this.currentIndex].type=='category'}
      },
      "classList": [
        "content-warp"
      ],
      "children": [
        {
          "type": "comp-category",
          "attr": {},
          "classList": [
            "item-content"
          ],
          "events": {
            "to-detail": "toCategory"
          }
        }
      ]
    },
    {
      "type": "div",
      "attr": {
        "show": function () {return this.list[this.currentIndex].type=='me'}
      },
      "classList": [
        "content-wrap"
      ],
      "children": [
        {
          "type": "comp-me",
          "attr": {},
          "classList": [
            "item-content"
          ],
          "events": {
            "to-detail": "toMe"
          }
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "bottom"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "line"
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "bottom-content"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "item-menu"
              ],
              "repeat": function () {return this.menuList},
              "events": {
                "click": function (evt) {this.changeTab(this.$idx,evt)}
              },
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": function () {return this.currentIndex===this.$idx?this.$item.selectIcon:this.$item.defaultIcon}
                  },
                  "classList": [
                    "icon"
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.$item.type}
                  },
                  "classList": [
                    "icon-word"
                  ],
                  "style": {
                    "color": function () {return this.currentIndex===this.$idx?'#ff1234':'#666666'}
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
/* 55 */
/***/ (function(module, exports) {

module.exports = {
  ".home-warp": {
    "display": "flex",
    "flexDirection": "column",
    "height": "100%"
  },
  ".content-warp": {
    "width": "750px",
    "flex": 1,
    "paddingBottom": "121px"
  },
  ".bottom": {
    "position": "fixed",
    "left": "0px",
    "bottom": "0px",
    "width": "100%",
    "height": "121px",
    "display": "flex",
    "flexDirection": "column"
  },
  ".line": {
    "width": "100%",
    "height": "0px",
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderStyle": "solid",
    "borderTopColor": "#dddddd",
    "borderRightColor": "#dddddd",
    "borderBottomColor": "#dddddd",
    "borderLeftColor": "#dddddd"
  },
  ".bottom-content": {
    "width": "100%",
    "height": "120px"
  },
  ".item-menu": {
    "width": "33.33%",
    "display": "flex",
    "flexDirection": "column",
    "alignItems": "center",
    "justifyContent": "center"
  },
  ".icon": {
    "width": "50px",
    "height": "50px"
  },
  ".icon-word": {
    "fontSize": "24px",
    "marginTop": "8px"
  }
}

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _system = $app_require$('@app-module/system.router');

var _system2 = _interopRequireDefault(_system);

var _system3 = $app_require$('@app-module/system.prompt');

var _system4 = _interopRequireDefault(_system3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    public: {
        menuList: [{
            type: '首页',
            name: 'home',
            selectIcon: '../assets/home-active.png',
            defaultIcon: '../assets/home-default.png'
        }, {
            type: '分类',
            name: 'list',
            selectIcon: '../assets/category-active.png',
            defaultIcon: '../assets/category-default.png'
        }, {
            type: '我的',
            name: 'me',
            selectIcon: '../assets/me-active.png',
            defaultIcon: '../assets/me-default.png'
        }],
        list: [{
            type: 'home',
            render: true
        }, {
            type: 'category',
            render: false
        }, {
            type: 'me',
            render: false
        }],
        clear: '0',
        currentIndex: 0
    },
    changeTab: function changeTab(index) {
        this.currentIndex = index;
        this.list[index].render = true;
    },
    toHome: function toHome(params) {
        console.log('home', params.detail.id);
        _system2.default.push({
            uri: '/Home',
            params: { id: params.detail.id }
        });
    },
    toCategory: function toCategory(params) {
        console.log('category');
        _system2.default.push({
            uri: '/Category',
            params: { id: params.detail.id }
        });
    },
    toMe: function toMe(params) {
        _system2.default.push({
            uri: '/Me',
            params: { id: params.detail.id }
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
/******/ ]);
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=index.js.map