import styled from "styled-components";
import StripeCheckout from 'react-stripe-checkout';
import { useState, useEffect } from "react";
import axios from "axios";

const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Button = styled.button`
    border: none;
    width: 120;
    border-radius: 5;
    padding: 20px;
    background-color: black;
    color: white;
`
const KEY = "pk_test_51Jak6cGMIkah3hspyiBwtiM4GpdEVdyp4vxp4EqE4Ai1IGJfnO5CJJivTsEYf20UN9KSa3s1WQfXMLV74UkxZGYt000YLxIxVA"

const Pay = () => {
    const [stripeToken, setStripeToken] = useState(null);
    const onToken = (token) => {
        console.log(token);
        setStripeToken(token)
    }
    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await axios.post(
                    "http://localhost:5000/api/checkout/payment",
                    {
                        tokenId: stripeToken.id,
                        amount: 2000,
                    }
                )
                console.log(res.data);
            } catch (err) { console.log(err); }
        };
        stripeToken && makeRequest()
    }, [stripeToken]);
    return (
        <Container>
            <StripeCheckout
                name="Mark shop"
                image="https://avatars.githubusercontent.com/u/70297692?s=60&v=4"
                description="Your total is $50"
                amount={2000}
                token={onToken}
                stripeKey={KEY}
            >
                <Button>
                    Pay now
                </Button>
            </StripeCheckout>
        </Container>
    );
};

export default Pay;