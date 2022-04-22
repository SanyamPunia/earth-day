import Divider from "./Divider"

const Footer = () => {
    return (
        <>
        <Divider />
        <div className="w-8/12 m-auto  text-white flex flex-col gap-48 font-poppins mt-36 xl:items-center xl:text-center lg:w-4/5">
            <div className="xl:w-full text-center">
                <p className="leading-snug font-bold text-2xl my-12 lg:text-4xl">Created by Sanyam and Ansh</p>
            </div>
        </div>
        </>
    )
}

export default Footer