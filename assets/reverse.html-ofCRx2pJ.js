import{_ as a,r as l,o as u,c,a as i,b as n,d as e,w as s,e as d}from"./app-wwFbVm4K.js";const r={},v=d('<h1 id="обратныи-прокси" tabindex="-1"><a class="header-anchor" href="#обратныи-прокси"><span>Обратный прокси</span></a></h1><p>Обратный прокси может перенаправлять трафик с сервера на клиент, то есть выполнять обратную переадресацию трафика.</p><p>В основе его лежит протокол Mux.cool, который, будучи протоколом мультиплексирования, также обладает свойствами, подобными QUIC. Клиент и сервер равноправны, и обе стороны могут создавать новые подсоединения. Обычно только клиент открывает подсоединения, но здесь открытие подсоединения сервером используется для отправки запросов обратного прокси.</p><p>Принцип работы обратного прокси примерно следующий:</p><ul><li><p>Предположим, на хосте A находится веб-сервер, у которого нет публичного IP-адреса и к которому нельзя получить прямой доступ из Интернета. Есть другой хост B с публичным IP-адресом. Нам нужно использовать B в качестве точки входа, перенаправляя трафик с B на A.</p><ul><li>На хосте B настраивается Xray для приема внешних запросов, поэтому он называется <code>portal</code> (портал).</li><li>На хосте A настраивается Xray, который отвечает за соединение переадресации от B с веб-сервером. Он называется <code>bridge</code> (мост).</li></ul></li><li><p><code>bridge</code></p><ul><li><code>bridge</code> активно устанавливает соединение с <code>portal</code> для регистрации обратного канала. Целевой адрес (домен) этого соединения можно задать самостоятельно.</li><li>После получения трафика из Интернета, перенаправленного <code>portal</code>, <code>bridge</code> пересылает его без изменений на веб-сервер на хосте A. Конечно, для этого требуется настройка модуля маршрутизации.</li><li>После получения ответа <code>bridge</code> также возвращает его без изменений <code>portal</code>.</li></ul></li><li><p><code>portal</code></p><ul><li>Если <code>portal</code> получает запрос, и домен совпадает, это означает, что данные ответа пришли от <code>bridge</code>. Это соединение будет использовано для установления обратного канала.</li><li>Если <code>portal</code> получает запрос, и домен не совпадает, это означает, что соединение установлено пользователем из Интернета. Данные этого соединения будут перенаправлены на <code>bridge</code>.</li></ul></li><li><p><code>bridge</code> выполняет динамическую балансировку нагрузки в зависимости от объема трафика.</p></li></ul>',5),b={class:"custom-container tip"},q=n("p",{class:"custom-container-title"},"Подсказка",-1),m=d(`<div class="custom-container warning"><p class="custom-container-title">Внимание</p><p>Функция обратного прокси все еще находится в стадии тестирования и может иметь некоторые проблемы.</p></div><h2 id="reverseobject" tabindex="-1"><a class="header-anchor" href="#reverseobject"><span>ReverseObject</span></a></h2><p><code>ReverseObject</code> соответствует параметру <code>reverse</code> в файле конфигурации.</p><div class="language-jsonc line-numbers-mode" data-ext="jsonc" data-title="jsonc"><pre class="language-jsonc"><code>{
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>bridges</code>: [<a href="#bridgeobject">BridgeObject</a>]</p></blockquote><p>Массив, каждый элемент которого представляет собой <code>bridge</code>. Конфигурация каждого <code>bridge</code> является <a href="#bridgeobject">BridgeObject</a>.</p><blockquote><p><code>portals</code>: [<a href="#portalobject">PortalObject</a>]</p></blockquote><p>Массив, каждый элемент которого представляет собой <code>portal</code>. Конфигурация каждого <code>portal</code> является <a href="#bridgeobject">PortalObject</a>.</p><h3 id="bridgeobject" tabindex="-1"><a class="header-anchor" href="#bridgeobject"><span>BridgeObject</span></a></h3><div class="language-jsonc line-numbers-mode" data-ext="jsonc" data-title="jsonc"><pre class="language-jsonc"><code>{
  &quot;tag&quot;: &quot;bridge&quot;,
  &quot;domain&quot;: &quot;reverse-proxy.xray.internal&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>tag</code>: string</p></blockquote>`,11),p=n("code",null,"bridge",-1),g=n("code",null,"inboundTag",-1),h=d(`<blockquote><p><code>domain</code>: string</p></blockquote><p>Указывает домен, который <code>bridge</code> будет использовать для установления соединения с <code>portal</code>. Этот домен используется только для связи между <code>bridge</code> и <code>portal</code> и не обязательно должен существовать.</p><h3 id="portalobject" tabindex="-1"><a class="header-anchor" href="#portalobject"><span>PortalObject</span></a></h3><div class="language-jsonc line-numbers-mode" data-ext="jsonc" data-title="jsonc"><pre class="language-jsonc"><code>{
  &quot;tag&quot;: &quot;portal&quot;,
  &quot;domain&quot;: &quot;reverse-proxy.xray.internal&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>tag</code>: string</p></blockquote>`,5),j=n("code",null,"portal",-1),x=n("code",null,"outboundTag",-1),_=n("code",null,"portal",-1),f=d(`<blockquote><p><code>domain</code>: string</p></blockquote><p>Домен. Когда <code>portal</code> получает трафик, если целевой домен трафика совпадает с этим доменом, <code>portal</code> считает, что текущее соединение является соединением связи, установленным <code>bridge</code>. Другой трафик будет рассматриваться как трафик, требующий пересылки. <code>portal</code> занимается идентификацией этих двух типов соединений и выполняет соответствующую пересылку.</p><div class="custom-container tip"><p class="custom-container-title">Подсказка</p><p>Один Xray может быть <code>bridge</code>, <code>portal</code> или одновременно и тем, и другим, чтобы соответствовать требованиям различных сценариев.</p></div><h2 id="полныи-пример-конфигурации" tabindex="-1"><a class="header-anchor" href="#полныи-пример-конфигурации"><span>Полный пример конфигурации</span></a></h2><div class="custom-container tip"><p class="custom-container-title">Подсказка</p><p>Во время работы рекомендуется сначала запустить <code>bridge</code>, а затем <code>portal</code>.</p></div><h3 id="конфигурация-bridge" tabindex="-1"><a class="header-anchor" href="#конфигурация-bridge"><span>Конфигурация bridge</span></a></h3><p><code>bridge</code> обычно требует двух исходящих соединений (outbound): одно для подключения к <code>portal</code>, другое для отправки фактического трафика. Другими словами, вам нужно использовать маршрутизацию для различения двух типов трафика.</p><p>Конфигурация обратного прокси:</p><div class="language-jsonc line-numbers-mode" data-ext="jsonc" data-title="jsonc"><pre class="language-jsonc"><code>&quot;reverse&quot;: {
  &quot;bridges&quot;: [
    {
      &quot;tag&quot;: &quot;bridge&quot;,
      &quot;domain&quot;: &quot;reverse-proxy.xray.internal&quot;
    }
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>outbound:</p><div class="language-jsonc line-numbers-mode" data-ext="jsonc" data-title="jsonc"><pre class="language-jsonc"><code>{
  // Переадресация на веб-сервер
  &quot;tag&quot;: &quot;out&quot;,
  &quot;protocol&quot;: &quot;freedom&quot;,
  &quot;settings&quot;: {
    &quot;redirect&quot;: &quot;127.0.0.1:80&quot;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-jsonc line-numbers-mode" data-ext="jsonc" data-title="jsonc"><pre class="language-jsonc"><code>{
  // Подключение к portal
  &quot;protocol&quot;: &quot;vmess&quot;,
  &quot;settings&quot;: {
    &quot;vnext&quot;: [
      {
        &quot;address&quot;: &quot;IP-адрес portal&quot;,
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Конфигурация маршрутизации:</p><div class="language-jsonc line-numbers-mode" data-ext="jsonc" data-title="jsonc"><pre class="language-jsonc"><code>{
  &quot;rules&quot;: [
    {
      // Запрос от bridge, и домен соответствует настроенному домену,
      // это означает, что это попытка установить обратный туннель к portal,
      // маршрутизируем на interconn, то есть подключаемся к portal
      &quot;type&quot;: &quot;field&quot;,
      &quot;inboundTag&quot;: [&quot;bridge&quot;],
      &quot;domain&quot;: [&quot;full:reverse-proxy.xray.internal&quot;],
      &quot;outboundTag&quot;: &quot;interconn&quot;
    },
    {
      // Трафик от portal также будет выходить из bridge, но без указанного выше домена
      // маршрутизируем на out, то есть перенаправляем на веб-сервер
      &quot;type&quot;: &quot;field&quot;,
      &quot;inboundTag&quot;: [&quot;bridge&quot;],
      &quot;outboundTag&quot;: &quot;out&quot;
    }
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="конфигурация-portal" tabindex="-1"><a class="header-anchor" href="#конфигурация-portal"><span>Конфигурация portal</span></a></h3><p><code>portal</code> обычно требует двух входящих соединений (inbound): одно для приема соединений от <code>bridge</code>, другое для приема фактического трафика. Вам также нужно использовать маршрутизацию для различения двух типов трафика.</p><p>Конфигурация обратного прокси:</p><div class="language-jsonc line-numbers-mode" data-ext="jsonc" data-title="jsonc"><pre class="language-jsonc"><code>&quot;reverse&quot;: {
  &quot;portals&quot;: [
    {
      &quot;tag&quot;: &quot;portal&quot;,
      &quot;domain&quot;: &quot;reverse-proxy.xray.internal&quot; // Должно совпадать с конфигурацией bridge
    }
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>inbound:</p><div class="language-jsonc line-numbers-mode" data-ext="jsonc" data-title="jsonc"><pre class="language-jsonc"><code>{
  //  Прямой прием запросов из Интернета
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
  // Прием запросов от bridge для установления обратного туннеля
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Конфигурация маршрутизации:</p><div class="language-jsonc line-numbers-mode" data-ext="jsonc" data-title="jsonc"><pre class="language-jsonc"><code>{
  &quot;rules&quot;: [
    {
      // Если входящее соединение помечено external, значит, это запрос из Интернета,
      // маршрутизируем на portal, который в конечном итоге перенаправит его на bridge
      &quot;type&quot;: &quot;field&quot;,
      &quot;inboundTag&quot;: [&quot;external&quot;],
      &quot;outboundTag&quot;: &quot;portal&quot;
    },
    {
      // Если входящее соединение от interconn, значит, это запрос от bridge для установления обратного туннеля,
      // маршрутизируем на portal, который в конечном итоге перенаправит его соответствующему клиенту в Интернете.
      // Обратите внимание: этот запрос будет содержать домен, настроенный ранее, поэтому portal сможет различать два типа запросов,
      // маршрутизируемых на portal.
      &quot;type&quot;: &quot;field&quot;,
      &quot;inboundTag&quot;: [&quot;interconn&quot;],
      &quot;outboundTag&quot;: &quot;portal&quot;
    }
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23);function y(k,T){const t=l("I18nTip"),o=l("RouterLink");return u(),c("div",null,[i(t),v,n("div",b,[q,n("p",null,[e("Как указано выше, обратный прокси по умолчанию использует "),i(o,{to:"/development/protocols/muxcool/"},{default:s(()=>[e("Mux")]),_:1}),e(". Пожалуйста, не включайте Mux повторно на используемых исходящих соединениях.")])]),m,n("p",null,[e("Все соединения, исходящие от "),p,e(", будут иметь эту метку. Ее можно использовать для идентификации в "),i(o,{to:"/ru/config/routing.html"},{default:s(()=>[e("конфигурации маршрутизации")]),_:1}),e(" с помощью "),g,e(".")]),h,n("p",null,[e("Метка "),j,e(". Используется в "),i(o,{to:"/ru/config/routing.html"},{default:s(()=>[e("конфигурации маршрутизации")]),_:1}),e(" с "),x,e(" для перенаправления трафика на этот "),_,e(".")]),f])}const O=a(r,[["render",y],["__file","reverse.html.vue"]]);export{O as default};
