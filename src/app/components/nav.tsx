import Link from "next/link"


function Navbar(){
    return(
        <div className="navbar">
          <Link href="/">Home</Link>
          <Link href="/about">About Me</Link>
          <Link href="/contact">Contact Us</Link>
          
        </div>
    )
}
export default Navbar