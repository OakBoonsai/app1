import React from 'react';

export default function Home(){
    return(
        <p style={{textAlign:'center'}}>
            <h3>welcom to react</h3>
            name <a href="/products">product</a> we have
            <br/>
            but you have to be <a href="/member">member</a> so you can buy
            <br/>
            if you have any problem <a href="/contact">contact us</a>
            </p>
    )
}