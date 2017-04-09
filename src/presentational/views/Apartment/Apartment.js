import React, { Component } from "react";
import RoomInfo from "./RoomInfo";
import NeedHousingContainer from "./NeedHousingContainer";
import ApartmentListFilter from "../../../containers/ApartmentListFilter";

class Apartment extends Component {
    render() {
        return (
            <div>
                <div>
                    <ApartmentListFilter />
                </div>
                <div>
                    <RoomInfo />
                </div>
                <div>
                    <NeedHousingContainer />
                </div>
            </div>
        )
    }
}

export default Apartment