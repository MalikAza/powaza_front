function HeroSection() {
  return (
    <section id="hero" className="text-lg font-thin mb-16">
      <div id="intro" className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <img 
          src="/images/DF-profile-picture.png"
          alt="Dakota Froissart"
          className="rounded-full h-20 shadow-[0_0_10px_1px] shadow-turquoize dark:shadow-dark-turquoize transition-shadow ease-in-out duration-300"
        />
        <div className="flex flex-col items-center">
          <h1 className="text-2xl w-fit">Hey, I'm Dakota Froissart <span className="wave">👋</span></h1>
          <h2 className="w-fit text-base">
            <strong className="text-dark-turquoize dark:text-turquoize italic">Application Designer & Developer </strong>
            from <a href="https://www.google.fr/maps/place/France/" target="_blank" className="hover:underline">France 🇫🇷</a>
          </h2>
        </div>
      </div>
    </section>
  )
}

export default HeroSection