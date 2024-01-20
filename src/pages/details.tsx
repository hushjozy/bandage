"use client";

import { addToCart, addToWishlist, CartItem } from "@/redux/cartSlice";
import React from "react";
import Link from "../../node_modules/next/link";
import { useSearchParams } from "../../node_modules/next/navigation";
import { useDispatch,useSelector } from "react-redux";
import { RootState } from "../redux/store";
import ItemModal from "@/component/ItemModal";
import Image from "next/image";

interface DetailsProps {
    className?: string; 
}
interface Item {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  quantity: number
}
interface Product {
  title: string;
  price: number;
  thumbnail: string;
  discountPercentage: number;
  id:number
}
const Details: React.FC<DetailsProps> = ({ className }) => {
  const [productItem, setProductItem] = React.useState<Item>({
    id: 0,
    title: "",
    description: "",
  price: 0,
  discountPercentage: 0,
  rating: 0,
  stock: 0,
  brand: "",
  category: "",
    thumbnail: "",
    quantity: 0,
  images: []
  });
  const [products, setProducts] = React.useState<Product[]>([]);
  const [primeImage, setPrimeImage] = React.useState<string>("");
  const [menu, setMenu] = React.useState<boolean>(false);
  const dispatch = useDispatch();
  const searchParams = useSearchParams()
  const id: string | null = searchParams?.get("id") ?? null;
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const wishlist = useSelector((state: RootState) => state.cart.wishlistItems);
  const [isCartModalOpen, setCartModalOpen] = React.useState(false);
  const [isWishlistModalOpen, setWishlistModalOpen] = React.useState(false);


  const openCartModal = () => setCartModalOpen(true);
  const closeCartModal = () => setCartModalOpen(false);

  const openWishlistModal = () => setWishlistModalOpen(true);
  const closeWishlistModal = () => setWishlistModalOpen(false);

  const discountedPrice = productItem?.price - productItem?.price * (productItem?.discountPercentage / 100)
  console.log(id);
  
  React.useEffect(() => {
   console.log(cartItems);
   
  }, [cartItems])

  React.useEffect(() => {
    setPrimeImage(productItem?.thumbnail)
  }, [productItem?.thumbnail])
  
  
  const fetchSingleProduct = async (id:number) => {
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      setProductItem(data);

    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  const handleAddToCart = (item:CartItem) => {
    dispatch(addToCart(item));
  };
  const handleAddToWishlist = (item: Item) => {
    const { id, title, thumbnail } = item
    dispatch(addToWishlist({ id, title, thumbnail }));
  };

  const fetchProducts = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products?limit=${10}&select=id,title,price,thumbnail,discountPercentage`);
      const data = await response.json();
      const products: Product[] = data.products
      setProducts(products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  React.useEffect(() => {
    fetchProducts();
  }, [id]); 

  React.useEffect(() => {
    if (id !== null) {
      fetchSingleProduct(parseInt(id))
    }
  }, [id])
  
  return (
    <div className="items-start bg-white flex flex-col">
       {/* mobile nav */}
      <span className="bg-white flex max-w-[414px] flex-col px-9 py-11 hidden max-md:block w-full">
      <span className="self-stretch flex w-full justify-between gap-5 items-start">
        <Link href={"/"} className="text-slate-800 text-2xl font-bold leading-8 tracking-normal">
          Bandage
        </Link>
        <div className="flex items-stretch justify-between gap-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/889b2c5e161829f19840971eefb6d4b0174ecc0dc114d547539a02378590e315?"
            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/60ec04ea68518c0e50418593abcf28151bfde282d85a2e6b4c7e6d2e3b61c51b?"
            className="aspect-[1.09] object-contain object-center w-6 overflow-hidden shrink-0 max-w-full self-start"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f1a4aed3b45428e3c754fdb77224d5da7c17d55a38243e4042b4ed4d0ee1068?"
            className="aspect-[1.71] object-contain object-center w-6 overflow-hidden self-center shrink-0 max-w-full my-auto"
          onClick={()=> setMenu(!menu)}
            />
        </div>
        </span>
       {menu && <div className="w-full">
      <div className="text-neutral-500 text-center text-3xl leading-10 tracking-wide self-center whitespace-nowrap mt-24">
        Home
      </div>
      <div className="text-neutral-500 text-center text-3xl leading-10 tracking-wide self-center whitespace-nowrap mt-8">
        Product
      </div>
      <div className="text-neutral-500 text-center text-3xl leading-10 tracking-wide self-center whitespace-nowrap mt-8">
        Pricing
      </div>
      <div className="text-neutral-500 text-center text-3xl leading-10 tracking-wide self-center whitespace-nowrap mt-8 mb-12">
        Contact
          </div>
        </div>}
      </span>
      {/* desktop */}

      <div className="items-stretch bg-white flex w-full flex-col pb-2.5 max-md:max-w-full  block max-md:hidden">      <div className="justify-center items-stretch bg-teal-700 flex w-full flex-col pt-2.5 pb-1 px-px max-md:max-w-full">
        <span className="justify-between items-center flex w-full gap-5 px-6 max-md:max-w-full max-md:flex-wrap max-md:px-5">
          <div className="items-stretch self-stretch flex justify-between gap-2.5 py-px">
            <span className="items-center shadow-sm flex justify-between gap-1.5 p-2.5 rounded-md">
              <img   width={1000}
        height={1000}  alt=""
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d6b81201b162fed63ccdeed112c1878a69cc1a4c783eb37204f62d98c0d8515?"
                className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full my-auto"
              />
              <div className="text-white text-sm font-bold leading-6 tracking-wide self-stretch grow whitespace-nowrap">
                (225) 555-0118
              </div>
            </span>
            <span className="items-center flex justify-between gap-1.5 p-2.5 rounded-md">
              <img   width={1000}
        height={1000}  alt=""
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f962c81d22cdf4fad746c4e87c87601f68a55ea1de7b165fe713a4d5103e90b7?"
                className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full my-auto"
              />
              <div className="text-white text-sm font-bold leading-6 tracking-wide self-stretch grow whitespace-nowrap">
                michelle.rivera@example.com
              </div>
            </span>
          </div>
          <div className="text-white text-sm font-bold leading-6 tracking-wide grow shrink basis-auto my-auto">
            Follow Us and get a chance to win 80% off
          </div>
          <span className="self-stretch flex justify-between gap-2.5 p-2.5 items-start">
            <div className="text-white text-sm font-bold leading-6 tracking-wide grow whitespace-nowrap">
              Follow Us :
            </div>
            <img   width={1000}
        height={1000}  alt=""
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2992767a87761d743fb122ddcfaa122875ae2399b2d752159c448dad3f3713b?"
              className="aspect-[4.62] object-contain object-center w-[120px] justify-center items-start overflow-hidden self-stretch shrink-0 max-w-full"
            />
          </span>
        </span>
      </div>
      <div className="flex items-center justify-between gap-5 mt-3.5 mx-7 px-px max-md:max-w-full max-md:flex-wrap max-md:mr-2.5">
        
      <span className="flex items-stretch justify-between gap-20 w-full px-16 max-md:flex-wrap">
      <Link href={"/"} className="text-slate-800 text-2xl font-bold leading-8 w-70 tracking-normal my-auto">
        Bandage
      </Link>
      <span className="items-start self-center flex justify-between gap-3 my-auto px-px py-1.5">
        <div className="text-neutral-500 text-center text-sm font-bold leading-6 tracking-wide grow whitespace-nowrap self-start">
          Home
        </div>
        <div className="text-slate-800 text-sm font-medium leading-7 tracking-wide self-start">
          Shop
        </div>
        <Image   width={1000}
        height={1000}  alt=""
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8bb73af223622f27b9e8a2c9b5467fd504f8aa16111e52b72d33d7b4aeea987f?"
          className="aspect-[2] object-contain object-center w-2.5 fill-slate-800 overflow-hidden self-center shrink-0 max-w-full my-auto"
        />
        <div className="text-neutral-500 text-center text-sm font-bold leading-6 tracking-wide self-start">
          About
        </div>
        <div className="text-neutral-500 text-center text-sm font-bold leading-6 tracking-wide self-start">
          Blog
        </div>
        <div className="text-neutral-500 text-center text-sm font-bold leading-6 tracking-wide self-start">
          Contact
        </div>
        <div className="text-neutral-500 text-center text-sm font-bold leading-6 tracking-wide grow whitespace-nowrap self-start">
          Pages
        </div>
      </span>
      <div className="items-start flex gap-0">
        <span className="items-center self-stretch flex justify-between gap-1.5 p-4 rounded-[37px]">
          <img   width={1000}
        height={1000}  alt=""
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1eadfb9248208403eb804eaad83d89d509dac52ad6f36958ed05e4331e33a720?"
            className="aspect-square object-contain object-center w-3 overflow-hidden shrink-0 max-w-full my-auto"
          />
          <div className="text-sky-500 text-center text-sm font-bold leading-6 tracking-wide self-stretch grow whitespace-nowrap">
            Login / Register
          </div>
        </span>
        <img   width={1000}
        height={1000}  alt=""
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c53e819623fd3eaf742e83aa54e2ac16d02c3bfa5f2c67a6716b6662fbd0bdf?"
          className="aspect-[1.02] object-contain object-center w-[47px] justify-center items-center overflow-hidden self-center shrink-0 max-w-full my-auto"
        />
        <span className="items-stretch self-center flex gap-1.5 my-auto p-4 rounded-[37px]">
          <img   width={1000}
        height={1000}  alt=""
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca76212e9ea9401542ed3c60931591c6430bd03e51d2eb932d3635605e2d8ff0?"
            className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
            onClick={()=>openCartModal()}
            />
          <div className="text-sky-500 text-center text-xs leading-4 tracking-wide">
           {cartItems?.length|| 0}
          </div>
        </span>
        <span className="items-stretch self-center flex gap-1.5 my-auto p-4 rounded-[37px]">
          <img   width={1000}
        height={1000}  alt=""
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b8456cdd6f6f34dec7b3983135cb608991b2fc120bbfa2208587acc66c889a2?"
            className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
            onClick={()=>openWishlistModal()}

            />
          <div className="text-sky-500 text-center text-xs leading-4 tracking-wide">
            {wishlist?.length || 0}
          </div>
        </span>
      </div>
    </span>
      </div>
    </div>
    
     
      <div className="bg-neutral-50 self-stretch flex w-full flex-col justify-center mt-2.5 px-16 py-6 items-start max-md:max-w-full max-md:px-5">
        <span className="items-center flex gap-4 ml-36 py-2.5 max-md:ml-2.5">
          <div className="text-slate-800 text-center text-sm font-bold leading-6 tracking-wide self-stretch">
            Home
          </div>
          <img   width={1000}
        height={1000}  alt=""
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5422296368b8cfcdb259bae1492107f340518b5a7c8f7a1faea106acf39dcf4d?"
            className="aspect-[0.56] object-contain object-center w-[9px] overflow-hidden shrink-0 max-w-full my-auto"
          />
          <div className="text-stone-300 text-center text-sm font-bold leading-6 tracking-wide self-stretch">
            Shop
          </div>
        </span>
      </div>
      <div className="justify-center items-center self-stretch bg-neutral-50 flex w-full flex-col pb-12 px-16 max-md:max-w-full max-md:px-5">
        <div className="w-[1050px] max-w-full py-0.5 max-md:pr-5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            {/* <div className="flex flex-col items-stretch w-[53%] max-md:w-full max-md:ml-0">
              <Image   width={1000}
        height={1000}  alt=""
                src={productItem.thumbnail}
                className="aspect-[0.93] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
              />
            </div> */}

<div className="flex flex-col items-stretch w-[53%] max-md:w-full max-md:ml-0">
      <div className="flex-col overflow-hidden relative flex min-h-[450px] w-full justify-center items-stretch pl-10 pr-9 py-12 max-md:max-w-full max-md:px-5">
        <Image   width={1000}
        height={1000} alt="product image"
          src={primeImage}
          className="absolute h-full w-full object-cover object-center inset-0"
        />
        <div className="relative flex items-stretch justify-end gap-[89%] mt-[17%] mb-16 max-md:max-w-full max-md:flex-wrap max-md:my-10">
        {primeImage === productItem?.thumbnail && <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/865eb41b8828bb22652a9d28e58c38ee65931e80c8cd680fc9c009b7201ce49c?"
                        className="aspect-[0.55] object-contain object-center w-6 justify-center items-center overflow-hidden shrink-0 max-w-full"
                      onClick={()=>setPrimeImage(productItem?.images[0])}
                    />} 
           {
                    productItem?.images?.map((image:string,i:number) => {
                      if (image === primeImage) {
                        return <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e92b9190747e578acc595c508360a2c58f8338834297efc604fbdff2f416d29?"                        className="aspect-[0.55] object-contain object-center w-6 justify-center items-center overflow-hidden shrink-0 max-w-full"
                      onClick={()=>setPrimeImage(primeImage === productItem?.images[productItem?.images?.length-1] ? productItem?.thumbnail: productItem?.images[i+1])}
                    />
                      }
                     
                    })
                  }
                 
        </div>
      </div>
      <div className="flex w-[219px] max-w-full items-stretch gap-5 mt-5 self-start">
      {
                    productItem?.images.map((image) => {
                      return(<img
                      loading="lazy"
                      src={image}
                      className="aspect-[1.33] object-contain object-center w-full justify-center items-center overflow-hidden shrink-0 flex-1"
                    />)
                    })
          }
               
       
      </div>
    </div>
            <div className="flex flex-col items-stretch w-[47%] ml-5 max-md:w-full max-md:ml-0">
              <span className="flex flex-col mt-5 items-start max-md:max-w-full max-md:mt-10">
                <div className="text-slate-800 text-xl leading-8 tracking-wide self-stretch max-md:max-w-full">
                  {productItem?.title}
                </div>
                <span className="flex gap-2.5 mt-4 items-start">
                  <div className="items-stretch flex gap-1.5">
                    <img   width={40}
        height={40}   alt=""
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8821eaa30b394c533db44fc150210b48d1153a938d99f9b5ed9af2cd3af34e90?"
                      className="aspect-square object-contain object-center w-[22px] overflow-hidden shrink-0 max-w-full"
                    />
                    <img   width={40}
        height={40}   alt=""
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/be8f5fda7d73bc5e6d0f3ea4e0e61d61464ac599c05b3aa58f37291e27a43c38?"
                      className="aspect-square object-contain object-center w-[22px] overflow-hidden shrink-0 max-w-full"
                    />
                    <img   width={40}
        height={40}  alt=""
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/76c6a044048f72e129f169c6b838cb664836a80cae66aef9788b984b19fd46f1?"
                      className="aspect-square object-contain object-center w-[22px] overflow-hidden shrink-0 max-w-full"
                    />
                    <img   width={40}
        height={40}   alt=""
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff72e68d5389c7c4ea1b76757295b3c1111a45779f6fe1a4b4c15616f16dd264?"
                      className="aspect-square object-contain object-center w-[22px] overflow-hidden shrink-0 max-w-full"
                    />
                    <img   width={40}
        height={40}   alt=""
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9db51f2767cfc0935f3f7a28db455cd5dde1c17e36066af2834e6ef491e146a7?"
                      className="aspect-square object-contain object-center w-[22px] overflow-hidden shrink-0 max-w-full"
                    />
                  </div>
                  <div className="text-neutral-500 text-sm font-bold leading-6 tracking-wide self-stretch grow whitespace-nowrap">
                    10 Reviews
                  </div>
                </span>
                <div className="text-slate-800 text-center text-2xl font-bold leading-8 tracking-normal self-stretch mt-6 max-md:max-w-full">
                  ${discountedPrice.toFixed(2)}
                </div>
                <span className="items-stretch flex gap-1.5 mt-2">
                  <div className="text-neutral-500 text-sm font-bold leading-6 tracking-wide grow whitespace-nowrap">
                    Availability :
                  </div>
                  <div className="text-sky-500 text-sm font-bold leading-6 tracking-wide grow whitespace-nowrap">
                    In Stock{" "}
                  </div>
                </span>
                <div className="bg-stone-300 self-stretch shrink-0 h-px mt-28 max-md:max-w-full max-md:mt-10" />
                <div className="items-stretch flex w-[150px] max-w-full gap-2.5 mt-7">
                  <div className="flex shrink-0 h-[30px] flex-col flex-1 bg-sky-500 rounded-[50%]" />
                  <div className="flex shrink-0 h-[30px] flex-col flex-1 bg-green-500 rounded-[50%]" />
                  <div className="flex shrink-0 h-[30px] flex-col flex-1 bg-orange-400 rounded-[50%]" />
                  <div className="flex shrink-0 h-[30px] flex-col flex-1 bg-slate-800 rounded-[50%]" />
                </div>
                <div className="items-start self-stretch flex gap-2.5 mt-16 pr-20 max-md:max-w-full max-md:flex-wrap max-md:mt-10 max-md:pr-5">
                  <span className="text-white text-center text-sm font-bold leading-6 tracking-wide whitespace-nowrap items-stretch bg-sky-500 self-stretch grow justify-center px-5 py-2.5 rounded-md">
                    Select Options
                  </span>
                  <img   width={1000}
        height={1000}  alt=""
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/302f9fb81fc31d29023e1deb4e7d6bbd121e1725d8e19ef423a3c7bfd70a44ec?"
                    className="aspect-square object-contain object-center w-10 justify-center items-center overflow-hidden shrink-0 max-w-full self-start"
                    onClick={()=>handleAddToWishlist(productItem)}

                  />
                  <img   width={1000}
        height={1000}  alt=""
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/68cb672f9d1ba10ec9ed92bcd129fb9bf82593728d69d212ae41f0465e38821c?"
                    className="aspect-square object-contain object-center w-10 justify-center items-center overflow-hidden shrink-0 max-w-full self-start"
                  
                  onClick={()=>handleAddToCart(productItem)}/>
                  <img   width={1000}
        height={1000}  alt=""
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5275ec0ff01b3fa42c2254ff7701fd1cbe7542ea1b8716022578ca7a843b197d?"
                    className="aspect-square object-contain object-center w-10 justify-center items-center overflow-hidden shrink-0 max-w-full self-start"
                  />
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-center items-stretch self-stretch bg-white flex w-full flex-col pb-12 max-md:max-w-full">
        <div className="justify-center items-center bg-white flex w-full flex-col px-16 py-2 max-md:max-w-full max-md:px-5">
          <div className="flex w-full max-w-[1049px] flex-col items-center max-md:max-w-full">
            <span className="flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
              <div className="text-neutral-500 text-center text-sm font-semibold leading-6 tracking-wide self-center whitespace-nowrap my-auto">
                Description
              </div>
              <div className="text-neutral-500 text-center text-sm font-bold leading-6 tracking-wide my-auto">
                Additional Information
              </div>
              <span className="justify-between items-stretch flex gap-2 p-6 max-md:px-5">
                <div className="text-neutral-500 text-center text-sm font-bold leading-6 tracking-wide grow whitespace-nowrap">
                  Reviews
                </div>
                <div className="text-teal-700 text-center text-sm font-bold leading-6 tracking-wide grow whitespace-nowrap">
                  (0)
                </div>
              </span>
            </span>
            <div className="bg-gray-200 self-stretch shrink-0 h-px max-md:max-w-full" />
          </div>
        </div>
        <div className="self-center w-full max-w-[1056px] mt-10 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[58%] max-md:w-full max-md:ml-0">
              <span className="items-stretch flex flex-col pb-6 px-5 rounded-lg max-md:max-w-full max-md:mt-8">
                <div className="text-slate-800 text-2xl font-bold leading-8 tracking-normal max-md:max-w-full">
                  the quick fox jumps over{" "}
                </div>
                <div className="text-neutral-500 text-sm leading-5 tracking-wide mt-8 max-md:max-w-full">
                 {productItem?.description}
                </div>
                {/* <span className="text-neutral-500 text-sm leading-5 tracking-wide items-stretch justify-center mt-8 pl-6 max-md:max-w-full max-md:pl-5">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </span>
                <div className="text-neutral-500 text-sm leading-5 tracking-wide mt-8 max-md:max-w-full">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </div> */}
              </span>
            </div>
            <div className="flex flex-col items-stretch w-[42%] ml-5 max-md:w-full max-md:ml-0">
              <Image   width={1000}
        height={1000}  alt=""
                src={productItem?.images && productItem?.images[0]}
                className="aspect-[1.09] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-8"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="justify-center items-center bg-neutral-50 self-stretch flex w-full flex-col px-16 max-md:max-w-full max-md:px-5">
        <span className="items-stretch flex w-full max-w-[1124px] flex-col px-10 py-12 max-md:max-w-full max-md:px-5">
          <div className="text-slate-800 text-center text-2xl font-bold leading-8 tracking-normal max-md:max-w-full">
            BESTSELLER PRODUCTS
          </div>
          <div className="bg-gray-200 flex shrink-0 h-0.5 flex-col mt-6 max-md:max-w-full" />
          {/* <div className="mt-6 px-px max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0">
                <div className="items-stretch bg-white flex grow flex-col w-full max-md:mt-8">
                  <Image   width={1000}
        height={1000}  alt=""
                        src="..."
                    className="aspect-[0.85] object-contain object-center w-full overflow-hidden"
                  />
                  <span className="items-stretch flex flex-col pl-6 pr-16 py-8 max-md:px-5">
                    <div className="text-slate-800 text-base font-bold leading-6 tracking-normal whitespace-nowrap">
                      Graphic Design
                    </div>
                    <div className="text-neutral-500 text-sm font-bold leading-6 tracking-wide whitespace-nowrap mt-2.5">
                      English Department
                    </div>
                    <span className="items-stretch flex justify-between gap-1.5 mt-2.5 px-1 py-1.5">
                      <div className="text-stone-300 text-center text-base font-bold leading-6 tracking-normal grow whitespace-nowrap">
                        $16.48
                      </div>
                      <div className="text-teal-700 text-center text-base font-bold leading-6 tracking-normal grow whitespace-nowrap">
                        $6.48
                      </div>
                    </span>
                  </span>
                </div>
              </div>

            </div>
          </div> */}
        {/* map render item here */}
        <div className="grid gap-5 max-w-full md:grid-cols-2 lg:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {products?.map((product, index) => {
          const discountedPrice= product?.price - product?.price  * (product?.discountPercentage/100)
          return (
            <Link
            href={{
              pathname: `/details`,
              query: { id: product?.id }
            }}
            passHref
            className="bg-white flex flex-col max-w-full"            key={index}
          >
              <Image   width={183}
        height={238}  
                src={product?.thumbnail}
                className="aspect-[0.77] object-cover object-center w-full h-[238px] overflow-hidden"
                alt={product?.title}
              />
              <span className="flex flex-col px-5 py-8">
                <div className="text-slate-800 text-center text-base font-bold leading-6 tracking-normal whitespace-nowrap">
                  {product?.title}
                </div>
                <div className="text-neutral-500 text-center text-sm font-bold leading-6 tracking-wide whitespace-nowrap mt-2.5">
                  English Department
                </div>
                <span className="flex gap-1.5 mt-2.5 px-1 py-1.5">
                  <div className="text-stone-300 text-center text-base font-bold leading-6 tracking-normal whitespace-nowrap">
                    ${product?.price}
                  </div>
                  <div className="text-teal-700 text-center text-base font-bold leading-6 tracking-normal whitespace-nowrap">
                    ${discountedPrice.toFixed(2)}
                  </div>
                </span>
              </span>
            </Link>
          );
        })}
      </div>
        </span>
      </div>
      <div className="justify-center items-center bg-neutral-50 self-stretch flex w-full flex-col px-16 max-md:max-w-full max-md:px-5">
        <div className="justify-between items-start flex w-[1054px] max-w-full gap-5 pl-6 pr-9 py-12 max-md:flex-wrap max-md:px-5">
          <img   width={1000}
        height={1000}  alt=""
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b16780f8c7830a78d2dec8cd8d87b469e112bdb78a978524a885328abbf4b66e?"
            className="aspect-[3.03] object-contain object-center w-[103px] overflow-hidden self-center shrink-0 max-w-full my-auto"
          />
          <img   width={1000}
        height={1000}  alt=""
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/211df5a86a90b2699d8c6a697fcde8386420556914135a3a4e3fb1c056481c13?"
            className="aspect-[1.41] object-contain object-center w-[83px] overflow-hidden self-center shrink-0 max-w-full my-auto"
          />
          <img   width={1000}
        height={1000}  alt=""
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/326019a53ffebfbbb16de0ea698488e054da04050cb81cd209ce0225bda70432?"
            className="aspect-[1.36] object-contain object-center w-[102px] overflow-hidden self-stretch shrink-0 max-w-full"
          />
          <img   width={1000}
        height={1000}  alt=""
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c768580bd1d7433f119840bc13e1bd6f960e3fa0b50b84c4a12f7016c2b0949d?"
            className="aspect-[2.45] object-contain object-center w-[103px] overflow-hidden self-center shrink-0 max-w-full my-auto"
          />
          <img   width={1000}
        height={1000}  alt=""
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/48e09736f6b74251e0ac02ad166cd73f63966a10c289c61956f2e7c8adad8c10?"
            className="aspect-[1.68] object-contain object-center w-[104px] overflow-hidden self-center shrink-0 max-w-full my-auto"
          />
          <img   width={1000}
        height={1000}  alt=""
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c2eb7c85a0d2df1efbb3ba9ccb2f660d967a079911ce0c2f660bad2d1e14d03?"
            className="aspect-[1.06] object-contain object-center w-[76px] overflow-hidden self-center shrink-0 max-w-full my-auto"
          />
        </div>
      </div>
      <div className="bg-white flex w-full flex-col items-stretch max-md:max-w-full">
    <div className="justify-center items-center bg-neutral-50 flex w-full flex-col pt-10 pb-1 px-16 max-md:max-w-full max-md:px-5">
      <div className="flex w-full max-w-[1057px] flex-col items-stretch max-md:max-w-full">
        <span className="flex w-full justify-between gap-5 pr-16 py-4 items-start max-md:max-w-full max-md:flex-wrap max-md:pr-5">
          <div className="text-slate-800 text-2xl font-bold leading-8 tracking-normal flex-1">
            Bandage
          </div>
          <div className="justify-center items-center flex gap-5">
            <img   width={1000}
        height={1000}  alt=""
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b6ea2b6c9bed5bb9214a881a58c1a58c8d8f6718a1d00d552a8d555ab0dee2ae?"
              className="aspect-square object-contain object-center w-6 justify-center items-center overflow-hidden self-stretch shrink-0 max-w-full"
            />
            <img   width={1000}
        height={1000}  alt=""
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd0846c47bf4c6bb38f8a2f1c3e1b1c4a4f24cf2d52ed7154d7a70c7d92c4136?"
              className="aspect-square object-contain object-center w-6 justify-center items-center overflow-hidden self-stretch shrink-0 max-w-full"
            />
            <img   width={1000}
        height={1000}  alt=""
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/283d60a25e2cccfbbbb1e7d4a95fc54e2398679a4e7cdfc18b03188cc86ee066?"
              className="aspect-[1.2] object-contain object-center w-6 justify-center items-center overflow-hidden shrink-0 max-w-full my-auto"
            />
          </div>
        </span>
        <div className="bg-neutral-200 shrink-0 h-px mt-10 max-md:max-w-full" />
      </div>
    </div>
    <div className="justify-center items-center bg-white flex w-full flex-col px-16 py-12 max-md:max-w-full max-md:px-5">
      <div className="items-start flex justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
        <span className="items-stretch self-stretch flex basis-[0%] flex-col pr-8 max-md:pr-5">
          <div className="text-slate-800 text-base font-bold leading-6 tracking-normal whitespace-nowrap">
            Company Info
          </div>
          <div className="text-neutral-500 text-sm font-bold leading-6 tracking-wide mt-5">
            About Us
          </div>
          <div className="text-neutral-500 text-sm font-bold leading-6 tracking-wide mt-2.5">
            Carrier
          </div>
          <div className="text-neutral-500 text-sm font-bold leading-6 tracking-wide whitespace-nowrap mt-2.5">
            We are hiring
          </div>
          <div className="text-neutral-500 text-sm font-bold leading-6 tracking-wide mt-2.5">
            Blog
          </div>
        </span>
        <span className="items-stretch self-stretch flex basis-[0%] flex-col pr-14 max-md:pr-5">
          <div className="text-slate-800 text-base font-bold leading-6 tracking-normal">
            Legal
          </div>
          <div className="text-neutral-500 text-sm font-bold leading-6 tracking-wide mt-5">
            About Us
          </div>
          <div className="text-neutral-500 text-sm font-bold leading-6 tracking-wide mt-2.5">
            Carrier
          </div>
          <div className="text-neutral-500 text-sm font-bold leading-6 tracking-wide whitespace-nowrap mt-2.5">
            We are hiring
          </div>
          <div className="text-neutral-500 text-sm font-bold leading-6 tracking-wide mt-2.5">
            Blog
          </div>
        </span>
        <span className="items-stretch self-stretch flex basis-[0%] flex-col pr-1.5">
          <div className="text-slate-800 text-base font-bold leading-6 tracking-normal">
            Features
          </div>
          <div className="text-neutral-500 text-sm font-bold leading-6 tracking-wide whitespace-nowrap mt-5">
            Business Marketing
          </div>
          <div className="text-neutral-500 text-sm font-bold leading-6 tracking-wide mt-2.5">
            User Analytic
          </div>
          <div className="text-neutral-500 text-sm font-bold leading-6 tracking-wide mt-2.5">
            Live Chat
          </div>
          <div className="text-neutral-500 text-sm font-bold leading-6 tracking-wide whitespace-nowrap mt-2.5">
            Unlimited Support
          </div>
        </span>
        <span className="items-stretch self-stretch flex basis-[0%] flex-col pr-10 max-md:pr-5">
          <div className="text-slate-800 text-base font-bold leading-6 tracking-normal whitespace-nowrap">
            Resources
          </div>
          <div className="text-neutral-500 text-sm font-bold leading-6 tracking-wide whitespace-nowrap mt-5">
            IOS & Android
          </div>
          <div className="text-neutral-500 text-sm font-bold leading-6 tracking-wide whitespace-nowrap mt-2.5">
            Watch a Demo
          </div>
          <div className="text-neutral-500 text-sm font-bold leading-6 tracking-wide mt-2.5">
            Customers
          </div>
          <div className="text-neutral-500 text-sm font-bold leading-6 tracking-wide mt-2.5">
            API
          </div>
        </span>
        <span className="items-stretch flex grow basis-[0%] flex-col pb-2 self-start">
          <div className="text-slate-800 text-base font-bold leading-6 tracking-normal">
            Get In Touch
          </div>
          <span className="items-center border bg-stone-50 flex justify-between gap-5 mt-5 pl-5 rounded-md border-solid border-neutral-200">
            <div className="text-neutral-500 text-sm leading-7 tracking-wide my-auto">
              Your Email
            </div>
            <span className="text-white text-center text-sm leading-7 tracking-wide whitespace-nowrap justify-center items-stretch border bg-sky-500 self-stretch p-6 rounded-none border-solid border-neutral-200 max-md:px-5">
              Subscribe
            </span>
          </span>
          <div className="text-neutral-500 text-xs leading-7 tracking-wide mt-2.5">
            Lore imp sum dolor Amit
          </div>
        </span>
      </div>
    </div>
    <span className="text-neutral-500 text-sm font-bold leading-6 tracking-wide whitespace-nowrap justify-center bg-neutral-50 w-full pl-48 pr-16 py-6 items-start max-md:max-w-full max-md:pl-8 max-md:pr-5">
      Made With Love By Finland All Right Reserved{" "}
    </span>
  </div>
      <ItemModal isOpen={isCartModalOpen} onClose={()=>closeCartModal()} items={cartItems} isCart={true}/>
      <ItemModal isOpen={isWishlistModalOpen} onClose={()=>closeWishlistModal()} items={wishlist} isCart={false}/>
    </div>
  );
}
export default Details;

