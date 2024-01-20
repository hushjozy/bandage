// components/ItemModal.tsx
import React from 'react';
import  Modal from 'react-modal';
import { addToCart, CartItem, removeFromCart, removeFromWishlist} from '../redux/cartSlice';
import { useDispatch } from 'react-redux';
import { Image } from 'theme-ui';
import { Button } from '@mui/material';

interface ItemModalProps {
  isOpen: boolean;
  onClose: () => void;
    items: any;
    isCart: boolean
}

const ItemModal: React.FC<ItemModalProps> = ({ isOpen, onClose, items, isCart }) => {
    const dispatch = useDispatch();

  const handleQuantity = (item: CartItem, action: string) => {
    console.log(action);
    
      if (action === 'add') {
        dispatch(addToCart(item));
      } else {
        dispatch(removeFromCart({id:item.id, type:'subtract'}));
      }
    
    };
  
  const getTotal= () => {
    const sum = items?.reduce((total: number, item: CartItem) => {
      const discounted = (item as CartItem)?.price * ((item as CartItem)?.discountPercentage / 100)
      return total + (((item as CartItem)?.price - discounted) * item?.quantity)
    }, 0)
return sum.toFixed(2)
  }
    const handleRemoveItem = (itemId: number) => {
        if (isCart) {
          dispatch(removeFromCart({id:itemId, type:'remove'}));
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
          
      <h2 className="text-3xl mb-4 font-bold text-uppercase text-center ">{items instanceof Array && items.length > 0 ? 'Items' : 'No items to display'}</h2>
      {items instanceof Array && items.length > 0 && (
        <table className="w-full border-collapse table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border  balancetab w-[10%]">Title</th>
              {items instanceof Array && items[0].hasOwnProperty('quantity') && (
                <th className="py-2 px-4 border  balancetab w-[10%]">Quantity</th>
              )}
              {items instanceof Array && items[0].hasOwnProperty('price') && <th className="py-2 px-4 border">Price</th>}
              <th className="py-2 px-4 border w-16 h-16 w-1/4 balancetab">Thumbnail</th>
              <th className="py-2 px-4 border w-16 h-16 w-1/4 balancetab">Options</th>
            </tr>
          </thead>
          <tbody>
                      {items.map((item) => {
                          const discountedPrice = (item as any)?.price - (item as any)?.price * ((item as any)?.discountPercentage / 100) 
return(
                
              <tr key={item.id} className="border">
                <td className="py-2 px-4 border  balancetab w-[10%]">{item.title}</td>
                {item.hasOwnProperty('quantity') && <td className="py-2 px-4 border balancetab w-[10%]">{(item as CartItem).quantity}</td>}
                {item.hasOwnProperty('price') && <td className="py-2 px-4 border w-1/4 balancetab">${discountedPrice.toFixed(2)}</td>}
                <td className="py-2 px-4 border w-16 h-16 w-1/4 balancetab">
                  <Image  src={item.thumbnail} alt={item.title} width={120} height={80} className="w-16 h-16 object-cover" />
                    </td>
    <td className="py-2 px-4 border w-16 h-16 w-1/4  balancetab ">
      <div className="flex flex-row px-4 w-auto h-16  justify-center gap-4 items-center">
      {isCart && <div style={{ display: 'flex', marginTop: '8px',gap: '8px', flexDirection:'column' }}>
      <Button variant="contained" onClick={()=>handleQuantity(item, 'add')} ><span style={{fontSize:'18px', fontWeight:'700'}}>+</span></Button>
      <Button variant="contained" onClick={()=>handleQuantity(item, 'remove')}><span style={{fontSize:'18px',fontWeight:'700'}}>-</span></Button>

      </div>}
      <Button variant="contained"
onClick={() => handleRemoveItem(item.id)}  className=" px-6  bg-sky-500 opacity-100 text-white py-2  rounded-md hover:bg-sky-700 focus:outline-none w-auto bg-sky-500"  >
       Remove
      </Button></div></td>
              </tr>
                          )
                      })}
                    { isCart && <tr className="border">
    <td className="py-2 px-4 border w-1/4 balancetab" >
     <b>Total</b> </td>
                          <td className="py-2 px-4 border w-16 h-16 w-1/4 balancetab"></td>
    <td className="py-2 px-4 border w-16 h-16 w-1/4 balancetab"></td>
    <td className="py-2 px-4 border w-1/4 balancetab" >
    <b>$
      {getTotal()}</b>
    </td>
   
  </tr>}
          </tbody>
        </table>
      )}
      <button
        onClick={()=>onClose()}
        className="absolute bottom-0 right-[31px] px-10  bg-sky-500 opacity-100 text-white py-2  rounded-md hover:bg-sky-700 focus:outline-none w-auto bg-sky-500"   style={{bottom:'22px',right:'31px'}} >
        Close Modal
      </button>
    </Modal>

  );
};

export default ItemModal;
