import React from "react";

const Header = () => {
  return (
    <div className="px-5 sm:px-8 md:px-12 lg:px-28 xl:px-64 2xl:px-[700px] flex justify-between items-center  font-graphik py-6 sm:py-5 md:py-8 lg:py-12">
      <img
        className="h-6 sm:h-9 md:h-12 lg:h-14"
        alt="logo"
        src="https://s3-alpha-sig.figma.com/img/3280/6b75/bd85dcea7d0c5ee4332becad17a88e19?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Mz~0aTcWF~L12w7J36dCb7dIm1KdzFA5DF7qSLcn~13I1nc8YmkRrjlJpAOJ3RVn4nCgwm9jTPcSlvwvPlYHZ2~aNyvFaz1ltXGqHnYLBtGZFdchbCRVU3JFi6EKX-9Nzh1wbopWD62IfQkmBN6SMFwlsdirBS4DtsycDWV8h86mMdnY90uHCUEuuQTMGbnOxMqM31jBYPuVBTfM2Td1Hngx2phDRHJbgtJUfVi89MnEG3jMj3M7p3y5TD9HepRNLu3v0EFtE3IOOaoq10wrur7iYYd~tz2W0v~VyrestabCNrwEAIInu~hc14oHeTkGMuKGonVQNVN-MfGaefbtoQ__"
      />

      <ul className="text-white text-[8px] sm:text-[10px] md:text-[11px] lg:text-[12px] 2xl:text-[15px] font-medium sm:font-semibold flex  gap-4 sm:gap-8 md:gap-12 lg:gap-14 2xl:gap-24">
        <a href="">
          <li>EMAIL</li>
        </a>
        <a href="">
          <li>WIKI</li>
        </a>
        <a href="">
          <li>BLOG</li>
        </a>
        <a href="">
          <li>PLUGIN</li>
        </a>
      </ul>
    </div>
  );
};

export default Header;
