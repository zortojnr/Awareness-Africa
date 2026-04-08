import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Award, CheckCircle, ArrowRight, Clock } from 'lucide-react';

const LearningHub: React.FC = () => {
  const courseCategories = [
    {
      title: 'Human Rights Education',
      description: 'Learn about fundamental human rights and their importance in society.',
      duration: '45 mins',
      icon: '🕊️'
    },
    {
      title: 'Conflict Resolution',
      description: 'Develop skills to manage and resolve conflicts peacefully.',
      duration: '60 mins',
      icon: '🤝'
    },
    {
      title: 'Marriage & Relationships',
      description: 'Build healthy relationships and understand marriage dynamics.',
      duration: '50 mins',
      icon: '💍'
    },
    {
      title: 'Workplace Skills',
      description: 'Enhance your professional skills and workplace competencies.',
      duration: '40 mins',
      icon: '💼'
    },
    {
      title: 'Motherhood Support',
      description: 'Resources and guidance for mothers and parenting.',
      duration: '35 mins',
      icon: '👶'
    },
    {
      title: 'Drug Abuse Awareness',
      description: 'Understanding drug abuse and prevention strategies.',
      duration: '30 mins',
      icon: '🚫'
    },
    {
      title: 'Life Skills',
      description: 'Essential life skills for personal development and growth.',
      duration: '55 mins',
      icon: '🌱'
    }
  ];

  const scrollToCourses = () => {
    const element = document.getElementById('courses');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-slate-900 mb-6">
              Start Your Learning Journey
            </h1>
            <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              Access free life-skills and human-rights courses designed to empower individuals, strengthen communities, and build a better future.
            </p>
            <button
              onClick={scrollToCourses}
              className="bg-brand-primary text-white px-8 py-4 text-sm uppercase tracking-widest font-bold hover:bg-brand-accent transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Learning →
            </button>
          </motion.div>
        </div>
      </section>

      {/* About the Learning Hub */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-8">About the AAF Learning Hub</h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">💰</span>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Free Courses</h3>
                  <p className="text-slate-600">All courses are completely free of charge.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Trusted Partners</h3>
                  <p className="text-slate-600">Hosted by trusted partners like volunteerministers.org.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Certificates</h3>
                  <p className="text-slate-600">Receive certificates from our partners upon completion.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">AAF Recognition</h3>
                  <p className="text-slate-600">Get your official AAF Certificate of Participation after verification.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Course Categories */}
      <section id="courses" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 mb-6">Available Courses</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Choose from our selection of life-skills and human-rights courses to begin your learning journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courseCategories.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 border border-slate-100"
              >
                <div className="text-4xl mb-4">{course.icon}</div>
                <h3 className="text-xl font-display font-bold text-slate-900 mb-3">{course.title}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">{course.description}</p>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                </div>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSf-uxryaNwwbknaa7zKtYfK0mHHcx2Y1pqyHYaiYiRxOXyxXA/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-brand-primary text-white px-6 py-3 text-sm font-bold hover:bg-brand-accent transition-all duration-300 text-center block rounded-lg"
                >
                  Start Learning
                </a>
                <p className="text-xs text-slate-400 mt-2 text-center">
                  Register to access our learning courses.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 mb-6">How It Works</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Follow these simple steps to start learning and earn your certificates.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: 'Register on AAF',
                description: 'Create your account or sign in to access the learning hub.'
              },
              {
                step: 2,
                title: 'Start a Course',
                description: 'Choose a course and begin learning on our partner platform.'
              },
              {
                step: 3,
                title: 'Complete & Download',
                description: 'Finish the course and download your certificate from the partner site.'
              },
              {
                step: 4,
                title: 'Claim AAF Certificate',
                description: 'Upload your certificate to receive official AAF recognition.'
              }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-brand-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-lg font-display font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Claim Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 mb-6">Claim Your AAF Certificate</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Did you complete a course and receive certification? Upload your certificate to get your official AAF Certificate of Participation.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf-uxryaNwwbknaa7zKtYfK0mHHcx2Y1pqyHYaiYiRxOXyxXA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-brand-primary text-white px-8 py-4 text-sm uppercase tracking-widest font-bold hover:bg-brand-accent transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Click me
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Completion CTA */}
      <section className="py-20 bg-brand-primary text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">Join the AAF Learning Hub</h2>
            <p className="text-lg mb-8 leading-relaxed">
              Register now to access free courses and become part of our learning community.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf-uxryaNwwbknaa7zKtYfK0mHHcx2Y1pqyHYaiYiRxOXyxXA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-brand-accent text-white px-8 py-4 text-sm uppercase tracking-widest font-bold hover:bg-yellow-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Register for Learning Hub
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LearningHub;