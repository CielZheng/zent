webpackJsonp([120],{1577:function(n,e,a){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}function s(n){return v.default.createElement(n.tag,(0,k.default)({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function o(n){return v.default.createElement(s,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function c(n){return v.default.createElement(s,{tag:"style",html:n.style})}function p(n,e){for(;n;)return n.offsetTop&&"static"!==getComputedStyle(n).position&&(e+=n.offsetTop),p(n.parentNode,e);return e}Object.defineProperty(e,"__esModule",{value:!0});var r=a(1),l=t(r),i=a(4),u=t(i),d=a(2),m=t(d),f=a(3),h=t(f),g=a(7),k=t(g),y=a(0),v=t(y),z=a(229),_=t(z),b=(function(n){function e(){var n,a,t,s;(0,l.default)(this,e);for(var o=arguments.length,c=Array(o),p=0;p<o;p++)c[p]=arguments[p];return a=t=(0,m.default)(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this].concat(c))),t.state={showCode:!1},t.toggle=function(){t.setState({showCode:!t.state.showCode})},s=a,(0,m.default)(t,s)}(0,h.default)(e,n),(0,u.default)(e,[{key:"render",value:function(){var n=this.state.showCode,e=this.props,a=e.title,t=e.src,o=e.children;return v.default.createElement("div",{className:"zandoc-react-demo"},v.default.createElement("div",{className:"zandoc-react-demo__preview"},o),v.default.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},v.default.createElement("div",{className:"zandoc-react-demo__title"},v.default.createElement("p",null,a||"")),v.default.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle "+(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&v.default.createElement("pre",{className:"zandoc-react-demo__code"},v.default.createElement(s,{tag:"code",html:t,attributes:{className:"language-jsx"}})))}}])}(y.Component),function(n){function e(){return(0,l.default)(this,e),(0,m.default)(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return(0,h.default)(e,n),(0,u.default)(e,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var e=document.querySelector('a[href="'+n+'"]');e&&(0,_.default)(document.documentElement,0,p(e,-9))}}},{key:"render",value:function(){return v.default.createElement("div",{className:"zandoc-react-container",key:null},v.default.createElement(c,{style:""}),v.default.createElement(o,{html:'<h2 class="anchor-heading"><a href="#upgrade-to-3-x-from-2-x">¶</a><a href="javascript:void(0)" id="upgrade-to-3-x-from-2-x" class="anchor-point"></a>Upgrade to 3.x from 2.x</h2>\n<h3 class="anchor-heading"><a href="#javascript-components">¶</a><a href="javascript:void(0)" id="javascript-components" class="anchor-point"></a>Javascript Components</h3>\n<p>Starting from Zent 3.x, we no longer publish separate npm packages for each component.</p>\n<p>So there\'re some usages we no longer support.</p>\n<pre><code class="language-js"><span class="token comment">// These are no longer supported(Button as an example)</span>\n<span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">\'zent-button\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">\'zent/button\'</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Instead, you can use this</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span></code></pre>\n<p>That is to say, only <code>import { Button } from \'zent\';</code> is supported starting from now on.</p>\n<h3 class="anchor-heading"><a href="#umd">¶</a><a href="javascript:void(0)" id="umd" class="anchor-point"></a>UMD</h3>\n<p>The UMD bundle location has changed.</p>\n<pre><code class="language-js"><span class="token comment">// 2.x</span>\n<span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'zent/dist/main.js\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Instead, you write</span>\n<span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'zent/lib/zent-umd.js\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Or if you prefer the minified version</span>\n<span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'zent/lib/zent-umd.min.js\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<h3 class="anchor-heading"><a href="#styles">¶</a><a href="javascript:void(0)" id="styles" class="anchor-point"></a>Styles</h3>\n<p>CSS location has changed.</p>\n<pre><code class="language-js"><span class="token comment">// 2.x</span>\n<span class="token keyword">import</span> <span class="token string">\'zent/lib/index.css\'</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Instead, you write</span>\n<span class="token keyword">import</span> <span class="token string">\'zent/css/index.css\'</span><span class="token punctuation">;</span></code></pre>\n<h3 class="anchor-heading"><a href="#babel-plugin-zent">¶</a><a href="javascript:void(0)" id="babel-plugin-zent" class="anchor-point"></a>babel-plugin-zent</h3>\n<p>Since we no longer maintain separate packages for each component, here is an alternative solution to achieve the same goal.</p>\n<p><code>babel-plugin-zent</code> can rewrite all Zent <code>imports</code> on the fly, you only pay what you use in your project.</p>\n<p>Read the <a href="../guides/babel-plugin-zent">documentation</a>.</p>'}))}}]),e}(y.Component));e.default=b}});