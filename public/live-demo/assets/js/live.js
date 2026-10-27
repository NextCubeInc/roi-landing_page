/* Live demo da landing: monta o painel e o app, ajusta a escala e liga os controles. */
(function () {
  const M = window.MOCK;
  const stage = document.querySelector(".ld-stage");
  const wide = matchMedia("(min-aspect-ratio: 7 / 5)");

  document.querySelectorAll("[data-ic]").forEach((el) => { el.outerHTML = window.icon(el.dataset.ic); });

  /* desktop: palco 1400×800 escalado para caber no iframe; celular: layout fluido */
  function fit() {
    stage.style.transform = wide.matches ? `translate(-50%, -50%) scale(${Math.min(innerWidth / 1400, innerHeight / 800)})` : "";
  }
  addEventListener("resize", fit);
  wide.addEventListener("change", fit);
  fit();

  /* painel da empresa: largura lógica de 1280px (1024px no celular, para o texto não sumir) */
  const bizEl = document.querySelector('[data-app="biz"]');
  window.BizApp(bizEl, { start: bizEl.dataset.start });
  const vp = bizEl.parentElement;
  new ResizeObserver(() => {
    const w = vp.clientWidth, h = vp.clientHeight;
    if (!w) return;
    const lw = wide.matches ? 1280 : 1024;
    const s = w / lw;
    bizEl.style.width = lw + "px";
    bizEl.style.height = h / s + "px";
    bizEl.style.transform = `scale(${s})`;
  }).observe(vp);

  /* app do influenciador: tela lógica de 390px */
  const infEl = document.querySelector('[data-app="inf"]');
  const app = window.InfApp(infEl, { start: infEl.dataset.start });
  new ResizeObserver(() => {
    const w = infEl.clientWidth, h = infEl.clientHeight;
    if (!w) return;
    const s = w / 390;
    app.root.style.height = h / s + "px";
    app.root.style.transform = `scale(${s})`;
  }).observe(infEl);

  /* abas (só no celular) */
  const tabs = stage.querySelectorAll("[role=tab]");
  tabs.forEach((t) => t.addEventListener("click", () => {
    stage.dataset.view = t.dataset.view;
    tabs.forEach((x) => x.setAttribute("aria-selected", x === t));
  }));

  /* vendas simuladas */
  const toastEl = stage.querySelector(".ld-toast");
  let toastT;
  function sale(mine) {
    const o = M.simulateSale(mine ? { infId: M.influencers[0].id } : {});
    const inf = M.byId(o.infId);
    toastEl.innerHTML = `${window.icon("zap")}<span>Nova venda: <b>${inf.name}</b> · cupom ${o.coupon} · ${M.fmt.brl(o.total)}</span>`;
    toastEl.classList.add("show");
    clearTimeout(toastT);
    toastT = setTimeout(() => toastEl.classList.remove("show"), 2600);
  }
  stage.querySelector('[data-act="sale"]').addEventListener("click", () => sale(true));

  /* "Ao vivo": uma venda a cada 3,5–6 s, metade delas da influenciadora do celular */
  const autoBtn = stage.querySelector('[data-act="auto"]');
  let timer = null, n = 0;
  const loop = () => { sale(n++ % 2 === 0); timer = setTimeout(loop, 3500 + Math.random() * 2500); };
  function setAuto(on) {
    clearTimeout(timer); timer = null;
    if (on) timer = setTimeout(loop, 600);
    autoBtn.setAttribute("aria-pressed", on);
  }
  autoBtn.addEventListener("click", () => setAuto(!timer));

  /* ao aparecer na tela pela primeira vez, mostra uma venda chegando; fora da tela, pausa o "Ao vivo" */
  let shown = false;
  new IntersectionObserver(([e]) => {
    if (e.isIntersecting && !shown) { shown = true; setTimeout(() => sale(true), 1400); }
    if (!e.isIntersecting && timer) setAuto(false);
  }, { threshold: 0.5 }).observe(stage);
})();
