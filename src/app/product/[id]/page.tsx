import Container from "@/app/Container";
import { products } from "../../../../utils/products";
import Pdetails from "./Pdetails";

interface Iparams {
    id?: string; // Adjust the interface to match the route parameter
}

const id = ({ params }: { params: Iparams }) => {
    console.log("params", params); // Check if params object is correctly received
    const { id: productId } = params; // Rename id to productId for clarity
    console.log("productId", productId); // Check if productId is correctly extracted
    const product = products.find((item) => item.id === productId);

    if (!product) {
        console.log("Product not found for productId:", productId);
    }

    return (
        <div className="p-8">
            <Container>
                {product ? (
                    <Pdetails product={product} />
                ) : (
                    <p>Product not found</p>
                )}
            </Container>
        </div>
    );
}

export default id;

