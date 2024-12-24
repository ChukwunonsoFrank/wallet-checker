// Next, React
import { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import Confetti from 'react-confetti';

// Wallet
import { useWallet, useConnection } from '@solana/wallet-adapter-react';

// Store
import useUserSOLBalanceStore from '../../stores/useUserSOLBalanceStore';

export const TokenView: FC = ({ }) => {
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
            <Confetti className="w-screen" tweenDuration={500} />
            <div className="md:hero-content flex flex-col mt-20 lg:pl-52">
                <div className='mt-6 lg:mt-1 flex justify-center w-screen'>
                    <img src="/alpharand-token-coin.png" alt="" />
                </div>
                <div className="hidden w-screen md:block"></div>
                <div className='text-center'>
                    <h2>Congrats, you are eligible to claim</h2>
                </div>

                <div className='my-2 text-center'>
                    <h1 className='text-4xl text-[#A3FF12]'>348 ARD</h1>
                </div>

                <div className='text-center'>
                    <h2>tokens at the TGE event!</h2>
                </div>

                <div className="container mx-auto px-6 md:px-28 lg:px-48 mt-8 md:mt-1">
                    <Link href="/">
                        <div className="flex bg-[#A3FF12] items-center text-[#090A1A] rounded-full w-full py-3 px-6 mt-4">
                            <div className='flex-none w-5'>
                                <img className='block' src="/chevron-left.svg" alt="" />
                            </div>
                            <div className='flex-1 text-center'>
                                <p className='font-normal text-sm'>Back to Wallet Checker</p>
                            </div>
                        </div>
                    </Link>
                </div>

            </div>
        </div>
    );
};
