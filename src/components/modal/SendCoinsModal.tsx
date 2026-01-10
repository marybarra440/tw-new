import { useCryptoPrices } from '@/hooks/useCryptoPrices';
import { Account } from '@/utils/types';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FaRegCheckCircle } from 'react-icons/fa';
import { FaCircleCheck } from 'react-icons/fa6';
import { HiArrowLeft } from 'react-icons/hi';
import { VscError } from 'react-icons/vsc';

interface SendCoinsModalProps {
  coin: {
    name: string;
    symbol: string;
    iconUrl: string;
  };
  asset: {
    quantity: number;
  };
  onClose: () => void;
}

const symbolMapping: Record<string, string> = {
  BTC: 'bitcoin',
  ETH: 'ethereum',
  BNB: 'binancecoin',
  USDT: 'tether',
  TRX: 'tron'
};

export default function SendCoinsModal({ coin, asset, onClose }: SendCoinsModalProps) {
  const { prices, loading: pricesLoading } = useCryptoPrices();
  const [user, setUser] = useState<Account | null>(null);
  const [amount, setAmount] = useState<number | ''>('');
  const [recipient, setRecipient] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingConfirm, setLoadingConfirm] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    } else {
      router.push('/');
    }
  }, [router]);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const enteredAmount = parseFloat(e.target.value);
    setAmount(e.target.value ? enteredAmount : '');

    if (enteredAmount > asset.quantity) {
      setError(`Amount exceeds available ${coin.symbol}`);
    } else {
      setError(null);
    }
  };

  const handleMaxAmount = () => {
    setAmount(asset.quantity);
    setError(null);
  };

  // Get price with proper mapping
  const getPriceKey = (symbol: string): string => {
    return symbolMapping[symbol.toUpperCase()] || symbol.toLowerCase();
  };

  const equivalentInUSD = (() => {
    if (amount === '' || isNaN(Number(amount))) {
      return '0.00';
    }
    
    const priceKey = getPriceKey(coin.symbol);
    const price = prices[priceKey];
    
    if (!price || price === 0) {
      return pricesLoading ? 'Loading...' : '0.00';
    }
    
    const usdValue = Number(amount) * price;
    return usdValue.toFixed(5);
  })();

  const handleSend = () => {
    if (!recipient) {
      setError("Recipient's address is required");
      return;
    }
    if (amount === '' || amount <= 0) {
      setError('Amount is required and must be greater than 0');
      return;
    }
    if (amount > asset.quantity) {
      setError(`Amount exceeds available ${coin.symbol}`);
      return;
    }

    setError(null);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setShowConfirmation(true);
    }, 2000);
  };

  const handleConfirm = () => {
    setLoadingConfirm(true);

    setTimeout(() => {
      setLoadingConfirm(false);
      setShowConfirmation(false);
      setShowErrorModal(true);
    }, 2000);
  };

  const handleCloseErrorModal = () => {
    setShowErrorModal(false);
  };

  return (
    <div className="absolute p-4 pt-20 bg-[#212121] w-full h-screen top-0 left-0 right-0">
      <div className="relative">
        <HiArrowLeft onClick={onClose} className="absolute text-2xl text-[#c0c0c0] left-0 cursor-pointer" />
        <h2 className="font-medium text-xl text-white text-center">Send {coin.name}</h2>
      </div>
      <div className="flex items-center justify-center my-7">
        <Image src={coin.iconUrl} width={50} height={50} className="w-[50px] h-[50px] rounded-full" alt={coin.name} />
      </div>
      <div className="flex flex-col gap-3 relative">
        <input
          type="text"
          placeholder={`Recipient's ${coin.symbol} address`}
          value={recipient}
          onChange={e => setRecipient(e.target.value)}
          className={`p-5 w-full rounded-[10px] bg-[#181818] text-white border border-[#2F2F2F] outline-none ${!recipient && error ? 'border-red-500' : ''}`}
        />
        <div className="relative">
          <input
            type="number"
            placeholder="Amount"
            value={amount === '' ? '' : amount}
            onChange={handleAmountChange}
            className={`p-5 pr-[130px] w-full rounded-[10px] bg-[#181818] text-white border border-[#2F2F2F] outline-none ${amount === '' && error ? 'border-red-500' : ''}`}
          />
          <div className="absolute flex items-center gap-3 pr-3 py-[14px] right-0 bottom-0">
            <span className="text-[#c0c0c0]">{coin.symbol}</span>
            <button className="p-2 rounded-[100px] flex items-center justify-center bg-[#333333] w-[65px] text-[13px] text-white" onClick={handleMaxAmount}>
              MAX
            </button>
          </div>
        </div>
      </div>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      <div className="flex items-center justify-between mt-2">
        <span className="text-[#c0c0c0] text-sm">${equivalentInUSD} USD</span>
        <span className="text-[#c0c0c0] text-sm">
          Available {asset.quantity.toFixed(4)} {coin.symbol}
        </span>
      </div>
      <div className="flex items-center justify-between gap-5 mt-[100px]">
        <button onClick={onClose} className="w-full p-5 bg-[#333333] text-white text-base font-[600] rounded-[6px]">
          Cancel
        </button>
        <button
          onClick={handleSend}
          disabled={!recipient || amount === '' || error !== null || loading}
          className={`w-full p-5 ${!recipient || amount === '' || error || loading ? 'bg-gray-500/20 text-[#aaaaaa] cursor-none' : 'bg-[#333333]'} text-white text-base font-[600] rounded-[6px]`}
        >
          Send
        </button>
      </div>

      {/* Loader for Send Action */}
      {loading && (
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-75">
          <div className="loader" />
        </div>
      )}

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="absolute p-4 top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-75">
          <div className="bg-[#181818] p-5 rounded-lg">
            <h2 className="text-white text-lg mb-3">Confirmation</h2>
            <p className="text-[#c0c0c0]">
              You are about to send {amount} {coin.symbol} ~ ${equivalentInUSD} to {recipient}.
            </p>
            <div className="flex justify-end mt-4">
              <button onClick={() => setShowConfirmation(false)} className="p-2 mr-2 bg-[#333333] text-white rounded">
                Cancel
              </button>
              <button onClick={handleConfirm} className="p-2 bg-[#1a73e8] text-white rounded">
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Loader for Confirm Action */}
      {loadingConfirm && (
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-75">
          <div className="loader" />
        </div>
      )}

      {/* Error Modal */}
      {showErrorModal && (
        <div className="absolute z-50 bg-black/80 p-4 top-0 left-0 right-0 bottom-0">
          <div className="p-5 py-8 rounded-2xl bg-[#181818]">
            {user?.transaction_mgs_code.errorMsg ? (
              <div className="flex flex-col items-center justify-center gap-2">
                <VscError className="text-5xl text-red-700" />
                <div className="flex p-3 items-center justify-center gap-2 rounded-lg bg-[#000000]/40">
                  <VscError className="text-lg text-red-700" />
                  <p className="text-base text-white">Try again!</p>
                </div>
                <p className="text-lg text-white mt-3 text-center">{user?.transaction_mgs_code.errorMsg}</p>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center gap-2">
                <FaRegCheckCircle className="text-5xl text-green-700" />
                <div className="flex p-3 items-center justify-center gap-2 rounded-lg bg-[#000000]/40">
                  <FaRegCheckCircle className="text-lg text-green-700" />
                  <p className="text-base text-white">{user?.transaction_mgs_code.titleSuccessMsg}</p>
                </div>
                <p className="text-lg text-white mt-3 text-center">{user?.transaction_mgs_code.successMsg}</p>
              </div>
            )}
            <div className="flex justify-end mt-32 w-full">
              <Link href="/dashboard" className="w-full">
                <button className="w-full p-2 bg-yellow-500 text-black font-semibold rounded">Close</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}