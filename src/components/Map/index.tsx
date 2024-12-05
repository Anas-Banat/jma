"use client"

import React from "react";

const Location = () => { 
    return (
      <>
      <div className='mx-8 mb-4 relative overflow-hidden  dark:bg-dark'>
        <div className='relative z-10 dark:bg-dark'>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12251.65579694546!2d35.88594154925051!3d31.970927887195828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca18f7f4ca805%3A0x6c70c15e1425f26!2z2YXYrNmF2Lkg2KfZhNmG2YLYp9io2KfYqiDYp9mE2YXZh9mG2Yog2LTZhdmK2LPYp9mG2Yog2LnZhdin2YY!5e1!3m2!1sen!2sjo!4v1730379453409!5m2!1sen!2sjo" 
          width="100%"
          height="550"
          style={{border:0}}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
        </div>
    </div>
    </>
    )
}

export default Location