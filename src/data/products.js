// Anand V Jewellers — Luxury Product Catalog
// Full BlueStone architecture: 16 Categories + Exact BlueStone Rings & Fine Jewellery with real prices & making charge discounts

export const LIVE_RATES = {
  gold24k: 73450, // per 10g
  gold22k: 67330, // per 10g
  gold18k: 55090, // per 10g
  gold14k: 42850, // per 10g
  silver: 89500,   // per 1kg
  updatedAt: "Today, 11:30 AM"
};

export const CATEGORIES = [
  {
    id: "rings",
    name: "Rings",
    count: "420+ Designs",
    tag: "Solitaires & Bands",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "earrings",
    name: "Earrings",
    count: "380+ Designs",
    tag: "Studs, Drops & Jhumkas",
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "pendants",
    name: "Pendants",
    count: "290+ Designs",
    tag: "Solitaire & Daily Wear",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "chains",
    name: "Chains",
    count: "150+ Designs",
    tag: "22K Solid & Lightweight",
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "watch-jewellery",
    name: "Watch Accessories",
    count: "45+ Designs",
    tag: "Apple Watch Luxury Charms",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "necklaces",
    name: "Necklaces",
    count: "210+ Designs",
    tag: "Bridal & Heritage Polki",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "bracelets",
    name: "Bracelets",
    count: "185+ Designs",
    tag: "Tennis & Flexible Chains",
    image: "https://images.unsplash.com/photo-1611591475847-5120a169b910?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "mangalsutra",
    name: "Mangalsutras",
    count: "140+ Designs",
    tag: "Modern & Heritage",
    image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "nose-pins",
    name: "Nose Pins",
    count: "95+ Designs",
    tag: "Solitaire Studs & Rings",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "solitaires",
    name: "Solitaires",
    count: "GIA / IGI Certified",
    tag: "Hearts & Arrows Cut",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "goldcoins",
    name: "Gold Coins",
    count: "24K & 22K Lakshmi",
    tag: "1g to 50g Blister Certified",
    image: "https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "kids",
    name: "Kids' Jewellery",
    count: "80+ Designs",
    tag: "Nazariya, Pendants & Bands",
    image: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "mens",
    name: "Men's Jewellery",
    count: "110+ Designs",
    tag: "Rings, Chains & Kada",
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "anklets",
    name: "Anklets",
    count: "60+ Designs",
    tag: "Payal & Delicate Drops",
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "bangles",
    name: "Bangles",
    count: "190+ Designs",
    tag: "Daily & Bridal Sets",
    image: "https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "kadas",
    name: "Kadas",
    count: "75+ Designs",
    tag: "Antique & Sovereign 22K",
    image: "https://images.unsplash.com/photo-1611591475152-4770e28e678e?auto=format&fit=crop&w=800&q=80"
  }
];

