'use client'
import React, { useEffect, useState } from 'react'
import styles from './Header.module.scss';
import Link from 'next/link';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '@/firebase/firebase';
import { toast } from 'react-toastify';
import { usePathname, useRouter } from 'next/navigation';
import InnerHeader from '../innerHeader/InnerHeader';
// import { useDispatch, useSelector } from 'react-redux';
// import { REMOVE_ACTIVE_USER, SET_ACTIVE_USER, selectIsLoggedIn } from '@/redux/slice/authSlice';


const Header = () => {
  const pathname = usePathname();

  const[displayName, setDisplayName] =useState('');

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user){
        if(user.displayName === null) {
                const u1 =user.email.substring(0, user.email.indexOf("@"));
                const uName = u1.charAt(0).toUpperCase() + u1.slice(1);
                setDisplayName(uName);
                //유저정보를 리덕스 스토어에 저장하기
              }else{
                setDisplayName(user.displayName);
              }
      }
    })
  },[])

  const logoutUser = (e) => {
    signOut(auth)
    .then(() => {
      toast.success("로그아웃되었습니다.");
      router.push("/");
    })
    .catch((error=>{
      toast.error(error.message);
    }))
  };

  if( pathname === "/login" || pathname === "/register" || pathname === "/reset"){
    return null;
  }

  return (
    <header>
      <div className={styles.loginBar}>
        <ul className={styles.list}>
        
          <li className={styles.item}>
            <Link 
            href={"/login"}
           >
              로그인
            </Link>
          </li>

          <li className={styles.item}>
            <Link 
            href={"/admin/dashboard"}
            >
              관리자
            </Link>
          </li>

          <li className={styles.item}>
            <Link 
            href={"/order-history"}
            >
              주문 목록
            </Link>
          </li>

          <li className={styles.item}>
            <Link 
            href={"/"}
            onClick={logoutUser}
           >
              로그아웃
            </Link>
          </li>

          <li className={styles.item}>
            <Link 
            href={"/"}
            onClick={logoutUser}
           >
              제휴 마케팅
            </Link>
          </li>

          <li className={styles.item}>
            <Link 
            href={"/"}
            onClick={logoutUser}
           >
              쿠팡플레이
            </Link>
          </li>

          <li className={styles.item}>
            <Link 
            href={"/"}
            onClick={logoutUser}
           >
              고객센터
            </Link>
          </li>
        </ul>
     
      </div>
      {
        pathname.startsWith("/admin") ? 
        null
        :
        <InnerHeader/>
      }
    </header>
  )
}

export default Header