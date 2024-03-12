# PrintOrderData
[Git Source](https://github.com/digiv3rse/core-contracts/blob/5454b58664fab805b6888a68ff40915d251f32f3/contracts/modules/creator/PrintOrderData.sol)


## State Variables
### printAccessControl

```solidity
PrintAccessControl public printAccessControl;
```


### marketCreator

```solidity
MarketCreator public marketCreator;
```


### printDesignData

```solidity
PrintDesignData public printDesignData;
```


### symbol

```solidity
string public symbol;
```


### name

```solidity
string public name;
```


### _orderSupply

```solidity
uint256 private _orderSupply;
```


### _nftOnlyOrderSupply

```solidity
uint256 private _nftOnlyOrderSupply;
```


### _subOrderSupply

```solidity
uint256 private _subOrderSupply;
```


### _nftOnlyOrders

```solidity
mapping(uint256 => PrintLibrary.NFTOnlyOrder) private _nftOnlyOrders;
```


### _orders

```solidity
mapping(uint256 => PrintLibrary.Order) private _orders;
```


### _subOrders

```solidity
mapping(uint256 => PrintLibrary.SubOrder) private _subOrders;
```


### _addressToOrderIds

```solidity
mapping(address => uint256[]) private _addressToOrderIds;
```


### _addressToNFTOnlyOrderIds

```solidity
mapping(address => uint256[]) private _addressToNFTOnlyOrderIds;
```


### _communityHelperAddressToTokenIds

```solidity
mapping(address => uint256[]) private _communityHelperAddressToTokenIds;
```


## Functions
### onlyAdmin


```solidity
modifier onlyAdmin();
```

### onlyMarketContract


```solidity
modifier onlyMarketContract();
```

### onlyFulfiller


```solidity
modifier onlyFulfiller(address _fulfiller);
```

### fulfillerIncluded


```solidity
modifier fulfillerIncluded(uint256[] memory _subOrderIds);
```

### constructor


```solidity
constructor(address _printAccessControlAddress, address _printDesignDataAddress);
```

### createOrder


```solidity
function createOrder(
    uint256[] memory _subOrderIds,
    string memory _details,
    address _chosenCurrency,
    address _buyer,
    uint256 _pubId,
    uint256 _profileId,
    uint256 _buyerProfileId,
    uint256 _totalPrice,
    bool _withPKP
) external onlyMarketContract;
```

### createNFTOnlyOrder


```solidity
function createNFTOnlyOrder(
    uint256[] memory _tokenIds,
    address _chosenCurrency,
    address _buyer,
    uint256 _pubId,
    uint256 _profileId,
    uint256 _buyerProfileId,
    uint256 _totalPrice,
    uint256 _collectionId,
    uint256 _amount
) external onlyMarketContract;
```

### createSubOrder


```solidity
function createSubOrder(
    uint256[] memory _tokenIds,
    address _fullfiller,
    address _buyer,
    uint256 _amount,
    uint256 _orderId,
    uint256 _price,
    uint256 _collectionId
) external onlyMarketContract;
```

### setSubOrderisFulfilled


```solidity
function setSubOrderisFulfilled(uint256 _subOrderId) external onlyFulfiller(_subOrders[_subOrderId].fulfiller);
```

### setSubOrderStatus


```solidity
function setSubOrderStatus(uint256 _subOrderId, PrintLibrary.OrderStatus _status)
    external
    onlyFulfiller(_subOrders[_subOrderId].fulfiller);
```

### setOrderDetails


```solidity
function setOrderDetails(string memory _newDetails, uint256 _orderId) external;
```

### setOrderMessage


```solidity
function setOrderMessage(string memory _newMessage, uint256 _orderId)
    external
    fulfillerIncluded(_orders[_orderId].subOrderIds);
```

### setNFTOnlyOrderMessage


```solidity
function setNFTOnlyOrderMessage(string memory _newMessage, uint256 _orderId) external;
```

### setPrintAccessControlAddress


```solidity
function setPrintAccessControlAddress(address _newPrintAccessControlAddress) public onlyAdmin;
```

### setMarketCreatorAddress


```solidity
function setMarketCreatorAddress(address _newMarketCreatorAddress) public onlyAdmin;
```

### setPrintDesignDataAddress


```solidity
function setPrintDesignDataAddress(address _newPrintDesignDataAddress) public onlyAdmin;
```

### getSubOrderTokenIds


```solidity
function getSubOrderTokenIds(uint256 _subOrderId) public view returns (uint256[] memory);
```

### getOrderDetails


```solidity
function getOrderDetails(uint256 _orderId) public view returns (string memory);
```

### getOrderMessages


```solidity
function getOrderMessages(uint256 _orderId) public view returns (string[] memory);
```

### getOrderBuyer


```solidity
function getOrderBuyer(uint256 _orderId) public view returns (address);
```

### getOrderBuyerProfileId


```solidity
function getOrderBuyerProfileId(uint256 _orderId) public view returns (uint256);
```

### getOrderChosenCurrency


```solidity
function getOrderChosenCurrency(uint256 _orderId) public view returns (address);
```

### getOrderWithPKP


```solidity
function getOrderWithPKP(uint256 _orderId) public view returns (bool);
```

### getOrderTimestamp


```solidity
function getOrderTimestamp(uint256 _orderId) public view returns (uint256);
```

### getOrderTotalPrice


```solidity
function getOrderTotalPrice(uint256 _orderId) public view returns (uint256);
```

### getOrderPubId


```solidity
function getOrderPubId(uint256 _orderId) public view returns (uint256);
```

### getOrderProfileId


```solidity
function getOrderProfileId(uint256 _orderId) public view returns (uint256);
```

### getSubOrderStatus


```solidity
function getSubOrderStatus(uint256 _subOrderId) public view returns (PrintLibrary.OrderStatus);
```

### getSubOrderIsFulfilled


```solidity
function getSubOrderIsFulfilled(uint256 _subOrderId) public view returns (bool);
```

### getSubOrderFulfiller


```solidity
function getSubOrderFulfiller(uint256 _subOrderId) public view returns (address);
```

### getSubOrderOrderId


```solidity
function getSubOrderOrderId(uint256 _subOrderId) public view returns (uint256);
```

### getSubOrderCollectionId


```solidity
function getSubOrderCollectionId(uint256 _subOrderId) public view returns (uint256);
```

### getSubOrderAmount


```solidity
function getSubOrderAmount(uint256 _subOrderId) public view returns (uint256);
```

### getSubOrderPrice


```solidity
function getSubOrderPrice(uint256 _subOrderId) public view returns (uint256);
```

### getOrderSubOrders


```solidity
function getOrderSubOrders(uint256 _orderId) public view returns (uint256[] memory);
```

### getAddressToTokenIds


```solidity
function getAddressToTokenIds(address _address) public view returns (uint256[] memory);
```

### getOrderSupply


```solidity
function getOrderSupply() public view returns (uint256);
```

### getSubOrderSupply


```solidity
function getSubOrderSupply() public view returns (uint256);
```

### getNFTOnlyOrderSupply


```solidity
function getNFTOnlyOrderSupply() public view returns (uint256);
```

### getNFTOnlyOrderPubId


```solidity
function getNFTOnlyOrderPubId(uint256 _orderId) public view returns (uint256);
```

### getNFTOnlyOrderProfileId


```solidity
function getNFTOnlyOrderProfileId(uint256 _orderId) public view returns (uint256);
```

### getNFTOnlyOrderChosenCurrency


```solidity
function getNFTOnlyOrderChosenCurrency(uint256 _orderId) public view returns (address);
```

### getNFTOnlyOrderTimestamp


```solidity
function getNFTOnlyOrderTimestamp(uint256 _orderId) public view returns (uint256);
```

### getNFTOnlyOrderMessages


```solidity
function getNFTOnlyOrderMessages(uint256 _orderId) public view returns (string[] memory);
```

### getNFTOnlyOrderTotalPrice


```solidity
function getNFTOnlyOrderTotalPrice(uint256 _orderId) public view returns (uint256);
```

### getNFTOnlyOrderCollectionId


```solidity
function getNFTOnlyOrderCollectionId(uint256 _orderId) public view returns (uint256);
```

### getNFTOnlyOrderBuyer


```solidity
function getNFTOnlyOrderBuyer(uint256 _orderId) public view returns (address);
```

### getNFTOnlyOrderBuyerProfileId


```solidity
function getNFTOnlyOrderBuyerProfileId(uint256 _orderId) public view returns (uint256);
```

### getNFTOnlyOrderAmount


```solidity
function getNFTOnlyOrderAmount(uint256 _orderId) public view returns (uint256);
```

### getNFTOnlyOrderTokenIds


```solidity
function getNFTOnlyOrderTokenIds(uint256 _orderId) public view returns (uint256[] memory);
```

### getAddressToNFTOnlyOrderIds


```solidity
function getAddressToNFTOnlyOrderIds(address _address) public view returns (uint256[] memory);
```

### getAddressToOrderIds


```solidity
function getAddressToOrderIds(address _address) public view returns (uint256[] memory);
```

## Events
### UpdateSubOrderStatus

```solidity
event UpdateSubOrderStatus(uint256 indexed subOrderId, PrintLibrary.OrderStatus newSubOrderStatus);
```

### UpdateOrderDetails

```solidity
event UpdateOrderDetails(uint256 indexed orderId, string newOrderDetails);
```

### SubOrderIsFulfilled

```solidity
event SubOrderIsFulfilled(uint256 indexed subOrderId);
```

### OrderCreated

```solidity
event OrderCreated(
    uint256 orderId, uint256 totalPrice, address currency, uint256 pubId, uint256 profileId, address buyer
);
```

### NFTOnlyOrderCreated

```solidity
event NFTOnlyOrderCreated(
    uint256 orderId, uint256 totalPrice, address currency, uint256 pubId, uint256 profileId, address buyer
);
```

### UpdateOrderMessage

```solidity
event UpdateOrderMessage(uint256 indexed orderId, string newMessageDetails);
```

### UpdateNFTOnlyOrderMessage

```solidity
event UpdateNFTOnlyOrderMessage(uint256 indexed orderId, string newMessageDetails);
```

## Errors
### InvalidAddress

```solidity
error InvalidAddress();
```

### InvalidFulfiller

```solidity
error InvalidFulfiller();
```

