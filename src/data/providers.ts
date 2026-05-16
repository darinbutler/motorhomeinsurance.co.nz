export interface Provider {
  name: string;
  slug: string;
  logo: string;
  rating: number;
  reviewCount: number;
  description: string;
  features: string[];
  pros: string[];
  cons: string[];
  website: string;
  speciality: string;
  coverageHighlight: string;
  priceRange: string;
}

export const providers: Provider[] = [
  {
    name: 'AA Insurance',
    slug: 'aa-insurance',
    logo: 'AA',
    rating: 4.2,
    reviewCount: 1840,
    description: 'AA Insurance is one of New Zealand\'s most recognised insurers, backed by Suncorp Group. They offer motorhome insurance with flexible agreed or market value options, AA Roadside Assistance included, and a wide network of approved repairers across the country.',
    features: [
      'Agreed value or market value options',
      'AA Roadside Assistance included',
      '24/7 claims lodgement',
      'Wide approved repairer network',
      'Multi-policy discounts available',
      'Comprehensive or third-party liability cover',
    ],
    pros: [
      'Strong brand with wide NZ recognition',
      'AA Roadside Assistance bundled at no extra cost',
      'Good claims service with nationwide repairer network',
      'Multi-policy bundling discounts (home, car, motorhome)',
    ],
    cons: [
      'Can be more expensive for older or imported motorhomes',
      'Less specialist knowledge than dedicated RV insurers',
      'Contents cover requires separate add-on',
    ],
    website: 'https://www.aainsurance.co.nz',
    speciality: 'Mainstream comprehensive cover with roadside assistance',
    coverageHighlight: 'AA Roadside Assistance included as standard',
    priceRange: '$$',
  },
  {
    name: 'Star Insure (CamperCare)',
    slug: 'star-insure',
    logo: 'SI',
    rating: 4.5,
    reviewCount: 920,
    description: 'Star Insure\'s CamperCare product is a specialist motorhome and caravan insurance policy built specifically for the RV lifestyle. Their "inside-out" cover philosophy means everything from habitation fittings to your personal gear is protected. NZRA free roadside assistance is included, and agreed value policies provide certainty at claim time.',
    features: [
      '"Inside-out" specialist RV cover',
      '$3,000 contents cover auto-included',
      'Glass auto-included (no glass excess)',
      'NZRA free roadside assistance included',
      'Agreed value policies',
      'New motorhome replacement in first year if written off',
    ],
    pros: [
      'Specialist RV insurer with deep motorhome knowledge',
      'Auto-included contents and glass cover saves add-on costs',
      'Agreed value policies eliminate depreciation disputes',
      'NZRA roadside assistance included',
    ],
    cons: [
      'Less well-known brand compared to mainstream insurers',
      'Fewer physical branches for in-person service',
    ],
    website: 'https://www.starinsure.co.nz',
    speciality: 'Specialist RV/motorhome insurance — "inside-out" cover',
    coverageHighlight: '$3,000 contents + glass auto-included, agreed value',
    priceRange: '$$',
  },
  {
    name: 'Tower Insurance',
    slug: 'tower-insurance',
    logo: 'TW',
    rating: 3.9,
    reviewCount: 2210,
    description: 'Tower Insurance provides straightforward motorhome cover for social, domestic, and private use. As part of the IAG group, Tower offers reliable comprehensive cover, competitive pricing for standard motorhomes, and an easy-to-use online portal for policy management and claims.',
    features: [
      'Comprehensive or third-party liability',
      'Market value cover',
      'Social, domestic, and private use',
      'Online policy management portal',
      'Online claims lodgement',
      '24/7 emergency claims line',
    ],
    pros: [
      'Competitive pricing for standard motorhomes',
      'Easy online management and claims process',
      'Straightforward policy wording',
      'Backed by IAG\'s financial strength',
    ],
    cons: [
      'Fewer specialist motorhome features than dedicated RV insurers',
      'Agreed value not always available for older models',
      'Contents and roadside assistance are add-ons',
    ],
    website: 'https://www.tower.co.nz',
    speciality: 'Affordable mainstream motorhome cover',
    coverageHighlight: 'Competitive pricing with easy online process',
    priceRange: '$',
  },
  {
    name: 'AMI Insurance',
    slug: 'ami-insurance',
    logo: 'AMI',
    rating: 3.8,
    reviewCount: 1650,
    description: 'AMI Insurance is an IAG-owned insurer with strong regional presence across New Zealand. Their motorhome policies offer comprehensive cover with multi-policy discounting, agreed value options, and a trusted claims process. AMI is popular with Kiwi families who bundle home, contents, car, and motorhome insurance together.',
    features: [
      'Comprehensive cover option',
      'Agreed value available',
      'Multi-policy bundling discounts',
      '24/7 claims support',
      'Contents add-on available',
      'Regional branch network',
    ],
    pros: [
      'Excellent multi-policy discounts when bundling insurance',
      'Strong regional presence and community trust',
      'Agreed value option for newer motorhomes',
      'Responsive 24/7 claims support',
    ],
    cons: [
      'Premium increases for high-value or specialty motorhomes',
      'Less specialist motorhome expertise than dedicated RV insurers',
      'Roadside assistance requires separate add-on',
    ],
    website: 'https://www.ami.co.nz',
    speciality: 'Multi-policy bundling and regional community service',
    coverageHighlight: 'Best value when bundling home + car + motorhome',
    priceRange: '$$',
  },
  {
    name: 'Covi Insurance',
    slug: 'covi-insurance',
    logo: 'CV',
    rating: 4.6,
    reviewCount: 1120,
    description: 'Covi Insurance is New Zealand\'s premier specialist motorhome and caravan insurer, endorsed by the NZMCA and trusted by 17,000+ members. Underwritten by NZI (IAG), Covi offers agreed value for the first 5 years, $10,000 auto-included contents cover, no glass excess on vehicles under $400k, and Wings Roadside Assistance for just $57/year. Their deep RV expertise makes them the top choice for serious motorhome owners.',
    features: [
      'Agreed value for first 5 years of policy',
      '$10,000 contents cover auto-included',
      'No glass excess on motorhomes under $400k insured value',
      'Wings Roadside Assistance from $57/year ($200 callout fee)',
      'NZMCA endorsed partner insurer',
      'Underwritten by NZI (part of IAG)',
      'New replacement vehicle (1st year write-off)',
      'Legal liability up to $20 million',
    ],
    pros: [
      'NZ\'s leading specialist RV insurer with 17,000+ members',
      '$10,000 contents auto-included — industry-leading',
      'No glass excess under $400k insured value',
      'NZMCA partner — dedicated motorhome expertise',
      'Agreed value for first 5 years eliminates depreciation risk',
    ],
    cons: [
      'Higher premiums reflect the comprehensive specialist coverage',
      'Wings Roadside has a $200 callout fee (though Wings itself is $57/yr)',
      'Best suited to serious motorhome owners, may be over-specified for casual users',
    ],
    website: 'https://www.coviinsurance.co.nz',
    speciality: 'NZ\'s #1 specialist motorhome insurer — NZMCA partner',
    coverageHighlight: '$10,000 contents auto-included, agreed value 5 years, no glass excess',
    priceRange: '$$$',
  },
  {
    name: 'NZI',
    slug: 'nzi',
    logo: 'NZI',
    rating: 4.1,
    reviewCount: 740,
    description: 'NZI is IAG New Zealand\'s commercial and specialist underwriter, providing motorhome fleet and commercial policies for operators with multiple vehicles. They also underwrite Covi Insurance. NZI is the go-to choice for motorhome hire companies, fleet operators, and businesses using motorhomes commercially.',
    features: [
      'Commercial and fleet motorhome cover',
      'Specialist underwriting for high-value vehicles',
      'Agreed value or market value options',
      'Multi-vehicle fleet discounts',
      'Liability cover up to $20 million',
      'Available through licensed brokers',
    ],
    pros: [
      'Specialist underwriting expertise for complex risks',
      'Excellent for fleets and commercial motorhome operators',
      'Backed by IAG\'s financial strength and stability',
      'Flexible policy structures for business use',
    ],
    cons: [
      'Generally available through brokers only — not direct to consumer',
      'Less suited to personal/recreational use compared to Covi or Star',
      'Commercial focus means fewer lifestyle-oriented features',
    ],
    website: 'https://www.nzi.co.nz',
    speciality: 'Commercial and fleet motorhome underwriting',
    coverageHighlight: 'Best for fleet operators and commercial hire motorhomes',
    priceRange: '$$$',
  },
];
