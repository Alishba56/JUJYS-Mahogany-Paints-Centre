'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  href: string;
  delay?: number;
}

export default function ProductCard({
  title,
  description,
  image,
  category,
  href,
  delay = 0,
}: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute bottom-4 left-4 z-20">
          <span className="bg-amber-500 text-amber-900 px-3 py-1 rounded-full text-xs font-semibold">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-700 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-amber-700 font-semibold group/link"
        >
          Learn More
          <ArrowRight
            size={18}
            className="group-hover/link:translate-x-1 transition-transform"
          />
        </Link>
      </div>
    </motion.div>
  );
}
