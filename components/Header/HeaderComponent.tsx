import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './HeaderComponent.module.scss';

function generateMenu(items: any, isSubmenu: boolean, parent:number = 0){
    return (<ul className={`${styles.menu} ${isSubmenu && styles.submenu}`}>
        {items.map((e:any)=>{
            return (<li key={e.text}>
                <Link href={e.href}>
                    <a className={`${styles.item} ${e.children && styles.hasSubmenu}`}>
                        <span>
                            <span>{e.text}</span> 
                            <span onClick={evt=>{
                                evt.preventDefault();
                                evt.stopPropagation();
                                (document.querySelectorAll("."+styles.active) || []).forEach(e=>{
                                    e.classList.toggle(styles.active)
                                })
                                evt.currentTarget?.parentElement?.classList?.toggle?.(styles.active);
                                /* return false; */
                            }} className={styles.arrow}>{e.children && (parent == 0 ? '▼' : '►')}</span>
                        </span>
                        {e.children && generateMenu(e.children, true, parent + 1)}
                    </a>
                </Link>
            </li>)
        })}
    </ul>)
}

export default function HeaderComponent(props:any){
    let MenuItems = [
        {
            href:"#",
            text:"Comunidad",
            children:[
                {
                    href:"/",
                    text:"¿Quienes somos?"
                },
                {
                    href:"/streamers",
                    text:"Nuestros Streamers"
                },
                {
                    href:"/designers",
                    text:"Nuestros Diseñadores"
                },
                {
                    href:"/rules",
                    text:"Normas de Convivencia"
                },
            ]
        },
        {
            href:"/e-sports",
            text:"e-Sports",
            /* children:[
                {
                    href:"/valorant",
                    text:"Valorant"
                },
                {
                    href:"/pubgm",
                    text:"PUBGM"
                },
                {
                    href:"/freefire",
                    text:"garena free fire"
                },
                {
                    href:"/csgo",
                    text:"Counter-Strike: Global Offensive"
                },
                {
                    href:"/lol",
                    text:"League of Legends"
                },
                {
                    href:"/clashroyale",
                    text:"Clash Royale"
                },
            ] */
        },
        {
            href:"#",
            text:"Juegos",
            children:[
                {
                    href:"/nuestros_servidores",
                    text:"Nuestros Servidores",
                    /* children:[
                        {
                            href:"/lineageii",
                            text:"Lineage II"
                        },
                        {
                            href:"/minecraft",
                            text:"Minecraft"
                        },
                        {
                            href:"/mu",
                            text:"Mu Online"
                        },
                    ] */
                },
                {
                    href:"/que_jugamos",
                    text:"¿Que andamos jugando?",
                    /* children:[
                        {
                            href:"/teamfight_tactics",
                            text:"TeamFight Tactics"
                        },
                        {
                            href:"/genshin_impact",
                            text:"Genshin Impact"
                        },
                        {
                            href:"/Dota2",
                            text:"DotA2"
                        },
                    ] */
                },
            ]
        },
        {
            href:"/nfts",
            text:"NFT's",
            /* children:[
                {
                    href:"/thetan_arena",
                    text:"Thetan Arena"
                },
                {
                    href:"/mir4",
                    text:"Mir4"
                },
                {
                    href:"/axie_infinity",
                    text:"Axie Infinity"
                },
            ] */
        },
    ]
    const [menuActive, setMenuActive] = useState(false);
    useEffect(()=>{
        function closeMenu(evt:any){
            let target = evt.target;
            while(target){
                if(target.classList.contains(styles.header)){
                    return;
                }else{
                    target = target.parentElement;
                }
            }
            setMenuActive(false);
        }
        window.addEventListener('click',closeMenu);
        return ()=>{
            window.removeEventListener('click',closeMenu);
        }
    },[menuActive])
    return (<header className={styles.header}>
        <img src='/images/logo.png' />
        <img className={styles.logoMobile} src='/images/logo.png' />
        <div className={styles.separator}></div>
        <div onClick={()=>{
            setMenuActive(!menuActive);
        }} className={styles.mobileMenu}>
            <div className={`${styles.lineContainer}`}>
                <div className={`${styles.line} ${menuActive && styles.lineActive}`}></div>
                <div className={`${styles.line} ${menuActive && styles.lineActive}`}></div>
                <div className={`${styles.line} ${menuActive && styles.lineActive}`}></div>
            </div>
        </div>
        <nav className={`${menuActive && styles.menuActive}`}>
            {generateMenu(MenuItems, false)}
            {/* <ul className={styles.menu}>
                <li className={`${styles.hasSubmenu} ${styles.item}`}>Comunidad
                    <ul className={`${styles.submenu} ${styles.menu}`}>
                        <li>e-Sports</li>
                        <li>Juegos</li>
                        <li>NFT's</li> 
                        <li className={styles.hasSubmenu}>Comunidad
                            <ul className={`${styles.submenu} ${styles.menu}`}>
                                <li>e-Sports</li>
                                <li>Juegos</li>
                                <li>NFT's</li>
                            </ul>
                        </li>       
                    </ul>
                </li>
                <li>e-Sports</li>
                <li>Juegos</li>
                <li>NFT's</li>
            </ul> */}
        </nav>
    </header>)
}