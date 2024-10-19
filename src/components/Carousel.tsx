// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import img1 from "../assets/img1.jpg";
// import img2 from "../assets/img2.jpg";
// import img4 from "../assets/img4.jpg";
// const images = [
//   { src: img1, alt: "Image 1" },
//   { src: img2, alt: "Image 2" },
//   { src: img4, alt: "Image 3" },
//   { src: img1, alt: "Image 1" },
//   { src: img2, alt: "Image 2" },
//   { src: img4, alt: "Image 3" },
//   { src: img1, alt: "Image 1" },
//   { src: img2, alt: "Image 2" },
//   { src: img4, alt: "Image 3" },
// ];

// import { AnimatePresence, motion } from "framer-motion";
// import { useState } from "react";
// import { IoChevronBack, IoChevronForward } from "react-icons/io5";

// const projects = [
//   {
//     img: img1,
//     title: "Modern Kitchen",
//     description:
//       "The style of the interior was defined as modern in light colors. Main materials used in the project are wallpaper etc.",
//   },
//   {
//     img: img2,
//     title: "Interior Work",
//     description:
//       "The entire interior is the beginning of the history of the house, such as colors, lighting, and materials.",
//   },
//   {
//     img: img4,
//     title: "Head Office",
//     description:
//       "They greatly expanded the space and straightened the geometry for an upscale sales office.",
//   },
// ];

// const Carousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
//   };

//   return (
//     <section className="py-16 bg-gray-900 text-white">
//       <div className="container mx-auto">
//         <h1 className="text-4xl font-bold text-center">Our Projects</h1>
//         <p className="text-center text-gray-400 mt-4">
//           Let’s see how we are working. Discover the best interior design for
//           your sweet home.
//         </p>

//         <div className="relative mt-8 flex items-center justify-center">
//           {/* Carousel Images */}
//           <div className="overflow-hidden w-full max-w-4xl">
//             <AnimatePresence exitBeforeEnter>
//               <motion.div
//                 key={currentIndex}
//                 initial={{ opacity: 0, x: 100 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -100 }}
//                 transition={{ duration: 0.5 }}
//                 className="w-full h-80 flex justify-center items-center"
//               >
//                 <img
//                   src={projects[currentIndex].img}
//                   alt={projects[currentIndex].title}
//                   className="rounded-xl w-full h-full object-cover"
//                 />
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           {/* Left Arrow */}
//           <button
//             onClick={prevSlide}
//             className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-3 rounded-full shadow-lg"
//           >
//             <IoChevronBack className="text-2xl" />
//           </button>

//           {/* Right Arrow */}
//           <button
//             onClick={nextSlide}
//             className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-3 rounded-full shadow-lg"
//           >
//             <IoChevronForward className="text-2xl" />
//           </button>
//         </div>

//         {/* Project Details */}
//         <div className="text-center mt-6">
//           <h2 className="text-2xl font-semibold">
//             {projects[currentIndex].title}
//           </h2>
//           <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
//             {projects[currentIndex].description}
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Carousel;
