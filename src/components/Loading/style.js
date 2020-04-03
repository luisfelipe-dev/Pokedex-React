import styled from 'styled-components';

export const Loading = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 8;
  background-color: #f44336;
  top: 0;
  left: 0;

  .content {
    height: 100vh;
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
  }

  .pokedex {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 70px;
    height: 90px;
    background-color: #4d1717;
    border-radius: 15%;
    border: 6px solid #4d1717;
    display: grid;
    grid-template-columns: 5px 1.5fr 1.5fr 1fr;
    grid-template-rows: 1fr 1fr 3fr 1fr;
    grid-template-areas: 'top top top top top' 'rect rect triangle inverse scroll' 'space space space fill scroll' 'end end end end scroll';
  }
  .pokedex .top {
    grid-area: top;
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    background-color: #f44336;
    border-top: 2px solid #f37873;
    border-radius: 5px 5px 0 0;
  }
  .pokedex .top .camera {
    width: 8px;
    height: 8px;
    margin-left: 5px;
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(#1e88e5),
      to(white)
    );
    background-image: linear-gradient(#1e88e5, white);
    border-radius: 100%;
    border: 1.5px solid #4d1717;
  }
  .pokedex .top .lights {
    width: 50%;
    height: 90%;
    margin-left: 3px;
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }
  .pokedex .top .lights > div {
    width: 5px;
    height: 5px;
    border: 1.5px solid #4d1717;
    border-radius: 100%;
    margin-right: 2px;
  }
  .pokedex .top .lights .red {
    background-color: red;
  }
  .pokedex .top .lights .yellow {
    background-color: #fdd835;
  }
  .pokedex .top .lights .green {
    background-color: #91d6a6;
  }
  .pokedex .rect {
    grid-area: rect;
    background-color: #f44336;
    border-bottom: 8px solid #4d1717;
  }
  .pokedex .space {
    grid-area: space;
    border-top: 2px solid #f37873;
    background-color: #f44336;
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }
  .pokedex .space .arrow-behind {
    background-color: #4d1717;
    margin-left: 5px;
  }
  .pokedex .space .arrow-behind:after,
  .pokedex .space .arrow-behind:before {
    content: '';
    position: absolute;
    background-color: inherit;
  }
  .pokedex .space .arrow-behind,
  .pokedex .space .arrow-behind:before,
  .pokedex .space .arrow-behind:after {
    width: 8px;
    height: 8px;
    border-top-right-radius: 30%;
  }
  .pokedex .space .arrow-behind {
    -webkit-transform: rotate(-90deg) skewX(-30deg) scale(1, 0.866);
    transform: rotate(-90deg) skewX(-30deg) scale(1, 0.866);
  }
  .pokedex .space .arrow-behind:before {
    -webkit-transform: rotate(-135deg) skewX(-45deg) scale(1.414, 0.707)
      translate(0, -50%);
    transform: rotate(-135deg) skewX(-45deg) scale(1.414, 0.707)
      translate(0, -50%);
  }
  .pokedex .space .arrow-behind:after {
    -webkit-transform: rotate(135deg) skewY(-45deg) scale(0.707, 1.414)
      translate(50%);
    transform: rotate(135deg) skewY(-45deg) scale(0.707, 1.414) translate(50%);
  }
  .pokedex .space .arrow {
    position: relative;
    background-color: #fdd835;
    left: -5.5px;
    top: 1px;
  }
  .pokedex .space .arrow:after,
  .pokedex .space .arrow:before {
    content: '';
    position: absolute;
    background-color: inherit;
  }
  .pokedex .space .arrow,
  .pokedex .space .arrow:before,
  .pokedex .space .arrow:after {
    width: 4px;
    height: 4px;
    border-top-right-radius: 30%;
  }
  .pokedex .space .arrow {
    -webkit-transform: rotate(-90deg) skewX(-30deg) scale(1, 0.866);
    transform: rotate(-90deg) skewX(-30deg) scale(1, 0.866);
  }
  .pokedex .space .arrow:before {
    -webkit-transform: rotate(-135deg) skewX(-45deg) scale(1.414, 0.707)
      translate(0, -50%);
    transform: rotate(-135deg) skewX(-45deg) scale(1.414, 0.707)
      translate(0, -50%);
  }
  .pokedex .space .arrow:after {
    -webkit-transform: rotate(135deg) skewY(-45deg) scale(0.707, 1.414)
      translate(50%);
    transform: rotate(135deg) skewY(-45deg) scale(0.707, 1.414) translate(50%);
  }
  .pokedex .scroll {
    grid-area: scroll;
    background-color: #a62b26;
    width: 50%;
    border: 6px solid #4d1717;
    border-top: 8px solid #4d1717 !important;
    border-radius: 0 0 10px 0;
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
  }
  .pokedex .scroll .bar {
    height: 80%;
    background-color: #f44336;
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
  }
  .pokedex .scroll .bar .square-top,
  .pokedex .scroll .bar .square-bottom {
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(#ee3e37),
      to(#f27873)
    );
    background-image: linear-gradient(#ee3e37, #f27873);
    width: 100%;
    height: 5px;
    border-top: 2px solid #4d1717;
    border-bottom: 2px solid #4d1717;
  }
  .pokedex .scroll .bar .square-top {
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(#f27873),
      to(#ee3e37)
    );
    background-image: linear-gradient(#f27873, #ee3e37);
  }
  .pokedex .scroll .bar .square-bottom {
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(#ee3e37),
      to(#f27873)
    );
    background-image: linear-gradient(#ee3e37, #f27873);
  }
  .pokedex .fill {
    grid-area: fill;
    background-color: #f44336;
  }
  .pokedex .triangle {
    grid-area: triangle;
    border-top: 7px solid #f44336;
    border-right: 7px solid transparent;
    padding-left: 10px;
  }
  .pokedex .inverse {
    grid-area: inverse;
    border-bottom: 7px solid #f44336;
    border-left: 7px solid transparent;
  }
  .pokedex .end {
    grid-area: end;
    background-color: #f44336;
    border-bottom: 2px solid #be312c;
    border-radius: 0 0 0 5px;
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
  }
  .pokedex .end .strip {
    background-color: #a62b26;
    width: 30px;
    height: 2px;
    border: 2px solid #4d1717;
    border-radius: 30px;
  }

  .shadow {
    width: 80px;
    height: 10px;
    background-color: #be312c;
    margin-top: 0.5rem;
    border-radius: 50%;
  }

  .texto {
    margin-top: 1rem;

    p {
      font-weight: 500;
      font-size: 0.75em;
      letter-spacing: 1px;
      -webkit-animation: color-change 1s infinite;
      -moz-animation: color-change 1s infinite;
      -o-animation: color-change 1s infinite;
      -ms-animation: color-change 1s infinite;
      animation: color-change 1s infinite;
    }

    @-webkit-keyframes color-change {
      0% {
        color: #1e88e5;
      }
      50% {
        color: #4d1717;
      }
      100% {
        color: #fdd835;
      }
    }
    @-moz-keyframes color-change {
      0% {
        color: #1e88e5;
      }
      50% {
        color: #4d1717;
      }
      100% {
        color: #fdd835;
      }
    }
    @-ms-keyframes color-change {
      0% {
        color: #1e88e5;
      }
      50% {
        color: #4d1717;
      }
      100% {
        color: #fdd835;
      }
    }
    @-o-keyframes color-change {
      0% {
        color: #1e88e5;
      }
      50% {
        color: #4d1717;
      }
      100% {
        color: #fdd835;
      }
    }
    @keyframes color-change {
      0% {
        color: #1e88e5;
      }
      50% {
        color: #4d1717;
      }
      100% {
        color: #fdd835;
      }
    }
  }

  .loader {
    margin-top: 1rem;
    width: 150px;
    height: 13px;
    background-color: white;
    border-radius: 20px;
    border: 3px solid #4d1717;
  }
  .loader .progress {
    width: 1%;
    height: 100%;
    background: repeating-linear-gradient(
      45deg,
      #1e88e5,
      #1e88e5 5px,
      #f44336 5px,
      #f44336 10px,
      #fdd835 10px,
      #fdd835 15px
    );
    border-radius: 20px;
    -webkit-animation-name: load;
    animation-name: load;
    -webkit-animation-duration: 3s;
    animation-duration: 3s;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    background-attachment: fixed;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    display: table;
  }

  @-webkit-keyframes load {
    from {
      width: 1%;
    }
    to {
      width: 100%;
    }
  }

  @keyframes load {
    from {
      width: 1%;
    }
    to {
      width: 100%;
    }
  }
`;
