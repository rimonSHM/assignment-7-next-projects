
// const Footer = ()=> {
//   return (
//     <footer className="bg-[#244D3F] text-white py-10">
//       <div className="max-w-6xl mx-auto px-4 text-center">

//         {/* Title */}
//         <h1 className="text-4xl font-bold mb-2">KeenKeeper</h1>

//         {/* Subtitle */}
//         <p className="text-sm text-gray-300 mb-6">
//           Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
//         </p>

//         {/* Social Links */}
//         <div className="mb-6">
//           <p className="mb-2">Social Links</p>
//           <div className="flex justify-center gap-4 text-lg">
//             <span className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center">F</span>
//             <span className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center">I</span>
//             <span className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center">X</span>
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300 border-t border-gray-500 pt-4">
//           <p>© 2026 KeenKeeper. All rights reserved.</p>

//           <div className="flex gap-4 mt-2 md:mt-0">
//             <a href="#">Privacy Policy</a>
//             <a href="#">Terms of Service</a>
//             <a href="#">Cookies</a>
//           </div>
//         </div>

//       </div>
//     </footer>
//   );
// }


// export default Footer 


// import React from "react";
// import { Facebook, Instagram, Twitter } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className="bg-[#244D3F] text-white py-10">
//       <div className="max-w-6xl mx-auto px-4 text-center">

//         {/* Title */}
//         <h1 className="text-4xl font-bold mb-2">KeenKeeper</h1>

//         {/* Subtitle */}
//         <p className="text-sm text-gray-300 mb-6">
//           Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
//         </p>

//         {/* Social Icons */}
//         <div className="mb-6">
//           <p className="mb-3 text-gray-200">Social Links</p>

//           <div className="flex justify-center gap-6">

//             <a href="#" className="p-2 bg-white text-[#244D3F] rounded-full hover:scale-110 transition">
//               <Facebook size={18} />
//             </a>

//             <a href="#" className="p-2 bg-white text-[#244D3F] rounded-full hover:scale-110 transition">
//               <Instagram size={18} />
//             </a>

//             <a href="#" className="p-2 bg-white text-[#244D3F] rounded-full hover:scale-110 transition">
//               <Twitter size={18} />
//             </a>

//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300 border-t border-gray-500 pt-4">

//           <p>© 2026 KeenKeeper. All rights reserved.</p>

//           <div className="flex gap-4 mt-2 md:mt-0">
//             <a href="#" className="hover:text-white">Privacy Policy</a>
//             <a href="#" className="hover:text-white">Terms of Service</a>
//             <a href="#" className="hover:text-white">Cookies</a>
//           </div>

//         </div>

//       </div>
//     </footer>
//   );
// };

// export default Footer;





import React from 'react';
import { FaFacebook, FaYoutube, FaTwitter } from 'react-icons/fa'; // React icons install thakte hobe

const Footer = () => {
  return (
    <footer className="bg-[#244D3F] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        {/* Brand Name */}
        <h2 className="text-4xl font-bold mb-4 tracking-tight">KeenKeeper</h2>
        
        {/* Tagline */}
        <p className="text-gray-300 max-w-md mb-8">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        {/* Social Links */}
        <div className="mb-12">
          <h3 className="text-sm font-semibold uppercase tracking-widest mb-4">Social Links</h3>
          {/* <div className="flex gap-4 justify-center">
            <a href="#" className="bg-white text-[#244D3F] p-2 rounded-full hover:bg-gray-200 transition">
              <FaYoutube size={20} />
            </a>
            <a href="#" className="bg-white text-[#244D3F] p-2 rounded-full hover:bg-gray-200 transition">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="bg-white text-[#244D3F] p-2 rounded-full hover:bg-gray-200 transition">
              <FaTwitter size={20} />
            </a>
          </div> */}


          <div className="flex gap-4 justify-center">
  {/* YouTube */}
  <a href="#" className="bg-white text-[#244D3F] p-2 rounded-full hover:bg-[#FF0000] hover:text-white hover:scale-110 hover:shadow-lg transition-all duration-300 transform">
    <FaYoutube size={20} />
  </a>
  
  {/* Facebook */}
  <a href="#" className="bg-white text-[#244D3F] p-2 rounded-full hover:bg-[#1877F2] hover:text-white hover:scale-110 hover:shadow-lg transition-all duration-300 transform">
    <FaFacebook size={20} />
  </a>
  
  {/* Twitter/X */}
  <a href="#" className="bg-white text-[#244D3F] p-2 rounded-full hover:bg-[#1DA1F2] hover:text-white hover:scale-110 hover:shadow-lg transition-all duration-300 transform">
    <FaTwitter size={20} />
  </a>
</div>
        </div>

        {/* Bottom Bar */}
        <div className="w-full border-t border-gray-600 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Cookies</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;