import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  function openMetaMaskUrl(url) {
    const a = window.document.createElement("a");
    a.href = url;
    a.target = "_self";
    document.body.appendChild(a);
    a.click();
    a.remove();
}
  return (
    <button >
      <a href={("https://mint.rplanetnft.xyz/")}>
      BLICK
      </a>
      
    </button>
  )
}
