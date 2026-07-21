/* ===========================================
   Askri Fragrances - Main Script
   Handles: navigation, UI interactions, rendering, filters
   =========================================== */

/* ---------- Loader ---------- */
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if(loader) setTimeout(() => loader.classList.add('hide'), 400);
});

/* ---------- Utilities ---------- */
const $  = (s, el=document) => el.querySelector(s);
const $$ = (s, el=document) => Array.from(el.querySelectorAll(s));
const money = n => 'Rs. ' + Number(n).toLocaleString('en-PK', {minimumFractionDigits: 0, maximumFractionDigits: 0});
const getParam = k => new URLSearchParams(location.search).get(k);
const findProduct = id => window.PRODUCTS.find(p => p.id === Number(id));
const starRating = r => {
  const full = Math.floor(r), half = r - full >= 0.5;
  let out = '';
  for(let i=0;i<full;i++) out += '★';
  if(half) out += '⯨'; else if(full<5) { /* nothing */ }
  while(out.length < 5) out += '<span class="muted">★</span>';
  return out;
};

/* ---------- Navigation & mobile menu ---------- */
document.addEventListener('DOMContentLoaded', () => {
  const nav = $('.navbar');
  window.addEventListener('scroll', () => {
    if(nav) nav.classList.toggle('scrolled', window.scrollY > 50);
    const st = $('.scroll-top');
    if(st) st.classList.toggle('show', window.scrollY > 400);
  });

  // Highlight active nav link
  const path = location.pathname.split('/').pop() || 'index.html';
  $$('.nav-links a, .mobile-menu a').forEach(a => {
    const href = a.getAttribute('href');
    if(href === path) a.classList.add('active');
  });

  // Mobile menu
  const menuToggle = $('.menu-toggle');
  const mobile = $('.mobile-menu');
  const overlay = $('.overlay');
  if(menuToggle){
    menuToggle.addEventListener('click', () => {
      mobile.classList.add('open');
      overlay.classList.add('show');
    });
  }
  if(overlay){
    overlay.addEventListener('click', () => {
      mobile.classList.remove('open');
      overlay.classList.remove('show');
      $('.search-bar')?.classList.remove('open');
    });
  }
  $('.mobile-menu .close')?.addEventListener('click', () => {
    mobile.classList.remove('open');
    overlay.classList.remove('show');
  });

  // Search bar
  const searchToggle = $('.search-toggle');
  if(searchToggle){
    searchToggle.addEventListener('click', () => {
      $('.search-bar').classList.toggle('open');
      setTimeout(() => $('.search-bar input')?.focus(), 100);
    });
  }
  const searchForm = $('.search-bar form');
  if(searchForm){
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const q = $('.search-bar input').value.trim();
      if(q) location.href = `shop.html?q=${encodeURIComponent(q)}`;
    });
  }

  // Scroll to top
  $('.scroll-top')?.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

  // Cookie banner
  if(!localStorage.getItem('askri_cookies')){
    setTimeout(() => $('.cookie-banner')?.classList.add('show'), 1800);
  }
  $('.cookie-banner button')?.addEventListener('click', () => {
    localStorage.setItem('askri_cookies','1');
    $('.cookie-banner').classList.remove('show');
  });

  // Newsletter popup
  if(!sessionStorage.getItem('askri_popup')){
    setTimeout(() => $('#newsletter-popup')?.classList.add('show'), 8000);
  }
  $('#newsletter-popup .close')?.addEventListener('click', () => {
    $('#newsletter-popup').classList.remove('show');
    sessionStorage.setItem('askri_popup','1');
  });
  $('#newsletter-popup form')?.addEventListener('submit', e => {
    e.preventDefault();
    showToast('Welcome to the Askri family!');
    $('#newsletter-popup').classList.remove('show');
    sessionStorage.setItem('askri_popup','1');
  });

  // Newsletter footer forms
  $$('.newsletter form, .footer-newsletter form').forEach(f => {
    f.addEventListener('submit', e => {
      e.preventDefault();
      showToast('Subscribed successfully!');
      f.reset();
    });
  });

  // FAQ accordion
  $$('.faq-q').forEach(q => {
    q.addEventListener('click', () => {
      q.parentElement.classList.toggle('open');
    });
  });

  // Testimonial slider
  initTestimonials();

  // Counters
  initCounters();

  // Page-specific rendering
  if($('#featured-products')) renderFeatured();
  if($('#shop-products')) initShop();
  if($('#product-detail')) renderProduct();
  if($('#cart-page')) renderCart();
  if($('#wishlist-page')) renderWishlist();

  window.addEventListener('products-loaded', () => {
    if($('#featured-products')) renderFeatured();
    if($('#shop-products')) renderShop();
    if($('#product-detail')) renderProduct();
  });
});

