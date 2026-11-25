export interface HeroSlide {
  id: number;
  tag: string;
  caption: string;
  subtitle: string;
  highlight: string;
}

export interface RankCard {
  id: string;
  numeral: string;
  title: string;
  subtitle: string;
}

export interface SchoolItem {
  id: string;
  code: string;
  name: string;
  ug: string;
  pg: string;
  featuredProgramme: string;
}

export interface ScholarshipTier {
  id: string;
  tier: string;
  waiver: string;
  title: string;
  criteria: string;
  featured?: boolean;
}

export interface CultureSlide {
  id: string;
  numeral: string;
  title: string;
  desc: string;
  category: string;
  metric: string;
}

export interface IndustryTab {
  id: string;
  label: string;
  title: string;
  desc: string;
  stat1Val: string;
  stat1Lbl: string;
  stat2Val: string;
  stat2Lbl: string;
  source: string;
  bars: { label: string; val: number }[];
}

export interface TestimonialItem {
  id: string;
  initials: string;
  name: string;
  meta: string;
  quote: string;
  videoTitle: string;
}

export interface FaqItem {
  id: string;
  q: string;
  a: string;
  cat: "admissions" | "fees" | "campus";
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 0,
    tag: "Slide 01 / 04",
    caption: "Crossfade Campus Aerial View",
    subtitle: "120-acre green residential campus nestled in Premnagar, Doon Valley.",
    highlight: "NAAC A+ Accredited Campus",
  },
  {
    id: 1,
    tag: "Slide 02 / 04",
    caption: "Moot Court & Academic Blocks",
    subtitle: "Dedicated moot courtrooms, legal aid clinics, and smart lecture halls.",
    highlight: "BCI & Statutory Excellence",
  },
  {
    id: 2,
    tag: "Slide 03 / 04",
    caption: "Advanced Engineering & Pharma Labs",
    subtitle: "AI cloud studios, clinical pharmacy labs, and 200+ student patents.",
    highlight: "NIRF #75 Pharmacy Ranking",
  },
  {
    id: 3,
    tag: "Slide 04 / 04",
    caption: "Convocation & Placement Celebrations",
    subtitle: "1,200+ recruiting organisations with offers up to ₹45 LPA.",
    highlight: "80% Placement Track Record",
  },
];

export const HERO_STATS = [
  { id: "01", value: "80%", label: "Placements" },
  { id: "02", value: "₹45 L", label: "Top offer" },
  { id: "03", value: "12", label: "Schools" },
];

export const HERO_PROGRAMMES = [
  "B.Tech Computer Science & Engineering",
  "BA LLB (Hons) / BBA LLB (Hons)",
  "MBA / BBA (Hons)",
  "B.Pharm / Pharm.D",
  "BCA / MCA",
  "B.Sc Nursing / BPT",
  "BHM (Hotel & Hospitality Management)",
  "BAMS (Ayurveda)",
];

export const RANK_CARDS: RankCard[] = [
  {
    id: "01",
    numeral: "#75",
    title: "NIRF India Rankings 2025",
    subtitle: "Pharmacy Category",
  },
  {
    id: "02",
    numeral: "A+",
    title: "NAAC Accredited",
    subtitle: "First Cycle Grade",
  },
  {
    id: "03",
    numeral: "AAA+",
    title: "Careers360 Rating",
    subtitle: "Regional University Rating",
  },
  {
    id: "04",
    numeral: "601–800",
    title: "THE Impact Band",
    subtitle: "Global Sustainability Rankings",
  },
];

export const STATUTORY_SEALS = [
  { code: "UGC", detail: "2(f) & 12(B) Recognised" },
  { code: "AICTE", detail: "Approved Technical Programmes" },
  { code: "BCI", detail: "Bar Council of India (Law)" },
  { code: "PCI", detail: "Pharmacy Council of India" },
  { code: "AIU", detail: "Association of Indian Universities" },
];

