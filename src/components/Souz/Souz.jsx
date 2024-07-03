import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {form} from "../../store/PostSlice";

const Souz = () => {
  const dispatch = useDispatch()
  const {loading,posts} = useSelector(state => state.postSlice)
  useEffect(()=>{
    dispatch(form())
  },[])
  if(loading) return <div>LOADING</div>
  return <div>
    {posts.map(item=>(
        <div key={item.id}>{item.title}</div>
    ))}
  </div>;
};

export default Souz;
