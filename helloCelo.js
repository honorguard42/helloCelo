//
// Add package imports and setup here
//

// 1. Import ContractKit
const Web3 = require("web3")
const ContractKit = require('@celo/contractkit')

// 2. Init a new kit, connected to the alfajores testnet
const web3 = new Web3('https://alfajores-forno.celo-testnet.org')
const kit = ContractKit.newKitFromWeb3(web3)
//
// Read Accounts
//

async function readAccount(){
    // 3. Get the token contract wrappers
    let goldtoken = await kit.contracts.getGoldToken()
    let stabletoken = await kit.contracts.getStableToken()

    // 4. Address to look up
    let anAddress = '0xD86518b29BB52a5DAC5991eACf09481CE4B0710d'

    // 5. Get Get token balances
    let celoBalance = await goldtoken.balanceOf(anAddress)
    let cUSDBalance = await stabletoken.balanceOf(anAddress)

    // Print balances
    console.log(`${anAddress} CELO balance: ${celoBalance.toString()}`)
    console.log(`${anAddress} cUSD balance: ${cUSDBalance.toString()}`)
}

//
// Create an Account
//

// 6. Import the getAccount function

async function createAccount(){
    // 7. Get your account    
    // 8. Get the token contract wrappers  
    // 9. Get your token balances
    // Print your account info
}

//
// Send CELO
//

async function send(){
    // 10. Get your account
    // 11. Add your account to ContractKit to sign transactions
    // 12. Specify recipient Address
    // 13. Specify an amount to send
    // 14. Get the token contract wrappers       
    // 15. Transfer CELO and cUSD from your account to anAddress
    // 16. Wait for the transactions to be processed
    // 17. Print receipts
    // 18. Get your new balances
    // 19. Print new balances
}

readAccount()
createAccount()
send()
