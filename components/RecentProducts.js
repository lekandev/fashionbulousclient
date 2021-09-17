import styles from "./RecentProducts.module.scss";
import Product from './Product'

const RecentProducts = () => {
  return (
    <div className={styles.recentProducts}>
      <h2 className={styles.recentProducts__title}>Recent Products</h2>

      <div className={styles.recentProducts__container}>
        <Product productName='Fela Tees' productImg='/assets/images.jpg' productPrice='$490' isRect={false} />
        <Product productName='Fela Tees' productImg='/assets/images.jpg' productPrice='$490' isRect={false} />
        <Product productName='Fela Tees' productImg='/assets/images.jpg' productPrice='$490' isRect={false} />
        <Product productName='Fela Tees' productImg='/assets/images.jpg' productPrice='$490' isRect={false} />
        <Product productName='Fela Tees' productImg='/assets/images.jpg' productPrice='$490' isRect={false} />
        <Product productName='Fela Tees' productImg='/assets/images.jpg' productPrice='$490' isRect={false} />
      </div>  
    </div>
  );
};

export default RecentProducts;
