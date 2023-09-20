import avatar from "../assets/images/image-avatar.png";
import clock from "../assets/images/icon-clock.svg";
import ethereum from "../assets/images/icon-ethereum.svg";

function Card() {
  return (
    <>
      <section className="h-screen">
        <div className="flex items-center justify-center mx-auto py-16 px-6 w-80">
          <div className="bg-card-bg w-auto h-auto rounded-lg">
            <div className="flex items-center justify-center rounded-lg m-8  bg-hero bg-contain h-52 hover:bg-hero-hover hover:bg-primary-cyan hover:opacity-10 ">
              {/* <img src={equilibrium} alt="equilibrium" className=' rounded-lg' /> */}
            </div>
            <div className="flex flex-col gap-4 px-8 text-white">
              <h2>Equilibrium #3429</h2>
              <p className="text-soft-blue">
                Our Equilibrium collection promotes balance and calm.
              </p>

              <div className="flex items-center justify-between border-b border-b-blue-line pb-4">
                <div className="text-primary-cyan flex items-center gap-2">
                  <img src={ethereum} alt="ethereum" />
                  <span>0.041 ETH</span>
                </div>

                <div className="text-primary-cyan flex items-center gap-2">
                  <img src={clock} alt="clock" />
                  <span className="text-soft-blue">3 days left</span>
                </div>
              </div>
            </div>
            <div className="flex items-center py-3 px-7 gap-3 text-white">
              <img
                src={avatar}
                alt="avatar"
                className="w-10 h-10 border rounded-full"
              />
              <p className="text-sm">
                <span className="text-soft-blue">Creation of </span>Jules Wyvern
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Card;
