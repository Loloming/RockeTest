import { styled } from 'styled-components'

export const Input = styled.input<{ $error: boolean }>`
  color: #000;
  background: transparent;
  width: 13rem;
  padding: 0rem 0.5rem;
  height: 2.5rem;
  margin-bottom: 1rem;
  border: ${(props) => props.$error ? "solid 1px red" : "solid 1px #aaa"};
  border-radius: 10px;
  `
export const Info = styled.div`
background-color: #c5c;
min-width: 9rem;
padding: 0.5rem;
border-radius: 10px;
color: #000;
margin: 0.5rem;
padding: 1rem;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0rem 0.5rem;
  border-radius: 15px;
  background-color: #eee;
  width: min-content;
  `

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  align-items: center;
  flex-grow: 1;
`

export const HeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: #001;
  width: 100%;
  border-bottom: solid 1px black;
  height: 6rem;
  margin-bottom: 1rem;
`

export const FooterDiv = styled.div`
  width: 100%;
  border-top: solid 1px black;
  background-color: #001;
  height: 6rem;
  margin-top: 1rem;
`