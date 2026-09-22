import Container from '@/components/ui/Container'

const FRAMEWORK = [
  { step: 'Problem', description: 'Understand the technical challenge.' },
  { step: 'Question', description: 'Ask what is really being asked.' },
  { step: 'Investigation', description: 'Gather evidence systematically.' },
  { step: 'Evidence', description: 'Analyze without assumption.' },
  { step: 'Finding', description: 'State what the data shows.' },
  { step: 'Solution', description: 'Recommend a reliable path forward.' },
  { step: 'Lesson', description: 'Capture knowledge for the future.' },
]

export default function TechnicalStorytelling() {
  return (
    <section className="py-24 md:py-32 bg-off-white">
      <Container as="div">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-display text-xs font-semibold tracking-[0.3em] uppercase text-brand-brown mb-6">
              Technical Storytelling
            </p>
            <h2 className="font-display font-bold text-3xl lg:text-5xl text-near-black leading-tight mb-6">
              Engineering is a story of questions.
            </h2>
            <p className="text-brand-gray leading-relaxed mb-8">
              Every technical problem follows a narrative. Understanding that
              narrative — from the first question to the final lesson — is how
              Gedsliey turns complex investigations into reliable decisions.
            </p>
            <p className="text-brand-gray text-sm leading-relaxed border-l-2 border-brand-brown pl-4">
              Technical insights and case studies are in preparation. Check back soon.
            </p>
          </div>

          <div className="space-y-0">
            {FRAMEWORK.map((item, i) => (
              <div
                key={item.step}
                className="flex gap-6 py-5 border-b border-brand-gray/15 last:border-0"
              >
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-8 h-8 rounded-full border-2 border-brand-brown flex items-center justify-center">
                    <span className="font-display font-bold text-xs text-brand-brown">
                      {i + 1}
                    </span>
                  </div>
                  {i < FRAMEWORK.length - 1 && (
                    <div
                      className="w-0.5 h-full min-h-[20px] bg-brand-brown/20 mt-1"
                      aria-hidden="true"
                    />
                  )}
                </div>
                <div className="pb-2">
                  <p className="font-display font-bold text-sm text-near-black mb-1">
                    {item.step}
                  </p>
                  <p className="text-xs text-brand-gray">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
