function Home() {
  return (
    <div className="bg-homeMobile lg:bg-homeDesktop h-screen w-full bg-cover bg-center bg-no-repeat">
      <div className="max-w-[1060px] mx-auto text-white flex items-center w-[90%]">
        <div className="lg:flex lg:items-center mt-[260px] space-y-24">
          <div className="bellowlg:text-center ">
            <div>
              <h3 className="uppercase ms:text-[28px] text-[21px] font-default tracking-wider">
                So, you want to travel to
              </h3>
            </div>
            <div>
              <h1 className="uppercase font-custom lg:text-[144px] sm:text-[148px]  text-[100px]">
                Space
              </h1>
            </div>
            <div className="lg:w-2/4 w-2/3 bellowlg:mx-auto">
              <p className="lg:leading-7 font-default sm:text-[21px] text-[18px]">
                Let's face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we'll give you a truly out
                of this world experience
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center ">
            <div className="w-[250px] h-[250px] rounded-full bg-white flex items-center justify-center uppercase">
              <h2 className="text-slate-950 text-3xl font-custom">Explore</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
