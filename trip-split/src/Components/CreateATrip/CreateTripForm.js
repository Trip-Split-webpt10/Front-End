import React, { useState, useEffect } from 'react'
import { withFormik, Form, Field } from 'formik';
import * as yup from 'yup';
import Axios from 'axios';
import styled from 'styled-components';

const FormDisplayFlex = styled.div`
    width: 50%;
    display: flex;
    flex-flow: column nowrap;
    margin: 0 auto;
    margin-top: 2%;
`;
const Header = styled.h1`
    margin: 2% 0% 0% 0%;
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
`;

const Row = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    margin-bottom: 2%;
`;

const Column = styled.div`
    display: flex;
    flex-flow: column nowrap;
`;

const CreateATripForm = ({ errors, touched, status }) => {
    const [trip, setTrips] = useState([])
    useEffect(() => {
        if (status) {
            setTrips([...trip, status])
        }
    }, [status])
    return (
        <>
            <Header>Create A Trip</Header>
            <Form>
                <FormDisplayFlex>
                    {touched.NameOfTrip && errors.destination && <p className="error">{errors.destination}</p>}
                    <Field type="text" id='fieldstyle' name="destination" placeholder="destination" />
                    {touched.start_date && errors.start_date && <p className="error">{errors.start_date}</p>}
                    <Field type="date" id='fieldstyle' name="start_date" placeholder="Start Date" />
                    {touched.end_date && errors.end_date && <p className="error">{errors.end_date}</p>}
                    <Field type="date" id='fieldstyle' name="end_date" placeholder="End Date" />
                    <button type="submit">Submit</button>
                </FormDisplayFlex>
            </Form>
        </>
    )
}

export default withFormik({
    mapPropsToValues: (values) => {
        return {
            destination: values.destination || '',
            start_date: values.start_date || '',
            end_date: values.end_date || ''
        }
    },
    validationSchema: yup.object().shape({
        destination: yup.string().required('Destination is a required field!'),
        start_date: yup.string().required('Start Date is a required field'),
        end_date: yup.string().required('End Date is a required field!')
    }),
    handleSubmit: (values) => {
        Axios.post('https://trip-split-api.herokuapp.com/api/trips', values)
            .then((res) => {
                alert("Trip Added!")
            })
            .catch((error) => {
                alert(error)
            })
    }
})(CreateATripForm)