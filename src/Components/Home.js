import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import { auth, db } from '../Config/Config'
import { Products } from './Products'
// import {useNavigate} from 'react-router-dom'
function Home(props) {
  // const navigate = useNavigate('')
  function GetUserUid(){
    
    const[uid,setUid]=useState(null);
    useEffect(()=>{
      auth.onAuthStateChanged(user=>{
        if(user){
          setUid(user.uid);
        }
      })
    },[])
    return uid;
  }
  const uid=GetUserUid();


  function GetCurrentUser() {
    const [user, setUser] = useState(null);
    useEffect(() => {
      auth.onAuthStateChanged(user => {
        if (user) {
          db.collection('users').doc(user.uid).get().then(snapshot => {
            setUser(snapshot.data().Name);
          })
        } else {
          setUser(null);
        }
      })
    }, [])
    return user;
  }
  const user = GetCurrentUser();
  // console.log(user);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const products = await db.collection('Products').get();
    const productsArray = [];
    for (var snap of products.docs) {
      var data = snap.data();
      data.ID = snap.id;
      productsArray.push({
        ...data
      })
      if (productsArray.length === products.docs.length) {
        setProducts(productsArray);
      }
    }
  }
  useEffect(() => {
    getProducts();
  }, [])
const [totalProducts,setTotalProucts]=useState(0);


useEffect(()=>{
  auth.onAuthStateChanged(user=>{
    if(user){
      db.collection('Cart'+user.uid).onSnapshot(snapshot=>{
        const qty=snapshot.docs.length;
        setTotalProucts(qty);
      })
    }
  })
},[])





  let Product;
  const addToCart=(product)=>{
    if(uid!==null){
      // console.log(product)
      Product=product;
      Product['qty']=1;
      Product['TotalProductPrice']=Product.qty*Product.ProductPrice;
      db.collection('Cart'+uid).doc(product.ID).set(Product).then(()=>{
        console.log("successfully added to cart")
      })
    }
    else{
      props.navigate('/login')
    }
    

  }
  return (
    <div>
      <Navbar user={user} totalProducts={totalProducts} />
      <br />
      {products.length > 0 && (
        <div className='container-fluid'>
          {/* <h1 className='text-center'>Products</h1> */}
          <div className='products-box'>
            <Products products={products} addToCart={addToCart} />
          </div>
        </div>
      )}

      {products.length < 1 && (
        <div className='container-fluid'> please wait .....</div>
      )}
    </div>
  )
}

export default Home