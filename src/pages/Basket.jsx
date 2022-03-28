import React, {useContext, useEffect, useState} from 'react'
import MyButton from '../components/UI/button/MyButton';
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';
import { BasketContext } from '../context';

const Basket = () => {

  const {countBasket, setCountBasket} = useContext(BasketContext);
  const [basket, setBasket] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [fetchBasket, isLoading, error] = useFetching(async () => {
      const response = await PostService.getBasket();
      setBasket(response.vehicles);
      setTotalPrice(response.totalPrice);
  })

  useEffect(() => {
    fetchBasket()
    console.log('biba')
  }, [])


  const deleteFromBasket = async (car)=>{
    const response = await PostService.deleteFromBasket(car);
    setBasket(response);
    fetchBasket();
    setCountBasket(basket.length -1)
}

  return (
    <div style={{marginTop: 15}}>
        {!basket.length
            ?<h1>Basket is empty</h1>
            :<div>
                <ul>
                    {basket.map((post) => 
                        <li key={post.id}>
                            {post.make} {post.model} - {post.year_model}; price: {post.price} <MyButton onClick={() => deleteFromBasket(post.id)}>X</MyButton>
                        </li>
                    )}
                </ul>
                <h4>Total price: {totalPrice.toFixed(2)}</h4>
                <MyButton>Pay and order</MyButton>
            </div>
        }
    </div>
  )
}

export default Basket