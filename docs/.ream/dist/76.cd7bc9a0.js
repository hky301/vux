webpackJsonp([76],{121:function(s,t,a){s.exports=a(441)},277:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={head:{}}},441:function(s,t,a){var n=a(4)(a(277),a(542),null,null,null);n.options.__file="/Users/lizheng/workspace/vux-design/vux-doc/docs/node_modules/v-markdown-loader/_cache/swipeout-103.vue",n.esModule&&Object.keys(n.esModule).some(function(s){return"default"!==s&&"__"!==s.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] swipeout-103.vue: functional components are not supported with templates, they should use render functions."),s.exports=n.exports},542:function(s,t,a){s.exports={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[a("h3",[s._v("Swipeout_COM")]),s._v(" "),a("img",{attrs:{width:"100",src:"http://qr.topscan.com/api.php?text=https%3A%2F%2Fvux.li%2Fdemos%2Fv2%2F%23%2Fcomponent%2Fswipeout"}}),s._v(" "),s._m(0),s._v(" "),a("hr"),s._v(" "),a("h4",[s._v("演示")]),s._v(" "),a("div",{staticStyle:{width:"377px",height:"667px",display:"inline-block",border:"1px dashed #ececec","border-radius":"5px",overflow:"hidden"}},[a("iframe",{attrs:{src:"https://vux.li/demos/v2/#/component/swipeout",width:"375",height:"667",border:"0",frameborder:"0"}})],1),s._v(" "),a("h4",[s._v("demo 代码")]),s._v(" "),a("p",{staticClass:"tip"},[s._v("下面的$t是Demo的i18n使用的翻译函数，一般情况下可以直接使用字符串。另外，下面代码隐藏了i18n标签部分的代码。")]),s._v(" "),s._m(1),s._v(" "),a("h4",[s._v("Github Issue")])])},staticRenderFns:[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[a("a",{staticStyle:{"font-size":"12px",color:"#888"},attrs:{href:"https://vux.li/demos/v2/#/component/swipeout",target:"_blank"}},[s._v("demo 原始链接：https://vux.li/demos/v2/#/component/swipeout")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"vux-1px-t"')]),s._v(">")]),s._v("\n    \n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("swipeout")]),s._v(">")]),s._v("\n\n      "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("swipeout-item")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("@on-close")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v("\"handleEvents('on-close')\"")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("@on-open")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v("\"handleEvents('on-open')\"")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("transition-mode")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"follow"')]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("slot")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"right-menu"')]),s._v(">")]),s._v("\n          "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("swipeout-button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("@click.native")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v("\"onButtonClick('fav')\"")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"primary"')]),s._v(">")]),a("span",[s._v("{{")]),s._v("$t('Yes')"),a("span",[s._v("}}")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("swipeout-button")]),s._v(">")]),s._v("\n          "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("swipeout-button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("@click.native")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v("\"onButtonClick('delete')\"")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"warn"')]),s._v(">")]),a("span",[s._v("{{")]),s._v("$t('Right')"),a("span",[s._v("}}")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("swipeout-button")]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("slot")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"content"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"demo-content vux-1px-t"')]),s._v(">")]),s._v("\n        "),a("span",[s._v("{{")]),s._v("$t('JavaScript is the best language')"),a("span",[s._v("}}")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("swipeout-item")]),s._v(">")]),s._v("\n\n      "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("swipeout-item")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":threshold")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('".5"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("underlay-color")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"#ccc"')]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("slot")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"right-menu"')]),s._v(">")]),s._v("\n          "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("swipeout-button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("@click.native")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v("\"onButtonClick('fav')\"")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("background-color")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"#336DD6"')]),s._v(">")]),a("span",[s._v("{{")]),s._v("$t('Fav')"),a("span",[s._v("}}")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("swipeout-button")]),s._v(">")]),s._v("\n          "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("swipeout-button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("@click.native")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v("\"onButtonClick('delete')\"")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("background-color")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"#D23934"')]),s._v(">")]),a("span",[s._v("{{")]),s._v("$t('Delete')"),a("span",[s._v("}}")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("swipeout-button")]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("slot")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"content"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"demo-content vux-1px-tb"')]),s._v(">")]),s._v("\n        "),a("span",[s._v("{{")]),s._v("$t('threshold = 0.5')"),a("span",[s._v("}}")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("swipeout-item")]),s._v(">")]),s._v("\n\n      "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("swipeout-item")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":disabled")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"disabled"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("ref")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"swipeoutItem"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":right-menu-width")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"210"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":sensitivity")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"15"')]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("slot")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"right-menu"')]),s._v(">")]),s._v("\n          "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("swipeout-button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("@click.native")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v("\"onButtonClick('fav')\"")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"primary"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":width")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"70"')]),s._v(">")]),a("span",[s._v("{{")]),s._v("$t('Fav')"),a("span",[s._v("}}")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("swipeout-button")]),s._v(">")]),s._v("\n          "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("swipeout-button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("@click.native")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v("\"onButtonClick('delete')\"")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"warn"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":width")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"70"')]),s._v(">")]),a("span",[s._v("{{")]),s._v("$t('Delete')"),a("span",[s._v("}}")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("swipeout-button")]),s._v(">")]),s._v("\n          "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("swipeout-button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("@click.native")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v("\"onButtonClick('ignore')\"")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"default"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":width")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"70"')]),s._v(">")]),a("span",[s._v("{{")]),s._v("$t('Ignore')"),a("span",[s._v("}}")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("swipeout-button")]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n\n        "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("slot")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"left-menu"')]),s._v(">")]),s._v("\n          "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("swipeout-button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("@click.native")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v("\"onButtonClick('fav')\"")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"primary"')]),s._v(">")]),a("span",[s._v("{{")]),s._v("$t('Fav')"),a("span",[s._v("}}")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("swipeout-button")]),s._v(">")]),s._v("\n          "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("swipeout-button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("@click.native")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v("\"onButtonClick('delete')\"")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"warn"')]),s._v(">")]),a("span",[s._v("{{")]),s._v("$t('Delete')"),a("span",[s._v("}}")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("swipeout-button")]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n\n        "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("slot")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"content"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"demo-content vux-1px-b"')]),s._v(">")]),s._v("\n        "),a("span",[s._v("{{")]),s._v("$t('now ' + (disabled ? 'disabled' : 'enabled'))"),a("span",[s._v("}}")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("swipeout-item")]),s._v(">")]),s._v("\n\n    "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("swipeout")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n    \n\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("style")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"padding:15px;"')]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("x-button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("@click.native")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"disabled = false"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"primary"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":disabled")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"!disabled"')]),s._v(">")]),a("span",[s._v("{{")]),s._v(" $t('set Enabled') "),a("span",[s._v("}}")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("x-button")]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("x-button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("@click.native")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"disabled = true"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"warn"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":disabled")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"disabled"')]),s._v(">")]),a("span",[s._v("{{")]),s._v(" $t('set Disabled') "),a("span",[s._v("}}")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("x-button")]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("x-button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("@click.native")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v("\"$refs.swipeoutItem.open('left')\"")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"primary"')]),s._v(">")]),a("span",[s._v("{{")]),s._v(" $t('open left menu') "),a("span",[s._v("}}")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("x-button")]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("x-button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("@click.native")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v("\"$refs.swipeoutItem.open('right')\"")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"primary"')]),s._v(">")]),a("span",[s._v("{{")]),s._v(" $t('open right menu') "),a("span",[s._v("}}")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("x-button")]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("x-button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("@click.native")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"$refs.swipeoutItem.close()"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"warn"')]),s._v(">")]),a("span",[s._v("{{")]),s._v(" $t('close menu') "),a("span",[s._v("}}")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("x-button")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n\n\n\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),a("span",{staticClass:"javascript"},[s._v("\n"),a("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" { Swipeout, SwipeoutItem, SwipeoutButton, XButton } "),a("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v("'vux'")]),s._v("\n\n"),a("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n  "),a("span",{staticClass:"hljs-attr"},[s._v("components")]),s._v(": {\n    Swipeout,\n    SwipeoutItem,\n    SwipeoutButton,\n    XButton\n  },\n  "),a("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": {\n    onButtonClick (type) {\n      alert("),a("span",{staticClass:"hljs-string"},[s._v("'on button click '")]),s._v(" + type)\n    },\n    handleEvents (type) {\n      "),a("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),a("span",{staticClass:"hljs-string"},[s._v("'event: '")]),s._v(", type)\n    }\n  },\n  data () {\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n      "),a("span",{staticClass:"hljs-attr"},[s._v("disabled")]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v("\n    }\n  }\n}\n")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("style")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("lang")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"less"')]),s._v(">")]),a("span",{staticClass:"css"},[s._v("\n"),a("span",{staticClass:"hljs-selector-class"},[s._v(".demo-content")]),s._v(" {\n  "),a("span",{staticClass:"hljs-attribute"},[s._v("padding")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("10px")]),s._v(" "),a("span",{staticClass:"hljs-number"},[s._v("10px")]),s._v(";\n}\n")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("style")]),s._v(">")]),s._v("\n\n")])])}]},s.exports.render._withStripped=!0}});
//# sourceMappingURL=76.cd7bc9a0.js.map