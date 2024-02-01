import Logo from '../assets/logo2.png'
import Github from '../assets/github.png'
import Linkedin from '../assets/linkedin.png'
export const Navbar = () => {
  return (
    <div className='flex justify-end py-4 items-center px-6'>
        <div className='flex '>
            <a href="https://github.com/Nicolastolinii" target="_blank">
            <img className='h-8 pr-4' src={Github} alt="github icon" />
            </a>
            <a href="https://www.linkedin.com/in/nicolastolini/" target="_blank">
            <img className='h-8 pr-4' src={Linkedin} alt="" />
            </a>
        </div>
    </div>
  )
}
