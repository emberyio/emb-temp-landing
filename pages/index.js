import { AiOutlineArrowRight, AiFillFacebook, AiFillLinkedin } from 'react-icons/ai'
import Typewriter from 'typewriter-effect';
import { PopupButton } from '@typeform/embed-react'

export default function Home() {
  return (
    <div className='flex flex-col justify-between h-screen px-5 bg-black lg:px-10'>
      <div className='flex items-end justify-end w-full pt-5 pr-5'>
        <PopupButton id="LUTUxwcD" style={{ fontSize: 20 }} className="my-button">
          <div className='flex items-center justify-center space-x-2'>
            <span className='font-thin text-gray-400'>start a conversation</span>
            <AiOutlineArrowRight className="text-text" />
          </div>
        </PopupButton>
      </div>
      <div>
        <h1 className='font-bold text-text uppercase lg:text-[150px] text-[68px] leading-[54px] lg:leading-[120px] md:text-[129px] md:leading-[103px]'>
          embark<br />on <Typewriter
            options={{
              strings: ['graphic design', 'branding', 'custom software consultancy', 'software consultancy'],
              autoStart: true,
              loop: true,

            }}
          />
        </h1>
        <div className="pt-10">
          <p className="text-2xl font-semibold leading-6 uppercase text-text opacity-70">We will take care of branding, digital graphic design and full-stack website development to let you<br />focus on your business.</p>
        </div>
      </div>
      <div className='flex flex-row justify-end w-full pb-10 space-x-5 text-2xl'>
        <a href="https://www.facebook.com/emberydigital">
          <AiFillFacebook className="text-text" />
        </a>
        <a href="https://www.linkedin.com/company/embery/">
          <AiFillLinkedin className="text-text" />
        </a>
      </div>
    </div>
  )
}
