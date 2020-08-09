import styled from 'styled-components'

export const Container = styled.div`
  width: calc(100% - 40px);
  max-width: 400px;
  min-width: 300px;
  padding: 24px;
  margin: 40px auto;
  background: #FFF;
  box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.16);
  border-radius: 16px;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`

export const HeaderText = styled.h3`
  font-size: 18px;
  line-height: 21px;
  font-weight: normal;
  font-family: Roboto;
`

export const ResultWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ResultValue = styled.span`
  font-size: 24px;
  line-height: 28px;
  margin-right: 16px;
  font-family: Roboto;
`

export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  padding: 14px 16px;
  background: #6CA22C;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  outline: none;
  &:hover {
    background: #8bc546;
  }
`

export const SubmitButtonText = styled.span`
  margin-left: 8px;
`