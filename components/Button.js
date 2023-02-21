import Link from "next/link";

const Button = ({buttonTitle, href}) => {
  return (
    <Link href={href} target="_blank">
       <button>{buttonTitle}</button>
    </Link>    
  )
}

export default Button;