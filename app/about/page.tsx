import { Target, Zap, Shield, CheckCircle } from 'lucide-react';
import AnimatedSection from '@/components/animated-section';

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0E3F8A] to-[#1F6FD6] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h1 className="text-5xl font-bold mb-6">About Triple Edge Technology</h1>
            <p className="text-xl text-gray-100">
              Helping businesses work smarter through practical automation
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div>
                <h2 className="text-4xl font-bold mb-6 text-[#111111]">
                  Building Systems That <span className="text-[#1F6FD6]">Work For You</span>
                </h2>
                <p className="text-[#3A3A3A] text-lg mb-6 leading-relaxed">
                  Triple Edge Technology helps businesses work smarter by building practical digital operations and automation systems that remove friction from day-to-day work.
                </p>
                <p className="text-[#3A3A3A] text-lg leading-relaxed">
                  The name <strong className="text-[#111111]">Triple Edge</strong> stands for three core advantages every modern business needs:
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="space-y-6">
                <div className="bg-[#F2F4F7] p-6 rounded-lg shadow-md">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="bg-[#1F6FD6] w-12 h-12 rounded-full flex items-center justify-center">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#111111]">Time Edge</h3>
                  </div>
                  <p className="text-[#3A3A3A]">
                    Fewer repetitive tasks and less time spent in email and administration
                  </p>
                </div>

                <div className="bg-[#F2F4F7] p-6 rounded-lg shadow-md">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="bg-[#1F6FD6] w-12 h-12 rounded-full flex items-center justify-center">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#111111]">Professional Edge</h3>
                  </div>
                  <p className="text-[#3A3A3A]">
                    A clean, consistent online presence and professional communication
                  </p>
                </div>

                <div className="bg-[#F2F4F7] p-6 rounded-lg shadow-md">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="bg-[#1F6FD6] w-12 h-12 rounded-full flex items-center justify-center">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#111111]">Organizational Edge</h3>
                  </div>
                  <p className="text-[#3A3A3A]">
                    Structured inboxes, clearer workflows, and better visibility over leads and jobs
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-[#F2F4F7]">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-4 text-[#111111]">
              What We <span className="text-[#1F6FD6]">Do</span>
            </h2>
            <p className="text-center text-[#3A3A3A] text-lg mb-12 max-w-3xl mx-auto">
              We specialize in digital operations and automation systems for small and growing businesses. Our focus is not on replacing people with technology, but on preparing information, organizing work, and supporting better decisions.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-2xl font-bold mb-6 text-[#111111]">We Help Businesses:</h3>
                <ul className="space-y-4">
                  {[
                    'Reduce email overload with smart classification and prepared replies',
                    'Respond faster to customer requests and quote inquiries',
                    'Keep inboxes, leads, and requests organized',
                    'Present a more professional image through modern websites and branding',
                    'Spend less time on administration and repetitive tasks',
                    'Focus more on clients, revenue, and personal time',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-[#1F6FD6] flex-shrink-0 mt-0.5" />
                      <span className="text-[#3A3A3A]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-2xl font-bold mb-6 text-[#111111]">Stay in Control:</h3>
                <p className="text-[#3A3A3A] mb-6 leading-relaxed">
                  Everything we build is designed to stay <strong className="text-[#111111]">human-controlled</strong>. Automation prepares the work; you stay in control.
                </p>
                <div className="bg-[#F2F4F7] p-6 rounded-lg">
                  <p className="text-[#3A3A3A] italic">
                    "We believe automation should amplify human judgment, not replace it. Our systems prepare information and draft responses, but you always have the final say."
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-4 text-[#111111]">
              Our <span className="text-[#1F6FD6]">Approach</span>
            </h2>
            <p className="text-center text-[#3A3A3A] text-lg mb-16 max-w-3xl mx-auto">
              We believe automation should be simple, reliable, and easy to understand
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: 'Simple',
                description: 'No unnecessary complexity. Just practical tools that work.',
              },
              {
                title: 'Reliable',
                description: 'Built to run consistently without constant maintenance.',
              },
              {
                title: 'Clear',
                description: 'Easy to understand and use. No technical jargon.',
              },
              {
                title: 'Practical',
                description: 'Built around real business workflows and actual needs.',
              },
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-[#F2F4F7] p-6 rounded-lg shadow-md hover:shadow-lg transition-all text-center group hover:-translate-y-1">
                  <div className="w-16 h-16 bg-[#1F6FD6] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-2xl font-bold text-white">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#111111]">{item.title}</h3>
                  <p className="text-[#3A3A3A] text-sm">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4}>
            <div className="mt-16 bg-gradient-to-br from-[#0E3F8A] to-[#1F6FD6] p-10 rounded-lg text-white text-center shadow-xl">
              <h3 className="text-3xl font-bold mb-4">Our Goal is Straightforward</h3>
              <p className="text-xl text-gray-100 max-w-3xl mx-auto">
                A better organized company, fewer distractions, and more time for what actually matters.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Integration */}
      <section className="py-20 bg-[#F2F4F7]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-6 text-[#111111]">
              Works With Your Existing Tools
            </h2>
            <p className="text-[#3A3A3A] text-lg mb-8 leading-relaxed">
              We work with clear, practical systems that integrate into the tools businesses already use—such as email, websites, and simple dashboards—without unnecessary complexity.
            </p>
            <p className="text-[#3A3A3A] text-lg">
              No need to learn complicated new software. We build on what you already know.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
