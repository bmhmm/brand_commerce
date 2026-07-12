import {
	ShoppingCart,
	UserPlus,
	LogIn,
	LogOut,
	Lock,
	ShoppingBag,
} from "lucide-react";
import { NavLink, Link } from "react-router-dom";
import { useUserStore } from "../stores/useUserStore";
import { useCartStore } from "../stores/useCartStore";
import logo from "../assets/brandName.png";

const Navbar = () => {
	const { user, logout } = useUserStore();
	const isAdmin = user?.role === "admin";
	const { cart } = useCartStore();

	const navLinkClass = ({ isActive }) =>
		`relative font-medium transition-all duration-300 ${
			isActive
				? "text-brand-400"
				: "text-gray-300 hover:text-white"
		} after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-brand-400 after:transition-all after:duration-300 ${
			isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
		}`;

	return (
		<header className="fixed top-4 left-0 w-full z-50 px-4">
			<div
				className="max-w-7xl mx-auto
                
				bg-slate-900/70
				backdrop-blur-xl
				border border-white/10
				rounded-2xl
				shadow-2xl"
			>
				<div className="flex items-center justify-between px-6 py-4">
					{/* Logo */}
					{/* <Link
						to="/"
						className="flex items-center gap-3 group"
					>
						<div
							className="w-11 h-11 rounded-xl
							bg-gradient-to-br
							from-brand-500
							to-brand-700
							flex items-center justify-center
							shadow-lg
							group-hover:scale-110
							transition-all duration-300"
						>
							<ShoppingBag className="w-6 h-6 text-white" />
						</div>

						<div>
							<h1 className="text-xl font-bold text-white">
								BMHMM
							</h1>
							<p className="text-xs text-brand-400 tracking-wider">
								FASHION
							</p>
						</div>
					</Link> */}

              <Link to="/" className="flex items-center gap-3">
	<img
		src={logo}
		alt="BMHMM Logo"
		className="w-11 h-11 object-contain"
	/>

	<div>
		<h1 className="text-xl font-bold text-white">BMHMM</h1>
		<p className="text-xs text-brand-400 tracking-wider">
			PREMIUM FASHION
		</p>
	</div>
</Link>
					{/* Navigation */}
					<nav className="flex items-center gap-6">
						<NavLink to="/" className={navLinkClass}>
							Home
						</NavLink>

						{user && (
							<NavLink
								to="/cart"
								className={({ isActive }) =>
									`${navLinkClass({ isActive })} flex items-center gap-2`
								}
							>
								<div className="relative">
									<ShoppingCart size={20} />

									{cart.length > 0 && (
										<span
											className="absolute -top-2 -right-2
											bg-brand-500
											text-white
											text-[10px]
											font-semibold
											w-5 h-5
											rounded-full
											flex items-center justify-center"
										>
											{cart.length}
										</span>
									)}
								</div>

								<span className="hidden md:block">
									Cart
								</span>
							</NavLink>
						)}

						{isAdmin && (
							<Link
								to="/secret-dashboard"
								className="
								flex items-center gap-2
								bg-gradient-to-r
								from-brand-600
								to-brand-700
								text-white
								px-4 py-2
								rounded-xl
								shadow-lg
								hover:scale-105
								transition-all duration-300"
							>
								<Lock size={18} />
								<span className="hidden md:block">
									Dashboard
								</span>
							</Link>
						)}

						{user ? (
							<button
								onClick={logout}
								className="
								flex items-center gap-2
								bg-slate-800
								border border-slate-700
								text-white
								px-4 py-2
								rounded-xl
								hover:bg-slate-700
								hover:scale-105
								transition-all duration-300"
							>
								<LogOut size={18} />
								<span className="hidden md:block">
									Log Out
								</span>
							</button>
						) : (
							<>
								<Link
									to="/signup"
									className="
									flex items-center gap-2
									bg-gradient-to-r
									from-brand-600
									to-brand-700
									text-white
									px-4 py-2
									rounded-xl
									shadow-lg
									hover:scale-105
									transition-all duration-300"
								>
									<UserPlus size={18} />
									Sign Up
								</Link>

								<Link
									to="/login"
									className="
									flex items-center gap-2
									bg-slate-800
									border border-slate-700
									text-white
									px-4 py-2
									rounded-xl
									hover:bg-slate-700
									hover:scale-105
									transition-all duration-300"
								>
									<LogIn size={18} />
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