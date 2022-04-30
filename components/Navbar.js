import Link from "next/link"

const Navbar = () => {
    return (
        <div className="font-poppins font-semibold text-white text-xl mt-28 w-8/12	flex m-auto justify-between">
            <Link href="/">
                <a>Earth</a>
            </Link>
            <div className="flex gap-20 md:hidden">
                <Link href="/">
                    <a>Contact</a>
                </Link>
                <Link href="sanyam.xyz">
                    <a>Blog</a>
                </Link>
                <Link href="/">
                    <a>About</a>
                </Link>
            </div>
        </div>
    )
}

export default Navbar