export const BIG_NUMBERS = [
  { value: "80%", label: "Placement rate" },
  { value: "₹45 L", label: "Highest package" },
  { value: "15K+", label: "Students on campus" },
  { value: "1200+", label: "Recruiting companies" },
  { value: "12", label: "Academic schools" },
  { value: "120", label: "Green campus acres" },
  { value: "200+", label: "Student patents" },
  { value: "35+", label: "Global partners" },
  { value: "8000+", label: "Research publications" },
  { value: "100+", label: "Programmes offered" },
];

export const CAMPUS_TILES = [
  {
    id: "campus",
    title: "Doon Valley Main Campus",
    caption: "120-acre residential campus in Premnagar, Dehradun",
    featured: true,
  },
  {
    id: "labs",
    title: "AI & Engineering Labs",
    caption: "Cloud, robotics & prototyping studios",
    featured: false,
  },
  {
    id: "library",
    title: "Central Library",
    caption: "2,430 sq m learning commons",
    featured: false,
  },
  {
    id: "hostels",
    title: "Residential Hostels",
    caption: "1 to 4 sharing, 24×7 Wi-Fi",
    featured: false,
  },
  {
    id: "auditorium",
    title: "Swami Vivekananda Auditorium",
    caption: "National conferences & fests",
    featured: false,
  },
  {
    id: "life",
    title: "Student Commons",
    caption: "40+ clubs & cultural societies",
    featured: false,
  },
];

export const SCHOOLS_LIST: SchoolItem[] = [
  {
    id: "lcd",
    code: "01",
    name: "Law College Dehradun",
    ug: "BA LLB (Hons), BBA LLB (Hons), LLB (Hons)",
    pg: "LLM (Constitutional, Corporate, Criminal)",
    featuredProgramme: "BA LLB (Hons) / BBA LLB (Hons)",
  },
  {
    id: "uit",
    code: "02",
    name: "Uttaranchal Institute of Technology",
    ug: "B.Tech CSE, AI/ML, Civil, Mechanical, ECE",
    pg: "M.Tech CSE, Structural, Thermal",
    featuredProgramme: "B.Tech Computer Science & Engineering",
  },
  {
    id: "uim",
    code: "03",
    name: "Uttaranchal Institute of Management",
    ug: "BBA (Hons), B.Com (Hons), BA Economics",
    pg: "MBA (Finance, Marketing, Analytics, HR)",
    featuredProgramme: "MBA / BBA (Hons)",
  },
  {
    id: "uips",
    code: "04",
    name: "Institute of Pharmaceutical Sciences",
    ug: "B.Pharm, Pharm.D, D.Pharm",
    pg: "M.Pharm (Pharmaceutics, Pharmacology)",
    featuredProgramme: "B.Pharm / Pharm.D",
  },
  {
    id: "uscs",
    code: "05",
    name: "School of Computing Sciences",
    ug: "BCA (Hons), B.Sc IT & Data Science",
    pg: "MCA (2-Year Full-Time)",
    featuredProgramme: "BCA / MCA",
  },
  {
    id: "soa",
    code: "06",
    name: "School of Agriculture",
    ug: "B.Sc (Hons) Agriculture, Forestry",
    pg: "M.Sc Agronomy, Horticulture",
    featuredProgramme: "B.Tech Computer Science & Engineering",
  },
  {
    id: "sals",
    code: "07",
    name: "Applied & Life Sciences",
    ug: "B.Sc (Hons) Biotech, Food Tech, Forensics",
    pg: "M.Sc Biotechnology, Microbiology, Chemistry",
    featuredProgramme: "B.Pharm / Pharm.D",
  },
  {
    id: "sla",
    code: "08",
    name: "School of Liberal Arts",
    ug: "BA (Hons) Psychology, Journalism, English",
    pg: "MA Psychology, Journalism & Mass Comm",
    featuredProgramme: "MBA / BBA (Hons)",
  },
  {
    id: "ucn",
    code: "09",
    name: "College of Nursing",
    ug: "B.Sc Nursing, GNM",
    pg: "M.Sc Nursing Specialisations",
    featuredProgramme: "B.Sc Nursing / BPT",
  },
  {
    id: "uchs",
    code: "10",
    name: "College of Health Sciences",
    ug: "BPT (Physiotherapy), B.Sc MLT, Optometry",
    pg: "MPT (Orthopaedics, Neurology)",
    featuredProgramme: "B.Sc Nursing / BPT",
  },
  {
    id: "uhm",
    code: "11",
    name: "Hotel & Hospitality Management",
    ug: "BHM (4-Year), B.Sc Hospitality Admin",
    pg: "MHM (Hospitality & Tourism)",
    featuredProgramme: "BHM (Hotel & Hospitality Management)",
  },
  {
    id: "mca",
    code: "12",
    name: "Medical College of Ayurveda",
    ug: "BAMS (5.5-Year Professional Degree)",
    pg: "MD / MS Ayurveda",
    featuredProgramme: "BAMS (Ayurveda)",
  },
];

