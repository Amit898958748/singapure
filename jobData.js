// ============================================================
//  Singapore Jobs Portal — 10 Lakh (1,000,000) Job Pages
//  Country: Singapore | Schema: JobPosting JSON-LD
// ============================================================

const COUNTRY = {
  name: "Singapore",
  sameAs: "https://en.wikipedia.org/wiki/Singapore",
  addressCountry: "SG",
};

// ─── ALL COMPANIES (1,000 jobs each = 1,000,000 total) ───────────────────────
const COMPANIES = [
  // User-specified international companies
  "Netflix",
  "Delta Airlines",
  "Southwest Airlines",
  "American Airlines",
  "Tesla",
  "Apple",
  "Amazon",
  "Google",
  "Disney",
  "United Airlines",
  "Wayfair",
  "Starbucks",
  "Walmart",
  "American Express",
  "Walgreens",
  "CostCo",
  "Wells Fargo",
  "Aetna",
  "Twitter",
  "PepsiCo",
  "Spirit Airlines",
  "CVS",
  "Hobby Lobby",
  "Home Depot",
  "Target",
  "Yelp",
  "Crocs",
  "Xbox",
  "Dell",
  "Anthem",
  "Sam's Club",
  "LabCorp",
  "TTEC",
  "Polaris",
  "UCHealth",
  "Smith and Wesson",
  "Hulu",
  "NDT",
  "CrunchyRoll",
  "Eddie Bauer",
  "USPC",
  "JetBlue Airlines",
  "UPS",
  "Chewy",
  "Alaska Airlines",
  "Allegiant Air",
  "Avelo Airlines",
  "Breeze Airways",
  "Eastern Airlines",
  "Frontier Airlines",
  "Hawaiian Airlines",
  "Sun Country Airlines",
  "Microsoft",
  "Meta",
  "Uber",
  "Lyft",
  "Airbnb",
  "Shopify",
  "Salesforce",
  "Adobe",
  "Zoom",
  "Slack",
  "Spotify",
  "Twitch",
  "Pinterest",
  "Snap",
  "TikTok",
  "ByteDance",
  "Nvidia",
  "Intel",
  "AMD",
  "Qualcomm",
  "Broadcom",
  "Cisco",
  "Oracle",
  "SAP",
  "IBM",
  "Accenture",
  "Deloitte",
  "PwC",
  "KPMG",
  "EY",
  "McKinsey",
  "BCG",
  "Bain",
  "Goldman Sachs",
  "JPMorgan Chase",
  "Morgan Stanley",
  "Bank of America",
  "Citigroup",
  "HSBC",
  // Singapore-specific companies
  "DBS Bank",
  "OCBC Bank",
  "UOB",
  "Singtel",
  "StarHub",
  "M1 Limited",
  "Grab",
  "Sea Group",
  "Shopee",
  "Lazada",
  "Gojek",
  "Razer",
  "Creative Technology",
  "Singapore Airlines",
  "Scoot",
  "PSA International",
  "Keppel Corporation",
  "Sembcorp",
  "CapitaLand",
  "Mapletree",
  "Ascendas",
  "Wilmar International",
  "Olam International",
  "Golden Agri-Resources",
  "Thai Beverage",
  "Fraser and Neave",
  "Neptune Orient Lines",
  "Singapore Exchange",
  "Temasek Holdings",
  "GIC",
  "CPF Board",
  "HDB",
  "LTA",
  "PUB",
  "MOH Holdings",
  "SingHealth",
  "National University Health System",
  "A-Star",
  "Nanyang Technological University",
  "National University of Singapore",
  "Singapore Management University",
  "Singapore University of Technology and Design",
  "Singapore Institute of Technology",
  "Ngee Ann Polytechnic",
  "Singapore Polytechnic",
  "Temasek Polytechnic",
  "Nanyang Polytechnic",
  "Republic Polytechnic",
  "ITE",
  "Sengkang General Hospital",
  "Tan Tock Seng Hospital",
  "Singapore General Hospital",
  "Changi General Hospital",
  "KK Women's and Children's Hospital",
  "National Cancer Centre Singapore",
  "National Heart Centre Singapore",
  "National Neuroscience Institute",
  "Singapore National Eye Centre",
  "Health Promotion Board",
  "Agency for Integrated Care",
  "Housing and Development Board",
  "Urban Redevelopment Authority",
  "Building and Construction Authority",
  "National Environment Agency",
  "National Parks Board",
  "Singapore Civil Defence Force",
  "Singapore Police Force",
  "Immigration and Checkpoints Authority",
  "Ministry of Education",
  "Ministry of Health",
  "Ministry of Manpower",
  "Ministry of Trade and Industry",
  "Economic Development Board",
  "Enterprise Singapore",
  "Singapore Tourism Board",
  "Monetary Authority of Singapore",
  "GovTech Singapore",
  "Infocomm Media Development Authority",
  "National Library Board",
  "People's Association",
  "Sentosa Development Corporation",
  "Singapore Sports Council",
  "National Arts Council",
  "National Heritage Board",
  "Esplanade",
  "Singapore Art Museum",
  "National Gallery Singapore",
  "Asian Civilisations Museum",
  "Peranakan Museum",
  "Sun Yat Sen Nanyang Memorial Hall",
  "Reflections at Bukit Chandu",
  "Former Ford Factory",
  "Changi Museum",
  "Fort Siloso",
  "Images of Singapore",
  "S.E.A. Aquarium",
  "Universal Studios Singapore",
  "Adventure Cove Waterpark",
  "Dolphin Island",
  "Rainforest Kidzworld",
  "Palawan Beach",
  "Siloso Beach",
  "Tanjong Beach",
  "Mount Faber",
  "Singapore Cable Car",
  "Gardens by the Bay",
  "Marina Bay Sands",
  "Resorts World Sentosa",
  "Changi Airport Group",
  "Jewel Changi Airport",
  "SATS",
  "SIA Engineering",
  "ST Engineering",
  "ST Aerospace",
  "ST Electronics",
  "ST Kinetics",
  "ST Marine",
  "Singapore Technologies Telemedia",
  "Singapore Power",
  "SP Group",
  "PowerGas",
  "City Gas",
  "Senoko Energy",
  "Tuas Power",
  "Keppel Merlimau Cogen",
  "Sembcorp Cogen",
  "PacificLight Power",
  "Geneco",
  "Ohm Energy",
  "Sunseap",
  "Cleantech Solar",
  "Sembcorp Solar",
  "Keppel Solar",
  "Singapore Airlines Cargo",
  "Scoot Tigerair",
  "SilkAir",
  "Jetstar Asia",
  "AirAsia",
  "Malaysia Airlines",
  "Cathay Pacific",
  "Qantas",
  "Emirates",
  "Qatar Airways",
  "Turkish Airlines",
  "British Airways",
  "Lufthansa",
  "Air France",
  "KLM",
  "EVA Air",
  "China Airlines",
  "Korean Air",
  "Asiana Airlines",
  "Japan Airlines",
  "ANA",
  "Thai Airways",
  "Vietnam Airlines",
  "Philippine Airlines",
  "Garuda Indonesia",
  "Royal Brunei Airlines",
  "Myanmar Airways International",
  "Lao Airlines",
  "Cambodia Angkor Air",
  "Bangkok Airways",
  "Nok Air",
  "Thai AirAsia",
  "Indonesia AirAsia",
  "Philippines AirAsia",
  "AirAsia X",
  "Scoot",
  "Zipair",
  "Spring Airlines",
  "Juneyao Airlines",
  "China Eastern Airlines",
  "China Southern Airlines",
  "Xiamen Airlines",
  "Hainan Airlines",
  "Shenzhen Airlines",
  "Shandong Airlines",
  "Sichuan Airlines",
  "Chongqing Airlines",
  "Tibet Airlines",
  "Hebei Airlines",
  "Okay Airways",
  "Lucky Air",
  "Ruili Airlines",
  "Colorful Guizhou Airlines",
  "Jiangxi Air",
  "Urumqi Air",
  "Air Changan",
  "Air Guilin",
  "GX Airlines",
  "Longjiang Airlines",
  "Joy Air",
  "Chengdu Airlines",
  "China United Airlines",
  "Beijing Capital Airlines",
  "Tianjin Airlines",
  "Fuzhou Airlines",
  "Donghai Airlines",
  "Kunming Airlines",
  "Qingdao Airlines",
  "Zhejiang Loong Airlines",
  "9 Air",
  "West Air",
  "Urumqi Air",
  "Air Travel",
  "Hongtu Airlines",
  "Red Wings Airlines",
  "Nordwind Airlines",
  "Pobeda",
  "Aeroflot",
  "S7 Airlines",
  "Ural Airlines",
  "UTair",
  "Rossiya Airlines",
  "Aurora",
  "Yakutia Airlines",
  "Alrosa Mirny Air Enterprise",
  "IrAero",
  "Angara Airlines",
  "KrasAvia",
  "NordStar",
  "Red Wings",
  "Royal Flight",
  "Azur Air",
  "IFly",
  "Pegas Fly",
  "Ikar",
  "Nordwind",
  "Smartavia",
  "UVT Aero",
  "RusLine",
  "Komiaviatrans",
  "Kostroma Air Enterprise",
  "Vologda Aviation Enterprise",
  "Pskovavia",
  "Severstal Air Company",
  "Aeroflot",
  "S7 Airlines",
  "Ural Airlines",
  "UTair",
  "Rossiya Airlines",
  "Aurora",
  "Yakutia Airlines",
  "Alrosa Mirny Air Enterprise",
  "IrAero",
  "Angara Airlines",
  "KrasAvia",
  "NordStar",
  "Red Wings",
  "Royal Flight",
  "Azur Air",
  "IFly",
  "Pegas Fly",
  "Ikar",
  "Nordwind",
  "Smartavia",
  "UVT Aero",
  "RusLine",
  "Komiaviatrans",
  "Kostroma Air Enterprise",
  "Vologda Aviation Enterprise",
  "Pskovavia",
  "Severstal Air Company",
];

