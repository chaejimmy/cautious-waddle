import Image from 'next/image';
import Link from 'next/link';

interface LocationProps {
    response: {
        src: string;
        label: string;
    }
}

export function Location({ response }: LocationProps) {
    return (
        <div>
            <Link href={"/"}>
                <a>
                    <Image src={response.src} alt={response.label} width={340} height={220} priority={true} />
                </a>
            </Link>
            <p>
                {response.label}
            </p>
        </div>
    )
}