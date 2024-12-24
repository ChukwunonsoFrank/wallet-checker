// Next, React
import { FC, useEffect, useState } from 'react';
import Link from 'next/link';

// Wallet
import { useWallet, useConnection } from '@solana/wallet-adapter-react';

// Components
import { RequestAirdrop } from '../../components/RequestAirdrop';
import pkg from '../../../package.json';

// Store
import useUserSOLBalanceStore from '../../stores/useUserSOLBalanceStore';

export const HomeView: FC = ({ }) => {
  const wallet = useWallet();
  const { connection } = useConnection();

  const balance = useUserSOLBalanceStore((s) => s.balance)
  const { getUserSOLBalance } = useUserSOLBalanceStore()

  useEffect(() => {
    if (wallet.publicKey) {
      console.log(wallet.publicKey.toBase58())
      getUserSOLBalance(wallet.publicKey, connection)
    }
  }, [wallet.publicKey, connection, getUserSOLBalance])

  return (

    <div className="md:hero mx-auto p-4">
      <div className="md:hero-content flex flex-col lg:pl-48">
        <div className='mt-6'>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#DADADA] mb-1">
          Wallet Checker
        </h1>
        </div>
        <h4 className="text-base text-[#DADADA] md:w-[28rem] md:text-center">
          <p className='text-[#DADADA]'>See how many tokens you are entitled to when the TGE goes live.</p>
        </h4>
        <div className="hidden w-screen md:block"></div>
        <div className="mt-14 md:mt-8">
          <label htmlFor="wallet__address__input" className='block mb-3 text-xs text-[#DADADA]'>Enter wallet address</label>
          <input type="text" className='bg-transparent border border-white rounded-full w-full md:w-[32rem] lg:w-[40rem] py-3 px-6 focus:outline-none' />
        </div>

        <Link href="/token">
          <div className="flex bg-[#A3FF12] items-center text-[#090A1A] rounded-full w-full md:w-[32rem] lg:w-[40rem] py-3 px-6 mt-4 md:mt-1">
              <div className='flex-1 text-center'>
                <p className='font-normal text-sm'>View your token count</p>
              </div>
              <div className='flex-none w-5'>
                <img className='block' src="/chevron-right.svg" alt="" />
              </div>
          </div>
        </Link>
        
      </div>
    </div>
  );
};
