'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, Check, ArrowRight, Phone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Section, { SectionHeader } from '@/components/Section';

const categories = [
  { id: 'all', name: 'All Products', icon: Filter },
  { id: 'crown paints', name: 'Crown Paints', icon: Check },
  { id: 'duracoat paints', name: 'Duracoat paints', icon: Check },
  { id: 'mahogany and mvule', name: 'Mahogany and Mvule', icon: Check },
  { id: 'skimming coat', name: 'Skimming coat', icon: Check },
  { id: 'Gypsum', name: 'Gypsum', icon: Check },
  { id: 'mdf boards and particle boards', name: 'MDF boards and Particle bords', icon: Check },
];

const products = [
{
  id: 1,
  category: 'crown paints',
  title: 'Crown Premium Interior Emulsion',
  description: 'High-quality interior emulsion paint by Crown Paints, providing smooth finish, excellent coverage, and long-lasting color for walls and ceilings.',
  image: '/images.jpg',
  specs: [
    'Finish: Smooth Matt',
    'Coverage: 10-12 m² per liter',
    'Drying Time: 2-4 hours',
    'Available Sizes: 1L, 4L, 10L, 20L'
  ],
},
 {
  id: 2,
  category: 'duracoat paints',
  title: 'Duracoat Ultima Exterior Paint',
  description: 'Premium quality exterior paint by Duracoat, designed to provide superior weather resistance, long-lasting color retention, and smooth finish for exterior walls.',
  image: '/images (3).jpg',
  specs: [
    'Finish: Soft Sheen',
    'Coverage: 8-10 m² per liter',
    'Drying Time: 3-4 hours',
    'Weather Resistant: Yes',
    'Available Sizes: 1L, 4L, 16L'
  ],
},
{
  id: 3,
  category: 'mahogany and mvule',
  title: 'Premium Mahogany & Mvule Timber',
  description: 'High-quality Mahogany and African Mvule timber, known for strength, durability, and natural resistance to moisture and termites. Ideal for furniture, decking, doors, and outdoor applications.',
  image: '/images (1).jpg',
  specs: [
    'Thickness: 25mm - 75mm',
    'Width: 100mm - 300mm',
    'Length: Up to 4m',
    'Natural Durability: High',
    'Weather Resistant: Yes'
  ],
},
 {
  id: 4,
  category: 'skimming coat',
  title: 'Premium Wall Skimming Coat',
  description: 'High-quality skimming coat designed to provide a smooth and even surface on walls and ceilings before painting. Ideal for filling minor cracks and surface imperfections.',
  image: '/how-to-skim-coat-walls-5116693-hero-3dbd2658626d49dca2b8c72eaddba1f5.jpg',
  specs: [
    'Application: Interior walls & ceilings',
    'Finish: Ultra-smooth surface',
    'Coverage: 1.2 - 1.5 kg per m²',
    'Drying Time: 4 - 6 hours',
    'Available Packaging: 20kg bag'
  ],
},
{
  id: 5,
  category: 'Gypsum',
  title: 'Premium Gypsum Board',
  description: 'High-quality gypsum board ideal for ceilings, partition walls, and interior finishing. Provides smooth surface, fire resistance, and sound insulation for residential and commercial spaces.',
  image: '/gypsum_board (1).jpg',
  specs: [
    'Thickness: 9mm - 15mm',
    'Sheet Size: 4ft x 8ft',
    'Edge Type: Tapered / Square',
    'Fire Resistant: Available',
    'Moisture Resistant Option: Available'
  ],
},
{
  id: 6,
  category: 'mdf boards and particle boards',
  title: 'MDF & Particle Boards',
  description: 'High-quality MDF and Particle Boards suitable for furniture manufacturing, cabinetry, shelving, and interior applications. Smooth surface finish ideal for lamination and painting.',
  image: '/images (2).jpg',
  specs: [
    'Thickness: 6mm - 25mm',
    'Sheet Size: 4ft x 8ft',
    'Surface: Smooth & Uniform',
    'Applications: Furniture, Cabinets, Shelves',
    'Moisture Resistant Option: Available'
  ],
},
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(product => product.category === activeCategory);

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
              Our Products
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Explore Our Product Range
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              From premium mahogany to quality paints and boards - everything you need for your construction and renovation projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <Section bgGradient="from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2.5 rounded-full font-medium transition-all flex items-center gap-2 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-amber-50 border border-gray-200'
                }`}
              >
                {activeCategory === category.id && <Check size={16} />}
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* Products Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100 group"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute bottom-4 left-4 z-20">
                      <span className="bg-amber-500 text-amber-900 px-3 py-1 rounded-full text-xs font-semibold capitalize">
                        {product.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-700 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    
                    {/* Specifications */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Specifications:</h4>
                      <ul className="space-y-1">
                        {product.specs.map((spec, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                            {spec}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-amber-700 font-semibold group/link"
                    >
                      Get Quote
                      <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-3xl p-8 md:p-12 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Need a Custom Quote or Bulk Order?
              </h2>
              <p className="text-amber-100 mb-6 max-w-2xl mx-auto">
                Contact us today for competitive pricing on bulk orders and personalized recommendations for your project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-amber-700 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Request Quote
                </Link>
                <a
                  href="tel:+254728060501"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all"
                >
                  <Phone size={20} />
                  +254 728 060501
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
