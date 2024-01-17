import React from "react";

const Footer = () => {
  return (
    <div className="relative flex flex-row justify-between items-center px-10 sm:px-24 md:px-8 lg:px-28 xl:px-64 2xl:px-[750px] 2xl:py-32  -top-20">
      <div>
        <div className="text-[8px] sm:text-[12px] md:text-[15px] 2xl:text-xl font-Montserrat text-white sm:font-semibold ">
          Powered by
          <br /> DF Archon
        </div>
      </div>
      <div>
        <table className="text-[8px] sm:text-[10px] md:text-[12px] 2xl:text-[14px] border-separate border-spacing-x-3 border-spacing-y-3 md:border-spacing-x-10 md:border-spacing-y-5">
          <thead>
            <tr className="text-white">
              <th class="">Products</th>
              <th class="">About</th>
              <th class="">Catalog</th>
            </tr>
          </thead>
          <tbody className="sm:font-semibold">
            <tr>
              <td class="">Products</td>
              <td class="">About</td>
              <td class="">Catalog</td>
            </tr>
            <tr>
              <td class="">Products</td>
              <td class="">About</td>
              <td class="">Catalog</td>
            </tr>
            <tr>
              <td class=""></td>
              <td class=""></td>
              <td class="">Catalog</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="text-white text-[9px] sm:text-[10px] md:text-[12px] 2xl:text-[14px] bg-social p-3 sm:p-5 md:p-6  ">
        <h1 className="">Social Contacts</h1>
        <div className="flex flex-row justify-between items-center py-1 sm:py-2 md:py-3">
          <a href="">Discord</a>
          <div className="h-[20px] w-[20px] sm:h-[23px] sm:w-[23px]  bg-black rounded-full" />
        </div>
        <div className="flex flex-row justify-between items-center py-1 sm:py-2 md:py-3">
          <a href="">Github</a>
          <div className="h-[20px] w-[20px] sm:h-[23px] sm:w-[23px]  bg-black rounded-full" />
        </div>
        <div className="flex flex-row justify-between items-center py-1 sm:py-2 md:py-3">
          <a href="">Twitter</a>
          <div className="h-[20px] w-[20px] sm:h-[23px] sm:w-[23px]  bg-black rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
