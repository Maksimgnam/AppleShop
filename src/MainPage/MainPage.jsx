
import Iphone from '../Iphone/Iphone';
import Macbook from '../Macbook/Macbook';
import Ipad from '../Ipad/Ipad';
import './MainPage.css';
import Imac from '../Imac/Imac';
import Airpods from '../Airpods/Airpods';
import Applewatch from '../Applewatch/Applewatch';
import Header from '../Header/Header';
import { useState } from 'react';
const MainPage = () => {

    const [openIphone, setOpenIphone] = useState(false);
    const [openMacbook, setOpenMacbook] = useState(false);
    const [openIpad, setOpenIpad] = useState(false);
    const [openImac, setOpenImac] = useState(false);
    const [openAirpods, setOpenAirpods] = useState(false);
    const [openApplewatch, setOpenApplewatch] = useState(false);


    const IphoneOpen = () => {
        setOpenIphone(true);
        setOpenMacbook(false)
        setOpenIpad(false)
        setOpenAirpods(false);
        setOpenImac(false)
        setOpenApplewatch(false)


    }
    const MacbookOpen = () => {
        setOpenMacbook(true)
        setOpenIphone(false)
        setOpenIpad(false)
        setOpenAirpods(false);
        setOpenImac(false)
        setOpenApplewatch(false)
    }
    const IpadOpen = () => {
        setOpenIpad(true)
        setOpenMacbook(false)
        setOpenIphone(false)
        setOpenAirpods(false);
        setOpenImac(false)
        setOpenApplewatch(false)
    }
    const ImacOpen = () => {
        setOpenImac(true)
        setOpenIpad(false)
        setOpenMacbook(false)
        setOpenIphone(false)
        setOpenAirpods(false);
        setOpenApplewatch(false)
    }
    const AirpodsOpen = () => {
        setOpenAirpods(true);
        setOpenImac(false)
        setOpenIpad(false)
        setOpenMacbook(false)
        setOpenIphone(false)
        setOpenApplewatch(false)
    }

    const ApplewatchOpen = () => {
        setOpenApplewatch(true)
        setOpenAirpods(false);
        setOpenImac(false)
        setOpenIpad(false)
        setOpenMacbook(false)
        setOpenIphone(false)


    }




    return (
        <div className="MainPage">
            <Header IphoneOpen={IphoneOpen} IpadOpen={IpadOpen} MacbookOpen={MacbookOpen} ImacOpen={ImacOpen} AirpodsOpen={AirpodsOpen} ApplewatchOpen={ApplewatchOpen} />
            {
                openIphone && (
                    <Iphone />

                )
            }
            {
                openMacbook && (
                    <Macbook />

                )
            }
            {
                openIpad && (
                    <Ipad />

                )
            }

            {
                openImac && (
                    <Imac />

                )
            }
            {
                openAirpods && (
                    <Airpods />

                )
            }
            {
                openApplewatch && (
                    <Applewatch />

                )
            }








        </div>
    )
}
export default MainPage;