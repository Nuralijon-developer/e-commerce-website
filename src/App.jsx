import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <nav className='flex justify-between items-center ml-7 gap-12 '>
        <h1 className='mr-7 font-bold text-4xl' >Exclusive</h1>
        <nav className='flex justify-between items-center gap-7'>
          <p>Home</p>
          <p>Conatc</p>
          <p>About</p>
          <p>Sign up</p>
        </nav>
        <nav className='flex ml-7 gap-4 mb-10'>
          <input className='border p-1 border-gray-500 rounded' type="text" placeholder='What are you looking for?' />
          <img src="/Frame 551.png" alt="" />
        </nav>


      </nav>
      <img src="/Line 3.png" alt="" />

      <main>
        <div className='flex justify-between gap-7 ml-7 mt-4 '>

          <div className=''>
            <p className='flex items-center gap-2 mt-5'>Woman’s Fashion <img className='v-5 h-5 ' src="/Vector (2).png" alt="" /></p>
            <p className='flex items-center gap-2 mt-7'>Men’s Fashion <img className='v-5 h-5 ' src="/Vector (2).png" alt="" /></p>
            <p className='mt-7'>Electronics</p>
            <p className='mt-7'>Home & Lifestyle</p>
            <p className='mt-7'>Medicine</p>
            <p className='mt-7'>Sports & Outdoor</p>
            <p className='mt-7'>Baby’s & Toys</p>
            <p className='mt-7'>Groceries & Pets</p>
            <p className='mt-7'>Health & Beauty</p>
          </div>
          <div>
            <img className='v-1000000 h-120' src="/Frame 560.png" alt="" />

          </div>

        </div>


        <div className='flex mt-20 gap-10 ml-7m  '>
          <div className=' gap-'>
            <p className='text-red-500 flex items-center gap-2'> <img src="/Rectangle 18.png" alt="" />Today's</p>
            <h1 className='font-bold text-2xl'>Flesh lasles</h1>
          </div>
          <div>
            <img src="/Group 1000005937.png" alt="" />
          </div>
        </div>

        <section className='mt-20'>
          <div className='flex justify-between gap-3 mt-7 ml-7'>
            <div>
              <img className='' src="/Frame 570.png" alt="" />
              <h3>HAVIT HV-G92 Gamepad</h3>
              <h3>$120....$160</h3>
              <img src="Five star.png" alt="" />

            </div>
            <div>
              <img src="/Frame 570 (1).png" alt="" />
              <h3>HAVIT HV-G92 Gamepad</h3>
              <h3>$110....$190</h3>
              <img src="Five star.png" alt="" />

            </div>
            <div>
              <img src="/Frame 570 (2).png" alt="" />
              <h3>HAVIT HV-G92 Gamepad</h3>
              <h3>$140....$150</h3>
              <img src="Five star.png" alt="" />

            </div>
            <div>
              <img src="/Frame 570 (3).png" alt="" />
              <h3>HAVIT HV-G92 Gamepad</h3>
              <h3>$170....$200</h3>
              <img src="Five star.png" alt="" />

            </div>
          </div>

          <div className='flex justify-center mt-20'>
            <button
              class="bg-red-500 text-white px-8 py-3 rounded-md ">
              View All Products
            </button>

          </div>

          <img className='mt-7' src="/Line 3.png" alt="" />

        </section>



        <div className='mt-20  flex items-end justify-between'>
         <div>
           <p className='flex text-red-800  ml-7 items-center gap-2'><img src="/Rectangle 18.png" alt="" />Categories</p>
          <h1 className='text-2xl ml-7 font-bold '>Browse By Category</h1>
         </div>
         <div>
          <img src="/Frame 615.png" alt="" />
         </div>
          </div>

        <section>
          <div className='flex justify-between gap-7 mt-7 ml-7'>
  
   <div className='border p-12 rounded-lg'>
              <img className='w-30 h-30 ' src="/Category-CellPhone (1).png" alt="" />
              <p className='ml-9'>Phone</p>
            </div>

           
            <div className='border p-12 rounded-lg'>
              <img className='w-30 h-30 ' src="/Category-Computer.png" alt="" />
              <p className='ml-6'>Computer</p>
            </div>

            <div className='border p-12 rounded-lg'>
              <img className='w-30 h-30 ' src="/Category-SmartWatch.png" alt="" />
              <p className='ml-5'>SmartWatch</p>
            </div>


            <div className='border p-12 rounded-lg  bg-red-600'>
              <img className='w-30 h-30 ' src="/Category-Camera.png" alt="" />
              <p className='ml-8'>Camera</p>
            </div>


            <div className='border p-12 rounded-lg'>
              <img className='w-30 h-30 ' src="/Category-Headphone.png" alt="" />
              <p className='ml-4'>HeadPhones</p>
            </div>

            <div className='border p-12 rounded-lg'>
              <img className='w-30 h-30 ' src="/Category-Gamepad.png" alt="" />
              <p className='ml-8'>Gaming</p>
            </div>



          </div>

        </section>

        <section className='mt-30'>
          <div className=' mt-7 gap-7 ml-7 flex justify-between items-center '>
           <div>
             <p className='text-red-500 flex items-center gap-2'> <img src="/Rectangle 18.png" alt="" />This month</p>
            <h1 className='font-bold text-2xl'>Bets salling products</h1>
           </div>
           <div>
              <button
              class="bg-red-500 text-white px-8 py-3 rounded-md ">
              View All Products
            </button>
            
           </div>
          </div>

          <div className='flex justify-between ml-7 mr-7 mt-20 '>
            <div>
              <img src="/Cart.png" alt="" />
              <p>The north coat</p>
              <p>$260...
                $360</p>
              <img src="/Five star.png" alt="" />
            </div>

            <div>
              <img src="/Cart (1).png" alt="" />
              <p>The north coat</p>
              <p>$260...
                $360</p>
              <img src="/Five star.png" alt="" />
            </div>

            <div>
              <img src="/Cart (2).png" alt="" />
              <p>The north coat</p>
              <p>$260...
                $360</p>
              <img src="/Five star.png" alt="" />
            </div>

            <div>
              <img src="/Cart (3).png" alt="" />
              <p>The north coat</p>
              <p>$260..
                $360</p>
              <img src="/Five star.png" alt="" />
            </div>

          </div>
        </section  >

  <section className='bg-black text-white pt-7 pb-7 mt-20 ml-7 mr-7'>

          <div className='mt-20 flex justify-between ml-7 mr-7 pb-7 '>
         <div className='mt-'>
          <h1 className='text-green-500 font-bold'>Categories</h1>
          <h1 className='text-4xl font-bold mt-10'>Enahnce your <br />Music expresnce</h1>
          <img className='mt-10' src="/Frame 601.png" alt="" />
            <button
              class="bg-green-500 text-white px-8 py-3 rounded-md mt-10 ">
              By Now
            </button>
         </div>
         <div>
          <img className='w-200 h-90' src="public/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png" alt="" />

         </div>
        </div>

  </section>


        {/* bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb */}


        <section className='mt-20'>
          <div className=' mt-7 gap-7 ml-7 '>
            <p className='text-red-500 flex items-center gap-2'> <img src="/Rectangle 18.png" alt="" />Our products</p>
            <h1 className='font-bold text-2xl'>Explore our products</h1>
          </div>

          <div className='flex justify-between ml-7 mr-7  mt-20'>
            <div>
              <img src="/Cart (4).png" alt="" />
              <p>The north coat</p>
              <p className='flex'>$260...
                $360 <img src="/Five star.png" alt="" /> </p>

            </div>

            <div>
              <img src="/Cart (5).png" alt="" />
              <p>The north coat</p>
              <p className='flex'>$260...
                $360 <img src="/Five star.png" alt="" /> </p>
            </div>

            <div>
              <img src="/Cart (6).png" alt="" />
              <p>The north coat</p>
              <p className='flex'>$260...
                $360 <img src="/Five star.png" alt="" /> </p>
            </div>

            <div>
              <img src="/Cart (7).png" alt="" />
              <p>The north coat</p>
              <p className='flex'>$260...
                $360 <img src="/Five star.png" alt="" /> </p>
            </div>

          </div>

          <div className='flex justify-between ml-7 mr-7 '>
            <div>
              <img src="/Cart (8).png" alt="" />
              <p>The north coat</p>
              <p className='flex'>$260...
                $360 <img src="/Five star.png" alt="" /> </p>
            </div>

            <div>
              <img src="/Cart (9).png" alt="" />
              <p>The north coat</p>
              <p className='flex'>$260...
                $360 <img src="/Five star.png" alt="" /> </p>
            </div>

            <div>
              <img src="/Cart (10).png" alt="" />
              <p>The north coat</p>
              <p className='flex'>$260...
                $360 <img src="/Five star.png" alt="" /> </p>
            </div>

            <div>
              <img src="/Cart (6).png" alt="" />
              <p>The north coat</p>
              <p className='flex'>$260...
                $360 <img src="/Five star.png" alt="" /> </p>
            </div>

          </div>

          <div className='flex justify-center mt-20'>
            <button
              class="bg-red-500 text-white px-8 py-3 rounded-md ">
              View All Products
            </button>

          </div>


        </section>



        <section className='ml-7 mr-7 mt-20'>

           <div className=' mt-7 gap-7 ml-7 '>
            <p className='text-red-500 flex items-center gap-2'> <img src="/Rectangle 18.png" alt="" />Feature</p>
            <h1 className='font-bold text-4xl'>New arrival </h1>
          </div>


