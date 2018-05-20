import React, {Component, Fragment} from 'react';
import styled from 'styled-components';

let Overlay = styled.div`
    width:100%;
    height:100%;
    z-index:2;
    background-color:#000;
    opacity:0.5;
    position:fixed;
    top:0;
    left:0;
    margin:0;
    padding:0;
`;

let DialogBody = styled.div`
    border: thin #000 solid;
    background-color:#fff;
    z-index:3;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px 20px;
    width: 500px;
    border-radius: 3px;
    font-family: Tahoma, sans-serif;
    color: #333;
`;

let DialogTitle = styled.h1`
    text-align: center;
`;

let VisuallyHidden = styled.div`
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    clip: rect(0 0 0 0);
    overflow: hidden;
`;

let Label = styled.label`
    text-align: right;
    flex: 1;
    margin-right: 10px;
    padding: 10px;
`;
let Input = styled.input`
    padding: 10px;
    border-radius: 2px;
    border: 1px solid #333333;
    flex: 2;
`;

let FieldBlock = styled.p`
    display: flex;
`;

let ButtonBlock = styled.p`
    display: flex;
    margin-top: 30px;
    justify-content: flex-end;
`;

let Button = styled.input`
    font-family: inherit;
    line-height: 3;
    padding: 0 20px;
    text-align: center;
    background-color: #ccc;
    color: #333;
    border-radius: 5px;
    border: none;
    flex: 1;
`;

let Submit = Button.extend`
    background-color: #e62270;
    color: white;
    margin-right: 10px;
`;


export class Dialog extends Component {
    constructor(props) {
        super(props);
    }

    closeDialog = (e) => {
        if (e.keyCode === 27) {
            this.props.closeDialog()
        }
    };

    componentDidMount(){
        document.addEventListener('keydown', this.closeDialog, false);
    }
    componentWillUnmount(){
        document.removeEventListener('keydown', this.closeDialog, false);
    }

    render() {
        return (
            <Fragment>
                <DialogBody role="dialog"
                            aria-labelledby="modalTitle"
                            aria-describedby="modalDescription">
                    <VisuallyHidden id="modalDescription">
                        Пожалуйста, заполните регистрационную форму и ожидайте подтверждающего письма.
                    </VisuallyHidden>
                    <DialogTitle id="modalTitle">РЕГИСТРАЦИЯ</DialogTitle>
                    <form name="Форма регистрации">
                        <FieldBlock>
                            <Label htmlFor="firstName">Ваше имя <span aria-hidden="true">*</span></Label>
                            <Input type="text" name="firstName" id="firstName" autoFocus required/>
                        </FieldBlock>
                        <FieldBlock>
                            <Label htmlFor="lastName">Ваша фамилия <span aria-hidden="true">*</span></Label>
                            <Input type="text" name="lastName" id="lastName" required/>
                        </FieldBlock>
                        <FieldBlock>
                            <Label htmlFor="email">Ваш email <span aria-hidden="true">*</span></Label>
                            <Input type="email" name="email" id="email" required/>
                        </FieldBlock>
                        <ButtonBlock>
                            <Submit type="submit" name="button" id="enter" className="button" value="Зарегистрироваться"/>
                            <Button type="button" name="cancelButton" id="cancelButton" value="Отмена"/>
                        </ButtonBlock>
                    </form>
                </DialogBody>
                <Overlay tabIndex="-1"></Overlay>
            </Fragment>
        );
    }
}