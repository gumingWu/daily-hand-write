import{_ as s,c as a,o as n,d as e}from"./app.300d3cca.js";const u=JSON.parse('{"title":"42.\u89E3\u6790 URL Params \u4E3A\u5BF9\u8C61","description":"","frontmatter":{},"headers":[],"relativePath":"autoPackage/2022-06/42.\u89E3\u6790 URL Params \u4E3A\u5BF9\u8C61.md"}'),l={name:"autoPackage/2022-06/42.\u89E3\u6790 URL Params \u4E3A\u5BF9\u8C61.md"},p=e(`<h1 id="_42-\u89E3\u6790-url-params-\u4E3A\u5BF9\u8C61" tabindex="-1">42.\u89E3\u6790 URL Params \u4E3A\u5BF9\u8C61 <a class="header-anchor" href="#_42-\u89E3\u6790-url-params-\u4E3A\u5BF9\u8C61" aria-hidden="true">#</a></h1><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> url </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">http://www.domain.com/?user=anonymous&amp;id=123&amp;id=456&amp;city=%E5%8C%97%E4%BA%AC&amp;enabled</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">parseParam</span><span style="color:#A6ACCD;">(url)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* \u7ED3\u679C</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">{ user: &#39;anonymous&#39;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  id: [ 123, 456 ], // \u91CD\u590D\u51FA\u73B0\u7684 key \u8981\u7EC4\u88C5\u6210\u6570\u7EC4\uFF0C\u80FD\u88AB\u8F6C\u6210\u6570\u5B57\u7684\u5C31\u8F6C\u6210\u6570\u5B57\u7C7B\u578B</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  city: &#39;\u5317\u4EAC&#39;, // \u4E2D\u6587\u9700\u89E3\u7801</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  enabled: true, // \u672A\u6307\u5B9A\u503C\u5F97 key \u7EA6\u5B9A\u4E3A true</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">*/</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre></div>`,2),t=[p];function o(c,r,i,_,y,d){return n(),a("div",null,t)}var f=s(l,[["render",o]]);export{u as __pageData,f as default};
