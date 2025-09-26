import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { BiSolidCopy } from 'react-icons/bi';
import { FaShareAlt } from 'react-icons/fa';
import { FaCircleExclamation } from 'react-icons/fa6';
import { IoIosArrowBack } from 'react-icons/io';
import { PiHashStraightFill } from 'react-icons/pi';

interface AssetDetailModalProps {
  asset: {
    assetsName: string;
    quantity: number;
    assetsLogo: string;
    assetsName2?: string;
    walletAddress?: string;
    barCodeImgUrl?: string;
  } | null;
  onClose: () => void;
}

export default function AssetDetails({ asset, onClose }: AssetDetailModalProps) {
  const [copySuccess, setCopySuccess] = useState<string | null>(null);

  const handleCopyToClipboard = () => {
    if (asset && asset.walletAddress && typeof window !== 'undefined' && navigator.clipboard) {
      navigator.clipboard
        .writeText(asset.walletAddress)
        .then(() => setCopySuccess('Address copied to clipboard!'))
        .catch(() => setCopySuccess('Failed to copy'));

      // Clear the success message after a delay
      setTimeout(() => setCopySuccess(null), 1000);
    } else {
      setCopySuccess('Clipboard not supported');
    }
  };

  if (!asset) {
    return (
      <div className="w-full text-center p-5">
        <p className="text-white text-base">No asset selected.</p>
      </div>
    );
  }

  return (
    <div className="w-full h-screen absolute bg-[#212121] top-0 right-0">
      <div className="sticky text-[#ffffff] top-0 z-10 p-3 py-5 flex items-center justify-between gap-1">
        <button className="flex items-center gap-2" onClick={onClose}>
          <IoIosArrowBack className="text-2xl text-[#ffffff]/70" />
        </button>
        <span className="font-semibold">Receive</span>
        <FaCircleExclamation className="text-[#ffffff]/70 text-xl mt-1 rotate-180" />
      </div>
      <div className="px-4 mt-3 mb-[30px]">
        <div className="bg-[#1f1b08] rounded-[10px] text-[#ffffff] top-0 z-10 p-3 py-5 flex gap-3 justify-between">
          <FaCircleExclamation className="text-yellow-400 text-2xl mt-1 rotate-180" />
          <span className="text-yellow-400 text-xs">Only send {asset.assetsName2} ({asset.assetsName}) network assets to this address. Other assets will be lost forever.</span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-xl px-4 text-center">
        <div className="flex items-center justify-center gap-2">
          <Image src={asset.assetsLogo} width={100} height={100} alt={`${asset.assetsName} logo`} className="w-[25px] h-[25px]" />
          <span className="font-bold text-white text-base">{asset.assetsName}</span>
          <span className="text-xs bg-[#f5f5f5] px-2 py-1 rounded-[20px]">COIN</span>
        </div>
        <div className="flex items-center flex-col justify-between p-[18px] my-5 rounded-[15px] bg-white w-[270px] mx-auto min-h-[250px]">
          <div className="w-full h-[230px] mb-2">{asset.barCodeImgUrl && <Image src={asset.barCodeImgUrl} width={5000} height={5000} className="w-full h-full" alt="Wallet Address QR Code" />}</div>
          <span className="break-all w-full text-base">{asset.walletAddress || 'No address available'}</span>
        </div>
        <div className="w-[260px] flex items-center justify-between">
          <div className="flex flex-col gap-2 items-center">
            <button onClick={handleCopyToClipboard} className="bg-[#181717] flex items-center justify-center rounded-[100%] w-[50px] h-[50px]">
              <BiSolidCopy className="text-white/70" />
            </button>
            <span className="text-white/70 text-sm">Copy</span>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <button className="bg-[#181717] flex items-center justify-center rounded-[100%] w-[50px] h-[50px]">
              <PiHashStraightFill className="text-white/70" />
            </button>
            <span className="text-white/70 text-sm">Set Amount</span>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <button className="bg-[#181717] flex items-center justify-center rounded-[100%] w-[50px] h-[50px]">
              <FaShareAlt className="text-white/70" />
            </button>
            <span className="text-white/70 text-sm">Share</span>
          </div>
        </div>
        {copySuccess && (
          <div className="flex items-center justify-center">
            <div className="mt-2 w-[270px] bg-white text-black text-sm py-2 px-4 rounded-lg shadow-md">
              <span className="break-all w-full text-sm">{copySuccess}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
