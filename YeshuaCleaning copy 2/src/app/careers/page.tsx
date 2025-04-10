'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaCheck, FaUsers, FaLeaf, FaHandHoldingHeart, FaGraduationCap, FaRegCalendarAlt, FaRegSmile } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head';

// Job posting type definition
interface JobPosting {
  id: string;
  title: string;
  location: string;
  type: string;
  department: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  isExpanded: boolean;
}

const CareersPage = () => {
  const router = useRouter();
  const [jobPostings, setJobPostings] = useState<JobPosting[]>([
    {
      id: 'cleaning-specialist',
      title: 'Cleaning Specialist',
      location: 'Miami, FL',
      type: 'Full-time',
      department: 'Operations',
      description: 'Join our team of cleaning professionals to deliver exceptional service to our premium clients throughout Miami. You\'ll represent our high standards and attention to detail in every job.',
      responsibilities: [
        'Perform detailed cleaning services in residential and commercial properties',
        'Follow established cleaning protocols and procedures',
        'Ensure client satisfaction by meeting and exceeding expectations',
        'Properly handle and care for all equipment and cleaning materials',
        'Maintain a professional appearance and demeanor at all times',
        'Report any issues or concerns to your supervisor promptly'
      ],
      requirements: [
        'Previous cleaning experience preferred but not required',
        'Strong attention to detail and quality standards',
        'Excellent customer service skills',
        'Reliable transportation',
        'Ability to work both independently and in a team',
        'Flexible schedule including some weekends'
      ],
      isExpanded: false
    },
    {
      id: 'team-lead',
      title: 'Cleaning Team Lead',
      location: 'Miami, FL',
      type: 'Full-time',
      department: 'Operations',
      description: 'We\'re looking for experienced team leaders who can manage small teams of cleaning specialists while ensuring our premium standards are upheld. This position combines hands-on cleaning with leadership responsibilities.',
      responsibilities: [
        'Lead and coordinate small teams of cleaning specialists',
        'Train new team members on proper cleaning techniques and protocols',
        'Conduct quality inspections and ensure all work meets our high standards',
        'Communicate effectively with clients and address any concerns',
        'Manage cleaning supplies and equipment',
        'Create and adjust cleaning schedules as needed'
      ],
      requirements: [
        'Minimum 2 years of professional cleaning experience',
        'Previous supervisory experience preferred',
        'Excellent organizational and time management skills',
        'Strong problem-solving abilities',
        'Valid driver\'s license and clean driving record',
        'Bilingual (English/Spanish) preferred'
      ],
      isExpanded: false
    },
    {
      id: 'customer-service',
      title: 'Customer Service Representative',
      location: 'Miami, FL',
      type: 'Full-time',
      department: 'Customer Support',
      description: 'Join our customer service team to be the voice of our luxury cleaning brand. You\'ll handle client communications, schedule appointments, and ensure our clients receive the exceptional service they expect.',
      responsibilities: [
        'Answer incoming calls and respond to client inquiries',
        'Schedule and confirm cleaning appointments',
        'Process service changes, upgrades, and special requests',
        'Resolve client concerns with professionalism and care',
        'Coordinate with operations team to ensure smooth service delivery',
        'Maintain accurate client records in our CRM system'
      ],
      requirements: [
        'Previous customer service experience, preferably in luxury services',
        'Excellent verbal and written communication skills',
        'Proficiency with CRM software and office applications',
        'Problem-solving mindset and positive attitude',
        'Ability to remain calm under pressure',
        'Bilingual (English/Spanish) preferred'
      ],
      isExpanded: false
    }
  ]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    resume: null as File | null,
    message: '',
  });

  const toggleJobExpand = (id: string) => {
    setJobPostings(prevJobs => 
      prevJobs.map(job => 
        job.id === id ? { ...job, isExpanded: !job.isExpanded } : job
      )
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, resume: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Create a new object for webhook submission (different from the formData type)
    const webhookData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      position: formData.position,
      resumeFileName: formData.resume ? formData.resume.name : null,
      message: formData.message
    };
    
    // Send data to webhook
    fetch('https://hook.us2.make.com/neln229u0by16e8y53nprbdbacgeabol', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(webhookData),
    })
      .then(response => {
        console.log('Webhook response:', response);
        // Navigate to thank you page
        router.push('/thank-you?from=careers');
      })
      .catch(error => {
        console.error('Error submitting form:', error);
        alert('There was an error submitting your form. Please try again.');
      });
  };

  // Benefits of working at the company
  const benefits = [
    { 
      icon: <FaUsers className="text-gold-500" />, 
      title: "Supportive Team Culture", 
      description: "Join a diverse and inclusive team where your contributions are valued and recognized." 
    },
    { 
      icon: <FaGraduationCap className="text-gold-500" />, 
      title: "Professional Growth", 
      description: "Access to training programs and clear paths for advancement within our organization." 
    },
    { 
      icon: <FaHandHoldingHeart className="text-gold-500" />, 
      title: "Competitive Benefits", 
      description: "Health insurance, paid time off, and retirement plans to support your wellbeing." 
    },
    { 
      icon: <FaRegCalendarAlt className="text-gold-500" />, 
      title: "Flexible Scheduling", 
      description: "We work with you to create schedules that balance work and personal commitments." 
    },
    { 
      icon: <FaLeaf className="text-gold-500" />, 
      title: "Eco-Friendly Practices", 
      description: "Be part of a company committed to sustainable cleaning methods and products." 
    },
    { 
      icon: <FaRegSmile className="text-gold-500" />, 
      title: "Employee Recognition", 
      description: "Regular recognition programs that celebrate excellence and dedication." 
    },
  ];

  return (
    <>
      <Head>
        <title>Careers at Luxury Home Remodeling | Jobs in Orlando, FL</title>
        <meta name="description" content="Join Orlando's premier home remodeling team. Explore rewarding career opportunities with Luxury Home Remodeling, offering competitive benefits and professional growth." />
        <meta name="keywords" content="remodeling jobs Orlando, home renovation careers, Orlando construction jobs, custom cabinetry jobs, Orlando FL employment, remodeling project manager, cabinet maker jobs, home improvement careers, Orlando remodeling company" />
      </Head>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 bg-black">
          <div className="absolute inset-0 opacity-20" 
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundBlendMode: 'overlay'
            }}>
          </div>
          <div className="container-custom relative z-10">
            <div className="text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-4"
              >
                Join Our Team
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl text-gray-200 max-w-3xl mx-auto"
              >
                Build your career with Orlando's premier remodeling company
              </motion.p>
            </div>
          </div>
        </section>

        {/* Why Join Us Section */}
        <section className="py-20 bg-white">
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
                Why Join Luxury Home Remodeling?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Be part of a team that's transforming spaces and creating lasting impact
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Professional Growth",
                  description: "Continuous learning opportunities and career advancement paths in the remodeling industry.",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )
                },
                {
                  title: "Competitive Benefits",
                  description: "Comprehensive health insurance, paid time off, and competitive compensation packages.",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                },
                {
                  title: "Team Culture",
                  description: "Join a supportive team environment where collaboration and innovation are valued.",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  )
                }
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-8 rounded-2xl"
                >
                  <div className="w-16 h-16 bg-gold-500/10 rounded-full flex items-center justify-center mb-6 text-gold-500">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section className="py-20 bg-gray-50">
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
                Open Positions
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Join our growing team of remodeling professionals
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Remodeling Project Manager",
                  location: "Orlando, FL",
                  type: "Full-time",
                  description: "Lead and manage remodeling projects from start to finish, ensuring quality and client satisfaction.",
                  requirements: [
                    "5+ years of remodeling project management experience",
                    "Strong leadership and communication skills",
                    "Knowledge of building codes and regulations",
                    "Valid driver's license and clean driving record"
                  ]
                },
                {
                  title: "Custom Cabinet Maker",
                  location: "Orlando, FL",
                  type: "Full-time",
                  description: "Create custom cabinetry and built-ins for luxury remodeling projects.",
                  requirements: [
                    "3+ years of cabinet making experience",
                    "Proficiency with woodworking tools and machinery",
                    "Attention to detail and craftsmanship",
                    "Ability to read and interpret blueprints"
                  ]
                }
              ].map((position, index) => (
                <motion.div
                  key={position.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-2xl shadow-elegant"
                >
                  <h3 className="text-2xl font-bold text-black mb-2">{position.title}</h3>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-gray-600">{position.location}</span>
                    <span className="text-gray-600">•</span>
                    <span className="text-gray-600">{position.type}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{position.description}</p>
                  <h4 className="font-bold text-black mb-3">Requirements:</h4>
                  <ul className="space-y-2 mb-6">
                    {position.requirements.map((req, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-5 h-5 text-gold-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">{req}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="/contact?service=Job%20Application" className="btn-gold w-full text-center">
                    Apply Now
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black relative overflow-hidden">
          <div className="absolute inset-0 opacity-20" 
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundBlendMode: 'overlay'
            }}>
          </div>
          <div className="container-custom relative z-10">
            <div className="text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-white mb-6"
              >
                Ready to Build Your Career?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto"
              >
                Join our team and help us transform spaces across Orlando
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <a href="/contact?service=Job%20Application" className="btn-gold">
                  Apply Today
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CareersPage; 