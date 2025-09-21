// A single radio button component
export default function MyRadioButton({ isSelected, onClick }: any){
    
  return (
    <label className="relative inline-block cursor-pointer">
      {/* Hidden native input */}
      <input
        type="radio"
        checked={isSelected}
        onChange={onClick}
        className="sr-only" // sr-only hides the input visually but keeps it accessible
      />

      {/* The visible custom radio button */}
      <div
        className={`w-6 h-6 rounded-md border-2 transition-all duration-200 
          ${isSelected ? 'bg-black border-black text-white' : 'bg-white border-gray-300'}`}
      >
        {isSelected && (
          <svg
            className="w-full h-full p-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        )}
      </div>
    </label>
  );
};