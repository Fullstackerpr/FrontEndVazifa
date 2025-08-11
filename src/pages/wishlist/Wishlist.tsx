import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../lib";
import ProductView from '../../components/productView/ProductView'

const Wishlist = () => {
  const wishlist = useSelector((state: RootState) => state.wishlistSlice.data);

  return (
    <div>
        <ProductView data={wishlist}/>
    </div>);
};

export default React.memo(Wishlist);
