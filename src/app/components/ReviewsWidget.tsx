'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

interface Review {
  id: number;
  name: string;
  rating: number;
  date: string;
  text: string;
}

const ReviewsWidget = () => {
  const [reviews] = useState<Review[]>([
    {
      id: 1,
      name: 'Thomas R.',
      rating: 5,
      date: 'February 18, 2024',
      text: 'Deco Moderna transformed our outdated kitchen into a stunning modern space. Their design team was creative and attentive to our needs, while the craftsmen executed with precision. Our Kentucky home has never looked better!'
    },
    {
      id: 2,
      name: 'Sarah L.',
      rating: 5,
      date: 'January 9, 2024',
      text: 'We hired Deco Moderna for our bathroom renovation in Louisville and couldn\'t be happier. The team was professional from start to finish, and they completed the project ahead of schedule. The tile work is especially impressive!'
    },
    {
      id: 3,
      name: 'James B.',
      rating: 5,
      date: 'December 15, 2023',
      text: 'Outstanding work on our whole home remodel. Deco Moderna handled everything with professionalism and exceptional attention to detail. They transformed our Kentucky home while maintaining its original character. Highly recommend!'
    },
    {
      id: 4,
      name: 'Emily K.',
      rating: 4,
      date: 'November 22, 2023',
      text: 'Deco Moderna installed beautiful custom cabinetry throughout our Louisville home. The quality is exceptional, and their team was respectful of our space. The project took slightly longer than expected, but the results were worth the wait.'
    },
    {
      id: 5,
      name: 'David W.',
      rating: 5,
      date: 'October 8, 2023',
      text: 'We had Deco Moderna install hardwood flooring throughout our Kentucky home, and we couldn\'t be more impressed. The team was efficient, and the finished product is flawless. They even helped us select the perfect wood species for our style.'
    },
    {
      id: 6,
      name: 'Michelle P.',
      rating: 5,
      date: 'September 14, 2023',
      text: 'The team at Deco Moderna repainted our entire Louisville home inside and out. Their attention to detail and clean work ethic made the process stress-free. Our neighbors keep asking who did the work - we happily recommend them!'
    }
  ]);

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container-custom px-4 sm:px-6 md:px-8">
        <div className="text-center mb-8 md:mb-12">
          <div className="h-1 w-16 md:w-20 bg-gold-gradient mx-auto mb-4 md:mb-6 rounded-full"></div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-2 md:mb-4">
            What Our Clients Say
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
            Read what our valued customers have to say about their experience with Deco Moderna in Louisville, Kentucky
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-elegant flex flex-col h-full"
            >
              <div className="flex flex-wrap items-center mb-4 justify-between">
                <div className="flex text-gold-500 mb-2 sm:mb-0">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar key={i} className={`${i < review.rating ? 'text-gold-500' : 'text-gray-300'} mr-1 text-sm sm:text-base`} />
                  ))}
                </div>
                <span className="text-gray-500 text-sm">{review.date}</span>
              </div>
              <p className="text-gray-700 mb-4 flex-grow text-sm sm:text-base">"{review.text}"</p>
              <div className="font-semibold text-black">{review.name}</div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <a 
            href="https://www.google.com/maps/place/Deco+Moderna+Louisville" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-gold-500 hover:text-gold-600 transition-colors font-medium text-sm sm:text-base"
          >
            View more reviews on Google
            <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsWidget; 