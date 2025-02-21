import{_ as i,r as p,o as l,c as u,a,b as s,d as n,e}from"./app-CoTSH6Di.js";const r={},c=e(`<h1 id="metrics" tabindex="-1"><a class="header-anchor" href="#metrics"><span>Metrics</span></a></h1><p>更直接（希望更好）的统计导出方式。</p><h2 id="相关配置" tabindex="-1"><a class="header-anchor" href="#相关配置"><span>相关配置</span></a></h2><p>在基础配置中增加 metrics</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code>    <span class="token property">&quot;metrics&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Metrics&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;listen&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1:11111&quot;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>tag</code>: string</p></blockquote><p>metrics 对应的出站代理 tag, 通过设置任意门入站+路由将任意门指向此出站即可通过该任意门访问。</p><blockquote><p><code>listen</code>: string</p></blockquote><p>更简单的方法，直接监听一个地址端口提供服务。</p><p>设置该字段时若 tag 为空会自动设置为 <code>Metrics</code>, 如果二者均未设置核心会启动失败。</p><h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2><h3 id="pprof" tabindex="-1"><a class="header-anchor" href="#pprof"><span>pprof</span></a></h3><p>访问 <code>http://127.0.0.1:11111/debug/pprof/</code> 或者使用 go tool pprof 进行调试。</p><p>反馈内存占用过多/内存泄露问题需要提供 <code>/debug/pprof/heap</code> 的文件</p><h3 id="expvars" tabindex="-1"><a class="header-anchor" href="#expvars"><span>expvars</span></a></h3><p>访问 <code>http://127.0.0.1:11111/debug/vars</code></p><p>包含的变量:</p><ul><li><code>stats</code> 包括所有的 inbound outbound user 数据</li><li><code>observatory</code> 包含了 observatory 观测结果</li></ul>`,18),d={href:"https://github.com/yichya/luci-app-xray",target:"_blank",rel:"noopener noreferrer"},v=e(`<details><summary>点击查看</summary><br><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;observatory&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;tcp_outbound&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;alive&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token property">&quot;delay&quot;</span><span class="token operator">:</span> <span class="token number">782</span><span class="token punctuation">,</span>
            <span class="token property">&quot;outbound_tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tcp_outbound&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;last_seen_time&quot;</span><span class="token operator">:</span> <span class="token number">1648477189</span><span class="token punctuation">,</span>
            <span class="token property">&quot;last_try_time&quot;</span><span class="token operator">:</span> <span class="token number">1648477189</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;udp_outbound&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;alive&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token property">&quot;delay&quot;</span><span class="token operator">:</span> <span class="token number">779</span><span class="token punctuation">,</span>
            <span class="token property">&quot;outbound_tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;udp_outbound&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;last_seen_time&quot;</span><span class="token operator">:</span> <span class="token number">1648477191</span><span class="token punctuation">,</span>
            <span class="token property">&quot;last_try_time&quot;</span><span class="token operator">:</span> <span class="token number">1648477191</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;stats&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;inbound&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;api&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;downlink&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;uplink&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;dns_server_inbound_5300&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;downlink&quot;</span><span class="token operator">:</span> <span class="token number">14286</span><span class="token punctuation">,</span>
                <span class="token property">&quot;uplink&quot;</span><span class="token operator">:</span> <span class="token number">5857</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;http_inbound&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;downlink&quot;</span><span class="token operator">:</span> <span class="token number">74460</span><span class="token punctuation">,</span>
                <span class="token property">&quot;uplink&quot;</span><span class="token operator">:</span> <span class="token number">10231</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;https_inbound&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;downlink&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;uplink&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;metrics&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;downlink&quot;</span><span class="token operator">:</span> <span class="token number">6327</span><span class="token punctuation">,</span>
                <span class="token property">&quot;uplink&quot;</span><span class="token operator">:</span> <span class="token number">1347</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;socks_inbound&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;downlink&quot;</span><span class="token operator">:</span> <span class="token number">19925615</span><span class="token punctuation">,</span>
                <span class="token property">&quot;uplink&quot;</span><span class="token operator">:</span> <span class="token number">5512</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;tproxy_tcp_inbound&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;downlink&quot;</span><span class="token operator">:</span> <span class="token number">4739161</span><span class="token punctuation">,</span>
                <span class="token property">&quot;uplink&quot;</span><span class="token operator">:</span> <span class="token number">1568869</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;tproxy_udp_inbound&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;downlink&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;uplink&quot;</span><span class="token operator">:</span> <span class="token number">2608142</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;outbound&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;blackhole_outbound&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;downlink&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;uplink&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;direct&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;downlink&quot;</span><span class="token operator">:</span> <span class="token number">97714548</span><span class="token punctuation">,</span>
                <span class="token property">&quot;uplink&quot;</span><span class="token operator">:</span> <span class="token number">3234617</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;dns_server_outbound&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;downlink&quot;</span><span class="token operator">:</span> <span class="token number">7116</span><span class="token punctuation">,</span>
                <span class="token property">&quot;uplink&quot;</span><span class="token operator">:</span> <span class="token number">2229</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;manual_tproxy_outbound_tcp_1&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;downlink&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;uplink&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;manual_tproxy_outbound_udp_1&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;downlink&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;uplink&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;tcp_outbound&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;downlink&quot;</span><span class="token operator">:</span> <span class="token number">23873238</span><span class="token punctuation">,</span>
                <span class="token property">&quot;uplink&quot;</span><span class="token operator">:</span> <span class="token number">1049595</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;udp_outbound&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;downlink&quot;</span><span class="token operator">:</span> <span class="token number">639282</span><span class="token punctuation">,</span>
                <span class="token property">&quot;uplink&quot;</span><span class="token operator">:</span> <span class="token number">74634</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,1),k={href:"https://github.com/netdata/netdata",target:"_blank",rel:"noopener noreferrer"},b=e(`<ol><li>编辑相关配置文件 (<code>sudo /etc/netdata/edit-config python.d/go_expvar.conf</code>)</li><li>使用下面这样的实力配置:</li></ol><details><summary>点击查看</summary><br><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>xray:
  name: &#39;xray&#39;
  update_every: 2
  url: &#39;http://127.0.0.1:11111/debug/vars&#39;
  collect_memstats: false
  extra_charts:
     - id: &#39;inbounds&#39;
       options:
         name: &#39;inbounds&#39;
         title: &#39;Xray System Inbounds&#39;
         units: bytes
         family: xray
         context: xray.inbounds
         chart_type: line
       lines:
         - expvar_key: stats.inbound.tproxy_tcp_inbound.downlink
           id: &#39;tcp.downlink&#39;
           algorithm: incremental
           expvar_type: int
         - expvar_key: stats.inbound.tproxy_udp_inbound.downlink
           id: &#39;udp.downlink&#39;
           algorithm: incremental
           expvar_type: int
         - expvar_key: stats.inbound.http_inbound.downlink
           id: &#39;http.downlink&#39;
           algorithm: incremental
           expvar_type: int
         - expvar_key: stats.inbound.https_inbound.downlink
           id: &#39;https.downlink&#39;
           algorithm: incremental
           expvar_type: int
         - expvar_key: stats.inbound.socks_inbound.downlink
           id: &#39;socks.downlink&#39;
           algorithm: incremental
           expvar_type: int
         - expvar_key: stats.inbound.tproxy_tcp_inbound.uplink
           id: &#39;tcp.uplink&#39;
           algorithm: incremental
           expvar_type: int
         - expvar_key: stats.inbound.tproxy_udp_inbound.uplink
           id: &#39;udp.uplink&#39;
           algorithm: incremental
           expvar_type: int
         - expvar_key: stats.inbound.http_inbound.uplink
           id: &#39;http.uplink&#39;
           algorithm: incremental
           expvar_type: int
         - expvar_key: stats.inbound.https_inbound.uplink
           id: &#39;https.uplink&#39;
           algorithm: incremental
           expvar_type: int
         - expvar_key: stats.inbound.socks_inbound.uplink
           id: &#39;socks.uplink&#39;
           algorithm: incremental
           expvar_type: int
     - id: &#39;outbounds&#39;
       options:
         name: &#39;outbounds&#39;
         title: &#39;Xray System Outbounds&#39;
         units: bytes
         family: xray
         context: xray.outbounds
         chart_type: line
       lines:
         - expvar_key: stats.outbound.tcp_outbound.downlink
           id: &#39;tcp.downlink&#39;
           algorithm: incremental
           expvar_type: int
         - expvar_key: stats.outbound.udp_outbound.downlink
           id: &#39;udp.downlink&#39;
           algorithm: incremental
           expvar_type: int
         - expvar_key: stats.outbound.direct.downlink
           id: &#39;direct.downlink&#39;
           algorithm: incremental
           expvar_type: int
         - expvar_key: stats.outbound.tcp_outbound.uplink
           id: &#39;tcp.uplink&#39;
           algorithm: incremental
           expvar_type: int
         - expvar_key: stats.outbound.udp_outbound.uplink
           id: &#39;udp.uplink&#39;
           algorithm: incremental
           expvar_type: int
         - expvar_key: stats.outbound.direct.uplink
           id: &#39;direct.uplink&#39;
           algorithm: incremental
           expvar_type: int
     - id: &#39;observatory&#39;
       options:
         name: &#39;observatory&#39;
         title: &#39;Xray Observatory Metrics&#39;
         units: milliseconds
         family: xray
         context: xray.observatory
         chart_type: line
       lines:
         - expvar_key: observatory.tcp_outbound.delay
           id: tcp
           expvar_type: int
         - expvar_key: observatory.udp_outbound.delay
           id: udp
           expvar_type: int
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>你可以得到类似这样的结果:</p><p><img src="https://github.com/chika0801/Xray-docs-next/assets/88967758/455e88ce-ced2-4593-a9fa-425bb293215b" alt="160428235-2988bf69-5d6c-41ec-8267-1bd512508aa8"></p>`,4);function m(y,q){const o=p("I18nTip"),t=p("ExternalLinkIcon");return l(),u("div",null,[a(o),c,s("p",null,[n("例如在 "),s("a",d,[n("luci-app-xray"),a(t)]),n(" 你可以得到这样的输出 (省略了 cmdline 和 memstats 等标准expvar内容)")]),v,s("p",null,[n("为了得到更好的可视化输出, 可以使用 "),s("a",k,[n("Netdata"),a(t)]),n(" (with python.d plugin):")]),b])}const h=i(r,[["render",m],["__file","metrics.html.vue"]]);export{h as default};
