const MyReviews = () => {
    return (
      <div className="flex flex-col gap-6 w-full">
        {/* Reviews Summary */}
        <div className="bg-white p-4 rounded-2xl shadow w-full">
          <p className="text-md text-gray-600 mb-4">My Reviews</p>
  
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex flex-col items-center bg-gray-50 p-4 rounded-xl">
              <p className="text-sm text-gray-500">Total Reviews</p>
              <p className="text-lg font-medium text-gray-700">3</p>
            </div>
  
            <div className="flex flex-col items-center bg-gray-50 p-4 rounded-xl">
              <p className="text-sm text-gray-500">Average Rating</p>
              <p className="text-lg font-medium text-gray-700">4.7 ⭐️</p>
            </div>
  
            <div className="flex flex-col items-center bg-gray-50 p-4 rounded-xl">
              <p className="text-sm text-gray-500">5-Star Reviews</p>
              <p className="text-lg font-medium text-gray-700">2</p>
            </div>
          </div>
        </div>
  
        {/* Reviews List */}
        <div className="flex flex-col gap-4">
          {[1, 2, 3].map((_, index) => (
            <div
              key={index}
              className="flex gap-4 bg-white p-4 rounded-2xl shadow w-full"
            >
              {/* Image */}
              <div className="w-12 h-12 bg-gray-200 rounded-md shrink-0" />
  
              {/* Content */}
              <div className="flex flex-col gap-2 w-full">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                  <p className="text-sm font-medium text-gray-700">
                    Solaire Statement Necklace
                  </p>
                  <p className="text-xs text-gray-400">
                    December 18, 2025
                  </p>
                </div>
  
                <span className="text-sm">⭐️⭐️⭐️⭐️⭐️</span>
  
                <p className="text-sm text-gray-500 leading-relaxed">
                  Absolutely stunning! The craftsmanship is exceptional and
                  it looks even more beautiful in person. I receive compliments
                  every time I wear it.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default MyReviews;  