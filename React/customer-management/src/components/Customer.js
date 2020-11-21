import React from 'react';

function Customer(props){
    return (
        <div className="customer">
            <div className="static">
                <h2>chimy</h2>
                <p>951013</p>
                <p>남자</p>
                <p>학생</p>
            </div>
            <div className="variable">
                <h2>{props.name}</h2>
                <p>{props.birthday}</p>
                <p>{props.gender}</p>
                <p>{props.job}</p>
            </div>
        </div>
    )
}

export default Customer;