function Hero() {
  return (
    <section className="relative z-10 overflow-hidden bg-[#54aabd] h-[80vh] ">
      <div className="container-wrapper flex flex-col sm:flex-row  justify-between items-center  lg:drop-shadow-[0_0_10rem_white] mt-[8rem] ">
      
        <div className=" relative z-20">
          <img
            src="images/star2.png"
            alt=""
            className="floating  absolute top-[20%] sm:top-[46%] left-3 sm:left-[10%] w-auto h-[80px] "
          />
          <img
            src="images/star2.png"
            alt=""
            className="floating  absolute top-4 sm:top-[46%] right-[10%] w-auto h-[80px] "
          />

          <img
            src="/images/hero.png"
            className="w-full lg:w-[100%] lg:h-full   mx-auto "
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-duration="1500"
            data-aos-easing="ease-in-sine"
            alt=""
          />
        </div>
        <div className=" flex   sm:hidden  justify-center items-center  mt-7 sm:mt-8">
          <div className=" relative">
            <a
              href="/"
              className="  btn-main  font-bold text-sm sm:text-xl rounded-full px-12 py-2"
            >
              Trade
            </a>
          </div>
        </div>
        <div className=" text-center mt-4 sm:mt-0">
         
          <h1 className="text-center text-[#ffffff] text-2xl sm:text-3xl lg:text-4xl font-dream uppercase pb-2  max-w-4xl mx-auto">
            {" "}
            Welcome toSolKitty : The Meme Coin of Champions on Solana{" "}
          </h1>
          <p className=" max-w-3xl  text-[#f1f1f1] text-xl mx-auto">
            SolKitty is a unique meme coin experience built on the Solana , with
            the fun and community spirit of meme coins. It's more than just a
            cryptocurrency; it's an adventure that rewards its participants with
            speed, entertainment, and the chance to be part of a vibrant
            community.
          </p>
          <p className="max-w-3xl  text-[#f1f1f1] text-xl mx-auto my-2">
            Contract : __________________________________
          </p>
          <div className=" hidden   sm:flex  justify-center items-center gap-6 mt-7 sm:mt-8">
            <div className=" relative">
              <a
                href="https://raydium.io/"
                target="_blank"
                className="  btn-main  font-bold text-sm sm:text-xl rounded-full px-12 py-2"
              >
                Trade
              </a>
            </div>

            <div className=" relative">
              <a href="/" target="_blank" className=" ">
                <img
                  src="images/dextool.png"
                  alt=""
                  className="h-[45px] btn-main   font-bold text-sm sm:text-xl rounded-full px-8 py-2"
                />
              </a>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-5 justify-center lg:justify-center mt-4">
            <a href="https://t.me/dogeraces" target="_blank">
              <img src="TELEGRAM.png" alt="" className="w-auto h-[55px]" />
            </a>

            <a href="https://twitter.com/kolsitty1" target="_blank">
              <img src="X.png" alt="" className="w-auto h-[55px]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
