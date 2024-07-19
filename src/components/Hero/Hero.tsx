import React from 'react'
import { GoArrowDownRight } from 'react-icons/go'
import GetItButton from './GetItButton'

const Hero = () => {
  return (
    <div className=' z-0'>
        <div className=' relative w-full h-fit '>
          <img src="/hero1.png" alt=""/>

          <div className=' absolute bottom-0 left-0 pb-[10vw] pl-[5vw] text-white text-6xl font-semibold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] '>
            <div className='  text-lg font-medium'>
              DANGARDEN
            </div>

            <div className=' text-4xl mt-8'>
              MODERN DESIGN FOR YOUR COMFORTABLE LIVING
            </div>
            <div className=' text-lg font-light mt-4 w-80'>
            Sustainable products for the garden and patio directly from our own factory at an affordable premium.
            </div>

            <GetItButton isBlack={true}/>
          </div>

        </div>

        <div className=' flex h-fit'>
            <div className=' w-[50%] bg-slate-700'>
              <img src="/hero2.png" alt="" className=' h-[1000px] w-full'/>
            </div>

            <div className='  flex gap-2 flex-col justify-center p-[7rem] w-[50%] bg-[#E0E0E0] font-light h-[1000px]'>
              <div>
                DANGARDEN 
              </div>

              <div className=' text-5xl font-semibold'>
              EGEN DESIGN OCH TILLVERKNING
              </div>

              <div className=' text-xl my-2'>
              <span className=' font-semibold'>Direkt från egen</span> fabrik levererar vi produkter till vårt varumärke i prisvärd premium.
              </div>

              <div className=' text-xl my-2'>
              <span className=' font-semibold'>Vi har producerat</span> hela vintern och lagret är nu välfyllt med våra produkter.
              </div>

              <div className=' text-xl my-2'>
              <span className=' font-semibold'>Ifjol tog alla</span>  våra utekök slut redan i Maj för direktleverans så vänta inte för länge med att lägga order på ditt drömkök för sommarens riktigt lata dagar.
              </div>

              <div className=' text-xl my-2'>
              <span className=' font-semibold'>Här i vår shop</span> finner ni också andra kompleterande varumärken med sånt vi gillar och som kompletterar våra egna produkter.
              </div>

              <div className=' text-xl my-2'>
              <span className=' font-semibold'>Extra glada är</span>  vi att just du har tittat in här till oss och har du några frågor tveka då inte att skriva till oss direkt i chatten!
              </div>

              <ul className=' flex flex-col gap-5 list-disc ml-10 text-xl'>
                <li>
                Certifierad E-handel med köpskydd
                </li>
                <li>
                Köp nu. Betala senare med KLARNA
                </li>
                <li>
                Lagervaror leverans 2-5 arbetsdagar
                </li>
              </ul>

              <GetItButton isBlack={false}/>

            </div>
        </div>
    </div>
  )
}

export default Hero