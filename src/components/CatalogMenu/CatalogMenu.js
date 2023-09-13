import { Component } from 'react';
import './CatalogMenu.css'
import detal from '../../resources/3.png'
import { Product } from './Components'; // Импорт компонента Product
import { ProductCategory } from './ProductCategory';

class ProductsList extends Component {
    state = {
        selectedCategory: 'запчасти',
        selectedFilter: ''
    };
    updateCategory = (category) => {
        this.setState({ selectedCategory: category });
    };

    updateSubcategory = (subcategory) => {
        this.setState({ selectedFilter: subcategory });
    };

    products = [
        {
            title: 'Запчасть volvo',
            img: 'https://partsboxshop.ru/upload/iblock/5b2/2mvvx4zom733lr5qhjgkoldazjmq57m6.webp',
            count: 'Много',
            compatibility: 'Совместимость: JCB',
            cost: 888,
            category: 'запчасти',
            filter: 'volvo'
        },
        {
            title: 'Запчасть volvo',
            img: 'https://partsboxshop.ru/upload/iblock/5b2/2mvvx4zom733lr5qhjgkoldazjmq57m6.webp',
            count: 'Много',
            compatibility: 'Совместимость: JCB',
            cost: 888,
            category: 'запчасти',
            filter: 'volvo'
        },
        {
            title: 'Запчасть volvo',
            img: 'https://partsboxshop.ru/upload/iblock/5b2/2mvvx4zom733lr5qhjgkoldazjmq57m6.webp',
            count: 'Много',
            compatibility: 'Совместимость: JCB',
            cost: 456,
            category: 'запчасти',
            filter: 'volvo'
        },
        {
            title: 'Запчасть cat',
            img: 'https://partsboxshop.ru/upload/iblock/5b2/2mvvx4zom733lr5qhjgkoldazjmq57m6.webp',
            count: 'Много',
            compatibility: 'Совместимость: JCB',
            cost: 456,
            category: 'запчасти',
            filter: 'cat'
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
            title: 'фильтр volvo',
            img: 'https://partsboxshop.ru/upload/iblock/5b2/2mvvx4zom733lr5qhjgkoldazjmq57m6.webp',
            count: 'Много',
            compatibility: 'Совместимость: JCB',
            cost: 456,
            category: 'фильтры',
            filter: 'volvo'
        },
        {
            title: 'фильтр cat',
            img: 'https://partsboxshop.ru/upload/iblock/5b2/2mvvx4zom733lr5qhjgkoldazjmq57m6.webp',
            count: 'Много',
            compatibility: 'Совместимость: JCB',
            cost: 2555,
            category: 'фильтры',
            filter: 'cat'
        }

    ];

    categories = [
        {
            image: detal,
            title: 'Запчасти cat',
            count: 400,
            category: 'запчасти',
            filter: 'cat'
        },
        {
            image: detal,
            title: 'Запчасти для volcvo',
            count: 400,
            category: 'запчасти',
            filter: 'volvo'
        }
        ,
        {
            image: detal,
            title: 'Фильтры для volcvo',
            count: 400,
            category: 'фильтры',
            filter: 'volvo'
        },
        {
            image: detal,
            title: 'Фильтры для cat',
            count: 400,
            category: 'фильтры',
            filter: 'cat'
        }

    ]
    renderItems = () => {
        const { selectedCategory, selectedFilter } = this.state;
      
        const filteredProducts = this.products.filter((product) => {
          return (
            product.category === selectedCategory &&
            (selectedFilter === '' || product.filter === selectedFilter)
          );
        });
      
        return (
          filteredProducts.map((item, index) => (
            <Product key={index} item={item} />
          ))
        );
      };
      
    renderCategories = () => {
        const { selectedCategory } = this.state;
        const categoryProducts = this.categories.filter(
            (category) => category.category === selectedCategory
        )
        return (
            categoryProducts.map((item, index) => (
                <ProductCategory key={index} item={item} />
            ))
        )
    };
    

    click = (filterValue) => {
        this.setState({ selectedFilter: filterValue });
    };
    renderCategoryElements = () => {
        const { selectedCategory } = this.state;
        
        return this.categories.map((category, index) => {
          if (category.category !== selectedCategory) {
            return null; // Скрываем фильтры, которые не соответствуют выбранной категории
          }
          
          return (
            <div className='category_element product2' key={index} onClick={() => this.click(category.filter)}>
              <img src={category.image} alt="" /> {category.title}
            </div>
          );
        });
      };
      render() {
        return (
            <div className='container'>
                <div className='categoryList'>
                        {this.renderCategoryElements()}
                    </div>
                <div className="catalog_content">
                    <div className='menu_block'>
                        <div className='menu_block_element' onClick={() => this.handleMenuClick('запчасти')}>
                            Запчасти
                        </div>
                        <div className='menu_block_element' onClick={() => this.handleMenuClick('фильтры')}>
                            Фильтры
                        </div>
                        <div className='menu_block_element' onClick={() => this.handleMenuClick('масла')}>
                            Масла
                        </div>
                    </div>
                    
                    <div className='productList'>{this.renderItems()}</div>
                </div>
            </div>
        );
    }
    
    handleMenuClick = (category) => {
        // Сбросить выбранный фильтр на пустую строку
        this.setState({
            selectedCategory: category,
            selectedFilter: ''
        });
    }
    
}

export default ProductsList;
