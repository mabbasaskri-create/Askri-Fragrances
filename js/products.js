/* ===========================================
   Askri Fragrances - Product Data
   40 curated premium fragrances
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

const INGREDIENTS = 'Alcohol Denat., Parfum (Fragrance), Aqua (Water), Limonene, Linalool, Citral, Geraniol, Coumarin, Eugenol, Benzyl Benzoate, Citronellol, Farnesol, Isoeugenol.';

const products = [
  {
    id: 1, name: 'Nuit Doré', brand: 'Askri Royale', category: 'Men',
    price: 12500, oldPrice: 15000, discount: 17,
    rating: 5.0, reviewCount: 245, stock: 32, size: '100ml',
    image: IMG[0], images: [IMG[0], IMG[13], IMG[26], IMG[37]],
    description: 'A commanding evening fragrance where golden saffron meets smoky oud. Nuit Doré opens with a burst of bergamot and pink pepper before settling into a rich heart of rose absolute and Laotian oud — designed for the man who owns every room he enters.',
    notes: { top: 'Bergamot, Saffron, Pink Pepper', heart: 'Rose Absolute, Laotian Oud, Jasmine Sambac', base: 'Sandalwood, Amber, Musk' },
    ingredients: INGREDIENTS,
    isNew: true, isSale: true, isBest: false,
    reviews: [
      { name: 'Sarah M.', rating: 5, text: 'Absolutely divine! The saffron-oud combination is intoxicating. Lasts 12+ hours on my skin.' },
      { name: 'Ahmed K.', rating: 5, text: 'A masterpiece. Worth every penny — truly a luxury experience.' },
      { name: 'Emma L.', rating: 5, text: 'Bought this for my husband and he hasn\'t stopped wearing it. Incredible longevity.' }
    ]
  },
  {
    id: 2, name: 'Rose Imperial', brand: 'Askri Blanc', category: 'Women',
    price: 14800, oldPrice: 18500, discount: 20,
    rating: 5.0, reviewCount: 312, stock: 28, size: '100ml',
    image: IMG[1], images: [IMG[1], IMG[14], IMG[27], IMG[38]],
    description: 'An opulent tribute to the Damask rose, harvested at dawn in the valleys of Isparta. Rose Imperial wraps you in velvety Turkish rose, iris butter, and warm vanilla — a fragrance that feels like wearing silk.',
    notes: { top: 'Lychee, Pink Pepper, bergamot', heart: 'Turkish Rose, Iris Butter, Peony', base: 'Vanilla, Sandalwood, White Musk' },
    ingredients: INGREDIENTS,
    isNew: true, isSale: true, isBest: false,
    reviews: [
      { name: 'Fatima R.', rating: 5, text: 'The most beautiful rose fragrance I have ever smelled. It\'s like walking through a rose garden at midnight.' },
      { name: 'Laura B.', rating: 5, text: 'Elegant and sophisticated. My signature scent now.' },
      { name: 'Hira A.', rating: 5, text: 'Luxurious at a fraction of the price of similar French perfumes.' }
    ]
  },
  {
    id: 3, name: 'Oud Noir', brand: 'Askri Oud', category: 'Arabic',
    price: 18500, oldPrice: null, discount: 0,
    rating: 5.0, reviewCount: 189, stock: 15, size: '100ml',
    image: IMG[2], images: [IMG[2], IMG[15], IMG[28], IMG[39]],
    description: 'Pure Cambodian oud distilled to perfection. Oud Noir is uncompromising — dark, leathery, and deeply resinous. Built for those who appreciate the raw power of the world\'s most precious ingredient.',
    notes: { top: 'Black Pepper, Elemi, Nutmeg', heart: 'Cambodian Oud, Rose de Mai, Tobacco Leaf', base: 'Agarwood, Benzoin, Animal Musk' },
    ingredients: INGREDIENTS,
    isNew: false, isSale: false, isBest: true,
    reviews: [
      { name: 'Omar S.', rating: 5, text: 'Authentic oud scent. Reminds me of the premium attars I grew up with. Exceptional quality.' },
      { name: 'Yusuf M.', rating: 5, text: 'Strong projection and incredible longevity. 14+ hours easily.' },
      { name: 'Ali R.', rating: 5, text: 'The best oud fragrance in this price range. Nothing else comes close.' }
    ]
  },
  {
    id: 4, name: 'Blanc Éternel', brand: 'Askri Blanc', category: 'Women',
    price: 11200, oldPrice: 14000, discount: 20,
    rating: 5.0, reviewCount: 278, stock: 40, size: '50ml',
    image: IMG[3], images: [IMG[3], IMG[16], IMG[29], IMG[33]],
    description: 'A pristine white floral that captures the first light of morning. Blanc Éternel blends Egyptian jasmine with creamy coconut and soft cashmere wood for a scent that is both innocent and unforgettable.',
    notes: { top: 'Apple Blossom, Peach, Bergamot', heart: 'Egyptian Jasmine, Magnolia, Lily of the Valley', base: 'White Musk, Cashmere Wood, Blonde Amber' },
    ingredients: INGREDIENTS,
    isNew: true, isSale: true, isBest: false,
    reviews: [
      { name: 'Emma L.', rating: 5, text: 'Beautiful bottle and elegant fragrance. My new signature scent.' },
      { name: 'Nadia K.', rating: 5, text: 'So fresh and feminine. Perfect for everyday wear.' },
      { name: 'Sana T.', rating: 5, text: 'Light but lasts surprisingly long. Gets me compliments everywhere.' }
    ]
  },
  {
    id: 5, name: 'Ambre Sultan', brand: 'Askri Royale', category: 'Unisex',
    price: 15900, oldPrice: 19500, discount: 18,
    rating: 5.0, reviewCount: 156, stock: 22, size: '100ml',
    image: IMG[4], images: [IMG[4], IMG[17], IMG[30], IMG[34]],
    description: 'Inspired by the ancient amber trade routes, this fragrance wraps you in golden warmth. Honeyed labdanum, smoky benzoin, and creamy vanilla create a scent that feels like liquid gold on the skin.',
    notes: { top: 'Labdanum, Orange Blossom, Coriander', heart: 'Amber Accord, Benzoin, Myrrh', base: 'Vanilla, Tonka Bean, Cedarwood' },
    ingredients: INGREDIENTS,
    isNew: false, isSale: true, isBest: true,
    reviews: [
      { name: 'Zara H.', rating: 5, text: 'Warm and enveloping. Like being wrapped in a cashmere blanket of amber.' },
      { name: 'James P.', rating: 5, text: 'Unisex perfection. My partner and I both wear it.' },
      { name: 'Mariam F.', rating: 5, text: 'The amber here is rich without being cloying. Masterfully blended.' }
    ]
  },
  {
    id: 6, name: 'Mystique Rouge', brand: 'Askri Noir', category: 'Women',
    price: 16500, oldPrice: 20000, discount: 18,
    rating: 5.0, reviewCount: 198, stock: 18, size: '100ml',
    image: IMG[5], images: [IMG[5], IMG[18], IMG[31], IMG[35]],
    description: 'Bold, fiery, and unapologetically seductive. Mystique Rouge combines blood orange and cardamom with a fiery cinnamon heart, grounded in smoky incense and dark patchouli. For the woman who commands attention.',
    notes: { top: 'Blood Orange, Cardamom, Pink Pepper', heart: 'Cinnamon Bark, Turkish Rose, Incense', base: 'Dark Patchouli, Oud, Amber' },
    ingredients: INGREDIENTS,
    isNew: true, isSale: true, isBest: false,
    reviews: [
      { name: 'Priya S.', rating: 5, text: 'This is the sexiest fragrance I own. The cinnamon-oud combo is intoxicating.' },
      { name: 'Ayesha N.', rating: 5, text: 'Bold and unique. Nothing else smells like this.' },
      { name: 'Rebecca T.', rating: 5, text: 'The projection is insane. I can smell it on my scarf from the day before.' }
    ]
  },
  {
    id: 7, name: 'Velours d\'Or', brand: 'Askri Elite', category: 'Men',
    price: 13800, oldPrice: null, discount: 0,
    rating: 5.0, reviewCount: 134, stock: 35, size: '100ml',
    image: IMG[6], images: [IMG[6], IMG[19], IMG[32], IMG[36]],
    description: 'Velvet smooth and golden warm — a refined fougère that balances lavender with honeyed tobacco and smooth leather. Velours d\'Or is the scent of quiet confidence and effortless sophistication.',
    notes: { top: 'French Lavender, Honey, Grapefruit', heart: 'Tobacco Leaf, Iris, Violet Leaf', base: 'Smooth Leather, Vetiver, Tonka Bean' },
    ingredients: INGREDIENTS,
    isNew: false, isSale: false, isBest: true,
    reviews: [
      { name: 'Daniel W.', rating: 5, text: 'The leather and tobacco combo is chef\'s kiss. Perfect evening scent.' },
      { name: 'Kamran A.', rating: 5, text: 'Classy and refined. Gets me compliments at every formal event.' },
      { name: 'Marco V.', rating: 5, text: 'Reminds me of Tom Ford at a fraction of the price.' }
    ]
  },
  {
    id: 8, name: 'Amber Reign', brand: 'Askri Royale', category: 'Unisex',
    price: 14200, oldPrice: 17000, discount: 16,
    rating: 5.0, reviewCount: 167, stock: 25, size: '100ml',
    image: IMG[7], images: [IMG[7], IMG[20], IMG[33], IMG[37]],
    description: 'A majestic amber composition that evolves from bright citrus to deep, resinous warmth. Amber Reign opens with neroli and saffron before revealing a magnificent amber-gris heart layered over precious woods.',
    notes: { top: 'Neroli, Saffron, Lemon Zest', heart: 'Amber Gris, Frankincense, Labdanum', base: 'Precious Woods, Musk, Benzoin' },
    ingredients: INGREDIENTS,
    isNew: false, isSale: true, isBest: false,
    reviews: [
      { name: 'Khalid B.', rating: 5, text: 'Royal indeed. The amber is smooth and long-lasting. 10+ hours on skin.' },
      { name: 'Sophie M.', rating: 5, text: 'A beautiful unisex amber. Warm without being heavy.' },
      { name: 'Hassan J.', rating: 5, text: 'Perfect for prayers and special occasions. Love the frankincense note.' }
    ]
  },
  {
    id: 9, name: 'Saffron Kingdom', brand: 'Askri Oud', category: 'Arabic',
    price: 22000, oldPrice: null, discount: 0,
    rating: 5.0, reviewCount: 112, stock: 12, size: '100ml',
    image: IMG[8], images: [IMG[8], IMG[21], IMG[34], IMG[38]],
    description: 'The crown jewel of the Askri Oud collection. Hand-harvested Iranian saffron meets 30-year aged oud in a composition of extraordinary depth and luxury. Limited production — each bottle numbered.',
    notes: { top: 'Iranian Saffron, Cardamom, Cinnamon', heart: '30-Year Aged Oud, Rose Absolute, Oud' , base: 'Mysore Sandalwood, Ambergris, Civet' },
    ingredients: INGREDIENTS,
    isNew: false, isSale: false, isBest: true,
    reviews: [
      { name: 'Faisal A.', rating: 5, text: 'Worth every rupee. The saffron-oud pairing is unlike anything in my collection.' },
      { name: 'Usman R.', rating: 5, text: 'Museum-quality perfume. The aging of the oud gives it incredible depth.' },
      { name: 'Bilal M.', rating: 5, text: 'A true luxury experience. My most prized fragrance.' }
    ]
  },
  {
    id: 10, name: 'Iris Céleste', brand: 'Askri Blanc', category: 'Women',
    price: 13500, oldPrice: 16000, discount: 16,
    rating: 5.0, reviewCount: 223, stock: 30, size: '50ml',
    image: IMG[9], images: [IMG[9], IMG[22], IMG[35], IMG[39]],
    description: 'Ethereal and powdery, Iris Céleste captures the beauty of Florentine iris in a cloud of violet, heliotrope, and soft suede. A masterpiece of French perfumery tradition reinterpreted for the modern woman.',
    notes: { top: 'Violet Leaf, Bergamot, Aldehydes', heart: 'Florentine Iris, Heliotrope, Orris Butter', base: 'Soft Suede, Powdery Musk, Cedarwood' },
    ingredients: INGREDIENTS,
    isNew: true, isSale: true, isBest: false,
    reviews: [
      { name: 'Claire D.', rating: 5, text: 'So elegant and refined. The iris note is gorgeous — powdery perfection.' },
      { name: 'Amira K.', rating: 5, text: 'Light, airy, and sophisticated. Perfect for spring.' },
      { name: 'Julia S.', rating: 5, text: 'Reminds me of Dior but better. An absolute gem.' }
    ]
  },
  {
    id: 11, name: 'Musk Royal', brand: 'Askri Elite', category: 'Unisex',
    price: 10500, oldPrice: 13000, discount: 19,
    rating: 5.0, reviewCount: 298, stock: 45, size: '50ml',
    image: IMG[10], images: [IMG[10], IMG[23], IMG[36], IMG[0]],
    description: 'The purest expression of white musk, elevated with delicate florals and warm skin accord. Musk Royal is intimate, comforting, and endlessly wearable — a second skin fragrance that feels like coming home.',
    notes: { top: 'Pink Peony, Clean Aldehydes, Lily', heart: 'White Musk, Skin Accord, Iris', base: 'Cashmere Musk, Ambrette, Blonde Woods' },
    ingredients: INGREDIENTS,
    isNew: false, isSale: true, isBest: true,
    reviews: [
      { name: 'Noor A.', rating: 5, text: 'The cleanest, most beautiful musk I have ever worn. So comforting.' },
      { name: 'Ryan C.', rating: 5, text: 'My go-to daily scent. Works in any season, any occasion.' },
      { name: 'Zainab M.', rating: 5, text: 'Incredible value for this quality. Lasts all day on my skin.' }
    ]
  },
  {
    id: 12, name: 'Vanille Sacrée', brand: 'Askri Noir', category: 'Women',
    price: 12800, oldPrice: null, discount: 0,
    rating: 5.0, reviewCount: 201, stock: 33, size: '100ml',
    image: IMG[11], images: [IMG[11], IMG[24], IMG[37], IMG[1]],
    description: 'Not your average vanilla. Vanille Sacrée takes Bourbon vanilla from Madagascar and elevates it with smoky incense, dark amber, and a whisper of black orchid. Seductive, complex, and utterly addictive.',
    notes: { top: 'Bergamot, Black Currant, Cardamom', heart: 'Bourbon Vanilla, Black Orchid, Incense', base: 'Dark Amber, Smoky Woods, Tonka Bean' },
    ingredients: INGREDIENTS,
    isNew: false, isSale: false, isBest: true,
    reviews: [
      { name: 'Hannah L.', rating: 5, text: 'The most addictive vanilla I have ever smelled. I literally cannot stop sniffing my wrist.' },
      { name: 'Maha S.', rating: 5, text: 'Rich and complex. The incense adds so much depth.' },
      { name: 'Olivia P.', rating: 5, text: 'My boyfriend is obsessed with this scent on me.' }
    ]
  },
  {
    id: 13, name: 'Tobacco Vanille', brand: 'Askri Elite', category: 'Men',
    price: 16800, oldPrice: 20000, discount: 16,
    rating: 5.0, reviewCount: 178, stock: 20, size: '100ml',
    image: IMG[12], images: [IMG[12], IMG[25], IMG[38], IMG[2]],
    description: 'Rich pipe tobacco laced with creamy vanilla and dark cocoa. Tobacco Vanille is a warm embrace on a cold evening — luxurious, comforting, and deeply masculine without being aggressive.',
    notes: { top: 'Tobacco Leaf, Cinnamon, Nutmeg', heart: 'Vanilla Bean, Cocoa Absolute, Dried Fruits', base: 'Tonka Bean, Tobacco Absolute, Oakmoss' },
    ingredients: INGREDIENTS,
    isNew: false, isSale: true, isBest: false,
    reviews: [
      { name: 'Chris B.', rating: 5, text: 'The tobacco note is so realistic and rich. Perfect fall/winter scent.' },
      { name: 'Imran K.', rating: 5, text: 'Creamy and smooth. The cocoa-vanilla-tobacco trifecta is perfect.' },
      { name: 'David R.', rating: 5, text: 'A cozy, sophisticated fragrance. My wife steals this from me.' }
    ]
  },
  {
    id: 14, name: 'Fleur du Désert', brand: 'Askri Oud', category: 'Arabic',
    price: 17500, oldPrice: 21000, discount: 17,
    rating: 5.0, reviewCount: 143, stock: 16, size: '100ml',
    image: IMG[13], images: [IMG[13], IMG[26], IMG[39], IMG[3]],
    description: 'A poetic tribute to the rare flowers that bloom in the Arabian desert after rain. Delicate jasmine and wild rose emerge from a bed of warm sand, oud, and sun-baked earth. Beauty in its most raw form.',
    notes: { top: 'Wild Rose, Pink Pepper, Cinnamon', heart: 'Desert Jasmine, Oud, Saffron', base: 'Sandalwood, Sun-Baked Earth, Amber' },
    ingredients: INGREDIENTS,
    isNew: true, isSale: true, isBest: false,
    reviews: [
      { name: 'Leila A.', rating: 5, text: 'Poetry in a bottle. The jasmine-oud-saffron combination is divine.' },
      { name: 'Nadia P.', rating: 5, text: 'Unique and beautiful. Nothing else I have smells like this.' },
      { name: 'Amina K.', rating: 5, text: 'A true Arabian luxury. Long-lasting and captivating.' }
    ]
  },
  {
    id: 15, name: 'Bois Précieux', brand: 'Askri Noir', category: 'Men',
    price: 14500, oldPrice: null, discount: 0,
    rating: 5.0, reviewCount: 165, stock: 27, size: '100ml',
    image: IMG[14], images: [IMG[14], IMG[27], IMG[33], IMG[4]],
    description: 'A refined woody composition that celebrates the world\'s most precious timbers. Haitian vetiver, Mysore sandalwood, and Guaiac wood create a rich, multi-layered forest experience for the modern gentleman.',
    notes: { top: 'Bergamot, Violet Leaf, Elemi', heart: 'Haitian Vetiver, Guaiac Wood, Cedarwood', base: 'Mysore Sandalwood, Amber, Musk' },
    ingredients: INGREDIENTS,
    isNew: false, isSale: false, isBest: true,
    reviews: [
      { name: 'Peter H.', rating: 5, text: 'The vetiver-sandalwood combo is exceptional. Clean yet complex.' },
      { name: 'Ahmad Z.', rating: 5, text: 'Sophisticated and woody. My signature for formal occasions.' },
      { name: 'Michael T.', rating: 5, text: 'Projects confidence. A real gentleman\'s fragrance.' }
    ]
  },
  {
    id: 16, name: 'Cuir Noble', brand: 'Askri Elite', category: 'Men',
    price: 15200, oldPrice: 18000, discount: 16,
    rating: 5.0, reviewCount: 131, stock: 21, size: '100ml',
    image: IMG[15], images: [IMG[15], IMG[28], IMG[34], IMG[5]],
    description: 'The scent of finest leather, freshly cured and still warm. Cuir Noble combines buttery soft leather with birch tar, styrax, and smooth amber for a fragrance that embodies masculine elegance at its peak.',
    notes: { top: 'Birch Tar, Pink Pepper, Elemi', heart: 'Soft Leather, Styrax, Violet Leaf', base: 'Smooth Amber, Cedarwood, Castoreum' },
    ingredients: INGREDIENTS,
    isNew: false, isSale: true, isBest: false,
    reviews: [
      { name: 'Robert K.', rating: 5, text: 'The leather is incredibly realistic. Like burying your nose in a new Italian jacket.' },
      { name: 'Tariq H.', rating: 5, text: 'Bold and distinctive. I get asked about this constantly.' },
      { name: 'Jonathan M.', rating: 5, text: 'A refined leather that\'s not too aggressive. Perfect balance.' }
    ]
  },
  {
    id: 17, name: 'Encens Divin', brand: 'Askri Oud', category: 'Arabic',
    price: 19800, oldPrice: null, discount: 0,
    rating: 5.0, reviewCount: 97, stock: 10, size: '100ml',
    image: IMG[16], images: [IMG[16], IMG[29], IMG[35], IMG[6]],
    description: 'Sacred frankincense from the Dhofar region meets rare Omani frankincense tears in this divine composition. Encens Divin is a spiritual journey — meditative, transcendent, and deeply grounding.',
    notes: { top: 'Frankincense Tears, Bergamot, Myrrh', heart: 'Olibanum, Labdanum, Incense Absolute', base: 'Ambergris, Sandalwood, Cedarwood' },
    ingredients: INGREDIENTS,
    isNew: false, isSale: false, isBest: false,
    reviews: [
      { name: 'Abdul R.', rating: 5, text: 'The real frankincense experience. Reminds me of ancient Arabian rituals.' },
      { name: 'Thomas W.', rating: 5, text: 'Meditative and calming. I wear this for prayer and reflection.' },
      { name: 'Mariam S.', rating: 5, text: 'Rare quality incense fragrance. If you love frankincense, this is the one.' }
    ]
  },
  {
    id: 18, name: 'Jasmin de Nuit', brand: 'Askri Blanc', category: 'Women',
    price: 13200, oldPrice: 16000, discount: 18,
    rating: 5.0, reviewCount: 256, stock: 35, size: '50ml',
    image: IMG[17], images: [IMG[17], IMG[30], IMG[36], IMG[7]],
    description: 'Night-blooming jasmine at its most intoxicating. Jasmin de Nuit captures the heady, almost narcotic beauty of jasmine sambac in full bloom under a starlit sky. Sensual, romantic, and utterly feminine.',
    notes: { top: 'Neroli, Green Mandarin, Peach', heart: 'Night Jasmine, Tuberose, Gardenia', base: 'Sandalwood, Vanilla, White Musk' },
    ingredients: INGREDIENTS,
    isNew: true, isSale: true, isBest: false,
    reviews: [
      { name: 'Sarah J.', rating: 5, text: 'The jasmine here is so natural and lush. Like having fresh jasmine garlands around you.' },
      { name: 'Priya M.', rating: 5, text: 'My most complimented fragrance. Everyone asks what I am wearing.' },
      { name: 'Layla F.', rating: 5, text: 'Romantic and intoxicating. Perfect date night scent.' }
    ]
  },
  {
    id: 19, name: 'Rose du Sultan', brand: 'Askri Oud', category: 'Arabic',
    price: 21000, oldPrice: 25000, discount: 16,
    rating: 5.0, reviewCount: 108, stock: 14, size: '100ml',
    image: IMG[18], images: [IMG[18], IMG[31], IMG[37], IMG[8]],
    description: 'The legendary Rose of Damascus meets precious oud in this royal Arabian composition. Rose du Sultan is the scent of sultans — opulent, commanding, and unforgettable. A true masterpiece of oriental perfumery.',
    notes: { top: 'Damascus Rose, Saffron, Cinnamon Bark', heart: 'Oud, Rose de Mai, Cardamom', base: 'Amber, Musk, Agarwood' },
    ingredients: INGREDIENTS,
    isNew: false, isSale: true, isBest: true,
    reviews: [
      { name: 'Fahad A.', rating: 5, text: 'The rose-oud combination is perfected here. Neither overpowers the other.' },
      { name: 'Rania M.', rating: 5, text: 'Opulent and regal. You feel like royalty wearing this.' },
      { name: 'Ibrahim K.', rating: 5, text: 'My wife and I both wear this. The ultimate couples fragrance.' }
    ]
  },
  {
    id: 20, name: 'Oud Al Malik', brand: 'Askri Oud', category: 'Arabic',
    price: 24500, oldPrice: null, discount: 0,
    rating: 5.0, reviewCount: 85, stock: 8, size: '100ml',
    image: IMG[19], images: [IMG[19], IMG[32], IMG[38], IMG[9]],
    description: 'The king of oud fragrances. Oud Al Malik uses only the finest Assamese oud, aged for 15 years and distilled using traditional hydrodistillation. A fragrance of extraordinary rarity and prestige.',
    notes: { top: 'Cambodian Agarwood, Saffron, Rose', heart: 'Aged Assamese Oud, Deer Musk, Amber', base: 'Oud Absolute, Sandalwood, Civet' },
    ingredients: INGREDIENTS,
    isNew: false, isSale: false, isBest: true,
    reviews: [
      { name: 'Sultan Q.', rating: 5, text: 'The real deal. This oud is museum quality. Unmatched depth and complexity.' },
      { name: 'Tariq N.', rating: 5, text: 'Investment-grade fragrance. The aging gives it incredible smoothness.' },
      { name: 'Hassan A.', rating: 5, text: 'Nothing compares to this. The king of my collection.' }
    ]
  },
  {
    id: 21, name: 'Attar Blanc', brand: 'Askri Blanc', category: 'Unisex',
    price: 11800, oldPrice: 14500, discount: 19,
    rating: 5.0, reviewCount: 189, stock: 38, size: '50ml',
    image: IMG[20], images: [IMG[20], IMG[33], IMG[39], IMG[10]],
    description: 'A pure, oil-based attar reimagined for the modern era. Attar Blanc is a clean, luminous musk with delicate florals and soft woods — the essence of purity distilled into liquid form.',
    notes: { top: 'White Flowers, Aldehydes, Bergamot', heart: 'Pure Musk, Lily, White Tea', base: 'Clean Woods, Ambrette, Skin Musk' },
    ingredients: INGREDIENTS,
    isNew: false, isSale: true, isBest: false,
    reviews: [
      { name: 'Aisha B.', rating: 5, text: 'Clean, pure, and elegant. Like freshly laundered silk.' },
      { name: 'Mark D.', rating: 5, text: 'Perfect everyday scent. Not overpowering, just beautifully clean.' },
      { name: 'Fatima Z.', rating: 5, text: 'Love that this is oil-based. It melts into the skin beautifully.' }
    ]
  },
  {
    id: 22, name: 'Bergamote Impériale', brand: 'Askri Elite', category: 'Men',
    price: 10800, oldPrice: 13000, discount: 17,
    rating: 5.0, reviewCount: 234, stock: 42, size: '50ml',
    image: IMG[21], images: [IMG[21], IMG[34], IMG[0], IMG[11]],
    description: 'The emperor of bergamots. Calabrian bergamot in its most refined form, supported by aromatic herbs, clean musk, and blonde woods. Bergamote Impériale is citrus done right — bright, lasting, and endlessly elegant.',
    notes: { top: 'Calabrian Bergamot, Lemon, Grapefruit', heart: 'Lavender, Rosemary, Neroli', base: 'Blonde Musk, White Cedarwood, Amber' },
    ingredients: INGREDIENTS,
    isNew: false, isSale: true, isBest: false,
    reviews: [
      { name: 'Lucas F.', rating: 5, text: 'Fresh, clean, and masculine. The bergamot is so vibrant and natural.' },
      { name: 'Bilal S.', rating: 5, text: 'My favorite daytime scent. Works perfectly in the heat.' },
      { name: 'Alex T.', rating: 5, text: 'Great office fragrance. Professional and refined.' }
    ]
  },
  {
    id: 23, name: 'Cèdre Sacré', brand: 'Askri Noir', category: 'Men',
    price: 13600, oldPrice: null, discount: 0,
    rating: 5.0, reviewCount: 147, stock: 29, size: '100ml',
    image: IMG[22], images: [IMG[22], IMG[35], IMG[1], IMG[12]],
    description: 'Sacred cedar from the Atlas Mountains, aged to perfection and blended with smoky vetiver and warm amber. Cèdre Sacré is a meditation in wood — grounding, contemplative, and profoundly satisfying.',
    notes: { top: 'Cedar Leaf, Juniper Berry, Black Pepper', heart: 'Atlas Cedar, Vetiver, Smoky Notes', base: 'Amber, Patchouli, Musk' },
    ingredients: INGREDIENTS,
    isNew: false, isSale: false, isBest: false,
    reviews: [
      { name: 'Nathan R.', rating: 5, text: 'The cedar is rich and authentic. Like sitting in a cedarwood sauna.' },
      { name: 'Omar H.', rating: 5, text: 'Grounding and masculine. My meditation fragrance.' },
      { name: 'James L.', rating: 5, text: 'Sophisticated and understated. A true gentleman\'s woody.' }
    ]
  },
  {
    id: 24, name: 'Musk Al Haramain', brand: 'Askri Oud', category: 'Unisex',
    price: 12000, oldPrice: 15000, discount: 20,
    rating: 5.0, reviewCount: 267, stock: 36, size: '100ml',
    image: IMG[23], images: [IMG[23], IMG[36], IMG[2], IMG[13]],
    description: 'A reverence to the pure musk traditions of the Haramain. This composition captures the sacred, clean musk that fills the air during pilgrimage — spiritual, pure, and eternally comforting.',
    notes: { top: 'Clean Musk, White Flowers, Aldehydes', heart: 'Pure Musk, Orris, Lily', base: 'Sacred Musk, Amber, Sandalwood' },
    ingredients: INGREDIENTS,
    isNew: false, isSale: true, isBest: true,
    reviews: [
      { name: 'Yasir K.', rating: 5, text: 'Reminds me of the blessed scent during Umrah. Pure and spiritual.' },
      { name: 'Huda M.', rating: 5, text: 'Clean, soft, and beautiful. My everyday comfort scent.' },
      { name: 'Abdullah S.', rating: 5, text: 'The best musk fragrance I have found. Authentic and lasting.' }
    ]
  },
  {
    id: 25, name: 'Ambre Persan', brand: 'Askri Royale', category: 'Unisex',
    price: 16200, oldPrice: 19500, discount: 17,
    rating: 5.0, reviewCount: 123, stock: 19, size: '100ml',
    image: IMG[24], images: [IMG[24], IMG[37], IMG[3], IMG[14]],
    description: 'Persian amber has been prized for centuries — this is its purest modern expression. Warm, golden, and deeply resinous, Ambre Persan captures the essence of ancient trade routes in a bottle of liquid treasure.',
    notes: { top: 'Persian Saffron, Rose, Cinnamon', heart: 'Labdanum, Benzoin, Frankincense', base: 'Persian Amber, Sandalwood, Vanilla' },
    ingredients: INGREDIENTS,
    isNew: false, isSale: true, isBest: false,
    reviews: [
      { name: 'Dariush M.', rating: 5, text: 'Captures the warmth of Persian hospitality in a bottle. Authentic and beautiful.' },
      { name: 'Linda S.', rating: 5, text: 'Rich amber that evolves beautifully on the skin over hours.' },
      { name: 'Reza A.', rating: 5, text: 'A true Persian masterpiece. My most treasured oud-amber combination.' }
    ]
  },
  {
    id: 26, name: 'Fleur d\'Orient', brand: 'Askri Blanc', category: 'Women',
    price: 12500, oldPrice: null, discount: 0,
    rating: 5.0, reviewCount: 209, stock: 31, size: '50ml',
    image: IMG[25], images: [IMG[25], IMG[38], IMG[4], IMG[15]],
    description: 'An oriental bouquet that celebrates the floral bazaars of Istanbul. Jasmine from Anatolia, rose from Bulgaria, and tuberose from India converge in a fragrant tapestry of Eastern beauty.',
    notes: { top: 'Turkish Rose, Jasmine, Neroli', heart: 'Tuberose, Ylang Ylang, Orange Blossom', base: 'Sandalwood, Vanilla, Musk' },
    ingredients: INGREDIENTS,
    isNew: false, isSale: false, isBest: true,
    reviews: [
      { name: 'Elif K.', rating: 5, text: 'Like walking through the Grand Bazaar\'s perfume section. Exotic and gorgeous.' },
      { name: 'Maria V.', rating: 5, text: 'A beautiful oriental floral. So elegant and refined.' },
      { name: 'Nazia A.', rating: 5, text: 'The ylang ylang and tuberose combination is perfect. Feminine luxury.' }
    ]
  },
  {
    id: 27, name: 'Nuit Sultane', brand: 'Askri Noir', category: 'Women',
    price: 17800, oldPrice: 22000, discount: 19,
    rating: 5.0, reviewCount: 91, stock: 13, size: '100ml',
    image: IMG[26], images: [IMG[26], IMG[39], IMG[5], IMG[16]],
    description: 'The night of a sultan\'s feast — rich, intoxicating, and opulent. Dark plums, spiced honey, and oud create an atmosphere of lavish indulgence. Nuit Sultane is for special nights that deserve special scents.',
    notes: { top: 'Dark Plum, Saffron, Cardamom', heart: 'Spiced Honey, Oud, Cinnamon', base: 'Amber, Vanilla, Musk' },
    ingredients: INGREDIENTS,
    isNew: true, isSale: true, isBest: false,
    reviews: [
      { name: 'Rania H.', rating: 5, text: 'The plum-honey-oud combination is intoxicating. Pure luxury.' },
      { name: 'Sophia M.', rating: 5, text: 'Bold and opulent. This is a special occasion fragrance.' },
      { name: 'Amira S.', rating: 5, text: 'The sultan\'s choice. Rich, warm, and unforgettable.' }
    ]
  },
  {
    id: 28, name: 'Rose Éternelle', brand: 'Askri Royale', category: 'Women',
    price: 15500, oldPrice: null, discount: 0,
    rating: 5.0, reviewCount: 176, stock: 24, size: '100ml',
    image: IMG[27], images: [IMG[27], IMG[33], IMG[6], IMG[17]],
    description: 'An eternal rose that never fades. Rose Éternelle captures every facet of the rose — from the fresh dewy petals to the deep, honeyed absolute — creating a three-dimensional rose that evolves beautifully for hours.',
    notes: { top: 'Rose Hip, Lychee, Pink Pepper', heart: 'Centifolia Rose, Rose Absolute, Geranium', base: 'Rose Musk, Ambrette, Blonde Woods' },
    ingredients: INGREDIENTS,
    isNew: false, isSale: false, isBest: false,
    reviews: [
      { name: 'Grace T.', rating: 5, text: 'The most realistic rose I have found in a perfume. Fresh and deep at once.' },
      { name: 'Zara L.', rating: 5, text: 'A rose for every season. Sophisticated and timeless.' },
      { name: 'Hana K.', rating: 5, text: 'Beautiful from first spray to the final dry-down. Pure elegance.' }
    ]
  },
  {
    id: 29, name: 'Oud Diamant', brand: 'Askri Oud', category: 'Arabic',
    price: 28000, oldPrice: null, discount: 0,
    rating: 5.0, reviewCount: 67, stock: 5, size: '100ml',
    image: IMG[28], images: [IMG[28], IMG[34], IMG[7], IMG[18]],
    description: 'The rarest oud, the purest composition. Oud Diamant features wild Assamese oud blended with the finest natural ingredients — each bottle is hand-filled and individually numbered. For the true connoisseur.',
    notes: { top: 'Wild Assamese Oud, Saffron, Rose de Mai', heart: 'Aged Agarwood, Deer Musk, Amber', base: 'Oud Absolute, Civet, Sandalwood' },
    ingredients: INGREDIENTS,
    isNew: false, isSale: false, isBest: true,
    reviews: [
      { name: 'Prince M.', rating: 5, text: 'Museum-grade oud fragrance. Each note is perfectly balanced. A collector\'s piece.' },
      { name: 'Khalid A.', rating: 5, text: 'The wild Assamese oud here is incomparable. Worth the premium.' },
      { name: 'Abdul Q.', rating: 5, text: 'If you know oud, you know this is the real thing. Extraordinary.' }
    ]
  },
  {
    id: 30, name: 'Sable d\'Or', brand: 'Askri Elite', category: 'Unisex',
    price: 14000, oldPrice: 17000, discount: 18,
    rating: 5.0, reviewCount: 152, stock: 26, size: '100ml',
    image: IMG[29], images: [IMG[29], IMG[35], IMG[8], IMG[19]],
    description: 'Golden sands at sunset — warm, shimmering, and infinitely beautiful. Sable d\'Or captures the magic of the desert golden hour with warm amber, soft oud, and sun-kissed musk.',
    notes: { top: 'Amber, Saffron, Pink Pepper', heart: 'Warm Oud, Labdanum, Honey', base: 'Golden Musk, Sandalwood, Driftwood' },
    ingredients: INGREDIENTS,
    isNew: false, isSale: true, isBest: false,
    reviews: [
      { name: 'Sara A.', rating: 5, text: 'Warm and inviting like a desert sunset. Beautiful composition.' },
      { name: 'Carlos R.', rating: 5, text: 'Smooth and warm. The honey note adds such a lovely sweetness.' },
      { name: 'Leila M.', rating: 5, text: 'My go-to evening fragrance. Warm without being heavy.' }
    ]
  },
  {
    id: 31, name: 'Vanille Noire', brand: 'Askri Noir', category: 'Unisex',
    price: 13800, oldPrice: null, discount: 0,
    rating: 5.0, reviewCount: 187, stock: 30, size: '100ml',
    image: IMG[30], images: [IMG[30], IMG[36], IMG[9], IMG[20]],
    description: 'The dark side of vanilla. Black vanilla from Tahiti meets smoky vetiver, dark chocolate, and leather. Vanille Noire transforms vanilla from sweet to seductive — mysterious, complex, and utterly compelling.',
    notes: { top: 'Black Vanilla, Cacao, Pink Pepper', heart: 'Tahitian Vanilla, Dark Chocolate, Coffee', base: 'Smoky Vetiver, Leather, Musk' },
    ingredients: INGREDIENTS,
    isNew: false, isSale: false, isBest: false,
    reviews: [
      { name: 'Alex K.', rating: 5, text: 'Dark, rich, and addictive. The chocolate-vanilla-leather combo is genius.' },
      { name: 'Nadia F.', rating: 5, text: 'Not your average vanilla. Complex and sexy.' },
      { name: 'Omar B.', rating: 5, text: 'The coffee note in the heart is a beautiful touch. Masterfully done.' }
    ]
  },
  {
    id: 32, name: 'Jasmin Impérial', brand: 'Askri Royale', category: 'Women',
    price: 14500, oldPrice: 17500, discount: 17,
    rating: 5.0, reviewCount: 198, stock: 22, size: '100ml',
    image: IMG[31], images: [IMG[31], IMG[37], IMG[10], IMG[21]],
    description: 'Imperial-grade jasmine absolute from Grasse, blended with sparkling aldehydes and creamy sandalwood. Jasmin Impérial is French perfumery at its finest — luxurious, radiant, and timelessly elegant.',
    notes: { top: 'Aldehydes, Italian Bergamot, Pear', heart: 'Jasmine Absolute, Tuberose, Ylang Ylang', base: 'Creamy Sandalwood, Vanilla, Musk' },
    ingredients: INGREDIENTS,
    isNew: false, isSale: true, isBest: false,
    reviews: [
      { name: 'Charlotte B.', rating: 5, text: 'Pure French elegance. The jasmine is so natural and beautiful.' },
      { name: 'Amal S.', rating: 5, text: 'Imperial quality indeed. Radiant and long-lasting.' },
      { name: 'Victoria L.', rating: 5, text: 'A timeless jasmine. This is what luxury perfumery is all about.' }
    ]
  },
  {
    id: 33, name: 'Bois de Rose', brand: 'Askri Blanc', category: 'Unisex',
    price: 11500, oldPrice: 14000, discount: 18,
    rating: 5.0, reviewCount: 213, stock: 37, size: '50ml',
    image: IMG[32], images: [IMG[32], IMG[38], IMG[11], IMG[22]],
    description: 'Where rose meets wood in perfect harmony. Bois de Rose pairs Bulgarian rose with pink pepper and warm cedarwood in a composition that is both fresh and grounding — modern, clean, and effortlessly chic.',
    notes: { top: 'Pink Pepper, Bergamot, Blackcurrant', heart: 'Bulgarian Rose, Geranium, Pink Lotus', base: 'Cedarwood, White Musk, Ambrette' },
    ingredients: INGREDIENTS,
    isNew: false, isSale: true, isBest: false,
    reviews: [
      { name: 'Julien P.', rating: 5, text: 'Rose and wood done perfectly. Fresh, modern, and elegant.' },
      { name: 'Ayesha R.', rating: 5, text: 'Love the balance between floral and woody. Works for any occasion.' },
      { name: 'Emily C.', rating: 5, text: 'Clean and beautiful. My favorite everyday fragrance.' }
    ]
  },
  {
    id: 34, name: 'Ambre Céleste', brand: 'Askri Royale', category: 'Unisex',
    price: 17200, oldPrice: 21000, discount: 18,
    rating: 5.0, reviewCount: 109, stock: 17, size: '100ml',
    image: IMG[33], images: [IMG[33], IMG[39], IMG[12], IMG[23]],
    description: 'Celestial amber that seems to float on the skin. Light yet profound, Ambre Céleste combines airy aldehydes with rich amber and powdery iris for a fragrance that transcends the ordinary.',
    notes: { top: 'Aldehydes, Bergamot, Neroli', heart: 'Amber Accord, Iris, Frankincense', base: 'White Musk, Powdery Orris, Sandalwood' },
    ingredients: INGREDIENTS,
    isNew: true, isSale: true, isBest: false,
    reviews: [
      { name: 'Nadia S.', rating: 5, text: 'Ethereal and beautiful. Like wearing a golden cloud.' },
      { name: 'Marc L.', rating: 5, text: 'The aldehyde-amber combination is heavenly. Unique and refined.' },
      { name: 'Sara J.', rating: 5, text: 'Light enough for day, rich enough for night. Versatile and gorgeous.' }
    ]
  },
  {
    id: 35, name: 'Musc Royal', brand: 'Askri Elite', category: 'Men',
    price: 11000, oldPrice: null, discount: 0,
    rating: 5.0, reviewCount: 243, stock: 40, size: '50ml',
    image: IMG[34], images: [IMG[34], IMG[33], IMG[13], IMG[24]],
    description: 'A royal take on masculine musk. Rich, animalic, and deeply sensual, Musc Royal is the scent of primal attraction refined into sophisticated elegance. Bold yet refined, intimate yet commanding.',
    notes: { top: 'Cardamom, Lavender, Mint', heart: 'Animal Musk, Violet Leaf, Geranium', base: 'Oakmoss, Tonka Bean, Leather' },
    ingredients: INGREDIENTS,
    isNew: false, isSale: false, isBest: true,
    reviews: [
      { name: 'James K.', rating: 5, text: 'The musk is rich and authentic. Real masculine luxury.' },
      { name: 'Ahmed F.', rating: 5, text: 'Projects confidence and sophistication. My power scent.' },
      { name: 'Daniel S.', rating: 5, text: 'Complex and evolving. A musk that keeps giving for hours.' }
    ]
  },
  {
    id: 36, name: 'Oud Suprême', brand: 'Askri Oud', category: 'Arabic',
    price: 20000, oldPrice: 24000, discount: 17,
    rating: 5.0, reviewCount: 94, stock: 11, size: '100ml',
    image: IMG[35], images: [IMG[35], IMG[34], IMG[14], IMG[25]],
    description: 'The supreme expression of oud. A blend of Cambodian, Assamese, and Indonesian oud creates a multi-dimensional oud experience unlike any other. Complex, layered, and endlessly fascinating.',
    notes: { top: 'Cambodian Oud, Saffron, Cinnamon', heart: 'Assamese Oud, Rose, Indonesian Oud', base: 'Aged Agarwood, Amber, Musk' },
    ingredients: INGREDIENTS,
    isNew: false, isSale: true, isBest: true,
    reviews: [
      { name: 'Sultan A.', rating: 5, text: 'Three types of oud, perfectly harmonized. The ultimate oud experience.' },
      { name: 'Yusuf K.', rating: 5, text: 'Multi-dimensional and fascinating. I discover new facets every time.' },
      { name: 'Rashid M.', rating: 5, text: 'The supreme oud. Nothing else comes close to this complexity.' }
    ]
  },
  {
    id: 37, name: 'Fleur Sauvage', brand: 'Askri Blanc', category: 'Women',
    price: 10200, oldPrice: 12500, discount: 18,
    rating: 5.0, reviewCount: 271, stock: 44, size: '50ml',
    image: IMG[36], images: [IMG[36], IMG[35], IMG[15], IMG[26]],
    description: 'Wildflowers picked at dawn, still glistening with dew. Fleur Sauvage is untamed beauty in a bottle — fresh, green, and joyfully feminine. A celebration of natural, effortless beauty.',
    notes: { top: 'Wild Violet, Green Tea, Bergamot', heart: 'Wild Rose, Lily, Freesia', base: 'Moss, Clean Musk, Vetiver' },
    ingredients: INGREDIENTS,
    isNew: false, isSale: true, isBest: false,
    reviews: [
      { name: 'Chloe R.', rating: 5, text: 'Fresh and natural. Like walking through a wildflower meadow.' },
      { name: 'Mia K.', rating: 5, text: 'Perfect spring/summer scent. Light and joyful.' },
      { name: 'Sophie T.', rating: 5, text: 'So natural and pretty. My favorite casual fragrance.' }
    ]
  },
  {
    id: 38, name: 'Nuit Étoilée', brand: 'Askri Noir', category: 'Unisex',
    price: 15800, oldPrice: 19000, discount: 17,
    rating: 5.0, reviewCount: 136, stock: 23, size: '100ml',
    image: IMG[37], images: [IMG[37], IMG[36], IMG[16], IMG[27]],
    description: 'The magic of a starlit night captured in fragrance. Cool lavender, sparkling aldehydes, and warm amber create the sensation of lying under a canopy of stars. Dreamy, romantic, and deeply evocative.',
    notes: { top: 'Lavender, Aldehydes, Lemon', heart: 'Star Jasmine, Orris, Heliotrope', base: 'Amber, Tonka Bean, Musk' },
    ingredients: INGREDIENTS,
    isNew: true, isSale: true, isBest: false,
    reviews: [
      { name: 'Laura M.', rating: 5, text: 'Dreamy and romantic. The heliotrope-amber combination is magical.' },
      { name: 'Ahmad R.', rating: 5, text: 'Like bottled starlight. Cool yet warm at the same time.' },
      { name: 'Nina P.', rating: 5, text: 'My nighttime fragrance. Evocative and beautiful.' }
    ]
  },
  {
    id: 39, name: 'Rose Antique', brand: 'Askri Royale', category: 'Women',
    price: 16800, oldPrice: null, discount: 0,
    rating: 5.0, reviewCount: 119, stock: 20, size: '100ml',
    image: IMG[38], images: [IMG[38], IMG[37], IMG[17], IMG[28]],
    description: 'A vintage rose preserved in amber. Rose Antique captures the dried, honeyed quality of centuries-old rose potpourri, enriched with antique woods and aged resins. Timeless beauty, captured forever.',
    notes: { top: 'Dried Rose, Saffron, Cardamom', heart: 'Antique Rose, Oud, Labdanum', base: 'Aged Sandalwood, Amber, Musk' },
    ingredients: INGREDIENTS,
    isNew: false, isSale: false, isBest: false,
    reviews: [
      { name: 'Elizabeth A.', rating: 5, text: 'Like opening a vintage rose sachet. Beautifully aged and refined.' },
      { name: 'Mariam K.', rating: 5, text: 'The dried rose note is unique and captivating. Antique elegance.' },
      { name: 'Grace W.', rating: 5, text: 'A rose with history and depth. Absolutely gorgeous.' }
    ]
  },
  {
    id: 40, name: 'Ambre Ancien', brand: 'Askri Royale', category: 'Unisex',
    price: 19500, oldPrice: 24000, discount: 19,
    rating: 5.0, reviewCount: 82, stock: 9, size: '100ml',
    image: IMG[39], images: [IMG[39], IMG[38], IMG[18], IMG[29]],
    description: 'Ancient amber, aged to perfection over decades. Ambre Ancien is the culmination of Askri\'s amber expertise — deep, complex, and profoundly beautiful. A fragrance that transcends time itself.',
    notes: { top: 'Ancient Labdanum, Myrrh, Frankincense', heart: 'Fossilized Amber, Oud, Benzoin', base: 'Prehistoric Amber, Sandalwood, Civet' },
    ingredients: INGREDIENTS,
    isNew: false, isSale: true, isBest: true,
    reviews: [
      { name: 'Robert J.', rating: 5, text: 'Extraordinary depth. The aged amber is like liquid history.' },
      { name: 'Khalid B.', rating: 5, text: 'A masterwork of amber perfumery. Ancient yet timeless.' },
      { name: 'Fatima N.', rating: 5, text: 'The finest amber I have ever experienced. Truly ancient quality.' }
    ]
  }
];

// Expose globally — Firestore first, localStorage second, local last
window.PRODUCTS = products;

async function loadProductsFromFirestore() {
  try {
    if (typeof db === 'undefined') return false;
    const snap = await db.collection('products').orderBy('id').get();
    if (snap.empty) return false;
    const list = [];
    snap.forEach(doc => list.push({ id: parseInt(doc.id) || doc.data().id, ...doc.data() }));
    if (list.length) {
      window.PRODUCTS = list;
      window.dispatchEvent(new Event('products-loaded'));
      return true;
    }
  } catch(e) { console.warn('Firestore load failed, using local:', e); }
  return false;
}

loadProductsFromFirestore();
