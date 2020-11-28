import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CustomerDelete from './CustomerDelete';

function Customer(props){
    return (
        // JSX 문법
        // 2개 이상의 태그를 return할 때 div 태그로 묶어 반환한다
        <TableRow>
            <TableCell>{props.id}</TableCell>
            <TableCell><img src={props.image} alt="profile"/></TableCell>
            <TableCell>{props.name}</TableCell>
            <TableCell>{props.birthday}</TableCell>
            <TableCell>{props.gender}</TableCell>
            <TableCell>{props.job}</TableCell>
            <TableCell><CustomerDelete stateRefresh={props.stateRefresh} id={props.id}/></TableCell>
        </TableRow>
    )
}

export default Customer;