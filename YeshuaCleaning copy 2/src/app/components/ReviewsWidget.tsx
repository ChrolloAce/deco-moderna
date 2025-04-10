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
      name: 'Robert S.',
      rating: 5,
      date: 'March 15, 2023',
      text: 'Luxury Home Remodeling transformed our kitchen beyond our expectations. The attention to detail and quality of workmanship was outstanding. Highly recommend their services!'
    },
    {
      id: 2,
      name: 'Jennifer K.',
      rating: 5,
      date: 'April 22, 2023',
      text: 'We hired Luxury Home Remodeling for our bathroom renovation and couldn\'t be happier. Professional, punctual, and the results are stunning. Will definitely use them again for future projects.'
    },
    {
      id: 3,
      name: 'Michael T.',
      rating: 5,
      date: 'May 10, 2023',
      text: 'Outstanding work on our home remodel. The team was knowledgeable and professional throughout the entire process. They stayed on schedule and the quality exceeded our expectations.'
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
            Read what our valued customers have to say about their experience with Luxury Home Remodeling in Orlando
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
            href="https://www.google.com/maps/place/Luxury+Home+Remodeling+Orlando" 
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