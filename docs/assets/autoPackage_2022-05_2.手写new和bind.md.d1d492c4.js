import{_ as e,c as n,o as t,d as o}from"./app.a4fe7fc7.js";const f=JSON.parse('{"title":"2.\u624B\u5199new\u548Cbind","description":"","frontmatter":{},"headers":[],"relativePath":"autoPackage/2022-05/2.\u624B\u5199new\u548Cbind.md"}'),i={name:"autoPackage/2022-05/2.\u624B\u5199new\u548Cbind.md"},a=o('<h1 id="_2-\u624B\u5199new\u548Cbind" tabindex="-1">2.\u624B\u5199new\u548Cbind <a class="header-anchor" href="#_2-\u624B\u5199new\u548Cbind" aria-hidden="true">#</a></h1><p>\u5148\u6765\u4E24\u7BC7\u7FBD\u54E5\u5927\u5927\u7684\u6587\u7AE0\u9547\u573A\u5B50</p><ol><li><a href="https://github.com/mqyqingfeng/Blog/issues/13" target="_blank" rel="noopener noreferrer">JavaScript\u6DF1\u5165\u4E4Bnew\u7684\u6A21\u62DF\u5B9E\u73B0</a></li><li><a href="https://github.com/mqyqingfeng/Blog/issues/12" target="_blank" rel="noopener noreferrer">JavaScript\u6DF1\u5165\u4E4Bbind\u7684\u6A21\u62DF\u5B9E\u73B0 </a></li></ol><p>\u8001\u89C4\u77E9\uFF0C\u6211\u4EEC\u5148\u7684\u77E5\u9053\u8FD9\u4E2Aapi\u7684\u573A\u666F\u662F\u4EC0\u4E48 \u4E00\u53E5\u8BDD\u4ECB\u7ECD new\u8FD0\u7B97\u7B26\u53F7:</p><p><strong>new</strong></p><blockquote><p>\u8FD0\u7B97\u7B26\u521B\u5EFA\u4E00\u4E2A\u7528\u6237\u5B9A\u4E49\u7684\u5BF9\u8C61\u7C7B\u578B\u7684\u5B9E\u4F8B\u6216\u5177\u6709\u6784\u9020\u51FD\u6570\u7684\u5185\u7F6E\u5BF9\u8C61\u7C7B\u578B\u4E4B\u4E00</p></blockquote><p>\u4E00\u53E5\u8BDD\u4ECB\u7ECD bind:</p><p><strong>bind()</strong></p><blockquote><p>\u65B9\u6CD5\u4F1A\u521B\u5EFA\u4E00\u4E2A\u65B0\u51FD\u6570\u3002\u5F53\u8FD9\u4E2A\u65B0\u51FD\u6570\u88AB\u8C03\u7528\u65F6\uFF0Cbind() \u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u5C06\u4F5C\u4E3A\u5B83\u8FD0\u884C\u65F6\u7684 this\uFF0C\u4E4B\u540E\u7684\u4E00\u5E8F\u5217\u53C2\u6570\u5C06\u4F1A\u5728\u4F20\u9012\u7684\u5B9E\u53C2\u524D\u4F20\u5165\u4F5C\u4E3A\u5B83\u7684\u53C2\u6570\u3002(\u6765\u81EA\u4E8E MDN )</p></blockquote><p>\u6211\u4EEC\u81EA\u5DF1\u5199\u7684bind\u5176\u5B9E\u662F\u4E00\u79CDpolyfill\u4EE3\u7801\uFF08\u4E3B\u8981\u7528\u6765\u505A\u5BF9\u6D4F\u89C8\u5668\u517C\u5BB9\u7684\u4EE3\u7801\uFF0C\u53EF\u4EE5\u4F7F\u7528polyfill\u4EE3\u7801\u5BF9\u6D4F\u89C8\u5668\u8FDB\u884C\u517C\u5BB9\uFF0C\u5728\u65E7\u7684\u6D4F\u89C8\u5668\u4E2D\u5B9E\u73B0\u65B0\u7684\u529F\u80FD\uFF09\uFF0C\u6211\u4EEC\u5199\u7684\u8FD9\u4E2Abind\u4EE3\u7801\u5176\u5B9E\u4E0Ees5\u7684\u5185\u7F6Ebind\u51FD\u6570\u5E76\u4E0D\u5B8C\u5168\u76F8\u7B49\uFF0C<strong>\u56E0\u4E3Apolyfill\u5E76\u4E0D\u662F\u5185\u7F6E\u51FD\u6570\uFF0C\u6240\u4EE5\u65E0\u6CD5\u521B\u5EFA\u4E00\u4E2A\u4E0D\u5305\u542B.prototype\u7684bind\u51FD\u6570</strong>\uFF0C\u56E0\u6B64\u4F1A\u5177\u6709\u4E00\u4E9B\u526F\u4F5C\u7528\uFF0C\u6240\u4EE5\u6211\u4EEC\u5728new\u4E2D\u4F7F\u7528\u786C\u7ED1\u5B9A\u51FD\u6570\u5E76\u4E14\u4EE5\u6765polyfill\u51FD\u6570\u7684\u65F6\u5019\uFF0C\u8981\u975E\u5E38\u5C0F\u5FC3</p><p>\u9898\u76EE\uFF1A</p><ol><li>\u56E0\u4E3A new \u662F\u5173\u952E\u5B57\uFF0C\u6240\u4EE5\u65E0\u6CD5\u50CF bind \u51FD\u6570\u4E00\u6837\u76F4\u63A5\u8986\u76D6\uFF0C\u6240\u4EE5\u6211\u4EEC\u5199\u4E00\u4E2A\u51FD\u6570\uFF0C\u547D\u540D\u4E3A objectFactory\uFF0C\u6765\u6A21\u62DF new \u7684\u6548\u679C</li><li>\u6A21\u62DFbind\u7684\u5B9E\u73B0</li></ol>',12),r=[a];function l(p,s,_,d,c,b){return t(),n("div",null,r)}var h=e(i,[["render",l]]);export{f as __pageData,h as default};
