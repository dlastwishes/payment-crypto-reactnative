import React, { Component } from 'react';
import { StyleSheet ,  TextInput , Alert , Button , Text, View } from 'react-native';
import {Asset , Operation, TransactionBuilder , Keypair , Network , Server } from '@pigzbe/react-native-stellar-sdk';

import stylecomp from './others/styles';

Network.useTestNetwork();
const server = new Server('https://horizon-testnet.stellar.org');

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    text: ''  , 
    publickey1 : 'Here will show your Public Key' , 
    newPubKey : 'Here will show your new Public Key' , 
    newSecKey : 'Here will show your new Secret Key (Keep it safe!!)' ,
    destinationKey : ''};
  }


  _getAcc = () => {
   server.loadAccount(this.state.newPubKey).then( (account) => { Alert.alert(account) })
  }

  _sendMoney = () => {
    server.loadAccount(this.state.publickey1)
  .then((account) => {
    const transaction = new TransactionBuilder(account).addOperation(Operation.payment(
      {
        destination: destinationKey,
        asset: Asset.native(),
        amount: '100' ,
      }
    )).build()}).then((result) => { Alert.alert('Hello World') } ).catch( (error) => {Alert.alert('it erro')})
  }

  newAcc = () => {
    const keypair = Keypair.randomAsync().then(keypair => {
      this.setState({ newPubKey : keypair.publicKey()});
      this.setState({newSecKey : keypair.secret()})
      this.setState({destinationKey : keypair.publicKey()})
  });
    
  }

  checkPublic = () => {
    this.setState({ publickey1 : Keypair.fromSecret(this.state.text).publicKey()})
  }

  render() {
    return (
      <View>
        <Text> Already Account </Text>
      <TextInput onChangeText={(text) => this.setState({text})} placeholder='Secret Key'/>
      <Button onPress=
      {
        this.checkPublic
      } 
    title='click me to get public key'/>
    <Text> {this.state.publickey1} </Text>
      <Text> Don't have stellar account </Text>
      <Button onPress={this.newAcc} title='get new account'/>
      <Text> Public Key  {this.state.newPubKey} </Text>
      <Text> ---------------- </Text>
      <Text>Secret Key : {this.state.newSecKey} </Text>
      <Text> Transfer Money (XLM) </Text>
      <Button onPress={this._getAcc} title='Send Money'/>
      </View>
      
    );
  }
}

