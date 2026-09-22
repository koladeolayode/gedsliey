import type { Metadata } from 'next'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import ConsultationCTA from '@/components/sections/ConsultationCTA'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Gedsliey Inc. is a specialized research and technical consulting firm focused on materials, chemicals, bridge bearings and engineering R&D.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-off-white pt-24 pb-16 md:pt-32 md:pb-20">
        <Container as="div">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-brown">
            About Gedsliey
          </p>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold leading-tight text-near-black sm:text-5xl lg:text-7xl">
            Independent technical thinking.
          </h1>
        </Container>
      </section>

      {/* Who we are */}
      <section className="bg-white py-24">
        <Container as="div">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-bold text-near-black sm:text-3xl mb-6">
                Who We Are
              </h2>
              <p className="text-brand-gray leading-relaxed mb-4">
                Gedsliey Inc. is a specialized research and technical consulting firm. We focus
                on advanced materials systems and their applications across construction, energy
                and manufacturing industries.
              </p>
              <p className="text-brand-gray leading-relaxed mb-4">
                We help clients navigate technically complex problems by asking the questions
                others overlook — and delivering evidence-based answers that hold up under
                scrutiny.
              </p>
              <p className="text-brand-gray leading-relaxed">
                Our work spans material and chemical advisory, bridge bearing assessment, and
                research and development consulting — with expertise built on PhD-qualified
                research and more than 20 years of engineering investigation.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-near-black sm:text-3xl mb-6">
                What We Do
              </h2>
              <ul className="space-y-4">
                {[
                  'Materials and chemical systems advisory',
                  'Bridge bearing failure investigation and qualification',
                  'Research and development consulting',
                  'Root cause analysis and failure investigation',
                  'Technical due diligence',
                  'Product development support',
                  'Regulatory and compliance review',
                  'Data analysis and technical validation',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-4 text-brand-gray text-sm leading-relaxed"
                  >
                    <span className="text-brand-brown mt-1 shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Philosophy */}
      <section className="bg-near-black py-24 text-white">
        <Container as="div">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-brown mb-8">
              Our Philosophy
            </p>
            <h2 className="font-display text-3xl font-bold leading-tight mb-8 sm:text-5xl">
              Asking the Unasked.
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6 text-lg">
              Complex engineering problems rarely fail because of the obvious reason. They fail
              because of hidden assumptions, unconsidered variables, and overlooked interactions.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Gedsliey was built on the conviction that reliable technical decisions require
              asking better questions — not just answering the convenient ones.
            </p>
          </div>
        </Container>
      </section>

      {/* Why independent */}
      <section className="bg-white py-24">
        <Container as="div">
          <div className="grid gap-16 items-center lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-brown mb-6">
                Independence Matters
              </p>
              <h2 className="font-display text-3xl font-bold text-near-black mb-6 leading-tight sm:text-4xl">
                Why independent analysis matters.
              </h2>
              <p className="text-brand-gray leading-relaxed mb-4">
                When significant technical decisions depend on an assessment, the integrity of
                that assessment matters. Gedsliey operates without conflicts of interest — our
                conclusions follow the evidence, not the outcome a client expects.
              </p>
              <p className="text-brand-gray leading-relaxed">
                This independence is not a formality. It is the foundation of technically
                credible and defensible analysis.
              </p>
            </div>
            <div className="space-y-6">
              {[
                {
                  title: 'No conflict of interest',
                  desc: 'We are not part of the supply chain, not affiliated with manufacturers or contractors.',
                },
                {
                  title: 'Evidence-first approach',
                  desc: 'All conclusions are grounded in data, testing and technical analysis.',
                },
                {
                  title: 'Rigorous methodology',
                  desc: 'We apply advanced analytical techniques and challenge our own assumptions.',
                },
              ].map((item) => (
                <div key={item.title} className="border-l-2 border-brand-brown pl-6">
                  <p className="font-display font-semibold text-near-black mb-2">
                    {item.title}
                  </p>
                  <p className="text-brand-gray text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Team placeholder */}
      <section className="bg-off-white py-24">
        <Container as="div">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-brown mb-6">
            Our Team
          </p>
          <h2 className="font-display text-3xl font-bold text-near-black mb-4">
            The people behind the questions.
          </h2>
          <p className="text-brand-gray text-sm">[CLIENT TO PROVIDE TEAM PROFILES]</p>
        </Container>
      </section>

      <ConsultationCTA />
    </>
  )
}
