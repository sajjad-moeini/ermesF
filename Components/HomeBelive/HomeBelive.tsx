import React from 'react'

function HomeBelive() {
   return (
      <div className="px-4 mx-4 lg:mx-24 grid grid-cols-3 lg:grid-cols-3 gradiant2 py-8 border-e-8 border-mainYellow rounded-lg">
         <div className="col-span-2">
            <div className="text-lg lg:text-3xl font-medium text-white my-4">we Believe that our work creates shared value for
               customers and society.</div>
            <div className="text-xs lg:text-2xl text-white my-4"><span className="text-mainYellow font-bold">Ermes </span>is
               always looking for customer satisfaction and finding the best way to transfer products. this is
               achieved after several years of experience.</div>
         </div>
         <div className="col-span-1 relative h-[250px]">
            <div className="absolute left-0 top-0 w-full h-full flex justify-center items-start ">
               <img src="./men.png" className=" h-full scale-125" alt="" />
            </div>
         </div>
      </div>
   )
}

export default HomeBelive