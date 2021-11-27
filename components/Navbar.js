import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { connect } from "react-redux";
import { signOutUser } from "../actions/user";
import { useRouter } from "next/dist/client/router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = ({ signOutUser }) => {
  const [user] = useAuthState(auth);

  const router = useRouter();

  return (
    <Disclosure as="nav" className="shadow font-asap">
      {({ open }) => (
        <>
          <div className="absolute z-10 w-full mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex justify-between h-16">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-black">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon
                      className="block h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:justify-between">
                <div className="flex-shrink-0 cursor-pointer flex items-center">
                  <Link href="/">
                    <img
                      className={`${open ? "hidden" : ""} relative h-87 w-auto`}
                      src="/images/logo4.svg"
                      alt="Furever Pets"
                    />
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:flex font-lato sm:space-x-8">
                  <Link href="/">
                    <a className="uppercase link border-transparent text-white hover:border-white inline-flex items-center px-1 pt-1 border-b-2 text-lg font-medium">
                      Home
                    </a>
                  </Link>

                  <Link href="/adopt">
                    <a className="uppercase link border-transparent text-white hover:border-white inline-flex items-center px-1 pt-1 border-b-2 text-lg font-medium">
                      Adopt
                    </a>
                  </Link>

                  <Link href="/contact">
                    <a className="uppercase link border-transparent text-white hover:border-white inline-flex items-center px-1 pt-1 border-b-2 text-lg font-medium">
                      Contact
                    </a>
                  </Link>

                  {user ? (
                    <a
                      onClick={() => {
                        signOutUser();
                        router.push("/");
                        toast.success("Your signed out!");
                      }}
                      className="uppercase cursor-pointer link border-transparent text-white hover:border-white inline-flex items-center px-1 pt-1 border-b-2 text-lg font-medium"
                    >
                      Sign Out
                    </a>
                  ) : (
                    <Link href="/login">
                      <a className="uppercase link border-transparent text-white hover:border-white inline-flex items-center px-1 pt-1 border-b-2 text-lg font-medium">
                        Sign In
                      </a>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden relative w-full bg-white pt-10">
            <div className="pt-2 pb-4 space-y-1 font-lato">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-white" */}
              <Link href="/">
                <a className="uppercase relative z-10 border-transparent text-black hover:text-white hover:bg-purple-500 block pl-3 pr-4 py-2 text-base font-medium">
                  Home
                </a>
              </Link>

              <Link href="/adopt">
                <a className="uppercase border-transparent text-black hover:text-white hover:bg-purple-500 pl-3 pr-4 py-2 block text-base font-medium">
                  Adopt
                </a>
              </Link>

              <Link href="/workouts">
                <a className="uppercase border-transparent text-black hover:text-white hover:bg-purple-500 block pl-3 pr-4 py-2 text-base font-medium">
                  Local Shelters
                </a>
              </Link>

              <Link href="/contact">
                <a className="uppercase border-transparent text-black hover:text-white hover:bg-purple-500 block pl-3 pr-4 py-2 text-base font-medium">
                  Contact
                </a>
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default connect(null, { signOutUser })(Navbar);
