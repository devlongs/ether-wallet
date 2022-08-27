// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Import this file to use console.log
import "hardhat/console.sol";

contract EtherWallet {
    address payable public owner;

    constructor() {
        owner = payable(msg.sender);
    }

    receive() external payable {}

    function withdraw(uint _amount) public {
        require(msg.sender == owner, "You are not the owner");
        (bool sent, ) = msg.sender.call{value: _amount}("");
        require(sent, "Failed to send ether");
    }
}
