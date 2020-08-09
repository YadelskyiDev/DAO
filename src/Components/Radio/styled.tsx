import styled from 'styled-components'

interface IProps {
    isActive?: boolean
}

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  cursor: pointer;
`

export const LeftPart = styled.div`
  display: flex;
  align-items: center;
  max-width: 70%;
`

export const Circle = styled.div<IProps>`
  position: relative;
  margin-right: 15px;
  width: 24px;
  height: 24px;
  border: 1px solid ${props => props.isActive ? '#6CA22C' : '#999'};
  border-radius: 50%;
  &:before {
      content: '';
      position: absolute;
      display: ${props => props.isActive ? 'block' : 'none'};
      top: 7px;
      left: 7px;
      width: 8px;
      height: 8px;
      background-color: #6CA22C;
      border-radius: 50%;
  }
`

export const Value = styled.span<IProps>`
  display: block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: ${props => props.isActive ? '#000' : '#999'};
`

export const Label = styled.span<IProps>`
  display: block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: ${props => props.isActive ? '#000' : '#999'};
  font-weight: ${props => props.isActive ? 'bold' : 'normal'};
  margin-left: 8px;
`