# somefinance-contracts

## Install dep packages
1. ```yarn```

## Local fork of main net
1. ```ganache-cli --fork https://nd-038-867-466.p2pify.com/d5d7fc858545854262035fa5f16f4898```
   - [Gettnig a FTM node from Chainstack](https://support.chainstack.com/hc/en-us/articles/900001783063-Forking-an-EVM-compatible-mainnet-with-Ganache-CLI)

## Deploy contracts 
1. Start Ganache App or run ```ganache-cli```
   - Set port to `8545`
   - Set Gas Limit to `50000000`
2. ```truffle migrate --network development --reset```
