import { Component } from "react";
import './CatalogList.css'
import { render } from "@testing-library/react";
import { Link } from 'react-router-dom';

class CatalogList extends Component {

    state = {
        catalogList: []
    }

    renderItems = (arr) => {
        const items = arr.map((item) => {
            return (
                <div className="product">
                <Link to={"/catalog"}>
               
                    <div className="for_img">
                    <img className="img" src={item.img} alt="" />
                    </div>
                    
                    <div className="title">{item.title}</div>
                    <div className="count">{item.count}</div>
                
                </Link>
                </div>
            )
        })
        return (
            
            <div className="productList">{items}</div>
            
        )
    }

    render() {
        const elements = [
            {
                title: 'Запчасти',
                img: 'https://partsboxshop.ru/upload/iblock/5b2/2mvvx4zom733lr5qhjgkoldazjmq57m6.webp',
                count: '585 товара'
            },
            {
                title: 'Запчасти',
                img: 'https://partsboxshop.ru/upload/iblock/5b2/2mvvx4zom733lr5qhjgkoldazjmq57m6.webp',
                count: '686 товара'
            },
            {
                title: 'Запчасти',
                img: 'https://partsboxshop.ru/upload/iblock/5b2/2mvvx4zom733lr5qhjgkoldazjmq57m6.webp',
                count: '7878 товара'
            },
            {
                title: 'Запчасти',
                img: 'https://partsboxshop.ru/upload/iblock/5b2/2mvvx4zom733lr5qhjgkoldazjmq57m6.webp',
                count: '7878 товара'
            },
            {
                title: 'Запчасти',
                img: 'https://partsboxshop.ru/upload/iblock/5b2/2mvvx4zom733lr5qhjgkoldazjmq57m6.webp',
                count: '7878 товара'
            },
            {
                title: 'Запчасти',
                img: 'https://partsboxshop.ru/upload/iblock/5b2/2mvvx4zom733lr5qhjgkoldazjmq57m6.webp',
                count: '7878 товара'
            },
            {
                title: 'Запчасти',
                img: 'https://partsboxshop.ru/upload/iblock/5b2/2mvvx4zom733lr5qhjgkoldazjmq57m6.webp',
                count: '7878 товара'
            },
            {
                title: 'Запчасти',
                img: 'https://partsboxshop.ru/upload/iblock/5b2/2mvvx4zom733lr5qhjgkoldazjmq57m6.webp',
                count: '7878 товара'
            },
            {
                title: 'Запчасти',
                img: 'https://partsboxshop.ru/upload/iblock/5b2/2mvvx4zom733lr5qhjgkoldazjmq57m6.webp',
                count: '7878 товара'
            },
            {
                title: 'Запчасти',
                img: 'https://partsboxshop.ru/upload/iblock/5b2/2mvvx4zom733lr5qhjgkoldazjmq57m6.webp',
                count: '7878 товара'
            }
        ]
        const items = this.renderItems(elements)
        return (
            <div className="sectionProductList">
                {items}
            </div>
        )
    }
}
export default CatalogList;