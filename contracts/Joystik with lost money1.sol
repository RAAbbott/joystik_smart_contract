// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Joystik is ERC721Enumerable, Ownable {
  using Strings for uint256;

  string public baseURI;
  uint256 public cost = 0.069 ether;
  uint256 public maxSupply = 10000;
  uint256 public reserved = 110;
  uint256 public publicMaxMint = 10;
  bool public saleActive = false;
  bool public presaleActive = true;
  bool public raffleActive = true;
  bool public freeMintActive = false;
  mapping(address => uint256) public whitelisted;
  mapping(address => bool) public raffle;
  mapping(address => bool) public freeMints;
  
  address payable public payments;

  constructor(
    string memory _name,
    string memory _symbol,
    string memory _initBaseURI,
    address _payments
  ) ERC721(_name, _symbol) {
    setBaseURI(_initBaseURI);
    payments = payable(_payments);
  }

  // internal
  function _baseURI() internal view virtual override returns (string memory) {
    return baseURI;
  }

  // public
  function mint(uint256 _mintAmount) public payable {
    require(saleActive, "Sale is not active!");
    uint256 supply = totalSupply();
    uint256 costForUser = freeMintActive ? 0.00 ether : cost;

    if (msg.sender != owner()) {
        require(_mintAmount > 0, "Quantity must be greater than 0");
        require(supply + _mintAmount <= maxSupply - reserved, "No NFTs available to mint, SOLD OUT");
        
        if (presaleActive == true) {
            uint256 maxMintForUser = whitelisted[msg.sender];
            require(_mintAmount <= maxMintForUser, "Quantity is greater than the allowed max mint");
            require(balanceOf(msg.sender) + _mintAmount <= maxMintForUser, "User already has max number of NFTs allowed");
        } else if (freeMintActive == true) {
            require(freeMints[msg.sender] == true, "User not eligible to mint currently");
            require(_mintAmount == 1, "Only one free mint allowed");
            freeMints[msg.sender] = false;
        } else {
            if (raffleActive) require(raffle[msg.sender] == true, "User not eligible to mint currently");
            require(_mintAmount <= publicMaxMint, "Selected mint amount is greater than max allowed");
            require(balanceOf(msg.sender) + _mintAmount <= publicMaxMint, "User already has max number of NFTs allowed");
        }
        
        require(msg.value >= costForUser * _mintAmount, "Insufficient funds");
    }

    for (uint256 i = 1; i <= _mintAmount; i++) {
      _safeMint(msg.sender, supply + i);
    }
  }
  
  function walletOfOwner(address _owner)
    public
    view
    returns (uint256[] memory)
  {
    uint256 ownerTokenCount = balanceOf(_owner);
    uint256[] memory tokenIds = new uint256[](ownerTokenCount);
    for (uint256 i; i < ownerTokenCount; i++) {
      tokenIds[i] = tokenOfOwnerByIndex(_owner, i);
    }
    return tokenIds;
  }

  function tokenURI(uint256 tokenId)
    public
    view
    virtual
    override
    returns (string memory)
  {
    require(
      _exists(tokenId),
      "ERC721Metadata: URI query for nonexistent token"
    );

    string memory currentBaseURI = _baseURI();
    return currentBaseURI;
  }
  
  function userMaxMint(address _user) public view returns (uint256) {
      return whitelisted[_user];
  }

  //only owner
  
  function setTotalSupply(uint256 _total) external onlyOwner() {
      maxSupply = _total;
  }
  
  function setCost(uint256 _newCost) external onlyOwner() {
    cost = _newCost;
  }
  
  function setReserved(uint256 _reserved) external onlyOwner() {
    reserved = _reserved;
  }

  function setPublicMaxMint(uint256 _newmaxMintAmount) external onlyOwner() {
    publicMaxMint = _newmaxMintAmount;
  }

  function setBaseURI(string memory _newBaseURI) public onlyOwner {
    baseURI = _newBaseURI;
  }

  function flipSaleState(bool _state) public onlyOwner {
    saleActive = _state;
  }
  
  function setFreeMintActive(bool _state) external onlyOwner() {
      freeMintActive = _state;
  }
  
  function setPresaleActive(bool _state) public onlyOwner {
      presaleActive = _state;
  }
  
  function setRaffleActive(bool _state) public onlyOwner {
      raffleActive = _state;
  }
 
 function addWhitelistUsers(address[] calldata _users, uint256 _mintAmount) external onlyOwner {
    uint256 i;
    for (i = 0; i < _users.length; i++) {
        whitelisted[_users[i]] = _mintAmount;
    }
  }
  
  function addFreeMintUsers(address[] calldata _users) external onlyOwner {
    uint256 i;
    for (i = 0; i < _users.length; i++) {
        freeMints[_users[i]] = true;
    }
  }
  
  function addRaffleUsers(address[] calldata _users) external onlyOwner {
    uint256 i;
    for (i = 0; i < _users.length; i++) {
        raffle[_users[i]] = true;
    }
  }
    
  function withdraw() external onlyOwner {
      payable(payments).transfer(address(this).balance);
  }

  function withdrawOwner() external onlyOwner {
      payable(msg.sender).transfer(address(this).balance);
  }
}