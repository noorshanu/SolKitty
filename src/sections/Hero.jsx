function Hero() {
  return (
    <section className="relative z-10 overflow-hidden  h-auto sm:h-[80vh] ">
      <div className="container-wrapper flex flex-col sm:flex-row  justify-between items-center  lg:drop-shadow-[0_0_10rem_white] mt-4 sm:mt-[8rem] ">
        <div className="  mt-4 sm:mt-8 w-full">
          <h1 className=" text-[#000000] text-2xl sm:text-3xl lg:text-4xl font-dream uppercase pb-2  max-w-4xl mx-auto">
            {" "}
            MarieSol combines Cuteness with meme Purr-fection!
          </h1>
          <p className=" max-w-4xl  text-[#000000] text-xl mx-auto mb-3">
            Step into the purrfect world of MarieSol, where every paw-some
            adventure is fueled by the irresistible charm of Marie the cat! 🐾
            <br />
            Meet Marie, the mischievous feline with a heart as big as her
            curiosity. Leading our meme community with grace and influence,
            she's the purr-fect embodiment of all things cute and honest.
          </p>
          <a
            href="https://solscan.io/token/EHn1PjN3ea1qCUD8E6yHCSUntRxxcDZfPEBPn8veX19L"
            target="_BLANK"
            className="  text-[#000000] font-bold text-base   py-4"
          >
            Contract : EHn1PjN3ea1qCUD8E6yHCSUntRxxcDZfPEBPn8veX19L
          </a>
          <div className=" hidden   sm:flex  justify-start items-center gap-6 mt-7 sm:mt-8">
            <div className=" relative">
              <a
                href="https://raydium.io/"
                target="_blank"
                className="  btn-main  font-bold text-sm sm:text-xl rounded-full px-12 py-2"
              >
                Telegram
              </a>
            </div>

            <div className=" relative">
              <a href="https://www.dextools.io/app/en/solana/pair-explorer/5xWDgwcFSdVEC33qfpGgJrCN9kCWgLqvjBSBTCWURzMt?t=1711200471804" target="_blank" className=" ">
                <img
                  src="images/dextool.png"
                  alt=""
                  className="h-[45px] btn-main   font-bold text-sm sm:text-xl rounded-full px-8 py-2"
                />
              </a>
            </div>
          </div>
        </div>

        <div className=" relative z-20 w-full">
          <img
            src="images/star2.png"
            alt=""
            className="floating  absolute top-[20%] sm:top-[46%] left-3 sm:left-[10%] w-auto h-[80px] "
          />

          <img
            src="/images/hero.png"
            className="w-full lg:w-[70%] lg:h-full   mx-auto "
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-duration="1500"
            data-aos-easing="ease-in-sine"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
