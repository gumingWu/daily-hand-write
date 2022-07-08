import{_ as n}from"./chunks/IssueInfo.e9cf9a9a.js";import{_ as l,c as p,d as o,a as s,b as e,e as t,o as c}from"./app.efce2d2a.js";const E=JSON.parse('{"title":"45.\u5B9E\u73B0Scheduler","description":"","frontmatter":{},"headers":[],"relativePath":"autoPackage/2022-06/45.\u5B9E\u73B0Scheduler.md"}'),r={name:"autoPackage/2022-06/45.\u5B9E\u73B0Scheduler.md"},y=s("h1",{id:"_45-\u5B9E\u73B0scheduler",tabindex:"-1"},[e("45.\u5B9E\u73B0Scheduler "),s("a",{class:"header-anchor",href:"#_45-\u5B9E\u73B0scheduler","aria-hidden":"true"},"#")],-1),D=t(`<div class="language-js"><span class="copy"></span><pre><code><span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Scheduler</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">add</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> timeout </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">time</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">resolve</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">setTimeout</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">resolve</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">time</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> scheduler </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Scheduler</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> addTask </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">time</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> order</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">scheduler</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">timeout</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">time</span><span style="color:#F07178;">))</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">order</span><span style="color:#F07178;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">addTask</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1000</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">addTask</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">500</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">addTask</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">300</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">3</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">addTask</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">400</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">4</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// output: 2 3 1 4</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u4E00\u5F00\u59CB\uFF0C1\u30012\u4E24\u4E2A\u4EFB\u52A1\u8FDB\u5165\u961F\u5217</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 500ms\u65F6\uFF0C2\u5B8C\u6210\uFF0C\u8F93\u51FA2\uFF0C\u4EFB\u52A13\u8FDB\u961F</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 800ms\u65F6\uFF0C3\u5B8C\u6210\uFF0C\u8F93\u51FA3\uFF0C\u4EFB\u52A14\u8FDB\u961F</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 1000ms\u65F6\uFF0C1\u5B8C\u6210\uFF0C\u8F93\u51FA1</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 1200ms\u65F6\uFF0C4\u5B8C\u6210\uFF0C\u8F93\u51FA4</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p><a href="https://www.nowcoder.com/discuss/599576?channel=-1&amp;source_id=profile_follow_post_nctrack" target="_blank" rel="noopener noreferrer">\u53C2\u8003\u94FE\u63A5</a></p>`,2);function F(A,C,i,d,_,u){const a=n;return c(),p("div",null,[y,o(a,{"created-at":"2022-06-16T12:04:21Z","updated-at":"2022-07-07T08:44:43Z",creator:"Baozhen-Yin"}),D])}var f=l(r,[["render",F]]);export{E as __pageData,f as default};
