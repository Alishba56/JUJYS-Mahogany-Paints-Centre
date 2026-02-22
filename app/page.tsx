'use client';

import { motion } from 'framer-motion';
import {
  Package,
  PaintBucket,
  ShieldCheck,
  Truck,
  Award,
  Headphones,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import FeatureCard from '@/components/FeatureCard';
import Section, { SectionHeader } from '@/components/Section';

const products = [
 {
  category: 'crown paints',
  title: 'Crown Premium Interior Emulsion',
  description: 'High-quality interior emulsion paint by Crown Paints, providing smooth finish, excellent coverage, and long-lasting color for walls and ceilings.',
  image: '/images.jpg',
    href: '/products',

},
 {
  category: 'duracoat paints',
  title: 'Duracoat Ultima Exterior Paint',
  description: 'Premium quality exterior paint by Duracoat, designed to provide superior weather resistance, long-lasting color retention, and smooth finish for exterior walls.',
  image: '/images (3).jpg',
    href: '/products',

},
{
  category: 'mahogany and mvule',
  title: 'Premium Mahogany & Mvule Timber',
  description: 'High-quality Mahogany and African Mvule timber, known for strength, durability, and natural resistance to moisture and termites. Ideal for furniture, decking, doors, and outdoor applications.',
  image: '/images (1).jpg',
    href: '/products',

},
];

const features = [
  {
    icon: Package,
    title: 'Wide Product Range',
    description: 'From premium mahogany to quality paints, we offer everything you need for your construction and renovation projects.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Guaranteed',
    description: 'All our products are sourced from trusted manufacturers and come with quality assurance certificates.',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'We provide reliable delivery services across Nairobi and surrounding areas.',
  },
  {
    icon: Award,
    title: 'Expert Advice',
    description: 'Our knowledgeable team is ready to help you choose the right products for your needs.',
  },
  {
    icon: PaintBucket,
    title: 'Custom Solutions',
    description: 'We offer custom color mixing and product recommendations for unique projects.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Our customer support team is always available to assist with your inquiries.',
  },
];

const testimonials = [
  {
    name: 'John Kamau',
    role: 'Contractor',
    content: 'JUJYS has been my go-to supplier for over 5 years. Their mahogany quality is unmatched in Nairobi.',
    rating: 5,
  },
  {
    name: 'Sarah Wanjiku',
    role: 'Interior Designer',
    content: 'The variety of paints and boards available at JUJYS makes my work so much easier. Highly recommended!',
    rating: 5,
  },
  {
    name: 'David Ochieng',
    role: 'Homeowner',
    content: 'Excellent customer service and quality products. They helped me choose the perfect materials for my home renovation.',
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <Hero
        title="Premium Mahogany & Quality Paints for Every Project"
        subtitle="Your trusted supplier of mahogany, mvule, paints, skimming products, gypsum, MDF, and particle boards in Nairobi, Kenya."
        backgroundImage="https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?q=80&w=1600&auto=format&fit=crop"
        ctaText="Explore Products"
        ctaLink="/products"
        secondaryCtaText="Get a Quote"
        secondaryCtaLink="/contact"
      />

      {/* Products Section */}
      <Section bgGradient="from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            eyebrow="Our Products"
            title="Quality Materials for Every Need"
            subtitle="Explore our comprehensive range of premium building and finishing materials"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard key={product.title} {...product} delay={index * 0.1} />
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center mt-12"
          >
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              View All Products
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </Section>

      {/* Features Section */}
      <Section bgGradient="from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            eyebrow="Why Choose Us"
            title="The JUJYS Advantage"
            subtitle="We're committed to providing the best products and service in Nairobi"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} {...feature} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </Section>

      {/* About Preview Section */}
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
                About JUJYS
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Your Trusted Partner in Building Materials
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                At JUJYS Mahogany and Paints Centre, we take pride in offering the finest selection of mahogany, 
                mvule, paints, and building materials in Nairobi. With years of experience and a commitment to 
                quality, we've become the preferred choice for contractors, designers, and homeowners.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'Premium quality products from trusted suppliers',
                  'Competitive pricing and bulk discounts',
                  'Expert guidance and product recommendations',
                  'Reliable delivery across Nairobi',
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center">
                      <ShieldCheck className="text-white" size={14} />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Learn More About Us
                <ArrowRight size={20} />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=800&auto=format&fit=crop"
                  alt="JUJYS Store"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-6 -left-6 bg-gradient-to-br from-amber-500 to-amber-600 text-white p-6 rounded-2xl shadow-xl"
              >
                <div className="text-4xl font-bold mb-1">10+</div>
                <div className="text-amber-100">Years of Excellence</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section bgGradient="from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            eyebrow="Testimonials"
            title="What Our Customers Say"
            subtitle="Don't just take our word for it - hear from our satisfied customers"
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.05 }}
                      className="text-amber-400"
                    >
                      ★
                    </motion.span>
                  ))}
                </div>
                <p className="text-gray-200 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-amber-400 text-sm">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
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
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
              Contact us today for expert advice, competitive quotes, and quality materials delivered to your doorstep.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-amber-700 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
              >
                <Phone size={20} />
                Contact Us Now
              </Link>
              <a
                href="tel:+254728060501"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all"
              >
                <Phone size={20} />
                +254 728 060501
              </a>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Contact Info Bar */}
      <div className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 justify-center md:justify-start"
            >
              <div className="w-14 h-14 bg-amber-500 rounded-full flex items-center justify-center">
                <MapPin className="text-white" size={24} />
              </div>
              <div>
                <div className="text-gray-400 text-sm">Visit Us</div>
                <div className="text-white font-semibold">Nairobi, Kenya</div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
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
