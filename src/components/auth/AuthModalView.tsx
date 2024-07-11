import React from "react";
import AuthComponent from "components/auth/index";
import Modal from "components/common/Modal";

const AuthModalView = ({ onClose, isModalOpen }: any) => {
  return (
    <>
      {isModalOpen && (
        <Modal onClose={onClose}>
          <AuthComponent />
        </Modal>
      )}
    </>
  );
};

export default AuthModalView;
