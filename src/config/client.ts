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
    { name: "Elona Cooper", rating: 5, text: "John and Ali cleared, redesigned and constructed a new back garden for my terraced house in Larkhall.  They were thorough and very professional, completing the landscaping work to a high standard.  I found them both easy to work with as …  ", date: "4 years ago" },
    { name: "Patrick Mill", rating: 5, text: "John had been excellent in working with me to create the garden that I wanted. He is very professional and the quality is extremely high. I would definitely recommend.  ", date: "3 years ago" },
    { name: "Barbara Suri", rating: 5, text: "John, Ali and Nick have transformed my small garden. The were very easy to have around on the site for two weeks, always professional, punctual, polite and courteous. They were considerate of my neighbours. …  ", date: "3 years ago" },
    { name: "Jez Flavell", rating: 5, text: "John carried out a large garden renovation at our property. He was very knowledgeable and professional. He and his team were courteous and hardworking delivering on time and on budget. My wife and I would highly recommend them. ", date: "3 years ago" },
    { name: "OLIVER CONSULTING", rating: 5, text: "John recently completed a full renovation of my 13-acre garden in Lansdown, Bath. I would recommend his team to anyone. They were in and out quickly, their quality of work is outstanding and very professional. I can now enjoy the summer in the garden", date: "5 years ago" },
    { name: "Hilary Parsons", rating: 5, text: "Very pleased with my small but quirky garden. John and all connected with the project were very helpful and creative with what was a bit of a challenge. I am now going to have something to enjoy and spend time in. Will be sending lots of …  ", date: "2 years ago" },
    { name: "Andrew Hodges", rating: 5, text: "We've used John (Manager of Bath Garden Co) for garden works and maintenance for 4+ years on a number of properties. He and his employees always perform high quality work and conduct themselves very professionally. John is easy to get hold of and is", date: "5 years ago" },
    { name: "Christian Brindley", rating: 5, text: "We have used Bath Garden Company for three projects over the last 10 years - back garden patio, front garden path and steps, and back garden terracing with two additional patios. They are a very professional team who are a pleasure to work with, and", date: "2 years ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "The Bath Garden Company | Landscaper in Bath",
    description: "Professional landscaper in Bath. 5.0-star rated on Google. Call for a free quote.",
  },
};
