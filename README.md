# payment-crypto-reactnative
This project is an application to pay using cryptocurrency for Stellar (XLM) , Ethereum (ETH) , Bitcoin (BTC) and Zcoin(XZC) with React Native

## Getting Started
Follow the instructions below to build project

## Requirements
To run this project, it must be installed as follows: 

* JDK >= 1.7 (if you run on 1.6 you will get an error on "_cameras = new HashMap<>();")
* SDK Tools version >= 25.0.0 for use randombytes module to generate new stellar secret key

and modules :
* firebase
* react-native-stellar-sdk
* react-native-camera
* react-native-qrcode
* react-native-qrcode-scanner
* react-native-ui-kitten
* react-navigation


## Installation
First, Install `React Native` See [This](https://facebook.github.io/react-native/docs/getting-started.html) - For build project

install, Go to project source (/demowallet) and run this command :
(Install package module in package.json)

```
npm install
```
Setup, Link to react-native-randombytes 

```
react-native link react-native-randombytes
```
config your firebase api key in  `/configdb/connect.js` 

```
const firebaseConfig = {
    apiKey: "[your-api-key]",
    authDomain: "[your-authdomain]",
    databaseURL: "[your-database-url]",
    projectId: "[your-projectid]",
    storageBucket: "[your-storagebucket]",
    messagingSenderId: "[your-messgingSenderId]"
  };
```
setup, module Scan QR code moudule 
* See intruction for setup [react-native-qrcode-scanner ](https://github.com/moaazsidat/react-native-qrcode-scanner)
* See Instruction for setup [react-native-camera](https://github.com/react-native-community/react-native-camera) 

## Build Project

to build this project run this command:

* Android

go to /demowallet
```
react-native run-android
```

* iOS

go to /demowallet
```
react-native run-ios
```

## Backlog Features
* [x] Scan and genereate QR Code
* [x] Authentication users
* [x] Manage orders (using firebase)

* [x] Support Stellar(XLM)
* [x] Generate new stellar secret key and public key
* [x] Get account from Stellar Network
* [x] Create new stellar operation transaction 
* [x] Submit Transaction to Stellar Network

* [ ] Support Bitcoin(BTC)
* [ ] Generate new Bitcoin private key and bitcoin address
* [ ] Get account from bitcoin network
* [ ] Create and submit transaction to bitcoin network

* [ ] Support Ethereum(ETH)
* [ ] Generate new Ethereum private key and public key
* [ ] Get account from ethereum network
* [ ] Create smart contract for process payment operation
* [ ] Create and submit transaction to Ethereum Network

* [ ] Support Zcoin(XZC)
* [ ] Generate new Zcoin accont
* [ ] Get account from Zcoin Network
* [ ] Create and submit transaction to Zcoin Network
