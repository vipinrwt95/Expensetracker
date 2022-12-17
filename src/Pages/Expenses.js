import Form from 'react-bootstrap/Form';
import classes from './Expenses.module.css';
import React,{useRef,useState} from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const Expenses=()=>
{  
    const amountref=useRef();
    const descriptionref=useRef();
    const categoryref=useRef();
    const [expenses,setExpenses]=useState([])
   const AddexpenseHandler=(event)=>
   { 
    event.preventDefault()
    let amount=amountref.current.value;
    let description=descriptionref.current.value;
    let category=categoryref.current.value;

    const expense={
     amount:amount,
     description:description,
     category:category
     }
     setExpenses([...expenses,expense])

 }

    return(
        <>
       <div className={classes.body}>
      <form onSubmit={AddexpenseHandler}>  
       <div className={classes.control}>
        <label>Amount</label>
        <input type="number" min="0" ref={amountref}/>
       </div>
       <div className={classes.control}>
        <label>Description</label>
        <input type="text"  ref={descriptionref}/>
       </div>
       <div className={classes.control}>
        <label>Category</label>
        <Form.Select size="lg" aria-label="Category" ref={categoryref}>
            
            <option>Rent</option>
            <option>Credit Card</option>
            <option>Basic</option>
            <option>Shopping</option>
            <option>Entertainment</option>
            
          </Form.Select>  
       </div>
       <div className={classes.actions} >
       <button >ADD EXPENSE</button>
       </div>
       </form>
       </div>
       <Container className={classes.cont}>
       <Row>
       { expenses.map(item=>
         <Col className={classes.control}>{item.amount} {item.description} {item.category}</Col>
        )}
       </Row>
       </Container>
     </>

    )
}

export default Expenses;