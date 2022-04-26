import React from 'react'

function NewsCard({ doubleHeight, doubleWidth, alone }) {

    let className = `card bg-white bg-opacity-40 shadow mt-4 flex justify-center transition ${doubleHeight ? " lg:row-span-2 md:row-span-1 sm:h-[20rem] lg:h-auto " : " row-span-1 h-[20rem] "} ${doubleWidth ? " col-span-2 " : "col-span-1 "} ${alone && "lg:col-span-2 2xl:col-span-1"}`;




    return (

        <div className={className} >

            <div className="card-body text-white ">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="stat bg-white rounded-box">
                    <div class="stat-title text-green-400">New Users</div>
                    <div class="stat-value text-green-400">4,200</div>
                    <div class="stat-desc text-green-400">↗︎ 400 (22%)</div>
                </div>
                <div class="card-actions justify-end">
                    {/* <button class="btn btn-ghost bg-green-500 bg-opacity-60 text-white">Buy Now</button> */}
                </div>
            </div>

        </div>

    )
}

export default NewsCard