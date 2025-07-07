import React from 'react'

function Card({userName, para="Resume Analyzer"}) { //instead of using props, here we can directly destructure it to {userName} cuz there is a single object property to be changed also here in the para props we provided a default value which will be sued when the para prop is not passed from the parent component
    // const data = ['HOME', 'GALLERY', 'BLOG', 'KNET']
    // console.log(userName);
    
    
    return (
        <div className="relative bg-[#060707]">
            <nav className=" relative  flex justify-between z-10 items-center px-5 py-5 w-full ">
                <div className="text-4xl font-IBMPlexBold">{userName}</div>
                <div className="flex font-IBMPlexBold">
                    {/* {data.map((item, index) => {
                        return (
                            <h1 className="px-3" key={index}>
                                {item}
                            </h1>
                        )
                    })} */}
                </div>
            </nav>
            <div className=" items-center min-h-screen flex justify-around relative flex-wrap px-5">
                <>
                    <div className="bg-[#15d98bfd] h-[362px] w-[362px] absolute rounded-full blur-[120px] filter -top-[100px]  -left-20 opacity-75"></div>
                </>
                <div className="max-w-xl relative">
                    <h1 className="font-IBMPlexBold text-6xl max-w-md text-left uppercase">
                        {userName} <span className="text-[#02C173]">Intelligence</span> Agency
                    </h1>
                    <p className="font-IBMPlexRegular text-left">
                        {para}
                    </p>
                </div>
                <div>
                    <img
                        width="500"
                        height="500"
                        alt="bg-image"
                        src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1651418249/new-nft_tlfisy.png"
                    />
                </div>
            </div>
        </div>
    )
}

export default Card
