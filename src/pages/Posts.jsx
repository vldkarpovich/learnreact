import React, {useEffect, useState, useContext} from 'react';
import PostService from '../API/PostService';
import PostFilter from '../components/PostFilter';
import PostList from '../components/PostList';
import MyButton from '../components/UI/button/MyButton';
import Loader from '../components/UI/Loader/Loader';
import Pagination from '../components/UI/pagination/Pagination';
import { useFetching } from '../hooks/useFetching';
import MyModal from '../components/UI/MyModal/MyModal';
import { usePosts } from '../hooks/usePost';
import '../styles/App.css'
import {getPageCount} from '../utils/pages';
import { BasketContext } from '../context';

function Posts() {
  const {basket, setBasket, totalSum, setTotalSum} = useContext(BasketContext);
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [pageSize, setPageSize] = useState(20);
  const [pageNumber, setPagaNumber] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  

  
  const [fetchPosts, isPostsLoading, postError] = useFetching( async (pageSize, pageNumber)=>{
    const response = await PostService.getAll(pageSize, pageNumber);
    setPosts(response.data)
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, pageSize))
    console.log(basket)
  })
  const [car, setCar] = useState({});

  const getCarInfo = async (id) =>{
    console.log(id)
    const car = await PostService.getOne(id);
    setCar(car)
    setModal(true)
  }

  const addToBasket = (post)=>{
      setBasket([...basket, post])
      setTotalSum(basket.reduce((a,v) => a = a + v.price, 0 ))
  }

  useEffect(()=>{
    console.log(',b,')
    console.log(basket)
  }, [basket])

  useEffect(()=>{
    fetchPosts(pageSize, pageNumber)
  }, [])

  const cahngePage = (pageNumber) => {
    setPagaNumber(pageNumber)
    fetchPosts(pageSize, pageNumber)
  }

  const createPost = (newPost) =>{
    setPosts([...posts, newPost])
    setModal(false)
  }
/*
  async function fetchPosts(){
    setIsPostsLoading(true);
    setTimeout( async ()=>{
  
      setIsPostsLoading(false);
    }, 1000)
  }*/

  const removePost = (post) =>{
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <MyButton style={{marginTop: 30}} onClick={()=> setModal(true)}>
        Create post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <div>
          <h2>{car.make} {car.model} {car.year_model}</h2>
          <h3>{car.warehouseName}, location: {car.carLocation}</h3>
          <h4>date added: {car.date_added}</h4>
          <h2>price: {car.price}</h2>
        </div>
        {/*<PostForm create={createPost}/>*/}
      </MyModal>
      <hr style={{margin: '15px 0'}}/>
      <PostFilter 
        filter={filter} 
        setFilter={setFilter}
      />
      {postError &&
        <h1>Error: ${postError}</h1>
      }
      {isPostsLoading
        ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}> <Loader/> </div>
        : <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Post list" getCarInfo={getCarInfo} basket={addToBasket} setModal={setModal}/>
      }
      <Pagination 
        page={pageNumber} 
        changePages={cahngePage} 
        totalPages={totalPages}
      />
    </div>
  );
}

export default Posts;
