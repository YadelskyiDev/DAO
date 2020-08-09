import * as React from 'react'
import { Container, LeftPart, Circle, Value, Label } from './styled'

interface IRadioProps {
    onClick: () => void;
    isActive: boolean
    value: string
    label: string
}

export const Radio: React.FC<IRadioProps> = ({ isActive, value, label, onClick }) => {
    return (
        <Container onClick={onClick}>
            <LeftPart>
                <Circle isActive={isActive} />
                <Value isActive={isActive}>{value}</Value>
            </LeftPart>
            <Label isActive={isActive}>{label}</Label>
        </Container>
    )
}