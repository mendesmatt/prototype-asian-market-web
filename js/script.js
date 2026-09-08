const PRONTOS = [
  { id:'p1', nome:'Bentô de Tonkatsu',      desc:'Lombo panko, arroz gohan e tsukemono', preco:42.90, g:'linear-gradient(140deg,#7F1D1D,#DC2626)', k:'弁' },
  { id:'p2', nome:'Combinado Sushi Premium',desc:'18 peças · salmão, atum e hamachi',     preco:89.90, g:'linear-gradient(140deg,#134E4A,#059669)', k:'寿' },
  { id:'p3', nome:'Gyōza Artesanal',        desc:'12 unidades · porco e cebolinha',       preco:34.50, g:'linear-gradient(140deg,#27272A,#52525B)', k:'餃' }
];

const CATEGORIAS = [
  { nome:'Mercearia & Molhos', sub:'Shoyu, mirin, dashi, curry', k:'醤', g:'linear-gradient(140deg,#292524,#57534E)', produtos:[
      {id:'m1', nome:'Shoyu Kikkoman 500ml',  desc:'Fermentação natural', preco:28.90},
      {id:'m2', nome:'Mirin Hinode 400ml',    desc:'Saquê culinário doce', preco:24.50},
      {id:'m3', nome:'Dashi em pó Ajinomoto', desc:'Caldo de bonito · 60g', preco:19.90},
      {id:'m4', nome:'Curry Golden S&B',      desc:'Bloco médio picante', preco:32.00},
      {id:'m5', nome:'Missô branco Shiro',    desc:'Pote 500g', preco:27.40}
  ]},
  { nome:'Massas & Lamens', sub:'Ramen instantâneo, udon, soba', k:'麺', g:'linear-gradient(140deg,#7C2D12,#EA580C)', produtos:[
      {id:'l1', nome:'Ramen Ichiran Tonkotsu', desc:'Kit 2 porções · importado', preco:22.90},
      {id:'l2', nome:'Udon fresco Sanuki',     desc:'Pacote 3 porções', preco:14.90},
      {id:'l3', nome:'Soba Hakubaku',          desc:'Trigo sarraceno · 270g', preco:26.50},
      {id:'l4', nome:'Nissin Raoh Shoyu',      desc:'Caldo artesanal', preco:18.90},
      {id:'l5', nome:'Massa fresca p/ lamen',  desc:'Kansui · 4 porções', preco:21.00}
  ]},
  { nome:'Snacking & Confeitaria', sub:'Pocky, KitKat importado, mochi', k:'菓', g:'linear-gradient(140deg,#831843,#EC4899)', produtos:[
      {id:'s1', nome:'Pocky Matcha',        desc:'Edição Kyoto · 2 saches', preco:15.90},
      {id:'s2', nome:'KitKat Sakura',       desc:'Caixa 12 mini · Japão', preco:21.50},
      {id:'s3', nome:'Mochi Daifuku',       desc:'6 unidades · feijão azuki', preco:24.90},
      {id:'s4', nome:'Senbei de shoyu',     desc:'Biscoito de arroz · 100g', preco:17.40},
      {id:'s5', nome:'Hi-Chew sortido',     desc:'Bala macia · 4 sabores', preco:12.90}
  ]},
  { nome:'Bebidas & Sakes', sub:'Sakes refinados, chás verdes, ramune', k:'酒', g:'linear-gradient(140deg,#1E3A5F,#3B82F6)', produtos:[
      {id:'b1', nome:'Sake Junmai Hakutsuru', desc:'720ml · seco', preco:89.90},
      {id:'b2', nome:'Chá Sencha Uji',        desc:'Folhas · 100g', preco:38.00},
      {id:'b3', nome:'Ramune Original',       desc:'Garrafa de gude · 200ml', preco:16.90},
      {id:'b4', nome:'Genmaicha torrado',     desc:'Chá com arroz · 80g', preco:34.50},
      {id:'b5', nome:'Sake Nigori Zipang',    desc:'Não filtrado · 250ml', preco:59.00}
  ]},
  { nome:'Utensílios & Cozinha', sub:'Hashis, panela de arroz, facas', k:'器', g:'linear-gradient(140deg,#1C1917,#78716C)', produtos:[
      {id:'u1', nome:'Hashi de bambu',        desc:'Par lacado · 23cm', preco:12.90},
      {id:'u2', nome:'Panela de arroz 3 copos',desc:'Elétrica · antiaderente', preco:329.00},
      {id:'u3', nome:'Faca Santoku aço VG-10',desc:'17cm · cabo pakkawood', preco:189.00},
      {id:'u4', nome:'Esteira Makisu',        desc:'Bambu · 24x24cm', preco:22.00},
      {id:'u5', nome:'Tigela donburi',        desc:'Cerâmica esmaltada', preco:46.00}
  ]}
];

