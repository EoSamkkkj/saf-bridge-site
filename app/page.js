import { CHECKOUT_URL, PRICE, SUPPORT } from "../config";
import Reveal from "../components/Reveal";
import Effects from "../components/Effects";

const buy = { href: CHECKOUT_URL, target: "_blank", rel: "noopener" };

const Icon = ({ d }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" dangerouslySetInnerHTML={{ __html: d }} />
);

const features = [
  { t: "Camadas separadas", p: "Cada camada chega no After com posição, modo de mesclagem e hierarquia do Figma.", i: '<rect x="4" y="4" width="16" height="6" rx="2"/><rect x="4" y="14" width="16" height="6" rx="2"/>' },
  { t: "Textos editáveis", p: "Texto vira camada de texto de verdade: fonte, tamanho, cor, espaçamento, entrelinha e alinhamento.", i: '<path d="M5 6V4h14v2"/><path d="M12 4v16"/><path d="M9 20h6"/>' },
  { t: "Fontes achadas sozinhas", p: "Procura a fonte pelo nome e o peso mais próximo. Se faltar alguma, o painel avisa qual instalar.", i: '<circle cx="11" cy="11" r="6"/><path d="m20 20-4.5-4.5"/>' },
  { t: "Nomes que fazem sentido", p: "Nada de “Vector” ou “Rectangle 12”: vira “Vetor branco · topo direita”, na timeline e no Project.", i: '<path d="M4 7h10"/><path d="M4 12h16"/><path d="M4 17h7"/>' },
  { t: "Escala de 1× a 4×", p: "Escolha a resolução das imagens e se grupos viram pré-comps ou ficam achatados.", i: '<path d="M4 14v6h6"/><path d="M20 10V4h-6"/><path d="M4 20 20 4"/>' },
  { t: "Um Ctrl+Z só", p: "A importação inteira entra num único passo de desfazer. Errou? Volta tudo de uma vez.", i: '<path d="M9 14 4 9l5-5"/><path d="M4 9h10a6 6 0 0 1 0 12h-3"/>' },
  { t: "Comp nova ou na atual", p: "Cria uma comp do tamanho do frame ou coloca na comp aberta, já escalado e alinhado.", i: '<rect x="3" y="5" width="18" height="14" rx="3"/><path d="M3 10h18"/>' },
  { t: "Importação automática", p: "Ligue “Importar assim que chegar” e o frame aparece no After sem você tocar no painel.", i: '<path d="M13 3 5 14h6l-1 7 8-11h-6z"/>' },
  { t: "Offline e privado", p: "A ponte roda no seu computador (localhost). Seus arquivos não saem da sua máquina.", i: '<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>' },
];

const faq = [
  ["Funciona no Figma pelo navegador?", "Não. O Saf-Bridge funciona no app do Figma para computador, que conversa com o After pela ponte local."],
  ["Quais versões do After Effects?", "Do After Effects 2020 ao 2026, no Windows e no Mac. Trechos de texto com estilos diferentes na mesma camada precisam do After 24.3 ou mais novo."],
  ["Posso usar em mais de um computador?", "Sim. A licença vale para 2 computadores e a troca de PC é liberada."],
  ["Preciso de internet?", "Só para ativar a licença. Depois, a ponte entre Figma e After roda offline, no seu computador."],
  ["Como recebo a licença?", "A ativação usa o e-mail da compra. Comprou, é só ativar no painel com esse e-mail."],
  ["Tudo vem editável?", "Os textos vêm como camadas de texto editáveis. Vetores e frames com efeitos vêm como imagem, na escala que você escolher, para não perder a aparência. Sombras e efeitos de texto precisam ser refeitos no After."],
  ["E se uma fonte não estiver instalada?", "O Saf-Bridge procura a fonte pelo nome e acha o peso mais próximo. Se nenhuma parecida existir, o texto vem como imagem e o painel avisa qual fonte instalar."],
];