/* ---------- Card renderer (shared) ---------- */
function productCardHTML(p){
  const wished = isWished(p.id);
  return `
    <div class="product-card" data-id="${p.id}">
      <div class="product-media">
        ${p.isNew ? '<span class="product-badge new">New</span>' : ''}
        ${p.isSale ? `<span class="product-badge sale">-${p.discount}%</span>` : ''}
        ${p.isBest && !p.isNew && !p.isSale ? '<span class="product-badge">Best Seller</span>' : ''}
        <div class="product-actions">
          <button class="wish-btn ${wished?'active':''}" data-id="${p.id}" title="Wishlist" aria-label="Wishlist"><i class="fas fa-heart"></i></button>
          <button class="quick-btn" data-id="${p.id}" title="Quick View" aria-label="Quick view"><i class="fas fa-eye"></i></button>
        </div>
        <a href="product.html?id=${p.id}"><img loading="lazy" src="${p.image}" alt="${p.name}"></a>
      </div>
      <div class="product-info">
        <p class="cat">${p.category} · ${p.brand}</p>
        <h3><a href="product.html?id=${p.id}">${p.name}</a></h3>
        <div class="rating">${starRating(p.rating)} <span style="color:#888;font-size:.75rem;letter-spacing:0"> (${p.reviewCount})</span></div>
        <div class="product-price">
          <span class="now">${money(p.price)}</span>
          ${p.oldPrice ? `<span class="old">${money(p.oldPrice)}</span>` : ''}
        </div>
        <button class="add-cart-btn" data-add="${p.id}"><i class="fas fa-bag-shopping"></i> Add to Cart</button>
      </div>
    </div>
  `;
}

function bindCardEvents(root=document){
  $$('[data-add]', root).forEach(b => b.addEventListener('click', e => {
    e.preventDefault(); addToCart(Number(b.dataset.add));
  }));
  $$('.wish-btn', root).forEach(b => b.addEventListener('click', e => {
    e.preventDefault(); e.stopPropagation();
    const added = toggleWishlist(Number(b.dataset.id));
    b.classList.toggle('active', added);
  }));
  $$('.quick-btn', root).forEach(b => b.addEventListener('click', e => {
    e.preventDefault(); e.stopPropagation();
    openQuickView(Number(b.dataset.id));
  }));
}

/* ---------- Home: Featured products ---------- */
function renderFeatured(){
  const best = window.PRODUCTS.filter(p => p.isBest || p.rating >= 4.7).slice(0,8);
  const arrivals = window.PRODUCTS.filter(p => p.isNew).concat(window.PRODUCTS).slice(0,8);
  const best$ = $('#featured-products');
  const new$ = $('#new-arrivals');
  if(best$) best$.innerHTML = best.map(productCardHTML).join('');
  if(new$) new$.innerHTML = arrivals.map(productCardHTML).join('');
  bindCardEvents();
}

/* ---------- Testimonials ---------- */
function initTestimonials(){
  const items = $$('.testimonial');
  const dots = $$('.slider-dots button');
  if(!items.length) return;
  let idx = 0;
  const go = i => {
    items.forEach((el,k) => el.classList.toggle('active', k===i));
    dots.forEach((el,k) => el.classList.toggle('active', k===i));
    idx = i;
  };
  dots.forEach((d,i) => d.addEventListener('click', () => go(i)));
  setInterval(() => go((idx+1) % items.length), 5000);
}

/* ---------- Counters ---------- */
function initCounters(){
  const els = $$('.counter-item .num');
  if(!els.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if(en.isIntersecting && !en.target._done){
        const target = Number(en.target.dataset.target || 0);
        const suffix = en.target.dataset.suffix || '';
        const dur = 1600;
        const start = performance.now();
        const tick = t => {
          const p = Math.min(1, (t-start)/dur);
          en.target.textContent = Math.floor(target * (0.5 - Math.cos(Math.PI*p)/2)) + suffix;
          if(p<1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        en.target._done = true;
      }
    });
  }, {threshold:0.4});
  els.forEach(el => obs.observe(el));
}

