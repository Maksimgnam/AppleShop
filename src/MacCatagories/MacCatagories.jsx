import { useState } from 'react';
import './MacCatagories.css';

const MacCatagories = () => {
    const MacCatagoriesModel = [
        { id: 0, model: 'Pro' },
        { id: 1, model: 'Air' }

    ]
    const MacCatagoriesParameter = [
        { id: 0, memory: '8gb' },
        { id: 1, memory: '16gb' },
        { id: 2, memory: '24gb' },
        { id: 3, memory: '32gb' },
        { id: 5, memory: '64tb' },
        { id: 6, memory: '96tb' },
    ]
    const MacCatagoriesSSD = [
        { id: 0, memory: '256gb' },
        { id: 1, memory: '512gb' },
        { id: 2, memory: '1tb' },

    ]
    const MacCatagoriesProcessor = [
        { id: 0, name: 'M1' },
        { id: 1, name: 'M1 Pro ' },
        { id: 2, name: 'M1 Max' },
        { id: 3, name: 'M2' },
        { id: 4, name: 'M2 Pro' },
        { id: 5, name: 'M2 Max' },

    ]
    const MacCatagoriesColors = [
        { id: 0, color: 'Silver' },
        { id: 1, color: 'Space Grey' },
        { id: 2, color: 'Gold' },
        { id: 4, color: 'Midnight' },
        { id: 5, color: 'Starlight' },



    ]



    const [value, setValue] = useState(0);
    const ChangeValue = (event) => {
        const newValue = parseInt(event.target.value, 10);
        setValue(newValue);
    }
    return (
        <div className="MacCatagories">
            <div className="CatagoriesCont PriceCont MacPriceCont">
                <div className="CatagoriesPriceCont">


                    <p className='PriceContP'>Price:</p>
                    <input type="range" class="custom-range" min={0} max={2000} value={value} onChange={ChangeValue} />
                    <p className='PriceContText'>{value}$</p>
                </div>

            </div>
            <div className="MacCatagoriesCont Small">
                <h3 className='CatagoriesH3'>Model</h3>
                {
                    MacCatagoriesModel.map((item) => (
                        <div className="CatagoriesCard CatagoriesCardMac " key={item.id}>
                            <div className="CatagoriesCheckBoxCont">
                                <input type="checkbox" name="" id="" className='CatagoriesCheckBox' />
                            </div>
                            <p className='PriceContP memory'>{item.model}</p>
                        </div>

                    ))
                }


            </div>
            <div className="MacCatagoriesCont">
                <h3 className='CatagoriesH3'>Memory</h3>
                {
                    MacCatagoriesParameter.map((item) => (
                        <div className="CatagoriesCard CatagoriesCardMac " key={item.id}>
                            <div className="CatagoriesCheckBoxCont">
                                <input type="checkbox" name="" id="" className='CatagoriesCheckBox' />
                            </div>
                            <p className='PriceContP memory'>{item.memory}</p>
                        </div>

                    ))
                }



            </div>

            <div className="MacCatagoriesCont Small">
                <h3 className='CatagoriesH3'>SSD</h3>
                {
                    MacCatagoriesSSD.map((item) => (
                        <div className="CatagoriesCard CatagoriesCardMac " key={item.id}>
                            <div className="CatagoriesCheckBoxCont">
                                <input type="checkbox" name="" id="" className='CatagoriesCheckBox' />
                            </div>
                            <p className='PriceContP memory'>{item.memory}</p>
                        </div>

                    ))
                }


            </div>
            <div className="MacCatagoriesCont">
                <h3 className='CatagoriesH3'>Processor</h3>
                {
                    MacCatagoriesProcessor.map((item) => (
                        <div className="CatagoriesCard CatagoriesCardMac " key={item.id}>
                            <div className="CatagoriesCheckBoxCont">
                                <input type="checkbox" name="" id="" className='CatagoriesCheckBox' />
                            </div>
                            <p className='PriceContP memory'>{item.name}</p>
                        </div>

                    ))
                }


            </div>
            <div className="MacCatagoriesCont">
                <h3 className='CatagoriesH3'>Color</h3>
                {
                    MacCatagoriesColors.map((item) => (
                        <div className="CatagoriesCard CatagoriesCardMac " key={item.id}>
                            <div className="CatagoriesCheckBoxCont">
                                <input type="checkbox" name="" id="" className='CatagoriesCheckBox' />
                            </div>
                            <p className='PriceContP memory'>{item.color}</p>
                        </div>

                    ))
                }


            </div>


        </div>
    )
}
export default MacCatagories