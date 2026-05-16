export interface CoverageTypeFaq {
  question: string;
  answer: string;
}

export interface CoverageType {
  slug: string;
  title: string;
  icon: string;
  description: string;
  details: string;
  faqs?: CoverageTypeFaq[];
}

export const coverageTypes: CoverageType[] = [
  {
    slug: 'comprehensive',
    title: 'Comprehensive Cover',
    icon: '🛡️',
    description: 'Full protection including accidental damage, theft, fire, and weather events.',
    details: 'Comprehensive motorhome insurance provides the broadest protection available. It covers accidental damage from collisions and impacts, theft of the motorhome or parts, fire damage, weather and natural disaster damage including storms and hail, malicious damage and vandalism, and third-party liability. This is the most popular option for motorhome owners who want maximum peace of mind.',
  },
  {
    slug: 'third-party-liability',
    title: 'Third-Party Liability',
    icon: '⚖️',
    description: 'Covers damage or injury you cause to others while driving your motorhome.',
    details: 'Third-party liability insurance covers legal liability if your motorhome causes damage to other vehicles, property, or people. If you hit another car, damage a carpark, or cause injury to someone, third-party liability covers the costs up to your policy limit. Most New Zealand motorhome policies include third-party liability up to $20 million. This is essential coverage as you could face massive personal liability without it.',
  },
  {
    slug: 'agreed-value',
    title: 'Agreed Value',
    icon: '💰',
    description: 'Your motorhome is insured for a fixed agreed amount — no depreciation surprises at claim time.',
    details: 'With agreed value coverage, you and your insurer agree on your motorhome\'s value upfront. If your motorhome is written off, stolen, or damaged beyond repair, you receive the full agreed amount with no negotiation about depreciation. This removes uncertainty and gives you peace of mind knowing exactly what you\'ll receive. Agreed value is ideal for newer motorhomes or those with unusual valuations where market value might be disputed.',
  },
  {
    slug: 'market-value',
    title: 'Market Value',
    icon: '📊',
    description: 'Insured for the current market value at time of claim — typically lower premiums.',
    details: 'Market value insurance means your motorhome is insured for what it\'s worth at the time of a claim. If your motorhome has depreciated since purchase, you\'ll receive its current market value, not your original purchase price. Market value policies typically have lower premiums than agreed value. This option works well for motorhome owners who understand depreciation and don\'t need the certainty of a fixed payout amount.',
  },
  {
    slug: 'contents-cover',
    title: 'Contents & Accessories',
    icon: '🎒',
    description: 'Covers personal belongings, camping gear, and accessories inside your motorhome.',
    details: 'Standard motorhome insurance covers the motorhome itself but not the contents inside. If your motorhome contains a fridge, stove, bedding, camping gear, tools, electronics, and personal items worth thousands, these are usually uninsured. Contents cover, available as an optional add-on, protects these items against accidental damage, theft, and other covered perils. Essential if you carry valuable camping equipment or appliances.',
  },
  {
    slug: 'rental-excess-reduction',
    title: 'Rental Excess Reduction',
    icon: '🚐',
    description: 'Reduces or eliminates the excess on your rental motorhome policy.',
    details: 'When renting a motorhome, rental companies typically include a $2,500-5,000 excess. Rental excess reduction insurance covers this excess, protecting you from paying thousands if you accidentally damage the rental motorhome. Rental excess reduction is usually available as a daily add-on (typically $10-20 per day). It\'s essential if you want to enjoy your motorhome holiday without worrying about accidental damage costs.',
  },
  {
    slug: 'roadside-assistance',
    title: 'Roadside Assistance Cover',
    icon: '🚨',
    description: 'Emergency breakdown support, towing, and on-road assistance for motorhomes anywhere in New Zealand.',
    details: `Roadside assistance cover is one of the most practically valuable additions to any motorhome insurance policy. When your motorhome breaks down — whether on a remote Southland road, a Northland coastal route, or a city motorway — having dedicated motorhome roadside assistance means help arrives with the right equipment and expertise.

Standard car roadside assistance (AA, NZRA) may not be fully equipped for motorhome recovery, which requires appropriate-scale tow trucks, understanding of habitation systems, and awareness that your motorhome may be both vehicle and home. Specialist motorhome roadside assistance services know this.

New Zealand's leading motorhome insurers offer roadside assistance options tailored for RV owners:

**Covi Wings Roadside** is available from $57 per year as an add-on to Covi Insurance policies. Wings is specifically designed for motorhome and caravan breakdowns, with appropriate recovery vehicles and expertise. A $200 callout fee applies per incident. For $57 annually, Wings represents exceptional value given the complexity of motorhome recovery compared to standard car towing.

**Star Insure CamperCare** includes NZRA (New Zealand Roadside Assistance) at no additional premium cost. NZRA provides 24/7 breakdown response, emergency towing, and on-road support throughout New Zealand. Having roadside assistance bundled into your CamperCare premium reduces the total cost of motorhome ownership.

**AA Roadside Assistance** is included with AA Insurance motorhome policies. AA's nationwide network provides reliable 24/7 breakdown response and towing to the nearest appropriate repairer. AA is particularly strong in urban and main-route coverage.

Key services provided by motorhome roadside assistance include emergency towing to the nearest suitable motorhome repairer, on-road mechanical assistance for minor issues (flat battery, tyre changes), emergency fuel delivery if you run dry, lockout assistance, and after-hours emergency contact. Some premium services also include emergency accommodation if your motorhome is unroadworthy and you cannot continue your journey.

For motorhome owners who use their vehicles for extended touring — particularly in remote areas of Fiordland, the Catlins, Northland's Far North, or the Central Plateau — quality roadside assistance is not optional. It's a critical safety net. Response times to remote areas can be 2-4 hours, so carrying emergency supplies (water, blankets, food) is always advisable alongside your roadside assistance membership.

When evaluating roadside assistance options, consider: Does it cover motorhome-specific recovery? What is the callout fee (if any)? What is the geographic coverage? Is emergency accommodation included for overnight breakdowns? Our comparison service helps you identify which providers offer the best roadside assistance for your typical touring routes and motorhome type.`,
    faqs: [
      {
        question: 'Is roadside assistance included in motorhome insurance?',
        answer: 'It depends on your insurer. AA Insurance includes AA Roadside Assistance as standard. Star Insure CamperCare includes NZRA at no extra cost. Covi Insurance offers Wings Roadside as an optional add-on for $57/year. Tower, AMI, and other mainstream insurers typically require separate roadside assistance membership.',
      },
      {
        question: 'What is the difference between AA Roadside and Covi Wings?',
        answer: 'AA Roadside is a general vehicle roadside service included with AA Insurance policies, covering motorhomes alongside cars and other vehicles. Covi Wings is specifically designed for motorhomes and caravans, with recovery vehicles and expertise matched to RV needs. Wings costs $57/year as an add-on with a $200 callout fee. AA Roadside is included in AA Insurance premiums at no extra cost.',
      },
      {
        question: 'Does roadside assistance cover me in remote areas of New Zealand?',
        answer: 'Yes, all major NZ roadside assistance providers cover the whole of New Zealand, including remote areas like Fiordland, the Catlins, and the Far North. However, response times in remote areas can be 2-4 hours or longer. Always carry emergency supplies (water, food, blankets, phone charger) when touring remote routes, regardless of your roadside assistance coverage.',
      },
      {
        question: 'What should I do if my motorhome breaks down?',
        answer: 'Move to a safe location off the road if possible. Turn on hazard lights. Call your roadside assistance provider with your policy number, current location (use phone GPS for coordinates), registration number, and a description of the problem. For remote areas, note nearby landmarks. If you or passengers are injured or in danger, call 111 before roadside assistance.',
      },
    ],
  },
  {
    slug: 'storage-cover',
    title: 'Storage & Lay-Up Cover',
    icon: '🏠',
    description: 'Protection for your motorhome during storage periods when it\'s not being driven — covering theft, fire, weather, and vandalism at reduced premiums.',
    details: `Storage and lay-up cover is a specialist insurance option designed for motorhome owners who use their vehicle seasonally or need to store it for extended periods. Rather than paying for full comprehensive cover (which includes accident and driving protection you don't need when your motorhome is stationary), storage cover maintains essential protection at a significantly reduced premium.

**What Is Lay-Up Insurance?**

Lay-up or storage insurance is full comprehensive cover with the driving component removed. Since your motorhome won't be on the road during the storage period, you don't need cover for collisions, third-party liability while driving, or driving-related incidents. What you do need — and what lay-up cover provides — is protection against the real risks a stored motorhome faces:

*Theft and Burglary:* Motorhomes are high-value targets. Break-ins at home properties, storage facilities, and motorhome parks occur regularly. Lay-up cover protects against theft of the motorhome itself and theft of contents from within it.

*Fire and Explosion:* LPG systems, electrical components, and batteries all present fire risk even when a motorhome is stationary. Fire coverage is essential during storage periods, particularly in sheds or garages where a fire could spread to other structures.

*Weather and Storm Damage:* Hail, fallen trees, flooding, and storm-related structural damage can occur while a motorhome is in storage. Many owners park their motorhomes outside during winter — comprehensive weather cover during this period is valuable.

*Vandalism:* Malicious damage to stored motorhomes — from broken windows to spray paint — does occur, particularly in less secure locations.

*Water Ingress:* While not always covered under standard policies (insurers may argue maintenance obligations), water damage from storm events or failed roof seals during storage can cause significant mould and structural damage.

**How Much Does Storage Cover Cost?**

Lay-up cover typically costs 30-50% less than full comprehensive cover. For a motorhome with a $900/year full comprehensive premium, storage cover might be $450-$630 for the same period. Over a 6-month lay-up, switching to storage cover saves $135-$225 compared to maintaining full cover. This saving is real and worthwhile — and far less risky than cancelling cover entirely.

**How to Activate Storage Cover**

Contact your insurer before your storage period begins to arrange the transition to lay-up cover. This is typically done via a phone call or online request and takes effect within 24-48 hours. Do not assume you're on storage cover — you must request it explicitly. When you're ready to recommence touring, contact your insurer again to reinstate full comprehensive cover before taking your motorhome on the road.

**Storage Location and Your Premium**

Where you store your motorhome affects your storage cover premium. Dedicated motorhome storage facilities with CCTV, gated access, and security monitoring represent lower risk than home driveway storage. Some insurers offer discounts of 5-15% for approved storage facilities. Home garage storage provides intermediate security. Provide accurate storage location information to your insurer — incorrect information can affect claims outcomes.`,
    faqs: [
      {
        question: 'Should I cancel my motorhome insurance during winter storage?',
        answer: 'No — you should switch to lay-up or storage cover rather than cancelling entirely. Stored motorhomes face real risks including theft, fire, weather damage, and vandalism. Cancelling insurance creates dangerous gaps. Storage cover costs 30-50% less than full comprehensive cover while maintaining essential protection. Contact your insurer before storage begins to arrange lay-up cover.',
      },
      {
        question: 'What is the difference between lay-up cover and full comprehensive cover?',
        answer: 'Full comprehensive cover protects your motorhome against all risks including driving accidents, collision, and third-party liability while on the road. Lay-up cover removes the driving component, as your motorhome won\'t be driven during storage, but retains protection for theft, fire, weather damage, and vandalism. Lay-up cover costs significantly less because the highest-risk element (driving) is removed.',
      },
      {
        question: 'Can I drive my motorhome when it\'s on lay-up cover?',
        answer: 'No — lay-up cover is specifically for motorhomes that will not be driven. If you need to move your motorhome during a lay-up period (for example, to a new storage location), you must contact your insurer to temporarily reinstate full comprehensive cover for the duration of the drive. Driving on lay-up cover only would leave you uninsured for any driving incident.',
      },
      {
        question: 'Does storage cover apply at my home driveway or only at storage facilities?',
        answer: 'Storage cover applies wherever your motorhome is stored — your home property, a dedicated storage facility, or another location. The storage location affects your premium (secure facilities typically attract lower premiums than exposed home parking), but coverage itself applies regardless. Always inform your insurer of your actual storage location for accurate premium calculation and to ensure claims aren\'t complicated by location discrepancies.',
      },
    ],
  },
];
