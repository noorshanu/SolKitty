function Hero() {
  return (
    <section className="relative z-10 overflow-hidden  h-auto sm:h-[80vh] ">
      <div className="container-wrapper flex flex-col sm:flex-row  justify-between items-center  lg:drop-shadow-[0_0_10rem_white] mt-4 sm:mt-[8rem] ">
        <div className="  mt-4 sm:mt-8 w-full">
          <h1 className=" text-[#000000] text-2xl sm:text-3xl lg:text-4xl font-dream uppercase pb-2  max-w-4xl mx-auto">
            {" "}
            Welcome to MARIESOL : The cutest kitty on Solana! 🐱{" "}
          </h1>
          <p className=" max-w-4xl  text-[#000000] text-xl mx-auto mb-3">
            MARIESOL is more than just a meme coin - it's a fluffy, fun-filled
            adventure that spreads joy in the crypto world!
            <br />
            With its irresistible charm, boundless energy, and unbeatable
            cuteness, MARIESOL is the ultimate feline sensation on the Solana
            blockchain
          </p>
          <a
            href="https://solscan.io/token/EKvoMQ3pEEBrYWU34NqU2cFbcBJ6tMWhmRmSM2FcNrd1"
            target="_BLANK"
            className="  text-[#000000] font-bold text-base   py-4"
          >
            Contract : EKvoMQ3pEEBrYWU34NqU2cFbcBJ6tMWhmRmSM2FcNrd1
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
              <a href="/" target="_blank" className=" ">
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