/* ---------- Quick View Modal ---------- */
function openQuickView(id){
  const p = findProduct(id); if(!p) return;
  let modal = $('#quick-modal');
  if(!modal){
    modal = document.createElement('div');
    modal.id = 'quick-modal'; modal.className = 'modal';
    modal.innerHTML = `<div class="modal-inner">
      <button class="close" aria-label="Close">×</button>
      <div class="modal-img"><img id="qm-img"></div>
      <div class="modal-body">
        <p class="cat" id="qm-cat"></p>
        <h2 id="qm-name"></h2>
        <div class="rating" id="qm-rating"></div>
        <div class="price"><span class="now" id="qm-price"></span><span class="old" id="qm-old"></span></div>
        <p class="desc" id="qm-desc"></p>
        <div class="pd-buy">
          <button class="btn btn-primary" id="qm-add">Add to Cart</button>
          <a class="btn" id="qm-view">View Details</a>
        </div>
      </div>
    </div>`;
    document.body.appendChild(modal);
    modal.addEventListener('click', e => { if(e.target === modal) modal.classList.remove('show'); });
    modal.querySelector('.close').addEventListener('click', () => modal.classList.remove('show'));
  }
  $('#qm-img').src = p.image;
  $('#qm-img').alt = p.name;
  $('#qm-cat').textContent = `${p.category} · ${p.brand}`;
  $('#qm-name').textContent = p.name;
  $('#qm-rating').innerHTML = starRating(p.rating);
  $('#qm-price').textContent = money(p.price);
  $('#qm-old').textContent = p.oldPrice ? money(p.oldPrice) : '';
  $('#qm-desc').textContent = p.description;
  $('#qm-add').onclick = () => { addToCart(p.id); modal.classList.remove('show'); };
  $('#qm-view').href = `product.html?id=${p.id}`;
  modal.classList.add('show');
}

/* ---------- Shop page ---------- */
let SHOP_STATE = { search:'', cats:[], maxPrice:60000, sort:'featured', page:1, perPage:12 };

function initShop(){
  // preset from URL
  const q = getParam('q'); if(q){ SHOP_STATE.search = q; const inp = $('#shop-search-input'); if(inp) inp.value = q; }
  const cat = getParam('category'); if(cat) SHOP_STATE.cats = [cat];

  // Build category filters dynamically
  const catBox = $('#filter-cats');
  if(catBox){
    const cats = ['Men','Women','Unisex','Arabic'];
    catBox.innerHTML = cats.map(c => `
      <label><input type="checkbox" value="${c}" ${SHOP_STATE.cats.includes(c)?'checked':''}> ${c}</label>
    `).join('');
    catBox.addEventListener('change', () => {
      SHOP_STATE.cats = $$('input:checked', catBox).map(i => i.value);
      SHOP_STATE.page = 1; renderShop();
    });
  }

  const priceInput = $('#price-range');
  const priceVal = $('#price-val');
  if(priceInput){
    priceInput.addEventListener('input', () => {
      SHOP_STATE.maxPrice = Number(priceInput.value);
      priceVal.textContent = money(SHOP_STATE.maxPrice);
      SHOP_STATE.page = 1; renderShop();
    });
  }

  $('#sort-select')?.addEventListener('change', e => { SHOP_STATE.sort = e.target.value; renderShop(); });

  const searchForm = $('#shop-search-form');
  if(searchForm){
    searchForm.addEventListener('submit', e => {
      e.preventDefault();
      SHOP_STATE.search = $('#shop-search-input').value.trim();
      SHOP_STATE.page = 1; renderShop();
    });
  }

  renderShop();

  window.addEventListener('products-loaded', () => renderShop());
}

function renderShop(){
  let list = [...window.PRODUCTS];
  const s = SHOP_STATE;
  if(s.search){
    const q = s.search.toLowerCase();
    list = list.filter(p => (p.name+p.brand+p.category+p.description).toLowerCase().includes(q));
  }
  if(s.cats.length) list = list.filter(p => s.cats.includes(p.category));
  list = list.filter(p => p.price <= s.maxPrice);

  switch(s.sort){
    case 'price-asc':  list.sort((a,b) => a.price - b.price); break;
    case 'price-desc': list.sort((a,b) => b.price - a.price); break;
    case 'name':       list.sort((a,b) => a.name.localeCompare(b.name)); break;
    case 'rating':     list.sort((a,b) => b.rating - a.rating); break;
    case 'newest':     list.sort((a,b) => (b.isNew?1:0)-(a.isNew?1:0)); break;
  }

  const total = list.length;
  const pages = Math.max(1, Math.ceil(total / s.perPage));
  s.page = Math.min(s.page, pages);
  const start = (s.page-1) * s.perPage;
  const page = list.slice(start, start+s.perPage);

  const grid = $('#shop-products');
  grid.innerHTML = page.length
    ? page.map(productCardHTML).join('')
    : '<div class="empty-state" style="grid-column:1/-1"><i class="fas fa-search"></i><h3>No products found</h3><p>Try adjusting your filters or search terms.</p></div>';

  $('#shop-count').textContent = `Showing ${page.length ? start+1 : 0}-${start+page.length} of ${total} products`;

  const pag = $('#pagination');
  if(pag){
    let html = '';
    for(let i=1;i<=pages;i++) html += `<button class="${i===s.page?'active':''}" data-page="${i}">${i}</button>`;
    pag.innerHTML = html;
    $$('button', pag).forEach(b => b.addEventListener('click', () => {
      s.page = Number(b.dataset.page);
      renderShop();
      window.scrollTo({ top: 0, behavior:'smooth' });
    }));
  }
  bindCardEvents();
}

