import { Container } from '@material-ui/core';
import React from 'react';
import CardComboContent from '../../components/CardComboContent/CardComboContent';
import CardPizzaContent from '../../components/CardPizzaContent/CardPizzaContent';
import CardSnacksContent from '../../components/CardSnackContent/CardSnackContent';
import CardDessertContent from '../../components/CardDessertContent/CardDessertContent';
import Infobar from '../../components/InfoBar/Infobar';
import Navbar from '../../components/Navbar/Navbar';
import CardBeverageContent from '../../components/CardBeverageContent/CardBeverageContent';
import CardOthergoodComp from '../../components/CardOtherGoodComp.jsx/CardOthergoodComp';
import SimpleTabs from '../../components/Labtabs/Labtabs';
import SearchInput from '../../components/SearchInput/SearchInput';


const MainPage = () => {
    return (
        <div>
            <Container maxWidth='lg'>
                <Infobar />
                <Navbar />
                <div className='maininfo-content' id='mainInfo'>
                    <div className='item-info-content'>
                        <SearchInput />
                    </div>
                    <div className='item-info-secondcont'>
                        <img src="https://dodopizza-a.akamaihd.net/site-static/dist/f30f1ab8cd7a7a54476d.svg" alt="infoaboutfood" />
                        <p>
                            Без свинины <br />
                            <span>Мы готовим из цыпленка и говядины</span>
                        </p>
                    </div>
                </div>
                <h3 className='main-title' id='pizza'>Пицца</h3>
                <div className='card_main'>
                    <CardPizzaContent />
                </div>
                <h3 className='main-title' id='combo'>Комбо</h3>
                <div className='card_main'>
                    <CardComboContent />
                </div>
                <h3 className='main-title' id='snacks'>Закуски</h3>
                <div className='card_main'>
                    <CardSnacksContent />
                </div>
                <h3 className='main-title' id='desserts'>Десерты</h3>
                <div className='card_main'>
                    <CardDessertContent />
                </div>
                <h3 className='main-title' id='beverages'>Напитки</h3>
                <div className='card_main'>
                    <CardBeverageContent />
                </div>
                <h3 className='main-title' id='othergood'>Другие товары</h3>
                <div className='card_main'>
                    <CardOthergoodComp />
                </div>
                <h3 className='main-title' id='news'>Новости</h3>
                <SimpleTabs />
            </Container>
        </div>
    );
};

export default MainPage;