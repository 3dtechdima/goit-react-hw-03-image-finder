import styled from "styled-components";

export const ModalStyle = styled.section`
  .Overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 9999;
  }

  .Modal {
    max-width: calc(100vw - 48px);
    max-height: calc(100vh - 24px);
  }
`;
