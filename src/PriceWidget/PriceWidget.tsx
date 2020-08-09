import * as React from 'react'

import { Radio } from '../Components';

import { Container, Header, HeaderText, ResultValue, ResultWrapper, SubmitButton, SubmitButtonText } from './styled'

export interface PriceOption {
    value: string
    price: string
}

interface IPriceWidgetProps {
    prices: PriceOption[]
    onWidgetSubmit: (option: PriceOption) => void
}

interface IPriceWidgetState {
    activeOption: number
}

export class PriceWidget extends React.PureComponent<IPriceWidgetProps, IPriceWidgetState> {
    constructor(props: IPriceWidgetProps) {
        super(props);

        this.state = {
            activeOption: 0
        }
    }

    setActiveOption = (activeOption: number) => {
        this.setState({ activeOption })
    }

    getActiveOption = () => {
        this.props.onWidgetSubmit(this.props.prices[this.state.activeOption])
    }

    render() {
        const { prices } = this.props;
        const { activeOption } = this.state;

        return (
            <Container>
                <Header>
                    <HeaderText>Тип</HeaderText>
                    <HeaderText>Ціна</HeaderText>
                </Header>

                {prices.map((item, index) => {
                    return (
                        <Radio key={index} value={item.value} label={item.price} isActive={index === activeOption}
                            onClick={() => this.setActiveOption(index)} />
                    )
                })}

                <ResultWrapper>
                    <ResultValue>
                        {prices[activeOption].price}
                    </ResultValue>
                    <SubmitButton onClick={this.getActiveOption}>
                        <img
                            src={'https://cdn0.iconfinder.com/data/icons/elasto-online-store/26/00-ELASTOFONT-STORE-READY_cart-16.png'}
                            alt={'order-icon'} />
                        <SubmitButtonText>До кошика</SubmitButtonText>
                    </SubmitButton>
                </ResultWrapper>

            </Container>
        )
    }
}