export interface Product {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  href: string;
}

export interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}
