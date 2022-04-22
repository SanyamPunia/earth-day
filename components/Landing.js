import Divider from "./Divider"

const Landing = () => {
    return (
        <div className="w-8/12 m-auto text-white flex flex-col gap-48 font-poppins mt-36 xl:items-center xl:text-center lg:w-4/5">
            <div className="w-5/12 xl:w-full">
                <h1 className="leading-snug font-bold text-6xl my-12 lg:text-4xl">The <span className="text-green-400 xl:text-blue-400">Earth</span> is what we all have in common.</h1>
                <a className="md:py-3 md:px-4 py-4 px-5 rounded-xl bg-white text-blue-400 font-medium text-lg shadow-md transition hover:shadow-xl" href="/">
                    Request early access
                </a>
            </div>
            <Divider />
        </div>
    )
}

export default Landing