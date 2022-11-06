import{_ as o,r as p,o as l,c,a as n,b as s,d as e,e as t}from"./app.d72e4806.js";const i={},d=t('<h1 id="\u5F00\u59CB" tabindex="-1"><a class="header-anchor" href="#\u5F00\u59CB" aria-hidden="true">#</a> \u5F00\u59CB</h1><h2 id="\u51C6\u5907" tabindex="-1"><a class="header-anchor" href="#\u51C6\u5907" aria-hidden="true">#</a> \u51C6\u5907</h2><ul><li>\u57FA\u7840 C# \u8BED\u6CD5</li><li>\u57FA\u7840 .NET \u5F00\u53D1</li></ul><h2 id="\u914D\u7F6E\u5F00\u53D1\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u5F00\u53D1\u73AF\u5883" aria-hidden="true">#</a> \u914D\u7F6E\u5F00\u53D1\u73AF\u5883</h2><ol><li>\u4E0B\u8F7D\u4E00\u4E2A\u4EE3\u7801\u7F16\u8F91\u5668\u3002\uFF08\u6211\u4F7F\u7528\u7684\u662F\u88C5\u4E86 C# \u63D2\u4EF6\u7684 Visual Studio Code\uFF0C\u4F46\u662F\u63A8\u8350\u4F7F\u7528 Visual Studio\uFF09</li></ol>',5),u={href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"},r={href:"https://visualstudio.microsoft.com/downloads/",target:"_blank",rel:"noopener noreferrer"},k=t(`<ol start="2"><li><p>\u4E0B\u8F7D .NET \u652F\u6301\u5E93\u3002</p><p>\u6CA1\u6709\u8FD9\u4E2A\u4F60\u662F\u600E\u4E48\u73A9\u7684\u851A\u84DD\uFF1F\uFF1F</p></li><li><p>\u914D\u7F6E\u851A\u84DD\u8DEF\u5F84\u73AF\u5883\u53D8\u91CF <code>CelestePrefix</code>\u3002</p><p>\u4EE5 Windows \u7CFB\u7EDF\u4E3A\u4F8B\uFF0C\u4F60\u7684\u851A\u84DD\u5E94\u8BE5\u4F4D\u4E8E <code>\${CelestePrefix}/Celeste.exe</code>\u3002</p></li><li><p>\u4E0B\u8F7D\u851A\u84DD\u6A21\u7EC4\u6A21\u677F\u3002</p><p>\u7EC8\u7AEF\u8FD0\u884C <code>dotnet new --install CelesteMod.Templates</code>\u3002</p></li><li><p>\u65B0\u5EFA\u4F60\u7684\u9879\u76EE\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mkdir MyCoolMod # \u65B0\u5EFA\u6587\u4EF6\u5939\uFF0C\u5176\u4E2D MyCoolMod \u4E3A\u4F60\u7684 Mod \u540D\u3002
cd MyCoolMod # \u8FDB\u5165\u8FD9\u4E2A\u6587\u4EF6\u5939
dotnet new celestemod # \u521B\u5EFA\u851A\u84DD\u6A21\u7EC4\u9879\u76EE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u5728\u9879\u76EE\u6839\u76EE\u5F55\u521B\u5EFA\u6784\u5EFA\u811A\u672C\u3002</p><p><code>build.bat</code> (Windows)</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>del MyCoolMod.zip MyCoolMod.dll
dotnet build MyCoolMod.csproj
zip MyCoolMod.zip -r LICENSE.txt everest.yaml Ahorn Dialog Graphics Maps MyCoolMod.dll debug.bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>build.sh</code> (Linux / Mac)</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>rm MyCoolMod.zip MyCoolMod.dll
dotnet build MyCoolMod.csproj
zip MyCoolMod.zip -r LICENSE.txt everest.yaml Ahorn Dialog Graphics Maps MyCoolMod.dll debug.bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u914D\u7F6E\u851A\u84DD\u70ED\u91CD\u8F7D\uFF1A\u5728 <code>\${CelestePrefix}/Saves/modsettings-Everest.celeste</code> \u4E2D\uFF0C\u4F60\u53EF\u4EE5\u628A <code>CodeReload_WIP</code> \u6539\u4E3A true\uFF0C\u4F7F\u5F97\u53EF\u4EE5\u5728\u4E0D\u91CD\u542F\u851A\u84DD\u7684\u60C5\u51B5\u4E0B\u91CD\u65B0\u52A0\u8F7D\u6A21\u7EC4\u548C\u5730\u56FE\uFF08\u9700\u5199\u597D <code>Unload</code> \u65B9\u6CD5\uFF0C\u4E0D\u7136\u4F1A\u51FA\u73B0\u5404\u79CD\u9519\u8BEF\uFF09\u3002</p><p><code>build.bat</code> (Windows)</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>del MyCoolMod.zip MyCoolMod.dll
dotnet build MyCoolMod.csproj
zip MyCoolMod.zip -r LICENSE.txt everest.yaml Ahorn Dialog Graphics Maps MyCoolMod.dll debug.bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u4F7F\u7528\u4F60\u7684\u4EE3\u7801\u7F16\u8F91\u5668\u6253\u5F00\u9879\u76EE\u3002</p></li></ol><h3 id="\u8865\u5168\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#\u8865\u5168\u4F9D\u8D56" aria-hidden="true">#</a> \u8865\u5168\u4F9D\u8D56</h3><p>\u6709\u7684\u851A\u84DD\u662F xna \u7684\uFF0C\u6709\u7684\u851A\u84DD\u662F fna \u7684\uFF0C\u5982\u679C\u76F4\u63A5\u628A\u4F60\u7684\u851A\u84DD\u6DFB\u52A0\u5230\u4F9D\u8D56\u4E2D\uFF0C\u6709\u53EF\u80FD\u4F1A\u7F3A\u5931\u4E00\u90E8\u5206\u3002</p>`,3),v={href:"https://github.com/EverestAPI/Everest/releases/download/stable-1.3650.0/lib-stripped.zip",target:"_blank",rel:"noopener noreferrer"},m=t(`<p>\u6211\u628A\u4ED6\u653E\u5728\u9879\u76EE\u6839\u76EE\u5F55\u7684 <code>lib/stripped/</code> \u76EE\u5F55\u91CC\uFF0C\u5E76\u5728 <code>MyCoolMod.csproj</code> \u91CC\u6DFB\u52A0\u4F9D\u8D56\uFF1A</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ItemGroup</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Reference</span> <span class="token attr-name">Include</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lib\\stripped\\Celeste.exe<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Private</span><span class="token punctuation">&gt;</span></span>false<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Private</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Reference</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Reference</span> <span class="token attr-name">Include</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lib\\stripped\\MMHOOK_Celeste.dll<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Private</span><span class="token punctuation">&gt;</span></span>false<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Private</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Reference</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Reference</span> <span class="token attr-name">Include</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lib\\stripped\\FNA.dll<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Private</span><span class="token punctuation">&gt;</span></span>false<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Private</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Reference</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ItemGroup</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7F16\u5199\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u7F16\u5199\u4EE3\u7801" aria-hidden="true">#</a> \u7F16\u5199\u4EE3\u7801</h2><h3 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h3><p><code>Code/MyCoolModModule.cs</code> \u662F\u4F60\u6A21\u7EC4\u7684\u4E3B\u7C7B\uFF0C\u4F60\u9700\u8981\u5728\u8FD9\u91CC\u58F0\u660E\u4F60\u8981\u7528\u7684\u6E38\u620F\u7EC4\u4EF6\u3002</p><p>\u5728 <code>Code</code> \u6587\u4EF6\u5939\u4E0B\u521B\u5EFA\u4E00\u4E2A\u7C7B\uFF0C\u53EF\u4EE5\u547D\u540D\u4E3A <code>MyCoolModManager.cs</code>\uFF0C\u5199\u4E0B\u5982\u4E0B\u4EE3\u7801\uFF1A</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token comment">// Using \u81EA\u5DF1\u8865\u5168</span>

<span class="token keyword">namespace</span> <span class="token namespace">MyCoolMod<span class="token punctuation">.</span>Code</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyCoolModManager</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">GameComponent</span></span> <span class="token punctuation">{</span>
        <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Game</span> game<span class="token punctuation">;</span>

        <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Player</span> player<span class="token punctuation">;</span>
        <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Level</span> level<span class="token punctuation">;</span>

        <span class="token keyword">public</span> <span class="token function">MyCoolModManager</span><span class="token punctuation">(</span><span class="token class-name">Game</span> game<span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword">base</span><span class="token punctuation">(</span>game<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            MyCoolModManager<span class="token punctuation">.</span>game <span class="token operator">=</span> game<span class="token punctuation">;</span>
            Everest<span class="token punctuation">.</span>Events<span class="token punctuation">.</span>Level<span class="token punctuation">.</span>OnLoadLevel <span class="token operator">+=</span> onLoadLevel<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Unload</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            Everest<span class="token punctuation">.</span>Events<span class="token punctuation">.</span>Level<span class="token punctuation">.</span>OnLoadLevel <span class="token operator">-=</span> onLoadLevel<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Update</span><span class="token punctuation">(</span><span class="token class-name">GameTime</span> gameTime<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token punctuation">}</span>
        
        <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">onLoadLevel</span><span class="token punctuation">(</span><span class="token class-name">Level</span> level<span class="token punctuation">,</span> <span class="token class-name">Player<span class="token punctuation">.</span>IntroTypes</span> intro<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">bool</span></span> fromLoader<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            MyCoolModManager<span class="token punctuation">.</span>level <span class="token operator">=</span> level<span class="token punctuation">;</span>
            MyCoolModManager<span class="token punctuation">.</span>player <span class="token operator">=</span> level<span class="token punctuation">.</span>Tracker<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetEntity</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Player<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u5728 <code>MyCoolModule</code> \u91CC\u5B9E\u4F8B\u5316 <code>MyCoolModManager</code>\u3002</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Controller</span> controller<span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Load</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    controller <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Controller</span><span class="token punctuation">(</span>Celeste<span class="token punctuation">.</span>Instance<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6B64\u65F6\u4F60\u5E94\u8BE5\u80FD\u6B63\u786E\u83B7\u53D6\u5230\u73A9\u5BB6\u5BF9\u8C61\u4E86\u3002</p><h3 id="\u67E5\u770B\u6E38\u620F\u6E90\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6E38\u620F\u6E90\u4EE3\u7801" aria-hidden="true">#</a> \u67E5\u770B\u6E38\u620F\u6E90\u4EE3\u7801</h3><p>WIP</p>`,12);function b(g,h){const a=p("ExternalLinkIcon");return l(),c("div",null,[d,n("ul",null,[n("li",null,[n("a",u,[s("Visual Studio Code \u4E0B\u8F7D\u5730\u5740"),e(a)])]),n("li",null,[n("a",r,[s("Visual Studio \u4E0B\u8F7D\u5730\u5740"),e(a)])])]),k,n("p",null,[s("\u53EF\u4EE5\u4E0B\u8F7D "),n("a",v,[s("stripped lib"),e(a)]),s(" \u5E76\u6DFB\u52A0\u5230\u4F9D\u8D56\u3002\u8FD9\u91CC\u9762\u53EA\u6709\u5B9A\u4E49\u6CA1\u6709\u5B9E\u73B0\uFF0C\u6240\u4EE5\u53EF\u4EE5\u4E0A\u4F20\u5230\u7F51\u4E0A\u3002\uFF08\u4E0D\u8981\u628A\u53CD\u7F16\u8BD1\u540E\u7684\u851A\u84DD\u6E90\u7801\u4E0A\u4F20\u5230\u4EFB\u4F55\u5730\u65B9\uFF01\uFF01\uFF01\uFF09")]),m])}const y=o(i,[["render",b],["__file","getstarted.html.vue"]]);export{y as default};