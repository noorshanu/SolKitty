import Title from "components/Title";

function About() {
  return (
    <section className=" relative">
      <div className=" container-wrapper">

        <div className=" flex justify-between items-center my-2">

          <div className=" w-full sm:max-w-3xl">
            <img src="images/cat2.png" alt="" />
          </div>

          <div className=" w-full">
          <h1 className=" text-[#000000] text-2xl sm:text-3xl lg:text-4xl font-dream uppercase pb-2  max-w-4xl mx-auto">
            {" "}
            Welcome to MARIESOL : The cutest cat on Solana! 🐱{" "}
          </h1>
          <p className=" max-w-4xl  text-[#000000] text-xl mx-auto mb-3">
          MarieSol Meme Coin isn't an average meme – it's a meow-nificent journey filled with excitement and fun!  Our paw-some coin is powered by the Solana blockchain, ensuring lightning-fast transactions and a seamless experience for all our fellow cat lovers.

          </p>
          </div>

        </div>
        </div>
  
    </section>
  );
}

export default About;
