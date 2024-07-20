import { createContext, useCallback, useContext, useEffect, useState, useMemo } from "react";
import { toast } from "react-hot-toast";
import { CartProductType } from "@/app/product/[id]/Pdetails";

type CartContextType = {
  carttotalqty: number;
  carttotalamount: number;
  cartproducts: CartProductType[] | null;
  handleAddProducttoCart: (product: CartProductType) => void;
  handleRemoveproduct: (product: CartProductType) => void;
  handlecartqtyincrease: (product: CartProductType) => void;
  handlecartqtydecrease: (product: CartProductType) => void;
  handleClearCart: () => void;
};

export const cartcontext = createContext<CartContextType | null>(null);

interface Props {
  children: React.ReactNode;
}

export const Cartcontextprovider = ({ children }: Props) => {
  const [carttotalqty, setCartTotalQty] = useState(0);
  const [cartproducts, setCartProducts] = useState<CartProductType[] | null>(null);
  const [carttotalamount, setCartTotalAmount] = useState(0);

  useEffect(() => {
    const cartitems = localStorage.getItem("eshopCartItems");
    const cartproducts: CartProductType[] | null = cartitems ? JSON.parse(cartitems) : null;
    if (cartproducts) {
      setCartProducts(cartproducts);
      const totalQty = cartproducts.reduce((acc, product) => acc + product.quantity, 0);
      setCartTotalQty(totalQty);
    }
  }, []);

  useEffect(() => {
    const getTotals = () => {
      if (cartproducts) {
        const { total, qty } = cartproducts.reduce(
          (acc, item) => {
            const itemTotal = item.price * item.quantity;
            acc.total += itemTotal;
            acc.qty += item.quantity;
            return acc;
          },
          { total: 0, qty: 0 }
        );
        setCartTotalAmount(total);
        setCartTotalQty(qty);
      }
    };

    getTotals();
  }, [cartproducts]);

  const handleAddProducttoCart = useCallback((product: CartProductType) => {
    setCartProducts((prev) => {
      let updatedCart;
      if (prev) {
        const existingProduct = prev.find((p) => p.id === product.id);
        if (existingProduct) {
          updatedCart = prev.map((p) =>
            p.id === product.id ? { ...p, quantity: p.quantity + product.quantity } : p
          );
        } else {
          updatedCart = [...prev, product];
        }
      } else {
        updatedCart = [product];
      }

      debounceToast(() => toast.success("Product added to cart"));

      localStorage.setItem("eshopCartItems", JSON.stringify(updatedCart));

      const newTotalQty = updatedCart.reduce((acc, item) => acc + item.quantity, 0);
      setCartTotalQty(newTotalQty);

      return updatedCart;
    });
  }, []);

  const handleRemoveproduct = useCallback((product: CartProductType) => {
    setCartProducts((prev) => {
      if (prev) {
        const filteredProducts = prev.filter((item) => item.id !== product.id);

        const newTotalQty = filteredProducts.reduce((acc, item) => acc + item.quantity, 0);
        setCartTotalQty(newTotalQty);

        debounceToast(() => toast.success("Product removed"));

        localStorage.setItem("eshopCartItems", JSON.stringify(filteredProducts));

        return filteredProducts;
      }
      return prev;
    });
  }, []);

  const handlecartqtyincrease = useCallback((product: CartProductType) => {
    if (product.quantity === 99) {
      return toast.error("Oops! Maximum amount reached");
    }

    setCartProducts((prev) => {
      if (!prev) return prev;

      const updatedCart = prev.map((p) =>
        p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
      );

      localStorage.setItem("eshopCartItems", JSON.stringify(updatedCart));

      const newTotalQty = updatedCart.reduce((acc, item) => acc + item.quantity, 0);
      setCartTotalQty(newTotalQty);

      return updatedCart;
    });
  }, []);

  const handlecartqtydecrease = useCallback((product: CartProductType) => {
    if (product.quantity === 1) {
      return toast.error("Oops! Minimum amount reached");
    }

    setCartProducts((prev) => {
      if (!prev) return prev;

      const updatedCart = prev.map((p) =>
        p.id === product.id ? { ...p, quantity: p.quantity - 1 } : p
      );

      localStorage.setItem("eshopCartItems", JSON.stringify(updatedCart));

      const newTotalQty = updatedCart.reduce((acc, item) => acc + item.quantity, 0);
      setCartTotalQty(newTotalQty);

      return updatedCart;
    });
  }, []);

  const handleClearCart = useCallback(() => {
    setCartProducts(null);
    setCartTotalQty(0);
    localStorage.removeItem("eshopCartItems");
  }, []);

  const value = useMemo(
    () => ({
      carttotalqty,
      carttotalamount,
      cartproducts,
      handleAddProducttoCart,
      handleRemoveproduct,
      handlecartqtyincrease,
      handlecartqtydecrease,
      handleClearCart,
    }),
    [
      carttotalqty,
      carttotalamount,
      cartproducts,
      handleAddProducttoCart,
      handleRemoveproduct,
      handlecartqtyincrease,
      handlecartqtydecrease,
      handleClearCart,
    ]
  );

  return <cartcontext.Provider value={value}>{children}</cartcontext.Provider>;
};

export const useCart = () => {
  const context = useContext(cartcontext);
  if (context === null) {
    throw new Error("useCart must be used within a CartContextProvider");
  }
  return context;
};

// Helper function to debounce toast notifications
let toastTimeout: NodeJS.Timeout | null = null;

const debounceToast = (toastFunction: () => void, delay = 1000) => {
  if (toastTimeout) {
    clearTimeout(toastTimeout);
  }
  toastTimeout = setTimeout(() => {
    toastFunction();
    toastTimeout = null;
  }, delay);
};
