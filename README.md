# 🔐 Document Access Control using Blockchain

A decentralized platform that enables secure document storage and access control using Ethereum smart contracts and IPFS. This system empowers users to manage document permissions with full transparency and cryptographic integrity.

## 🚀 Features

- 🔐 **Decentralized Authentication** using MetaMask
- 📁 **Secure File Uploads** encrypted before storage
- 🌐 **IPFS Integration** for distributed document storage
- ✅ **Smart Contract Based Access Control**
- 👥 **Permission Sharing & Revocation**
- 📜 **Immutable Activity Logs**

## 🧱 Technology Stack

| Layer         | Tech Used                                                                 |
|---------------|---------------------------------------------------------------------------|
| Frontend      | React.js, JavaScript, Framer Motion, CSS                                  |
| Smart Contract| Solidity, Hardhat                                                         |
| Blockchain    | Ethereum (Sepolia Testnet)                                                |
| Storage       | IPFS (via Pinata)                                                         |
| Wallet Auth   | MetaMask, Ethers.js                                                       |
| Backend       | Node.js, Express.js (for optional logging & encryption key handling)      |
| Version Ctrl  | Git, GitHub                                                               |

## ⚙️ How It Works

1. **Login via MetaMask**  
2. **Upload File → AES Encrypt → Upload to IPFS → Store CID on-chain**  
3. **Grant Access** to another Ethereum address  
4. **Verify Access** via Smart Contract before downloading  
5. **Revoke Access** at any time  

## 📷 UI Preview

> _(Include screenshots or demo GIFs here if available)_

## 📂 Project Structure
Document-Access-Control/
├── client/ # React frontend
│ ├── components/ # Reusable components
│ ├── pages/ # Routes
│ └── App.js # Main app
├── contracts/ # Solidity smart contract
├── scripts/ # Deployment or logger scripts
├── hardhat.config.js # Hardhat config
└── README.md

## 🧪 Run Locally

### Prerequisites

- Node.js (v18+)
- MetaMask installed
- Hardhat & IPFS (via Pinata account)

### Steps

---

## ⚙️ Getting Started

### 1. Clone the Repository

## Installation

1. Clone the repository:

   ```shell

   git clone https://github.com/pnd123/Document-Access-Control-using-Blockchain.git

   ```

2. Navigate to the project directory:

```
cd client
```

3. Install the dependencies

```
npm install
```

4. Configure the project:

- Update the blockchain connection settings in the config.js file.
- Set up the necessary API keys or environment variables for blockchain integration.

5. Start the application:

```shell
npm start
```

## Usage

- Open the application in your web browser.

- Connect your wallet to the application by selecting the appropriate wallet provider and authorizing the connection.

- Upload files by clicking on the "Upload" button and selecting the desired files from your local machine.

- View your files directly from the browser interface when connected to the same wallet.

- Share files with other users by adding their addresses to the allowlist in the application settings.

- Manage the allowlist by adding or removing addresses to control access to the shared files.

- Disallow specific addresses to revoke their access to the shared content.

## Contributing

Contributions are welcome! If you would like to contribute to this project, please follow these steps:

1. Fork this repository.

2. Create a new branch (git checkout -b feature-name).

3. Commit your changes (git commit -am 'Add new feature').

4. Push to the branch (git push origin feature-name).

5. Open a Pull Request.

## Contributors 💣

| Name    | GitHub                               |
| ------- | ------------------------------------ |
| Prasann | [@pnd123](https://github.com/pnd123) |

<hr>

© 2025 Prasann Daddikar and contributors