/* ---------- Product detail page ---------- */
function renderProduct(){
  const id = Number(getParam('id')) || 1;
  const p = findProduct(id);
  if(!p){ $('#product-detail').innerHTML = '<div class="empty-state"><h3>Product not found</h3></div>'; return; }
  document.title = `${p.name} — Askri Fragrances`;

  $('#pd-cat').textContent = `${p.category} · ${p.brand}`;
  $('#pd-name').textContent = p.name;
  $('#pd-rating').innerHTML = `${starRating(p.rating)} <span>(${p.reviewCount} reviews)</span>`;
  $('#pd-now').textContent = money(p.price);
  $('#pd-old').textContent = p.oldPrice ? money(p.oldPrice) : '';
  $('#pd-save').textContent = p.discount ? `Save ${p.discount}%` : '';
  if(!p.discount){ $('#pd-old').style.display='none'; $('#pd-save').style.display='none'; }
  $('#pd-desc').textContent = p.description;
  $('#pd-top').textContent = p.notes.top;
  $('#pd-heart').textContent = p.notes.heart;
  $('#pd-base').textContent = p.notes.base;
  $('#pd-ingredients').textContent = p.ingredients;
  $('#pd-size').textContent = p.size;
  $('#pd-stock').textContent = p.stock > 0 ? `In stock (${p.stock} available)` : 'Out of stock';
  $('#pd-sku').textContent = 'ASK-' + String(p.id).padStart(4,'0');

  const mainImg = $('#pd-main-img');
  mainImg.src = p.image;
  mainImg.alt = p.name;

  const thumbs = $('#pd-thumbs');
  thumbs.innerHTML = p.images.map((src,i) => `<img src="${src}" alt="${p.name} ${i+1}" class="${i===0?'active':''}" data-src="${src}">`).join('');
  $$('img', thumbs).forEach(t => t.addEventListener('click', () => {
    mainImg.src = t.dataset.src;
    $$('img', thumbs).forEach(x => x.classList.remove('active'));
    t.classList.add('active');
  }));

  // Qty
  const qty = $('#pd-qty');
  $('#pd-qty-plus').addEventListener('click', () => qty.value = Number(qty.value)+1);
  $('#pd-qty-minus').addEventListener('click', () => qty.value = Math.max(1, Number(qty.value)-1));

  $('#pd-add').addEventListener('click', () => addToCart(p.id, Number(qty.value)));
  const wishBtn = $('#pd-wish');
  wishBtn.classList.toggle('active', isWished(p.id));
  wishBtn.addEventListener('click', () => wishBtn.classList.toggle('active', toggleWishlist(p.id)));

  // Reviews
  $('#pd-reviews').innerHTML = p.reviews.map(r => `
    <div class="review-item">
      <div class="head"><strong>${r.name}</strong><span class="rating">${starRating(r.rating)}</span></div>
      <p>${r.text}</p>
    </div>
  `).join('');

  // Tabs
  $$('.tab-head').forEach(h => h.addEventListener('click', () => {
    $$('.tab-head').forEach(x => x.classList.remove('active'));
    $$('.tab-body').forEach(x => x.classList.remove('active'));
    h.classList.add('active');
    $('#' + h.dataset.tab).classList.add('active');
  }));

  // Related
  const rel = window.PRODUCTS.filter(x => x.category === p.category && x.id !== p.id).slice(0,4);
  $('#pd-related').innerHTML = rel.map(productCardHTML).join('');
  bindCardEvents();

  // WhatsApp float — pre-fill product name + image
  const waLink = $('#wa-float-link');
  if(waLink){
    const msg = `Hi! I want to order *${p.name}*\n\nProduct Image: ${p.image}`;
    waLink.href = `https://wa.me/923256646684?text=${encodeURIComponent(msg)}`;
  }
}

