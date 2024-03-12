```
                                              @@@@@@@@@
                                        @@@@@@@@@@@@@@@@@@@@@
                                    @@@@@@@@@@@@@@@@@@@@@@@@@@@@
                                  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                                @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
              @@@@@@@@@@@       @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@      @@@@@@@@@@@
        @@@@@@@@@@@@@@@@@@@@@ @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ @@@@@@@@@@@@@@@@@@@@@@
      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@              @@@@@@@@@@@@@@              @@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@          @@@@@@@   @@@@@@@@@         @@@@@@    @@@@@@@@@@@@@@@@@@@@@@@@@
  @@@@@@@@@@@@@@@@@@@@@@  @@        @@@@@@@@  @@@@@@   @       @@@@@@@@   @@@@@@@@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
          @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
            @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@            @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                          @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                                  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
```

# DiGi Protocol

The DiGi Protocol is a decentralized, non-custodial social graph. DiGi implements unique, on-chain social interaction mechanisms analogous to commonly understood Web2 social media interactions, but significantly expanded with unique functionality that empower communities to form and participants to own their own social graph.

## Setup

### 1. Clone the Repository

```
git clone git@github.com:digiv3rse/core.git
```

### 2. Install Foundry

Follow the instructions from [their repository](https://book.getfoundry.sh/getting-started/installation) or just do:

```
curl -L https://foundry.paradigm.xyz | bash
```

```
foundryup
```

### 3. Install dependencies in submodules

You can do it either with forge:

```
forge install
```

or directly with git:

```
git submodule update --init --recursive
```

### 4. Create Your `.env` File

Copy the `.env.example` file into `.env` and fill the necessary fields:

```
MNEMONIC=
POLYGON_RPC_URL=
MUMBAI_RPC_URL=
SEPOLIA_RPC_URL=
ROPSTEN_RPC_URL=
MAINNET_RPC_URL=
BLOCK_EXPLORER_KEY=
TENDERLY_PROJECT=
TENDERLY_USERNAME=
TENDERLY_FORK_ID=
TENDERLY_HEAD_ID=

# Forking setup (uncomment to test using a fork)
# TESTING_FORK=mainnet
# TESTING_FORK_CURRENT_VERSION=1
# TESTING_FORK_BLOCK=45504400
```

If you just want to test locally without a fork, then you can skip this step.

### 5. Build

You can compile the project using:

```
forge build
```

You may notice a warning about some files exceeding code size.

To avoid the warning, you can compile Via IR but it will take more time:

```
forge build --via-ir
```

### 6. Test

You can run unit tests using:

```
forge test
```

To run the tests on a fork you need to fill the `.env` file from the step above, and uncomment the `TESTING_FORK` variables.

### 7. Coverage

You can run coverage using:

```
forge coverage
```
```zsh
forge create contracts/misc/DiGiHubInitializable.sol:DiGiHubInitializable --constructor-args "0x9A1bd8aa05191041189437a8706f9D0E494b6e59" "0x6A209973315EEd26a33DaeC6B042B96623aeBe03" "0x1CEC832b1cE29C3B68F30005249df4559FCd6f03" "604800" "(0xdFAe6B6CF6f8AF2Ce8e9101dBa97764AE7044C28, 0x10df9502aA1bc7d55D9718991b6B815A1553D0e5, 0x6A209973315EEd26a33DaeC6B042B96623aeBe03, 0xD616ceE62a2F4Bd34D184A1F2fDF32bD88a4AD87, 0xdC05Ffaa91DC943D00bf87414C3d6a4e3fd53eAC, 0x3DdDf83Ac140f6212bC5f1CC228Ec577907e8b92})" --chain-id 11155111 --rpc-url https://eth-sepolia.g.alchemy.com/v2/qKOejal-tbfyH6_jIHxCGwExilHgqmbF --private-key 0xa95dea2368a4c8273f49b5d5f0ff74789021e6a7ffc99c85285aefa2423bddb3 --etherscan-api-key I3GUS6WAUFY3A3R8JUNWS146S6WF72IZ1W --verify
```
("digiHandlesAddress": "0xdFAe6B6CF6f8AF2Ce8e9101dBa97764AE7044C28", "tokenHandleRegistryAddress": "0x10df9502aA1bc7d55D9718991b6B815A1553D0e5", "legacyFeeFollowModule": "0xD616ceE62a2F4Bd34D184A1F2fDF32bD88a4AD87", "legacyProfileFollowModule": "0xdC05Ffaa91DC943D00bf87414C3d6a4e3fd53eAC", "newFeeFollowModule": "0x3DdDf83Ac140f6212bC5f1CC228Ec577907e8b92"})
```zsh
forge create contracts/misc/token-uris/ProfileTokenURI.sol:ProfileTokenURI --chain-id 11155111 --rpc-url https://eth-sepolia.g.alchemy.com/v2/qKOejal-tbfyH6_jIHxCGwExilHgqmbF --private-key 0xa95dea2368a4c8273f49b5d5f0ff74789021e6a7ffc99c85285aefa2423bddb3 --etherscan-api-key I3GUS6WAUFY3A3R8JUNWS146S6WF72IZ1W --verify
```

