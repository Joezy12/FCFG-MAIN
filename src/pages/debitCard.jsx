
import '../styles/debitCard.css'
import { NavLink } from 'react-router-dom';

function DebitCard() {
    return (
        <div className="debit-card">
            <div className='cancel'>
                <NavLink to="../homedash" className="link"><h1><i className='bi-x'></i></h1></NavLink>
            </div>
            <div className='debit-heads'>
                <h1>Add your debit card</h1>
                <p>Make sure it's not a prepaid card</p>
            </div>
            <form className='debit-form'>
                <div className='top-inputs'>
                    <h4>First and last name</h4>
                    <input type="text" placeholder='Bianca Deleon' />
                </div>
                <div className='top-inputs'>
                    <h4>Card number</h4>
                    <input type="number" placeholder='0000-0000-0000-0000' />
                </div>

                <div className='double-inputs'>
                    <div className='top-inputs middle-inputs'>
                        <h4>Exp month</h4>
                        <input type="number" placeholder='MM' />
                    </div>
                    <h1>/</h1>
                    <div className='top-inputs middle-inputs'>
                        <h4>Exp month</h4>
                        <input type="number" placeholder='YY' />
                    </div>
                </div>
                <div className='double-inputs'>
                    <div className='top-inputs ending-inputs'>
                        <h4>CVV</h4>
                        <input type="number" placeholder='' />
                    </div>

                    <div className='top-inputs ending-inputs'>
                        <h4>ZIP code</h4>
                        <input type="number" placeholder='' />
                    </div>
                </div>
                <p className='para'>Just so you know, this card is used for preauthorized transfers like your withdrawals or settlement</p>

                <button>Add card</button>
            </form>
        </div>
    )
}


export default DebitCard;