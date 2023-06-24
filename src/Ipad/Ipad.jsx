import './Ipad.css';
const Ipad = () => {
    const Cards = [
        { id: 0, name: 'Iphone 12', price: 20, memory: 128, color: '', img: '' }
    ]

    return (
        <div className="Container">
            {
                Cards.map((item) => (
                    <div className="Card" key={item.id}>
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                    </div>
                ))
            }


        </div>
    )

}
export default Ipad;