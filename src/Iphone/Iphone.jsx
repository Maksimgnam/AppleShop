
import Catagories from '../IphoneCatagories/Catagories';


const Iphone = () => {
    const Cards = [
        { id: 0, name: 'Iphone 12', price: 1000, memory: 64, color: 'red', img: 'data:image/jpeg;base64,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' },
        { id: 1, name: 'Iphone 13', price: 1100, memory: 128, color: 'blue', img: 'https://kibernetiki.com.ua/image/cache/catalog/data/IPHONE13Q421BLUEPDPIMAGEPOSITION-2WW-RU-300x300.JPG' },
        { id: 2, name: 'Iphone 11', price: 750, memory: 256, color: 'yellow', img: 'https://skymarket.ua/image/cache/catalog/telefony/Apple/smartfon-apple-iphone-11-256gb-yellow-(mwlp2)-300x300.jpg' },
        { id: 3, name: 'Iphone 13 pro max', price: 1150, memory: 512, color: 'gold', img: 'https://skymarket.ua/image/cache/catalog/telefony/Apple/smartfon-apple-iphone-13-pro-256gb-gold-(mlvk3)-300x300.jpg' },
        { id: 4, name: 'Iphone 14 plus', price: 1050, memory: 1, color: 'black', img: 'https://estore.ua/media/catalog/product/cache/8/small_image/295x295/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-14-plus_3_.jpeg' },
        { id: 5, name: 'Iphone 12 pro', price: 1150, memory: 1, color: 'pacific', img: 'https://mobilike.net.ua/image/cache/catalog/easyphoto/2595/apple-iphone-12-pro-max-256gb-gold-open-box-2-200x200.jpg' },
        { id: 6, name: 'Iphone 12 pro max', price: 1190, memory: 1, color: 'gold', img: 'https://mobilike.net.ua/image/cache/catalog/easyphoto/2586/apple-iphone-12-pro-256gb-graphite-open-box-1-200x200.jpg' },
        { id: 7, name: 'Iphone 11 pro max', price: 860, memory: 512, color: 'gold', img: 'https://mcstore.com.ua/image/cache/iblock/d67/d672d63752538ab9043a76a6d7ff500e-200x200.jpg' },

        { id: 8, name: 'Iphone  14 pro max', price: 1150, memory: 512, color: 'purple', img: 'data:image/jpeg;base64,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' },




    ]

    return (
        <div className="Container">
            <Catagories />

            <div className="CardContainer">


                {
                    Cards.map((item) => (
                        <div className="Card" key={item.id}>
                            <div className='CardImage'>
                                <img src={item.img} alt="" />
                            </div>

                            <div className="CardText">
                                <h3 className='Name'>{item.name}</h3>
                                <div className="TextContainer">
                                    <p className='Text'> Price: {item.price}$</p>
                                    <p className='Text'> Memory: {item.memory}gb</p>
                                    <p className='Text'> Color: {item.color}</p>
                                    <button className='CardBtn'>Add</button>

                                </div>









                            </div>


                        </div>
                    ))
                }
            </div>

        </div>
    )

}
export default Iphone;