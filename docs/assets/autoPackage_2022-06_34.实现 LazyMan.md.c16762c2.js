import{_ as s,c as a,o as n,d as l}from"./app.a4fe7fc7.js";const C=JSON.parse('{"title":"34.\u5B9E\u73B0 LazyMan","description":"","frontmatter":{},"headers":[],"relativePath":"autoPackage/2022-06/34.\u5B9E\u73B0 LazyMan.md"}'),p={name:"autoPackage/2022-06/34.\u5B9E\u73B0 LazyMan.md"},o=l(`<h1 id="_34-\u5B9E\u73B0-lazyman" tabindex="-1">34.\u5B9E\u73B0 LazyMan <a class="header-anchor" href="#_34-\u5B9E\u73B0-lazyman" aria-hidden="true">#</a></h1><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#82AAFF;">LazyMan</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hank</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u8F93\u51FA:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Hi! This is Hank!</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">LazyMan</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hank</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sleep</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">eat</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">dinner</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u8F93\u51FA:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Hi! This is Hank!</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// //\u7B49\u5F853\u79D2..</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Wake up after 3</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Eat dinner~</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">LazyMan</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hank</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">eat</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">dinner</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">eat</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">supper</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u8F93\u51FA:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Hi This is Hank!</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Eat dinner~</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Eat supper~</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">LazyMan</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hank</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sleepFirst</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">eat</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">dinner</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sleep</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">eat</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">supper</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u8F93\u51FA:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// //\u7B49\u5F852\u79D2..</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Wake up after 2</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Hi This is Hank!</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Eat dinner~</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// //\u7B49\u5F853\u79D2..</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Wake up after 2</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Eat supper~</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u4EE5\u6B64\u7C7B\u63A8</span></span>
<span class="line"><span style="color:#A6ACCD;">\u590D\u5236\u4EE3\u7801</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre></div>`,2),e=[o];function t(c,r,y,i,D,F){return n(),a("div",null,e)}var E=s(p,[["render",t]]);export{C as __pageData,E as default};
