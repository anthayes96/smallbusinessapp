import React from 'react'
import {Table, TableBody, TableRow, TableHead, TableCell} from '@material-ui/core'
import { Link } from 'react-router-dom'
import AddBusiness from '../container/AddBusiness'
import DeleteIcon from '@material-ui/icons/Delete'




const listing = (props) => {
//   console.log (props)
  console.log(props.user.username)
  return (
    <div className="wrapper">
    <p>Food For everyone</p>
   <AddBusiness  /> 
    }
    {/* bizTotal={props.addBusiness} */}
    

<Table>
    <TableHead>
        <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Hours</TableCell>
        </TableRow>
    </TableHead>
    <TableBody>
    {props.shop.map((business1, idx) =>( 
        <TableRow key={business1.id} >
        <TableCell component="th" scope="row">
          {business1['Name']} 
            </TableCell>
            <TableCell> {business1['description']}</TableCell>
            <TableCell> {business1['address']}</TableCell>
            <TableCell> {business1['hours']}</TableCell>
            <TableCell>
            <DeleteIcon 
               />
            </TableCell>
        </TableRow>
        ))}
    </TableBody>
    
</Table>

</div>
);
};

export default listing