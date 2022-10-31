import Image from "next/image";
import Link from "next/link";

import styles from 'styles/Home.module.css';

interface TrendingProps {
    response: {
        src: string;
        label: string;
    }
}

export function TrendingLocations({ response }: TrendingProps) {
    return (
        <div key={response.label}>
            <Link href={"/"}>
                <a>
                    <Image src={response.src} alt={response.label} width={450} height={240} priority={true} />
                </a>
            </Link>

            <div className={styles.label}>
                <p>
                    {response.label}
                </p>
            </div>
        </div>
    )
}