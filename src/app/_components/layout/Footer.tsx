import { aircraft, programs, whyAmalfi } from "@/app/_data/footer-data";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaXTwitter,
} from "react-icons/fa6";
import FooterColumn from "./FooterColumn";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-340 px-8 pt-20 pb-8">
        {/* Top */}
        <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr_1fr]">
          {/* Left */}
          <div className="space-y-8">
            <Link
              href="/"
              className="text-xl font-medium tracking-widest text-gray-200 "
            >
              AMALFI JETS
            </Link>

            <div className="flex gap-6 text-2xl pt-8">
              <FaTiktok size={20} />
              <FaFacebookF size={20} />
              <FaLinkedinIn size={20} />
              <FaInstagram size={20} />
              <FaXTwitter size={20} />
            </div>

            <Image
              src="/images/app-store.png"
              alt="App Store"
              width={170}
              height={52}
            />
          </div>

          {/* CTA */}
          <div>
            <Button className="bg-white text-black px-6 py-6 rounded-4xl transition-all duration-200 ease-out hover:bg-white hover:scale-105">
              Request a Quote
            </Button>
          </div>

          <FooterColumn title="Our Programs" items={programs} />

          <FooterColumn title="Aircraft" items={aircraft} />

          <FooterColumn title="Why Amalfi" items={whyAmalfi} />

          <div className="space-y-8">
            <div className="space-y-5">
              <h4 className="font-semibold">Contact Us</h4>

              <p className="text-neutral-400">+1 (877) 626-2534</p>

              <div>
                <p className="text-xs uppercase text-neutral-500">
                  General Enquiries
                </p>

                <p className="text-neutral-400">enquiry@amalfijets.com</p>
              </div>

              <div>
                <p className="text-xs uppercase text-neutral-500">
                  Marketing & Collaborations
                </p>

                <p className="text-neutral-400">collabs@amalfijets.com</p>
              </div>

              <div>
                <p className="text-xs uppercase text-neutral-500">
                  Media & Press Enquiries
                </p>

                <p className="text-neutral-400">press@amalfijets.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-24  text-xs leading-4 text-neutral-500 ">
          The Amalfi One Jet Card, Amalfi Enterprise Program, and On-Demand
          Charter Program are programs of Amalfi Jets, an &quot;Air Charter
          Broker&quot; under DOT Regulations operating under Part 295
          Regulations on behalf of our clients. Amalfi Jets does not own or
          operate any aircraft. All flights are operated by registered Part 135
          Operators or the Foreign Equivalent that meet and exceed standards set
          by the FAA and internal requirements set by Amalfi Jets.
        </div>

        <div className="my-6 h-px bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col gap-6 text-xs text-neutral-500 lg:flex-row lg:justify-between">
          <p>© 2020–2026 All rights reserved. Amalfi Jets Inc.</p>

          <div className="flex gap-10">
            <button className="text-xs">
              Amalfi Reserve Subscription Terms
            </button>
            <button className="text-xs">Privacy Policy</button>
            <button className="text-xs">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
