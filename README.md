# 🇸🇬 SingaporeJobsHub — 10 Lakh (1,000,000) Job Portal

A full job portal with **1,000,000 individual job pages** targeting Singapore — remote & on-site jobs across 100+ top international companies.

## Features

- ✅ **1,000,000 unique job pages** (`/jobs/1` → `/jobs/1000000`)
- ✅ **Singapore JSON-LD schema** on every single job page (SEO-ready)
- ✅ **applicantLocationRequirements** set to Singapore on every job
- ✅ **100+ companies** × 1,000 jobs each = 1,000,000 total
- ✅ Long, keyword-rich job titles (Netflix, Delta, Google, Tesla, etc.)
- ✅ Singapore locations (Orchard, Marina Bay, Jurong East, Tampines...)
- ✅ Salary in SGD (S$3,000 – S$40,000/month)
- ✅ Company pages (`/company/Netflix`, `/company/Google`, etc.)
- ✅ XML Sitemaps (1,000 sitemap files, 1,000 URLs each)
- ✅ robots.txt
- ✅ Pagination (20 jobs/page)
- ✅ Apply Now modal form
- ✅ REST API (`/api/jobs`, `/api/jobs/:id`)
- ✅ Zero database needed — all data generated deterministically
- ✅ Gzip compression — fast on Railway free tier

## JSON-LD Schema (Singapore)

Every job page includes:

```json
{
  "@context": "https://schema.org/",
  "@type": "JobPosting",
  "title": "Netflix Remote Jobs (Work From Home) 3,000 To 4,500 SGD",
  "applicantLocationRequirements": [
    {
      "@type": "Country",
      "name": "Singapore",
      "sameAs": "https://en.wikipedia.org/wiki/Singapore"
    }
  ],
  "jobLocation": {
    "@type": "Place",
    "address": { "addressCountry": "SG" }
  },
  "jobLocationType": "TELECOMMUTE",
  "baseSalary": {
    "@type": "MonetaryAmount",
    "currency": "SGD",
    "value": { "minValue": 3000, "maxValue": 4500, "unitText": "MONTH" }
  }
}
