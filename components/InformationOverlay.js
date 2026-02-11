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
        className="grid grid-cols-1 sm:grid-cols-3 w-full px-3 sm:px-32 gap-6 sm:gap-32 py-20 sm:py-8 min-h-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col gap-3 col-span-1 order-2 sm:order-1">
          <div>
            <Text>Contact</Text>
            <Text className="indent-2">Los Angeles, CA</Text>
            <a href="mailto:studio@taylorzanke.com" className="indent-2">
              <Text link>studio@taylorzanke.com</Text>
            </a>
          </div>
          <div>
            <Text>Links</Text>
            <Link
              href="https://allowingmanyforms.org"
              target="_blank"
              className="indent-2"
            >
              <Text link>Allowing Many Forms</Text>
            </Link>
          </div>

          <div>
            <Text>Newsletter</Text>
            <div className="pl-2">
              <NewsletterSubscribe />
            </div>
          </div>
        </div>
        <div className="flex flex-col col-span-2 order-1 sm:order-2">
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