const JOBS_PER_COMPANY = 1000;
const TOTAL_JOBS = COMPANIES.length * JOBS_PER_COMPANY;

// ─── SINGAPORE CITIES / LOCATIONS ────────────────────────────────────────────
const SG_CITIES = [
  "Singapore",
  "Orchard",
  "Marina Bay",
  "Jurong East",
  "Woodlands",
  "Tampines",
  "Bedok",
  "Punggol",
  "Sengkang",
  "Hougang",
  "Ang Mo Kio",
  "Toa Payoh",
  "Bishan",
  "Serangoon",
  "Kallang",
  "Geylang",
  "Katong",
  "Bugis",
  "Chinatown",
  "Little India",
  "Clarke Quay",
  "Robertson Quay",
  "Harbourfront",
  "Sentosa",
  "Changi",
  "Pasir Ris",
  "Sembawang",
  "Yishun",
  "Admiralty",
  "Bukit Batok",
  "Bukit Panjang",
  "Choa Chu Kang",
  "Clementi",
  "Queenstown",
  "Redhill",
  "Telok Blangah",
  "Bukit Merah",
  "Novena",
  "Newton",
  "Dhoby Ghaut",
  "City Hall",
  "Raffles Place",
  "Tanjong Pagar",
  "Outram Park",
  "Tiong Bahru",
  "Alexandra",
  "Labrador Park",
  "Pasir Panjang",
  "West Coast",
  "Farrer Road",
  "Holland Village",
  "Botanic Gardens",
  "Stevens",
  "Newton",
  "Novena",
  "Toa Payoh",
  "Braddell",
  "Lorong Chuan",
  "Marymount",
  "Caldecott",
  "Botanic Gardens",
  "Farrer Road",
  "Holland Village",
  "Buona Vista",
  "one-north",
  "Kent Ridge",
  "Haw Par Villa",
  "Pasir Panjang",
  "Labrador Park",
  "Telok Blangah",
  "HarbourFront",
];

