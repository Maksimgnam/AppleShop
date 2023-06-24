
import './Header.css';
const Header = ({ IphoneOpen, MacbookOpen, IpadOpen, ImacOpen, AirpodsOpen, ApplewatchOpen }) => {
    return (
        <div className="Header">

            <div className="Logo">AppleStory</div>
            <div className="navbar">
                <a onClick={IphoneOpen} >Iphone</a>
                <a onClick={MacbookOpen}>Macbook </a>
                <a onClick={ImacOpen}>Imac</a>
                <a onClick={IpadOpen}>Ipad</a>
                <a onClick={ApplewatchOpen}>Apple watch</a>
                <a onClick={AirpodsOpen}>Arpods</a>



            </div>

        </div>
    )
}
export default Header;