"use client"

import { CartProductType, selectedImgtype } from "../product/[id]/Pdetails";
import Image from "next/image";
import { useState } from "react";

interface ProductImageProps {
    cartProduct: CartProductType;
    product: any;
}

const Pimage: React.FC<ProductImageProps> = ({ cartProduct, product }) => {
    const [selectedImage, setSelectedImage] = useState<selectedImgtype>(cartProduct.selectedImg);

    const handleImageClick = (image: selectedImgtype) => {
        setSelectedImage(image);
    };

    return (
        <div className="grid grid-cols-6 gap-2 h-full max-h-[500px] min-h-[300px] sm:min-h-[400px]">
            <div className="flex flex-col items-center justify-center gap-4 cursor-pointer border h-full max-h-[500px] min-h-[300px] sm:min-h-[400px]">
                {product.images.map((image: selectedImgtype) => (
                    <div
                        key={image.color}
                        className={`relative w-[80%] aspect-square rounded border-teal-300 ${
                            selectedImage.color === image.color ? "border-[1.5px]" : "border-none"
                        }`}
                        onClick={() => handleImageClick(image)}
                    >
                        <Image src={image.image} alt={image.color} fill className="object-contain" />
                    </div>
                ))}
            </div>
            <div className="col-span-5 relative aspect-square">
                <Image
                    fill
                    className="w-full h-full object-contain max-h-[500px] min-h-[300px] sm:min-h-[400px]"
                    src={selectedImage.image}
                    alt={cartProduct.name}
                />
            </div>
        </div>
    );
};

export default Pimage;
