import kasaWhite from '../../assets/kasaWhite.svg';
const Footer = () => {
    return (
        <footer className="font-sans w-full h-72 bg-black text-white grid place-items-center place-content-center overflow-hidden">
            <img src={kasaWhite} alt="Kasa" className=""/>
            <p className='text-lg w-36 md:w-72 text-center'>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;