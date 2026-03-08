import Link from "next/link";
import { PortableText } from "@portabletext/react";
import NewsletterSubscribe from "@/components/NewsletterSubscribe";
import Text from "@/components/Text";
import Resume from "@/components/Resume";
import { portableTextComponents } from "@/components/PortableTextComponents";

export default function InformationOverlay({ biography, resume, onClose }) {
  return (
    <div
      className="fixed inset-0 z-20 overflow-y-auto pointer-events-auto"
      onClick={onClose}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-4 w-full px-3 md:px-32 gap-6 md:gap-16 py-20 md:py-8 min-h-full "
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col gap-6 col-span-1 order-2 md:order-1">
          <div className="hidden md:block">
            <Text>Taylor Zanke</Text>
          </div>
          <div>
            <Text>Contact</Text>
            <Text className="indent-2">Los Angeles, CA</Text>
            <a href="mailto:taylor.zanke@gmail.com" className="indent-2">
              <Text link>taylor.zanke@gmail.com</Text>
            </a>
          </div>

          <div>
            <Text>Newsletter</Text>
            <div className="pl-2">
              <NewsletterSubscribe />
            </div>
          </div>
          <div>
            <Link href="https://allowingmanyforms.org" target="_blank">
              <Text link>Allowing Many Forms</Text>
            </Link>
          </div>
        </div>
        <div className="flex flex-col col-span-3 order-1 md:order-2">
          {biography?.content && (
            <PortableText
              value={biography.content}
              components={portableTextComponents}
            />
          )}

          <Resume resume={resume} />
        </div>
      </div>
    </div>
  );
}
