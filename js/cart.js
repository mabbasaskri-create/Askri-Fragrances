/* ===========================================
   Askri Fragrances - Cart & Wishlist Logic
   Uses LocalStorage for persistence
   =========================================== */

const CART_KEY = 'askri_cart';
const WISH_KEY = 'askri_wishlist';

/* ---------- Storage helpers ---------- */
const getCart = () => JSON.parse(localStorage.getItem(CART_KEY) || '[]');
const setCart = (c) => { localStorage.setItem(CART_KEY, JSON.stringify(c)); updateBadges(); };
const getWish = () => JSON.parse(localStorage.getItem(WISH_KEY) || '[]');
const setWish = (w) => { localStorage.setItem(WISH_KEY, JSON.stringify(w)); updateBadges(); };

/* ---------- Cart operations ---------- */
function addToCart(id, qty=1){
  const cart = getCart();
  const existing = cart.find(i => i.id === id);
  if(existing) existing.qty += qty;
  else cart.push({ id, qty });
  setCart(cart);
  showToast('Added to cart');
}
function removeFromCart(id){
  setCart(getCart().filter(i => i.id !== id));
  if(typeof renderCart === 'function') renderCart();
  showToast('Removed from cart');
}
function updateQty(id, qty){
  const cart = getCart();
  const item = cart.find(i => i.id === id);
  if(!item) return;
  item.qty = Math.max(1, parseInt(qty)||1);
  setCart(cart);
  if(typeof renderCart === 'function') renderCart();
}

/* ---------- Wishlist operations ---------- */
function toggleWishlist(id){
  const wish = getWish();
  const idx = wish.indexOf(id);
  if(idx > -1){ wish.splice(idx,1); setWish(wish); showToast('Removed from wishlist'); return false; }
  wish.push(id); setWish(wish); showToast('Added to wishlist'); return true;
}
function isWished(id){ return getWish().includes(id); }
function removeFromWishlist(id){
  setWish(getWish().filter(w => w !== id));
  if(typeof renderWishlist === 'function') renderWishlist();
  showToast('Removed from wishlist');
}
function moveToCart(id){
  addToCart(id, 1);
  removeFromWishlist(id);
}

/* ---------- Badge updates ---------- */
function updateBadges(){
  const cart = getCart();
  const totalQty = cart.reduce((s,i) => s + i.qty, 0);
  document.querySelectorAll('[data-cart-count]').forEach(el => {
    el.textContent = totalQty;
    el.style.display = totalQty > 0 ? 'flex' : 'none';
  });
  const wishCount = getWish().length;
  document.querySelectorAll('[data-wish-count]').forEach(el => {
    el.textContent = wishCount;
    el.style.display = wishCount > 0 ? 'flex' : 'none';
  });
}

/* ---------- Toast notification ---------- */
function showToast(msg){
  let t = document.getElementById('toast');
  if(!t){
    t = document.createElement('div');
    t.id = 'toast'; t.className = 'toast';
    document.body.appendChild(t);
  }
  t.innerHTML = `<i class="fas fa-check-circle"></i>${msg}`;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 2200);
}

/* ---------- Init on load ---------- */
document.addEventListener('DOMContentLoaded', updateBadges);
