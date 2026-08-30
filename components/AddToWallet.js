'use client';

import { useState } from 'react';
import { WalletIcon, CheckIcon } from './icons';

const CONTRACT = '0x9B97B9f4264D60d4c1e45fFFA680313FC37500dD';
const SYMBOL = 'PAY3';
const DECIMALS = 18;
const POLYGON_CHAIN_ID = '0x89'; // 137

const LABELS = {
  idle: 'Add $PAY3 to your wallet',
  switching: 'Confirm network switch…',
  adding: 'Confirm in wallet…',
  added: 'Added to wallet',
  error: "Couldn't add — copy the contract instead",
  none: 'Install a wallet to continue',
};

export default function AddToWallet() {
  const [status, setStatus] = useState('idle');

  async function handleAdd() {
    if (typeof window === 'undefined' || !window.ethereum) {
      setStatus('none');
      window.setTimeout(() => setStatus('idle'), 2500);
      window.open('https://metamask.io/download/', '_blank', 'noopener,noreferrer');
      return;
    }

    try {
      setStatus('switching');
      try {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: POLYGON_CHAIN_ID }],
        });
      } catch (switchError) {
        if (switchError && switchError.code === 4902) {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: POLYGON_CHAIN_ID,
                chainName: 'Polygon Mainnet',
                nativeCurrency: { name: 'POL', symbol: 'POL', decimals: 18 },
                rpcUrls: ['https://polygon-rpc.com/'],
                blockExplorerUrls: ['https://polygonscan.com/'],
              },
            ],
          });
        } else {
          throw switchError;
        }
      }

      setStatus('adding');
      const wasAdded = await window.ethereum.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20',
          options: {
            address: CONTRACT,
            symbol: SYMBOL,
            decimals: DECIMALS,
            image: `${window.location.origin}/logo.svg`,
          },
        },
      });

      setStatus(wasAdded ? 'added' : 'idle');
    } catch (err) {
      console.error('Add to wallet failed:', err);
      setStatus('error');
    } finally {
      window.setTimeout(() => setStatus('idle'), 2600);
    }
  }

  const busy = status === 'switching' || status === 'adding';

  return (
    <button
      type="button"
      className="btn btn-primary"
      onClick={handleAdd}
      disabled={busy}
    >
      {status === 'added' ? <CheckIcon width={16} height={16} /> : <WalletIcon width={16} height={16} />}
      {LABELS[status]}
    </button>
  );
}
