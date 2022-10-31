import { useRouter } from "next/router"

import { Button } from "@mui/material";

import Image from "next/image";

import styles from 'styles/Home.module.css';

import home from '../../../public/img/icon/home.svg';
import post from '../../../public/img/icon/post.svg';
import chat from '../../../public/img/icon/chat.svg';
import map from "../../../public/img/icon/map.svg";
import add from "../../../public/img/icon/add.svg";

export function Mobile() {
    const router = useRouter()

    return (
        <div className={styles.bar}>
            <div className={styles.links}>
                <Button
                    className={styles.toprightloginicon}
                    style={{ textTransform: 'none' }}
                    startIcon={<Image src={home} alt="Message icon" />}
                // onClick={() => setShowModalRequest(true)}
                >
                </Button>
            </div>
            <div className={styles.links}>
                <Button
                    className={styles.toprightloginicon}
                    style={{ textTransform: 'none' }}
                    startIcon={<Image src={map} alt="Message icon" />}
                // onClick={() => setShowModalRequest(true)}
                >
                </Button>
            </div>
            <div className={styles.links}>
                <Button
                    className={styles.toprightloginicon}
                    style={{ textTransform: 'none' }}
                    startIcon={<Image src={add} alt="Message icon" />}
                // onClick={() => setShowModalRequest(true)}
                >
                </Button>
            </div>
            <div className={styles.links}>
                <Button
                    className={styles.toprightloginicon}
                    style={{ textTransform: 'none' }}
                    startIcon={<Image src={post} alt="Message icon" />}
                // onClick={() => setShowModalRequest(true)}
                >
                </Button>
            </div>
            <div className={styles.links}>
                <Button
                    className={styles.toprightloginicon}
                    style={{ textTransform: 'none' }}
                    startIcon={<Image src={chat} alt="Message icon" />}
                    onClick={() => router.push("/chat")}
                // onClick={() => setShowModalRequest(true)}
                >
                </Button>
            </div>
        </div>
    )
}