export const OFFER_PROGRAMMES = [
  "B.Tech Computer Science",
  "BBA LLB (Hons)",
  "Master of Business Administration (MBA)",
  "B.Pharm (Pharmacy)",
  "BHM (Hotel Management)",
];

export const SCHOLARSHIP_TIERS: ScholarshipTier[] = [
  {
    id: "t1",
    tier: "Tier 01",
    waiver: "100%",
    title: "Chancellor’s Merit",
    criteria: "95%+ aggregate in Class 12 or 90+ percentile in national exam.",
    featured: true,
  },
  {
    id: "t2",
    tier: "Tier 02",
    waiver: "60%",
    title: "Academic Distinction",
    criteria: "85% – 94.9% in Class 12 qualifying board exams.",
  },
  {
    id: "t3",
    tier: "Tier 03",
    waiver: "35%",
    title: "Merit & Hill Domicile",
    criteria: "75% – 84.9% in Class 12 or Uttarakhand domicile certificate.",
  },
  {
    id: "t4",
    tier: "Tier 04",
    waiver: "20%",
    title: "Early Merit & Defence",
    criteria: "65% – 74.9% in Class 12 or wards of defence personnel.",
  },
];

export const CULTURE_SLIDES: CultureSlide[] = [
  {
    id: "c1",
    numeral: "01",
    category: "Learning Commons",
    title: "Central Library & Digital Archives",
    desc: "2,430 sq m learning commons with 24×7 digital journal access.",
    metric: "2,430 sq m",
  },
  {
    id: "c2",
    numeral: "02",
    category: "Student Clubs",
    title: "Annual Cultural Fest & Student Clubs",
    desc: "National youth festivals, hackathons, and 40+ student societies.",
    metric: "40+ Societies",
  },
  {
    id: "c3",
    numeral: "03",
    category: "Residential Life",
    title: "Residential Hostels & Food Court",
    desc: "On-campus hostels with 500-seat multi-cuisine dining court.",
    metric: "500-Seat Dining",
  },
  {
    id: "c4",
    numeral: "04",
    category: "Athletics & Wellness",
    title: "Sports Complex & Himalayan Backdrop",
    desc: "Outdoor athletics, indoor courts, and wellness facilities.",
    metric: "120-Acre Campus",
  },
];

