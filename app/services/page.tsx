import Link from 'next/link';
import { CheckCircle, ArrowRight, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/animated-section';

export default function ServicesPage() {
  const packages = [
    {
      id: 'core',
      name: 'Digital Foundation',
      subtitle: 'Core Package',
      setupPrice: '€1,750',
      monthlyPrice: '€150',
      description: 'Everything you need to establish a professional digital presence and start automating your email workflows.',
      features: [
        {
          category: 'Branding',
          items: ['Logo design (2-3 concepts, 1 final)', 'Brand color palette', 'Professional identity'],
        },
        {
          category: 'Website',
          items: ['Modern, responsive website (1-5 pages)', 'Mobile-friendly design', 'Professional hosting'],
        },
        {
          category: 'Email Automation',
          items: ['Email classification system', 'Drafted replies for common inquiries', 'Manual approval before sending', 'Smart inbox organization'],
        },
        {
          category: 'Support & Training',
          items: ['One training session (live or Loom)', 'Hosting included', 'Automation monitoring', 'Ongoing support'],
        },
      ],
      recommended: false,
    },
    {
      id: 'operations',
      name: 'Smart Office',
      subtitle: 'Operations Add-On',
      setupPrice: '+€750',
      monthlyPrice: '+€50',
      description: 'Add advanced operations tools to your Core Package for complete business management automation.',
      features: [
        {
          category: 'Lead Management',
          items: ['Quote & lead extraction from emails', 'Google Sheets lead tracking system', 'Lead stages: New, Contacted, Quoted, Booked', 'Automated lead updates'],
        },
        {
          category: 'Financial Tools',
          items: ['Simple bookkeeping preparation', 'Invoice & receipt labeling', 'Monthly export for accountant', 'Organized financial records'],
        },
        {
          category: 'Business Dashboard',
          items: ['Daily business overview', 'New leads tracking', 'Pending quotes monitoring', 'Unanswered emails alerts', 'Jobs booked overview'],
        },
      ],
      addon: true,
      recommended: false,
    },
    {
      id: 'allin',
      name: 'All-In Package',
      subtitle: 'Complete Solution',
      setupPrice: '€2,500',
      monthlyPrice: '€200',
      description: 'The complete digital transformation package. Everything from Core + Smart Office for the best value.',
      features: [
        {
          category: 'Everything Included',
          items: [
            'Professional logo & branding',
            'Modern website (1-5 pages)',
            'Email automation & classification',
            'Quote & lead extraction',
            'Google Sheets lead system',
            'Bookkeeping preparation',
            'Daily business dashboard',
            'Training & support',
            'Hosting & monitoring',
          ],
        },
        {
          category: 'Additional Benefits',
          items: ['Priority support', 'Best value for money', 'Complete automation system', 'Full digital transformation'],
        },
      ],
      recommended: true,
      savings: 'Save €500 on setup!',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0E3F8A] to-[#1F6FD6] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h1 className="text-5xl font-bold mb-6">Automation Services</h1>
            <p className="text-xl text-gray-100">
              Choose the package that fits your business needs and budget
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-[#111111]">
                Flexible <span className="text-[#1F6FD6]">Pricing</span> Options
              </h2>
              <p className="text-[#3A3A3A] text-lg max-w-3xl mx-auto">
                Start with what you need today, and scale up as your business grows
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-12">
            {packages.map((pkg, index) => (
              <AnimatedSection key={pkg.id} delay={index * 0.1}>
                <div
                  className={`bg-[#F2F4F7] rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                    pkg.recommended ? 'ring-4 ring-[#1F6FD6]' : ''
                  }`}
                >
                  {/* Package Header */}
                  <div
                    className={`p-8 ${
                      pkg.recommended
                        ? 'bg-gradient-to-r from-[#0E3F8A] to-[#1F6FD6] text-white'
                        : 'bg-white'
                    }`}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className={`text-3xl font-bold ${
                            pkg.recommended ? 'text-white' : 'text-[#111111]'
                          }`}>
                            {pkg.name}
                          </h3>
                          {pkg.recommended && (
                            <span className="bg-white text-[#1F6FD6] px-3 py-1 rounded-full text-sm font-semibold">
                              RECOMMENDED
                            </span>
                          )}
                          {pkg.addon && (
                            <span className="bg-[#1F6FD6] text-white px-3 py-1 rounded-full text-sm font-semibold">
                              ADD-ON
                            </span>
                          )}
                        </div>
                        <p className={`text-lg mb-3 ${
                          pkg.recommended ? 'text-gray-100' : 'text-[#1F6FD6]'
                        } font-semibold`}>
                          {pkg.subtitle}
                        </p>
                        <p className={`text-base ${
                          pkg.recommended ? 'text-gray-100' : 'text-[#3A3A3A]'
                        }`}>
                          {pkg.description}
                        </p>
                      </div>

                      <div className={`text-center md:text-right ${
                        pkg.recommended ? 'bg-white/10 backdrop-blur-sm' : 'bg-[#F2F4F7]'
                      } p-6 rounded-lg`}>
                        <div className={`text-4xl font-bold mb-2 ${
                          pkg.recommended ? 'text-white' : 'text-[#111111]'
                        }`}>
                          {pkg.setupPrice}
                        </div>
                        <div className={`text-sm mb-1 ${
                          pkg.recommended ? 'text-gray-200' : 'text-[#3A3A3A]'
                        }`}>
                          Setup Fee
                        </div>
                        <div className={`text-2xl font-semibold ${
                          pkg.recommended ? 'text-white' : 'text-[#1F6FD6]'
                        }`}>
                          {pkg.monthlyPrice}
                        </div>
                        <div className={`text-sm ${
                          pkg.recommended ? 'text-gray-200' : 'text-[#3A3A3A]'
                        }`}>
                          per month
                        </div>
                        {pkg.savings && (
                          <div className="mt-3 bg-yellow-400 text-[#111111] px-3 py-1 rounded-full text-sm font-semibold">
                            {pkg.savings}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Package Features */}
                  <div className="p-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {pkg.features?.map((featureGroup, idx) => (
                        <div key={idx}>
                          <h4 className="text-xl font-bold text-[#111111] mb-4">
                            {featureGroup.category}
                          </h4>
                          <ul className="space-y-3">
                            {featureGroup.items?.map((item, itemIdx) => (
                              <li key={itemIdx} className="flex items-start gap-2">
                                <CheckCircle className="h-5 w-5 text-[#1F6FD6] flex-shrink-0 mt-0.5" />
                                <span className="text-[#3A3A3A] text-sm">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8">
                      <Link href="/contact">
                        <Button
                          size="lg"
                          className={`w-full md:w-auto ${
                            pkg.recommended
                              ? 'bg-[#1F6FD6] hover:bg-[#0E3F8A] text-white'
                              : 'bg-white text-[#1F6FD6] border-2 border-[#1F6FD6] hover:bg-[#1F6FD6] hover:text-white'
                          }`}
                        >
                          Get Started with {pkg.name} <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#F2F4F7]">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-4 text-[#111111]">
              Why Choose <span className="text-[#1F6FD6]">Triple Edge</span>?
            </h2>
            <p className="text-center text-[#3A3A3A] text-lg mb-12 max-w-3xl mx-auto">
              We're focused on practical solutions that deliver real results
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Human-Controlled',
                description: 'Automation prepares the work. You stay in control and make the final decisions.',
              },
              {
                title: 'No Complexity',
                description: 'Simple, reliable systems that integrate with tools you already use.',
              },
              {
                title: 'Real Results',
                description: 'Save hours every week on admin tasks and focus on growing your business.',
              },
            ].map((benefit, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all text-center">
                  <div className="w-16 h-16 bg-[#1F6FD6] rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#111111]">{benefit.title}</h3>
                  <p className="text-[#3A3A3A]">{benefit.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0E3F8A] to-[#1F6FD6] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Let's discuss which package is right for your business
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-[#1F6FD6] hover:bg-gray-100 text-lg px-8">
                Contact Us Today <Mail className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
