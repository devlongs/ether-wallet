// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Import this file to use console.log
import "hardhat/console.sol";

contract EtherWallet {
    address payable public owner;
    mapping(address => uint) public depositors;
    address[] public depositorsAddresses;

    event Withdraw(uint amount);

    constructor() {
        owner = payable(msg.sender);
    }

    receive() external payable {
        deposit();
    }

    function deposit() public payable {
        depositors[msg.sender] += msg.value;
        depositorsAddresses.push(msg.sender);
    }

    function withdraw(uint _amount) public {
        require(msg.sender == owner, "You are not the owner");
        (bool sent, ) = msg.sender.call{value: _amount}(""); // a better way to transfer money
        require(sent, "Failed to send ether");
        emit Withdraw(_amount);
    }
}
