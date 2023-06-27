# FireBolt ⚡

App wallet for Android  and iOs with Nostr, HyperCore, Nostr, Lightning Network, TBD, CoinJoin and PayJoin

<p align="center">
  <a href="https://github.com/AreaLayer/FireBolt" title="AreaLayer">
    <img alt="FireBolt" src="./src/assets/firebolt_logo_readme.png" width="150"></img>
  </a>
</p>

<h3 align="center">FireBolt</h3>


---

**⚠️ Alpha software may put your money at risk.**

**⚠️ We recommend using only small amounts.**

 Android - Download latest APK (Soon)

iPhone - Download latest TestFlight app (Soon)

---
## Overview

Reclaim your self sovereign

Firebolt is a wallet designed by a Bitcoiner for Bitcoiners looking for privacy using Payjoin, Lightning Network, Coinjoin, Bitcoin, Hypercore, Nostr and TBD

Each individual has their own identity using Nostr or ID according to their preference

## The problem

Central Banks, inflations and cetralized social media

## Firebolt's solution

Firebolt offers a Bitcoin wallet that supports both on-chain and lightning transactions. The application runs a custom, non-routing Lightning node created with the Lightning Development Kit on the user's mobile phone. By default, you connect to Area Layer's Electrum-Bitcoin Core server, but you can also connect to your own server. We onboard users to Lightning through our lightning service provider (LSP) Timelight. In the future, we will also enable connections to other LSPs and peers on the network.

Users can back up their Bitcoin and Lightning keys with a standard BIP-39 seed and optional password. Lightning channel data is automatically replicated on our backup server. The data is encrypted on the client-side before it is sent to our server to ensure privacy. You can view our code here.

The other main features Firebolt supports are as follows:

📱 Contact list via Npub or ID
🪙 Payments via Lightning Network
⚛️ Coinjoin and Payjoin for privacy

All these additional features are powered by Npub: a collection of software modules and specifications that complements the Bitcoin and Lightning stacks in the building of peer-to-peer applications, specifically to enable decentralized identities and web-of-trust reputation systems. You can view our JavaScript-based software development kit which has been used for the Firebolt wallet here.

Npub user data is automatically replicated via our seeding server. In this way, user data is always available. In addition, it allows the user to restore all their Npub data from just their BIP-39 seed and optional password.

## Feature

- Lightning Network (LND/LDK/CLN/Greenlight)

- Nostr

- Bitcoin

- HyperCore 

- TBD

- LSP

- CoinJoin 

- Multisig 

- PayJoin

- Bitcoin-only

- Backup using Nostr keys and BIP-39

- Management Nostr Keys

- Contact list via Nostr (NPub) and ID (Web 5)

## Coinjoin Demo and PoC

In this demo, we'll present as can work the Coinjoin on Firebolt.

You can check here: [Coinjoin Demo](https://github.com/AreaLayer/Coinjoin-PoC-demo)

## Roadmap

- [ ] Mainnet

- [X] Testnet

- [X] CoinJoin Fee

- [ ] LSP

- [x] LDK integration 

- [ ] CLN integration (WIP)

- [ ] GreenLight integration

- [X] LND integration

- [X] Taproot, Segwit and Legacy

- [ ] Multisig

- [ ] Miniscript

- [x] CoinJoin Algorithm powered by CoinJoinXT

- [ ] CoinSwap implementation for privacy during mixing

- [ ] UI/UX

- [ ] TBD 

- [ ] PayJoin (BIP-78) integration beta

- [ ] Seed extension via BIP-32

- [ ] Contact List

- [x] Backup via BIP-39 via Nostr and Hypercore

- [ ] Nostr client and signatures 

- [ ] Beta app

- [ ] PWA

## Run App 

Soon

## Contribution

[Check the details here](https://github.com/AreaLayer/FireBolt/blob/main/CONTRIBUTING.md)
