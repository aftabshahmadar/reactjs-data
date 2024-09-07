import React from 'react'
function Header() {
    return (
        <>
            <section id='header' className='w-full p-10 flex shadow h-40'>

                {/*basic info */}
                <div className='p-2 ms-4 flex-initial'><b className='mt-2'>Call us <span className='bi bi-telephone'></span>(+91) -6354870886</b></div>

                <div className=' ms-20 mb-14 p-2  flex-initial w-2/4' >

                    <input type='text' placeholder='Search anything in the menu or realated to food category... ' className='p-2 w-full border' />
                </div>

                <div className='flex-initial ms-20'>
                    <span className='bi bi-facebook text-2xl'></span>
                    <span className='bi bi-instagram text-2xl ms-2'></span>
                    <span className='bi bi-twitter text-2xl ms-2'></span>
                    <span className='bi bi-whatsapp text-2xl ms-2'></span>
                </div>

            </section>
        </>
    )
}
export default Header