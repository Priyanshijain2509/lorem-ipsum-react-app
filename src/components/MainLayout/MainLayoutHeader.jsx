import React, { useState } from "react";
import "../../assets/styles/MainLayout/mainLayout.css";
import { SettingIcon, CloseIcon } from "../../icons/svg";

export default function MainLayoutHeader() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Pricing");

  const toggleModal = () => setModalVisible(!modalVisible);

  const renderContent = () => {
    switch (selectedOption) {
      case "Pricing":
        return <div>Here are the pricing details...</div>;
      case "Support":
        return <div>Support content...</div>;
      default:
        return <div>Select an option</div>;
    }
  };

  return (
    <div className="main-layout-header center-row-y">
      <div className="main-layout-heading">Lorem Ipsum</div>
      <div  className="main-layout-icon" onClick={toggleModal}>
        <SettingIcon />
      </div>
      {modalVisible && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-sidebar">
              <button
                className={`sidebar-option ${selectedOption === "Pricing" ? "active" : "hover-element"}`}
                onClick={() => setSelectedOption("Pricing")}
              >
                Pricing
              </button>
              <button
                className={`sidebar-option ${selectedOption === "Support" ? "active" : "hover-element"}`}
                onClick={() => setSelectedOption("Support")}
              >
                Support
              </button>
            </div>
            <div className="modal-main">{renderContent()}</div>
            <button className="modal-close" onClick={toggleModal}>
              <CloseIcon />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
