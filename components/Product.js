import Image from "next/image";
import styles from "./Product.module.scss";

const Product = ({
  productName,
  productImg,
  productPrice,
  isRect,
  product__desc,
}) => {
  const rect = {
    product: styles.rectProduct,
    product__info: styles.rectProduct__info,
    product__name: styles.rectProduct__name,
    product__price: styles.rectProduct__price,
  };

  return (
    <div className={isRect ? rect.product : styles.product}>
      <img
        src={productImg}
        alt={productName}
        className={styles.product__image}
      />
      <div className={isRect ? rect.product__info : styles.product__info}>
        <h3 className="product__name">{productName}</h3>
        {isRect ? <p className="product__desc">{product__desc}</p> : null}
        <small className="product__price">{productPrice}</small>
      </div>
    </div>
  );
};

export default Product;
