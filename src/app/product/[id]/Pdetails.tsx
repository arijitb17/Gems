"use client"

import { useCallback, useEffect, useState } from "react";
import Setquantity from "@/app/components/Setquantity";
import Button from "@/app/components/Button";
import Pimage from "@/app/components/Pimage";
import { useCart } from "../../../../hooks/useCart";
import { FaCheck } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { formatprice } from "../../../../utils/formatprice";

interface detailsProps {
    product: any;
}

export type CartProductType = {
    id: string;
    name: string;
    description: string;
    category: string;
    brand: string;
    selectedImg: selectedImgtype;
    quantity: number;
    price: number;
    carat: string;
    buywith: 'none' | 'rings';
    price1?: number; // Optional price1 for rings
    price2?: number; // Optional price2 for rings
}

export type selectedImgtype = {
    color: string;
    colorCode: string;
    image: string;
}

const Pdetails: React.FC<detailsProps> = ({ product }) => {
    const { handleAddProducttoCart, cartproducts } = useCart();
    const [isProductInCart, setIsProductInCart] = useState(false);
    const [cartProduct, setCartProduct] = useState<CartProductType>({
        id: product.id,
        name: product.name,
        description: product.description,
        category: product.category,
        brand: product.brand,
        selectedImg: { ...product.images[0] },
        quantity: 1,
        price: product.price,
        carat: "1 carat", // Default carat selection
        buywith: 'none', // Default buywith selection
    });

    const [designSelected, setDesignSelected] = useState<string | null>(null); // State to track selected design

    const router = useRouter();

    useEffect(() => {
        setIsProductInCart(false);
        if (cartproducts) {
            const existingIndex = cartproducts.findIndex((item) => item.id === product.id);

            if (existingIndex > -1) {
                setIsProductInCart(true);
            }
        }
    }, [cartproducts, product.id]);

    const handleQtyIncrease = useCallback(() => {
        if (cartProduct.quantity === 99) {
            return;
        }
        setCartProduct((prev) => ({
            ...prev,
            quantity: prev.quantity + 1
        }));
    }, [cartProduct]);

    const handleQtyDecrease = useCallback(() => {
        if (cartProduct.quantity === 1) {
            return;
        }
        setCartProduct((prev) => ({
            ...prev,
            quantity: prev.quantity - 1
        }));
    }, [cartProduct]);

    const handleCaratChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCarat = e.target.value;
        // Assume the price adjustment logic based on carat here
        let newPrice = product.price; // Default to product price
        switch (selectedCarat) {
            case "1 carat":
                newPrice = product.price; // Example price adjustment
                break;
            case "2 carats":
                newPrice = product.price * 1.5; // Example price adjustment
                break;
            case "3 carats":
                newPrice = product.price * 1.8; // Example price adjustment
                break;
            default:
                newPrice = product.price;
        }
        setCartProduct((prev) => ({
            ...prev,
            carat: selectedCarat,
            price: newPrice,
        }));
    };

    const handleBuyWithChange = (option: 'none' | 'rings') => {
        let updatedCartProduct: CartProductType = {
            ...cartProduct,
            buywith: option,
        };
        
        // Remove price1 and price2 if buywith is changed
        if (option !== 'rings') {
            delete updatedCartProduct.price1;
            delete updatedCartProduct.price2;
        }

        setCartProduct(updatedCartProduct);
    };

    const handleDesignChange = (design: string) => {
        setDesignSelected(design);
        let updatedCartProduct: CartProductType = {
            ...cartProduct,
            price1: design === 'design1' ? product.price1 : undefined,
            price2: design === 'design2' ? product.price2 : undefined,
        };

        setCartProduct(updatedCartProduct);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Pimage cartProduct={cartProduct} product={product} />
            <div>
                <h2 className="text-3xl font-medium-text">{product.name}</h2>
                <hr className="w-[30%] my-2" />
                <div className="text-justify pt-2">
                    {product.description}
                </div>
                <hr className="w-[30%] my-2" />
                <div>
                    <span className="font-semibold">Color: </span>{product.color}
                </div>
                <div>
                    <span className="font-semibold">Rarity: </span>{product.types}
                </div>
                <div className={product.inStock ? "text-teal-400" : "text-rose-400"}>
                    {product.inStock ? "In stock" : "Out of stock"}
                </div>
                <hr className="w-[30%] my-2" />
                {isProductInCart ? (
                    <>
                        <p className="mb-2 text-slate-500 flex items-center gap-1">
                            <FaCheck className="text-teal-400" size={20} />
                            <span>Product added to cart</span>
                        </p>
                        <div className="max-w-[300px]">
                            <Button
                                label="View Cart"
                                outline
                                onClick={() => router.push('/cart')}
                            />
                        </div>
                    </>
                ) : (
                    <>
                        <div className="mb-4">
                            <label htmlFor="carat" className="font-semibold">Carat:</label>
                            <select
                                id="carat"
                                className="ml-2 border border-gray-300 rounded px-3 py-1"
                                value={cartProduct.carat}
                                onChange={handleCaratChange}
                            >
                                <option value="1 carat">1 carat</option>
                                <option value="2 carats">2 carats</option>
                                <option value="3 carats">3 carats</option>
                            </select>
                        </div>
                        <hr className="w-[30%] my-2" />
                        <div className="mb-4">
                            <label className="font-semibold">Buy With:</label>
                            <div className="flex items-center ml-2">
                                <input
                                    type="radio"
                                    id="none"
                                    name="buywith"
                                    value="none"
                                    checked={cartProduct.buywith === "none"}
                                    onChange={() => handleBuyWithChange('none')}
                                    className="mr-1"
                                />
                                <label htmlFor="none" className="mr-4">None</label>

                                <input
                                    type="radio"
                                    id="rings"
                                    name="buywith"
                                    value="rings"
                                    checked={cartProduct.buywith === "rings"}
                                    onChange={() => handleBuyWithChange('rings')}
                                    className="mr-1"
                                />
                                <label htmlFor="rings" className="mr-4">Rings</label>
                            </div>
                        </div>
                        <hr className="w-[30%] my-2" />
                        {cartProduct.buywith === 'rings' && (
                            <div className="mb-4">
                                <label className="font-semibold">Design:</label>
                                <div className="flex items-center ml-2">
                                    <input
                                        type="radio"
                                        id="design1"
                                        name="design"
                                        value="design1"
                                        checked={designSelected === 'design1'}
                                        onChange={() => handleDesignChange('design1')}
                                        className="mr-1"
                                    />
                                    <label htmlFor="design1" className="mr-4">Design 1</label>

                                    <input
                                        type="radio"
                                        id="design2"
                                        name="design"
                                        value="design2"
                                        checked={designSelected === 'design2'}
                                        onChange={() => handleDesignChange('design2')}
                                        className="mr-1"
                                    />
                                    <label htmlFor="design2" className="mr-4">Design 2</label>
                                </div>
                            </div>
                        )}
                        <hr className="w-[30%] my-2" />
                        <Setquantity
                            cartProduct={cartProduct}
                            handleqtyincrease={handleQtyIncrease}
                            handleqtydecrease={handleQtyDecrease}
                        />
                        <hr className="w-[30%] my-2" />
                        <div className="mb-4">
                            <span className="font-semibold">Price:</span> {formatprice(cartProduct.price)}
                        </div>
                        <div className="max-w-[300px]">
                            <Button
                                label="Add to cart"
                                onClick={() => handleAddProducttoCart(cartProduct)}
                                disabled={!product.inStock} // Disable button if product is out of stock
                            />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Pdetails;