const RECEITAS = [
  { nome:'Lamen Tradicional em casa', tempo:'45 min', nivel:'Intermediário', k:'拉', g:'linear-gradient(140deg,#7C1D1D,#DC2626)',
    resumo:'Caldo shoyu redondo, massa no ponto e ajitama de gema cremosa.',
    itens:[{id:'l5',nome:'Massa fresca p/ lamen',preco:21.00},{id:'m1',nome:'Shoyu Kikkoman 500ml',preco:28.90},{id:'m3',nome:'Dashi em pó Ajinomoto',preco:19.90},{id:'m2',nome:'Mirin Hinode 400ml',preco:24.50},{id:'r1',nome:'Narutomaki fatiado',preco:18.00},{id:'r2',nome:'Nori em tiras',preco:14.50},{id:'r3',nome:'Ovos caipiras (6 un)',preco:16.90}],
    passos:['Ferva 1,5 L de água com o dashi e reserve o caldo quente.','Tempere com shoyu e mirin, prove e ajuste o sal.','Cozinhe os ovos 6 min e marine no shoyu por 30 min.','Cozinhe a massa 2 min em água separada e escorra bem.','Monte: caldo, massa, ajitama, narutomaki e nori.']
  },
  { nome:'Gyōza artesanal', tempo:'60 min', nivel:'Avançado', k:'餃', g:'linear-gradient(140deg,#27272A,#52525B)',
    resumo:'Fundo crocante, topo no vapor — o método yaki-gyōza da loja.',
    itens:[{id:'g1',nome:'Massa para gyoza (25 discos)',preco:16.90},{id:'g2',nome:'Carne de porco moída 500g',preco:32.00},{id:'g3',nome:'Acelga chinesa',preco:9.90},{id:'m1',nome:'Shoyu Kikkoman 500ml',preco:28.90},{id:'g4',nome:'Óleo de gergelim torrado',preco:23.40}],
    passos:['Salgue a acelga picada, espere 10 min e esprema toda a água.','Misture com a carne, shoyu e óleo de gergelim.','Recheie e pregueie os discos, selando com água.','Doure o fundo 2 min, junte 50 ml de água e tampe 6 min.','Destampe e deixe secar até estalar.']
  },
  { nome:'Oyakodon', tempo:'25 min', nivel:'Fácil', k:'親', g:'linear-gradient(140deg,#78350F,#F59E0B)',
    resumo:'Frango e ovo no caldo doce sobre arroz — jantar de trinta minutos.',
    itens:[{id:'o1',nome:'Arroz japonês Koshihikari 1kg',preco:34.90},{id:'o2',nome:'Coxa de frango desossada',preco:26.50},{id:'m1',nome:'Shoyu Kikkoman 500ml',preco:28.90},{id:'m2',nome:'Mirin Hinode 400ml',preco:24.50},{id:'r3',nome:'Ovos caipiras (6 un)',preco:16.90}],
    passos:['Cozinhe o arroz e mantenha tampado.','Refogue cebola em shoyu e mirin por 3 min.','Junte o frango em cubos e cozinhe 8 min.','Despeje os ovos batidos, tampe e desligue em 1 min.','Sirva sobre o arroz ainda escorrendo.']
  },
  { nome:'Chirashi de salmão', tempo:'30 min', nivel:'Fácil', k:'散', g:'linear-gradient(140deg,#134E4A,#059669)',
    resumo:'Sushi de tigela: arroz temperado e peixe fatiado por cima.',
    itens:[{id:'o1',nome:'Arroz japonês Koshihikari 1kg',preco:34.90},{id:'c1',nome:'Vinagre de arroz Mizkan',preco:19.90},{id:'c2',nome:'Salmão sashimi 300g',preco:79.00},{id:'r2',nome:'Nori em tiras',preco:14.50},{id:'u5',nome:'Tigela donburi',preco:46.00}],
    passos:['Lave o arroz até a água sair clara e cozinhe.','Tempere quente com vinagre, açúcar e sal.','Espalhe na tigela e deixe amornar.','Fatie o salmão em lâminas de 5 mm.','Cubra o arroz e finalize com nori e gergelim.']
  }
];

