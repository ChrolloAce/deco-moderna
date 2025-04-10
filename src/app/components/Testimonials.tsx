'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FaStar } from 'react-icons/fa';

interface Review {
  id: number;
  name: string;
  rating: number;
  date: string;
  text: string;
  project: string;
}

const Testimonials = () => {
  const [reviews] = useState<Review[]>([
    {
      id: 1,
      name: 'Thomas R.',
      rating: 5,
      date: 'February 18, 2024',
      text: 'Deco Moderna transformed our outdated kitchen into a stunning modern space. Their design team was creative and attentive to our needs, while the craftsmen executed with precision. Our Kentucky home has never looked better!',
      project: 'Kitchen Remodeling'
    },
    {
      id: 2,
      name: 'Sarah L.',
      rating: 5,
      date: 'January 9, 2024',
      text: 'We hired Deco Moderna for our bathroom renovation in Louisville and couldn\'t be happier. The team was professional from start to finish, and they completed the project ahead of schedule. The tile work is especially impressive!',
      project: 'Bathroom Renovation'
    },
    {
      id: 3,
      name: 'James B.',
      rating: 5,
      date: 'December 15, 2023',
      text: 'Outstanding work on our whole home remodel. Deco Moderna handled everything with professionalism and exceptional attention to detail. They transformed our Kentucky home while maintaining its original character. Highly recommend!',
      project: 'Whole Home Remodeling'
    },
    {
      id: 4,
      name: 'Emily K.',
      rating: 4,
      date: 'November 22, 2023',
      text: 'Deco Moderna installed beautiful custom cabinetry throughout our Louisville home. The quality is exceptional, and their team was respectful of our space. The project took slightly longer than expected, but the results were worth the wait.',
      project: 'Custom Cabinetry'
    },
    {
      id: 5,
      name: 'David W.',
      rating: 5,
      date: 'October 8, 2023',
      text: 'We had Deco Moderna install hardwood flooring throughout our Kentucky home, and we couldn\'t be more impressed. The team was efficient, and the finished product is flawless. They even helped us select the perfect wood species for our style.',
      project: 'Flooring Installation'
    },
    {
      id: 6,
      name: 'Michelle P.',
      rating: 5,
      date: 'September 14, 2023',
      text: 'The team at Deco Moderna repainted our entire Louisville home inside and out. Their attention to detail and clean work ethic made the process stress-free. Our neighbors keep asking who did the work - we happily recommend them!',
      project: 'Interior & Exterior Painting'
    }
  ]);

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="h-1 w-20 bg-gold-gradient mx-auto mb-6 rounded-full"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            What Our Clients Are Saying
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our satisfied clients across Kentucky about their remodeling experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-elegant flex flex-col h-full"
            >
              <div className="flex items-center mb-4 justify-between">
                <div className="flex text-gold-500">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < review.rating ? 'text-gold-500' : 'text-gray-300'} />
                  ))}
                </div>
                <span className="text-gray-500 text-sm">{review.date}</span>
              </div>
              <div className="text-sm text-gold-500 font-medium mb-2">{review.project}</div>
              <p className="text-gray-700 mb-4 flex-grow">"{review.text}"</p>
              <div className="font-semibold text-black">{review.name}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://www.google.com/maps/place/Deco+Moderna+Louisville"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            Read More Testimonials
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 