export default function Page() {
  return (
    <>
      <Reveal />
      <Effects />
      <div className="bg" aria-hidden="true"><i className="blob a" /><i className="blob b" /><i className="blob c" /><i className="shape s1" /><i className="shape s2" /><i className="shape s3" /><i className="shape s4" /><i className="shape s5" /></div>
      <header className="nav">
        <div className="wrap">
          <a href="#" className="logo"><i />Saf-Bridge</a>
          <nav className="nav-links">
            <a href="#como-funciona">Como funciona</a>
            <a href="#recursos">Recursos</a>
            <a href="#compatibilidade">Compatibilidade</a>
            <a href="#faq">Dúvidas</a>
          </nav>
          <a className="btn btn-primary" {...buy}>Comprar agora</a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="wrap">
            <div className="hero-card">
              <div style={{ position: "relative", zIndex: 1 }}>
                <h1><span>Menos</span> <span>exportar,</span> <span>mais animar.</span></h1>
                <p className="sub">Do Figma pro After Effects em 1 clique · camadas e textos editáveis.</p>
                <div className="ctas">
                  <a className="btn btn-white pulse" {...buy}>Comprar agora <span className="arrow">→</span></a>
                  <a className="btn btn-ghost" href="#como-funciona">Ver como funciona</a>
                </div>
                <div className="chips">
                  <span className="chip"><b>✓</b> Textos editáveis</span>
                  <span className="chip"><b>✓</b> Camadas separadas</span>
                  <span className="chip"><b>✓</b> AE 2020–2026</span>
                </div>
              </div>
              <div className="demo" aria-hidden="true">
                <div className="panel">
                  <div className="panel-top">Figma · Card promo <span>4 camadas · 2×</span></div>
                  <div className="frame"><div className="t" /><div className="p" /><div className="b" /></div>
                  <div className="send">Send to After Effects</div>
                </div>
                <div className="panel">
                  <div className="panel-top">After Effects · Timeline <span>1 Ctrl+Z</span></div>
                  <div className="layers">
                    <div className="layer tx"><em>T</em>Menos exportar<span className="bar" /></div>
                    <div className="layer"><em>▢</em>Botão rosa · base<span className="bar" /></div>
                    <div className="layer"><em>▢</em>Card blush · direita<span className="bar" /></div>
                    <div className="layer"><em>▢</em>Fundo · frame<span className="bar" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="como-funciona">
          <div className="wrap">
            <div className="head center" data-reveal>
              <span className="eyebrow">Como funciona</span>
              <h2>Três passos. Zero exportação manual.</h2>
            </div>
            <div className="steps">
              <div className="card step" data-tilt="10" data-reveal="1">
                <div className="n">1</div>
                <h3>Selecione no Figma</h3>
                <p>Escolha um frame, grupo ou componente. O plugin mostra a miniatura, a resolução e quantas camadas vão sair.</p>
              </div>
              <div className="card step" data-tilt="10" data-reveal="2">
                <div className="n">2</div>
                <h3>Envie pro After</h3>
                <p>Defina a escala (1× a 4×) e clique em <b>Send to After Effects</b>. Cada camada vai com posição, mesclagem e hierarquia.</p>
              </div>
              <div className="card step" data-tilt="10" data-reveal="3">
                <div className="n">3</div>
                <h3>Importe e anime</h3>
                <p>No painel do After, clique em <b>Importar</b> ou deixe a importação automática ligada. Pronto para animar.</p>
              </div>
            </div>
          </div>
        </section>

        <section style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="head center" data-reveal>
              <span className="eyebrow">Antes × depois</span>
              <h2>O mesmo frame. Outro dia de trabalho.</h2>
            </div>
            <div className="vs">
              <div className="card before" data-tilt="6" data-reveal="1">
                <h3>Do jeito manual <span className="tag slow">horas</span></h3>
                <ul>
                  <li>Exportar camada por camada do Figma</li>
                  <li>Importar e reposicionar tudo no After na mão</li>
                  <li>Renomear “Vector”, “Group 3”, “Rectangle 12”…</li>
                  <li>Redigitar cada texto e caçar a fonte certa</li>
                  <li>Refazer a hierarquia e os modos de mesclagem</li>
                </ul>
              </div>
              <div className="card after" data-tilt="6" data-reveal="2">
                <h3>Com o Saf-Bridge <span className="tag fast">1 clique</span></h3>
                <ul>
                  <li>Um clique no Figma manda o frame inteiro</li>
                  <li>Camadas chegam na posição, já alinhadas e escaladas</li>
                  <li>Nomes legíveis na timeline e no Project</li>
                  <li>Textos editáveis com a fonte encontrada sozinha</li>
                  <li>Hierarquia e mesclagem preservadas, num único Ctrl+Z</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="recursos" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="head" data-reveal>
              <span className="eyebrow">Recursos</span>
              <h2>Feito por quem anima<br />todo dia.</h2>
            </div>
            <div className="features">
              {features.map((f, k) => (
                <div className="card feature" data-tilt="12" key={f.t} data-reveal={(k % 3) + 1}>
                  <Icon d={f.i} />
                  <h3>{f.t}</h3>
                  <p>{f.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="compatibilidade" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="dark" data-reveal>
              <span className="eyebrow">Compatibilidade</span>
              <h2>Roda onde você já trabalha.</h2>
              <p className="lead" style={{ marginTop: 14 }}>Painel no After Effects e plugin no app do Figma, ligados por uma ponte local no seu computador.</p>
              <div className="compat">
                <div className="glass"><strong>AE 2020–2026</strong><span>After Effects</span></div>
                <div className="glass"><strong>Win + Mac</strong><span>Windows e macOS</span></div>
                <div className="glass"><strong>Figma app</strong><span>versão para computador</span></div>
                <div className="glass"><strong>Offline</strong><span>nada sai do seu PC</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="preco" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="head center" data-reveal>
              <span className="eyebrow">Preço</span>
              <h2>Comece a animar hoje.</h2>
            </div>
            <div className="card price-card" data-tilt="6" data-reveal>
              <span className="badge">Figma → After Effects</span>
              {PRICE ? <div className="value">{PRICE}</div> : <div className="value" style={{ fontSize: "2.2rem" }}>Saf-Bridge</div>}
              <p>Plugin do Figma + painel do After Effects</p>
              <ul>
                <li>Camadas separadas e textos editáveis</li>
                <li>After Effects 2020 a 2026 · Windows e Mac</li>
                <li>Ativação pelo e-mail da compra</li>
                <li>Troca de PC liberada</li>
                <li>Suporte pelo {SUPPORT}</li>
              </ul>
              <a className="btn btn-primary" {...buy}>Comprar agora <span className="arrow">→</span></a>
              <small>Pagamento seguro pelo checkout. A licença chega no seu e-mail.</small>
            </div>
          </div>
        </section>

        <section id="faq" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="head center" data-reveal>
              <span className="eyebrow">Dúvidas</span>
              <h2>Perguntas frequentes</h2>
            </div>
            <div className="faq">
              {faq.map(([q, a]) => (
                <details className="card" key={q} data-reveal>
                  <summary>{q}</summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="final" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="hero-card hero" data-reveal>
              <div style={{ position: "relative", zIndex: 1 }}>
                <h2 style={{ color: "#fff" }}>Bora parar de exportar?</h2>
                <p className="sub">Do Figma pro After Effects em 1 clique · camadas e textos editáveis.</p>
                <a className="btn btn-white pulse" {...buy}>Comprar agora <span className="arrow">→</span></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <span className="logo"><i />Saf-Bridge</span>
          <span>Suporte e bugs: <b>{SUPPORT}</b></span>
          <span>© {new Date().getFullYear()} Saf-Bridge · por EoSamKkkj</span>
        </div>
      </footer>
    </>
  );
}
