import styled from "styled-components";
import { darken, lighten } from "polished";

export const Container = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 4px;

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: #7159c1;
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.06, "#7159c1")};
      }
    }
  }
  @media (max-width: 720px) {
    footer {
      flex-direction: column;

      button {
        order: 1;
        margin-top: 1rem;
        width: 100%;
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }

  img {
    height: 100px;
  }

  strong {
    color: #333;
    display: block;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
    }
  }

  button {
    background: none;
    border: 0;
    padding: 6px;

    svg {
      color: #7159c1;
      transition: color 0.2s;
    }

    &:hover {
      svg {
        color: ${darken(0.06, "#7159c1")};
      }
    }

    &:disabled {
      svg {
        color: ${lighten(0.25, "#7159c1")};
        cursor: not-allowed;
      }
    }
  }

  @media (max-width: 720px) {
    display: flex;

    thead,
    tbody,
    th,
    td,
    tr {
      display: block;
    }

    thead {
      position: absolute;
      top: -9999px;
      left: -9999px;
      width: 0;
    }

    tbody {
      width: 100%;

      tr {
        display: grid;
        place-items: center;
        border-bottom: 1px solid #333;

        td {
          padding: 0 0 0.75rem;
          border: 0;
          text-align: center;

          strong {
            font-size: 1.25rem;
          }

          img {
            height: auto;
            width: 100%;
          }
        }
      }
    }
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;
