import { AiOutlineArrowRight, AiFillFacebook, AiFillLinkedin, AiFillPhone } from 'react-icons/ai'
import Typewriter from 'typewriter-effect';
import { PopupButton } from '@typeform/embed-react'
import Image from 'next/image';
import Logo from '../public/embery-symbol.png'
import {TiLocation} from 'react-icons/ti'

export default function Home() {
  return (
    <div className='flex flex-col justify-between h-screen px-5 bg-black lg:px-10'>
      <div className='flex items-center justify-between w-full pt-5 pr-5'>
        <Image src={Logo.src} width={100} height={100} alt="logo" />
        <PopupButton id="LUTUxwcD" style={{ fontSize: 20 }} className="my-button">
          <div className='flex items-center justify-center space-x-2'>
            <span className='font-thin text-gray-400'>start a conversation</span>
            <AiOutlineArrowRight className="text-text" />
          </div>
        </PopupButton>
      </div>
      <div>
        <h1 className='font-bold text-text uppercase lg:text-[130px] text-[38px] leading-[54px] lg:leading-[120px] md:text-[129px] md:leading-[103px]'>
          embark<br />on <Typewriter
            options={{
              strings: ['website design', 'graphic design', 'branding','UX/UI design', 'Ecommerce'],
              autoStart: true,
              loop: true,

            }}
          />
        </h1>
        <div className="pt-10">
          <p className="text-lg font-semibold leading-6 uppercase lg:text-2xl text-text opacity-70">We will take care of branding, digital graphic design and full-stack website development to let you<br />focus on your business.</p>
        </div>
      </div>
      <div className='flex flex-row items-center justify-end w-full pb-10 space-x-5 text-2xl'>
        <a href="https://www.facebook.com/emberydigital">
          <AiFillFacebook className="text-text" />
        </a>
        <a href="https://www.linkedin.com/company/embery/">
          <AiFillLinkedin className="text-text" />
        </a>
        <a href="tel:+1300 685 090" title="+1300 685 090" className='text-text'><AiFillPhone /></a>
        <a href="https://www.google.com/maps/place/470+St+Kilda+Rd,+Melbourne+VIC+3004,+Australia/@-37.8412405,144.9745811,17z/data=!3m1!4b1!4m5!3m4!1s0x6ad6693aa464baf9:0xbd7c4b011b939aeb!8m2!3d-37.8412448!4d144.9767698"
        title="470 St Kilda Rd, Melbourne VIC 3004"
        target="_blank" rel="noreferrer">
          <TiLocation className="text-text" />
        </a>
      </div>
    </div>
  )
}
