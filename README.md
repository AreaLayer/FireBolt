# FireBolt

App wallet for Android  and iOs with Nostr, HyperCore, Nostr and Lightning Network 

<p align="center">
  <a href="https://github.com/AreaLayer/FireBolt" title="AreaLayer">
    <img alt="FireBolt" src="./src/assets/firebolt_logo_readme.png" width="150"></img>
  </a>
</p>

<h3 align="center">FireBolt</h3>

``mermaid
stateDiagram
    evse1: charge point 1
    evse2: charge point 2
    evse2: charge point 3
    evse2: charge point 4

    wallet: ln wallet
    hypercore: hypercore
    bip 39: bip 39
    nostr: nostr

    [*] --> bip 39
    bip 39 --> nostr
    bip 39 --> hypercore
    nostr --> wallet
    wallet --> nostr/hypercore
```

---

**⚠️ Alpha software may put your money at risk.**

**⚠️ We recommend using only small amounts.**

 Android - Download latest APK (Soon)

iPhone - Download latest TestFlight app (Soon)

---


# Feature

- Lightning Network

- Nostr

- Bitcoin

- HyperCore (TBA)

- No shitcoins or stablecoins

# Product

Built on BDK, LDK, HyperCore and Nostr