/* ---------- Cart page ---------- */
function renderCart(){
  const cart = getCart();
  const box = $('#cart-content');
  if(!cart.length){
    box.innerHTML = `<div class="empty-state">
      <i class="fas fa-bag-shopping"></i>
      <h3>Your cart is empty</h3>
      <p>Discover our luxurious fragrances and add them to your cart.</p>
      <a href="shop.html" class="btn btn-primary">Continue Shopping</a>
    </div>`;
    return;
  }
  let subtotal = 0;
  const rows = cart.map(item => {
    const p = findProduct(item.id); if(!p) return '';
    const line = p.price * item.qty; subtotal += line;
    return `<tr data-id="${p.id}">
      <td data-label="Product"><div class="item-name">
        <img src="${p.image}" alt="${p.name}">
        <div><h4>${p.name}</h4><p>${p.category} · ${p.size}</p></div>
      </div></td>
      <td data-label="Price" class="price">${money(p.price)}</td>
      <td data-label="Qty">
        <div class="qty-mini">
          <button data-action="minus" data-id="${p.id}">−</button>
          <input type="number" value="${item.qty}" min="1" data-qtyinput="${p.id}">
          <button data-action="plus" data-id="${p.id}">+</button>
        </div>
      </td>
      <td data-label="Subtotal" class="subtotal">${money(line)}</td>
      <td data-label=""><span class="remove" data-remove="${p.id}"><i class="fas fa-times"></i></span></td>
    </tr>`;
  }).join('');

  const shipping = subtotal > 15000 ? 0 : 250;
  const tax = +(subtotal * 0.08).toFixed(2);
  const total = subtotal + shipping + tax;

  box.innerHTML = `
    <table class="cart-table">
      <thead><tr><th>Product</th><th>Price</th><th>Quantity</th><th>Subtotal</th><th></th></tr></thead>
      <tbody>${rows}</tbody>
    </table>
    <div class="cart-summary">
      <h3>Order Summary</h3>
      <div class="row"><span>Subtotal</span><span>${money(subtotal)}</span></div>
      <div class="row"><span>Shipping</span><span>${shipping ? money(shipping) : 'Free'}</span></div>
      <div class="row"><span>Tax (8%)</span><span>${money(tax)}</span></div>
      <div class="row total"><span>Total</span><span>${money(total)}</span></div>
      <button class="btn btn-primary btn-block" style="margin-top:20px" onclick="showCheckout()">Proceed to Checkout</button>
      <a href="shop.html" class="btn btn-block" style="margin-top:10px">Continue Shopping</a>
    </div>
  `;

  $$('[data-remove]').forEach(el => el.addEventListener('click', () => removeFromCart(Number(el.dataset.remove))));
  $$('[data-action]').forEach(b => b.addEventListener('click', () => {
    const id = Number(b.dataset.id);
    const item = getCart().find(i => i.id === id);
    updateQty(id, b.dataset.action === 'plus' ? item.qty+1 : item.qty-1);
  }));
  $$('[data-qtyinput]').forEach(i => i.addEventListener('change', () => updateQty(Number(i.dataset.qtyinput), i.value)));
}

