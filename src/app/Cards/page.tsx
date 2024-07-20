'use client'
import Image from "next/image";
import { formatprice } from "../../../utils/formatprice";
import { useRouter } from "next/navigation";

interface CardsProps {
    data: any;
}

const Cards: React.FC<CardsProps> = ({ data }) => {
    const router = useRouter();

    return (
        <div
            onClick={() => router.push(`/product/${data.id}`)}
            className="cursor-pointer border border-slate-700 border-opacity-20 bg-slate-200 shadow-md rounded-md p-2 transition hover:scale-105 text-center text-sm"
            style={{ height: "400px" }} // Adjusted height
        >
            <div className="flex flex-col items-center w-full gap-1 h-full">
                <div className="aspect-square overflow-hidden relative w-full">
                    <Image 
                        src={data.images[0].image}
                        alt={data.name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                    />
                </div>
                <div className="p-4">
                    <h3 className="text-lg font-semibold text-slate-700 mb-2">{data.name}</h3>
                    <div className="flex justify-between items-center mb-4"> {/* Increased gap */}
                        <span className="text-gray-900 font-bold text-xl">{formatprice(data.price)}</span>
                        <div className="ml-8 gap-x-8">
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                router.push(`/product/${data.id}`);
                            }}
                            className="px-3 py-1 bg-teal-500 text-white rounded-md hover:bg-rose-600 transition duration-300"
                        >
                            View Details
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;
