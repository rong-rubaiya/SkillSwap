import React, { useEffect, useState, useContext } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link, useLocation } from 'react-router';
import { AuthContext } from '../context/AuthContext'; // adjust path

const Reviews = () => {
  const { user } = useContext(AuthContext); // get logged-in user
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(5);
const pathname=useLocation()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
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

           {/* Conditional Review Form */}

                   {user ? (

         <form
  onSubmit={handleSubmit}
  className="mb-10  mt-6 p-8 bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-gray-100"
>
  <h3 className="text-2xl font-bold text-pastecolor mb-6 text-center">
    Share Your Experience
  </h3>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

    {/* Name */}
    <div>
      <label className="block text-sm font-medium text-gray-600 mb-1">Name</label>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pastecolor focus:outline-none transition"
      />
    </div>

    {/* Role */}
    <div>
      <label className="block text-sm font-medium text-gray-600 mb-1">Role</label>
      <input
        type="text"
        placeholder="Developer / Student / Designer"
        value={role}
        onChange={e => setRole(e.target.value)}
        required
        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pastecolor focus:outline-none transition"
      />
    </div>

    {/* Feedback */}
    <div className="md:col-span-2">
      <label className="block text-sm font-medium text-gray-600 mb-1">
        Your Feedback
      </label>
      <textarea
        placeholder="Share your honest review..."
        value={feedback}
        onChange={e => setFeedback(e.target.value)}
        required
        rows={4}
        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pastecolor focus:outline-none transition"
      />
    </div>

    {/* Rating */}
    <div>
      <label className="block text-sm font-medium text-gray-600 mb-1">
        Rating
      </label>
      <select
        value={rating}
        onChange={e => setRating(e.target.value)}
        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pastecolor focus:outline-none transition"
      >
        {[5, 4, 3, 2, 1].map((r) => (
          <option key={r} value={r}>{r} Star{r > 1 ? 's' : ''}</option>
        ))}
      </select>
    </div>
  </div>

  {/* Submit button */}
  <button
    type="submit"
    className="mt-4 btnStyle"
  >
    Submit Review
  </button>
</form>
        ) : (
          <div className="mb-8 text-center">
            <p className="mt-10 py-8 bg-[#127f7a] text-gray-50 text-2xl">Want to add a review? Please log in first.</p>
            <Link to="/login">
              <button className="btnStyle">
                Go to Login
              </button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Reviews;
