import React, { Component } from 'react';
import { TextInput , Alert , Button , Text, View } from 'react-native';
import { Operation , TransactionBuilder , Transaction , Asset,  Keypair , Network , Server } from '@pigzbe/react-native-stellar-sdk';

Network.useTestNetwork();
const server = new Server('https://horizon-testnet.stellar.org');
const sourceKeys = Keypair.fromSecret("SA47Q3XQNDZERCMGLM3O4PICLFUHYIJMPQXYHO3QZV27XBVQ3MADPDTF");
let sourceAccount ,transaction;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {text: 'test'  , publickey1 : 'test test'};
  }


  _getAcc() {
    Alert.alert(server.loadAccount(this.state.destinationId));
  }

  _sendMoney() {

    server.loadAccount(this.state.destinationId)
   
    .then(function() {
    
    return server.loadAccount(sourceKeys.publicKey());

    })
   
    .then(function(sourceAccount) {
   
      transaction = new TransactionBuilder(sourceAccount)
        .addOperation(Operation.payment({
          destination: this.state.destinationId,
          asset: Asset.native(),
          amount: "100"
        })).build();

        alert.alert('hello 3');
   
    transaction.sign(sourceKeys);
   
    return  server.submitTransaction(transaction);
    })
   
    .then(function(result) {
   
      Alert.alert('Submit Transaction Success');
    })
   
    .catch(function(error) {
    Alert.alert('error');
    });
  }

  checkState1 = () => {
    this.setState({ publickey1 : Keypair.fromSecret(this.state.text).publicKey()})
  }

  render() {
    return (
      <View>
      <TextInput onChangeText={(text) => this.setState({text})} placeholder='Secret Key'/>
      <Button onPress=
      {
        this.checkState1
      } 
    title='click me'/>
      <Text> {this.state.publickey1} </Text>
      </View>
    );
  }
}

