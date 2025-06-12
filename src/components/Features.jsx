const BentoCard = ({ src, title, description }) => {
    return (
        <div className="relative size-full">
            <video
                src={src}
                loop
                muted
                autoPlay
                className="absolute left-0 top-0 size-full object-cover object-center"
            />

            <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
                <div>
                    <h1 className="bento-title special-font">
                        {title}
                    </h1>

                    {description && (
                        <p className="mt-3 max-w-64 text-xs md:text-base">
                            {description}
                        </p>
                    )}
                </div>
            </div>
        </div>
    )
}

const Features = () => {
  return (
    <section className="bg-black pb-52">
        <div className="container mx-auto px-3 md:px-10">
            <div className="px-5 py-32">
                <p className="font-circular-web text-lg text-blue-50">
                    Into the Metagame Layer
                </p>
            

                <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
                    Immerse yourself in an abundant universe where gaming, AI and blockchain technology find their place in mankind's roots.
                </p>
            </div>
        

            <div className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
                <BentoCard
                    src="videos/feature-1.mp4"
                    title={<>ec<b>h</b>o</>}
                    description="Tech meets Myth, transforming stories across ancient lands and digital realms into soulbound rewards and power"
                />
            </div>

            <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
                <div className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
                    <BentoCard
                        src="videos/feature-2.mp4"
                        title={<>i<b>m</b>v<b>a</b>n<b>a</b></>}
                        description="A sacred collection of myth-bound artifacts - powered by ancient lore and modern AI"
                    />
                </div>
            </div>


        </div>
    </section>
  )
}

export default Features