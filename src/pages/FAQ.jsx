import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaQuestionCircle } from 'react-icons/fa';
import { useLocation } from 'react-router';

const faqs = [
  {
    id: 1,
    question: "How can I join SkillSwap?",
    answer: "You can join by signing up using your email or social login. Once registered, you can start swapping skills!"
  },
  {
    id: 2,
    question: "Is SkillSwap free to use?",
    answer: "Yes! SkillSwap is completely free for learners and mentors."
  },
  {
    id: 3,
    question: "Can I become a mentor?",
    answer: "Absolutely! You can create a mentor profile and share your skills with others."
  },
  {
    id: 4,
    question: "How do I contact the support team?",
    answer: "You can contact our support team using the contact form on the 'Contact Us' page."
  }
];

const FAQ = () => {
  const [question, setQuestion] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(question.trim() !== ""){
      setSubmitted(true);
      setQuestion("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  const pathname=useLocation()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <section className="relative bg-gray-50 py-28 px-5 md:px-20 overflow-hidden">
      {/* Animated floating question marks */}
      <motion.div
        className="absolute top-30 left-0 text-pastecolor text-7xl opacity-20 animate-bounce"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <FaQuestionCircle />
      </motion.div>
      <motion.div
        className="absolute bottom-10 right-0 text-teal-300 text-8xl opacity-20 animate-pulse"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <FaQuestionCircle />
      </motion.div>

      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-pastecolor mb-12 text-center">Frequently Asked Questions</h2>

        {/* FAQ list */}
        <div className="flex flex-col gap-6 mb-16">
          {faqs.map((faq) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: faq.id * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-xl cursor-pointer hover:scale-105 transition-transform"
            >
              <h3 className="flex items-center gap-3 text-xl font-semibold text-gray-800 mb-2">
                <FaQuestionCircle className="text-pastecolor" /> {faq.question}
              </h3>
              <p className="text-gray-600">{faq.answer}</p>
            </motion.div>
          ))}
        </div>

        {/* Send your own question form */}
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Send Us Your Question</h3>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pastecolor"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pastecolor"
            />
            <textarea
              placeholder="Your Question"
              rows={5}
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pastecolor"
            ></textarea>
            <button className="btnStyle">
              Submit
            </button>
            {submitted && <p className="text-green-500 mt-2 text-center">Question submitted successfully!</p>}
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default FAQ;
