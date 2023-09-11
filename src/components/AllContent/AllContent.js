import { Component } from "react";
import './AllContent.css'
import first from '../../resources/1.png'
import second from '../../resources/2.png'
import third from '../../resources/3.png'
import fourth from '../../resources/4.png'
import fifth from '../../resources/5.png'

class AllContent extends Component {


    render() {
        return (
            <div className="container">
                <div className="content_wrapper_block">
                    <div className="wrapper_block">
                        <div className="wrapper_img_block">
                            <img src={first} alt="" />
                        </div>
                        <div className="wrapper_txt_block">
                            <span>Проверенные и надежные запчасти</span>
                        </div>
                    </div>
                    <div className="wrapper_block">
                        <div className="wrapper_img_block">
                            <img src={second} alt="" />
                        </div>
                        <div className="wrapper_txt_block">
                            <span>Отгружаем в день заказа</span>
                        </div>
                    </div>
                    <div className="wrapper_block">
                        <div className="wrapper_img_block">
                            <img src={third} alt="" />
                        </div>
                        <div className="wrapper_txt_block">
                            <span>Сотрудничаем напрямую с производителями</span>
                        </div>
                    </div>
                    <div className="wrapper_block">
                        <div className="wrapper_img_block">
                            <img src={fourth} alt="" />
                        </div>
                        <div className="wrapper_txt_block">
                            <span>Предлагаем низкие цены</span>
                        </div>
                    </div>
                    <div className="wrapper_block">
                        <div className="wrapper_img_block">
                            <img src={fifth} alt="" />
                        </div>
                        <div className="wrapper_txt_block">
                            <span>Все запчасти в наличии на складе</span>
                        </div>
                    </div>
                </div>
                <p className="paragraph">Ищете комплектующие, узлы, агрегаты и запчасти для спецтехники? Ассортимент интернет-магазина Partsboxshop состоит из более 1800 наименований товаров. Все запчасти в наличии на складе. Вам не придется долго ждать свой заказ. Доступна оплата курьеру, с помощью банковской карты или на расчетный счет. </p>
                <p className="paragraph">С кем сотрудничает Partsboxshop? — оптово-розничные покупатели, сервисные организации, заводы-производители. </p>
                <p className="paragraph">Отправка товара курьерами, службой «Яндекс.Такси» или транспортной компанией. Способ отправки и стоимость доставки зависят от вашего местонахождения. Подробнее в разделе «Условия доставки». </p>
                <h1>Partsboxshop — больше чем магазин</h1>
                <p className="paragraph">Компания ориентирована на постоянное развитие, расширение партнерской сети и увеличение ассортимента товаров. Partsboxshop открыт не только для покупателей, но и для поставщиков, что делает его не просто интернет-магазином, а маркетплейсом. </p>
                <p className="paragraph">Схема сотрудничества открыта. Здесь не только закупают запчасти на спецтехнику, узлы и комплектующие, но еще и размещают товары на сайте. Используйте эту возможность, чтобы увеличить продажи с минимальными вложениями. И свяжитесь с сотрудниками Partsboxshop, если возникли вопросы. </p>
                <h1>Ассортимент товаров</h1>
                <p className="paragraph">В каталоге вы найдете необходимую вам запчасть для двигателей, трансмиссии, электрооборудование, детали для тормозной, гидравлической и топливной системы, элементы кузова, навесное оборудование, расходники и не только.  </p>
                <p className="paragraph">В Partsboxshop представлены импортные и отечественные бренды — JCB, Terex, Hitachi, CAT, MST и многие другие. Купить можно детали и комплектующие для строительной техники.  </p>
                <h1>Это вас приятно удивит</h1>
                <p className="paragraph">Обращаясь в Partsboxshop как покупатель, можете быть уверены в том, что: </p>
                <ul className="spisok">
                    <li>заявки регистрируются круглосуточно;</li>
                    <li>товары отправляются в день заказа;</li>
                    <li>представленные модели всегда в наличии;</li>
                    <li>цены от производителей;</li>
                    <li>купить запчасти получится с гарантией на 6 месяцев.</li>
                </ul>
                <p className="paragraph">Зарегистрируйтесь на сайте, чтобы не заполнять личные данные каждый раз, когда покупаете запчасть. Через личный кабинет удобно отслеживать историю покупок и получать еженедельную рассылку интересных предложений. </p>
                <p className="paragraph">Для поставщиков эта площадка — еще один канал продаж и способ повышения своей узнаваемости. Давайте развиваться вместе! </p>
                <p className="paragraph">Partsboxshop — это быстро, просто и универсально.</p>
                <h1>О КОМПАНИИ</h1>
                <p className="paragraph">Partsboxshop -  интернет-магазин запчастей, узлов и агрегатов, а так же комплектующих к спецтехнике оптом (с НДС) и в розницу (без НДС), частным лицам, автохозяйствам и сервисным центрам по ремонту техники в России и странах СНГ.</p>
                
            </div>
        )
    }
}
export default AllContent;