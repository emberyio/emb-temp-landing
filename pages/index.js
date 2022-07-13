import { AiOutlineArrowRight, AiFillFacebook, AiFillLinkedin } from 'react-icons/ai'

export default function Home() {
  return (
    <div className='flex flex-col justify-between h-screen px-5 lg:px-10'>
      <div className='flex items-end justify-end w-full pt-5 pr-5'>
        <div className='flex items-center justify-center space-x-2 text-text'>
          <span className='font-thin uppercase'>Start a conversation</span>
          <AiOutlineArrowRight />
        </div>
      </div>
      <div>
        <h1 className='font-bold text-text uppercase lg:text-[218px] text-[68px] leading-[54px] lg:leading-[174px] md:text-[129px] md:leading-[103px]'>
          Embark on your digital journey
        </h1>
        <div className="pt-10">
          <p className="text-2xl font-semibold leading-6 uppercase text-text opacity-70">We will take care of branding, digital graphic design and full-stack website development to let you<br/>focus on your business.</p>
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
