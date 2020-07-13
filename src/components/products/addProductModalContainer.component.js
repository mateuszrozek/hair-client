import React, { Component } from "react";
import AddProductModal from "./addProductModal.component"

export default class AddProductModalContainer extends Component {

    state = { isShown: false };

    render() {
        return (
            <AddProductModal
                onSubmit={this.props.onSubmit}
                modalRef={(n) => (this.modal = n)}
                buttonRef={(n) => (this.closeButton = n)}
                closeModal={this.closeModal}
                onKeyDown={this.onKeyDown}
                onClickOutside={this.onClickOutside}
            />
        )
    }

    showModal = () => {
        this.setState({ isShown: true }, () => {
            this.closeButton.focus();
            this.toggleScrollLock();
        });
    };

    toggleScrollLock = () => {
        document.querySelector('html').classList.toggle('scroll-lock');
    };

    closeModal = () => {
        this.setState({ isShown: false });
        this.TriggerButton.focus();
        this.toggleScrollLock();
    };

    onKeyDown = (event) => {
        if (event.keyCode === 27) {
            this.closeModal();
        }
    };

    onClickOutside = (event) => {
        if (this.modal && this.modal.contains(event.target)) return
        this.closeModal();
    };
}