import { Component } from 'react';
import './CatalogMenu.css'

import { Product } from './Components'; // Импорт компонента Product
import { ProductCategory } from './ProductCategory';

class ProductsList extends Component {
    state = {
        selectedCategory: 'запчасти',
    };

    products = [
        {
            title: 'Фильтр топливный 32/925915 PBS',
            img: 'https://partsboxshop.ru/upload/iblock/5b2/2mvvx4zom733lr5qhjgkoldazjmq57m6.webp',
            count: 'Много',
            compatibility: 'Совместимость: JCB',
            cost: 888,
            category: 'запчасти',
        },
        {
            title: 'Фильтр топливный 32/925915 PBS',
            img: 'https://partsboxshop.ru/upload/iblock/5b2/2mvvx4zom733lr5qhjgkoldazjmq57m6.webp',
            count: 'Много',
            compatibility: 'Совместимость: JCB',
            cost: 888,
            category: 'запчасти',
        },
        {
            title: 'Фильтр топливный 32/925915 PBS',
            img: 'https://partsboxshop.ru/upload/iblock/5b2/2mvvx4zom733lr5qhjgkoldazjmq57m6.webp',
            count: 'Много',
            compatibility: 'Совместимость: JCB',
            cost: 456,
            category: 'запчасти',
        },
        {
            title: 'Фильтр топливный 32/925915 PBS',
            img: 'https://partsboxshop.ru/upload/iblock/5b2/2mvvx4zom733lr5qhjgkoldazjmq57m6.webp',
            count: 'Много',
            compatibility: 'Совместимость: JCB',
            cost: 456,
            category: 'запчасти',
        },
        {
            title: 'Фильтр топливный 32/925915 PBS',
            img: 'https://partsboxshop.ru/upload/iblock/5b2/2mvvx4zom733lr5qhjgkoldazjmq57m6.webp',
            count: 'Много',
            compatibility: 'Совместимость: JCB',
            cost: 456,
            category: 'масла',
        },
        {
            title: 'Фильтр топливный 32/925915 PBS',
            img: 'https://partsboxshop.ru/upload/iblock/5b2/2mvvx4zom733lr5qhjgkoldazjmq57m6.webp',
            count: 'Много',
            compatibility: 'Совместимость: JCB',
            cost: 456,
            category: 'фильтры',
        }

    ];

    categories = [
        {
            image: 'https://partsboxshop.ru/upload/iblock/8e8/6u27o618uy35mfoj7fxeay2oa35d37ap.png',
            title: 'Фильтры для шпицеля',
            count: '500',
            category: 'фильтры'
        },
        {
            image: 'https://partsboxshop.ru/upload/iblock/8e8/6u27o618uy35mfoj7fxeay2oa35d37ap.png',
            title: 'Фильтры для вокселей',
            count: '400',
            category: 'фильтры'
        }
    ]

    renderItems = () => {
        const { selectedCategory } = this.state;
        const filteredProducts = this.products.filter(
            (product) => product.category === selectedCategory
        );
        return filteredProducts.map((item, index) => (
            <Product key={index} item={item} />
        ));
    };

    render() {
        return (
            <div className='container'>
                <div className="catalog_content">
                    <div className='menu_block'>
                        <div className='menu_block_element' onClick={() => this.setState({ selectedCategory: 'запчасти' })}>
                            Запчасти
                        </div>
                        <div className='menu_block_element' onClick={() => this.setState({ selectedCategory: 'фильтры' })}>
                            Фильтры
                        </div>
                        <div className='menu_block_element' onClick={() => this.setState({ selectedCategory: 'масла' })}>
                            Масла
                        </div>
                    </div>
                    <div className='productList'>{this.renderItems()}</div>
                </div>
            </div>
        );
    }
}

export default ProductsList;
