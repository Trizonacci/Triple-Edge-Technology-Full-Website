import { Mail, Phone, Send } from 'lucide-react';
import AnimatedSection from '@/components/animated-section';
import ContactForm from '@/components/contact-form';

export default function ContactPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0E3F8A] to-[#1F6FD6] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-100">
              Ready to work smarter? Let's discuss how we can help your business.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <AnimatedSection>
              <div>
                <h2 className="text-3xl font-bold mb-6 text-[#111111]">
                  Let's Start a <span className="text-[#1F6FD6]">Conversation</span>
                </h2>
                <p className="text-[#3A3A3A] text-lg mb-8 leading-relaxed">
                  Fill out the form and we'll get back to you within 24 hours to discuss your automation needs.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#1F6FD6] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-[#111111]">Email Us</h3>
                      <a
                        href="mailto:tristan@tripleedgetechnology.com"
                        className="text-[#1F6FD6] hover:text-[#0E3F8A] transition-colors"
                      >
                        tristan@tripleedgetechnology.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#1F6FD6] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Send className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-[#111111]">Response Time</h3>
                      <p className="text-[#3A3A3A]">
                        We typically respond within 24 hours during business days
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 bg-[#F2F4F7] p-8 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-[#111111]">What Happens Next?</h3>
                  <ol className="space-y-3 text-[#3A3A3A]">
                    <li className="flex items-start gap-3">
                      <span className="bg-[#1F6FD6] text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                        1
                      </span>
                      <span>We'll review your request and get back to you within 24 hours</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-[#1F6FD6] text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                        2
                      </span>
                      <span>Schedule a call to discuss your business needs and goals</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-[#1F6FD6] text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                        3
                      </span>
                      <span>Receive a customized proposal with pricing and timeline</span>
                    </li>
                  </ol>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection delay={0.2}>
              <div className="bg-[#F2F4F7] p-8 rounded-lg shadow-lg">
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-[#F2F4F7]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-6 text-[#111111]">
              Why Work With <span className="text-[#1F6FD6]">Us</span>?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Practical Solutions',
                  description: 'No unnecessary complexity. Just tools that work.',
                },
                {
                  title: 'Stay in Control',
                  description: 'Human-controlled automation that supports your decisions.',
                },
                {
                  title: 'Real Results',
                  description: 'Save time and focus on growing your business.',
                },
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-3 text-[#111111]">{item.title}</h3>
                  <p className="text-[#3A3A3A]">{item.description}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
