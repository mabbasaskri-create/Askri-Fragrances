/* ===========================================
   Askri Fragrances - Product Data
   40 fake premium perfumes with images from Unsplash
   =========================================== */

const IMG = [
  'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1712995518345-e6f807d4b6ad?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1563170351-be82bc888aa4?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1610461888750-10bfc601b874?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1706954668876-44410ebbbfa8?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1708167243118-59fae90f1f55?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1609749282774-5883a366cdd1?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1768025719875-48ed072f3084?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1774682060910-ba9a26f958ad?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1733716047328-898391fb4b57?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1733966319471-64d4883584c4?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1763631403216-8d193008481e?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1773527142301-9aa77252e5c2?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1774682060992-46c7e9f2e50b?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1739190940453-20900e9d18fb?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1771990770592-2fea44c43617?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1759793499819-bf60128a54b4?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1731972206777-d9f796597a60?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1737916061048-5a288b8e9f26?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1760920248537-c1185bbc5c61?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1767187861728-942f561b7103?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1683401100111-40306e381429?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1700522360590-a913ff2a3d9f?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1635847421955-db26af776e5d?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1775639698865-8621fbccb000?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1740327123574-05b0efdec29f?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1705899844877-81bb0a0665c1?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80',
];

const NOTES = [
  { top:'Bergamot, Saffron, Pink Pepper', heart:'Rose, Oud, Jasmine', base:'Sandalwood, Amber, Musk' },
  { top:'Lemon, Cardamom, Mandarin', heart:'Cinnamon, Iris, Violet', base:'Vanilla, Tonka Bean, Cedar' },
  { top:'Grapefruit, Mint, Ginger', heart:'Lavender, Sage, Neroli', base:'Vetiver, Patchouli, Leather' },
  { top:'Apple, Peach, Bergamot', heart:'Peony, Magnolia, Lily', base:'White Musk, Amber, Cashmere' },
  { top:'Black Pepper, Elemi, Nutmeg', heart:'Oud, Rose, Tobacco', base:'Agarwood, Benzoin, Musk' },
  { top:'Sea Salt, Yuzu, Aldehydes', heart:'Water Lily, Freesia, Ozone', base:'Ambergris, Driftwood, Musk' },
];

const DESC = [
  'An intoxicating blend that lingers on the skin like a whispered secret, crafted from the finest ingredients sourced across three continents.',
  'A modern classic evoking timeless elegance — bold, refined, and undeniably captivating from first spray to lasting dry down.',
  'Handcrafted in small batches by master perfumers, this fragrance is a signature statement of luxury and understated confidence.',
  'A luminous composition that opens with sparkling citrus and settles into a warm, sensual embrace of oud and precious woods.',
  'Inspired by moonlit gardens of the Orient, this bottle captures the essence of mystery, allure, and refined sophistication.',
  'A rare oriental masterpiece — where tradition meets modernity in an unforgettable olfactory journey.',
];

const CATS = ['Men','Women','Unisex','Arabic','French','Gift Sets'];
const BRANDS = ['Askri Royale','Askri Noir','Askri Oud','Askri Blanc','Askri Elite','Maison Askri'];

const NAMES = [
  'Nuit Doré','Rose Imperial','Oud Noir','Blanc Éternel','Ambre Sultan','Mystique Rouge',
  'Velours d’Or','Amber Reign','Saffron Kingdom','Iris Céleste','Musk Royal','Vanille Sacrée',
  'Tobacco Vanille','Fleur du Désert','Bois Précieux','Cuir Noble','Encens Divin','Jasmin de Nuit',
  'Rose du Sultan','Oud Al Malik','Attar Blanc','Bergamote Impériale','Cèdre Sacré','Musk Al Haramain',
  'Ambre Persan','Fleur d’Orient','Nuit Sultane','Rose Éternelle','Oud Diamant','Sable d’Or',
  'Vanille Noire','Jasmin Impérial','Bois de Rose','Ambre Céleste','Musc Royal','Oud Suprême',
  'Fleur Sauvage','Nuit Étoilée','Rose Antique','Ambre Ancien'
];

const products = NAMES.map((name, i) => {
  const price = 10000 + Math.floor(Math.random()*40001);
  const hasDiscount = Math.random() > 0.35;
  const old = hasDiscount ? Math.round(price * (1.15 + Math.random()*0.5)) : null;
  const cat = CATS[i % CATS.length];
  const brand = BRANDS[i % BRANDS.length];
  const rating = '5.0';
  const reviewCount = 12 + Math.floor(Math.random()*280);
  const img1 = IMG[i];
  const img2 = IMG[(i+13) % 40];
  const img3 = IMG[(i+26) % 40];
  const img4 = IMG[(i+37) % 40];
  const notes = NOTES[i % NOTES.length];
  const desc = DESC[i % DESC.length];
  const isNew = i < 6;
  const isSale = hasDiscount && Math.random() > 0.4;
  const isBest = !isNew && Math.random() > 0.6;

  return {
    id: i+1,
    name,
    brand,
    category: cat,
    price,
    oldPrice: old,
    discount: old ? Math.round((1 - price/old) * 100) : 0,
    rating: parseFloat(rating),
    reviewCount,
    images: [img1, img2, img3, img4],
    image: img1,
    notes,
    description: desc,
    ingredients: 'Alcohol Denat., Parfum (Fragrance), Aqua (Water), Limonene, Linalool, Citral, Geraniol, Coumarin, Eugenol.',
    stock: 5 + Math.floor(Math.random()*40),
    size: ['50ml','100ml'][i%2],
    isNew, isSale, isBest,
    reviews: [
      { name:'Sarah M.', rating:5, text:'Absolutely divine! The scent lasts all day and gets so many compliments.' },
      { name:'Ahmed K.', rating:5, text:'A masterpiece. Worth every penny — truly a luxury experience.' },
      { name:'Emma L.', rating:4, text:'Beautiful bottle and elegant fragrance. My new signature scent.' },
    ]
  };
});

// Expose globally
window.PRODUCTS = products;
