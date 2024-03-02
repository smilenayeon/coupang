
"use client";

import React, {useState} from 'react';
import LogoPath from "@/assets/colorful.svg";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import styles from "./Auth.module.scss";
import Loader from '../../../components/loader/Loader';
import Input from '../../../components/Input/Input';

const LoginClient = () => {
    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isAutoLogin, setIsAutoLogin] = useState(false);

    const router = useRouter();
    const redirectUser = ( ) => {
        router.push("/");
    };

    const loginUser = (e) => {
        e.preventDefault();
        setIsLoading(true);
    }

    const signInWithGoogle = () => {

    }


  return (
    <>
        {isLoading && <Loader />}
        <section className={styles.page}>
            <div className={styles.container}>
                <h1 className={styles.logo}>
                    <Image priority src={LogoPath} alt="logo"/>
                </h1>

                <form onSubmit={loginUser} className={styles.form}>
                {/* input */}
                <Input 
                    email
                    icon="letter"
                    id="email"
                    name="email"
                    label="email"
                    placeholder="아이디(이메일)"
                    className={styles.control}
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />

                <Input 
                    password
                    icon="lock"
                    id="password"
                    name="password"
                    label="비밀번호"
                    placeholder="비밀번호"
                    className={styles.control}
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />
                    <div className={styles.group}>
                        {/* 자동로그인, 비밀번호 수정 */}
                        자동로그인, 비밀번호 수정
                    </div>
                    <div className={styles.buttonGroup}>
                        {/* button */}
                        button
                        <div>
                            {/* button */}
                            button
                        </div>
                    </div>
                </form>
            </div>
        </section>
    </>
  )
}

export default LoginClient