export const PRODUCTS = [
  // 1. The Mireya Ring
  {
    id: "bs-29351",
    title: "The Mireya Ring",
    subtitle: "Solitaire Crown with Pavé Diamond Band",
    category: "rings",
    tag: "TRENDING",
    discountOffer: "15% off on Making Charges",
    rating: 4.9,
    reviewsCount: 142,
    basePrice: 60368,
    originalPrice: 65200,
    weightGm: 3.2,
    diamondWeightCt: 0.55,
    diamondClarity: "SI / I-J Color",
    tryAtHome: true,
    metals: {
      yellow: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=85",
      rose: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1000&q=85",
      white: "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=1000&q=85"
    },
    karatMultiplier: { "14K": 0.88, "18K": 1.0, "22K": 1.15 },
    makingCharges: 3800,
    gstPercent: 3,
    deliveryDays: "2-4 Days"
  },
  // 2. The Keeya Band Ring
  {
    id: "bs-81248",
    title: "The Keeya Band Ring",
    subtitle: "Sleek Everyday Stackable Diamond Eternity Band",
    category: "rings",
    tag: "DAILYWEAR",
    discountOffer: "10% off on Making Charges",
    rating: 4.8,
    reviewsCount: 89,
    basePrice: 30126,
    originalPrice: 32500,
    weightGm: 2.1,
    diamondWeightCt: 0.22,
    diamondClarity: "SI / G-H Color",
    tryAtHome: true,
    metals: {
      rose: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1000&q=85",
      yellow: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=85",
      white: "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=1000&q=85"
    },
    karatMultiplier: { "14K": 0.88, "18K": 1.0, "22K": 1.15 },
    makingCharges: 2100,
    gstPercent: 3,
    deliveryDays: "2-3 Days"
  },
  // 3. The Dionne Ring
  {
    id: "bs-77239",
    title: "The Dionne Ring",
    subtitle: "Floral Halo Centerpiece with 18K Gold Setting",
    category: "rings",
    tag: "BESTSELLER",
    discountOffer: "10% off on Making Charges",
    rating: 4.9,
    reviewsCount: 112,
    basePrice: 54598,
    originalPrice: 58900,
    weightGm: 3.1,
    diamondWeightCt: 0.48,
    diamondClarity: "VVS-VS / F-G Color",
    tryAtHome: true,
    metals: {
      yellow: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=85",
      rose: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1000&q=85",
      white: "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=1000&q=85"
    },
    karatMultiplier: { "14K": 0.88, "18K": 1.0, "22K": 1.15 },
    makingCharges: 3500,
    gstPercent: 3,
    deliveryDays: "2-4 Days"
  },
  // 4. The Harper Ring
  {
    id: "bs-37120",
    title: "The Harper Ring",
    subtitle: "Geometric Solitaire Prism Band",
    category: "rings",
    tag: "SOLITAIRE",
    discountOffer: "15% off on Making Charges",
    rating: 5.0,
    reviewsCount: 76,
    basePrice: 72248,
    originalPrice: 78500,
    weightGm: 3.8,
    diamondWeightCt: 0.65,
    diamondClarity: "VVS1 / E-F Color",
    tryAtHome: true,
    metals: {
      white: "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=1000&q=85",
      rose: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1000&q=85",
      yellow: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=85"
    },
    karatMultiplier: { "14K": 0.88, "18K": 1.0, "22K": 1.15 },
    makingCharges: 4600,
    gstPercent: 3,
    deliveryDays: "3-5 Days"
  },
  // 5. The Elaria Band Ring
  {
    id: "bs-76972",
    title: "The Elaria Band Ring",
    subtitle: "Continuous Baguette & Round Diamond Eternity Statement",
    category: "rings",
    tag: "COUTURE",
    discountOffer: "20% off on Making Charges",
    rating: 5.0,
    reviewsCount: 94,
    basePrice: 107523,
    originalPrice: 119000,
    weightGm: 4.6,
    diamondWeightCt: 1.12,
    diamondClarity: "VVS / DEF Color",
    tryAtHome: true,
    metals: {
      rose: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1000&q=85",
      yellow: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=85",
      white: "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=1000&q=85"
    },
    karatMultiplier: { "14K": 0.88, "18K": 1.0, "22K": 1.15 },
    makingCharges: 6800,
    gstPercent: 3,
    deliveryDays: "2-4 Days"
  },
  // 6. The Sheine Ring
  {
    id: "bs-34337",
    title: "The Sheine Ring",
    subtitle: "Dainty Twisted Vine Diamond Accent Ring",
    category: "rings",
    tag: "UNDER 30K",
    discountOffer: "10% off on Making Charges",
    rating: 4.7,
    reviewsCount: 165,
    basePrice: 27324,
    originalPrice: 29800,
    weightGm: 1.9,
    diamondWeightCt: 0.18,
    diamondClarity: "SI / G-H Color",
    tryAtHome: true,
    metals: {
      yellow: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=85",
      rose: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1000&q=85",
      white: "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=1000&q=85"
    },
    karatMultiplier: { "14K": 0.88, "18K": 1.0, "22K": 1.15 },
    makingCharges: 1900,
    gstPercent: 3,
    deliveryDays: "2-3 Days"
  },
  // 7. The Aahva Band for Him
  {
    id: "bs-40414",
    title: "The Aahva Band for Him",
    subtitle: "Subtle Satin Brushed Platinum & Diamond Center Band",
    category: "mens",
    tag: "FOR HIM",
    discountOffer: "10% off on Making Charges",
    rating: 4.9,
    reviewsCount: 88,
    basePrice: 86226,
    originalPrice: 93500,
    weightGm: 6.8,
    diamondWeightCt: 0.35,
    diamondClarity: "VS / G-H Color",
    tryAtHome: true,
    metals: {
      white: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1000&q=85",
      yellow: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=85",
      rose: "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=1000&q=85"
    },
    karatMultiplier: { "18K": 1.0, "22K": 1.18 },
    makingCharges: 5200,
    gstPercent: 3,
    deliveryDays: "3-5 Days"
  },
  // 8. The Bahati Ring
  {
    id: "bs-89747",
    title: "The Bahati Ring",
    subtitle: "Contemporary Triple Twist Wave Silhouette",
    category: "rings",
    tag: "NEW ARRIVAL",
    discountOffer: "10% off on Making Charges",
    rating: 4.8,
    reviewsCount: 52,
    basePrice: 41609,
    originalPrice: 45200,
    weightGm: 2.7,
    diamondWeightCt: 0.30,
    diamondClarity: "SI / I-J Color",
    tryAtHome: true,
    metals: {
      rose: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1000&q=85",
      yellow: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=85",
      white: "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=1000&q=85"
    },
    karatMultiplier: { "14K": 0.88, "18K": 1.0, "22K": 1.15 },
    makingCharges: 2700,
    gstPercent: 3,
    deliveryDays: "2-4 Days"
  },
  // 9. The Jilian Ring
  {
    id: "bs-7521",
    title: "The Jilian Ring",
    subtitle: "Classic 4-Prong Cathedral Mount Solitaire",
    category: "rings",
    tag: "POPULAR",
    discountOffer: "15% off on Making Charges",
    rating: 4.9,
    reviewsCount: 130,
    basePrice: 59814,
    originalPrice: 64900,
    weightGm: 3.3,
    diamondWeightCt: 0.52,
    diamondClarity: "VVS2 / F Color",
    tryAtHome: true,
    metals: {
      yellow: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=85",
      rose: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1000&q=85",
      white: "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=1000&q=85"
    },
    karatMultiplier: { "14K": 0.88, "18K": 1.0, "22K": 1.15 },
    makingCharges: 3900,
    gstPercent: 3,
    deliveryDays: "2-4 Days"
  },
  // 10. The Avila Ring
  {
    id: "bs-78883",
    title: "The Avila Ring",
    subtitle: "Petite Bezel Solitaire for Everyday Glamour",
    category: "rings",
    tag: "BEST VALUE",
    discountOffer: null,
    rating: 4.7,
    reviewsCount: 98,
    basePrice: 23390,
    originalPrice: 24900,
    weightGm: 1.8,
    diamondWeightCt: 0.15,
    diamondClarity: "SI / G-H Color",
    tryAtHome: true,
    metals: {
      yellow: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=85",
      rose: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1000&q=85",
      white: "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=1000&q=85"
    },
    karatMultiplier: { "14K": 0.88, "18K": 1.0, "22K": 1.15 },
    makingCharges: 1600,
    gstPercent: 3,
    deliveryDays: "2-3 Days"
  },
  // 11. The Gaena Band for Her
  {
    id: "bs-40460",
    title: "The Gaena Band for Her",
    subtitle: "Shimmering Scalloped Diamond Channel Band",
    category: "rings",
    tag: "BRIDAL BAND",
    discountOffer: "15% off on Making Charges",
    rating: 4.9,
    reviewsCount: 104,
    basePrice: 65594,
    originalPrice: 71200,
    weightGm: 3.5,
    diamondWeightCt: 0.60,
    diamondClarity: "VVS-VS / F-G Color",
    tryAtHome: true,
    metals: {
      rose: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1000&q=85",
      yellow: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=85",
      white: "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=1000&q=85"
    },
    karatMultiplier: { "14K": 0.88, "18K": 1.0, "22K": 1.15 },
    makingCharges: 4200,
    gstPercent: 3,
    deliveryDays: "2-4 Days"
  },
  // 12. The Ilana Band for Him
  {
    id: "bs-34682",
    title: "The Ilana Band for Him",
    subtitle: "Two-Tone Rose Gold & Matte Titanium Accent Band",
    category: "mens",
    tag: "FOR HIM",
    discountOffer: "10% off on Making Charges",
    rating: 4.8,
    reviewsCount: 67,
    basePrice: 67823,
    originalPrice: 73900,
    weightGm: 5.9,
    diamondWeightCt: 0.28,
    diamondClarity: "VS / G Color",
    tryAtHome: true,
    metals: {
      yellow: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1000&q=85",
      rose: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=85",
      white: "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=1000&q=85"
    },
    karatMultiplier: { "18K": 1.0, "22K": 1.18 },
    makingCharges: 4600,
    gstPercent: 3,
    deliveryDays: "3-5 Days"
  },
  // 13. The Zemora Chevron Ring
  {
    id: "bs-90337",
    title: "The Zemora Chevron Ring",
    subtitle: "V-Point Tiara Wishbone Diamond Contour Ring",
    category: "rings",
    tag: "TRENDING",
    discountOffer: "10% off on Making Charges",
    rating: 4.9,
    reviewsCount: 145,
    basePrice: 28545,
    originalPrice: 30900,
    weightGm: 2.0,
    diamondWeightCt: 0.20,
    diamondClarity: "SI / G-H Color",
    tryAtHome: true,
    metals: {
      yellow: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=85",
      rose: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1000&q=85",
      white: "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=1000&q=85"
    },
    karatMultiplier: { "14K": 0.88, "18K": 1.0, "22K": 1.15 },
    makingCharges: 2100,
    gstPercent: 3,
    deliveryDays: "2-3 Days"
  },
  // 14. The Aveera Ring
  {
    id: "bs-78025",
    title: "The Aveera Ring",
    subtitle: "Intricate Vintage Filigree Solitaire Band",
    category: "rings",
    tag: "VINTAGE",
    discountOffer: "15% off on Making Charges",
    rating: 5.0,
    reviewsCount: 88,
    basePrice: 63966,
    originalPrice: 69500,
    weightGm: 3.6,
    diamondWeightCt: 0.55,
    diamondClarity: "VVS / E-F Color",
    tryAtHome: true,
    metals: {
      yellow: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=85",
      rose: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1000&q=85",
      white: "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=1000&q=85"
    },
    karatMultiplier: { "14K": 0.88, "18K": 1.0, "22K": 1.15 },
    makingCharges: 4300,
    gstPercent: 3,
    deliveryDays: "3-4 Days"
  },
  // 15. The Corinna Band for Her
  {
    id: "bs-34673",
    title: "The Corinna Band for Her",
    subtitle: "Beaded Milgrain Edge Diamond Eternity Band",
    category: "rings",
    tag: "TIMELESS",
    discountOffer: "10% off on Making Charges",
    rating: 4.8,
    reviewsCount: 71,
    basePrice: 50214,
    originalPrice: 54500,
    weightGm: 3.0,
    diamondWeightCt: 0.42,
    diamondClarity: "VS / G-H Color",
    tryAtHome: true,
    metals: {
      rose: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1000&q=85",
      yellow: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=85",
      white: "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=1000&q=85"
    },
    karatMultiplier: { "14K": 0.88, "18K": 1.0, "22K": 1.15 },
    makingCharges: 3200,
    gstPercent: 3,
    deliveryDays: "2-4 Days"
  },
  // 16. The Isleen Ring
  {
    id: "bs-7517",
    title: "The Isleen Ring",
    subtitle: "Floating Marquise & Round Diamond Cascade Ring",
    category: "rings",
    tag: "COVETED",
    discountOffer: "10% off on Making Charges",
    rating: 4.9,
    reviewsCount: 110,
    basePrice: 56428,
    originalPrice: 61200,
    weightGm: 3.2,
    diamondWeightCt: 0.50,
    diamondClarity: "VVS-VS / F Color",
    tryAtHome: true,
    metals: {
      yellow: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=85",
      rose: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1000&q=85",
      white: "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=1000&q=85"
    },
    karatMultiplier: { "14K": 0.88, "18K": 1.0, "22K": 1.15 },
    makingCharges: 3600,
    gstPercent: 3,
    deliveryDays: "2-4 Days"
  },
  // 17. The Basia Band For Him
  {
    id: "bs-62402",
    title: "The Basia Band For Him",
    subtitle: "Heavy Imperial Solid 18K Yellow Gold & Diamond Inlay",
    category: "mens",
    tag: "ROYAL FOR HIM",
    discountOffer: null,
    rating: 5.0,
    reviewsCount: 45,
    basePrice: 119700,
    originalPrice: 128000,
    weightGm: 8.5,
    diamondWeightCt: 0.50,
    diamondClarity: "VVS / G Color",
    tryAtHome: true,
    metals: {
      yellow: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1000&q=85",
      white: "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=1000&q=85",
      rose: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=85"
    },
    karatMultiplier: { "18K": 1.0, "22K": 1.18 },
    makingCharges: 7500,
    gstPercent: 3,
    deliveryDays: "3-5 Days"
  },
  // 18. The Sokoro Ring
  {
    id: "bs-45622",
    title: "The Sokoro Ring",
    subtitle: "Modern Tension Set Radiant Cut Solitaire",
    category: "rings",
    tag: "STATEMENT",
    discountOffer: "15% off on Making Charges",
    rating: 4.9,
    reviewsCount: 63,
    basePrice: 80008,
    originalPrice: 87500,
    weightGm: 4.0,
    diamondWeightCt: 0.72,
    diamondClarity: "VVS1 / E Color",
    tryAtHome: true,
    metals: {
      rose: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1000&q=85",
      yellow: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=85",
      white: "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=1000&q=85"
    },
    karatMultiplier: { "14K": 0.88, "18K": 1.0, "22K": 1.15 },
    makingCharges: 4900,
    gstPercent: 3,
    deliveryDays: "2-4 Days"
  },
  // 19. The Quinn Ring
  {
    id: "bs-57845",
    title: "The Quinn Ring",
    subtitle: "Emerald Cut Solitaire with Double Diamond Halo",
    category: "solitaires",
    tag: "EXCLUSIVE",
    discountOffer: "20% off on Making Charges",
    rating: 5.0,
    reviewsCount: 81,
    basePrice: 113024,
    originalPrice: 125000,
    weightGm: 4.8,
    diamondWeightCt: 1.15,
    diamondClarity: "VVS1 / DEF Color",
    tryAtHome: true,
    metals: {
      yellow: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=85",
      rose: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1000&q=85",
      white: "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=1000&q=85"
    },
    karatMultiplier: { "14K": 0.88, "18K": 1.0, "22K": 1.15 },
    makingCharges: 7200,
    gstPercent: 3,
    deliveryDays: "3-5 Days"
  },
  // 20. The Legendary Ring
  {
    id: "bs-2919",
    title: "The Legendary Ring",
    subtitle: "Masterpiece 1.50 Ct Triple Excellent Cushion Solitaire",
    category: "solitaires",
    tag: "HAUTE LUXURY",
    discountOffer: null,
    rating: 5.0,
    reviewsCount: 39,
    basePrice: 213766,
    originalPrice: 235000,
    weightGm: 5.8,
    diamondWeightCt: 1.50,
    diamondClarity: "IF-VVS1 / D Color (Flawless)",
    tryAtHome: true,
    metals: {
      yellow: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=85",
      white: "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=1000&q=85",
      rose: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1000&q=85"
    },
    karatMultiplier: { "18K": 1.0, "22K": 1.15 },
    makingCharges: 12000,
    gstPercent: 3,
    deliveryDays: "2-4 Days"
  },

  // Additional signature items across other BlueStone categories
  // 21. Earrings
  {
    id: "avj-ear-1",
    title: "Royal Noor Jhumka Cascades",
    subtitle: "22K Gold Handcrafted Pearl & Polki Drops",
    category: "earrings",
    tag: "WEDDING EDIT",
    discountOffer: "15% off on Making Charges",
    rating: 5.0,
    reviewsCount: 76,
    basePrice: 68500,
    originalPrice: 75000,
    weightGm: 12.8,
    diamondWeightCt: 0.85,
    diamondClarity: "Syndicate Polki",
    tryAtHome: true,
    metals: {
      yellow: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=1000&q=85",
      rose: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=85",
      white: "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=1000&q=85"
    },
    karatMultiplier: { "18K": 0.88, "22K": 1.0 },
    makingCharges: 4200,
    gstPercent: 3,
    deliveryDays: "2-4 Days"
  },
  // 22. Pendants
  {
    id: "avj-pen-1",
    title: "The Celestia Diamond Pendant",
    subtitle: "GIA Certified 0.40 Ct Solitaire Teardrop",
    category: "pendants",
    tag: "POPULAR",
    discountOffer: "10% off on Making Charges",
    rating: 4.9,
    reviewsCount: 54,
    basePrice: 38400,
    originalPrice: 42000,
    weightGm: 2.2,
    diamondWeightCt: 0.40,
    diamondClarity: "VVS2 / E Color",
    tryAtHome: true,
    metals: {
      rose: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1000&q=85",
      yellow: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=85",
      white: "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=1000&q=85"
    },
    karatMultiplier: { "14K": 0.88, "18K": 1.0, "22K": 1.15 },
    makingCharges: 2200,
    gstPercent: 3,
    deliveryDays: "2-3 Days"
  },
  // 23. Chains
  {
    id: "avj-chn-1",
    title: "Classic 22K Solid Figaro Gold Chain",
    subtitle: "BIS 916 Hallmarked Precision Link Chain",
    category: "chains",
    tag: "DAILY ESSENTIAL",
    discountOffer: "10% off on Making Charges",
    rating: 4.8,
    reviewsCount: 88,
    basePrice: 78500,
    originalPrice: 84000,
    weightGm: 11.2,
    diamondWeightCt: 0,
    diamondClarity: "Pure 22K Gold",
    tryAtHome: true,
    metals: {
      yellow: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=1000&q=85"
    },
    karatMultiplier: { "22K": 1.0 },
    makingCharges: 3900,
    gstPercent: 3,
    deliveryDays: "2-3 Days"
  },
  // 24. Mangalsutras
  {
    id: "avj-mng-1",
    title: "The Tara Diamond Mangalsutra",
    subtitle: "Modern Dual Eternity Solitaire Pendant with Auspicious Black Beads",
    category: "mangalsutra",
    tag: "BESTSELLER",
    discountOffer: "15% off on Making Charges",
    rating: 5.0,
    reviewsCount: 160,
    basePrice: 58900,
    originalPrice: 64500,
    weightGm: 4.5,
    diamondWeightCt: 0.45,
    diamondClarity: "VVS / F-G Color",
    tryAtHome: true,
    metals: {
      yellow: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=1000&q=85",
      rose: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=85"
    },
    karatMultiplier: { "18K": 1.0, "22K": 1.15 },
    makingCharges: 3800,
    gstPercent: 3,
    deliveryDays: "2-4 Days"
  },
  // 25. Bracelets
  {
    id: "avj-brc-1",
    title: "Aura Petite Diamond Tennis Bracelet",
    subtitle: "18K White Gold with 52 Brilliant Cut Diamonds",
    category: "bracelets",
    tag: "DAILY LUXURY",
    discountOffer: "20% off on Making Charges",
    rating: 5.0,
    reviewsCount: 68,
    basePrice: 92400,
    originalPrice: 104000,
    weightGm: 7.9,
    diamondWeightCt: 1.10,
    diamondClarity: "VVS1 / E Color",
    tryAtHome: true,
    metals: {
      white: "https://images.unsplash.com/photo-1611591475847-5120a169b910?auto=format&fit=crop&w=1000&q=85",
      rose: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1000&q=85",
      yellow: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=85"
    },
    karatMultiplier: { "18K": 1.0, "22K": 1.18 },
    makingCharges: 5400,
    gstPercent: 3,
    deliveryDays: "2-4 Days"
  },
  // 26. Nose Pins
  {
    id: "avj-nsp-1",
    title: "The Starlet Solitaire Diamond Nose Pin",
    subtitle: "18K Rose Gold Bezel Set VVS Brilliant Diamond",
    category: "nose-pins",
    tag: "UNDER 15K",
    discountOffer: "10% off on Making Charges",
    rating: 4.8,
    reviewsCount: 95,
    basePrice: 12850,
    originalPrice: 14200,
    weightGm: 0.65,
    diamondWeightCt: 0.10,
    diamondClarity: "VVS / E-F Color",
    tryAtHome: false,
    metals: {
      rose: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=85",
      yellow: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=85",
      white: "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=1000&q=85"
    },
    karatMultiplier: { "18K": 1.0, "22K": 1.15 },
    makingCharges: 950,
    gstPercent: 3,
    deliveryDays: "2-3 Days"
  },
  // 27. Kadas
  {
    id: "avj-kada-1",
    title: "Swarna Bloom 22K Traditional Kada",
    subtitle: "Intricate Filigree & Antique Artwork",
    category: "kadas",
    tag: "BIS 916 HALLMARK",
    discountOffer: "15% off on Making Charges",
    rating: 5.0,
    reviewsCount: 82,
    basePrice: 142000,
    originalPrice: 155000,
    weightGm: 21.0,
    diamondWeightCt: 0,
    diamondClarity: "Pure 22K Gold",
    tryAtHome: true,
    metals: {
      yellow: "https://images.unsplash.com/photo-1611591475152-4770e28e678e?auto=format&fit=crop&w=1000&q=85"
    },
    karatMultiplier: { "22K": 1.0 },
    makingCharges: 8200,
    gstPercent: 3,
    deliveryDays: "2-3 Days"
  },
  // 28. Watch Accessories
  {
    id: "avj-wtch-1",
    title: "The Royal Crown Diamond Watch Charm",
    subtitle: "Compatible with Apple Watch, Galaxy & Luxury Timepieces",
    category: "watch-jewellery",
    tag: "INNOVATION",
    discountOffer: "10% off on Making Charges",
    rating: 4.9,
    reviewsCount: 42,
    basePrice: 18900,
    originalPrice: 21000,
    weightGm: 1.4,
    diamondWeightCt: 0.12,
    diamondClarity: "VS / G Color",
    tryAtHome: false,
    metals: {
      rose: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=85",
      yellow: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=85",
      white: "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=1000&q=85"
    },
    karatMultiplier: { "18K": 1.0 },
    makingCharges: 1400,
    gstPercent: 3,
    deliveryDays: "2-3 Days"
  }
];