<div className='flex justify-between gap-8 ml-7 mr-7 mt-10'>
  <div>
    <img className='w-180 h-182' src="/Frame 901.png" alt="" />

  </div>
  <div className='gap-7 '>
    <img className='gap-7 w-190' src="/Frame.png" alt="" />
    <img  className='mt-10 w-190' src="/Frame 737.png" alt="" />

  </div>
</div>
        </section>


        <section>
          <div className='flex justify-center gap-30 mt-20 '>
            <div>
              <img className='flex justify-center ml-20' src="Services.png" alt="" />
              <h1  className='flex justify-center mt-5'>FREE AND FAST DELIVERY</h1>
              <h1  className='flex justify-center'>Free delivery for all orders over $140</h1>
            </div>

            <div>
              <img  className='flex justify-center ml-20' src="Services (2).png" alt="" />
                 <h1  className='flex justify-center mt-5'>FREE AND FAST DELIVERY</h1>
              <h1  className='flex justify-center'>Free delivery for all orders over $140</h1>
            </div>

            <div>
              <img  className='flex justify-center ml-20' src="Services (3).png" alt="" />
                 <h1  className='flex justify-center mt-5'>FREE AND FAST DELIVERY</h1>
              <h1  className='flex justify-center'>Free delivery for all orders over $140</h1>
            </div>

          </div>

        </section>
       <div className='flex justify-end mr-7'>
         <img  src="/Fill with Up Arrow.png" alt="" />

       </div>

      </main>

      <footer className='ml-7 mr-7'>

        <div className='bg-black text-amber-50 flex justify-around p-15 mt-8'>
                <div>
                    <p className='mt-5'>Exclusive


                    </p>
                    <p className='mt-5'>Subscribe</p>
                    <p className='mt-5'>Get 10% off your first order</p>
                   <div className='flex  items-end border mt-7 p-2 rounded'>
                     <input type="text" placeholder='Enter your email'  className='outline-none border-2  border-amber-50 border-none' />
                     <img className='w-7 h-7 flex ' src="icon-send.png" alt="" />
                   </div>
                </div>
                <div>
                    <h3 className='mt-5'>Support</h3>
                    <p className='mt-5'>111 Bijoy sarani, Dhaka,
                        <br /> DH 1515, Bangladesh.</p>
                    <p className='mt-5'>exclusive@gmail.com</p>
                    <p className='mt-5'>+88015-88888-9999</p>
                </div>
                <div>
                    <h3 className='mt-5'>Account</h3>
                    <p className='mt-5'>My Account</p>
                    <p className='mt-5'>Login / Register</p>
                    <p className='mt-5'>Cart</p>
                    <p className='mt-5'>Wishlist</p>
                    <p className='mt-5'>Shop</p>
                </div>
                <div>
                    <h3 className='mt-5'>Quick Link</h3>
                    <p className='mt-5'>Privacy Policy</p>
                    <p className='mt-5'>Terms Of Use</p>
                    <p className='mt-5'>FAQ</p>
                    <p className='mt-5'>Contact</p>
                </div>
                <div>
                    <h3>Download App</h3>
                    <p>Save $3 with App New User Only</p>
                    <div className='flex items-center justify-around'>
                        <img src="/Qr Code.png" className='mt-5' alt="" />
                        <img src="/Frame 718.png" className='mt-5' alt="" />
                    </div>
                    <div className='flex items-center justify-around'>
                        <img src="/Icon-Facebook.png" className='mt-5' alt="" />
                        <img src="/icon-instagram.png" className='mt-5' alt="" />
                        <img src="/Icon-Linkedin.png" className='mt-5' alt="" />
                        <img src="/Icon-Twitter.png" className='mt-5' alt="" />
                    </div>
                </div>
               
            
            
            </div>
              <h1 className='bg-black text-white flex justify-center'>Copyright Rimel 2022. All right reserved</h1>
            
      </footer>
    </>
  )
}

export default App
