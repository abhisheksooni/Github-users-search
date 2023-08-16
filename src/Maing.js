



function Maing(params) {
    return(<>
        
        <div className="px-5 text-white">
            <div className="flex justify-between px-2 py-4">
                <h1>GitFinder</h1>
                <button>LIGHT</button>
                </div>
                {/* search  */}
            <div className=" flex text-[18px] bg-[#666] px-3 py-4 rounded-lg justify-between lg:text-xl">
                <input type="text" placeholder="Search GitHub username..." className="px-2 py-2 bg-transparent"/>
                <button className="px-4 py-2 rounded-lg bg-blue-700  ">Search</button>
            </div>
            {/* user info */}
            <div>
                {/* inages and name data */}
                <div className="flex  p-6 text-xl  sm:text-2xl">
                    <img src="https://avatars.githubusercontent.com/u/83975832?v=4" className=" rounded-full w-24 border-2 sm:w-52"/>
                    {/* user info */}
                    <div className="flex gap-52 p-7 w-[75%]">
                    <div className=" ">
                    <h1 className=" ">NAME</h1>
                    <p>username</p>
                    <p className="sm:hidden">Joined Date</p>

                    </div>
                    <p className=" hidden sm:inline">Joined Date pm</p>
                    </div>
                </div>
            </div>
        </div>
    
    </>)
}
export default Maing;