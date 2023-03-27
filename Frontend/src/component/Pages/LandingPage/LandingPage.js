import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React ,{useState} from 'react';
import { apiCallPostFormData } from '../../../services/axios';

const  LandingPage =() => {
  const [formData, setFormData] = useState({deadline:1975319856 ,withPM: false})
  const [apiData, setApiData] = useState({})
  const [txHash, setTxHash] = useState('')

const handleAddLiquidity = async (e) => {
  e.preventDefault();  
  const result = await apiCallPostFormData('http://10.1.8.61:6969/addLiquidity',formData,{})
  await setApiData(result.data)
  await setTxHash(result.data.transactionHash)
};

console.log(formData);
  return (
<>
    <Form style={{width:'400px',marginLeft:'550px'}} >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Router</Form.Label>
        <Form.Control type="text" name="router"  onChange={(e) => {setFormData({...formData, [e.target.name]: e.target.value})}}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>tokenA</Form.Label>
        <Form.Control type="text" name="tokenA" onChange={(e) => {setFormData({...formData, [e.target.name]: e.target.value})}}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>tokenB</Form.Label>
        <Form.Control type="text" name="tokenB" onChange={(e) => {setFormData({...formData, [e.target.name]: e.target.value})}}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>amountADesired</Form.Label>
        <Form.Control type="text" name="amountADesired" onChange={(e) => {setFormData({...formData, [e.target.name]: e.target.value})}}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>amountBDesired</Form.Label>
        <Form.Control type="text" name="amountBDesired" onChange={(e) => {setFormData({...formData, [e.target.name]: e.target.value})}}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>amountAMin</Form.Label>
        <Form.Control type="text" name="amountAMin" onChange={(e) => {setFormData({...formData, [e.target.name]: e.target.value})}}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>amountBMin</Form.Label>
        <Form.Control type="text" name="amountBMin" onChange={(e) => {setFormData({...formData, [e.target.name]: e.target.value})}}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>to</Form.Label>
        <Form.Control type="text" name="to"onChange={(e) => {setFormData({...formData, [e.target.name]: e.target.value})}} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>deadline</Form.Label>
        <Form.Control type='number' name="deadline"/>
      </Form.Group>
      <Button variant="primary" type="submit"  style={{marginLeft:'150px'}} onClick={(e) => {handleAddLiquidity(e)}}>
        Submit
      </Button>
      <br/>
    <label>Open goerli testnet Etherscan</label>
    <a href={`https://goerli.etherscan.io/tx/${txHash}`} target="_blank">{txHash}</a>
    </Form>

    </>
  );
}

export default LandingPage;