const PEDIDOS = [
  { data:'12 jul · 20:14', total:154.20, itens:[{id:'p1',nome:'Bentô de Tonkatsu',preco:42.90},{id:'l1',nome:'Ramen Ichiran Tonkotsu',preco:22.90},{id:'b1',nome:'Sake Junmai Hakutsuru',preco:89.90}], resumo:'Bentô de Tonkatsu, Ramen Ichiran +1' },
  { data:'28 jun · 11:02', total:96.30,  itens:[{id:'s2',nome:'KitKat Sakura',preco:21.50},{id:'s3',nome:'Mochi Daifuku',preco:24.90},{id:'b2',nome:'Chá Sencha Uji',preco:38.00},{id:'s1',nome:'Pocky Matcha',preco:15.90}], resumo:'KitKat Sakura, Mochi Daifuku +2' },
  { data:'09 jun · 19:47', total:212.80, itens:[{id:'u3',nome:'Faca Santoku aço VG-10',preco:189.00},{id:'u1',nome:'Hashi de bambu',preco:12.90},{id:'u4',nome:'Esteira Makisu',preco:22.00}], resumo:'Faca Santoku, Hashi de bambu +1' }
];

let cart = [];
const FRETE = 9.90, FRETE_GRATIS = 180;
const brl = v => 'R$ ' + v.toFixed(2).replace('.', ',');

function tick(){
  const d = new Date();
  document.getElementById('clock').textContent =
    String(d.getHours()).padStart(2,'0') + ':' + String(d.getMinutes()).padStart(2,'0');
}
tick(); setInterval(tick, 15000);

function switchTab(tab){
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById('view-' + tab).classList.add('active');
  document.querySelectorAll('.tab-btn').forEach(b => {
    const on = b.dataset.tab === tab;
    b.classList.toggle('active', on);
    b.classList.toggle('text-torii', on);
    b.classList.toggle('text-nanquim-40', !on);
  });
  document.getElementById('main').scrollTop = 0;
}

function addToCart(id, nome, preco, silent){
  const found = cart.find(i => i.id === id);
  if (found) found.qtd++;
  else cart.push({ id, nome, preco, qtd:1 });
  renderCart();
  if (!silent) toast(nome + ' no carrinho');
}
function changeQty(id, delta){
  const it = cart.find(i => i.id === id);
  if (!it) return;
  it.qtd += delta;
  if (it.qtd <= 0) cart = cart.filter(i => i.id !== id);
  renderCart();
}
function cartCount(){ return cart.reduce((s,i) => s + i.qtd, 0); }
function subtotal(){ return cart.reduce((s,i) => s + i.preco * i.qtd, 0); }

