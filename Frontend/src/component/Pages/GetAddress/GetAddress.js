import React,{useState} from 'react';
import Alert from 'react-bootstrap/Alert';
import { Button } from 'react-bootstrap';
import { apiCallPost } from '../../../services/axios';
import { useNavigate } from 'react-router-dom';

function GetAddress() {
        const [walletAddress, setWalletAddress] = useState('')
        const navigate = useNavigate()

    const handleAddress = async() => {
        const  result = await apiCallPost('http://10.1.8.61:6969/getAddress')
        setWalletAddress(result.data.smartWalletAddress)
    }

    const handleNavigation= async() => {
        console.log("Navigated")
        navigate("/liquidityPage")
    }

  return (
    <>
    <Alert variant="success">
      <Alert.Heading>Smart Wallet Address : </Alert.Heading>
      <p>
         Your Smart Wallet Address --
      </p>
      <hr />
      <h3  >
      {walletAddress}
      </h3>
    </Alert>
    <Button onClick={handleAddress} style={{margin: '20px'}}>Get Address</Button>
    <Button onClick={handleNavigation}  style={{margin: '20px'}}>Go To Liquidity Page</Button>
    </>
  );
}

export default GetAddress;