// src/utils/types.ts
export interface Account {
  account_id: string;
  holder: {
    full_name?: string;
    jointAccount?: boolean;
    email?: string;
    accountWalletAddress?: string;
    dateCreated?: string;
    dateUpdated?: string;
    username: string;
    password: string;
  };
 
  transaction_mgs_code: {
    transaction_text_msg?: string;
    transaction_return_msg?: string;
    transaction_code?: string;
    wireDate: boolean;
  };
  transaction_history: Transaction[];
  assets: Assets[];
}

export interface Transaction {
  transaction_id?: string;
  date: string;
  time?: string;
  description: string;
  walletAddress: string;
  status: string;
  quantity: number;
  isAssetUSDT?: boolean;
  amount_in_usd: number;
  assets: string;
}

export interface Assets {
  assetsLogo: string;
  assetsName: string;
  assetsName2?: string;
  walletAddress?: string;
  barCodeImgUrl?: string;
  quantity: number;
}
