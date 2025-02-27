// const AuthImagePattern = ({ title, subtitle }) => {
//   return (
//     <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
//       <div className="max-w-md text-center">
//         <div className="grid grid-cols-3 gap-3 mb-8">
//           {[...Array(9)].map((_, i) => (
//             <div
//               key={i}
//               className={`aspect-square rounded-2xl bg-primary/10 ${
//                 i % 2 === 0 ? "animate-pulse" : ""
//               }`}
//             />
//           ))}
//         </div>
//         <h2 className="text-2xl font-bold mb-4">{title}</h2>
//         <p className="text-base-content/60">{subtitle}</p>
//       </div>
//     </div>
//   );
// };

// export default AuthImagePattern;
import { useEffect, useState } from "react";
import Lottie from "lottie-react";

const AuthImagePattern = ({ title, subtitle }) => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/assets/Animation - 1740648348226.json")
      .then((response) => response.json())
      .then((data) => setAnimationData(data));
  }, []);

  if (!animationData) return <p>Loading animation...</p>;

  return (
    <div className="hidden lg:flex flex-col items-center justify-center bg-base-200 p-12 text-center">
      {/* Lottie Animation */}
      <div className="w-100 h-100">
        <Lottie animationData={animationData} loop />
      </div>

      {/* Title and Subtitle */}
      <h1 className="text-2xl font-bold mt-4">JOIN THE COMMUNITY</h1>
      <p className="text-base-content/70">Easy and secure chat with PR7</p>
    </div>
  );
};

export default AuthImagePattern;

