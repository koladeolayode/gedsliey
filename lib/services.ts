export interface Service {
  slug: string
  index: string
  title: string
  shortDescription: string
  href: string
  problem: string
  whyDifficult: string
  approach: string
  capabilities: string[]
  typicalQuestions: string[]
  deliverables: string[]
}

export const SERVICES: Service[] = [
  {
    slug: 'material-chemical-advisory',
    index: '01',
    title: 'Material & Chemical Advisory',
    shortDescription:
      'Independent guidance on material design, selection, degradation and failure — from welding reviews to root cause analysis.',
    href: '/expertise/material-chemical-advisory',
    problem:
      'Material and chemical failures are rarely what they first appear to be. A cracked weld, a corroded surface, or an off-specification batch can each point to several competing causes — and the wrong conclusion carries real cost.',
    whyDifficult:
      'Degradation mechanisms interact. Metallurgy, process history, environment, and chemistry all leave traces, but those traces can mislead as easily as they inform. Distinguishing cause from symptom demands independent, evidence-led analysis.',
    approach:
      'We start with the evidence and the question behind it — not the assumed answer. We reconstruct the material and process history, weigh competing failure mechanisms, and test each against the physical record before reaching a finding.',
    capabilities: [
      'Material design and selection',
      'Welding engineering reviews',
      'Process audits',
      'Quality assessments',
      'Material selection',
      'Degradation analysis',
      'Corrosion assessment',
      'Protective coatings',
      'Electrochemical analysis',
      'Material integrity',
      'Failure investigation',
      'Root Cause Analysis (RCA)',
      'FMEA',
      'Claims and damages',
    ],
    typicalQuestions: [
      'Why did this component degrade faster than expected?',
      'Was the material specification appropriate for the service environment?',
      'What is the true root cause behind this recurring failure?',
      'Does the evidence support the claimed cause of damage?',
    ],
    deliverables: [
      'Independent technical assessment report',
      'Root cause analysis with evidence trail',
      'Material selection and specification recommendations',
      'Expert input for claims and damages disputes',
    ],
  },
  {
    slug: 'bridge-bearing-advisory',
    index: '02',
    title: 'Bridge Bearing Advisory',
    shortDescription:
      'Specialist, independent review of bridge bearing design, testing, qualification and failure — grounded in the test evidence.',
    href: '/expertise/bridge-bearing-advisory',
    problem:
      'Bridge bearings carry decades of load in silence, then fail in ways that test reports do not always anticipate. Qualification data can be incomplete, misread, or optimistic about long-term behaviour.',
    whyDifficult:
      'Bearing performance couples material behaviour, geometry, and loading over long timescales. A pass on a short-term test does not guarantee service life, and forensic assessment after a failure requires reading the evidence without preconception.',
    approach:
      'We independently review test reports and qualification evidence, model failure likelihood and long-term deformation, and question whether the test program actually answers the question that matters.',
    capabilities: [
      'Independent test-report review',
      'Failure mode analysis',
      'Forensic assessment',
      'Bearing qualification guidance',
      'Test program development',
      'Quality control',
      'Design optimization',
      'Bearing selection',
      'Performance evaluation',
      'Prototype development',
      'Failure likelihood modelling',
      'Long-term deformation assessment',
    ],
    typicalQuestions: [
      'Do the test reports actually demonstrate fitness for service?',
      'What failure modes were not covered by the qualification program?',
      'How will this bearing deform over its full design life?',
      'Was the observed failure a defect, a design issue, or a loading issue?',
    ],
    deliverables: [
      'Independent test-report and qualification review',
      'Forensic failure assessment',
      'Test program recommendations',
      'Long-term performance and deformation assessment',
    ],
  },
  {
    slug: 'research-development-consulting',
    index: '03',
    title: 'Research & Development Consulting',
    shortDescription:
      'Support for research funding, product development, and technical due diligence — from grant proposals to regulatory review.',
    href: '/expertise/research-development-consulting',
    problem:
      'Turning a technical idea into funded, compliant, evidence-backed development is hard. Proposals get rejected, testing routes are unclear, and due diligence surfaces risks late.',
    whyDifficult:
      'R&D sits between science, funding, and regulation. Success depends on framing the right question, identifying the right evidence, and satisfying reviewers and regulators — each with different standards.',
    approach:
      'We help define the question worth funding, structure the evidence to answer it, and navigate the regulatory and ethical landscape — bringing independent technical judgement to every stage.',
    capabilities: [
      'Research funding support',
      'Grant proposal support',
      'Testing facility identification',
      'Regulatory and ethical compliance',
      'Product development',
      'Project management',
      'Data analysis',
      'Industry collaboration',
      'Technical due diligence',
      'Regulatory review',
    ],
    typicalQuestions: [
      'What is the strongest technical case for funding this work?',
      'Where should this be tested, and to what standard?',
      'What regulatory and ethical requirements apply?',
      'What technical risks would due diligence uncover?',
    ],
    deliverables: [
      'Grant and funding proposal support',
      'Testing and facility strategy',
      'Regulatory and compliance review',
      'Independent technical due diligence report',
    ],
  },
]

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug)
}