function renderCart(){
  const n = cartCount(), badge = document.getElementById('cartBadge');
  if (n > 0){
    badge.textContent = n; badge.classList.remove('hidden');
    badge.classList.remove('bump'); void badge.offsetWidth; badge.classList.add('bump');
  } else badge.classList.add('hidden');

  document.getElementById('cartSummary').textContent = n === 1 ? '1 item' : n + ' itens';

  const box = document.getElementById('cartItems');
  const footer = document.getElementById('cartFooter');

  if (!cart.length){
    footer.classList.add('hidden');
    box.innerHTML = `
      <div class="py-14 flex flex-col items-center text-center">
        <div class="w-14 h-14 rounded-2xl bg-washi-deep flex items-center justify-center font-mincho font-extrabold text-[24px] text-nanquim-40">空</div>
        <p class="font-mincho font-extrabold text-[15px] text-nanquim mt-4">Carrinho vazio</p>
        <p class="text-[11px] text-nanquim-60 mt-1.5 max-w-[220px] leading-snug">Comece pelos pratos prontos do dia ou monte uma receita inteira em um toque.</p>
        <button onclick="closeCart(); switchTab('loja')" class="mt-4 h-10 px-5 rounded-2xl bg-nanquim text-white text-[12px] font-bold active:scale-95 transition">Ver a loja</button>
      </div>`;
    return;
  }

  footer.classList.remove('hidden');
  box.innerHTML = cart.map(i => `
    <div class="flex items-center gap-3">
      <div class="thumb w-12 h-12 rounded-xl shrink-0" style="background:linear-gradient(140deg,#3F3F46,#71717A)"><span class="text-[19px]">和</span></div>
      <div class="min-w-0 flex-1">
        <p class="text-[12px] font-bold text-nanquim leading-snug truncate">${i.nome}</p>
        <p class="text-[11px] font-bold text-torii mt-0.5">${brl(i.preco)}</p>
      </div>
      <div class="flex items-center gap-2 shrink-0">
        <button onclick="changeQty('${i.id}',-1)" class="w-7 h-7 rounded-lg bg-washi-deep text-nanquim flex items-center justify-center active:scale-90 transition" aria-label="Remover uma unidade">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12h14"/></svg>
        </button>
        <span class="text-[12px] font-black text-nanquim w-4 text-center">${i.qtd}</span>
        <button onclick="changeQty('${i.id}',1)" class="w-7 h-7 rounded-lg bg-nanquim text-white flex items-center justify-center active:scale-90 transition" aria-label="Adicionar uma unidade">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>
        </button>
      </div>
    </div>`).join('');

  const sub = subtotal();
  const frete = sub >= FRETE_GRATIS ? 0 : FRETE;
  document.getElementById('sumSubtotal').textContent = brl(sub);
  document.getElementById('sumShip').textContent = frete === 0 ? 'grátis' : brl(frete);
  document.getElementById('sumTotal').textContent = brl(sub + frete);
  document.getElementById('freeShip').textContent = frete === 0
    ? 'Frete grátis aplicado neste pedido.'
    : 'Faltam ' + brl(FRETE_GRATIS - sub) + ' para o frete sair de graça.';
}

function openCart(){
  const ov = document.getElementById('cartOverlay');
  ov.classList.remove('hidden');
  requestAnimationFrame(() => {
    ov.classList.remove('opacity-0');
    document.getElementById('cartSheet').classList.remove('translate-y-full');
  });
}
function closeCart(){
  const ov = document.getElementById('cartOverlay');
  ov.classList.add('opacity-0');
  document.getElementById('cartSheet').classList.add('translate-y-full');
  setTimeout(() => ov.classList.add('hidden'), 300);
}
function checkout(){
  const sub = subtotal();
  const frete = sub >= FRETE_GRATIS ? 0 : FRETE;
  closeCart();
  toast('Pedido de ' + brl(sub + frete) + ' confirmado · chega em 45 min');
  cart = []; renderCart();
}

let toastTimer;
function toast(msg){
  const t = document.getElementById('toast');
  document.getElementById('toastMsg').textContent = msg;
  t.classList.remove('opacity-0','translate-y-3');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.add('opacity-0','translate-y-3'), 2200);
}

