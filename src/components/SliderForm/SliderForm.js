import React, { Component } from 'react';
import './SliderForm.css'

class SliderForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
        };
    }

    handleChange = (e) => {
        this.setState({ inputValue: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        // Ваш код для обработки отправки формы
        // Вы можете добавить здесь логику для обработки введенных данных
        console.log('Submitted:', this.state.inputValue);
    };

    render() {
        return (
            <form className='slider-form' onSubmit={this.handleSubmit} action=''>
                <h1>
                    Продавайте свои запчасти <br /> на нашем сайте</h1>
                <h5>

                    Приглашаем к сотрудничеству производителей запасных частей,<br /> дистрибьютеров и дилеров,<br />
                    и просто поставщиков запасных частей.</h5>
                <input
                    type="text"
                    placeholder="Ваш телефон или WhatsApp"
                    value={this.state.inputValue}
                    onChange={this.handleChange}
                />
                <button type="submit">Отправить</button>
            </form>
        );
    }
}

export default SliderForm;
