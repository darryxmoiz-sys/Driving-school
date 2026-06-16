"use client";

import { motion } from "framer-motion";
import { Star, Quote, ArrowRight } from "lucide-react";
import Link from "next/link";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const reviews = [
  { name: "Emily Thornton", area: "Didsbury", rating: 5, date: "June 2024", text: "James is an absolutely fantastic instructor. I was incredibly nervous before my first lesson and he put me at ease straight away. I passed first time with only 3 minors — couldn't believe it! The lessons were always well structured and I never felt rushed." },
  { name: "Ryan Patel", area: "Salford", rating: 5, date: "May 2024", text: "Took the 8-day intensive course and passed with just 4 minors. James is patient, clear, and really adapts to how you learn. He knew exactly which junctions I was struggling with and drilled them until they felt natural. Highly recommend." },
  { name: "Sophie Warwick", area: "Stockport", rating: 5, date: "April 2024", text: "I failed twice with another instructor before switching to James. He identified my bad habits in the first lesson and we worked on them systematically. Passed on my third attempt with flying colours. Wish I'd found him sooner!" },
  { name: "Daniel Hughes", area: "Trafford", rating: 5, date: "April 2024", text: "Block of 10 was perfect for my schedule. James is always on time, professional, and genuinely fun to learn with. The mock test he did before my real test was so realistic that the actual test felt easy." },
  { name: "Priya Sharma", area: "Oldham", rating: 5, date: "March 2024", text: "As someone with driving anxiety, I was dreading starting lessons. James was incredibly understanding — never made me feel judged for mistakes. Passed first time and I actually enjoy driving now. That still amazes me." },
  { name: "Tom Barker", area: "Bury", rating: 5, date: "March 2024", text: "Brilliant instructor. Took the 5-day intensive as I needed my licence for a new job. Passed on Friday — started the job Monday. James made it happen. The daily debriefs were really helpful to track progress." },
  { name: "Chloe Griffiths", area: "Rochdale", rating: 5, date: "February 2024", text: "James is patient beyond belief. I stalled at a roundabout on my test (panic moment) and the examiner still passed me — I think all the preparation James did made the difference. Couldn't be happier." },
  { name: "Alex Martinez", area: "Wigan", rating: 5, date: "February 2024", text: "Learning to drive at 35 was daunting but James never made me feel silly. He explained the science behind everything which helped me understand rather than just copy. Passed with zero minors — a result I never expected!" },
  { name: "Hannah Williams", area: "Bolton", rating: 5, date: "January 2024", text: "I chose automatic lessons and James is one of the few instructors in Manchester who specialises in both. His knowledge of the local test routes is invaluable — I knew exactly what to expect on test day." },
];

export default function ReviewsPage() {
  const avgRating = 4.9;
  const totalReviews = 312;

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-[#003366] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="bg-[#E63946] text-white text-xs font-bold px-3 py-1 rounded-full tracking-widest uppercase mb-4 inline-block">Student Reviews</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">What Our Students Say</h1>
            <div className="flex items-center justify-center gap-2 mb-4">
              {[1,2,3,4,5].map(s => <Star key={s} className="w-8 h-8 text-[#FFD700] fill-[#FFD700]" />)}
            </div>
            <p className="font-display text-5xl font-black text-[#FFD700]">{avgRating}</p>
            <p className="text-blue-200 mt-2">Based on {totalReviews} verified reviews</p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 bg-[#F8F9FF] border-b border-gray-100">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6 text-center">
          {[
            { value: "96%", label: "First-time pass rate" },
            { value: "312", label: "Verified reviews" },
            { value: "800+", label: "Students taught" },
          ].map(stat => (
            <div key={stat.label}>
              <p className="font-display text-3xl font-black text-[#003366]">{stat.value}</p>
              <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: (i % 3) * 0.1, duration: 0.5 } } }}
                className="card p-6 flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="font-semibold text-[#003366]">{review.name}</p>
                    <p className="text-xs text-gray-400">{review.area} · {review.date}</p>
                  </div>
                  <Quote className="w-6 h-6 text-[#E63946]/30" />
                </div>
                <div className="flex gap-0.5 mb-3">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 text-[#FFD700] fill-[#FFD700]" />)}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">{review.text}</p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <span className="text-xs bg-[#2ECC71]/10 text-[#2ECC71] font-semibold px-2 py-1 rounded-full">✓ Verified Pass</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#003366] text-center text-white">
        <h2 className="font-display text-3xl font-bold mb-4">Join Our Successful Students</h2>
        <p className="text-blue-200 mb-8">Book your first lesson today and take the first step towards your licence.</p>
        <Link href="/contact" className="btn-secondary">
          Book First Lesson <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
