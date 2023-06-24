import { useState } from 'react';
import './Catagories.css';

const Catagories = () => {
    const CatagoriesParameter = [
        { id: 0, memory: '64gb' },
        { id: 1, memory: '128gb' },
        { id: 2, memory: '256gb' },
        { id: 3, memory: '512gb' },
        { id: 5, memory: '1tb' },
    ]
    const CatagoriesColors = [
        { id: 0, color: 'Red' },
        { id: 1, color: 'Blue' },
        { id: 2, color: 'Yellow' },
        { id: 3, color: 'Gold' },
        { id: 4, color: 'Black' },
        { id: 5, color: 'Pacific' },
        { id: 6, color: 'Purple' },


    ]


    const [value, setValue] = useState(0);
    const ChangeValue = (event) => {
        const newValue = parseInt(event.target.value, 10);
        setValue(newValue);
    }
    return (
        <div className="Catagories">
            <div className="CatagoriesCont PriceCont">
                <div className="CatagoriesPriceCont">


                    <p className='PriceContP'>Price:</p>
                    <input type="range" class="custom-range" min={0} max={2000} value={value} onChange={ChangeValue} />
                    <p className='PriceContText'>{value}$</p>
                </div>
            </div>
            <div className="CatagoriesCont">
                <h3 className='CatagoriesH3'>Memory</h3>
                {
                    CatagoriesParameter.map((item) => (
                        <div className="CatagoriesCard" key={item.id}>
                            <div className="CatagoriesCheckBoxCont">
                                <input type="checkbox" name="" id="" className='CatagoriesCheckBox' />
                            </div>
                            <p className='PriceContP memory'>{item.memory}</p>
                        </div>

                    ))
                }

            </div>
            <div className="CatagoriesCont">
                <h3 className='CatagoriesH3'>Color</h3>
                {
                    CatagoriesColors.map((item) => (
                        <div className="CatagoriesCard" key={item.id}>
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
export default Catagories