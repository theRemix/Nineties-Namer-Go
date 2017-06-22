webpackJsonp([0],[,function(e,t,n){function a(e){n(21)}var s=n(0)(n(5),n(40),a,null,null);e.exports=s.exports},,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),s=n(1),r=n.n(s),c=n(3);n.n(c);a.a.config.productionTip=!1,new a.a({el:"#app",template:"<App/>",components:{App:r.a}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(23),s=n.n(a),r=n(31),c=n.n(r),o=n(30),i=n.n(o),v=n(24),u=n.n(v);t.default={name:"app",components:{About:s.a,Random:c.a,Hash:i.a,Api:u.a}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"about"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(26),s=n.n(a);t.default={name:"api",components:{ApiTabPanel:s.a}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(27),s=n.n(a),r=n(28),c=n.n(r),o=n(29),i=n.n(o);t.default={name:"contents",props:["active-tab"],components:{ContentCurl:s.a,ContentGo:c.a,ContentJs:i.a}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(25),s=n.n(a);t.default={name:"api-tab-panel",components:{Contents:s.a},data:function(){return{activeTab:"curl"}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"content-curl"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"content-go"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"content-js"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"hash",data:function(){return{key:"",hashedName:"",errors:""}},methods:{generate:function(e){var t=this;if(0===this.key.length)return void(this.hashedName="");fetch("/names/"+this.key).then(function(e){if(e.ok)return e.text();throw e}).then(function(e){t.hashedName=e}).catch(function(e){t.errors="An error occurred when requesting the API.",console.error(e)})}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"random",data:function(){return{randomName:"",errors:""}},methods:{generate:function(e){var t=this;fetch("/random").then(function(e){if(e.ok)return e.text();throw e}).then(function(e){t.randomName=e}).catch(function(e){t.errors="An error occurred when requesting the API.",console.error(e)})}}}},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t,n){function a(e){n(15)}var s=n(0)(n(6),n(32),a,"data-v-0292847c",null);e.exports=s.exports},function(e,t,n){function a(e){n(20)}var s=n(0)(n(7),n(37),a,"data-v-71be1649",null);e.exports=s.exports},function(e,t,n){function a(e){n(18)}var s=n(0)(n(8),n(35),a,null,null);e.exports=s.exports},function(e,t,n){function a(e){n(19)}var s=n(0)(n(9),n(36),a,"data-v-5e3de5ed",null);e.exports=s.exports},function(e,t,n){function a(e){n(17)}var s=n(0)(n(10),n(34),a,null,null);e.exports=s.exports},function(e,t,n){var a=n(0)(n(11),n(39),null,null,null);e.exports=a.exports},function(e,t,n){var a=n(0)(n(12),n(38),null,null,null);e.exports=a.exports},function(e,t,n){function a(e){n(22)}var s=n(0)(n(13),n(41),a,"data-v-d05eee22",null);e.exports=s.exports},function(e,t,n){function a(e){n(16)}var s=n(0)(n(14),n(33),a,"data-v-03fddbe4",null);e.exports=s.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"about"},[n("div",{staticClass:"inner"},[n("h1",[n("span",{staticClass:"pink"},[e._v("90s")]),e._v(" "),n("span",{staticClass:"blue"},[e._v("Namer")])]),e._v(" "),n("h3",[e._v("Generate random names from the 90s! "),n("span",[e._v("as a service™")])]),e._v(" "),n("h3",[e._v("Need some randomly generated names? 90s Namer will generate random names based on a hash or any input.")]),e._v(" "),n("p",[n("a",{staticClass:"contribute button",attrs:{href:"https://github.com/theRemix/Nineties-Namer"}},[e._v("Contribute")])])])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"random"},[n("h2",[e._v("Generate a name")]),e._v(" "),n("div",{staticClass:"inner"},[n("div",[n("button",{staticClass:"generate-button",attrs:{type:"button"},on:{click:e.generate}},[e._v("Generate")])]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.randomName,expression:"randomName"}],staticClass:"output",attrs:{placeholder:"result",disabled:""},domProps:{value:e.randomName},on:{input:function(t){t.target.composing||(e.randomName=t.target.value)}}}),e._v(" "),n("div",{staticClass:"errors"},[n("p",[e._v(e._s(e.errors))])])])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content-curl code"},[n("span",{staticClass:"code-syntax-pink curl"},[e._v("curl -L 90s.fun/random")]),e._v(" "),n("span",{staticClass:"code-syntax-blue curl"},[e._v("curl -L 90s.fun/names/v1.2.0-rc8")]),e._v(" "),n("span",{staticClass:"curl"},[e._v("curl -L 90s.fun/names/2017-06-14T05:10:48.935Z")])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tab-contents"},["curl"===e.activeTab?n("content-curl"):e._e(),e._v(" "),"go"===e.activeTab?n("content-go"):e._e(),e._v(" "),"js"===e.activeTab?n("content-js"):e._e()],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tab-panel"},[n("ul",[n("li",{class:{"tab-active":"curl"===e.activeTab},on:{click:function(t){e.activeTab="curl"}}},[e._v("Curl")]),e._v(" "),n("li",{class:{"tab-active":"go"===e.activeTab},on:{click:function(t){e.activeTab="go"}}},[e._v("Go")]),e._v(" "),n("li",{class:{"tab-active":"js"===e.activeTab},on:{click:function(t){e.activeTab="js"}}},[e._v("Js")])]),e._v(" "),n("contents",{staticClass:"inner code-content",attrs:{"active-tab":e.activeTab}}),e._v(" "),"go"===e.activeTab?n("i",[e._v("See: "),n("a",{attrs:{href:"https://github.com/theRemix/Nineties-Namer/blob/master/routes/router.go"}},[e._v("Example on Github")])]):e._e(),e._v(" "),"js"===e.activeTab?n("i",[e._v("See: "),n("a",{attrs:{href:"https://github.com/theRemix/Nineties-Namer/blob/master/ui/src/components/Random.vue"}},[e._v("Random Example on Github")])]):e._e(),e._v(" "),"js"===e.activeTab?n("i",[e._v("See: "),n("a",{attrs:{href:"https://github.com/theRemix/Nineties-Namer/blob/master/ui/src/components/Hash.vue"}},[e._v("Names Example on Github")])]):e._e()],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"api"},[n("api-tab-panel")],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content-js"},[n("div",{staticClass:"code"},[n("span",[n("span",{staticClass:"code-syntax-blue"},[e._v("fetch")]),e._v("("),n("span",{staticClass:"code-syntax-pink"},[e._v(' "https://90s.fun/random" ')]),e._v(")")]),e._v(" "),n("div",[n("span",[e._v("  ."),n("span",{staticClass:"code-syntax-blue"},[e._v("then")]),e._v("("),n("span",{staticClass:"code-syntax-pink"},[e._v(" res ")]),e._v("=> "),n("span",{staticClass:"code-syntax-pink"},[e._v("res")]),e._v(".text() )")]),e._v(" "),n("br"),e._v(" "),n("span",[e._v("  ."),n("span",{staticClass:"code-syntax-blue"},[e._v("then")]),e._v("("),n("span",{staticClass:"code-syntax-pink"},[e._v(" randomName")]),e._v(" => {")]),e._v(" "),n("div",[n("span",[e._v("    "),n("span",{staticClass:"code-syntax-blue"},[e._v("console")]),e._v("."),n("span",{staticClass:"code-syntax-blue"},[e._v("log")]),e._v("( "),n("span",{staticClass:"code-syntax-pink"},[e._v("randomName")]),e._v(" )")])]),e._v(" "),n("span",[e._v("  })")])])]),e._v(" "),n("br"),e._v(" "),n("span",[n("span",{staticClass:"code-syntax-blue"},[e._v("const someKey ")]),e._v("= "),n("span",{staticClass:"code-syntax-pink"},[e._v('"v1.2.0-rc8"')]),e._v(";")]),e._v(" "),n("div",{staticClass:"code"},[n("span",[n("span",{staticClass:"code-syntax-blue"},[e._v("fetch")]),e._v("( "),n("span",{staticClass:"code-syntax-pink"},[e._v("`https://90s.fun/names/")]),e._v("${"),n("span",{staticClass:"code-syntax-blue"},[e._v("someKey")]),e._v("}"),n("span",{staticClass:"code-syntax-pink"},[e._v("`")]),e._v(" )")]),e._v(" "),n("br"),e._v(" "),n("div",[n("span",[e._v("  ."),n("span",{staticClass:"code-syntax-blue"},[e._v("then")]),e._v("( "),n("span",{staticClass:"code-syntax-pink"},[e._v("res")]),e._v(" => "),n("span",{staticClass:"code-syntax-pink"},[e._v("res")]),e._v(".text() )")]),e._v(" "),n("br"),e._v(" "),n("span",[e._v("  ."),n("span",{staticClass:"code-syntax-blue"},[e._v("then")]),e._v("( "),n("span",{staticClass:"code-syntax-pink"},[e._v("generatedName")]),e._v(" => {")]),e._v(" "),n("div",[n("span",[e._v("    "),n("span",{staticClass:"code-syntax-blue"},[e._v("console")]),e._v("."),n("span",{staticClass:"code-syntax-blue"},[e._v("log")]),e._v("("),n("span",{staticClass:"code-syntax-pink"},[e._v(" generatedName")]),e._v(" )")])]),e._v(" "),n("span",[e._v("  })")])])])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content-go"},[n("div",{staticClass:"code"},[n("span",{staticClass:"code-syntax-blue"},[e._v("import ")]),n("span",[e._v("(")]),e._v(" "),n("div",[n("span",{staticClass:"code-syntax-pink"},[e._v('  "fmt"')]),e._v(" "),n("br"),e._v(" "),n("span",{staticClass:"code-syntax-pink"},[e._v('  "github.com/theRemix/go90s"')])]),e._v(" "),n("span",[e._v(")")])]),e._v(" "),n("div",{staticClass:"code"},[n("span",{staticClass:"code-syntax-blue"},[e._v("func ")]),n("span",{staticClass:"code-syntax-pink"},[e._v("main ")]),n("span",[e._v("() {")]),e._v(" "),n("div",[n("span",[e._v("  fmt.Println("),n("span",{staticClass:"code-syntax-blue"},[e._v("go90s.GetRandomName")]),e._v("())")]),e._v(" "),n("br"),e._v(" "),n("span",[e._v("  fmt.Println("),n("span",{staticClass:"code-syntax-blue"},[e._v("go90s.GetName")]),e._v("("),n("span",{staticClass:"code-syntax-pink"},[e._v('"v1.2.0-rc8"')]),e._v("))")])]),e._v(" "),n("span",[e._v("}")])])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("about"),e._v(" "),n("div",{staticClass:"right"},[n("random"),e._v(" "),n("hash"),e._v(" "),n("api")],1)],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hash"},[e._m(0),e._v(" "),n("div",{staticClass:"inner"},[n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.key,expression:"key"}],attrs:{type:"text",placeholder:"your keywords (ex. v1.0.3)"},domProps:{value:e.key},on:{keyup:e.generate,input:function(t){t.target.composing||(e.key=t.target.value)}}})]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.hashedName,expression:"hashedName"}],staticClass:"output",attrs:{placeholder:"result",disabled:""},domProps:{value:e.hashedName},on:{input:function(t){t.target.composing||(e.hashedName=t.target.value)}}}),e._v(" "),n("div",{staticClass:"errors"},[n("p",[e._v(e._s(e.errors))])])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h2",[e._v("Or enter some key "),n("span",{staticClass:"show-for-large"},[e._v("to create a hashed random phrase")])])}]}}],[4]);
//# sourceMappingURL=app.c843ecb06bbf89586d7e.js.map