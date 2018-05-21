import React, {Component, Fragment} from 'react';
import styled from 'styled-components';
import {Dialog} from './components/dialog';

let Wrapper = styled.div`
    width: 1000px;
    margin: 0 auto 0;
    font-family: Tahoma, sans-serif;
`;

let TextBlock = styled.div`
    padding: 20px 20px 10px;
    color: white;
    background: #c788fe;
    background: #662d91;
`;

let Header = styled.header`
    padding: 20px;
    color: white;
    background: #e62270;
    text-align: center;
`;

let RegisterBlock = styled.div`
    height: 300px;
    display: flex;
    background: url(cover.jpg) center center;
`;

let RegisterButton = styled.button`
    margin: 50px auto 0;
    align-self: flex-start;
    background: linear-gradient(20deg,#662d91,#e62270);
    color: white;
    padding: 20px;
    border-radius: 3px;
    border: 0;
    
    &:focus {
        outline-width: 3px;
        outline-style: solid;
    }
`;

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showDialog: false
        };
    }

    showDialog = () => {
        this.setState({showDialog: true});
    }

    closeDialog = () => {
        this.setState({showDialog: false});
        this.registerButton.focus();
    }

    render() {
        return (
            <Fragment>
                <Wrapper>
                    <Header>
                        <h1>Приходите на нашу конференцию!</h1>
                    </Header>
                    <RegisterBlock>
                        <RegisterButton tabIndex="0" role="button"
                                        onClick={this.showDialog}
                                        innerRef={(button) => { this.registerButton = button; }} >
                            Хочу посетить
                        </RegisterButton>
                    </RegisterBlock>
                    <TextBlock>
                        <p>Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев
                            более
                            менее
                            осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных
                            выступлений в
                            домашних условиях. При создании генератора мы использовали небезизвестный универсальный код
                            речей.
                            Текст
                            генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что
                            позволяет
                            сделать
                            текст более привлекательным и живым для визуально-слухового восприятия.</p>

                        {/*<p>
                        По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у
                        некторых
                        людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском
                        языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен.
                    </p>*/}
                    </TextBlock>
                </Wrapper>
                {this.state.showDialog && <Dialog closeDialog={this.closeDialog}></Dialog>}
            </Fragment>
        );
    }
}

export default App;
