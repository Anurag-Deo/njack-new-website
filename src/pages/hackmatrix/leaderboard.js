import { Header, Footer } from '@/components';
import Background from '@/components/Background';
import { useState, useEffect } from 'react';
import styles from '../../styles/hackathon-submission.module.css';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Leaderboard() {
    const router = useRouter();

    const winners = [
        { position: "1st", team: "Zenith", category: "Overall Winner" },
        { position: "2nd", team: "Brainy Bots", category: "First Runner-up" },
        { position: "3rd", team: "NibbleSquad", category: "Second Runner-up" },
        { position: "Newbie", team: "Corbett", category: "Best Newcomer" },
        { position: "Hardware", team: "MirazeX", category: "Best Hardware Use" },
        { position: "People's Choice Award", team: "Vision" },
    ];

    return (
        <>
            <Head>
                <title>{`Hackmatrix 2025 - Leaderboard`}</title>
            </Head>
            <Header />
            <Background />
            <div className={styles.parentDiv}>
                <div className={styles.leaderboardContainer}>
                    <h1 className={styles.leaderboardTitle}>Hackmatrix 2025 Winners</h1>
                    <div className={styles.winnersGrid}>
                        {winners.map((winner, index) => (
                            <div key={index} className={styles.winnerCard}>
                                <div className={styles.position}>{winner.position}</div>
                                <div className={styles.team}>{winner.team}</div>
                                {winner.category? <div className={styles.category}>{winner.category}</div> : null}
                            </div>
                        ))}
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}
