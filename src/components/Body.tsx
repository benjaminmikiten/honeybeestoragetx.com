import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Button } from "./LinkButton";
import { Icon } from "./Icon";
import { Spacer } from "./Spacer";
import PhoneSVG from "./icon-phone.svg?react";
import LocationSVG from "./icon-location.svg?react";
import EmailSVG from "./icon-email.svg?react";

interface ContactItemProps {
  href: string;
  icon: ReactNode;
  children: ReactNode;
}

function ContactItem({ href, icon, children }: ContactItemProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="flex flex-nowrap items-center px-2 pb-4 [&_span]:text-white [&_span]:text-base [&_span]:md:text-lg [&_span]:font-semibold [&_span]:pl-2 [&_svg_path]:fill-yellow hover:[&_svg_path]:fill-yellow-light [&>div:first-child]:flex-shrink-0 [&>div:last-child]:flex-1 [&>div:last-child]:flex [&>div:last-child]:justify-start [&>div:last-child]:items-center [&>div:last-child]:pl-4"
    >
      <Icon>{icon}</Icon>
      <span>{children}</span>
    </a>
  );
}

interface BodyProps {
  handleClickScroll: () => void;
}

export function Body({ handleClickScroll }: BodyProps) {
  const initialAnimation = {
    opacity: 0,
    transform: `translateY(20px)`,
  };

  const transition = {
    type: "spring",
    mass: 2,
    damping: 15,
    stiffness: 100,
  };

  const paneAnimation = {
    opacity: 1,
    transform: `translateY(0px)`,
  };

  const EMAIL_ADDRESS = `info@honeybeestoragetx.com`;
  const EMAIL_SUBJECT = `Honey Bee Storage Question`;
  const mailto = `mailto:${EMAIL_ADDRESS}?subject=${EMAIL_SUBJECT}`;

  return (
    <div className="py-10 w-full">
      <div className="flex justify-between relative w-[calc(100%+16px)] md:w-[calc(100%+16px)] lg:w-[calc(100%+24px)] h-[calc(100%+16px)] md:h-[calc(100%+16px)] lg:h-[calc(100%+24px)] -m-2 md:-m-2 lg:-m-3 justify-center flex-wrap">
        {/* Main content pane */}
        <motion.div
          className="relative p-2 md:p-2 lg:p-3 flex-shrink-0 w-full order-2 md:order-1 lg:w-[calc((8/12)*100%)] [&_p]:text-white [&_p]:text-base [&_p]:md:text-lg [&_p]:leading-tight [&_p]:text-left [&_p]:md:text-center [&_p]:lg:text-left [&_h2]:text-white [&_h2]:text-2xl [&_h2]:md:text-4xl [&_h2]:leading-tight [&_h2]:font-black [&_h2]:text-left [&_h2]:pb-1 [&_h2]:md:text-center [&_h2]:md:mx-auto [&_h2]:md:max-w-[820px] [&_h2]:lg:text-left [&_h2+p]:font-normal"
          animate={paneAnimation}
          initial={initialAnimation}
          transition={{ ...transition, delay: 0 }}
        >
          <h2>
            Covered and uncovered boat and RV storage in Central&nbsp;Texas
          </h2>
          <p>
            Powered by U-Haul<sup>*</sup>
          </p>
          <Spacer height={20} />
        </motion.div>

        {/* Contact items pane */}
        <motion.div
          className="relative p-2 md:p-2 lg:p-3 flex-shrink-0 w-full order-3 lg:order-2 lg:w-[calc((4/12)*100%)]"
          animate={paneAnimation}
          initial={initialAnimation}
          transition={{ ...transition, delay: 0.3 }}
        >
          <div className="flex flex-row flex-wrap justify-start md:justify-around lg:justify-start">
            <ContactItem href="tel:254-760-2565" icon={<PhoneSVG />}>
              (254) 760-2565
            </ContactItem>
            <ContactItem
              href="https://g.page/Honey-Bee-Storage?share"
              icon={<LocationSVG />}
            >
              <address className="not-italic">
                13417 Shaw Road,
                <br />
                Rogers, TX, 76569
              </address>
            </ContactItem>
            <ContactItem href={mailto} icon={<EmailSVG />}>
              info@honeybeestoragetx.com
            </ContactItem>
          </div>
        </motion.div>

        {/* Mobile CTA pane */}
        <motion.div
          className="relative p-2 md:p-2 lg:p-3 flex-shrink-0 w-full flex justify-center order-2 md:order-3 md:hidden"
          animate={paneAnimation}
          initial={initialAnimation}
          transition={{ ...transition, delay: 0.6 }}
        >
          <Button onClick={handleClickScroll}>See available units</Button>
        </motion.div>
      </div>
    </div>
  );
}
