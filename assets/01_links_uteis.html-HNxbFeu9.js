import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,a as i,b as e,o}from"./app-BWrmEe2t.js";const r={};function l(t,a){return o(),n("div",null,a[0]||(a[0]=[i('<h1 id="montando-ambiente-de-trabalho" tabindex="-1"><a class="header-anchor" href="#montando-ambiente-de-trabalho"><span>Montando Ambiente de trabalho</span></a></h1><h1 id="sw-utilizados" tabindex="-1"><a class="header-anchor" href="#sw-utilizados"><span>SW utilizados</span></a></h1><ul><li><a href="https://adoptium.net/temurin/releases/" target="_blank" rel="noopener noreferrer">JDK</a></li><li><a href="https://maven.apache.org/" target="_blank" rel="noopener noreferrer">Maven</a></li><li>Git <ul><li><a href="https://desktop.github.com/" target="_blank" rel="noopener noreferrer">Github Desktop (windows)</a></li></ul></li><li>Visual Studio Code</li><li><a href="https://gluonhq.com/products/scene-builder/" target="_blank" rel="noopener noreferrer">Scene Builder</a></li></ul><h1 id="links" tabindex="-1"><a class="header-anchor" href="#links"><span>Links</span></a></h1><ul><li><a href="https://replit.com/languages/java10" target="_blank" rel="noopener noreferrer">Repl IT IDE Java Online</a></li></ul><h1 id="podcast" tabindex="-1"><a class="header-anchor" href="#podcast"><span>PodCast</span></a></h1><ul><li><a href="http://bit.ly/zupcastnoyoutube" target="_blank" rel="noopener noreferrer">Zupcast no youtube</a></li></ul><h1 id="videos" tabindex="-1"><a class="header-anchor" href="#videos"><span>Videos</span></a></h1>',8),e("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/sZAxLRMxEUo",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""},null,-1),e("ul",null,[e("li",null,[e("a",{href:"https://youtu.be/sZAxLRMxEUo",target:"_blank",rel:"noopener noreferrer"},"Java // Dicionário do Programador")])],-1),e("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/9yzMKaKcoC0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""},null,-1),e("ul",null,[e("li",null,[e("a",{href:"https://youtu.be/9yzMKaKcoC0",target:"_blank",rel:"noopener noreferrer"},"Você ainda deve aprender Java em 2023?")])],-1),e("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/jpuJ1qrluoU",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""},null,-1),e("ul",null,[e("li",null,[e("a",{href:"https://youtu.be/jpuJ1qrluoU",target:"_blank",rel:"noopener noreferrer"},"Orientação a objetos com Roberta Arcoverde")])],-1),e("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/vX4ttJ5BDNk",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""},null,-1),i(`<ul><li><a href="https://youtu.be/vX4ttJ5BDNk" target="_blank" rel="noopener noreferrer">Java 20 turbina a JVM [Cortes do Compilado]</a></li><li><a href="https://www.youtube.com/@java" target="_blank" rel="noopener noreferrer">Java no YouTube</a></li></ul><h2 id="windows-scoop" tabindex="-1"><a class="header-anchor" href="#windows-scoop"><span>Windows Scoop</span></a></h2><p><a href="https://scoop.sh/" target="_blank" rel="noopener noreferrer">Scoop</a> é um gerenciador de pacotes para Windows. Ele permite instalar e gerenciar softwares de forma eficiente, semelhante ao apt no Linux ou ao Homebrew no macOS. Scoop simplifica a instalação de aplicativos, ferramentas de desenvolvimento e utilitários, automatizando o processo de download, instalação e atualização. Ele oferece uma interface de linha de comando e integra-se bem com o PowerShell. Usando Scoop, você pode instalar softwares de fontes confiáveis, mantendo seu sistema atualizado e organizado.</p><p>Para instalar o scoop abra o PowerShell e rode o seguinte comando:</p><div class="language-console line-numbers-mode" data-highlighter="shiki" data-ext="console" data-title="console" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">Invoke-RestMethod -Uri https://get.scoop.sh | Invoke-Expression</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>Para instalar o scoop abra o PowerShell e rode o seguinte comando:</p><div class="language-console line-numbers-mode" data-highlighter="shiki" data-ext="console" data-title="console" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">scoop bucket add main</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">scoop install main/git</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">scoop install main/gh</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">scoop bucket add java</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">scoop install java/temurin-lts-jdk</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">scoop install main/maven</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">scoop bucket add extras</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">scoop install extras/scene-builder</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">scoop install extras/vscode</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="linux-sdkman" tabindex="-1"><a class="header-anchor" href="#linux-sdkman"><span>Linux SDKman</span></a></h2><p>O <a href="https://sdkman.io/" target="_blank" rel="noopener noreferrer">SDKMAN!</a> (Software Development Kit Manager) é um gerenciador de kits de desenvolvimento de software (SDKs) para várias linguagens de programação, como Java, Groovy, Kotlin, Scala e muitas outras. Ele permite que você instale, gerencie e alterne entre diferentes versões de SDKs de forma fácil e eficiente, tudo através da linha de comando.</p><p>para instalar</p><div class="language-console line-numbers-mode" data-highlighter="shiki" data-ext="console" data-title="console" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">curl -s &quot;https://get.sdkman.io&quot; | bash</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,11)]))}const p=s(r,[["render",l],["__file","01_links_uteis.html.vue"]]),h=JSON.parse('{"path":"/posts/01_links_uteis.html","title":"Montando Ambiente de trabalho","lang":"pt-BR","frontmatter":{"icon":"edit","date":"2024-11-14T20:40:00.000Z","tag":["links"],"category":["multimidia"],"order":1,"star":true},"headers":[{"level":2,"title":"Windows Scoop","slug":"windows-scoop","link":"#windows-scoop","children":[]},{"level":2,"title":"Linux SDKman","slug":"linux-sdkman","link":"#linux-sdkman","children":[]}],"git":{"createdTime":1730916784000,"updatedTime":1731014412000,"contributors":[{"name":"Leandro Costa","email":"leandro.costa@ifba.edu.br","commits":1},{"name":"Leandro Souza","email":"leandro.costa@ifba.edu.br","commits":1}]},"readingTime":{"minutes":1.44,"words":431},"filePathRelative":"posts/01_links_uteis.md","localizedDate":"14 de novembro de 2024"}');export{p as comp,h as data};
