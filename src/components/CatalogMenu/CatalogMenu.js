import React, { Component } from 'react';
import './CatalogMenu.css';
import detal from '../../resources/3.png';
import { Product } from './Components'; // Импорт компонента Product
import { ProductCategory } from './ProductCategory';
import Cart from '../Cart/Cart';
import data from "../../services/data.json";
import Header from '../header/AppHeader';

class ProductsList extends Component {

    state = {
        selectedCategory: localStorage.getItem('selectedCategory'),
        selectedFilter: '',
        cart: JSON.parse(localStorage.getItem('cart')) || [], // Состояние корзины
        isBlockVisible: false,
        isCart: true
       
    };
    products = data.products;
    categories = data.categories;
    categories_main = data.categories_main
    updateCategory = (category) => {
        // Сбрасываем выбранную подкатегорию при выборе категории
        this.setState({ selectedCategory: category, selectedFilter: category });
        localStorage.setItem('selectedCategory', category);
    };

    updateSubcategory = (subcategory) => {
        this.setState({ selectedFilter: subcategory });
    };



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
                <Product key={index} item={item} addToCart={this.addToCart} />
            ))
        );
    };

    renderCategories = () => {
        const { selectedCategory } = this.state;
        const categoryProducts = this.categories.filter(
            (category) => category.category === selectedCategory
        );
        return (
            categoryProducts.map((item, index) => (
                <ProductCategory key={index} item={item} />
            ))
        );
    };

    click = (filterValue) => {
        this.setState({ selectedFilter: filterValue });
    };



    addToCart = (item) => {
        const updatedCart = [...this.state.cart];
        updatedCart.push(item);
        this.setState({ cart: updatedCart });
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        console.log(localStorage)
    };


    removeFromCart = (index) => {
        const updatedCart = [...this.state.cart];
        updatedCart.splice(index, 1);
        this.setState({ cart: updatedCart });
        localStorage.setItem('cart', JSON.stringify(updatedCart));

    };

    renderCategoryElements = () => {
        const { selectedCategory } = this.state;

        return this.categories.map((category, index) => {
            if (category.category !== selectedCategory) {
                return null; // Скрываем фильтры, которые не соответствуют выбранной категории
            }

            return (
                <div className='category_element product22' key={index} onClick={() => this.click(category.filter)}>
                    <img className='categImg' src={category.image} alt="" /> <div className='categ'> {category.title}</div>
                </div>
            );
        });
    };
    toggleBlockVisibility = () => {
        this.setState({ isBlockVisible: !this.state.isBlockVisible });
        console.log('HELLO')
    };
    handleMouseEnter = () => {
        this.setState({ isBlockVisible: true });
        console.log('HEllllo')
    };

    handleMouseLeave = () => {
        setTimeout(() => this.setState({ isBlockVisible: false }), 2000);
        ;
    };
    MouseEnter = () => {
        this.setState({isBlockVisible: true});
        console.log('cart')
    };

    MouseLeave = (e) => {
        setTimeout(() => this.setState({ isBlockVisible: false }));
    };
    array = (
        <div className="menu_block">
            {this.categories_main.map((item, index) => {

                return (
                    <div
                        className="menu_block_element"
                        onClick={() =>
                            this.setState({
                                selectedCategory: `${item.category}`,
                                selectedFilter: "",
                            })
                        }
                    >
                        {item.category}
                    </div>
                );
            })}
        </div>
    )
    render() {
        const { selectedFilter, cart, toggleBlockVisibility } = this.state;
        return (
            <div>

                <Header cart={cart} openBlock={this.handleMouseEnter} hideBlock={this.handleMouseLeave} />
                {this.state.isBlockVisible && <Cart cart={cart} removeFromCart={this.removeFromCart} openBlock={this.MouseEnter} hideBlock={this.MouseLeave}  customH2Style={{ color: 'red' }} />}
                <div className='container'>
                    <div className='categoryList'>

                        {this.renderCategoryElements()}
                    </div>
                    <div className="catalog_content">

                        {this.array}
                        <div className='productList'>{this.renderItems()}</div>
                    </div>



                </div>
            </div>
        );
    }
}

export default ProductsList;
