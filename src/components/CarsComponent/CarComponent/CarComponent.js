import React from "react";

class CarComponent extends React.Component {
    constructor(props) {
        super (props);
    }

    render() {
        return (
            <div>
                <div>id: {this.props.car.id}</div>
                <div>brand: {this.props.car.brand}</div>
                <div>price: {this.props.car.price}</div>
                <div>year: {this.props.car.year}</div>
                <hr/>
            </div>
        )
    }

}

export {CarComponent}