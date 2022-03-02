import React from "react";
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {

  if(props.post.licensed){

    return(
        <div className="post">
        <div onClick={() => props.getCarInfo(props.post.id)} className="post__content" >
          <strong>{props.number}. {props.post.make} {props.post.model} {props.post.year_model}; price: {props.post.price}</strong>
              <div>
                {props.post.date_added}
              </div>
        </div>
        <div className="post__btns">
          <MyButton onClick={() => props.addToBasket(props.post)}> 
            add to basket 
          </MyButton>
        </div>
      </div>
    );
  }
  else{
    return(
      <div className="post">
      <div className="post__content" >
        <strong>{props.number}. {props.post.make} {props.post.model} {props.post.year_model}; price: {props.post.price}</strong>
            <div>
              {props.post.date_added}
            </div>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => props.addToBasket(props.post)}> 
          add to basket 
        </MyButton>
      </div>
    </div>
  );
  }
};

export default PostItem;
 