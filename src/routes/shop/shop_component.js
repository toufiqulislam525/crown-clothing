import { Fragment, useContext } from 'react';
import { CategoriesContext } from '../../contexts/categories_context';
import ProductCard from '../../components/product-card/product-card_component';

import './shop_styles.scss';

const Shop = ()=>{
    const { categoriesMap } = useContext(CategoriesContext);

    return(
        
        <Fragment>
            {
                Object.keys(categoriesMap).map(title =>(
                    <Fragment key={title}>
                        <h2>{title}</h2>
                        <div className='products-container'>
                            
                            {categoriesMap[title].map((product) =>(
                                <ProductCard key={product.id} product={product} />
                            ))}
                        
                        </div>
                    </Fragment>
                ))

            }
            
        </Fragment>  
        
    );
}

export default Shop;