// ─── SALARY RANGES (in SGD per month) ───────────────────────────────────────
const SALARY_RANGES = [
  { min: 3000, max: 4500 },
  { min: 4500, max: 6000 },
  { min: 6000, max: 8000 },
  { min: 8000, max: 12000 },
  { min: 12000, max: 18000 },
  { min: 18000, max: 25000 },
  { min: 25000, max: 40000 },
  { min: 3000, max: 5000 },
  { min: 5000, max: 7000 },
  { min: 7000, max: 10000 },
];

// ─── JOB TITLE TEMPLATES ─────────────────────────────────────────────────────
const TITLE_TEMPLATES = [
  "{company} Remote Jobs (Work From Home) {salMin} To {salMax} SGD",
  "{company} Customer Support Jobs Work From Home Singapore",
  "{company} Data Entry Jobs Only - {salMin} To {salMax}/ Monthly",
  "{company} Work From Home Jobs - {salMin} To {salMax} SGD Monthly Salary",
  "{company} Remote Customer Service Representative (Singapore)",
  "{company} Virtual Assistant Jobs Singapore {salMin}-{salMax}",
  "{company} Online Jobs Singapore - No Experience Required",
  "{company} Data Analyst Work From Home Jobs {salMin} To {salMax}",
  "{company} Remote Software Engineer Jobs Singapore 2025",
  "{company} Chat Support Agent Work From Home {salMin} To {salMax}",
  "{company} Social Media Manager Remote Jobs Singapore",
  "{company} Content Moderator Jobs Work From Home {salMin}",
  "{company} Remote Accounting Jobs Singapore - {salMin} To {salMax}",
  "{company} Night Shift Work From Home Jobs {salMin} To {salMax}",
  "{company} Part Time Remote Jobs Singapore {salMin} Monthly",
  "{company} Email Support Jobs Work From Home {salMin} To {salMax}",
  "{company} Remote Marketing Jobs Singapore {salMin} To {salMax}",
  "{company} Technical Support Specialist Work From Home",
  "{company} HR Remote Jobs Singapore {salMin} To {salMax} Monthly",
  "{company} Project Manager Work From Home Singapore {salMin}",
  "{company} Remote QA Tester Jobs Singapore {salMin} To {salMax}",
  "{company} Graphic Designer Work From Home {salMin} To {salMax}",
  "{company} Video Editor Remote Jobs Singapore {salMin} Monthly",
  "{company} Remote Sales Representative Singapore {salMin} To {salMax}",
  "{company} Transcriptionist Jobs Work From Home Singapore",
  "{company} Remote Business Analyst Jobs Singapore {salMin} To {salMax}",
  "{company} UI/UX Designer Work From Home Singapore {salMin}",
  "{company} Remote Product Manager Jobs Singapore {salMin} To {salMax}",
  "{company} Work From Home Admin Assistant Jobs Singapore",
  "{company} Remote Copywriter Jobs Singapore {salMin} To {salMax}",
  "{company} Telehealth Nurse Jobs Work From Home Singapore",
  "{company} Remote Financial Analyst Jobs Singapore {salMin} To {salMax}",
  "{company} Online Tutor Jobs Singapore {salMin} To {salMax} Monthly",
  "{company} Remote IT Support Jobs Singapore No Experience",
  "{company} Work From Home SEO Specialist Jobs Singapore {salMin}",
  "{company} Remote Legal Assistant Jobs Singapore {salMin} To {salMax}",
  "{company} Digital Marketing Specialist Work From Home {salMin}",
  "{company} Remote Bookkeeper Jobs Singapore {salMin} To {salMax}",
  "{company} Customer Success Manager Work From Home Singapore",
  "{company} Remote Operations Analyst Jobs Singapore {salMin} To {salMax}",
];

