import React from "react";

export default function Comment(props) {
    //console.log(this.props.info);
    const {rating,message} = this.props.info;

    return (
        <div className="media mb-3">
            <img
                className="mr-3 bg-light rounded"
                width="48"
                height="48"
                src={`https://api.adorable.io/avatars/48/${"asddas".toLowerCase()}@adorable.io.png`}
                alt="{name}"
            />

            <div className="media-body p-2 shadow-sm rounded bg-light border">
                <h6 className="mt-0 mb-1 text-muted">{rating}/5</h6>
                {message}
            </div>
        </div>
    );
}