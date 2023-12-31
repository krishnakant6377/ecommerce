import '../App.css';
import { useState, useEffect } from "react";
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {AddingtoCart} from '../Redux/Slice';
import Loading from '../StaticComp/Loader'
import {useNavigate} from 'react-router-dom'
const Store=()=>{
    const [data, setData] = useState([])
    const [loading,setLoading]=useState(true)
    const dispatch=useDispatch();
    const navigate=useNavigate();

     useEffect(()=>{
      setLoading(true)
      axios
      .get("https://e-commerce-tamil.onrender.com/Product")
      .then((resolve) => {
        console.log(resolve.data);
        setData(resolve.data);
        setLoading(false)
      })
      .catch((error) => {
        console.log(error);
      });
     },[])

    const AddtoCart=(item)=>{
      console.log("Passing to the Slice by Action Creator",item)
      
       dispatch(AddingtoCart(item))
       alert("item Added Successfully to Cart")
    }
    const handleBuy=(item)=>{
      navigate(`/product/${item.id}`, { state: { item } })
    }
    return(
        <div>
            <div id="section">
        {loading?<Loading/>:data.map((item, index) => {
          return (
            <div id="child" key={item.id}>
              <div id="hot">{item.trend}</div>
              <img
                src={item.url}
                alt="404_ERROR"
                width={160}
                height={150}
                id="productImg"
                onClick={()=>handleBuy(item)}
              />
              <div style={{overflow:"hidden"}}>
                <strong>{item.Name}</strong>
              </div>
              <div>StarRating : <b>{item.Rating}</b>/5</div>
              <br />
              <strong id="price">
                ${item.New_Price} /-   
                <b id="oprice">   ${item.Old_Price}</b>
              </strong>
              <br />
              <button id="cart1" onClick={()=> AddtoCart(item)  }>Add to Cart</button>
              <button id="cart" onClick={()=>handleBuy(item)}>Buy Now</button>
            </div>
          );
        })}
      </div>
        </div>
    )
}
export default Store;