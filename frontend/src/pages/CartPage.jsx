// import { Link } from "react-router-dom";
// import { useCartStore } from "../stores/useCartStore";
// import { motion } from "framer-motion";
// import { ShoppingCart } from "lucide-react";
// import CartItem from "../components/CartItem";
// import PeopleAlsoBought from "../components/PeopleAlsoBought";
// import OrderSummary from "../components/OrderSummary";
// import GiftCouponCard from "../components/GiftCouponCard";

// const CartPage = () => {
// 	const { cart } = useCartStore();

// 	return (
// 		<div className='py-8 md:py-16'>
// 			<div className='mx-auto max-w-screen-xl px-4 2xl:px-0'>
// 				<div className='mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8'>
// 					<motion.div
// 						className='mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl'
// 						initial={{ opacity: 0, x: -20 }}
// 						animate={{ opacity: 1, x: 0 }}
// 						transition={{ duration: 0.5, delay: 0.2 }}
// 					>
// 						{cart.length === 0 ? (
// 							<EmptyCartUI />
// 						) : (
// 							<div className='space-y-6'>
// 								{cart.map((item) => (
// 									<CartItem key={item._id} item={item} />
// 								))}
// 							</div>
// 						)}
// 						{cart.length > 0 && <PeopleAlsoBought />}
// 					</motion.div>

// 					{cart.length > 0 && (
// 						<motion.div
// 							className='mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full'
// 							initial={{ opacity: 0, x: 20 }}
// 							animate={{ opacity: 1, x: 0 }}
// 							transition={{ duration: 0.5, delay: 0.4 }}
// 						>
// 							<OrderSummary />
// 							<GiftCouponCard />
// 						</motion.div>
// 					)}
// 				</div>
// 			</div>
// 		</div>
// 	);
// };
// export default CartPage;

// const EmptyCartUI = () => (
// 	<motion.div
// 		className='flex flex-col items-center justify-center space-y-4 py-16'
// 		initial={{ opacity: 0, y: 20 }}
// 		animate={{ opacity: 1, y: 0 }}
// 		transition={{ duration: 0.5 }}
// 	>
// 		<ShoppingCart className='h-24 w-24 text-gray-300' />
// 		<h3 className='text-2xl font-semibold '>Your cart is empty</h3>
// 		<p className='text-gray-400'>Looks like you {"haven't"} added anything to your cart yet.</p>
// 		<Link
// 			className='mt-4 rounded-md bg-brand-500 px-6 py-2 text-white transition-colors hover:bg-brand-600'
// 			to='/'
// 		>
// 			Start Shopping
// 		</Link>
// 	</motion.div>
// );





import { Link } from "react-router-dom";
import { useCartStore } from "../stores/useCartStore";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react"; // Swapped to a premium shopping bag icon
import CartItem from "../components/CartItem";
import PeopleAlsoBought from "../components/PeopleAlsoBought";
import OrderSummary from "../components/OrderSummary";
import GiftCouponCard from "../components/GiftCouponCard";

const CartPage = () => {
    const { cart } = useCartStore();

    return (
        <div className='min-h-screen bg-[#050816] text-[#FFFFFF] font-sans antialiased selection:bg-[#2563EB] selection:text-white pt-24 pb-16'>
            
            {/* Ambient Radial Background Scape */}
            <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-[#2563EB]/5 blur-[150px] pointer-events-none" />

            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                
                {/* Clean Studio Header */}
                <header className="mb-12 pb-6 border-b border-white/[0.04] flex items-end justify-between">
                    <div>
                        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#94A3B8] mb-1 block">
                            Shopping Bag
                        </span>
                        <h1 className="text-3xl font-light tracking-tight text-white">
                            Your <span className="font-normal">Selection</span>
                        </h1>
                    </div>
                    {cart.length > 0 && (
                        <span className="text-xs font-mono text-[#94A3B8]/60">
                            [{cart.reduce((acc, item) => acc + item.quantity, 0)} Items]
                        </span>
                    )}
                </header>

                <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-start'>
                    
                    {/* Items Section */}
                    <motion.div
                        className='lg:col-span-7 xl:col-span-8 w-full space-y-8'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {cart.length === 0 ? (
                            <EmptyCartUI />
                        ) : (
                            <div className='divide-y divide-white/[0.06] border-b border-white/[0.06]'>
                                {cart.map((item) => (
                                    <div key={item._id} className="py-6 first:pt-0 last:pb-8">
                                        <CartItem item={item} />
                                    </div>
                                ))}
                            </div>
                        )}
                        
                        {cart.length > 0 && (
                            <div className="pt-8 border-t border-white/[0.04]">
                                <PeopleAlsoBought />
                            </div>
                        )}
                    </motion.div>

                    {/* Order Meta / Summary Panel */}
                    {cart.length > 0 && (
                        <motion.aside
                            className='lg:col-span-5 xl:col-span-4 w-full space-y-6 lg:sticky lg:top-28'
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                        >
                            {/* Structured in premium clean panels */}
                            <div className="bg-[#0B1120] border border-white/[0.06] rounded-2xl p-6 shadow-2xl space-y-6">
                                <OrderSummary />
                                <div className="pt-6 border-t border-white/[0.06]">
                                    <GiftCouponCard />
                                </div>
                            </div>
                        </motion.aside>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CartPage;

const EmptyCartUI = () => (
    <motion.div
        className='flex flex-col items-center justify-center text-center py-24 px-4 bg-[#0B1120] border border-white/[0.04] rounded-2xl shadow-xl'
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
    >
        <ShoppingBag className='h-12 w-12 text-[#94A3B8]/30 mb-6 stroke-[1.2]' // Minimal clean size and stroke
        />
        <h3 className='text-lg font-light tracking-wide text-white mb-2'>
            Your bag is empty
        </h3>
        <p className='text-sm text-[#94A3B8] font-light max-w-xs mb-8 leading-relaxed'>
            Curated pieces are waiting to build your daily system dynamic.
        </p>
        <Link
            className='inline-flex items-center justify-center bg-white text-[#050816] hover:bg-[#2563EB] hover:text-white px-8 py-3 rounded-full text-xs font-medium uppercase tracking-widest transition-all duration-300 shadow-lg'
            to='/'
        >
            Explore Collections
        </Link>
    </motion.div>
);