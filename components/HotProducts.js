import styles from './HotProducts.module.scss'
import Product from './Product'

const HotProducts = () => {
    return (
        <div className={styles.hotProducts}>
            <h2 className="hotProducts__title">Hot Deals</h2>
            <div className={styles.hotProducts__wrapper}>
                <Product productName='Fela Jump Suit' productImg='/assets/images.jpg' productPrice='$490' isRect={true} product__desc='Awesome product made by Felasesi' />
                <Product productName='Fela Gown' productImg='/assets/images.jpg' productPrice='$490' isRect={true} product__desc='Awesome product made by Felasesi' />
            </div>
        </div>
    )
}

export default HotProducts
