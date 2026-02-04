import { motion } from "framer-motion";

export function WalletPasses() {
    return (
        <div className="relative w-full h-64 flex items-center justify-center gap-8 md:gap-16">
            {/* Apple Wallet Logo */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center gap-4"
            >
                <div className="w-24 h-24 md:w-32 md:h-32 bg-transparent rounded-3xl flex items-center justify-center">
                    <img
                        src="/images/Apple_Wallet_Icon.svg.png"
                        alt="Apple Wallet"
                        className="w-full h-full object-contain drop-shadow-xl"
                    />
                </div>
                <span className="font-bold text-gray-900 text-lg">Apple Wallet</span>
            </motion.div>

            {/* Google Wallet Logo */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col items-center gap-4"
            >
                <div className="w-24 h-24 md:w-32 md:h-32 bg-transparent rounded-3xl flex items-center justify-center">
                    <img
                        src="/images/20220512235712!Google_Wallet_icon.svg.png"
                        alt="Google Wallet"
                        className="w-full h-full object-contain drop-shadow-xl"
                    />
                </div>
                <span className="font-bold text-gray-900 text-lg">Google Wallet</span>
            </motion.div>
        </div>
    );
}
