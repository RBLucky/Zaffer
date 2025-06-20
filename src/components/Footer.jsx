import { FaDiscord, FaGithub, FaTwitch, FaTwitter, FaYoutube, FaYoutubeSquare } from "react-icons/fa"
import { FaX } from "react-icons/fa6"

const links = [
    {
        href: 'https://discord.com',
        icon: <FaDiscord />
    },
    {
        href: 'https://x.com',
        icon: <FaX />
    },
    {
        href: 'https://github.com/RBLucky/Zaffer',
        icon: <FaGithub />
    },
    {
        href: 'https://twitch.com',
        icon: <FaTwitch />
    },
    {
        href: 'https://youtube.com',
        icon: <FaYoutube />
    }
]

const Footer = () => {
  return (
    <footer className="w-screen bg-violet-300 py-4 text-black">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
            <p className="text-center text-sm md:text-left">
                &copy; Lucky Nkosi {new Date().getFullYear()}. All rights reserved
            </p>

            <div className="flex justify-center gap-4 md:justify-start">
                {links.map((link) => (
                    <a
                        key={link}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black transition-colors duration-50 ease-in-out hover:text-white"
                    >
                        {link.icon}
                    </a>
                ))}
            </div>

            <a
                href="#privacy-policy"
                className="text-center text-sm hover:underline md:text-right"
            >
                Privacy Policy
            </a>
        </div>
    </footer>
  )
}

export default Footer