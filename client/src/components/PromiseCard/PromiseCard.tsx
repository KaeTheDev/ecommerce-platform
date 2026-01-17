interface PromiseCardProps {
    // Pass Icon
    title: string;
    text: string;
  }
  
  const PromiseCard: React.FC<PromiseCardProps> = ({ title, text }) => {
    return (
      <div className="flex h-64 flex-col items-center p-8 rounded-xl border-2 border-gray-100 bg-white hover:bg-gray-50 hover:border-gray-300 hover:shadow-lg transition-all duration-300">
        {/* Icon */}
        <div className="w-16 h-16 mb-6 rounded-2xl bg-linear-to-br from-black to-gray-900 flex items-center justify-center text-2xl hover:scale-110 transition-transform">
        </div>
  
        {/* Content */}
        <div className="text-center flex flex-col flex-1 justify-center space-y-3">
          <h3 className="text-lg font-semibold text-gray-900 leading-tight">
            {title}
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
            {text}
          </p>
        </div>
      </div>
    );
  };
  
  export default PromiseCard;  