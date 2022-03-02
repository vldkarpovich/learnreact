import React, {useState} from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';


const PostForm = ({create}) => {

    const [post, setPost] = useState({make: '', model: ''})

    const addNewPost = (e) =>{
    e.preventDefault()
    const newPost = {
        ...post, id: Date.now()
    }
    create(newPost)
    setPost({make: '', model: ''})
  }

  return( 
    <form>
        {/* Управляемый компонент */}
        <MyInput 
          value={post.make}
          onChange={e => setPost({...post, make: e.target.value})}
          type="text" 
          placeholder="Name of post"
        />
        <MyInput 
          value={post.model}
          onChange={e => setPost({...post, model: e.target.value})}
          type="text" 
          placeholder="Description of post"
        />
        <MyButton onClick={addNewPost}>Create post</MyButton>
      </form>
    );
};

export default PostForm;