// const NewsletterSignup = () => {
//   return (
//     <>
//     <div className="flex flex-col bg-gray-200 py-7">
//     <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-gray-500 text-center">
//         STAY CONNECTED
//       </span>
//       <h3 className="text-5xl text-center mt-6">Join Our Circle</h3>
//       <p className="text-center">Be the first to hear about new collections and exclusive offers.</p>
//      <div className="flex flex-row justify-center">
//      <input type="text" placeholder="Enter Your Email Address" />
//      <button className="bg-black text-white ml-3 px-3 py-4">SUBSCRIBE</button>
//      </div>
//      <span className="text-xs text-center">By subscribing, you agree to our Privacy Policy and consent to receive updates</span>
//     </div>
//     </>
//   );
// };

// export default NewsletterSignup;

const NewsletterSignup = () => {
    return (
      <section className="w-full bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-gray-400 mb-4">
            STAY CONNECTED
          </span>
          
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Join Our Circle
          </h3>
          
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-lg mx-auto leading-relaxed">
            Be the first to hear about new collections and exclusive offers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
            <input 
              type="email" 
              placeholder="Enter Your Email Address" 
              className="flex-1 px-5 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white bg-white"
            />
            <button className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all text-sm sm:text-base whitespace-nowrap">
              SUBSCRIBE
            </button>
          </div>
          
          <p className="text-xs text-gray-400 max-w-md mx-auto leading-relaxed">
            By subscribing, you agree to our Privacy Policy and consent to receive updates
          </p>
        </div>
      </section>
    );
  };
  
  export default NewsletterSignup;  