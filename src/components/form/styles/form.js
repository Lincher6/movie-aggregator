import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
  max-width: 450px;
  max-height: 660px;
  margin: auto;
  margin-bottom: 100px;
  background-color: rgba(0, 0, 0, .75);
  border-radius: 5px;
  box-sizing: border-box;
  padding: 60px 68px 40px;
`

export const Base = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
`

export const Input = styled.input`
  background-color: #333;
  border-radius: 4px;
  border: 0;
  color: #fff;
  height: 50px;
  line-height: 50px;
  padding: 5px 20px;
  margin-bottom: 20px;
  
  &:last-of-type {
    margin-bottom: 30px;
  }
`

export const Error = styled.div`
  background: #e87c03;
  border-radius: 4px;
  font-size: 14px;
  margin: 0 0 16px;
  color: white;
  padding: 15px 20px;
`

export const Title = styled.h1`
  color: #fff;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 28px;
`

export const Text = styled.p`
  color: #737373;
  font-size: 16px;
  font-weight: 500;
`

export const TextSmall = styled.p`
  margin-top: 10px;
  font-size: 13px;
  line-height: normal;
  color: #8c8c8c;
`

export const Link = styled(NavLink)`
  
`
