import { NavLink } from "react-router-dom"

type SeondaryButtonProps = {
    text:string
}

const SecondaryButton = ({text}:SeondaryButtonProps) => {
  return (
        <div className="hidden md:flex border-2 border-primary-colour px-6 py-4 rounded-full text-primary-colour text-base">
        <NavLink to="/Login">{text}</NavLink>
      </div>
  )
}

export default SecondaryButton