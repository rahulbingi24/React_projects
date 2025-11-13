import React from 'react'
import './main.css'

function Main() {
  return (
    <main>
        <div>
            <div>
                <button className='via-support-chat'>
                    VIA SUPPORT CHAT
                </button>
                <button className='via-call'>
                    VIA CALL
                </button>
            </div>
            <div>
                <button> 
                    VIA EMAIL FORM
                </button>
            </div>

        </div>
        <div>
            <img src="/images/service.svg" alt="" />
        </div>
    </main>
  )
}

export default Main 