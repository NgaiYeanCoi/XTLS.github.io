import{_ as a,r as l,o as u,c,a as i,b as n,d as e,w as s,e as d}from"./app-5c6t7j75.js";const r={},v=d('<h1 id="反向代理" tabindex="-1"><a class="header-anchor" href="#反向代理"><span>反向代理</span></a></h1><p>反向代理可以把服务器端的流量向客户端转发，即逆向流量转发。</p><p>其底层协议为 Mux.cool, 作为一个多路复用协议，它还具有类似 QUIC 的性质，客户端和服务端是对等的，两边都可以新建一个子连接。一般情况情况下只有客户端打开，服务端打开子连接被这里用于发送反向代理请求。</p><p>反向代理的大致工作原理如下:</p><ul><li><p>假设在主机 A 中有一个网页服务器，这台主机没有公网 IP，无法在公网上直接访问。另有一台主机 B，它可以由公网访问。现在我们需要把 B 作为入口，把流量从 B 转发到 A。</p><ul><li>在主机 B 中配置 Xray，接收外部请求，所以称为 <code>portal</code> （门户）。</li><li>在主机 A 中配置 Xray，负责将B的转发和网页服务器桥接起来，称为<code>bridge</code>。</li></ul></li><li><p><code>bridge</code></p><ul><li><code>bridge</code> 会向 <code>portal</code> 主动建立连接以注册反向通道，此连接的目标地址（domain）可以自行设定。</li><li><code>bridge</code> 在收到<code>portal</code>转发过来的公网流量之后，会将其原封不动地发给主机 A 中的网页服务器。当然，这一步需要路由模块的配置。</li><li><code>bridge</code> 收到响应后，也会将响应原封不动地返回给<code>portal</code>。</li></ul></li><li><p><code>portal</code></p><ul><li><code>portal</code> 收到请求且domain匹配，则说明是由 <code>bridge</code> 发来的响应数据，这条连接会用于建立反向通道。</li><li><code>portal</code> 收到请求，domain不匹配，则说明是公网用户发来的连接，这种连接数据会转发给bridge.</li></ul></li><li><p><code>bridge</code> 会根据流量的大小进行动态的负载均衡。</p></li></ul>',5),b={class:"custom-container tip"},q=n("p",{class:"custom-container-title"},"提示",-1),m=d(`<div class="custom-container warning"><p class="custom-container-title">注意</p><p>反向代理功能尚处于测试阶段，可能会有一些问题。</p></div><h2 id="reverseobject" tabindex="-1"><a class="header-anchor" href="#reverseobject"><span>ReverseObject</span></a></h2><p><code>ReverseObject</code> 对应配置文件的 <code>reverse</code> 项。</p><div class="language-jsonc line-numbers-mode" data-ext="jsonc" data-title="jsonc"><pre class="language-jsonc"><code>{
  &quot;reverse&quot;: {
    &quot;bridges&quot;: [
      {
        &quot;tag&quot;: &quot;bridge&quot;,
        &quot;domain&quot;: &quot;reverse-proxy.xray.internal&quot;
      }
    ],
    &quot;portals&quot;: [
      {
        &quot;tag&quot;: &quot;portal&quot;,
        &quot;domain&quot;: &quot;reverse-proxy.xray.internal&quot;
      }
    ]
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>bridges</code>: [<a href="#bridgeobject">BridgeObject</a>]</p></blockquote><p>数组，每一项表示一个 <code>bridge</code>。每个 <code>bridge</code> 的配置是一个 <a href="#bridgeobject">BridgeObject</a>。</p><blockquote><p><code>portals</code>: [<a href="#portalobject">PortalObject</a>]</p></blockquote><p>数组，每一项表示一个 <code>portal</code>。每个 <code>portal</code> 的配置是一个 <a href="#bridgeobject">PortalObject</a>。</p><h3 id="bridgeobject" tabindex="-1"><a class="header-anchor" href="#bridgeobject"><span>BridgeObject</span></a></h3><div class="language-jsonc line-numbers-mode" data-ext="jsonc" data-title="jsonc"><pre class="language-jsonc"><code>{
  &quot;tag&quot;: &quot;bridge&quot;,
  &quot;domain&quot;: &quot;reverse-proxy.xray.internal&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>tag</code>: string</p></blockquote>`,11),p=n("code",null,"bridge",-1),g=n("code",null,"inboundTag",-1),h=d(`<blockquote><p><code>domain</code>: string</p></blockquote><p>指定一个域名，<code>bridge</code> 向 <code>portal</code> 建立的连接，都会借助这个域名进行发送。 这个域名只作为 <code>bridge</code> 和 <code>portal</code> 的通信用途，不必真实存在。</p><h3 id="portalobject" tabindex="-1"><a class="header-anchor" href="#portalobject"><span>PortalObject</span></a></h3><div class="language-jsonc line-numbers-mode" data-ext="jsonc" data-title="jsonc"><pre class="language-jsonc"><code>{
  &quot;tag&quot;: &quot;portal&quot;,
  &quot;domain&quot;: &quot;reverse-proxy.xray.internal&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>tag</code>: string</p></blockquote>`,5),j=n("code",null,"portal",-1),x=n("code",null,"outboundTag",-1),_=n("code",null,"portal",-1),f=d(`<blockquote><p><code>domain</code>: string</p></blockquote><p>一个域名。当 <code>portal</code> 接收到流量时，如果流量的目标域名是此域名，则 <code>portal</code> 认为当前连接上是 <code>bridge</code> 发来的通信连接。而其它流量则会被当成需要转发的流量。<code>portal</code> 所做的工作就是把这两类连接进行识别并做对应的转发。</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>一个 Xray 既可以作为 <code>bridge</code>，也可以作为 <code>portal</code>，也可以同时两者，以适用于不同的场景需要。</p></div><h2 id="完整配置样例" tabindex="-1"><a class="header-anchor" href="#完整配置样例"><span>完整配置样例</span></a></h2><div class="custom-container tip"><p class="custom-container-title">提示</p><p>在运行过程中，建议先启用 <code>bridge</code>，再启用 <code>portal</code>。</p></div><h3 id="bridge-配置" tabindex="-1"><a class="header-anchor" href="#bridge-配置"><span>bridge 配置</span></a></h3><p><code>bridge</code> 通常需要两个 outbound，一个用于连接 <code>portal</code>，另一个用于发送实际的流量。也就是说，你需要用路由区分两种流量。</p><p>反向代理配置:</p><div class="language-jsonc line-numbers-mode" data-ext="jsonc" data-title="jsonc"><pre class="language-jsonc"><code>&quot;reverse&quot;: {
  &quot;bridges&quot;: [
    {
      &quot;tag&quot;: &quot;bridge&quot;,
      &quot;domain&quot;: &quot;reverse-proxy.xray.internal&quot;
    }
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>outbound:</p><div class="language-jsonc line-numbers-mode" data-ext="jsonc" data-title="jsonc"><pre class="language-jsonc"><code>{
  // 转发到网页服务器
  &quot;tag&quot;: &quot;out&quot;,
  &quot;protocol&quot;: &quot;freedom&quot;,
  &quot;settings&quot;: {
    &quot;redirect&quot;: &quot;127.0.0.1:80&quot;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-jsonc line-numbers-mode" data-ext="jsonc" data-title="jsonc"><pre class="language-jsonc"><code>{
  // 连接到 portal
  &quot;protocol&quot;: &quot;vmess&quot;,
  &quot;settings&quot;: {
    &quot;vnext&quot;: [
      {
        &quot;address&quot;: &quot;portal 的 IP 地址&quot;,
        &quot;port&quot;: 1024,
        &quot;users&quot;: [
          {
            &quot;id&quot;: &quot;5783a3e7-e373-51cd-8642-c83782b807c5&quot;
          }
        ]
      }
    ]
  },
  &quot;tag&quot;: &quot;interconn&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>路由配置:</p><div class="language-jsonc line-numbers-mode" data-ext="jsonc" data-title="jsonc"><pre class="language-jsonc"><code>{
  &quot;rules&quot;: [
    {
      // bridge 发出的请求，且域名为配置的域名，那么说明这是尝试向 portal 建立反向隧道的请求，
      // 则路由到 interconn，即连接到 portal
      &quot;type&quot;: &quot;field&quot;,
      &quot;inboundTag&quot;: [&quot;bridge&quot;],
      &quot;domain&quot;: [&quot;full:reverse-proxy.xray.internal&quot;],
      &quot;outboundTag&quot;: &quot;interconn&quot;
    },
    {
      // 从 portal 过来的流量，也会从 bridge 出来，但是不带上面的domain
      // 则路由到 out，即转发给网页服务器
      &quot;type&quot;: &quot;field&quot;,
      &quot;inboundTag&quot;: [&quot;bridge&quot;],
      &quot;outboundTag&quot;: &quot;out&quot;
    }
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="portal-配置" tabindex="-1"><a class="header-anchor" href="#portal-配置"><span>portal 配置</span></a></h3><p><code>portal</code> 通常需要两个 inbound，一个用于接收 <code>bridge</code> 的连接，另一个用于接收实际的流量。同时你也需要用路由区分两种流量。</p><p>反向代理配置:</p><div class="language-jsonc line-numbers-mode" data-ext="jsonc" data-title="jsonc"><pre class="language-jsonc"><code>&quot;reverse&quot;: {
  &quot;portals&quot;: [
    {
      &quot;tag&quot;: &quot;portal&quot;,
      &quot;domain&quot;: &quot;reverse-proxy.xray.internal&quot; // 必须和 bridge 的配置一样
    }
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>inbound:</p><div class="language-jsonc line-numbers-mode" data-ext="jsonc" data-title="jsonc"><pre class="language-jsonc"><code>{
  // 直接接收来自公网的请求
  &quot;tag&quot;: &quot;external&quot;,
  &quot;port&quot;: 80,
  &quot;protocol&quot;: &quot;dokodemo-door&quot;,
  &quot;settings&quot;: {
    &quot;address&quot;: &quot;127.0.0.1&quot;,
    &quot;port&quot;: 80,
    &quot;network&quot;: &quot;tcp&quot;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-jsonc line-numbers-mode" data-ext="jsonc" data-title="jsonc"><pre class="language-jsonc"><code>{
  // 接收来自 bridge 尝试建立反向隧道的请求
  &quot;tag&quot;: &quot;interconn&quot;,
  &quot;port&quot;: 1024,
  &quot;protocol&quot;: &quot;vmess&quot;,
  &quot;settings&quot;: {
    &quot;clients&quot;: [
      {
        &quot;id&quot;: &quot;5783a3e7-e373-51cd-8642-c83782b807c5&quot;
      }
    ]
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>路由配置:</p><div class="language-jsonc line-numbers-mode" data-ext="jsonc" data-title="jsonc"><pre class="language-jsonc"><code>{
  &quot;rules&quot;: [
    {
      // 如果入站是 external，说明是来自公网的请求，
      // 则路由到 portal, 最终会转发给 bridge
      &quot;type&quot;: &quot;field&quot;,
      &quot;inboundTag&quot;: [&quot;external&quot;],
      &quot;outboundTag&quot;: &quot;portal&quot;
    },
    {
      // 如果来自 interconn 入站，说明是来自 bridge 的尝试建立反向隧道请求，
      // 则路由到 portal, 最终会转发给对应的公网客户端
      // 注意：这里进入的请求会带上了前文配置的domain，所以 portal 能够区分两种被路由到 portal 的请求
      &quot;type&quot;: &quot;field&quot;,
      &quot;inboundTag&quot;: [&quot;interconn&quot;],
      &quot;outboundTag&quot;: &quot;portal&quot;
    }
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23);function y(k,T){const t=l("I18nTip"),o=l("RouterLink");return u(),c("div",null,[i(t),v,n("div",b,[q,n("p",null,[e("如上所述，反向代理默认已开启 "),i(o,{to:"/development/protocols/muxcool/"},{default:s(()=>[e("Mux")]),_:1}),e("，请不要在其用到的 outbound 上再次开启 Mux。")])]),m,n("p",null,[e("所有由 "),p,e(" 发出的连接，都会带有这个标识。可以在 "),i(o,{to:"/config/routing.html"},{default:s(()=>[e("路由配置")]),_:1}),e(" 中使用 "),g,e(" 进行识别。")]),h,n("p",null,[j,e(" 的标识。在 "),i(o,{to:"/config/routing.html"},{default:s(()=>[e("路由配置")]),_:1}),e(" 中使用 "),x,e(" 将流量转发到这个 "),_,e("。")]),f])}const O=a(r,[["render",y],["__file","reverse.html.vue"]]);export{O as default};
