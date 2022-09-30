import { Instagram, Facebook, Twitter, GitHub, Dribbble } from 'react-feather'

const Footer = () => {
  return (
    <>
      <footer className="bg-slate-900 text-white">
      <div className="max-w-screen-xl px-4 py-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-4">
          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-white">About Us</p>
            <nav className="mt-8">
              <ul className="space-y-4 text-sm">
                <li>
                  <a className=" transition hover:text-gray-400" href="/">
                    Company History
                  </a>
                </li>
                <li>
                  <a className="transition hover:text-gray-400" href="/">
                    Meet the Team
                  </a>
                </li>
                <li>
                  <a className=" transition hover:text-gray-400"
                    href="/">
                    Employee Handbook
                  </a>
                </li>
                <li>
                  <a className=" transition hover:text-gray-400"
                    href="/">
                    Careers
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-white">Our Services</p>
            <nav className="mt-8">
              <ul className="space-y-4 text-sm">
                <li>
                  <a className="transition hover:text-gray-400" href="/">
                    Youtube
                  </a>
                </li>
                <li>
                  <a className="transition hover:text-gray-400" href="/">
                    Agency
                  </a>
                </li>
                <li>
                  <a className="transition hover:text-gray-400" href="/">
                    Patreon
                  </a>
                </li>
                <li>
                  <a className="transition hover:text-gray-400" href="/">
                    Google Ads
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-white">Resources</p>
            <nav className="mt-8">
              <ul className="space-y-4 text-sm">
                <li>
                  <a className=" transition hover:text-gray-400" href="/">
                    Online Guides
                  </a>
                </li>
                <li>
                  <a className=" transition hover:text-gray-400" href="/">
                    Conference Notes
                  </a>
                </li>
                <li>
                  <a className=" transition hover:text-gray-400" href="/">
                    Forum
                  </a>
                </li>
                <li>
                  <a className=" transition hover:text-gray-400" href="/">
                    Downloads
                  </a>
                </li>
                <li>
                  <a className="transition hover:text-gray-400" href="/">
                    Upcoming Events
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-white">Helpful Links</p>
            <nav className="mt-8">
              <ul className="space-y-4 text-sm">
                <li>
                  <a className="transition hover:text-gray-400" href="/">
                    FAQs
                  </a>
                </li>
                <li>
                  <a className="transition hover:text-gray-400" href="/">
                    Support
                  </a>
                </li>
                <li>
                  <a className="flex group justify-center gap-1.5 sm:justify-start" href="/">
                    <span className=" transition group-hover:text-gray-400">
                      Live Chat
                    </span>

                    <span className="relative flex w-2 h-2 -mr-2">
                      <span className="absolute inline-flex w-full h-full bg-teal-400 rounded-full opacity-75 animate-ping"></span>
                      <span className="relative inline-flex w-2 h-2 bg-teal-500 rounded-full"></span>
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-16">
          <ul className="flex justify-center gap-6 sm:justify-end">
            <li>
              <a
                href="/"
                rel="noreferrer"
                target="_blank"
                className="text-pink-700 transition hover:text-pink-700/75">
                <span className="sr-only">Facebook</span>
                <Facebook/>
              </a>
            </li>
            <li>
              <a
                href="/"
                rel="noreferrer"
                target="_blank"
                className="text-pink-700 transition hover:text-pink-700/75">
                <span className="sr-only">Instagram</span>
                <Instagram/>
              </a>
            </li>
            <li>
              <a
                href="/"
                rel="noreferrer"
                target="_blank"
                className="text-pink-700 transition hover:text-pink-700/75">
                <span className="sr-only">Twitter</span>
                <Twitter/>
              </a>
            </li>
            <li>
              <a
                href="/"
                rel="noreferrer"
                target="_blank"
                className="text-pink-700 transition hover:text-pink-700/75">
                <span className="sr-only">GitHub</span>
                <GitHub/>
              </a>
            </li>
            <li>
              <a
                href="/"
                rel="noreferrer"
                target="_blank"
                className="text-pink-700 transition hover:text-pink-700/75">
                <Dribbble/>
              </a>
            </li>
          </ul>
            <p className="mt-4 text-sm text-center text-gray-500 sm:mt-0 sm:text-right">
              Copyright &copy; 2022. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer