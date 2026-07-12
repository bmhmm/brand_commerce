import { Github, Send, Mail } from "lucide-react";

const Footer = () => {
	return (
		<footer className="mt-24 border-t border-white/10 bg-slate-950">
			<div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">

				{/* Left */}
				<div>
					<h2 className="text-xl font-bold text-white">
						BMHMM
					</h2>

					<p className="text-slate-400 text-sm mt-1">
						Modern Fashion E-Commerce
					</p>
				</div>

				{/* Center */}
				<div className="text-center text-slate-400 text-sm">
					<p>
						© {new Date().getFullYear()} BMHMM. All rights reserved.
					</p>

					<p className="mt-1">
						Designed & Developed by{" "}
						<span className="text-blue-400 font-medium">
							BMHMM
						</span>
					</p>
				</div>

				{/* Right */}
				<div className="flex items-center gap-5">

					<a href="https://github.com/bmhmm" className="text-slate-400 hover:text-blue-400 transition">
						<Github size={20}/>
					</a>

					<a href="https://t.me/MICHAEL_0px" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#24A1DE] transition-colors duration-300">
    <Send size={20} />
</a>

					<a href="mailto:mikibacha45@example.com" className="text-slate-400 hover:text-blue-400 transition">
						<Mail size={20}/>
					</a>

				</div>

			</div>
		</footer>
	);
};

export default Footer;