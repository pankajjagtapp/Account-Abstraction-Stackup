import React, { useState } from 'react';
import Web3 from 'web3';

const addLiquidity = () => {
    const [from, setFrom] = useState();
    const [to, setTo] = useState();

    const addLiquidity = async () => {
        const { ethereum } = window;
        const web3 = new Web3(ethereum);
        const ac = await web3.eth.getAccount();
        const bal = await web3.eth.getBalance();
        console.log(from);
        console.log(to);

        console.log('res', ac, bal * 10 ** 18);

        const atomicAddLiquidity = await web3.eth.sendTransaction({
            
        })
    }
}