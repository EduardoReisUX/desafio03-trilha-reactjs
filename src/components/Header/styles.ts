import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;

  a {
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.7;
    }

    @media (max-width: 480px) {
      img {
        max-width: 45vw;
      }
    }
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
    }

    span {
      font-size: 12px;
      color: #999;
    }

    @media (max-width: 480px) {
      margin-right: 6px;

      strong {
        display: none;
      }

      span {
        font-size: 10px;
      }
    }
  }
`;
