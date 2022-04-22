import Divider from "./Divider"
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useState } from "react";

const Cause = () => {
    const [openFirst, setOpenFirst] = useState(false);
    const [openSecond, setOpenSecond] = useState(false);
    const [openThird, setOpenThird] = useState(false);
    const [openFourth, setOpenFourth] = useState(false);

    return (
        <>
            <div className="mb-36 w-8/12 m-auto mt-36 flex justify-around gap-14 md:flex-col">
                <div className="w-full">
                    <h1 className="w-9/12 font-poppins leading-snug font-semibold text-white text-5xl">Different phases of Environmental Degradation.</h1>
                </div>
                <div className="w-full font-poppins text-white text-3xl flex flex-col gap-12">
                    <div className="bg-opacity-80 shadow-2xl shadow-blue-500/20 backdrop-filter backdrop-blur-lg p-5 rounded-xl">
                        <h1 className="mb-2 font-semibold">1. Desertification</h1>
                        <p className="text-lg">Desertification affects as much as one-sixth of the world's population, seventy percent of all drylands, and one-quarter of the total land area of the world. It results in widespread poverty as well as in the degradation of billion hectares of rangeland and cropland.</p>
                        <p onClick={() => setOpenFirst(true)} className="text-right cursor-pointer text-lg">Read more</p>

                        <Modal open={openFirst} onClose={() => setOpenFirst(false)} center>
                            <img src="desertification-stats.jpg" alt="" />
                        </Modal>
                    </div>
                    <div className="bg-opacity-60 shadow-2xl shadow-blue-500/20 backdrop-filter backdrop-blur-lg p-5 rounded-xl">
                        <h1 className="mb-2 font-semibold">2. Global Warming</h1>
                        <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>

                        <p onClick={() => setOpenSecond(true)} className="text-right cursor-pointer text-lg">Read more</p>
                        <Modal open={openSecond} onClose={() => setOpenSecond(false)} center>
                            <img src="globalwarming-stats.jpg" alt="" />
                        </Modal>
                    </div>
                    <div className="bg-opacity-60 shadow-2xl shadow-blue-500/20 backdrop-filter backdrop-blur-lg p-5 rounded-xl">
                        <h1 className="mb-2 font-semibold">3. Deforestation</h1>
                        <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>

                        <p onClick={() => setOpenThird(true)} className="text-right cursor-pointer text-lg">Read more</p>
                        <Modal open={openThird} onClose={() => setOpenThird(false)} center>
                            <img src="deforestation-stats.png" alt="" />
                        </Modal>
                    </div>
                    <div className="bg-opacity-60 shadow-2xl shadow-blue-500/20 backdrop-filter backdrop-blur-lg p-5 rounded-xl">
                        <h1 className="mb-2 font-semibold">4. Plastic Pollution</h1>
                        <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>

                        <p onClick={() => setOpenFourth(true)} className="text-right cursor-pointer text-lg">Read more</p>
                        <Modal open={openFourth} onClose={() => setOpenFourth(false)} center>
                            <img src="plasticpollution-stats.jpg" alt="" />
                        </Modal>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Cause