export const INDUSTRY_TABS: IndustryTab[] = [
  {
    id: "tech",
    label: "Tech & AI",
    title: "Industry at a glance: Tech & AI",
    desc: "Enterprise adoption of generative AI, cloud security, and full-stack engineering is driving sustained demand for graduates trained in live computing labs.",
    stat1Val: "38%",
    stat1Lbl: "CAGR in AI & Cloud hiring",
    stat2Val: "₹19.5 L",
    stat2Lbl: "Top UU tech offer (Zscaler)",
    source: "Source: NASSCOM & UU Placement Report 2025",
    bars: [
      { label: "2025 Baseline Demand", val: 58 },
      { label: "2028 Mid-Degree Surge", val: 79 },
      { label: "2031 Graduation Peak", val: 94 },
    ],
  },
  {
    id: "pharma",
    label: "Pharma & Healthcare",
    title: "Industry at a glance: Pharma & Healthcare",
    desc: "India’s clinical research, biologics, and hospital care expansion places NIRF #75 ranked pharmacy and nursing graduates at the forefront of healthcare hiring.",
    stat1Val: "$130 B",
    stat1Lbl: "Projected Indian Pharma market",
    stat2Val: "#75",
    stat2Lbl: "UU NIRF Pharmacy Rank 2025",
    source: "Source: IBEF Healthcare Outlook & NIRF 2025",
    bars: [
      { label: "2025 Baseline Demand", val: 62 },
      { label: "2028 Clinical R&D Growth", val: 81 },
      { label: "2031 Graduation Peak", val: 91 },
    ],
  },
  {
    id: "hospitality",
    label: "Hospitality & Tourism",
    title: "Industry at a glance: Hospitality & Tourism",
    desc: "Global luxury hotel chains and aviation hospitality groups actively recruit Dehradun hospitality graduates for international management trainee roles.",
    stat1Val: "₹45 L",
    stat1Lbl: "Highest offer (Hyatt Regency)",
    stat2Val: "100%",
    stat2Lbl: "International internship placement",
    source: "Source: WTTC Travel Report & UU Placement Cell",
    bars: [
      { label: "2025 Baseline Demand", val: 64 },
      { label: "2028 Luxury Expansion", val: 83 },
      { label: "2031 Graduation Peak", val: 92 },
    ],
  },
  {
    id: "employability",
    label: "Graduate Employability",
    title: "Industry at a glance: Graduate Employability",
    desc: "Employers prioritise candidates with interdisciplinary problem-solving, internships, and verified project portfolios over rote exam scores.",
    stat1Val: "80%",
    stat1Lbl: "UU overall placement rate",
    stat2Val: "1200+",
    stat2Lbl: "Recruiting organisations",
    source: "Source: India Skills Report & UU Career Services",
    bars: [
      { label: "2025 Campus Offers", val: 72 },
      { label: "2028 Corporate Tie-ups", val: 85 },
      { label: "2031 Projected Outcomes", val: 95 },
    ],
  },
];

export const INTERNATIONAL_PARTNERS = [
  { code: "US", name: "USA" },
  { code: "UK", name: "UK" },
  { code: "CA", name: "Canada" },
  { code: "DE", name: "Germany" },
  { code: "AU", name: "Australia" },
  { code: "FR", name: "France" },
  { code: "JP", name: "Japan" },
  { code: "SG", name: "Singapore" },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "riya",
    initials: "RJ",
    name: "Riya Joshi",
    meta: "BHM · Placed at Hyatt Regency",
    quote:
      "Training in operational hospitality kitchens and receiving mentorship from the placement cell helped me land an international offer.",
    videoTitle: "Video Story · Riya Joshi (BHM, Hyatt Regency)",
  },
  {
    id: "kabir",
    initials: "KM",
    name: "Kabir Malhotra",
    meta: "B.Tech CSE · Placed at Zscaler",
    quote:
      "Hackathons, cloud labs, and constant coding reviews prepared me to clear every technical round with confidence.",
    videoTitle: "Video Story · Kabir Malhotra (B.Tech CSE, Zscaler)",
  },
  {
    id: "sneha",
    initials: "SR",
    name: "Sneha Rawat",
    meta: "BA LLB (Hons) · Law College Dehradun",
    quote:
      "Weekly moot court simulations and legal aid clinics gave me real advocacy exposure before graduation.",
    videoTitle: "Video Story · Sneha Rawat (Law College Dehradun)",
  },
];

export const PROCESS_STEPS = [
  {
    num: "01",
    title: "Register",
    desc: "Complete your online application form and select your school.",
  },
  {
    num: "02",
    title: "Share score",
    desc: "Submit Class 12 marks or entrance test scores for merit review.",
  },
  {
    num: "03",
    title: "Interact",
    desc: "Join a 1-on-1 faculty & admissions counselling interaction.",
  },
  {
    num: "04",
    title: "Confirm seat",
    desc: "Receive provisional offer letter, lock scholarship, and confirm admission.",
  },
];

