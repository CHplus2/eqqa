// Fallback data used when the Django API is unavailable.
// Mirrors the confirmed business information from the beneficiary interview.
// Anything not confirmed remains marked as [TO BE CONFIRMED].

export const fallbackBusiness = {
  name: "Eqqa Enterprise",
  category: "Kuih & Snacks",
  tagline: "Authentic traditional kuih and snacks, handmade in Sibu, Sarawak.",
  description:
    "Eqqa Enterprise is a local business from Sibu, Sarawak offering " +
    "authentic traditional kuih and snacks. Our products are handmade " +
    "with 100% fresh ingredients, contain no preservatives, and are made " +
    "carefully with attention to customer satisfaction at affordable prices.",
  location: "Sibu, Sarawak",
  phone: "011-1408 0050",
  phone_secondary: "013-566 9234",
  whatsapp: "[TO BE CONFIRMED: which phone number is the primary WhatsApp ordering number]",
  address: "[TO BE CONFIRMED]",
  email: "[TO BE CONFIRMED]",
  social_facebook: "[TO BE CONFIRMED]",
  facebook_name: "Erica Sandra",
  social_tiktok: "[TO BE CONFIRMED]",
  tiktok_name: "Eqqa Enterprise",
  social_instagram: "[TO BE CONFIRMED]",
  opening_hours: "[TO BE CONFIRMED]",
  years_in_business: "[TO BE CONFIRMED]",
  review_rating: "[TO BE CONFIRMED]",
  target_customers: "Adults, children, families, and groups of friends",
  ordering_channels: "WhatsApp, TikTok, and events",
  delivery_methods: "Self-delivery, runner, or delivery by bus",
  claim_1: "100% fresh ingredients",
  claim_2: "No preservatives",
  achievement:
    "Champion, Kuih Cap competition (Sarawak district level), Wellbest Carnival 2025",
  primary_cta_label: "Order on WhatsApp",
  primary_cta_link: "/contact",
};

const productDescription =
  "Handmade with 100% fresh ingredients and no preservatives. " +
  "[TO BE CONFIRMED: product-specific description]";

export const fallbackProducts = [
  {
    id: 1,
    name: "Kuih Cuan",
    description: productDescription,
    benefit: "Authentic traditional taste",
    price: "RM25",
    options: "[TO BE CONFIRMED: price unit (per package / container)]",
    availability: "[TO BE CONFIRMED: whether available all the time]",
    image_url: null,
    is_featured: true,
  },
  {
    id: 2,
    name: "Kuih Jala",
    description: productDescription,
    benefit: "Authentic traditional taste",
    price: "RM25",
    options: "[TO BE CONFIRMED: price unit (per package / container)]",
    availability: "[TO BE CONFIRMED: whether available all the time]",
    image_url: null,
    is_featured: true,
  },
  {
    id: 3,
    name: "Kacang Pedas Manis",
    description: productDescription,
    benefit: "Authentic traditional taste",
    price: "RM10",
    options: "[TO BE CONFIRMED: price unit (per package / container)]",
    availability: "[TO BE CONFIRMED: whether available all the time]",
    image_url: null,
    is_featured: true,
  },
  {
    id: 4,
    name: "Kerepek Pisang Panggang",
    description: productDescription,
    benefit: "Authentic traditional taste",
    price: "RM25",
    options: "[TO BE CONFIRMED: price unit (per package / container)]",
    availability: "[TO BE CONFIRMED: whether available all the time]",
    image_url: null,
    is_featured: true,
  },
  {
    id: 5,
    name: "Kerepek Ubi Panggang",
    description: productDescription,
    benefit: "Authentic traditional taste",
    price: "RM25",
    options: "[TO BE CONFIRMED: price unit (per package / container)]",
    availability: "[TO BE CONFIRMED: whether available all the time]",
    image_url: null,
    is_featured: true,
  },
  {
    id: 6,
    name: "Kuih Meruku",
    description: productDescription,
    benefit: "Authentic traditional taste",
    price: "RM15",
    options: "[TO BE CONFIRMED: price unit (per package / container)]",
    availability: "[TO BE CONFIRMED: whether available all the time]",
    image_url: null,
    is_featured: true,
  },
];

export const fallbackGallery = [
  { id: 1, caption: "[REAL PHOTO NEEDED] Kuih Jala", category: "product", image_url: null },
  { id: 2, caption: "[REAL PHOTO NEEDED] Kuih Cuan", category: "product", image_url: null },
  { id: 3, caption: "[REAL PHOTO NEEDED] Kerepek Pisang Panggang", category: "product", image_url: null },
  { id: 4, caption: "[REAL PHOTO NEEDED] Kuih Meruku", category: "product", image_url: null },
  { id: 5, caption: "[REAL PHOTO NEEDED] Behind the scenes (handmade preparation)", category: "behind_the_scenes", image_url: null },
  { id: 6, caption: "[REAL PHOTO NEEDED] Event / Wellbest Carnival 2025", category: "event", image_url: null },
];

export const fallbackFAQs = [
  {
    id: 1,
    question: "What products do you sell?",
    answer:
      "Kuih Cuan (RM25), Kuih Jala (RM25), Kacang Pedas Manis (RM10), " +
      "Kerepek Pisang Panggang (RM25), Kerepek Ubi Panggang (RM25), and " +
      "Kuih Meruku (RM15). [TO BE CONFIRMED: whether prices are per package or container]",
  },
  {
    id: 2,
    question: "Where are you located?",
    answer: "We are based in Sibu, Sarawak. [TO BE CONFIRMED: exact business address]",
  },
  {
    id: 3,
    question: "How do I place an order?",
    answer:
      "You can order through WhatsApp or TikTok, or find us at events. " +
      "[TO BE CONFIRMED: primary WhatsApp ordering number]",
  },
  {
    id: 4,
    question: "Do you provide delivery?",
    answer:
      "Yes. We offer self-delivery, runner service, and delivery by bus. " +
      "[TO BE CONFIRMED: delivery areas and delivery fees]",
  },
  {
    id: 5,
    question: "Are your products fresh?",
    answer:
      "Yes. Our products are handmade with 100% fresh ingredients and " +
      "contain no preservatives.",
  },
  { id: 6, question: "What are your opening hours?", answer: "[TO BE CONFIRMED]" },
  { id: 7, question: "What payment methods are accepted?", answer: "[TO BE CONFIRMED]" },
  { id: 8, question: "Is the product halal?", answer: "[TO BE CONFIRMED]" },
];

export const fallbackWhyChoose = [
  {
    id: 1,
    title: "Authentic traditional taste",
    explanation:
      "Traditional kuih and snacks made the authentic way, true to their Sarawak roots.",
  },
  {
    id: 2,
    title: "Handmade",
    explanation:
      "Every product is handmade with care and attention to customer satisfaction.",
  },
  {
    id: 3,
    title: "100% fresh ingredients",
    explanation:
      "We use only fresh ingredients, with no preservatives in any of our products.",
  },
  {
    id: 4,
    title: "Affordable pricing",
    explanation:
      "Quality traditional snacks at prices that are friendly for families and groups.",
  },
];
