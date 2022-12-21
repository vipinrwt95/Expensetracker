import Form from 'react-bootstrap/Form';
import classes from './Expenses.module.css';
import React,{useRef,useState,useCallback} from 'react';
import { Container ,Overlay } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


const FIREBASE_DOMAIN="https://expense-tracker-25829-default-rtdb.firebaseio.com/";



const Expenses=()=>
{  
    const amountref=useRef();
    const descriptionref=useRef();
    const categoryref=useRef();
    const [expenses,setExpenses]=useState([])
    const [storedexpenses,setAllExpenses]=useState([])
    const [edit,setEditwindow]=useState(false);
    const target = useRef(null);
  
async function AddexpenseHandler(event){ 
    event.preventDefault()
    let amount=amountref.current.value;
    let description=descriptionref.current.value;
    let category=categoryref.current.value;
   

    const expense={
     amount:amount,
     description:description,
     category:category
     }
     const response = await fetch(`${FIREBASE_DOMAIN}/expenses.json`, {
          method: 'POST',
          body: JSON.stringify(expense),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
      
        if (!response.ok) {
          throw new Error(data.message || 'Could not create quote.');
        }
         else{
            
            setExpenses([...expenses,expense])
            
        }
              
      }
     
      const dataexpenses= useCallback(async ()=>{
        const response = await fetch(`${FIREBASE_DOMAIN}/expenses.json`);
        const data = await response.json();
        
        const allexpenses=[];
        if (!response.ok) {
          throw new Error(data.message || 'Could not fetch expenses.');
        }
      else{
        for (const key in data) {
            const quoteObj = {
              id: key,
              ...data[key],
            };
        
            allexpenses.push(quoteObj);
            
          }
          setAllExpenses(allexpenses);
       }
       
    },[storedexpenses]);
     
    dataexpenses();  

    async function deleteexpenseHandler(item)
    {
      const response = await fetch(`${FIREBASE_DOMAIN}/expenses/${item.id}.json`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
    
      if (!response.ok) {
        alert(data.message || 'Could not delete');
      }
       else{
          
         alert('Expense has been deleted')    
          
      }
      
 
    }
    const editexpenseHandler=(item)=>
    {  
      amountref.current.value=item.amount;
      descriptionref.current.value=item.description;
      categoryref.current.value=item.category;

    fetch(`${FIREBASE_DOMAIN}/expenses/${item.id}.json`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res)=>
      {    if (res)
        {
          return res.json().then(data=>
            {
              console.log("expense remmoved , now edit old one")
            })
        }
          
      })
      

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
       <Container className={classes.new}>
       <Row>
       { expenses.map(item=>
         <div className={classes.control}>
         <Col>Amount  : {item.amount} </Col>
         <Col> Description : {item.description}</Col> 
         <Col>Category : {item.category}</Col>
         </div>
        )}
       </Row>
       </Container>
       <Container>
         <div className={classes.body2}><h1>All Expenses</h1></div>
         <div ref={target}></div>
       {storedexpenses.map(item=>
         
           <div id={item.id} className={classes.cont}>
          <Row>
         <Col> AMOUNT : {item.amount} </Col> 
         <Col> DESC : {item.description}</Col>
         <Col> CATEGORY : {item.category}</Col>
         <button onClick={deleteexpenseHandler.bind(null,item)}>DELETE</button>
        <Button variant="info" onClick={editexpenseHandler.bind(null,item)} >EDIT</Button>
          </Row>
          </div>
          )
             } 
       </Container>
       </>
       ) 
}

export default Expenses;