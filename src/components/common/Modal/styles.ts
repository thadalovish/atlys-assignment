import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(5px);
`;

const Content = styled.div`
    position: relative;
    width: 100%;
    max-width: 515px;
    height: 80%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
}
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #131319;
  color: white;
  font-size: 28px;
  cursor: pointer;
`;

const Body = styled.div`
  height: 100%;
  overflow-y: auto;
`;

export { Overlay, Content, CloseButton, Body };
