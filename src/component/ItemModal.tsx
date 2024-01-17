// components/ItemModal.tsx
import React from 'react';
import  Modal from 'react-modal'; // Replace with your actual modal and table components
import { CartItem, WishlistItem } from '../redux/slices/cartSlice';
import { removeFromCart, removeFromWishlist } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';

interface ItemModalProps {
  isOpen: boolean;
  onClose: () => void;
    items: CartItem[] | WishlistItem[];
    isCart: boolean
}

const ItemModal: React.FC<ItemModalProps> = ({ isOpen, onClose, items, isCart }) => {
    const dispatch = useDispatch();

    const handleRemoveItem = (itemId: number) => {
        if (isCart) {
          dispatch(removeFromCart(itemId));
        } else {
          dispatch(removeFromWishlist(itemId));
        }
      };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={()=>onClose}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white  p-8 pb-40 rounded-md centralMod "
      overlayClassName="fixed inset-0 bg-black flex justify-center align-center centralModCont"
      >
          
      <h2 className="text-2xl mb-4">{items instanceof Array && items.length > 0 ? 'Items' : 'No items to display'}</h2>
      {items instanceof Array && items.length > 0 && (
        <table className="w-full border-collapse table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border w-1/4 balancetab">Title</th>
              {items instanceof Array && items[0].hasOwnProperty('quantity') && (
                <th className="py-2 px-4 border w-1/4 balancetab">Quantity</th>
              )}
              {items instanceof Array && items[0].hasOwnProperty('price') && <th className="py-2 px-4 border">Price</th>}
              <th className="py-2 px-4 border w-16 h-16 w-1/4 balancetab">Thumbnail</th>
              <th className="py-2 px-4 border w-16 h-16 w-1/4 balancetab">Remove</th>
            </tr>
          </thead>
          <tbody>
                      {items.map((item) => {
                          const discountedPrice = (item as CartItem)?.price - parseInt((item as CartItem)?.price * ((item as CartItem)?.discountPercentage / 100)) 
return(
                
              <tr key={item.id} className="border">
                <td className="py-2 px-4 border w-1/4 balancetab">{item.title}</td>
                {item.hasOwnProperty('quantity') && <td className="py-2 px-4 border w-1/4 balancetab">{(item as CartItem).quantity}</td>}
                {item.hasOwnProperty('price') && <td className="py-2 px-4 border w-1/4 balancetab">${discountedPrice}</td>}
                <td className="py-2 px-4 border w-16 h-16 w-1/4 balancetab">
                  <img src={item.thumbnail} alt={item.title} className="w-16 h-16 object-cover" />
                    </td>
                    <td className="py-2 px-4 border w-16 h-16 w-1/4 balancetab"><button
onClick={() => handleRemoveItem(item.id)}        className=" px-10  bg-sky-500 opacity-100 text-white py-2  rounded-md hover:bg-sky-700 focus:outline-none w-auto bg-sky-500"  >
       Remove Item
      </button></td>
              </tr>
                          )
                      })}
                      <tr className="border">
    <td className="py-2 px-4 border w-1/4 balancetab" >
     <b>Total</b> </td>
                          <td className="py-2 px-4 border w-16 h-16 w-1/4 balancetab"></td>
    <td className="py-2 px-4 border w-16 h-16 w-1/4 balancetab"></td>
    <td className="py-2 px-4 border w-1/4 balancetab" >
    <b>$
      {items.reduce((total, item) => total + ((item as CartItem)?.price - parseInt((item as CartItem)?.price * ((item as CartItem)?.discountPercentage / 100))), 0)}</b>
    </td>
   
  </tr>
          </tbody>
        </table>
      )}
      <button
        onClick={()=>onClose()}
        className="absolute bottom-0 right-[31px] px-10  bg-sky-500 opacity-100 text-white py-2  rounded-md hover:bg-sky-700 focus:outline-none w-auto bg-sky-500"   style={{bottom:'12px',right:'31px'}} >
        Close Modal
      </button>
    </Modal>

  );
};

export default ItemModal;
