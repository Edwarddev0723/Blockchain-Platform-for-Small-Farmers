// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

contract AgriProductTrace {
    struct Record {
        uint256 timestamp;
        string description;
    }
    
    struct Product {
        uint256 id;
        string name;
        string variety;
        string origin;
        string description;
        string price;
    }
    
    mapping(uint256 => Record[]) private records;
    mapping(uint256 => address) private productOwners;
    mapping(uint256 => Product) private products;
    uint256 private productCount;

    event ProductCreated(uint256 productId, string name, string variety, string origin, string description, string price, address owner);
    event RecordAdded(uint256 productId, uint256 timestamp, string description);

    function createProduct(
        string memory name,
        string memory variety,
        string memory origin,
        string memory description,
        string memory price
    ) public returns (uint256) {
        productCount++;
        uint256 productId = productCount;
        products[productId] = Product(productId, name, variety, origin, description, price);
        productOwners[productId] = msg.sender;
        emit ProductCreated(productId, name, variety, origin, description, price, msg.sender);
        return productId;
    }

    function addRecord(uint256 productId, string memory description) public {
        require(productOwners[productId] == msg.sender, "Only the owner can add records");
        records[productId].push(Record(block.timestamp, description));
        emit RecordAdded(productId, block.timestamp, description);
    }

    function getRecords(uint256 productId) public view returns (Record[] memory) {
        require(productId > 0 && productId <= productCount, "Product ID does not exist");
        return records[productId];
    }

    function getProduct(uint256 productId) public view returns (Product memory) {
        require(productId > 0 && productId <= productCount, "Product ID does not exist");
        return products[productId];
    }
}