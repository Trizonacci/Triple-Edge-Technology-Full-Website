import Image from 'next/image';
import Link from 'next/link';
import { Clock, Users, TrendingUp, CheckCircle, ArrowRight, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/animated-section';
import AnimatedCounter from '@/components/animated-counter';

export default function HomePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-br from-[#0E3F8A] to-[#1F6FD6] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] bg-repeat"></div>
        </div>
        <div className="max-w-6xl mx-auto px-6 py-20 text-center relative z-10">
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Automation That Works <span className="text-[#FFD700]">For You</span>
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-gray-100 max-w-3xl mx-auto">
              Help your business work smarter with practical automation systems
            </p>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
              Less time on repetitive tasks. More time for what matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services">
                <Button size="lg" className="bg-white text-[#1F6FD6] hover:bg-gray-100 text-lg px-8">
                  View Services <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1F6FD6] text-lg px-8">
                  Get Started <Mail className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Three Core Advantages */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-4 text-[#111111]">
              The <span className="text-[#1F6FD6]">Triple Edge</span> Advantage
            </h2>
            <p className="text-center text-[#3A3A3A] text-lg mb-16 max-w-2xl mx-auto">
              Three core advantages every modern business needs to stay competitive
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="bg-[#F2F4F7] p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                <div className="bg-[#1F6FD6] w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#111111]">Time Edge</h3>
                <p className="text-[#3A3A3A] leading-relaxed">
                  Fewer repetitive tasks and less time spent in email and administration. Get back hours every week.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-[#F2F4F7] p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                <div className="bg-[#1F6FD6] w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#111111]">Professional Edge</h3>
                <p className="text-[#3A3A3A] leading-relaxed">
                  A clean, consistent online presence and professional communication that builds trust with customers.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-[#F2F4F7] p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                <div className="bg-[#1F6FD6] w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#111111]">Organizational Edge</h3>
                <p className="text-[#3A3A3A] leading-relaxed">
                  Structured inboxes, clearer workflows, and better visibility over leads and jobs. Stay in control.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-[#F2F4F7]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div>
                <h2 className="text-4xl font-bold mb-6 text-[#111111]">
                  Automation That <span className="text-[#1F6FD6]">Stays Human</span>
                </h2>
                <p className="text-[#3A3A3A] text-lg mb-6 leading-relaxed">
                  We don't replace people with technology. We prepare information, organize work, and support better decisions.
                </p>
                <div className="space-y-4">
                  {[
                    'Reduce email overload with smart classification',
                    'Respond faster to customer requests',
                    'Keep inboxes, leads, and requests organized',
                    'Present a more professional image online',
                    'Spend less time on administration',
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-[#1F6FD6] flex-shrink-0 mt-0.5" />
                      <p className="text-[#3A3A3A]">{item}</p>
                    </div>
                  ))}
                </div>
                <Link href="/about" className="inline-block mt-8">
                  <Button className="bg-[#1F6FD6] hover:bg-[#0E3F8A] text-white">
                    Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-white p-8 rounded-lg shadow-xl">
                <div className="space-y-8">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-[#1F6FD6] mb-2">
                      <AnimatedCounter end={40} suffix="%" />
                    </div>
                    <p className="text-[#3A3A3A]">Average time saved on admin tasks</p>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-[#1F6FD6] mb-2">
                      <AnimatedCounter end={2} suffix="x" />
                    </div>
                    <p className="text-[#3A3A3A]">Faster response to customer inquiries</p>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-[#1F6FD6] mb-2">
                      <AnimatedCounter end={100} suffix="%" />
                    </div>
                    <p className="text-[#3A3A3A]">Human-controlled automation</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-4 text-[#111111]">
              Simple, Practical <span className="text-[#1F6FD6]">Solutions</span>
            </h2>
            <p className="text-center text-[#3A3A3A] text-lg mb-16 max-w-2xl mx-auto">
              Choose the package that fits your business needs
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Digital Foundation',
                subtitle: 'Core Package',
                price: '€1,750',
                monthly: '€150/month',
                features: [
                  'Professional logo design',
                  'Modern website (1-5 pages)',
                  'Email automation & classification',
                  'Training session included',
                  'Hosting & monitoring',
                ],
              },
              {
                name: 'Smart Office',
                subtitle: 'Operations Add-On',
                price: '+€750',
                monthly: '+€50/month',
                features: [
                  'Quote & lead extraction',
                  'Google Sheets lead system',
                  'Bookkeeping preparation',
                  'Daily business dashboard',
                  'Advanced automation',
                ],
                addon: true,
              },
              {
                name: 'All-In Package',
                subtitle: 'Recommended',
                price: '€2,500',
                monthly: '€200/month',
                features: [
                  'Everything from both packages',
                  'Complete automation system',
                  'Full digital transformation',
                  'Priority support',
                  'Best value for growth',
                ],
                recommended: true,
              },
            ].map((pkg, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div
                  className={`bg-[#F2F4F7] p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 relative ${
                    pkg.recommended ? 'ring-4 ring-[#1F6FD6]' : ''
                  }`}
                >
                  {pkg.recommended && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#1F6FD6] text-white px-4 py-1 rounded-full text-sm font-semibold">
                      RECOMMENDED
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2 text-[#111111]">{pkg.name}</h3>
                  <p className="text-[#1F6FD6] font-semibold mb-4">{pkg.subtitle}</p>
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-[#111111]">{pkg.price}</div>
                    <div className="text-[#3A3A3A]">{pkg.monthly}</div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features?.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#1F6FD6] flex-shrink-0 mt-0.5" />
                        <span className="text-[#3A3A3A] text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/services" className="block">
                    <Button
                      className={`w-full ${
                        pkg.recommended
                          ? 'bg-[#1F6FD6] hover:bg-[#0E3F8A] text-white'
                          : 'bg-white text-[#1F6FD6] border-2 border-[#1F6FD6] hover:bg-[#1F6FD6] hover:text-white'
                      }`}
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button size="lg" className="bg-[#1F6FD6] hover:bg-[#0E3F8A] text-white">
                View All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0E3F8A] to-[#1F6FD6] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold mb-6">
              Ready to Work Smarter?
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Let's discuss how automation can help your business save time and stay organized.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-[#1F6FD6] hover:bg-gray-100 text-lg px-8">
                Get in Touch <Mail className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
