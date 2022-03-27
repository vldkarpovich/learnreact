import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';

const PostIdPage = () => {

  const params = useParams();
  const [post, setPost] = useState({});
  const [fetchPostById, isLoading, error] = useFetching(async () => {
      const response = await PostService.getOneById(params.id)
      setPost(response);
  })

  useEffect(() => {
      fetchPostById(params.id)
  }, [])

  return (
    <div>
        {isLoading
            ? <Loader/>
            :<div style={{marginTop: 15}}>
                <h2>{post.make} {post.model} {post.year_model}</h2>
                <div>{post.warehouseName}, location: {post.carLocation}</div>
                <div>date added: {post.date_added}</div>
                <h3>price: {post.price}</h3> 
            </div>
        }
    </div>
  )
}

export default PostIdPage