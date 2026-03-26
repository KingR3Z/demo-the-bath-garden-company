export const client = {
  // Business Details
  name: "The Bath Garden Company",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in Bath.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "01225 318849",
  email: "",
  website: "",

  // Location
  address: "Bath",
  city: "Bath",
  county: "",
  postcode: "",
  basedIn: "Bath",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5",
  reviewCount: "8",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "Jenny Dixon", rating: 5, text: "John and his team turned a long-neglected, rubble-filled space into the garden of my dreams! They overcame all sorts of logistical problems and came up with inspiring solutions. I couldn't be happier with the results and would thoroughly recommend The Bath Garden Company.", date: "a year ago" },
    { name: "Samantha Ricketts", rating: 5, text: "John and team were brilliant from start to finish and have completely transformed our garden. They were professional, considerate and great at communication throughout.  I wouldn't hesitate to recommend them for being brilliant in all aspects, friendly and courteous and left everything immaculate.", date: "a year ago", badge: "Local Guide" },
    { name: "Christian Brindley", rating: 5, text: "We have used Bath Garden Company for three projects over the last 10 years - back garden patio, front garden path and steps, and back garden terracing with two additional patios. They are a very professional team who are a pleasure to work with, and we are extremely happy with the results.", date: "2 years ago" },
    { name: "Hilary Parsons", rating: 5, text: "Very pleased with my small but quirky garden. John and all connected with the project were very helpful and creative with what was a bit of a challenge. I am now going to have something to enjoy and spend time in. Will be sending lots of photos as plants mature, although currently no plants and no seating. I will thoroughly enjoy choosing the furniture and plants to compliment the wonderful little space I now have. Thank you. Hilary", date: "2 years ago" },
    { name: "michael cuff", rating: 5, text: "Many people call themselves Landscapers but this company is the real thing. Professional and very Experienced.", date: "3 years ago", badge: "Local Guide" },
    { name: "Jez Flavell", rating: 5, text: "John carried out a large garden renovation at our property. He was very knowledgeable and professional. He and his team were courteous and hardworking delivering on time and on budget. My wife and I would highly recommend them.", date: "3 years ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "The Bath Garden Company | Landscaper in Bath",
    description: "Professional landscaper in Bath. 5.0-star rated on Google. Call for a free quote.",
  },
};
