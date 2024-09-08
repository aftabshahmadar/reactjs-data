import React from 'react'
import food1 from '../../assets/images/food1.png'
import food2 from '../../assets/images/food2.png'
import food4 from '../../assets/images/food4.png'
import food5 from '../../assets/images/food5.png'
import food3 from '../../assets/images/food3.png'
export default function Content()
{
    return(
        <>
           <h1 className='container mt-5 text-3xl'>Order your fast food delivery.<span className='bi bi-truck'></span></h1>
           <hr className='container'></hr>
           <section id='content' className='container w-full mt-4 flex'>
            <div className='w-128 shadow mt-4 p-16 bg-black text-white'>
                <h3 className='text-3xl'>Catagories</h3>
                <hr />
                <ul className='p-5'>
                    <li>Gujarati food</li>
                    <li>Chinese food</li>
                    <li>Punjabi food</li>
                    <li>Fast food</li>
                    <li>South indian food</li>
                    <li>Terms and conditions</li>
                    <li>24*7 customer care and support</li>
                </ul>

                <div className='w-full shadow mt-4 p-16 bg-black text-white'>
                <h3 className=' -ms-11 text-2xl'>Special offer</h3>
                <hr className='-ms-11 w-90'/>
                <div className='w-96 -ms-20 mt-10'>
                <img src={food3} alt='food' className=''></img>
                <div className='mt-5'>
                <p className='text-center text-xl'><b>large burger</b></p>
                <p className='text-center text-xl'><b>Rs. 200/-<span>(buy 2 get 1 free)</span></b></p>
                <p className='text-center text-xl'><button className='bg-white text-black p-2 rounded mt-5'>Ordr now</button></p>
                </div>
            </div>
            </div>
            </div>
            <div className='w-full shadow mt-4 p-16'>
            <h1 className='text-3xl'>Some of our special combos.</h1>
            <hr />
            <div className='flex'>
            <div className='w-6/12'>
                <img src={food1} alt='food' className=''></img>
                <div className='-mt-10'>
                <p className='text-center text-2xl'><b>Burger combo</b></p>
                <p className='text-center text-xl'><b>Rs. 200/-</b></p>
                <p className='text-center text-2xl'><button className='bg-black text-white p-2 rounded mt-9'>Ordr now</button></p>
                </div>
            </div>

            <div className='w-6/12'>
                <img src={food2} alt='food' className=''></img>
            <div className='-mt-9'>
                <p className='text-center text-2xl'><b>Large crispy chicken combo</b></p>
                <p className='text-center text-xl '><b>Rs. 375/-</b></p>
                <p className='text-center text-2xl'><button className='bg-black text-white p-2 rounded'>Ordr now</button></p>
                </div>
                </div>
                
            </div>


            <div className='flex'>
            <div className='mt-20 ms-20 w-60'>
                <img src={food4} alt='food' className=''></img>
                <div className='-ms-15 mt-7'>
                <p className='text-center text-2xl'><b>maharaja combo</b></p>
                <p className='text-center text-xl'><b>Rs. 300/-</b></p>
                <p className='text-center text-2xl'><button className='bg-black text-white p-2 rounded'>Ordr now</button></p>
                </div>
            </div>

            <div className='mt-24 ms-40 w-64'>
                <img src={food5} alt='food' className=''></img>
                 <div className='-mt-15'>
                <p className='text-center text-2xl'><b>Ultimate veggie combo</b></p>
                <p className='text-center text-xl '><b>Rs. 250/-</b></p>
                <p className='text-center text-2xl'><button className='bg-black text-white p-2 rounded'>Ordr now</button></p>
                 </div>
                </div>
                
            </div>
            </div>
           </section>
        </>
    )
}