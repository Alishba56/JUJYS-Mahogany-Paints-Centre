'use client';

import { motion } from 'framer-motion';
import {
  Target,
  Eye,
  Award,
  Users,
  Heart,
  Shield,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Section, { SectionHeader } from '@/components/Section';

const values = [
  {
    icon: Award,
    title: 'Quality First',
    description: 'We never compromise on quality. Every product we sell meets our strict standards.',
  },
  {
    icon: Heart,
    title: 'Customer Focus',
    description: 'Your satisfaction is our priority. We go above and beyond to meet your needs.',
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'Honest pricing, genuine products, and transparent business practices.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Our knowledgeable staff provides expert advice and personalized service.',
  },
];

const stats = [
  { number: '10+', label: 'Years in Business', suffix: '' },
  { number: '5000+', label: 'Happy Customers', suffix: '' },
  { number: '100+', label: 'Product Varieties', suffix: '' },
  { number: '98', label: 'Customer Satisfaction', suffix: '%' },
];

const commitments = [
  'Premium quality products from verified suppliers',
  'Competitive pricing with bulk discounts',
  'Fast and reliable delivery across Nairobi',
  'Expert product recommendations and guidance',
  'After-sales support and customer service',
  'Sustainable and eco-friendly product options',
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/95 via-amber-800/90 to-gray-900/95" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-amber-500/20 text-amber-300 border border-amber-400/30 mb-4">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Building Trust, One Product at a Time
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              JUJYS Mahogany & Paints Centre has been Nairobi's trusted supplier of premium building materials for over a decade.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <Section bgGradient="from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-amber-100 text-amber-800 border border-amber-200 mb-4">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                From Humble Beginnings to Industry Leaders
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded with a vision to provide Nairobi with access to premium quality building materials, 
                  JUJYS Mahogany & Paints Centre started as a small timber yard in the heart of Nairobi.
                </p>
                <p>
                  Today, we've grown into a comprehensive supplier of mahogany, mvule, paints, skimming products, 
                  gypsum boards, MDF, and particle boards - serving contractors, interior designers, and 
                  homeowners across Kenya.
                </p>
                <p>
                  Our commitment to quality, competitive pricing, and exceptional customer service has made us 
                  the preferred choice for building materials in Nairobi. We continue to expand our product 
                  range while maintaining the personal touch that our customers value.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop"
                  alt="JUJYS Store Interior"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -right-0 md:-right-6 bg-gradient-to-br from-amber-500 to-amber-600 text-white p-6 rounded-2xl shadow-xl"
              >
                <div className="text-4xl font-bold mb-1">10+</div>
                <div className="text-amber-100">Years of Excellence</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section bgGradient="from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            eyebrow="Our Direction"
            title="Mission & Vision"
            subtitle="Guided by clear purpose and ambitious goals"
          />
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-amber-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mb-6">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide Nairobi with access to premium quality building materials at competitive prices, 
                while delivering exceptional customer service and expert guidance for every project, 
                big or small.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-amber-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading and most trusted supplier of building materials in East Africa, 
                known for quality products, innovation, and setting industry standards for 
                customer excellence.
              </p>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Core Values */}
      <Section bgGradient="from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            eyebrow="What Drives Us"
            title="Our Core Values"
            subtitle="The principles that guide everything we do"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <value.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Stats Section */}
      <Section bgGradient="from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-400 mb-2"
                >
                  {stat.number}{stat.suffix}
                </motion.div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Our Commitment */}
      <Section bgGradient="from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 md:order-1"
            >
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/image-3.png"
                  alt="Quality Products"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 md:order-2"
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-amber-100 text-amber-800 border border-amber-200 mb-4">
                Our Promise
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Commitment to You
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                At JUJYS, we're committed to providing more than just products. We offer peace of mind, 
                expert guidance, and a partnership that ensures your project's success.
              </p>
              <ul className="space-y-4">
                {commitments.map((commitment, index) => (
                  <motion.li
                    key={commitment}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="text-amber-500 mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{commitment}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section bgGradient="from-amber-500 to-amber-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
              Experience the JUJYS difference. Contact us today for quality products and exceptional service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-amber-700 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
              >
                Get in Touch
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all"
              >
                Browse Products
              </Link>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Contact Bar */}
      <div className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 justify-center md:justify-start"
            >
              <div className="w-14 h-14 bg-amber-500 rounded-full flex items-center justify-center">
                <Phone className="text-white" size={24} />
              </div>
              <div>
                <div className="text-gray-400 text-sm">Call Us</div>
                <a href="tel:+254728060501" className="text-white font-semibold hover:text-amber-400 transition-colors">
                  +254 728 060501
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-4 justify-center md:justify-start"
            >
              <div className="w-14 h-14 bg-amber-500 rounded-full flex items-center justify-center">
                <Mail className="text-white" size={24} />
              </div>
              <div>
                <div className="text-gray-400 text-sm">Email Us</div>
                <a href="mailto:jujysmahoganycentre@gmail.com" className="text-white font-semibold hover:text-amber-400 transition-colors">
                  jujysmahoganycentre@gmail.com
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
