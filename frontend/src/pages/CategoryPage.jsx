// import { useEffect } from "react";
// import { useProductStore } from "../stores/useProductStore";
// import { useParams } from "react-router-dom";
// import { motion } from "framer-motion";
// import ProductCard from "../components/ProductCard";

// const CategoryPage = () => {
// 	const { fetchProductsByCategory, products } = useProductStore();

// 	const { category } = useParams();

// 	useEffect(() => {
// 		fetchProductsByCategory(category);
// 	}, [fetchProductsByCategory, category]);

// 	console.log("products:", products);
// 	return (
// 		<div className='min-h-screen'>
// 			<div className='relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
// 				<motion.h1
// 					className='text-center text-4xl sm:text-5xl font-bold text-brand-400 mb-8'
// 					initial={{ opacity: 0, y: -20 }}
// 					animate={{ opacity: 1, y: 0 }}
// 					transition={{ duration: 0.8 }}
// 				>
// 					{category.charAt(0).toUpperCase() + category.slice(1)}
// 				</motion.h1>

// 				<motion.div
// 					className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center'
// 					initial={{ opacity: 0, y: 20 }}
// 					animate={{ opacity: 1, y: 0 }}
// 					transition={{ duration: 0.8, delay: 0.2 }}
// 				>
// 					{products?.length === 0 && (
// 						<h2 className='text-3xl font-semibold text-gray-300 text-center col-span-full'>
// 							No products found
// 						</h2>
// 					)}

// 					{products?.map((product) => (
// 						<ProductCard key={product._id} product={product} />
// 					))}
// 				</motion.div>
// 			</div>
// 		</div>
// 	);
// };
// export default CategoryPage;

import { useEffect } from "react";
import { useProductStore } from "../stores/useProductStore";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";

const CategoryPage = () => {
    const { fetchProductsByCategory, products } = useProductStore();
    const { category } = useParams();

    useEffect(() => {
        fetchProductsByCategory(category);
    }, [fetchProductsByCategory, category]);

    // Format the URL param into a pristine display layout (e.g. "t-shirts" -> "T-Shirts")
    const formattedCategoryName = category
        ? category
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join("-")
        : "";

    return (
        <div className='min-h-screen bg-[#050816] text-[#FFFFFF] font-sans antialiased selection:bg-[#2563EB] selection:text-white pt-24'>
            
            {/* Ambient High-End Radial Light Glow */}
            <div className="absolute top-[-5%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#2563EB]/5 blur-[150px] pointer-events-none" />

            <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
                
                {/* Minimalist Studio Collection Header */}
                <header className="mb-16 pb-8 border-b border-white/[0.04] text-center sm:text-left flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                    <div>
                        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#94A3B8] mb-2 block">
                            Studio Archives // Ready To Wear
                        </span>
                        <motion.h1
                            className='text-4xl sm:text-5xl font-light tracking-tight text-white'
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            {formattedCategoryName.split('-')[0]} 
                            <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-white to-[#94A3B8]">
                                {formattedCategoryName.split('-')[1] ? ` ${formattedCategoryName.split('-')[1]}` : ''}
                            </span>
                        </motion.h1>
                    </div>

                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-xs font-mono text-[#94A3B8]/60"
                    >
                        Showing {products?.length || 0} Architectures
                    </motion.p>
                </header>

                {/* Premium Product Grid System */}
                <motion.div
                    className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12 justify-items-center'
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                >
                    {products?.length === 0 && (
                        <div className="col-span-full py-32 text-center flex flex-col items-center justify-center">
                            <h2 className='text-xl font-light text-[#94A3B8] tracking-wide mb-2'>
                                Collection Currently Exhausted
                            </h2>
                            <p className="text-xs text-white/30 font-light max-w-xs">
                                New physical editions are undergoing quality alignment cycles. Check back momentarily.
                            </p>
                        </div>
                    )}

                    {products?.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default CategoryPage;