``` bash
forge verify-contract 0xA11e2111B54Aa306b7F98eD6F9b83f0da75e82E5 contracts/namespaces/PermissionlessCreator.sol:PermissionlessCreator --constructor-args "000000000000000000000000d53b6196f526b2cf0a5f3a35a03b23b2d02b26c40000000000000000000000006dc91ccc9c66e970913f0eaccd8d63f18987234b000000000000000000000000dfae6b6cf6f8af2ce8e9101dba97764ae7044c2800000000000000000000000010df9502aa1bc7d55d9718991b6b815a1553d0e5" --chain-id 11155111 --etherscan-api-key I3GUS6WAUFY3A3R8JUNWS146S6WF72IZ1W
```

```zsh
forge create contracts/namespaces/PermissionlessCreator.sol:PermissionlessCreator --constructor-args "0xd53B6196F526b2cf0a5F3a35a03B23B2D02b26c4" "0x6Dc91CcC9C66E970913F0eAcCD8D63F18987234B" "0xdFAe6B6CF6f8AF2Ce8e9101dBa97764AE7044C28" "0x10df9502aA1bc7d55D9718991b6B815A1553D0e5" --chain-id 11155111 --rpc-url https://eth-sepolia.g.alchemy.com/v2/qKOejal-tbfyH6_jIHxCGwExilHgqmbF --private-key 0xa95dea2368a4c8273f49b5d5f0ff74789021e6a7ffc99c85285aefa2423bddb3 --etherscan-api-key I3GUS6WAUFY3A3R8JUNWS146S6WF72IZ1W --verify
```

```zsh
forge verify-contract 0xf443f75e482c5a8ae11e34ac9e6226d0804cfaaa contracts/misc/access/ProxyAdmin.sol:ProxyAdmin --constructor-args "00000000000000000000000022bb26d8f92998cf85aad76b391d15eae97af0ac0000000000000000000000003bb00b13f051e387868aacac8a2922469d96c875000000000000000000000000d53b6196f526b2cf0a5f3a35a03b23b2d02b26c4" --chain-id 11155111 --etherscan-api-key I3GUS6WAUFY3A3R8JUNWS146S6WF72IZ1W --watch
```

```bash
forge script script/S01_DeployDiGiV2Upgrade.s.sol:S01_DeployDiGiV2Upgrade --chain-id 11155111 --rpc-url https://eth-sepolia.g.alchemy.com/v2/qKOejal-tbfyH6_jIHxCGwExilHgqmbF --private-key 0xa95dea2368a4c8273f49b5d5f0ff74789021e6a7ffc99c85285aefa2423bddb3 --etherscan-api-key I3GUS6WAUFY3A3R8JUNWS146S6WF72IZ1W --verify -vvv
```
--revert-strings

Follow Type 3
References Type 2
Action type 1