/* ---------- Checkout ---------- */
let selectedPayment = 'cod';
function showCheckout(){
  const cart = getCart();
  if(!cart.length) return;
  renderCheckout();
}
function renderCheckout(){
  const cart = getCart();
  const box = $('#cart-content');
  let subtotal = 0;
  const items = cart.map(item => {
    const p = findProduct(item.id); if(!p) return '';
    const line = p.price * item.qty; subtotal += line;
    return `<div class="checkout-item">
      <img src="${p.image}" alt="${p.name}">
      <div class="ci-info"><h4>${p.name}</h4><p>${p.size}</p></div>
      <span class="ci-qty">x${item.qty}</span>
    </div>`;
  }).join('');
  const shipping = subtotal > 15000 ? 0 : 250;
  const tax = +(subtotal * 0.08).toFixed(2);
  const total = subtotal + shipping + tax;

  box.innerHTML = `
    <div class="back-to-cart" onclick="renderCart()"><i class="fas fa-arrow-left"></i> Back to Cart</div>
    <div class="checkout-grid">
      <div class="checkout-form">
        <h2><i class="fas fa-truck"></i> Billing Details</h2>
        <form id="checkout-form" novalidate>
          <div class="form-row cols-2">
            <div class="form-group">
              <label>Full Name <span class="req">*</span></label>
              <input type="text" id="co-name" placeholder="Your full name" required />
              <span class="form-error">Please enter your name</span>
            </div>
            <div class="form-group">
              <label>Phone Number <span class="req">*</span></label>
              <input type="tel" id="co-phone" placeholder="03XXXXXXXXX" required />
              <span class="form-error">Please enter a valid phone number</span>
            </div>
          </div>
          <div class="form-row" style="margin-top:20px">
            <div class="form-group">
              <label>Email Address</label>
              <input type="email" id="co-email" placeholder="your@email.com" />
            </div>
          </div>
          <div class="form-row" style="margin-top:20px">
            <div class="form-group">
              <label>Full Address <span class="req">*</span></label>
              <input type="text" id="co-address" placeholder="House #, Street, Area, Landmark" required />
              <span class="form-error">Please enter your address</span>
            </div>
          </div>
          <div class="form-row cols-2" style="margin-top:20px">
            <div class="form-group">
              <label>City <span class="req">*</span></label>
              <input type="text" id="co-city" placeholder="e.g. Lahore" required />
              <span class="form-error">Please enter your city</span>
            </div>
            <div class="form-group">
              <label>Province <span class="req">*</span></label>
              <select id="co-province" required>
                <option value="">Select Province</option>
                <option>Punjab</option>
                <option>Sindh</option>
                <option>KPK</option>
                <option>Balochistan</option>
                <option>Islamabad</option>
                <option>Azad Kashmir</option>
                <option>Gilgit Baltistan</option>
              </select>
              <span class="form-error">Please select your province</span>
            </div>
          </div>
          <div class="form-row" style="margin-top:24px">
            <label style="font-size:.75rem;letter-spacing:.15em;text-transform:uppercase;color:var(--gold);margin-bottom:8px;display:block">Payment Method <span class="req">*</span></label>
            <div class="payment-methods">
              <div class="payment-opt active" data-pay="cod" onclick="selectPayment(this)">
                <i class="fas fa-money-bill-wave"></i>
                <span>Cash on Delivery</span>
              </div>
              <div class="payment-opt" data-pay="online" onclick="selectPayment(this)">
                <i class="fas fa-university"></i>
                <span>Bank Transfer</span>
              </div>
            </div>
          </div>
          <div id="bank-transfer-panel" style="display:none;margin-top:20px">
            <div class="bank-details">
              <div class="bank-details-header"><i class="fas fa-university"></i> JazzCash Account</div>
              <div class="bank-detail-row"><span class="bd-label">Account Number</span><span class="bd-value">03256646684</span></div>
              <div class="bank-detail-row"><span class="bd-label">Account Title</span><span class="bd-value">IMLI LEEA</span></div>
            </div>
            <div class="screenshot-upload">
              <label style="font-size:.75rem;letter-spacing:.15em;text-transform:uppercase;color:var(--gold);margin-bottom:8px;display:block;margin-top:20px">Upload Payment Screenshot <span class="req">*</span></label>
              <div class="upload-box" id="upload-box">
                <input type="file" id="co-screenshot" accept="image/*" onchange="handleScreenshot(this)" hidden />
                <div class="upload-placeholder" id="upload-placeholder" onclick="document.getElementById('co-screenshot').click()">
                  <i class="fas fa-cloud-upload-alt"></i>
                  <p>Click to upload payment screenshot</p>
                  <span>JPG, PNG or WEBP (max 5MB)</span>
                </div>
                <div class="upload-preview" id="upload-preview" style="display:none">
                  <img id="preview-img" src="" alt="Screenshot" />
                  <div class="upload-status" id="upload-status">
                    <i class="fas fa-spinner fa-spin"></i> Verifying...
                  </div>
                  <button type="button" class="upload-remove" onclick="removeScreenshot()"><i class="fas fa-times"></i></button>
                </div>
              </div>
            </div>
            <div class="form-row" style="margin-top:20px">
              <div class="form-group">
                <label>Transaction ID <span class="req">*</span></label>
                <input type="text" id="co-txn-id" placeholder="JazzCash Transaction ID from SMS" />
                <span class="form-error">Enter transaction ID from JazzCash SMS</span>
              </div>
            </div>
            <span class="form-error" id="screenshot-error" style="margin-top:8px;display:block">Upload JazzCash receipt screenshot + enter Transaction ID</span>
          </div>
          <div class="form-row" style="margin-top:20px">
            <div class="form-group">
              <label>Order Notes (Optional)</label>
              <textarea id="co-notes" placeholder="Any special instructions for your order..."></textarea>
            </div>
          </div>
          <button type="submit" class="checkout-btn"><i class="fas fa-lock"></i>&nbsp; Place Order — ${money(total)}</button>
        </form>
      </div>
      <div class="checkout-order-summary">
        <div class="cart-summary">
          <h3>Order Summary</h3>
          <div class="checkout-items">${items}</div>
          <div class="row"><span>Subtotal</span><span>${money(subtotal)}</span></div>
          <div class="row"><span>Shipping</span><span>${shipping ? money(shipping) : 'Free'}</span></div>
          <div class="row"><span>Tax (8%)</span><span>${money(tax)}</span></div>
          <div class="row total"><span>Total</span><span>${money(total)}</span></div>
        </div>
      </div>
    </div>
  `;

  $('#checkout-form').addEventListener('submit', function(e){
    e.preventDefault();
    if(!validateCheckout()) return;
    placeOrder(subtotal, total);
  });
  bindPaymentListeners();
}
function selectPayment(el){
  $$('.payment-opt').forEach(x => x.classList.remove('active'));
  el.classList.add('active');
  selectedPayment = el.dataset.pay;
  const panel = $('#bank-transfer-panel');
  if(panel) panel.style.display = selectedPayment === 'online' ? 'block' : 'none';
}
let screenshotDataUrl = null;
let screenshotReady = false;
function handleScreenshot(input){
  if(!input.files || !input.files[0]) return;
  const file = input.files[0];
  if(file.size > 5*1024*1024){ showToast('File too large. Max 5MB.'); return; }
  if(!file.type.startsWith('image/')){ showToast('Please upload an image file.'); return; }
  const reader = new FileReader();
  reader.onload = function(e){
    screenshotDataUrl = e.target.result;
    $('#preview-img').src = screenshotDataUrl;
    $('#upload-placeholder').style.display = 'none';
    $('#upload-preview').style.display = 'flex';
    checkPaymentReady();
  };
  reader.readAsDataURL(file);
}
function removeScreenshot(){
  screenshotDataUrl = null;
  screenshotReady = false;
  $('#co-screenshot').value = '';
  $('#upload-placeholder').style.display = 'flex';
  $('#upload-preview').style.display = 'none';
  const errEl = $('#screenshot-error');
  errEl.style.display = 'block';
  errEl.textContent = 'Upload JazzCash receipt screenshot + enter Transaction ID';
  errEl.className = 'form-error';
  const status = $('#upload-status');
  status.innerHTML = '<i class="fas fa-cloud-upload-alt"></i> Screenshot uploaded';
  status.className = 'upload-status';
}
function checkPaymentReady(){
  if(!screenshotDataUrl) return;
  const txnId = ($('#co-txn-id')||{}).value||'';
  const status = $('#upload-status');
  const errEl = $('#screenshot-error');
  const txnOk = txnId.trim().length >= 4;
  if(txnOk){
    screenshotReady = true;
    status.innerHTML = '<i class="fas fa-clock"></i> Ready — Will verify on WhatsApp';
    status.className = 'upload-status pending';
    errEl.style.display = 'none';
  } else {
    screenshotReady = false;
    status.innerHTML = '<i class="fas fa-cloud-upload-alt"></i> Screenshot uploaded';
    status.className = 'upload-status';
    errEl.style.display = 'block';
    errEl.textContent = 'Also enter Transaction ID';
  }
}
function bindPaymentListeners(){
  const ti = $('#co-txn-id');
  if(ti) ti.addEventListener('input', checkPaymentReady);
}
function validateCheckout(){
  let valid = true;
  const fields = [
    {id:'co-name', test: v => v.trim().length >= 2},
    {id:'co-phone', test: v => /^03\d{9}$/.test(v.replace(/\s/g,''))},
    {id:'co-address', test: v => v.trim().length >= 5},
    {id:'co-city', test: v => v.trim().length >= 2},
    {id:'co-province', test: v => v !== ''}
  ];
  fields.forEach(f => {
    const el = $('#'+f.id);
    const group = el.closest('.form-group');
    if(!f.test(el.value)){ group.classList.add('error'); valid = false; }
    else group.classList.remove('error');
  });
  if(selectedPayment === 'online'){
    const errEl = $('#screenshot-error');
    const txnEl = $('#co-txn-id');
    const txnOk = (txnEl.value||'').trim().length >= 4;
    if(!screenshotDataUrl || !screenshotReady){
      valid = false;
      if(txnEl && !txnOk) txnEl.closest('.form-group').classList.add('error');
      if(!screenshotDataUrl){
        errEl.style.display = 'block';
        errEl.textContent = 'Upload JazzCash receipt screenshot + enter Transaction ID';
      }
    } else {
      if(txnEl) txnEl.closest('.form-group').classList.remove('error');
      errEl.style.display = 'none';
    }
  }
  return valid;
}
async function placeOrder(subtotal, total){
  const cart = getCart();
  const name = $('#co-name').value.trim();
  const phone = $('#co-phone').value.trim();
  const email = $('#co-email').value.trim();
  const address = $('#co-address').value.trim();
  const city = $('#co-city').value.trim();
  const province = $('#co-province').value;
  const notes = $('#co-notes').value.trim();
  const isBankTransfer = selectedPayment === 'online';
  const payment = isBankTransfer ? 'Bank Transfer (JazzCash)' : 'Cash on Delivery';
  const txnId = isBankTransfer ? ($('#co-txn-id')||{}).value||'' : '';

  const items = [];
  let itemsList = '';
  cart.forEach(item => {
    const p = findProduct(item.id);
    if(p){
      items.push({ id: p.id, name: p.name, size: p.size, price: p.price, qty: item.qty, image: p.image || '', category: p.category || '' });
      itemsList += `• ${p.name} (${p.size}) x${item.qty} — ${money(p.price * item.qty)}\n`;
    }
  });

  const now = new Date();
  const dateStr = now.toLocaleDateString('en-PK') + ' ' + now.toLocaleTimeString('en-PK', {hour:'2-digit', minute:'2-digit'});
  const orderId = 'ORD-' + now.getFullYear() + String(now.getMonth()+1).padStart(2,'0') + String(now.getDate()).padStart(2,'0') + '-' + String(Math.floor(Math.random()*9000)+1000);

  const orderObj = {
    id: orderId,
    userName: name,
    userPhone: phone,
    userEmail: email || '',
    address: address,
    city: city,
    province: province,
    notes: notes || '',
    payment: payment,
    txnId: txnId || '',
    items: items,
    subtotal: subtotal,
    shipping: subtotal > 15000 ? 0 : 250,
    total: total,
    status: 'pending',
    date: dateStr,
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  };

  try {
    await db.collection('orders').doc(orderId).set(orderObj);
  } catch(e) {
    console.error('Failed to save order to Firestore:', e);
  }

  const msg = `🛍 *New Order — Askri Fragrances*\n\n` +
    `🆔 *Order:* ${orderId}\n` +
    `👤 *Name:* ${name}\n` +
    `📞 *Phone:* ${phone}\n` +
    (email ? `📧 *Email:* ${email}\n` : '') +
    `📍 *Address:* ${address}, ${city}, ${province}\n` +
    `💳 *Payment:* ${payment}\n` +
    (isBankTransfer ? `🏦 *JazzCash:* 03256646684 (IMLI LEEA)\n🆔 *Txn ID:* ${txnId}\n` : '') +
    `\n*Items:*\n${itemsList}\n` +
    `🚚 *Shipping:* ${subtotal > 15000 ? 'Free' : 'Rs. 250'}\n` +
    `💰 *Total:* ${money(total)}\n` +
    (notes ? `\n📝 *Notes:* ${notes}` : '') +
    (isBankTransfer ? `\n\n⏳ *Payment verification pending — check screenshot attached*` : '');

  const box = $('#cart-content');
  box.innerHTML = `
    <div class="order-success">
      <i class="fas fa-check-circle"></i>
      <h3>We will be packing your order soon!</h3>
      <p>Thank you, ${name}! Your order <strong>${orderId}</strong> has been received.</p>
      ${isBankTransfer ? '<p style="margin-top:12px;color:#ff9800;font-size:.9rem"><i class="fas fa-clock"></i> Payment verification pending — we will verify your screenshot on WhatsApp.</p>' : ''}
      <a href="shop.html" class="btn btn-primary" style="margin-top:10px">Continue Shopping</a>
    </div>
  `;

  if(isBankTransfer && screenshotDataUrl){
    const tempLink = document.createElement('a');
    tempLink.href = screenshotDataUrl;
    tempLink.download = 'payment-screenshot.jpg';
    tempLink.click();
  }

  window.open(`https://wa.me/923256646684?text=${encodeURIComponent(msg)}`, '_blank');
  localStorage.removeItem('askri_cart');
  updateBadges();
}

