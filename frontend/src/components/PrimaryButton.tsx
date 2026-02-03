import { NavLink } from "react-router-dom"

type PrimaryButtonProps = {
    text:string
}

const PrimaryButton = ({text}: PrimaryButtonProps) => {
  return (
     <div className="hidden md:flex bg-primary-colour  px-6 py-4 rounded-full text-white text-base">
        <NavLink to="/Login">{text}</NavLink>
      </div>
  )
}

export default PrimaryButton