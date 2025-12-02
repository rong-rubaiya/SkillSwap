import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(5);

  useEffect(() => {
    fetch('/reviews.json')
      .then(res => res.json())
      .then(data => {
        setReviews(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching reviews:', err);
        setLoading(false);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      id: reviews.length + 1,
      name,
      role,
      feedback,
      avatar: `https://i.pravatar.cc/150?img=${reviews.length + 4}`,
      rating: parseInt(rating),
    };
    setReviews([newReview, ...reviews]);
    setName('');
    setRole('');
    setFeedback('');
    setRating(5);
  };

  if (loading) {
    return <p className="text-center mt-10 text-gray-500">Loading reviews...</p>;
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-pastecolor mb-8 text-center">Reviews</h2>

        {/* Add Review Form */}
        <form onSubmit={handleSubmit} className="mb-8 p-6 bg-white rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-4">Add Your Review</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
              className="border p-2 rounded w-full"
            />
            <input
              type="text"
              placeholder="Your Role"
              value={role}
              onChange={e => setRole(e.target.value)}
              required
              className="border p-2 rounded w-full"
            />
            <textarea
              placeholder="Your Feedback"
              value={feedback}
              onChange={e => setFeedback(e.target.value)}
              required
              className="border p-2 rounded w-full col-span-1 md:col-span-2"
            />
            <select
              value={rating}
              onChange={e => setRating(e.target.value)}
              className="border p-2 rounded w-full"
            >
              {[5, 4, 3, 2, 1].map((r) => (
                <option key={r} value={r}>{r} Star{r > 1 ? 's' : ''}</option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="mt-4 bg-teal-500 text-white px-6 py-2 rounded hover:bg-teal-600 transition"
          >
            Submit Review
          </button>
        </form>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-3">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full mr-3"
                />
                <div>
                  <h3 className="font-semibold">{review.name}</h3>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>
              <div className="flex items-center mb-2">
                {Array.from({ length: review.rating }).map((_, idx) => (
                  <FaStar key={idx} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 text-sm">{review.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
