import styled from "styled-components";

const TOCWrapper = styled.div`
  position: absolute;
  top: 10rem;
  left: 0rem;
  margin-left: 3rem;
  margin-top: 3rem;
  width: 15rem;
  padding-bottom: 2rem;
  @media screen and (min-width: 1280px) and (max-width: 1350px) {
    margin-left: 0.2rem;
  }

  .go-back {
    margin-left: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      display: inline-flex;
      svg {
        align-self: center;
        font-size: 1.5rem;
        color: rgb(177, 182, 184);
        width: 100%;
        max-width: 1.5rem;
      }
      h4 {
        font-weight: 500;
        text-transform: capitalize;
        font-size: 1.25rem;
        white-space: nowrap;
      }
      &:hover {
        svg,
        h4 {
          color: #3c494f;
        }
      }
    }
    margin-bottom: 1rem;
  }

  .toc-sub-heading {
    color: ${(props) => props.theme.text};
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    margin-top: 1rem;
    font-weight: 300;
    font-size: 1.15rem;
  }

  .toc-sub-inline {
    display: inline-block;
  }

  .active {
    font-weight: 500;
    color: ${(props) => props.theme.secondaryColor};
  }

  ul {
    display: flex;
    flex-direction: column;
    white-space: nowrap;
  }

  .toc-ul {
    display: flex;
    flex-direction: column;
    margin-top: 0rem;
    list-style: none;
  }

  .toc-toggle-btn {
    display: none;
  }

  .toc-ul-open {
    display: flex;
    flex-direction: column;
    margin-top: 0rem;
    list-style: none;
    height: auto !important;
    opacity: 1 !important;
    margin-bottom: 2rem;
    transition: all 0.4s !important;
  }

  .toc-menu-icon {
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
    fill: ${(props) => props.theme.menuColor};
  }

  .toc-sub-heading:hover {
    color: ${(props) => props.theme.secondaryColor};
  }

  @media only screen and (max-width: 750px) {
    position: initial;
    margin-right: 3rem;
    width: auto;
    .toc-toggle-btn {
      display: inline-block;
      z-index: 2;
    }
    .go-back {
      margin-left: 0;
    }

    .toc-ul {
      opacity: 0;
      height: 0;
      transition: none;
      visibility: hidden;
    }

    .toc-ul-open {
      visibility: visible;
    }
  }

  .toc-acc-item {
    background-color: transparent;
  }

  .identity, .components {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding-right: 1rem;
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme.text};
    }
  }

  .identity-sublinks, .components-sublinks {
    padding-left: 0.56rem;

    .identity-item, .components-item {
      font-size: 1.05rem;
      margin-top: 0.45rem;
    }
  }
`;

export default TOCWrapper;
