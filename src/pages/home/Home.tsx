import { useEffect, useState } from 'react'
import type { IProduct } from '../../types';
import { api } from '../../api';
import ProductView from '../../components/productView/ProductView';

const Home = () => {
  
  const [data, setData] = useState<null | IProduct[]>(null)
  
  useEffect(() => {
    api
      .get("products")
      .then((res) => setData(res.data?.products))
  }, [])

  return (
    <div>
      <ProductView data={data}/>
    </div>
  )
}

export default Home;