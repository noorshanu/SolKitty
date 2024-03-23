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
          </div>

        </div>
        </div>
  
    </section>
  );
}

export default About;
