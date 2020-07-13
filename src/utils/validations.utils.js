import React from "react";


export const required = value => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
}

export const length_3_100 = value => {
    if (value.length < 3) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is too short!
            </div>
        );
    } else if (value.length > 100) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is too long!
            </div>
        );
    }
}