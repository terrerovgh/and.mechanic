export const siteData = {
  brand: 'All Needs Discount',
  businessName: 'All Needs Discount - Mechanic',
  tagline: 'Honest repairs. Fair prices. Back on the road.',
  description:
    'Trusted auto repair and maintenance for drivers in Ray City and South Georgia.',
  phone: '+1-229-000-0000',
  phoneDisplay: '(229) 000-0000',
  email: 'service@allneedsdiscountmechanic.com',
  address: {
    street: '169 GA-125',
    locality: 'Ray City',
    region: 'GA',
    postalCode: '31645',
    country: 'US',
  },
  mapQuery: '169 GA-125, Ray City, GA 31645',
  formEndpoint: '',
  hours: [
    { days: 'Monday - Friday', hours: '8:00 AM - 5:30 PM' },
    { days: 'Saturday', hours: 'By appointment' },
    { days: 'Sunday', hours: 'Closed' },
  ],
  serviceAreas: ['Ray City', 'Lakeland', 'Moody AFB', 'Valdosta', 'Hahira'],
  services: [
    { icon: 'scan-line', title: 'Diagnostics & Check Engine', description: 'Clear answers from precise computer diagnostics, before repairs begin.' },
    { icon: 'oil-can', title: 'Maintenance & Oil Changes', description: 'Protect your vehicle with timely service built around its real needs.' },
    { icon: 'circle-dot', title: 'Brakes', description: 'Inspections, pads, rotors and repairs that help you stop with confidence.' },
    { icon: 'move-horizontal', title: 'Suspension & Steering', description: 'Smoother handling, reliable steering and alignment-focused repairs.' },
    { icon: 'snowflake', title: 'A/C & Electrical', description: 'Stay comfortable with A/C, battery, charging and electrical system service.' },
    { icon: 'settings-2', title: 'Engine & Transmission', description: 'Thorough repair solutions for the systems that keep your vehicle moving.' },
    { icon: 'clipboard-check', title: 'Pre-Purchase Inspections', description: 'Know what you are buying with a practical, independent vehicle check.' },
  ],
  testimonials: [
    { quote: 'They explained the issue in plain language and got me back on the road quickly. Fair price and no pressure.', name: 'Ray City customer', location: 'Ray City, GA' },
    { quote: 'I finally found a shop that treats you right. The team was fast, professional and upfront about everything.', name: 'Valdosta customer', location: 'Valdosta, GA' },
    { quote: 'Great service for my brakes. The work was done when they said it would be and my car drives perfectly.', name: 'Lakeland customer', location: 'Lakeland, GA' },
  ],
  faqs: [
    { question: 'Do you offer estimates before repairs?', answer: 'Yes. We inspect the concern, explain what we find and review recommended work with you before moving forward.' },
    { question: 'How long does a diagnostic take?', answer: 'Many diagnostic appointments can be started the same day. Timing depends on the symptom and vehicle, and we will set expectations when you arrive.' },
    { question: 'Do I need an appointment?', answer: 'Appointments help us serve you faster. Call us for availability, and we will do our best to accommodate urgent needs when the schedule allows.' },
    { question: 'Is your work guaranteed?', answer: 'We stand behind our work. Ask our service team about the warranty that applies to your specific repair before service begins.' },
  ],
} as const;

export type Service = (typeof siteData.services)[number];
