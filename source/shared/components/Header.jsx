import React from 'react';
import { Link } from 'react-router';

import styles from './Header.css';

function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>
                SimpliRoute Dashboard
            </h1>

            <nav role="navigation" className={styles.navigation}>
                <a
                    className={styles.link}
                    href="https://app2.simpliroute.com"
                    target="_blank"

                >
                    SimpliRoute Web
                </a>
            </nav>
        </header>
    )
}

export default Header