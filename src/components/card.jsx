import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ data }) => {

    const {
        location,
        current,
    } = data

    return (
        <div className="bg-white p-5 mt-4 flex-col rounded-lg shadow-lg shadow-slate-600">
            <div className="text-center">
                <span className="block text-slate-700 font-bold text-2xl">{location.name}</span>
                <span className="text-slate-400 font-bold text-sm">{location.region}, {location.country}</span>
            </div>
            <div className="font-bold text-slate-800 flex justify-center mt-4">
                <span className="text-7xl">{current.temp_c}</span>
                <span className="text-2xl mt-2">ºC</span>
            </div>
            <div className="flex flex-col justify-center items-center mt-5">
                <img className="" src={current.condition.icon} alt="Icone Condition"/>
                <span className="text-lg font-bold text-slate-600">{current.condition.text}</span>
            </div>
        </div>
    )
}

export default Card

Card.protoType = {
    data : PropTypes.object,
}.isRequired