function addRecipe(idx){
  const r = RECEITAS[idx];
  r.itens.forEach(i => addToCart(i.id, i.nome, i.preco, true));
  toast(r.itens.length + ' ingredientes de ' + r.nome + ' no carrinho');
}
function repeatOrder(idx){
  const p = PEDIDOS[idx];
  p.itens.forEach(i => addToCart(i.id, i.nome, i.preco, true));
  toast('Pedido de ' + p.data.split(' ·')[0] + ' recriado no carrinho');
}

function openCategory(i){
  const c = CATEGORIAS[i];
  document.getElementById('catList').classList.add('hidden');
  document.querySelector('#view-categorias > .px-5').classList.add('hidden');
  document.getElementById('catPanel').classList.remove('hidden');
  document.getElementById('catTitle').textContent = c.nome;
  document.getElementById('catCount').textContent = c.produtos.length + ' produtos · ' + c.sub;
  document.getElementById('catProducts').innerHTML = c.produtos.map(p => `
    <div class="flex items-center gap-3 rounded-2xl border border-washi-line bg-white p-2.5">
      <div class="thumb w-14 h-14 rounded-xl shrink-0" style="background:${c.g}"><span class="text-[22px]">${c.k}</span></div>
      <div class="min-w-0 flex-1">
        <p class="text-[12.5px] font-bold text-nanquim leading-snug">${p.nome}</p>
        <p class="text-[10.5px] text-nanquim-40 font-medium mt-0.5 truncate">${p.desc}</p>
        <p class="text-[13px] font-black text-nanquim mt-1">${brl(p.preco)}</p>
      </div>
      <button onclick="addToCart('${p.id}','${p.nome}',${p.preco})" class="w-9 h-9 rounded-xl bg-torii text-white flex items-center justify-center shrink-0 active:scale-90 transition" aria-label="Adicionar ${p.nome}">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>
      </button>
    </div>`).join('');
  document.getElementById('main').scrollTop = 0;
}
function closeCategory(){
  document.getElementById('catPanel').classList.add('hidden');
  document.getElementById('catList').classList.remove('hidden');
  document.querySelector('#view-categorias > .px-5').classList.remove('hidden');
  document.getElementById('main').scrollTop = 0;
}

document.getElementById('prontos').innerHTML = PRONTOS.map(p => `
  <div class="flex items-center gap-3 rounded-3xl border border-washi-line bg-white p-3">
    <div class="thumb w-[74px] h-[74px] rounded-2xl shrink-0" style="background:${p.g}"><span class="text-[30px]">${p.k}</span></div>
    <div class="min-w-0 flex-1">
      <p class="text-[13px] font-bold text-nanquim leading-snug">${p.nome}</p>
      <p class="text-[10.5px] text-nanquim-40 font-medium mt-0.5 leading-snug">${p.desc}</p>
      <div class="flex items-center justify-between mt-2">
        <p class="font-mincho font-extrabold text-[15px] text-nanquim leading-none">${brl(p.preco)}</p>
        <button onclick="addToCart('${p.id}','${p.nome}',${p.preco})" class="h-8 px-3.5 rounded-full bg-nanquim text-white text-[11px] font-bold flex items-center gap-1 active:scale-95 transition">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>
          Adicionar
        </button>
      </div>
    </div>
  </div>`).join('');

document.getElementById('catList').innerHTML = CATEGORIAS.map((c,i) => `
  <button onclick="openCategory(${i})" class="w-full flex items-center gap-3.5 rounded-2xl border border-washi-line bg-white p-3 text-left active:scale-[.99] transition">
    <div class="thumb w-12 h-12 rounded-xl shrink-0" style="background:${c.g}"><span class="text-[21px]">${c.k}</span></div>
    <div class="min-w-0 flex-1">
      <p class="text-[13px] font-bold text-nanquim leading-snug">${c.nome}</p>
      <p class="text-[10.5px] text-nanquim-40 font-medium mt-0.5 leading-snug">${c.sub}</p>
    </div>
    <span class="text-[10px] font-black text-nanquim-40 shrink-0">${c.produtos.length}</span>
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A1A1AA" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" class="shrink-0"><path d="m10 6 6 6-6 6"/></svg>
  </button>`).join('');

