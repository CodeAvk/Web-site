import React,{createContext,useContext,useState,useEffect} from "react";
import {toast} from 'react-hot-toast'


const Context =createContext();


export const StateContext=({children})=>{
    const [showCart,setShowCart]=useState(false)
    const [cartItems,setCartItems]=useState([]);
    const [totalPrice,setTotalPrice]=useState(0);
    const [totalQuantities,setTotalQuantites]=useState(0);
    const [qty,setQty]=useState(1);

// On Add
  let foundProduct;
  let index;
const onAdd=(product,quantity)=>{

    const checkProductInCart=cartItems.find((item)=>item._id===product._id)
 setTotalPrice((prevTotalPrice)=>prevTotalPrice+product.price *quantity);
 setTotalQuantites((prevTotalQuantites)=>prevTotalQuantites+quantity);
  
  if(checkProductInCart){
      const updatedCartItems=cartItems.map((cartProduct)=>{
          if(cartProduct._id===product._id) return {
              ...cartProduct,
              quantity:cartProduct.quantity+quantity
          }
      })

      setCartItems(updatedCartItems);
  }  else{
      product.quantity=quantity;

      setCartItems([...cartItems,{...product}])

     

  }  
  toast.success(`${qty} ${product.name} added to the cart.`)
}


const onRemove=(product)=>{
    foundProduct=cartItems.find((item)=>item._id===product._id);

    const newCartItems=cartItems.filter((item)=>item._id!== product._id);

    setTotalPrice((prevTotalPrice)=>prevTotalPrice-foundProduct.price*foundProduct.quantity)
    setTotalQuantites(prevTotalQuantites=> prevTotalQuantites-foundProduct.quantity)
    setCartItems(newCartItems);
}

const toggleCartItemQuantity=(id,value)=>{
    foundProduct=cartItems.find((item)=>item._id===id)
    index=cartItems.findIndex((product)=>product._id===id);
    const newCartItems=cartItems.filter((item)=>item._id!==id)

    if(value==='inc'){
        setCartItems([...newCartItems,{...foundProduct,quantity:foundProduct.quantity+1}])
        setTotalPrice((prevTotalPrice)=>prevTotalPrice+foundProduct.price)
        setTotalQuantites(prevTotalQuantites=>prevTotalQuantites+1);
    } else if(value==='dec') {
              if(foundProduct.quantity>1){
                setCartItems([...newCartItems,{...foundProduct,quantity:foundProduct.quantity-1}])
                setTotalPrice((prevTotalPrice)=>prevTotalPrice-foundProduct.price)
                setTotalQuantites(prevTotalQuantites=>prevTotalQuantites-1);
              }
    }
 
}



const incQty=()=>{
    setQty((prev)=>prev+1);
}

const descQty=()=>{
    
    setQty((prev)=>{
        if(prev-1<1){
            return 1;
        }
        return prev-1;
    });
}
    



    return (
        <Context.Provider 
         value={
             {
                setShowCart, showCart,cartItems,totalPrice,totalQuantities,qty ,incQty,descQty,onAdd,onRemove,toggleCartItemQuantity
             }
         }
        >
            {children}
        </Context.Provider>
    )

    
}


export const useStateContext=()=>useContext(Context);

