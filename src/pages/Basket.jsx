import React, {useContext} from 'react'
import MyButton from '../components/UI/button/MyButton';
import { BasketContext } from '../context';

const Basket = () => {
  const {basket, setBasket, totalSum, setTotalSum} = useContext(BasketContext);

  const deleteFromBasket = (car)=>{
    setBasket(basket.filter(p => p.id !== car.id))
    setTotalSum(basket.reduce((a,v) => a = a + v.price, 0 ))
}

  return (
    <div style={{marginTop: 15}}>
        {!basket.length
            ?<h1>Basket is empty</h1>
            :<div>
                <ul>
                    {basket.map((post) => 
                        <li key={post.id}>
                            {post.make} {post.model} {post.year_model} {post.price} <MyButton onClick={() => deleteFromBasket(post)}>X</MyButton>
                        </li>
                    )}
                </ul>
                <h4>Total price: {totalSum.toFixed(2)}</h4>
                <MyButton>Pay and order</MyButton>
            </div>
        }
    </div>
  )
}

export default Basket