document.getElementById('recipeFeed').innerHTML = RECEITAS.map((r,i) => {
  const total = r.itens.reduce((s,x) => s + x.preco, 0);
  return `
  <div class="rounded-3xl border border-washi-line bg-white overflow-hidden">
    <div class="thumb h-[92px]" style="background:${r.g}">
      <span class="text-[46px]">${r.k}</span>
      <div class="absolute bottom-3 left-3 flex gap-1.5">
        <span class="h-6 px-2.5 rounded-full bg-white/92 text-[9.5px] font-bold text-nanquim flex items-center gap-1">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7.5V12l3 2"/></svg>${r.tempo}</span>
        <span class="h-6 px-2.5 rounded-full bg-white/92 text-[9.5px] font-bold text-nanquim flex items-center">${r.nivel}</span>
      </div>
    </div>
    <div class="p-4">
      <h4 class="font-mincho font-extrabold text-[15px] text-nanquim leading-snug">${r.nome}</h4>
      <p class="text-[11px] text-nanquim-60 mt-1 leading-snug">${r.resumo}</p>

      <p class="text-[9px] font-black tracking-[.18em] uppercase text-nanquim-40 mt-4">Produtos da loja</p>
      <div class="mt-2 rounded-2xl bg-washi p-3 space-y-1.5">
        ${r.itens.map(x => `
          <div class="flex items-center justify-between gap-2">
            <p class="text-[11px] font-medium text-nanquim truncate">${x.nome}</p>
            <p class="text-[11px] font-bold text-nanquim-60 shrink-0">${brl(x.preco)}</p>
          </div>`).join('')}
        <div class="flex items-center justify-between pt-2 mt-1 border-t border-washi-line">
          <p class="text-[10px] font-black uppercase tracking-[.14em] text-nanquim-40">Lista completa</p>
          <p class="text-[12.5px] font-black text-nanquim">${brl(total)}</p>
        </div>
      </div>

      <p class="text-[9px] font-black tracking-[.18em] uppercase text-nanquim-40 mt-4">Passo a passo</p>
      <ol class="mt-2 space-y-2">
        ${r.passos.map((p,n) => `
          <li class="flex gap-2.5">
            <span class="shrink-0 w-4 text-[10px] font-black text-torii pt-0.5">${n+1}</span>
            <span class="text-[11.5px] text-nanquim leading-snug">${p}</span>
          </li>`).join('')}
      </ol>

      <button onclick="addRecipe(${i})" class="mt-4 w-full h-11 rounded-2xl bg-matcha text-white text-[12px] font-bold flex items-center justify-center gap-2 active:scale-[.98] transition">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 8h14l-1.2 11a2 2 0 0 1-2 1.8H8.2A2 2 0 0 1 6.2 19L5 8Z"/><path d="M9 8V6.5a3 3 0 0 1 6 0V8"/><path d="M9.5 13h5"/></svg>
        Adicionar a lista ao carrinho
      </button>
    </div>
  </div>`;
}).join('');

document.getElementById('orders').innerHTML = PEDIDOS.map((p,i) => `
  <div class="rounded-2xl border border-washi-line bg-white p-3.5">
    <div class="flex items-start justify-between gap-3">
      <div class="min-w-0">
        <p class="text-[10px] font-black tracking-[.16em] uppercase text-nanquim-40">${p.data}</p>
        <p class="text-[12px] font-bold text-nanquim mt-1.5 leading-snug">${p.resumo}</p>
        <p class="text-[13px] font-black text-nanquim mt-1">${brl(p.total)}</p>
      </div>
      <button onclick="repeatOrder(${i})" class="shrink-0 h-8 px-3.5 rounded-full bg-torii-soft text-torii text-[11px] font-bold flex items-center gap-1.5 active:scale-95 transition">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 11A8 8 0 1 0 12 20"/><path d="M20 5v6h-6"/></svg>
        Repetir
      </button>
    </div>
  </div>`).join('');

renderCart();