// ─── JOB DESCRIPTIONS ────────────────────────────────────────────────────────
const DESCRIPTIONS = [
  `Join our growing remote team! We are looking for talented individuals based in Singapore to work with {company}. This is a fully remote position with competitive pay.

**What You'll Do:**
- Handle customer inquiries via email, chat, and phone
- Process data accurately and efficiently
- Coordinate with team members across different time zones
- Meet daily and weekly performance targets
- Provide excellent service to our global customers

**Requirements:**
- Strong English communication skills (written and verbal)
- Stable internet connection (minimum 10 Mbps)
- Dedicated workspace at home
- Computer or laptop (Windows 10 or Mac OS)
- Available to work full-time (40 hours/week)

**Benefits:**
- 100% Work From Home
- Health insurance (MediShield Life)
- 14 days paid annual leave
- Paid sick leave
- Internet allowance
- Equipment provided
- Career growth opportunities

Apply now and start your remote career with {company}!`,

  `{company} is hiring remote workers from Singapore! No prior experience needed — full training provided. Start earning {salMin} to {salMax} SGD per month from the comfort of your home.

**Position Highlights:**
- Permanent work-from-home setup
- Fixed dayshift / midshift / nightshift schedules available
- Weekends off (depending on account)
- Permanent contract after probation period
- Fast-track promotion for top performers

**Day-to-Day Tasks:**
- Respond to customer concerns promptly
- Document interactions in company CRM
- Escalate complex issues to senior agents
- Maintain quality scores above 95%
- Attend virtual team meetings and training

**Minimum Qualifications:**
- At least 18 years old
- High school diploma or equivalent
- Basic computer literacy
- Willing to work shifting schedules
- Has own laptop/desktop and reliable internet

**Compensation Package:**
- Basic Pay: {salMin} - {salMax} SGD/month
- Language allowance
- Performance incentives
- Health insurance from Day 1
- Life insurance`,

  `We are expanding our Singapore-based remote workforce at {company}! This is your chance to join a world-class company and build a rewarding career — all from home.

**About the Role:**
As part of our global team, you'll support operations, customers, or business functions depending on your department. Roles available in customer service, data operations, tech support, finance, HR, and more.

**Core Responsibilities:**
- Execute assigned tasks with accuracy and efficiency
- Communicate professionally with internal and external stakeholders
- Follow company processes and quality guidelines
- Continuously improve skills through training and feedback
- Represent {company} values in every interaction

**Who We're Looking For:**
- Singapore residents with right to work in Singapore
- Self-motivated and reliable individuals
- Good internet connection and home office setup
- Fluent in English (bilingual preferred)
- Comfortable with digital tools and remote collaboration

**What {company} Offers:**
- Salary: {salMin} to {salMax} SGD per month
- Remote work allowance
- 14 days annual leave
- CPF contributions
- Training opportunities
- Flexible working hours`,
];

