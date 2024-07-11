import React, { useEffect, ReactNode, MouseEvent } from "react";
import {
  Body,
  CloseButton,
  Content,
  Overlay,
} from "components/common/Modal/styles";

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Overlay onClick={handleOverlayClick}>
      <Content>
        <CloseButton onClick={onClose}>×</CloseButton>
        <Body>{children}</Body>
      </Content>
    </Overlay>
  );
};

export default Modal;