export const TRUST_PILLARS = [
  {
    title: "100% Certified Diamonds",
    subtitle: "Every diamond comes with GIA, IGI or SGL genuine laboratory grading certificate."
  },
  {
    title: "100% BIS Hallmarked 916 Gold",
    subtitle: "Every gram of gold is laser hallmarked with government certified HUID security."
  },
  {
    title: "Free Insured Express Delivery",
    subtitle: "Transit insurance on all domestic deliveries right to your doorstep."
  },
  {
    title: "Lifetime Exchange & Buyback",
    subtitle: "Transparent value guarantee with 100% exchange on diamond value across India."
  }
];

export const TESTIMONIALS = [
  {
    name: "Dr. Radhika Sharma",
    city: "Mumbai",
    text: "The finish on The Mireya ring exceeded what I saw online. Sparkle is unbelievable, and the certification was verified instantly.",
    rating: 5,
    product: "The Mireya Ring"
  },
  {
    name: "Vikramaditya Singhania",
    city: "New Delhi",
    text: "Ordered The Legendary Ring for our wedding reception. Anand V Jewellers provided live video call preview and express insured shipping. Truly five-star experience!",
    rating: 5,
    product: "The Legendary Ring"
  },
  {
    name: "Pooja Hegde-Patel",
    city: "Bengaluru",
    text: "BlueStone jaisa clean filter and Apple-like website experience. Got my rose gold diamond bracelet within 3 days. Superb craftsmanship!",
    rating: 5,
    product: "Aura Tennis Bracelet"
  }
];
