// Load the necessary libraries
const bip39 = require('bip39');
const Nostr = require('nostr-js');
import { generatePrivateKey, getPublicKey } from "nostr-tools";

 const [privateKey, setPrivateKey] = React.useState("");
  const [publicKey, setPublicKey] = React.useState("");

  const GeneratePair = () => {
    let sk = generatePrivateKey();
    setPrivateKey(sk);
    let pk = getPublicKey(sk);
    setPublicKey(pk);
  };

  useEffect(() => {
    GeneratePair();
  }, []);

  const [prefix, setPrefix] = useState("be");
  const handleChangePrefix = (event) => {
    setPrefix(event.target.value);
    setDoneGenerating(false);
  };

  const [addressesGenerated, setAddressesGenerated] = useState(0);
  const [loading, setLoading] = useState("false");

  const VanityPairSlow = async () => {
    setAddressesGenerated(0);
    let svk = generatePrivateKey();
    let pvk = getPublicKey(svk);
    let i = 0;
    while (pvk.substring(0, prefix.length) !== prefix) {
      svk = generatePrivateKey();
      pvk = getPublicKey(svk);
      i++;
      setLoading("true");
      if (i % 100 === 0) {
        setAddressesGenerated(i);
        await new Promise((r) => setTimeout(r, 1));
      }
    }
    setLoading("false");
    setPrivateKey(svk);
    setPublicKey(pvk);
    setAddressesGenerated(i);
    setDoneGenerating(true);
  };
  const VanityPair = async () => {
    setLoading("true");
    setAddressesGenerated(0);
    let svk = generatePrivateKey();
    let pvk = getPublicKey(svk);
    let i = 0;
    while (pvk.substring(0, prefix.length) !== prefix) {
      svk = generatePrivateKey();
      pvk = getPublicKey(svk);
      i++;
      if (i % 3000 === 0) {
        await new Promise((r) => setTimeout(r, 0.01));
        setAddressesGenerated(i);
      }
    }
    setLoading("false");
    setPrivateKey(svk);
    setPublicKey(pvk);
    setAddressesGenerated(i);
    setDoneGenerating(true);
  };

  const [checked, setChecked] = React.useState(true);
  const handleChangeChecked = (event) => {
    setChecked(event.target.checked);
    setAddressesGenerated(0);
    setDoneGenerating(false);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [highlight, setHighlight] = React.useState("");
  useEffect(() => {
    const HighlightPref = (prefix, pubkey) => {
      let pubkeySub = pubkey.substring(0, prefix.length);
      let prefixSub = pubkey.substring(prefix.length, pubkey.length);
      return isMobile ? (
        <Stack direction="row" justifyContent={"space-around"} sx={{ px: 2 }}>
          <Box sx={{ color: "#44ff00" }}>
            <Typography>{pubkeySub}</Typography>
          </Box>
          <Box sx={{ overflowWrap: "break-word", width: "100%" }}>
            <Typography align={"right"}>{prefixSub}</Typography>
          </Box>
        </Stack>
      ) : (
        <Stack direction="row">
          <Box sx={{ color: "#44ff00" }}>
            <Typography variant="h6">{pubkeySub}</Typography>
          </Box>

          <Typography variant="h6" align={"right"}>
            {prefixSub}
          </Typography>
        </Stack>
      );
    };
    setHighlight(HighlightPref(prefix, publicKey));
  }, [prefix, publicKey]);

  const [doneGenerating, setDoneGenerating] = React.useState(false);
// Set up the Nostr client
const nostrClient = new Nostr('wss://relay.damus.io');

// Generate a random mnemonic phrase
const mnemonic = bip39.generateMnemonic();

// Derive the master seed from the mnemonic phrase
const seed = bip39.mnemonicToSeedSync(mnemonic);

// Use the seed to derive the master private key
const hdWallet = bip32.fromSeed(seed);

// Derive a child key for a specific index (e.g., 0)
const childKey = hdWallet.derivePath(`m/44'/60'/0'/0/0`);

// Get the private key and address for the child key
const privateKey = childKey.privateKey.toString('hex');
const address = nostrClient.utils.getAddressFromPrivateKey(privateKey);

// Send some btcoin from the address
const transaction = {
  from: address,
  to: 'bcq1...',
  value: 1,
  sats: 100000,
};
nostrClient.eth.sendTransaction(transaction, privateKey)
  .then((txHash) => {
    console.log(`Transaction hash: ${txHash}`);
  })
  .catch((error) => {
    console.error(error);
  });

