# PoolTogether Token List

![Schema Validates](https://github.com/pooltogether/pooltogether-token-list/actions/workflows/validate.yml/badge.svg?cacheSeconds=60)

This is the official PoolTogether Token List.  It adheres to Uniswap's [token list schema](https://uniswap.org/blog/token-lists/).

All of these files have been uploaded to IPFS.

# Directions

These directions work for:

- [Uniswap](https://app.uniswap.org/#/swap)
- [Sushi](https://app.sushi.com/swap)
- any other Uniswap fork

1. Click "Select a token" on the swap page
2. At the bottom of the token select pop up, click "Manage"
3. Enter the URI `tokenlist.pooltogether.eth` into the input box
4. Click "Import" on the prompt that appears
5. Done!

If the above doesn't work, you may need to enter the IPFS URI instead: `ipfs://QmNnhCeu4RL5qDwYcuSeAeSEexzX5NvEhajRmrvB6dF9sT`

# Updating the List

Add tokens to this list!

Make sure to update the version according to these rules:

- Increment major version when tokens are removed
- Increment minor version when tokens are added
- Increment patch version when tokens already on the list have minor details changed (name, symbol, logo URL, decimals)

## Deployment

Once the changes have been made:

1. Upload the `pooltogether.tokenlist.json` file to IPFS.  You can use a service like [Pinata](https://pinata.cloud).   Make sure all of the images are uploaded too.
2. Copy the IPFS URI of the new file into this README
3. Update the ENS content record for `tokenlist.pooltogether.eth` with the new IPFS URI.  Use the [ENS App](https://app.ens.domains/name/tokenlist.pooltogether.eth)
