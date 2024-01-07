import Image from 'next/image'
import Logo from './../assets/img/logo.svg'
import IntroBg from './../assets/img/introBg.png'
import IntroSpoon from './../assets/img/introSpoonBg.png'
import IntroSong from './../assets/img/introSong.png'
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import './styles/Header.scss'


const Header = () => {
    return (
        <header className="header" style={{ backgroundImage: `url(${IntroBg.src})` }}>
            <Image src={IntroSpoon} alt='spoon' className='header__spoon__img'/>
        <div className="header__container container">
        <div className="header__top__part">
        <Image src={Logo} alt='logo' className='header__logo__img' />
        <HiOutlineMenuAlt2 className='header__burger__img cursor' />
        </div>

        <div className="header__middle__part" style={{ backgroundImage:`url(${IntroSong.src})` }}> 
            <p className="header__middle__title">Indulge in</p>
            <h2 className="header__middle__heading">Liquid Artistry</h2>
            <p className="header__middle__overview">Step into a world of extraordinary flavors and unrivaled mixology expertise</p>
        </div>

        <button className="header__btn cursor">EXPLORE</button>
        </div>
        </header>
        )
    }
    
    export default Header
    