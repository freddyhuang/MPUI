<template><h1 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始" aria-hidden="true">#</a> 快速开始</h1>
<h4 id="安装组件库" tabindex="-1"><a class="header-anchor" href="#安装组件库" aria-hidden="true">#</a> 安装组件库</h4>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i MPUI
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h4 id="引用组件库" tabindex="-1"><a class="header-anchor" href="#引用组件库" aria-hidden="true">#</a> 引用组件库</h4>
<blockquote>
<p>在main.js中引用组件库</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token comment">// 全局引进</span>
<span class="token keyword">import</span> <span class="token string">'mp-fast-ui/dist/css/index.css'</span>
<span class="token keyword">import</span> <span class="token constant">MPUI</span> <span class="token keyword">from</span> <span class="token string">'mp-fast-ui'</span><span class="token punctuation">;</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token constant">MPUI</span><span class="token punctuation">)</span>

<span class="token comment">// 按需引进</span>
<span class="token keyword">import</span> <span class="token string">'mp-fast-ui/dist/css/demo.css'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Demo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'mp-fast-ui'</span><span class="token punctuation">;</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Demo<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></template>
