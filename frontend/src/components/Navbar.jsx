import { ShoppingCart, UserPlus, LogIn, LogOut, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { useUserStore } from "../stores/useUserStore";
import { useCartStore } from "../stores/useCartStore";

const Navbar = () => {
	const { user, logout } = useUserStore();
	const isAdmin = user?.role === "admin";
	const { cart } = useCartStore();

	return (
            <header className="fixed top-4 left-0 w-full z-50 px-4">
			 <div
	className="max-w-7xl mx-auto
	bg-gray-900/70
	backdrop-blur-xl
	border border-white/10
	rounded-2xl
	shadow-2xl
	px-6 py-4"
>
				<div className='flex flex-wrap justify-between items-center'>
				<Link
	to="/"
	className="flex items-center gap-3 text-white font-bold text-2xl"
>
	<div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center shadow-lg">
		🛍️
	</div>

	<span>
		BMHMM <span className="text-emerald-400">Store</span>
	</span>
</Link>

					<nav className='flex flex-wrap items-center gap-4'>
						<Link to="/" className="nav-link">
  Home
</Link>
						{user && (
							<Link
								to={"/cart"}
								className='relative group text-gray-300 hover:text-emerald-400 transition-all duration-300
hover:scale-105 
							ease-in-out'
							>
								<ShoppingCart className='inline-block mr-1 group-hover:text-emerald-400' size={20} />
								<span className='hidden sm:inline'>Cart</span>
								{cart.length > 0 && (
									<span
										className='absolute -top-2 -left-2 bg-emerald-500 text-white rounded-full px-2 py-0.5 
									text-xs group-hover:bg-emerald-400 transition-all duration-300
hover:scale-105 ease-in-out'
									>
										{cart.length}
									</span>
								)}
							</Link>
						)}
						{isAdmin && (
							<Link
								className='bg-emerald-700 hover:bg-emerald-600 text-white px-3 py-1 rounded-xl font-medium
								 transition-all duration-300
hover:scale-105 ease-in-out flex items-center'
								to={"/secret-dashboard"}
							>
								<Lock className='inline-block mr-1' size={18} />
								<span className='hidden sm:inline'>Dashboard</span>
							</Link>
						)}

						{user ? (
							<button
								className='bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 
						rounded-xl flex items-center transition-all duration-300
hover:scale-105 ease-in-out'
								onClick={logout}
							>
								<LogOut size={18} />
								<span className='hidden sm:inline ml-2'>Log Out</span>
							</button>
						) : (
							<>
								<Link
									to={"/signup"}
									className='bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 
									rounded-xl flex items-center transition-all duration-300
hover:scale-105 ease-in-out'
								>
									<UserPlus className='mr-2' size={18} />
									Sign Up
								</Link>
								<Link
									to={"/login"}
									className='bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 
									rounded-xl flex items-center transition-all duration-300
hover:scale-105 ease-in-out'
								>
									<LogIn className='mr-2' size={18} />
									Login
								</Link>
							</>
						)}
					</nav>
				</div>
			</div>
		</header>
	);
};
export default Navbar;


