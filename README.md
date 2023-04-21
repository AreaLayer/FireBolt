# FireBolt

App wallet for Android  and iOs with Nostr, HyperCore, Nostr and Lightning Network 

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


# Feature

- Lightning Network

- Nostr

- Bitcoin

- HyperCore (TBA)

- No shitcoins or stablecoins

# Diagram

```mermaid
stateDiagram
    wallet: ln wallet
    bip 39: bip 39
    bip 32: bip 32
    hypercore: hypercore
    nostr: nostr

    bip 39 --> nostr
    bip 39 --> hypercore
    bip 32 --> nostr
    bip 32 --> hypercore
    nostr --> wallet
    wallet --> nostr/hypercore
```

# Product

Built on BDK, LDK, HyperCore and Nostr
