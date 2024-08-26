import React, { useContext} from 'react'
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext.jsx';
import { baseUrl } from '../../constants/index.js';

const FoodItem = ({id,name,price,description,image}) => {

    
  const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);

  return (
    <div className='food-item'>
    <div className='food-item-img-container'>
    <img className='food-item-image' src={`${baseUrl}/uploads/images/${image}`} alt='Image' />



      {/* Setting up logic if item is greater than 0 than on click increment the itemcount with 1 
      if it is 0 then give a addicon option to addfood item in the cart */}


      {
        !cartItems[id]
        ?<img className= 'add' onClick={()=>addToCart(id) } src={assets.add_icon_white} alt=''/>
        :<div className='food-item-counter'>
            <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt='' />
            <p>
              {cartItems[id]}
            </p>
            <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt=''/>
        </div>
      }
    </div>
      <div className='food-item-info'>
       <div className='food-item-name-rating'>
          <p>{name}</p>
          <img src={assets.rating_starts} alt=''/>
       </div>
       <p className='food-item-desc'>{description}</p>
       <p className='food-item-price'>${price}</p>
      </div>
    </div>
  )
}

export default FoodItem
