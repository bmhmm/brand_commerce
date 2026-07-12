// import { useEffect } from "react";
// import CategoryItem from "../components/CategoryItem";
// import { useProductStore } from "../stores/useProductStore";
// import FeaturedProducts from "../components/FeaturedProducts";
// import { ArrowRight, Sparkles } from "lucide-react";

// const categories = [
// 	{ href: "/jeans", name: "Jeans", imageUrl: "/jeans.jpg" },
// 	{ href: "/t-shirts", name: "T-shirts", imageUrl: "/tshirts.jpg" },
// 	{ href: "/shoes", name: "Shoes", imageUrl: "/shoes.jpg" },
// 	{ href: "/glasses", name: "Glasses", imageUrl: "/glasses.png" },
// 	{ href: "/jackets", name: "Jackets", imageUrl: "/jackets.jpg" },
// 	{ href: "/suits", name: "Suits", imageUrl: "/suits.jpg" },
// 	{ href: "/bags", name: "Bags", imageUrl: "/bags.jpg" },
// ];

// const HomePage = () => {
// 	const { fetchFeaturedProducts, products, isLoading } = useProductStore();

// 	useEffect(() => {
// 		fetchFeaturedProducts();
// 	}, [fetchFeaturedProducts]);

// 	return (
// 		<div className='relative min-h-screen text-white overflow-hidden'>
// 			<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
// 				<h1 className='text-center text-5xl sm:text-6xl font-bold text-brand-400 mb-4'>
// 					Explore Our Categories
// 				</h1>
// 				<p className='text-center text-xl text-gray-300 mb-12'>
// 					Discover the latest trends in eco-friendly fashion
// 				</p>

// 				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
// 					{categories.map((category) => (
// 						<CategoryItem category={category} key={category.name} />
// 					))}
// 				</div>

// 				{!isLoading && products.length > 0 && <FeaturedProducts featuredProducts={products} />}
// 			</div>
// 		</div>


// 	);
// };
// export default HomePage;

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useProductStore } from "../stores/useProductStore";
import FeaturedProducts from "../components/FeaturedProducts";
import { ArrowRight } from "lucide-react";

// The 7 mandatory categories preserved exactly with custom descriptive editorial text
// Placed in the exact order you requested, starting with Suits
const dynamicCategories = [
    { 
        href: "/suits", 
        name: "Suits", 
        imageUrl: "/suits.jpg",
        tagline: "ARCHITECTURAL TAILORING",
        headline: "Form Follows Function.",
        description: "A curated alignment of clean tailoring, high-fidelity materials, and timeless silhouettes engineered for the modern vanguard."
    },
    { 
        href: "/jeans", 
        name: "Jeans", 
        imageUrl: "/jeans.jpg",
        tagline: "DENIM ENGINEERING",
        headline: "Structural Integrity.",
        description: "Heavyweight, refined selvedge and architectural cuts that redefine classic utilitarian denim for daily performance."
    },
    { 
        href: "/jackets", 
        name: "Jackets", 
        imageUrl: "/jackets.jpg",
        tagline: "OUTERWEAR SYSTEMS",
        headline: "Elemental Protection.",
        description: "Minimalist silhouettes providing advanced insulation and technical layering without compromising clean aesthetic lines."
    },
    { 
        href: "/t-shirts", 
        name: "T-shirts", // Casing preserved exactly to maintain backend category matching
        imageUrl: "/tshirts.jpg",
        tagline: "DAILY ESSENTIALS",
        headline: "Pure Minimalism.",
        description: "Crafted from premium long-staple organic cotton. A study in perfect drape, weight, and uncompromising simplicity."
    },
    { 
        href: "/shoes", 
        name: "Shoes", 
        imageUrl: "/shoes.jpg",
        tagline: "FOOTWEAR CONTEXT",
        headline: "Ground Dynamic.",
        description: "Sculpted ergonomics meeting premium Italian calfskin. Form-focused footwear engineered to stabilize your stride."
    },
    { 
        href: "/glasses", 
        name: "Glasses", 
        imageUrl: "/glasses.png",
        tagline: "OPTICAL FRAMES",
        headline: "Visual Precision.",
        description: "Hand-polished acetate frames engineered with custom micro-architectural hinges and timeless geometry."
    },
    { 
        href: "/bags", 
        name: "Bags", 
        imageUrl: "/bags.jpg",
        tagline: "CARRY SYSTEMS",
        headline: "Spatial Utility.",
        description: "Modular design philosophies integrated into premium carryalls, meticulously laid out to organize tech ecosystems."
    }
];