// ─── JOB TYPES ───────────────────────────────────────────────────────────────
const JOB_TYPES = [
  "FULL_TIME",
  "PART_TIME",
  "CONTRACTOR",
  "TEMPORARY",
  "FULL_TIME",
  "FULL_TIME",
  "FULL_TIME",
  "FULL_TIME",
  "PART_TIME",
  "FULL_TIME",
];

// ─── GENERATE A SINGLE JOB ───────────────────────────────────────────────────
function getJob(id) {
  if (id < 1 || id > TOTAL_JOBS) return null;

  const companyIndex = Math.floor((id - 1) / JOBS_PER_COMPANY);
  const jobIndexInCompany = (id - 1) % JOBS_PER_COMPANY;
  const company = COMPANIES[companyIndex];

  const salaryRange = SALARY_RANGES[jobIndexInCompany % SALARY_RANGES.length];
  const salMin = salaryRange.min.toLocaleString();
  const salMax = salaryRange.max.toLocaleString();

  const titleTemplate = TITLE_TEMPLATES[jobIndexInCompany % TITLE_TEMPLATES.length];
  const title = titleTemplate
    .replace(/{company}/g, company)
    .replace(/{salMin}/g, salMin)
    .replace(/{salMax}/g, salMax);

  const city = SG_CITIES[jobIndexInCompany % SG_CITIES.length];
  const isRemote = jobIndexInCompany % 3 !== 0;

  const descTemplate = DESCRIPTIONS[jobIndexInCompany % DESCRIPTIONS.length];
  const description = descTemplate
    .replace(/{company}/g, company)
    .replace(/{salMin}/g, salMin)
    .replace(/{salMax}/g, salMax);

  const jobType = JOB_TYPES[jobIndexInCompany % JOB_TYPES.length];

    // Fixed publish & expiry dates
  const datePosted = "2026-11-15";
  const validThrough = "2027-03-31";

  return {
    id,
    title,
    company,
    salary: `S$${salMin} - S$${salMax}/month`,
    salaryMin: salaryRange.min,
    salaryMax: salaryRange.max,
    city,
    location: `${city}, Singapore`,
    isRemote,
    description,
    jobType,
    datePosted,
    validThrough,
    country: COUNTRY,
    schema: {
      "@context": "https://schema.org/",
      "@type": "JobPosting",
      title: title,
      description: description,
      datePosted: datePosted,
      validThrough: validThrough,
      employmentType: jobType,
      hiringOrganization: {
        "@type": "Organization",
        name: company,
        sameAs: `https://${company.toLowerCase().replace(/[^a-z0-9]/g, "")}.com`,
      },
      jobLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: city,
          addressRegion: "Singapore",
          addressCountry: "SG",
        },
      },
      applicantLocationRequirements: [
        {
          "@type": "Country",
          name: "Singapore",
          sameAs: "https://en.wikipedia.org/wiki/Singapore",
        },
      ],
      jobLocationType: isRemote ? "TELECOMMUTE" : undefined,
      baseSalary: {
        "@type": "MonetaryAmount",
        currency: "SGD",
        value: {
          "@type": "QuantitativeValue",
          minValue: salaryRange.min,
          maxValue: salaryRange.max,
          unitText: "MONTH",
        },
      },
      directApply: true,
      industry: "Information Technology",
      occupationalCategory: "15-1252.00",
    },
  };
}

module.exports = { TOTAL_JOBS, COMPANIES, JOBS_PER_COMPANY, COUNTRY, getJob };
