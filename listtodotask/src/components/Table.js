// import React,{Fragment} from 'react';
// // import { Table as BootstrapTable, Button } from 'react-bootstrap';
// import { useSelector} from 'react-redux';
// import { editTask, deleteTask } from '../redux/actions';
// import Developer from './data/Developer.json';
// import { Button, Table } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import {useDispatch} from 'react-redux';


// function MyTable() {

//     const tasks = useSelector((state) => state.tasks);
//     const dispatch = useDispatch();

//     const handleEdit = (id, task) => {
//         // Dispatch the editTask action
//         dispatch(editTask(id, task));
//     }

//     const handleDelete = (id) => {
//         // Dispatch the deleteTask action
//         dispatch(deleteTask(id));
//     }

    
//   return (
    
//         <Fragment>
//                 <div style={{ margin: "10rem" }}>
//                     <Table striped bordered hover size="sm">
//                         <thead>
//                             <tr>
//                                 <th>Developers</th>
//                                 <th>Assignee</th>
//                                 <th>Tasks</th>
//                                 <th>Description</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                         <div>
//             <h2>Task List</h2>
//             <ul>
//                 {tasks.map((task) => (
//                     <li key={task.ids}>{task.task}</li>
//                 ))}
//             </ul>
//         </div>
//                             {Developer && Developer.length > 0 ? Developer.map((item) => {
//                                 return (
//                                     <tr key={item.id}>
//                                         <td>{item.Assigne}</td>
//                                         <td>{item.id}</td>
//                                         <td>{item.task}</td>
//                                         <td>{item.description}</td>
//                                         <td>
//                                             <Link to='/edit'>
//                                             <Button onClick={() => handleEdit(item.Assigne, item.id, item.task, item.description)}>Edit</Button>
//                                             </Link>
//                                             &nbsp;
//                                             <Button onClick={() => handleDelete(item.id)}>Delete</Button>
//                                         </td>
//                                     </tr>
//                                 )
//                             }) : "No data Available"}
//                         </tbody>
//                     </Table>
//                     <br />
//                     <Link className='d-grid gap-2' to='/create'>
//                         <Button size='lg'>Create</Button>
//                     </Link>
//                 </div>
//             </Fragment>
  
//   );
// }

// export default MyTable;