const HomePage = () => {
    const { fetchFeaturedProducts, products, isLoading } = useProductStore();

    useEffect(() => {
        fetchFeaturedProducts();
    }, [fetchFeaturedProducts]);

    return (
        <div className='relative min-h-screen bg-[#050816] text-[#FFFFFF] overflow-hidden font-sans antialiased selection:bg-[#2563EB] selection:text-white'>
            
            {/* Ambient Luxury Light Scapes */}
            <div className="absolute top-[-5%] left-[-10%] w-[700px] h-[700px] rounded-full bg-[#2563EB]/10 blur-[160px] pointer-events-none" />
            <div className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#3B82F6]/5 blur-[140px] pointer-events-none" />
            <div className="absolute bottom-[20%] left-[-5%] w-[650px] h-[650px] rounded-full bg-[#2563EB]/5 blur-[150px] pointer-events-none" />

            {/* Alternating Editorial Showcase Sections */}
            <div className="w-full flex flex-col">
                {dynamicCategories.map((category, index) => {
                    const isEven = index % 2 === 0;
                    // Properly structures route destination to match your app configuration path: /category/suits
                    const targetRoute = `/category${category.href}`;

                    return (
                        <section 
                            key={category.name}
                            className="relative w-full min-h-[85vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 border-b border-white/[0.04]"
                        >
                            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                                
                                {/* Text Composition Block */}
                                <motion.div 
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    className={`lg:col-span-5 flex flex-col justify-center text-center lg:text-left z-10 ${
                                        isEven ? 'lg:order-1' : 'lg:order-2 lg:col-start-8'
                                    }`}
                                >
                                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#94A3B8] mb-4 block">
                                        {category.tagline}
                                    </span>
                                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] text-white mb-6">
                                        {category.headline.split('.')[0]}
                                        <span className="font-medium italic text-transparent bg-clip-text bg-gradient-to-r from-white via-[#94A3B8] to-[#2563EB]">.</span>
                                    </h2>
                                    <p className="text-base sm:text-lg text-[#94A3B8] max-w-md mx-auto lg:mx-0 font-light leading-relaxed mb-8">
                                        {category.description}
                                    </p>
                                    <div className="flex items-center justify-center lg:justify-start">
                                        <Link 
                                            to={targetRoute} 
                                            className="group inline-flex items-center gap-2 text-sm font-medium tracking-wider uppercase border-b border-white/20 pb-1 hover:border-white transition-all duration-300"
                                        >
                                            Explore {category.name}
                                            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300 text-[#2563EB]" />
                                        </Link>
                                    </div>
                                </motion.div>

                                {/* Structural Premium Imagery Frame */}
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                    className={`lg:col-span-7 relative w-full h-[50vh] sm:h-[65vh] rounded-2xl overflow-hidden group bg-[#0B1120] border border-white/[0.04] shadow-2xl ${
                                        isEven ? 'lg:order-2 lg:col-start-6' : 'lg:order-1'
                                    }`}
                                >
                                    <Link to={targetRoute} className="block w-full h-full relative cursor-pointer">
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/70 via-transparent to-transparent z-10 transition-opacity duration-500 group-hover:opacity-40" />
                                        
                                        <img 
                                            src={category.imageUrl} 
                                            alt={`${category.name} Collection Presentation`} 
                                            className="w-full h-full object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-[1.5s] ease-[0.16, 1, 0.3, 1]"
                                        />

                                        {/* Minimalist Context Indicators */}
                                        <div className="absolute bottom-6 left-8 right-8 z-20 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden sm:flex">
                                            <p className="text-[10px] uppercase tracking-widest text-[#94A3B8]">Studio Edition // Category {index + 1}</p>
                                            <span className="text-[10px] font-mono text-white/30">{category.name.toUpperCase()}</span>
                                        </div>
                                    </Link>
                                </motion.div>

                            </div>
                        </section>
                    );
                })}
            </div>

            {/* Featured Products System Showcase */}
            {!isLoading && products.length > 0 && (
                <main className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24'>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <FeaturedProducts featuredProducts={products} />
                    </motion.div>
                </main>
            )}

        </div>
    );
};

export default HomePage;