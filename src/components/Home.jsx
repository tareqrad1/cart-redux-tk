import Container from "react-bootstrap/esm/Container"
import Cards from "./Cards"
import { fetchApiData } from '../api/createApi.api';
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import Spinner from 'react-bootstrap/Spinner';

const Home = () => {
    const dispatch = useDispatch()
    const value = useSelector((state) => state.products);
    console.log(value.data[0]); // value.loading - data - error

    useEffect(() => (async() => {
        const products = await fetchApiData() //return products and add to dispatch
        dispatch(products);
    }),[fetchApiData]);

  return (
    <>
        <Container className="comp">
            <div className="row gap-4">
                {value.loading && <Spinner className="mx-auto mt-5" animation="border" variant="primary" />}
                {value.data && !value.error && !value.loading && (
                        value?.data[0]?.map((ele) => {
                            return (
                                <div className="col" key={ele.id}>
                                    <Cards ele={ele} />
                                </div>
                            )
                        })
                )}
                {value.error && <h1>{value.error}</h1>}
            </div>
        </Container>
    </>
  )
}

export default Home