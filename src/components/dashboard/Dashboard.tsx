'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Account, Assets } from '@/utils/types';
import Link from 'next/link';
import Header from './header/Header';
import { formatCurrency } from '../formatCurrency';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import Loader from '../Loader';
import { GoArrowDown, GoArrowUp } from 'react-icons/go';
import { IoReaderOutline } from 'react-icons/io5';

import Image from 'next/image';
import AssetDetails from './AssetDetails';

const getFormattedDate = () => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  };
  const today = new Date();
  return today.toLocaleDateString('en-US', options);
};

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<Account | null>(null);
  const [hideBalance, setHideBalance] = useState(false);
  const [assetPrices, setAssetPrices] = useState<{ [key: string]: number }>({});
  const [showMsg, setShowMsg] = useState(false);
  const [loading, setIsLoading] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState<Assets | null>(null);

  const toggleShowMsg = () => {
    setIsLoading(true);
    setShowMsg(false);
    setTimeout(() => {
      setIsLoading(false);
      setShowMsg(true);
    }, 3000); // 3 seconds loading time
  };

  const toggleHideBalance = () => {
    setHideBalance(true);
  };

  const toggleShowBalance = () => {
    setHideBalance(false);
  };

  const handleAssetClick = (asset: Assets) => {
    if (!asset.assetsName) {
      console.error('Asset name is undefined');
      return;
    }
    setSelectedAsset(asset);
  };

  const handleCloseModal = () => {
    setSelectedAsset(null); // Close the modal by resetting the selected asset
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    } else {
      router.push('/');
    }
  }, [router]);

  useEffect(() => {
    const fetchAssetPrices = async () => {
      try {
        const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin,bitcoin-cash,tether&vs_currencies=usd`);
        const data = await response.json();
        console.log('Fetched asset prices:', data);
        setAssetPrices({
          BTC: data.bitcoin.usd,
          BCH: data['bitcoin-cash'].usd,
          ETH: data.ethereum.usd,
          BNB: data.binancecoin.usd,
          USDT: data.tether.usd
        });
      } catch (error) {
        console.error('Error fetching asset prices:', error);
      }
    };

    fetchAssetPrices();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    router.push('/');
  };

  if (!user) {
    return <Loader />;
  }

  const formattedDate = getFormattedDate();

  // Calculate total balance in USD
  const totalBalanceUSD = user.assets.reduce((total, asset) => {
    const assetPrice = assetPrices[asset.assetsName] || 0;
    return total + assetPrice * asset.quantity;
  }, 0);

  return (
    <div className="w-full h-full pb-20">
      <Header handleLogout={handleLogout} user={user} />
      <div className="px-4">
        <div className="rounded-[18px] shadow-sm px-4 flex flex-col items-center justify-center w-full text-center min-h-[100px]">
          <span className="text-white/50 flex items-center gap-1">
            Total Balance
            {hideBalance ? <FiEyeOff onClick={toggleShowBalance} /> : <FiEye onClick={toggleHideBalance} />}
          </span>
          <span className="text-white text-[28px] mt-1"> {hideBalance ? '*****' : formatCurrency(totalBalanceUSD)}</span>
          <span className="text-white font-medium flex items-center gap-1">{user.holder.full_name}</span>
        </div>
      </div>
      {loading && <p className="text-[#811c1c] text-center text-sm p-4 pt-4 pb-0">Please wait...</p>}
      {!loading && showMsg && <p className="text-[#811c1c] text-center text-sm p-4 pt-4 pb-0">Service is down, Please try again later...</p>}{' '}
      <div className="flex items-center justify-center gap-10 p-4 mb-5">
        <Link href="/dashboard/send-crypto" className="flex flex-col items-center justify-center gap-2">
          <button className="text-2xl p-2 flex items-center justify-center bg-[#2A2A2A] shadow-sm text-[#ab9ff2] w-[60px] h-[60px] rounded-full">
            <svg fill="none" viewBox="0 0 24 24" width="24px" height="24px" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M21 3 10 14M21 3l-7 20-4-9M21 3 1 10l9 4" />
            </svg>
          </button>
          <span className="text-white text-base">Send</span>
        </Link>
        <button
          className="flex flex-col items-center justify-center gap-2"
          onClick={e => {
            e.preventDefault(); // Prevent navigation
            if (user.assets.length > 0) {
              setSelectedAsset(user.assets[0]); // Select the coin asset to show
            }
          }}
        >
          <button className="text-2xl p-2 flex items-center justify-center bg-[#2A2A2A] shadow-sm text-[#ab9ff2] w-[60px] h-[60px] rounded-full">
            <svg fill="none" viewBox="0 0 24 24" width="24px" height="24px" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="_1xhfa5af _1qwevyc107 _1qwevyc11f _1qwevyc2w3">
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M5.5 6.1a.6.6 0 0 1 .6-.6h.8a.6.6 0 0 1 .6.6v.8a.6.6 0 0 1-.6.6h-.8a.6.6 0 0 1-.6-.6zM5.5 17.1a.6.6 0 0 1 .6-.6h.8a.6.6 0 0 1 .6.6v.8a.6.6 0 0 1-.6.6h-.8a.6.6 0 0 1-.6-.6zM16.5 6.1a.6.6 0 0 1 .6-.6h.8a.6.6 0 0 1 .6.6v.8a.6.6 0 0 1-.6.6h-.8a.6.6 0 0 1-.6-.6z"
                clipRule="evenodd"
              />
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM3 16a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM14 5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2z"
              />
              <path
                fill="currentColor"
                d="M13 14a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zM13 20a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zM19 20a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zM19 14a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zM16 17a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1z"
              />
            </svg>
          </button>
          <span className="text-white text-base">Receive</span>
        </button>
        <Link href="/dashboard/transactions" className="flex flex-col items-center justify-center gap-2">
          <button className="text-2xl p-2 flex items-center justify-center bg-[#2A2A2A] shadow-sm text-[#ab9ff2] w-[60px] h-[60px] rounded-full">
            <IoReaderOutline />
          </button>
          <span className="text-white text-base">History</span>
        </Link>
      </div>
      <div className="px-4">
        <div className="p-4 text-sm text-left shadow-sm rounded-[8px] text-white bg-[#2A2A2A]">
          <p>Add crypto from Binance or Coinbase</p>
          <p>Please keep your wallet safe</p>
        </div>
      </div>
      <div className="mt-10 px-4">
        <p className="mb-3 text-white">Assets</p>
        {user.assets.map((asset, index) => {
          const assetPriceInUSD = assetPrices[asset.assetsName];
          const assetQuantity = asset.quantity;

          // Calculate asset value in USD, show $0.00 if quantity is 0
          const assetValueInUSD = assetPriceInUSD && assetQuantity ? assetPriceInUSD * assetQuantity : 0;

          return (
            <button
              key={asset.assetsName}
              className={`rounded-[30px] w-full flex bg-[#2A2A2A] border-[#2A2A2A] mb-1 shadow-sm justify-between pr-5 p-4 ${index === 0 ? 'border-t border-b' : 'border-b'}`}
              onClick={() => handleAssetClick(asset)}
            >
              <div className="flex gap-2">
                <div className="flex items-center justify-center bg-[#2A2A2A] shadow-sm text-white w-[40px] h-[40px] rounded-full">
                  <Image src={asset.assetsLogo} width={40} height={40} alt={`${asset.assetsName} Logo`} />
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-[17px] text-white">{asset.assetsName}</span>
                  <span className="text-sm text-[#c0c0c0]">{assetPriceInUSD ? `$${assetPriceInUSD.toLocaleString()}` : 'Loading...'}</span>
                </div>
              </div>
              <div className="text-sm flex text-right flex-col">
                <span className="text-white">{assetQuantity}</span>
                <span className="text-[#c0c0c0]">{assetValueInUSD === 0 ? '$0.00' : `$${assetValueInUSD.toLocaleString()}`}</span>
              </div>
            </button>
          );
        })}
      </div>
      {selectedAsset && <AssetDetails asset={selectedAsset} onClose={handleCloseModal} />}
    </div>
  );
}
