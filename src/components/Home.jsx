import Container from "react-bootstrap/esm/Container"
import Cards from "./Cards"
import { fetchApiData } from '../api/createApi.api';
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import Spinner from 'react-bootstrap/Spinner';

const Home = () => {
    const dispatch = useDispatch()
    const value = useSelector((state) => state.products);
    console.log(value.loading); // value.loading - data - error

    // useEffect(() => (async() => {
    //     const products = await fetchApiData() //return products and add to dispatch
    //     dispatch(products);
    // }),[fetchApiData]);

    useEffect(() => {
        dispatch(fetchApiData())
    },[])

  return (
    <>
        <Container className="comp">
            <div className="row gap-4">
                {value.loading && <Spinner className="mx-auto mt-5" animation="border" variant="primary" />}
                {value.data && !value.error && !value.loading && (
                        value.data.map((ele) => {
                            return (
                                <div className="col" key={ele.id}>
                                    <Cards ele={ele} />
                                </div>
                            )
                        })
                )}
                {value.error && <h1>{value.error}</h1>}
                {value.data && !value.data.length && !value.loading && !value.error && (<h1 className="text-center mt-5">No Have Data Now</h1>)}
            </div>
        </Container>
    </>
  )
}

export default Home