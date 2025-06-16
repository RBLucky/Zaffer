import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import AnimatedTitle from './AnimatedTitle';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
        scrollTrigger: {
            trigger: '#clip',
            start: 'center center',
            end: '+=800 center',
            scrub: 0.5,
            pin: true,
            pinSpacing: true,
        }
    })

    clipAnimation.to('.mask-clip-path', {
        width: '100vw',
        height: '100vh',
        borderRadius: 0
    })
  })

  return (
    <div id="about" className="min-h-screen w-screen">
        <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
            <h2 className="font-general text-sm uppercase md:text-[10px]">
                Welcome to !XARA
            </h2>

            <AnimatedTitle
                title="Disc<b>o</b>ver <b>A</b>frica's <br /> L<b>a</b>rgest Sh<b>a</b>red <b>A</b>dventure"
                containerClass="mt-5 !text-black text-center"
            />

            <div className="about-subtext">
                <p>
                    !XARA<br/> The Dawn of Man Meets the Edge of Singularity
                </p>

                <p>
                    <br/>Our history, now an epic MMORPG
                </p>
            </div>
        </div>

        <div className="h-dvh w-screen" id="clip">
            <div className="mask-clip-path about-image">
                <img
                    src="img/about.webp"
                    alt="Background"
                    className="absolute left-0 top-0 size-full object-cover"
                />
            </div>
        </div>
    </div>
  )
}

export default About