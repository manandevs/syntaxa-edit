import Image from 'next/image'
import React from 'react'

const Logo = () => {
    return (
        <div className="flex items-center gap-2">
            <Image
                src="/icons/logo.png"
                alt="logo"
                width={34}
                height={39}
                className="w-[31px] h-[35px] md:w-[34px] md:h-[39px]"
            />
            <span className="flex flex-col text-gray-500 -ml-1 -mt-0.5">
                <span className="font-semibold text-2xl leading-[1.05] bg-gradient-to-r from-[#0047FF] via-[#3A5BFF] to-[#8A5BFF] text-transparent bg-clip-text">
                    yntaxa
                </span>
                <span className="font-semibold text-[16px] md:text-[18] leading-[0.99]">edit</span>
            </span>
        </div>
    )
}

export default Logo