import { FaBackwardStep, FaForwardStep, FaPlay, FaVolumeHigh } from "react-icons/fa6";

export default function Play() {
    return (
        <>
            <div className="bg-[#212121] border-t border-[#494949] fixed bottom-0 left-0 w-full py-[20px] z-[999]">
                <div className="container mx-auto flex items-center justify-between">
                    {/* Khối bên trái */}
                    <div className="flex items-center w-[218px]">
                        <div className="w-[49px] aspect-square rounded-[14px] truncate">
                            <img src="/demo/image-1.png" alt="Cô Phòng" className="w-full h-full object-cover"/>
                        </div>
                        <div className="ml-[12px]">
                            <div className="font-[700] text-[15px] text-white mb-[2px]">
                                Cô Phòng
                            </div>
                            <div className="font-[700] text-[12px] text-[#FFFFFF70]">
                                Hồ Quang Hiếu, Huỳnh Vân
                            </div>
                        </div>
                    </div>
                    {/* Khối ở giữa */}
                    <div className="flex-1 mx-[66px]">
                        <div className="flex items-center justify-center">
                            <button className="text-[16px] text-white">
                                <FaBackwardStep/>
                            </button>
                            <button className="text-[16px] text-white w-[32px] h-[32px] bg-primary rounded-full inline-flex items-center justify-center mx-[42px]">
                                <FaPlay/>
                            </button>
                            <button className="text-[16px] text-white">
                                <FaForwardStep/>
                            </button>
                        </div>
                        <div className="mt-[11px] relative">
                            <div className="absolute left-0 top-[14px] h-[4px] w-[80%] bg-primary rounded-[50px]"></div>
                            <input
                                type="range"
                                min={0}
                                max={100}
                                defaultValue={80}
                                className="w-full h-[4px] bg-[#FFFFFF0A] appearance-none rounded-[50px] cursor-pointer range-sm"
                            />
                        </div>
                    </div>
                    {/* Khối bên phải */}
                    <div className="w-[148px] flex items-end">
                        <button className="text-[16px] text-white">
                            <FaVolumeHigh/>
                        </button>
                        <div className="ml-[6px] relative">
                            <div className="absolute left-0 top-[14px] h-[3px] w-[80%] bg-primary rounded-[50px]"></div>
                            <input 
                                type="range" 
                                min={0} 
                                max={100} 
                                defaultValue={80}
                                className="w-full h-[3px] bg-[#FFFFFF1A] appearance-none rounded-[50px] cursor-pointer range-sm"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
