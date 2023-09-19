import React, { Component } from 'react';
import Cart from '../Cart/Cart';
import { render } from '@testing-library/react';
import siteLogo from '../../resources/logo.png'
import './CartPage.css'

class CartPage extends Component {
    state = {
        cart: JSON.parse(localStorage.getItem('cart')) || [],
        isBlockVisible: true
    }
    calculateTotalCost = (cart) => {
        return cart.reduce((acc, item) => acc + item.totalCost, 0);
    };
    removeFromCart = (index) => {
        const updatedCart = [...this.state.cart];
        updatedCart.splice(index, 1);
        const newTotalCost = this.calculateTotalCost(updatedCart); // Вычислить новый totalCost
        this.setState({ cart: updatedCart });

        // Сохраните новый totalCost в localStorage
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        localStorage.setItem('totalCost', newTotalCost.toString());
    };


    savedTotalCost = localStorage.getItem('totalCost');

    if(savedTotalCost) {
        // Преобразуйте извлеченное значение в число, если это необходимо
        let totalCostFromLocalStorage = parseFloat(savedTotalCost);
        return totalCostFromLocalStorage
    }


    render() {
        return (
            <div>
                <div className='header_cart'>
                    <div className='container'>
                        
                        <div className='head_cart'>
                        <div>Krasnodar</div>
                        <div className="logo">
                            <img className="logo_img" src={siteLogo} alt="" />
                        </div>
                        
                        <div className="header_phone">
                                <svg class="" width="5" height="13" viewBox="0 0 5 13"><path class="cls-phone" d="M785.738,193.457a22.174,22.174,0,0,0,1.136,2.041,0.62,0.62,0,0,1-.144.869l-0.3.3a0.908,0.908,0,0,1-.805.33,4.014,4.014,0,0,1-1.491-.274c-1.2-.679-1.657-2.35-1.9-3.664a13.4,13.4,0,0,1,.024-5.081c0.255-1.316.73-2.991,1.935-3.685a4.025,4.025,0,0,1,1.493-.288,0.888,0.888,0,0,1,.8.322l0.3,0.3a0.634,0.634,0,0,1,.113.875c-0.454.8-.788,1.37-1.132,2.045-0.143.28-.266,0.258-0.557,0.214l-0.468-.072a0.532,0.532,0,0,0-.7.366,8.047,8.047,0,0,0-.023,4.909,0.521,0.521,0,0,0,.7.358l0.468-.075c0.291-.048.4-0.066,0.555,0.207h0Z" transform="translate(-782 -184)"></path></svg>
                                <span className="phone_number">+7 929 838-80-51</span>
                                <span className="request_call"><a href="">Заказать звонок</a></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <h1 className='h1_cart'>Корзина</h1>
                    <div className='cartCont'>
                        <div>
                            {this.state.isBlockVisible && <Cart cart={this.state.cart} removeFromCart={this.removeFromCart} cartStyles={{ maxWidth: '1000px', width: "1000px", position: "", right: "0px", margin: '0 auto' }} customPerexod={{display:"none"}} />}
                        </div>
                        <div className='oform'>
                            <div className='cart_total'><div>Итого:</div> <span>{this.calculateTotalCost(this.state.cart)} руб</span></div>
                            <div className="basket_checkout">
                                <span>Оформить заказ</span>
                            </div>
                            <div className="speed_checkout">
                                <span>Быстрый заказ</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer_cart'>
                    <div className='container'>
                        
                        <div className='head_cart'>
                        <div>Krasnodar</div>
                        <div className="logo">
                            <img className="logo_img" src={siteLogo} alt="" />
                        </div>
                        
                        <div className="header_phone">
                                <svg class="" width="5" height="13" viewBox="0 0 5 13"><path class="cls-phone" d="M785.738,193.457a22.174,22.174,0,0,0,1.136,2.041,0.62,0.62,0,0,1-.144.869l-0.3.3a0.908,0.908,0,0,1-.805.33,4.014,4.014,0,0,1-1.491-.274c-1.2-.679-1.657-2.35-1.9-3.664a13.4,13.4,0,0,1,.024-5.081c0.255-1.316.73-2.991,1.935-3.685a4.025,4.025,0,0,1,1.493-.288,0.888,0.888,0,0,1,.8.322l0.3,0.3a0.634,0.634,0,0,1,.113.875c-0.454.8-.788,1.37-1.132,2.045-0.143.28-.266,0.258-0.557,0.214l-0.468-.072a0.532,0.532,0,0,0-.7.366,8.047,8.047,0,0,0-.023,4.909,0.521,0.521,0,0,0,.7.358l0.468-.075c0.291-.048.4-0.066,0.555,0.207h0Z" transform="translate(-782 -184)"></path></svg>
                                <span className="phone_number">+7 929 838-80-51</span>
                                <span className="request_call"><a href="">Заказать звонок</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

};

export default CartPage;
