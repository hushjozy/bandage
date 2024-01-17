"use client";

import React from "react";
// import { useRouter } from "../../node_modules/next/navigation";
import Link from "next/link";
import Image from "next/image";

interface Product {
  title: string;
  price: number;
  thumbnail: string;
  discountPercentage: number;
  id:number
}

 const HomePage: React.FC = () => {
  const [products, setProducts] = React.useState<Product[]>([]);
   const [limit, setLimit] = React.useState<number>(10);
   const [loading, setLoading] = React.useState<boolean>(true);
  //  const router = useRouter();
   
  const fetchProducts = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${0}&select=id,title,price,thumbnail,discountPercentage`);
      const data = await response.json();
      const products: Product[] = data.products
      setProducts(products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  
  React.useEffect(() => {
    fetchProducts();
  }, [limit]); // Trigger the fetch when skip changes

  const handleReadMoreClick = () => {
    setLimit(10 + limit);
  };
 
  return (<div className="items-stretch bg-white flex flex-col">
  <div className="justify-end items-stretch bg-white flex w-full flex-col max-md:max-w-full">
    <div className="items-stretch bg-white flex w-full flex-col pb-2.5 max-md:max-w-full">
      <div className="justify-center items-stretch bg-teal-700 flex w-full flex-col pt-2.5 pb-1 px-px max-md:max-w-full">
        <span className="justify-between items-center flex w-full gap-5 px-6 max-md:max-w-full max-md:flex-wrap max-md:px-5">
          <div className="items-stretch self-stretch flex justify-between gap-2.5 py-px">
            <span className="items-center shadow-sm flex justify-between gap-1.5 p-2.5 rounded-md">
              <Image alt=""
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d6b81201b162fed63ccdeed112c1878a69cc1a4c783eb37204f62d98c0d8515?"
                className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full my-auto"
              />
              <div className="text-white text-sm font-bold leading-6 tracking-wide self-stretch grow whitespace-nowrap">
                (225) 555-0118
              </div>
            </span>
            <span className="items-center flex justify-between gap-1.5 p-2.5 rounded-md">
              <Image alt=""
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
            <Image alt=""
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2992767a87761d743fb122ddcfaa122875ae2399b2d752159c448dad3f3713b?"
              className="aspect-[4.62] object-contain object-center w-[120px] justify-center items-start overflow-hidden self-stretch shrink-0 max-w-full"
            />
          </span>
        </span>
      </div>
      <div className="flex items-center justify-between gap-5 mt-3.5 mx-7 px-px max-md:max-w-full max-md:flex-wrap max-md:mr-2.5">
        <span className="flex justify-between gap-5 my-auto items-start max-md:max-w-full max-md:flex-wrap">
          <div className="text-slate-800 text-2xl font-bold leading-8 tracking-normal">
            Bandage
          </div>
          <span className="items-start flex justify-between gap-3 px-px py-1.5">
            <div className="text-neutral-500 text-center text-sm font-bold leading-6 tracking-wide grow whitespace-nowrap self-start">
              Home
            </div>
            <div className="text-slate-800 text-sm font-medium leading-7 tracking-wide self-start">
              Shop
            </div>
            <Image alt=""
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
        </span>
        <div className="items-start self-stretch flex gap-0">
          <span className="items-center self-stretch flex justify-between gap-1.5 p-4 rounded-[37px]">
            <Image alt=""
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c3bd623dfc7aa3f6d5bc4ff64f5c8b31efdc00ba27c08eba747fcf217f3146f?"
              className="aspect-square object-contain object-center w-3 overflow-hidden shrink-0 max-w-full my-auto"
            />
            <div className="text-sky-500 text-center text-sm font-bold leading-6 tracking-wide self-stretch grow whitespace-nowrap">
              Login / Register
            </div>
          </span>
          <Image alt=""
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/281d10b5132f0fce5aacba06afdfbd473264524ec1e22a7e4a94074aaef6d6c6?"
            className="aspect-square object-contain object-center w-[46px] justify-center items-center overflow-hidden self-center shrink-0 max-w-full my-auto"
          />
          <span className="items-stretch self-center flex gap-1.5 my-auto p-4 rounded-[37px]">
            <Image alt=""
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3fb16d261c5bca12e7bbbcf278163dab7e9a085929e46ac77c2181847e872c90?"
              className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
            />
            <div className="text-sky-500 text-center text-xs leading-4 tracking-wide">
              1
            </div>
          </span>
          <span className="items-stretch self-center flex gap-1.5 my-auto p-4 rounded-[37px]">
            <Image alt=""
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9a51693815bc9eefb1bcfab2ef47076e1f4ed5e4c3c46e4b90bde705c06c3bf?"
              className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
            />
            <div className="text-sky-500 text-center text-xs leading-4 tracking-wide">
              1
            </div>
          </span>
        </div>
      </div>
    </div>
    <div className="justify-center items-center bg-white flex w-full flex-col px-16 py-12 max-md:max-w-full max-md:px-5">
      <div className="w-full max-w-[1146px] mt-9 mb-8 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-2/5 max-md:w-full max-md:ml-0">
            <Image alt=""
              loading="lazy"
              src="/card-cover-5.png"
              className="aspect-[0.73] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-4"
            />
          </div>
          <div className="flex flex-col items-stretch w-3/5 ml-5 max-md:w-full max-md:ml-0">
            <div className="items-stretch flex grow flex-col max-md:max-w-full max-md:mt-4">
              <div className="bg-white flex flex-col justify-center items-stretch max-md:max-w-full">
                <div className="flex-col overflow-hidden relative flex min-h-[300px] w-full items-stretch pb-12 max-md:max-w-full">
                  <Image alt=""
                        src="/card-cover-6.jpg"
                    className="absolute h-full w-full object-cover object-center inset-0"
                  />
                  <span className="relative justify-center flex flex-col mb-20 pl-6 pr-20 py-6 items-start max-md:max-w-full max-md:mb-10 max-md:px-5">
                    <div className="text-green-500 text-sm font-bold leading-6 tracking-wide">
                      5 Items
                    </div>
                    <div className="text-slate-800 text-2xl font-bold leading-8 tracking-normal whitespace-nowrap mt-1.5">
                      FURNITURE
                    </div>
                    <div className="text-slate-800 text-sm font-bold leading-6 tracking-wide mt-1.5">
                      Read More
                    </div>
                  </span>
                </div>
              </div>
              <div className="mt-4 max-md:max-w-full">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                    <div className="bg-white flex grow flex-col justify-center items-stretch w-full max-md:mt-4">
                      <div className="flex-col overflow-hidden relative flex aspect-[1.1066666666666667] w-full items-stretch pb-12">
                        <Image alt=""
                                    src="/mediabg-cover.png"
                          className="absolute h-full w-full object-cover object-center inset-0"
                        />
                        <span className="relative justify-center flex flex-col mb-20 pl-6 pr-20 py-6 items-start max-md:mb-10 max-md:px-5">
                          <div className="text-green-500 text-sm font-bold leading-6 tracking-wide">
                            5 Items
                          </div>
                          <div className="text-slate-800 text-2xl font-bold leading-8 tracking-normal whitespace-nowrap mt-1.5">
                            FURNITURE
                          </div>
                          <div className="text-slate-800 text-sm font-bold leading-6 tracking-wide mt-1.5">
                            Read More
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                    <div className="bg-white flex grow flex-col justify-center items-stretch w-full max-md:mt-4">
                      <div className="flex-col overflow-hidden relative flex aspect-[1.1033333333333333] w-full items-stretch pb-12">
                        <Image alt=""
                                    src="/mediabg-cover1.png"
                          className="absolute h-full w-full object-cover object-center inset-0"
                        />
                        <span className="relative justify-center flex flex-col mb-20 pl-6 pr-20 py-6 items-start max-md:mb-10 max-md:px-5">
                          <div className="text-green-500 text-sm font-bold leading-6 tracking-wide">
                            5 Items
                          </div>
                          <div className="text-slate-800 text-2xl font-bold leading-8 tracking-normal whitespace-nowrap mt-1.5">
                            FURNITURE
                          </div>
                          <div className="text-slate-800 text-sm font-bold leading-6 tracking-wide mt-1.5">
                            Read More
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="justify-center items-center bg-white flex w-full flex-col px-16 max-md:max-w-full max-md:px-5">
    <div className="items-stretch flex w-full max-w-[1124px] flex-col pl-4 pr-6 py-12 max-md:max-w-full max-md:pr-5">
      <div className="items-center self-center flex w-[691px] max-w-full flex-col justify-center mt-8 px-16 max-md:px-5">
        <span className="flex flex-col items-stretch">
          <div className="text-neutral-500 text-center text-xl leading-8 tracking-wide self-center whitespace-nowrap">
            Featured Products
          </div>
          <div className="text-slate-800 text-center text-2xl font-bold leading-8 tracking-normal self-center whitespace-nowrap mt-2.5">
            BESTSELLER PRODUCTS
          </div>
          <div className="text-neutral-500 text-center text-sm leading-5 tracking-wide whitespace-nowrap mt-2.5">
            Problems trying to resolve the conflict between{" "}
          </div>
        </span>
      </div>
      <div className="grid grid-cols-5 gap-5 max-md:max-w-full max-md:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {/* map render item here */}
        {products?.map((product, index) => {
          const discountedPrice= product?.price - product?.price  * (product?.discountPercentage/100)
          return (
            <Link
            href={{
              pathname: `/details`, // Replace with path of your page component
              query: { id:product?.id }
            }}
            passHref
              className="bg-white flex-grow flex-shrink-0 max-w-[calc(20% - 1rem)] flex flex-col"
              key={index}
            >
              <Image 
                src={product?.thumbnail}
                className="aspect-[0.77] object-contain object-center w-full h-48 overflow-hidden"
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
                    ${discountedPrice}
                  </div>
                </span>
              </span>
            </Link>
          );
        })}
      </div>

      {limit < 100 && (
        <button
          className="text-sky-500 text-center text-sm font-bold leading-5 tracking-wide whitespace-nowrap items-stretch border border-[color:var(--primary-color,#23A6F0)] self-center justify-center mt-8 mb-8 px-10 py-4 rounded-md border-solid max-md:px-5"
          onClick={() => handleReadMoreClick()}
        >
          LOAD MORE PRODUCTS
        </button>
      )}
    </div>
  </div>
  <div className="justify-center items-center bg-white flex w-full flex-col pb-4 px-16 max-md:max-w-full max-md:px-5">
    <div className="items-center flex w-full max-w-[1050px] flex-col py-12 max-md:max-w-full">
      <div className="items-center flex w-[691px] max-w-full flex-col justify-center mt-8 px-16 max-md:px-5">
        <span className="flex flex-col items-stretch">
          <div className="text-neutral-500 text-center text-xl leading-8 tracking-wide self-center whitespace-nowrap">
            Featured Products
          </div>
          <div className="text-slate-800 text-center text-2xl font-bold leading-8 tracking-normal self-center whitespace-nowrap mt-2.5">
            THE BEST SERVICES
          </div>
          <div className="text-neutral-500 text-center text-sm leading-5 tracking-wide whitespace-nowrap mt-2.5">
            Problems trying to resolve the conflict between{" "}
          </div>
        </span>
      </div>
      <div className="justify-center self-stretch mt-20 mb-8 px-1.5 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
            <span className="items-center flex flex-col px-10 py-9 max-md:mt-10 max-md:px-5">
              <Image alt=""
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/65ec244dd5f4293dbe8c15fe07f110de1e06bb7396eb6f450d48d1cab776fb7f?"
                className="aspect-square object-contain object-center w-[72px] justify-center items-center overflow-hidden max-w-full"
              />
              <div className="text-slate-800 text-center text-2xl font-bold leading-8 tracking-normal self-stretch whitespace-nowrap mt-5">
                Easy Wins
              </div>
              <div className="text-neutral-500 text-center text-sm leading-5 tracking-wide self-stretch mt-5">
                Get your best looking smile now!
              </div>
            </span>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <span className="items-center flex grow flex-col px-10 py-9 max-md:mt-10 max-md:px-5">
              <Image alt=""
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c0769c781f3ea339142bb6e12e04edfe8a8e1924363c7bc9d5f82957dcbdb53?"
                className="aspect-square object-contain object-center w-[72px] justify-center items-center overflow-hidden max-w-full"
              />
              <div className="text-slate-800 text-center text-2xl font-bold leading-8 tracking-normal self-stretch whitespace-nowrap mt-5">
                Concrete
              </div>
              <div className="text-neutral-500 text-center text-sm leading-5 tracking-wide self-stretch mt-5">
                Defalcate is most focused in helping you discover your most
                beautiful smile
              </div>
            </span>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <span className="items-center flex flex-col px-10 py-9 max-md:mt-10 max-md:px-5">
              <Image alt=""
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae816ffed84647634f93cd0c9cf5f9327c0c0f021bb77b8472d130ee96370e1b?"
                className="aspect-square object-contain object-center w-[72px] justify-center items-center overflow-hidden max-w-full"
              />
              <div className="text-slate-800 text-center text-2xl font-bold leading-8 tracking-normal self-stretch whitespace-nowrap mt-5">
                Hack Growth
              </div>
              <div className="text-neutral-500 text-center text-sm leading-5 tracking-wide self-stretch mt-5">
                Overcame any hurdle or any other problem.
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="justify-center items-center bg-white flex w-full flex-col px-16 max-md:max-w-full max-md:px-5">
    <div className="items-center flex w-full max-w-[1050px] flex-col py-12 max-md:max-w-full">
      <div className="items-center flex w-[691px] max-w-full flex-col justify-center mt-16 px-16 max-md:mt-10 max-md:px-5">
        <span className="flex flex-col items-center">
          <div className="text-sky-500 text-center text-sm font-bold leading-6 tracking-wide whitespace-nowrap">
            Practice Advice
          </div>
          <div className="text-slate-800 text-center text-4xl font-bold leading-[50px] tracking-wide self-stretch whitespace-nowrap mt-2.5">
            Featured Posts
          </div>
        </span>
      </div>
      <div className="justify-center self-stretch mt-20 mb-10 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
            <div className="items-stretch shadow-sm bg-white flex grow flex-col w-full max-md:mt-2.5">
              <div className="flex-col overflow-hidden relative flex aspect-[1.1266666666666667] w-full pl-2.5 pr-16 pt-5 pb-12 items-start max-md:pr-5">
                <Image alt=""
                    src="/black.png"
                  className="absolute h-full w-full object-cover object-center inset-0"
                />
                <span className="relative text-white text-center text-sm font-bold leading-6 tracking-wide whitespace-nowrap items-stretch shadow-sm bg-red-500 aspect-[2.4166666666666665] justify-center mb-40 px-2.5 rounded max-md:mb-10">
                  NEW
                </span>
              </div>
              <span className="items-stretch flex flex-col pl-4 pr-6 py-8 max-md:pr-5">
                <span className="items-stretch flex gap-4">
                  <div className="text-blue-300 text-xs leading-4 tracking-wide">
                    Google
                  </div>
                  <div className="text-neutral-500 text-xs leading-4 tracking-wide">
                    Trending
                  </div>
                  <div className="text-neutral-500 text-xs leading-4 tracking-wide">
                    New
                  </div>
                </span>
                <div className="text-slate-800 text-xl leading-8 tracking-wide mt-2.5">
                  Loudest à la Madison #1 <br />
                  (L&quotintegral)
                </div>{" "}
                <div className="text-neutral-500 text-sm leading-5 tracking-wide mt-2.5">
                  We focus on ergonomics and meeting <br />
                  you where you work. It&quots only a <br />
                  keystroke away.
                </div>
                <div className="justify-between items-stretch flex w-full gap-5 mt-2.5 py-4">
                  <span className="items-stretch flex justify-between gap-1.5">
                    <Image alt=""
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2b0795ec04059ced668d46c14aacebfd8e11ebca99ea41f24126d252c002520?"
                      className="aspect-square object-contain object-center w-4 justify-center items-center overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="text-neutral-500 text-xs leading-4 tracking-wide grow whitespace-nowrap">
                      22 April 2021
                    </div>
                  </span>
                  <span className="flex justify-between gap-1.5 items-start">
                    <Image alt=""
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e9c4fb9171a3f086de5266f33b2aa3178c6da4820c582d6e967785e348505e34?"
                      className="aspect-[1.14] object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="text-neutral-500 text-xs leading-4 tracking-wide self-stretch grow whitespace-nowrap">
                      10 comments
                    </div>
                  </span>
                </div>
                <span className="items-stretch flex justify-between gap-2.5 mt-2.5 pr-5">
                  <div className="text-neutral-500 text-sm font-bold leading-6 tracking-wide grow shrink basis-auto">
                    Learn More
                  </div>
                  <Image alt=""
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/01c45fcadfb56d41bda9a80169692f0843c0d99828d658bacb835a09ab619318?"
                    className="aspect-[0.56] object-contain object-center w-[9px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                  />
                </span>
              </span>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[34%] ml-5 max-md:w-full max-md:ml-0">
            <div className="items-stretch shadow-sm bg-white flex grow flex-col w-full max-md:mt-2.5">
              <div className="flex-col overflow-hidden relative flex aspect-[1.16] w-full pl-5 pr-16 pt-5 pb-12 items-start max-md:pr-5">
                <Image alt=""
                    src="/white.png"
                  className="absolute h-full w-full object-cover object-center inset-0"
                />
                <span className="relative text-white text-center text-sm font-bold leading-6 tracking-wide whitespace-nowrap items-stretch shadow-sm bg-red-500 aspect-[2.4166666666666665] justify-center mb-40 px-2.5 rounded max-md:mb-10">
                  NEW
                </span>
              </div>
              <span className="items-stretch flex flex-col px-6 py-8 max-md:px-5">
                <span className="items-stretch flex gap-4">
                  <div className="text-blue-300 text-xs leading-4 tracking-wide">
                    Google
                  </div>
                  <div className="text-neutral-500 text-xs leading-4 tracking-wide">
                    Trending
                  </div>
                  <div className="text-neutral-500 text-xs leading-4 tracking-wide">
                    New
                  </div>
                </span>
                <div className="text-slate-800 text-xl leading-8 tracking-wide mt-2.5">
                  Loudest à la Madison #1 <br />
                  (L&quotintegral)
                </div>{" "}
                <div className="text-neutral-500 text-sm leading-5 tracking-wide mt-2.5">
                  We focus on ergonomics and meeting <br />
                  you where you work. It&quots only a <br />
                  keystroke away.
                </div>
                <div className="justify-between items-stretch flex w-full gap-5 mt-2.5 py-4">
                  <span className="items-stretch flex justify-between gap-1.5">
                    <Image alt=""
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1f74e5502a1284224305c0654ea17bff6ab9775170614398c213c74cae08194?"
                      className="aspect-square object-contain object-center w-4 justify-center items-center overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="text-neutral-500 text-xs leading-4 tracking-wide grow whitespace-nowrap">
                      22 April 2021
                    </div>
                  </span>
                  <span className="flex justify-between gap-1.5 items-start">
                    <Image alt=""
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9f7fbcdde0d34fff3ced0a1162dd3fd39962f871c3ca1fe0e7d3550f107cac0?"
                      className="aspect-[1.14] object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="text-neutral-500 text-xs leading-4 tracking-wide self-stretch grow whitespace-nowrap">
                      10 comments
                    </div>
                  </span>
                </div>
                <span className="items-stretch flex justify-between gap-2.5 mt-2.5 pr-5">
                  <div className="text-neutral-500 text-sm font-bold leading-6 tracking-wide grow shrink basis-auto">
                    Learn More
                  </div>
                  <Image alt=""
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad1306be578e7e9212b34a3393c61353ed3888e9169c2a94cb64b2598a8669b2?"
                    className="aspect-[0.56] object-contain object-center w-[9px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                  />
                </span>
              </span>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="items-stretch shadow-sm bg-white flex grow flex-col w-full max-md:mt-2.5">
              <div className="flex-col overflow-hidden relative flex aspect-[1.13] w-full pl-5 pr-16 pt-5 pb-12 items-start max-md:pr-5">
                <Image alt=""
                    src="/green.png"
                  className="absolute h-full w-full object-cover object-center inset-0"
                />
                <span className="relative text-white text-center text-sm font-bold leading-6 tracking-wide whitespace-nowrap items-stretch shadow-sm bg-red-500 aspect-[2.4166666666666665] justify-center mb-40 px-2.5 rounded max-md:mb-10">
                  NEW
                </span>
              </div>
              <span className="items-stretch flex flex-col pl-6 pr-4 py-8 max-md:pl-5">
                <span className="items-stretch flex gap-4">
                  <div className="text-blue-300 text-xs leading-4 tracking-wide">
                    Google
                  </div>
                  <div className="text-neutral-500 text-xs leading-4 tracking-wide">
                    Trending
                  </div>
                  <div className="text-neutral-500 text-xs leading-4 tracking-wide">
                    New
                  </div>
                </span>
                <div className="text-slate-800 text-xl leading-8 tracking-wide mt-2.5">
                  Loudest à la Madison #1 <br />
                  (L&quotintegral)
                </div>{" "}
                <div className="text-neutral-500 text-sm leading-5 tracking-wide mt-2.5">
                  We focus on ergonomics and meeting <br />
                  you where you work. It&quots only a <br />
                  keystroke away.
                </div>
                <div className="justify-between items-stretch flex w-full gap-5 mt-2.5 py-4">
                  <span className="items-stretch flex justify-between gap-1.5">
                    <Image alt=""
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8f9441a38b6d20a8052af12888c15028f826dd95aaa585d2c0162f44654586c6?"
                      className="aspect-square object-contain object-center w-4 justify-center items-center overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="text-neutral-500 text-xs leading-4 tracking-wide grow whitespace-nowrap">
                      22 April 2021
                    </div>
                  </span>
                  <span className="flex justify-between gap-1.5 items-start">
                    <Image alt=""
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/310b1c44b7857c79bc51bd16842e731ed02a7ef77b96270b7df2e886227b414e?"
                      className="aspect-[1.14] object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="text-neutral-500 text-xs leading-4 tracking-wide self-stretch grow whitespace-nowrap">
                      10 comments
                    </div>
                  </span>
                </div>
                <span className="items-stretch flex justify-between gap-2.5 mt-2.5 pr-5">
                  <div className="text-neutral-500 text-sm font-bold leading-6 tracking-wide grow shrink basis-auto">
                    Learn More
                  </div>
                  <Image alt=""
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ff647959f38c79e231f3bbd57f423cf0f9d2c6cfc066ea2daa8a00f6c5d2e2f?"
                    className="aspect-[0.56] object-contain object-center w-[9px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                  />
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="items-center bg-white flex w-full flex-col justify-center px-16 py-12 max-md:max-w-full max-md:px-5">
    <div className="justify-between w-full max-w-[1128px] my-8 p-12 max-md:max-w-full max-md:px-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
          <span className="items-center flex flex-col my-auto max-md:max-w-full max-md:mt-10">
            <div className="text-slate-800 text-center text-2xl font-bold leading-8 tracking-normal whitespace-nowrap">
              What they say about us
            </div>
            <span className="justify-center items-start bg-white self-stretch flex flex-col mt-7 py-8 rounded-md max-md:max-w-full">
              <Image alt=""
                src="/user1.png"
                className="aspect-square object-contain object-center w-[90px] justify-center items-center overflow-hidden self-center max-w-full"
              />
              <div className="items-stretch self-center flex w-[130px] max-w-full gap-1.5 mt-5">
                <Image alt=""
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/483bffad59283b826f53c2957fed9f1e3ee1c84a85142ed66f601fd412c30dbe?"
                  className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                />
                <Image alt=""
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4991b09d38cc8a417eff29bd6bdfdf515b64588c3922b4bcde291eed488b2fde?"
                  className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                />
                <Image alt=""
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b0601fb60115f73aefd1e746e25edebac3843167733399010e371c1b9c055454?"
                  className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                />
                <Image alt=""
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f450b76191f7a7b8120649a4aaa7e5fc70dcac13855c86a1cca83e075111ce6?"
                  className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                />
                <Image alt=""
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f8d3a6e9d84424bf52ac36040f5ffbb716fef0475fe1be61971fc98e3bdaba1?"
                  className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                />
              </div>
              <div className="text-neutral-500 text-center text-sm font-bold leading-6 tracking-wide self-stretch mt-5 max-md:max-w-full">
                Slate helps you see how many more days you need to work to{" "}
                <br />
                reach your financial goal.
              </div>
              <div className="text-sky-500 text-center text-sm font-bold leading-6 tracking-wide self-center whitespace-nowrap mt-5">
                Regina Miles
              </div>
              <div className="text-slate-800 text-center text-sm font-bold leading-6 tracking-wide self-center whitespace-nowrap">
                Designer
              </div>
            </span>
          </span>
        </div>
        <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
          <div className="grow max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                <div className="flex grow flex-col items-center max-md:mt-5">
                  <Image alt=""
                        src="/col1.png"
                    className="aspect-square object-contain object-center w-[143px] overflow-hidden"
                  />
                  <Image alt=""
                        src="/col2.png"
                    className="aspect-[1.01] object-contain object-center w-[143px] overflow-hidden mt-4"
                  />
                  <Image alt=""
                        src="/col3.png"
                    className="aspect-[1.31] object-contain object-center w-[143px] overflow-hidden mt-4"
                  />
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                <div className="flex grow flex-col items-center max-md:mt-5">
                  <Image alt=""
                        src="/col4.png"
                    className="aspect-[0.99] object-contain object-center w-[142px] overflow-hidden"
                  />
                  <Image alt=""
                        src="/col5.png"
                    className="aspect-square object-contain object-center w-[142px] overflow-hidden mt-4"
                  />
                  <Image alt=""
                        src="/col6.png"
                    className="aspect-[1.3] object-contain object-center w-[142px] overflow-hidden mt-4"
                  />
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                <div className="flex grow flex-col items-center max-md:mt-5">
                  <Image alt=""
                        src="/col7.png"
                    className="aspect-square object-contain object-center w-[143px] overflow-hidden"
                  />
                  <Image alt=""
                        src="/col8.png"
                    className="aspect-[1.01] object-contain object-center w-[143px] overflow-hidden mt-4"
                  />
                  <Image alt=""
                        src="/col9.png"
                    className="aspect-[1.31] object-contain object-center w-[143px] overflow-hidden mt-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="bg-white flex w-full flex-col justify-center items-stretch max-md:max-w-full">
    <div className="flex-col overflow-hidden relative flex min-h-[640px] w-full items-center px-20 py-12 max-md:max-w-full max-md:px-5">
      <Image alt=""
        loading="lazy"
        src="/cook.png"
        className="absolute h-full w-full object-cover object-center inset-0"
      />
      <div className="relative text-sky-500 text-center text-sm font-bold leading-6 tracking-wide whitespace-nowrap mt-28 max-md:mt-10">
        Designing Better Experience
      </div>
      <div className="relative text-slate-800 text-center text-4xl font-bold leading-[50px] tracking-wide max-w-[571px] mt-8 max-md:max-w-full">
        Problems trying to resolve <br />
        the conflict between{" "}
      </div>
      <div className="relative text-neutral-500 text-center text-sm leading-5 tracking-wide max-w-[447px] mt-8 max-md:max-w-full">
        Problems trying to resolve the conflict between the two major realms
        of Classical physics:{" "}
      </div>
      <div className="relative text-teal-700 text-center text-2xl font-bold leading-8 tracking-normal whitespace-nowrap mt-8">
        $16.48
      </div>
      <span className="relative text-white text-center text-sm font-bold leading-5 tracking-wide whitespace-nowrap items-stretch bg-sky-500 justify-center mt-8 mb-10 px-10 py-4 rounded-md max-md:px-5">
        ADD YOUR CALL TO ACTION
      </span>
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
            <Image alt=""
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b6ea2b6c9bed5bb9214a881a58c1a58c8d8f6718a1d00d552a8d555ab0dee2ae?"
              className="aspect-square object-contain object-center w-6 justify-center items-center overflow-hidden self-stretch shrink-0 max-w-full"
            />
            <Image alt=""
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd0846c47bf4c6bb38f8a2f1c3e1b1c4a4f24cf2d52ed7154d7a70c7d92c4136?"
              className="aspect-square object-contain object-center w-6 justify-center items-center overflow-hidden self-stretch shrink-0 max-w-full"
            />
            <Image alt=""
              loading="lazy"
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
</div>)
 }
export default HomePage;