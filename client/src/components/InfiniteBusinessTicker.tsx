import { Coffee, Scissors, Dumbbell, ShoppingBag, Car, Stethoscope, GraduationCap, Utensils, Hotel, Tv, Flower, Book, Gamepad2, Plane, Music } from "lucide-react";
import { motion } from "framer-motion";

const businessTypes = [
    { name: "Cafenea", icon: <Coffee className="w-5 h-5 text-cardzify-purple" /> },
    { name: "Salon Beauty", icon: <Scissors className="w-5 h-5 text-cardzify-coral" /> },
    { name: "Fitness & Gym", icon: <Dumbbell className="w-5 h-5 text-blue-500" /> },
    { name: "Restaurant", icon: <Utensils className="w-5 h-5 text-orange-500" /> },
    { name: "Retail Store", icon: <ShoppingBag className="w-5 h-5 text-green-500" /> },
    { name: "Service Auto", icon: <Car className="w-5 h-5 text-gray-600" /> },
    { name: "Clinică", icon: <Stethoscope className="w-5 h-5 text-red-500" /> },
    { name: "Educație", icon: <GraduationCap className="w-5 h-5 text-yellow-500" /> },
    { name: "Hotel", icon: <Hotel className="w-5 h-5 text-indigo-500" /> },
    { name: "Entertainment", icon: <Gamepad2 className="w-5 h-5 text-purple-600" /> },
    { name: "Florărie", icon: <Flower className="w-5 h-5 text-pink-500" /> },
    { name: "Librărie", icon: <Book className="w-5 h-5 text-brown-500" /> },
    { name: "Turism", icon: <Plane className="w-5 h-5 text-sky-500" /> },
];

// Duplicate the list to ensure smooth infinite loop
const tickerItems = [...businessTypes, ...businessTypes, ...businessTypes];

export function InfiniteBusinessTicker() {
    return (
        <div className="w-full relative py-12 overflow-hidden bg-transparent">
            <div className="text-center mb-10">
                <h3 className="text-xl font-bold text-gray-800">Perfect pentru orice afacere</h3>
            </div>

            <div
                className="relative flex w-full overflow-hidden"
                style={{
                    maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                    WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
                }}
            >
                <motion.div
                    className="flex items-center gap-6 min-w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 40
                    }}
                >
                    {tickerItems.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm border border-gray-100 hover:shadow-md transition-all cursor-default"
                        >
                            {item.icon}
                            <span className="font-semibold text-gray-700 whitespace-nowrap">{item.name}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
