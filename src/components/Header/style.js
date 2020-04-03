import styled from 'styled-components';

export const Header = styled.div`
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 2rem;

  display: flex;
  flex-wrap: wrap;
  align-items: center;

  .logo {
    width: 50%;

    img {
      max-width: 100%;
      height: auto;
    }
  }

  .catch {
    display: none;
    width: 60%;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0px 0px 11px -13px rgba(0, 0, 0, 0.75);
    padding: 10px;

    .catch__title {
      width: 100%;
      height: 33px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.5rem;

      p {
        font-weight: 600;
        color: #000068;
        padding: 0;
        margin: 0;
        line-height: 16px;
      }

      span {
        font-size: 1.2rem;
        font-weight: bold;
        color: #95a5a6;

        &.completed {
          color: #3fc380;

          strong {
            color: #3fc380;
          }
        }

        strong {
          font-weight: bold;
          color: #482c8c;
        }
      }
    }

    .catch__content {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      margin-bottom: 0.5rem;

      .item {
        width: 16.66%;
        margin: 5px;
        background: #ecf0f1;
        position: relative;
        border-radius: 8px;
        border: 1px solid transparent;
        transition: all 0.3s ease;
        cursor: pointer;

        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);

        &:hover,
        &:focus,
        &:active,
        &.active {
          -webkit-animation-name: hvr-bob-float, hvr-bob;
          animation-name: hvr-bob-float, hvr-bob;
          -webkit-animation-duration: 0.3s, 1.5s;
          animation-duration: 0.3s, 1.5s;
          -webkit-animation-delay: 0s, 0.3s;
          animation-delay: 0s, 0.3s;
          -webkit-animation-timing-function: ease-out, ease-in-out;
          animation-timing-function: ease-out, ease-in-out;
          -webkit-animation-iteration-count: 1, infinite;
          animation-iteration-count: 1, infinite;
          -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards;
          -webkit-animation-direction: normal, alternate;
          animation-direction: normal, alternate;
        }

        &:hover,
        &.active {
          border: 1px solid #658289;
          box-shadow: 0px 0px 11px -6px rgba(0, 0, 0, 0.75);
        }

        p {
          position: absolute;
          z-index: 1;
          right: 5px;
          bottom: 2px;
          font-weight: 600;
          color: #658289;
          font-size: 0.79rem;
        }

        img {
          width: 60px;
          margin-top: -10px;
          padding-left: 5px;
          margin-bottom: 0.7rem;
        }
      }
    }

    .catch__description {
      width: 100%;
      text-align: right;

      p {
        font-weight: 500;
        font-size: 0.875rem;
        padding-right: 5px;
        color: #bfbfbf;
      }
    }
  }

  @-webkit-keyframes hvr-bob {
    0% {
      -webkit-transform: translateY(-8px);
      transform: translateY(-8px);
    }
    50% {
      -webkit-transform: translateY(-4px);
      transform: translateY(-4px);
    }
    100% {
      -webkit-transform: translateY(-8px);
      transform: translateY(-8px);
    }
  }
  @keyframes hvr-bob {
    0% {
      -webkit-transform: translateY(-8px);
      transform: translateY(-8px);
    }
    50% {
      -webkit-transform: translateY(-4px);
      transform: translateY(-4px);
    }
    100% {
      -webkit-transform: translateY(-8px);
      transform: translateY(-8px);
    }
  }
  @-webkit-keyframes hvr-bob-float {
    100% {
      -webkit-transform: translateY(-8px);
      transform: translateY(-8px);
    }
  }
  @keyframes hvr-bob-float {
    100% {
      -webkit-transform: translateY(-8px);
      transform: translateY(-8px);
    }
  }

  /* BREAKPOINT 992px */
  @media (min-width: 62rem) {
    .logo {
      width: 40%;
      padding-right: 3rem;
    }
    .catch {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
    }
  }

  /* BREAKPOINT 1200px */
  @media (min-width: 75rem) {
    .logo {
      width: 30%;
      padding-right: 3rem;
    }
    .catch {
      width: 70%;

      .catch__content {
        .item {
          p {
            font-size: 1rem;
            text-shadow: 0px 1px 4px #658289;
          }
        }
      }
    }
  }
`;
