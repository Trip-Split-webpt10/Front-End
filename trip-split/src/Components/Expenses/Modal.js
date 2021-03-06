import React, { useEffect, useState} from 'react';
import styled from 'styled-components';
import modalHeader from'./../Trips/images/modalHeader.jpeg';
import Axios from 'axios';

function Modal(props) {
    const [expense, setExpense] = useState({
        name: '',
        price:'',
        trip_id: props.tripId,
    })
    useEffect(() => {
    }, []);

 function handleChange(e){
     setExpense({
         ...expense, 
        [e.target.name]: e.target.value,
        trip_id: props.tripId
        });
 }
 function handleSubmit(e){
    e.preventDefault();
    //  Axios.post("https://trip-split-api.herokuapp.com/api/expenses", expense)
    //     .then(res => { 
    //         console.log(res);
    //     })
    //     .catch(err => { 
    //         console.log(err);
    //     })
    //     setExpense({...expense,  
    //         name: '',
    //         price:'',});
         props.toggleModalClass()
    }
    return (
        <ModalStyles>
            <h1 onClick={props.toggleModalClass}>Close</h1>
            <form onSubmit={handleSubmit}> 
                <h2>Add an expense to your Trip</h2>
                <input type='text' placeholder='Expense Name' name='name' value = { expense.name }  onChange={ handleChange }/>
                <input type='text'  placeholder='Expense Price' name='price'  value = { expense.price } onChange={ handleChange } />
                <input type='submit' placeholder ='Submit' />

            </form>
        </ModalStyles>
    )
}

export default Modal;


//styles
const ModalStyles = styled.div`
    height: 700px;
    width: 400px;
    margin: 50px auto 0 auto;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    background-color:#ffffff;
    text-align: center;
    img{
        width: 85%;
        margin-top: 20px;
        margin-left: 30px;
    }
    form{
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 25% 10px
    }
    input{
        width: 65%;
        margin: 10px auto 10px auto;
        height: 50px;
        padding: 10px;
        font-size: 1.3rem
    }
    input[type='submit']{
        background: pink;
        color: #fff;
        border: none;
        border-radius: 5px;
        position: relative;
        height: 62px;
        font-size: 1.6em;
        /* padding: 0 2em; */
        cursor: pointer;
        transition: 800ms ease all;
        outline: none;
        font-family: 'Nunito', sans-serif;
    }
    h2{
        font-size: 1.6rem;
        font-weight: bold;
        margin-bottom: 20px;
    }
    h1{
        float: right;
        cursor: pointer;
        color: #000000;
        font-weight: bolder;
        font-size: 1.5rem;
        margin-right: 15px;
        }
`;