export const FAQS: FaqItem[] = [
  {
    id: "f1",
    q: "How do I apply for the 2027–28 session at Uttaranchal University?",
    a: "Fill in the online enquiry/application form on this page, upload your academic documents, and complete your counselling interaction.",
    cat: "admissions",
  },
  {
    id: "f2",
    q: "What accreditations and rankings does UU hold?",
    a: "UU holds NAAC A+ accreditation, UGC 2(f) & 12(B) recognition, NIRF #75 rank in Pharmacy, and statutory approvals from AICTE, BCI, PCI, INC, and AIU.",
    cat: "admissions",
  },
  {
    id: "f3",
    q: "How are merit and need-based scholarships calculated?",
    a: "Up to 100% tuition fee waivers are granted based on Class 12 aggregate or national entrance scores, plus additional top-ups for domicile and girl applicants.",
    cat: "fees",
  },
  {
    id: "f4",
    q: "Are semester-wise fee instalments and education loans supported?",
    a: "Yes, fees can be paid semester-wise and our campus admission desk assists with documentation for nationalised bank education loans.",
    cat: "fees",
  },
  {
    id: "f5",
    q: "What hostel and campus facilities are available in Dehradun?",
    a: "Separate boys and girls hostels with 1- to 4-sharing rooms, 24×7 Wi-Fi, medical care, 2,430 sq m central library, and a 500-seat food court.",
    cat: "campus",
  },
  {
    id: "f6",
    q: "Can I schedule a guided campus tour before confirming admission?",
    a: "Yes, campus visits and face-to-face faculty interactions are available Monday through Saturday at Premnagar, Dehradun.",
    cat: "campus",
  },
];

export const FOOTER_COLUMNS = [
  {
    heading: "Programs",
    boldLinks: false,
    links: [
      { label: "Undergraduate", href: "#sec-10" },
      { label: "Postgraduate", href: "#sec-10" },
      { label: "PhD & Research", href: "#sec-10" },
      { label: "For BAMS", href: "#sec-10" },
      { label: "Online Learning (OL)", href: "#hero-form" },
    ],
  },
  {
    heading: "Admission Process",
    boldLinks: false,
    links: [
      { label: "Admission Process", href: "#sec-18" },
      { label: "Industry Sponsored Program", href: "#sec-15" },
      { label: "Scholarship Calculator", href: "#sec-12" },
      { label: "Hostel Fee", href: "#sec-20" },
      { label: "International Admission", href: "#sec-16" },
      { label: "Offer Letter Preview", href: "#sec-11" },
      { label: "Student Fee Finance Scheme", href: "#sec-20" },
      { label: "FAQ", href: "#sec-20" },
      { label: "Download Prospectus", href: "#hero-form" },
      { label: "Admissions Office Contacts", href: "#sec-19" },
      { label: "Guidelines & Policies", href: "#sec-20" },
    ],
  },
  {
    heading: "Facilities",
    boldLinks: false,
    links: [
      { label: "Academic Facilities", href: "#sec-08" },
      { label: "Transport Facilities", href: "#sec-14" },
      { label: "Campus Facilities", href: "#sec-08" },
      { label: "Medical Facilities", href: "#sec-20" },
      { label: "Sports Facilities", href: "#sec-14" },
    ],
  },
  {
    heading: "Life At UU",
    boldLinks: false,
    links: [
      { label: "Campus Life", href: "#sec-14" },
      { label: "Cultural", href: "#sec-14" },
      { label: "Sports", href: "#sec-14" },
      { label: "NCC", href: "#sec-14" },
      { label: "NSS", href: "#sec-14" },
      { label: "Convocations", href: "#sec-03" },
    ],
  },
  {
    heading: "Academics",
    boldLinks: true,
    links: [
      { label: "Placements", href: "#sec-09" },
      { label: "Research", href: "#sec-07" },
      { label: "International", href: "#sec-16" },
      { label: "About Us", href: "#sec-08" },
      { label: "Why Us?", href: "#sec-06" },
      { label: "Alumni", href: "#sec-17" },
    ],
  },
];

export const FOOTER_QUICK_LINKS = [
  { label: "Testimonials", href: "#sec-17" },
  { label: "Happenings", href: "#sec-14" },
  { label: "FAQs", href: "#sec-20" },
  { label: "BMS", href: "#hero-form" },
  { label: "Online Learning", href: "#sec-10" },
  { label: "ERP Login", href: "#hero-form" },
];
