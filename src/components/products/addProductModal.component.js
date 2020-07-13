import React, { Component } from "react";
import { FocusTrap } from "focus-trap-react";
import ReactDOM from 'react-dom';

import AddProductForm from "./addProductForm.component";

// export default class AddProductModal extends Component {

//     constructor(props) {
//         super(props);

//         this.state = {

//         };
//     }

//     render() {
//         return (
//             <div>
//                 <aside
//                     tag="aside"
//                     role="dialog"
//                     tabIndex="-1"
//                     aria-modal="true"
//                     className="modal-cover"
//                     onClick={this.props.onClickOutside}
//                     onKeyDown={this.props.onKeyDown}
//                 ></aside>
//                 <div className="jumbotron">
//                     <AddProductForm onSubmit={this.props.onSubmit} />
//                 </div>
//             </div>
//         )
//     }
// }

export default class ProductModal extends Component {

    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}