/* ---------- Wishlist page ---------- */
function renderWishlist(){
  const wish = getWish();
  const box = $('#wishlist-content');
  if(!wish.length){
    box.innerHTML = `<div class="empty-state">
      <i class="fas fa-heart"></i>
      <h3>Your wishlist is empty</h3>
      <p>Save your favorite fragrances here for later.</p>
      <a href="shop.html" class="btn btn-primary">Browse Fragrances</a>
    </div>`;
    return;
  }
  const rows = wish.map(id => {
    const p = findProduct(id); if(!p) return '';
    return `<tr data-id="${p.id}">
      <td data-label="Product"><div class="item-name">
        <img src="${p.image}" alt="${p.name}">
        <div><h4>${p.name}</h4><p>${p.category} · ${p.brand}</p></div>
      </div></td>
      <td data-label="Price" class="price">${money(p.price)}</td>
      <td data-label="Stock" style="color:${p.stock>0?'var(--gold)':'#c94b4b'}">${p.stock>0?'In stock':'Out of stock'}</td>
      <td data-label="Actions">
        <button class="btn" style="padding:8px 16px;font-size:.7rem" onclick="moveToCart(${p.id})">Add to Cart</button>
      </td>
      <td data-label=""><span class="remove" data-wremove="${p.id}"><i class="fas fa-times"></i></span></td>
    </tr>`;
  }).join('');

  box.innerHTML = `<table class="cart-table">
    <thead><tr><th>Product</th><th>Price</th><th>Status</th><th></th><th></th></tr></thead>
    <tbody>${rows}</tbody>
  </table>`;

  $$('[data-wremove]').forEach(el => el.addEventListener('click', () => removeFromWishlist(Number(el.dataset.wremove))));
}

/* ---------- Login Modal ---------- */
document.addEventListener('click', e => {
  const modal = document.getElementById('login-modal');
  if(modal && e.target === modal) modal.classList.remove('show');
});
