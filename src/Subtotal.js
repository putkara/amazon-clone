import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';

function Subtotal() {
    return (
        <div className="subtotal">
          <CurrencyFormat 
          renderText={(value) => (
              <>
              <p>
                  Subtotal (0 items):
                  <string>0</string>
              </p>
              <small className='subtotal__gift'>
                  <input type='checkbox'/>This order
                  contains a gift
              </small>
              </>
          ) 
          }
          decimalScale={2}
          value={0}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'€'}
          />
              
         
        </div>
    )
}

export default Subtotal
