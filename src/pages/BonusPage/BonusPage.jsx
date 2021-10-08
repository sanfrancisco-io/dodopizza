import { Container } from '@material-ui/core';
import React from 'react';
import Infobar from '../../components/InfoBar/Infobar';
import CardBonusContent from './CardBonusContent';
import CardEightContent from './CardEightContent';
import CardFiveConten from './CardFiveContent';
import CardFourContent from './CardFourContent';
import CardNineContent from './CardNineConten';
import CardSecondBonus from './CardSecondBonus';
import CardSevenConten from './CardSevenConten';
import CardSixContent from './CardSixContent';
import CardThirdContent from './CardThirdContent';

const BonusPage = () => {
    return (
        <div>
            <Container>
                <Infobar />
                <div className='bonus-section'>
                    <h2 className='main-text'>Акции</h2>
                    <div className='bonus-content'>
                        <div className='bonus-main'>
                            <CardBonusContent />
                            <CardSecondBonus />
                            <CardThirdContent />
                            <CardFourContent />
                            <CardFiveConten />
                            <CardSixContent />
                            <CardSevenConten />
                            <CardSevenConten />
                            <CardSevenConten />
                            <CardEightContent />
                            <CardNineContent />
                            <CardNineContent />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default BonusPage;