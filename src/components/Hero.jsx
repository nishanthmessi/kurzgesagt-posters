import heroImage from '../assets/Poster_Banner_big_2048x.jpg'

const Hero = () => {
  return (
    <>
      <div className="lg:flex bg-violet-500">
        <div className="flex items-center justify-center w-full px-2 py-8 lg:h-[32rem] lg:w-1/2 h-auto">
            <div className="max-w-xl">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-4xl text-center">All Posters & Wall Art</h2>
                <p className="mt-2 text-lg font-medium text-white text-center">Browse our full collection of posters and art prints, ranging from elaborate infographics to breathtaking scenes.</p>
            </div>
        </div>
        <div className="w-full h-64 lg:w-1/2 lg:h-auto">
            <div className="w-full h-full bg-cover">
              <img className='w-full h-full bg-cover object-cover' src={heroImage}/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero