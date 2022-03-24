import Image from "next/image";
import { Link } from "@/components";
const SubHeader = () => {
  return (
    <div className="bg-[#27272B] relative z-0 hidden lg:block">
      <div className="container mx-auto text-[#E7B864] py-4">
        <div className="flex justify-between">
          <div className="grid grid-cols-3">
            <Link
              href="https://goo.gl/maps/FL8YohcVPXR2xHar6"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center"
            >
              <Image
                alt="time"
                src="/gis_location-poi.svg"
                width={20}
                height={20}
                quality={100}
              />
              <p className="ml-2">Los palos grandes</p>
            </Link>
            <Link
              href="https://g.page/garcia_tunon?share"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center"
            >
              <Image
                alt="time"
                src="/gis_location-poi.svg"
                width={20}
                height={20}
                quality={100}
              />
              <p className="ml-2">Chacao</p>
            </Link>
            <span className="flex justify-center">
              <Image
                alt="time"
                src="/bx_bxs-time-five.svg"
                width={20}
                height={20}
                quality={100}
              />
              <p className="ml-2">8:00 am - 5:00 pm</p>
            </span>
          </div>

          <div className="hidden">
            <ul className="flex flex-row justify-end gap-4 lg:gap-10 ">
              <li className="flex">
                <Image
                  alt="time"
                  src="/dashicons_whatsapp.svg"
                  width={20}
                  height={20}
                  quality={100}
                />
              </li>
              <li className="flex">
                <Image
                  alt="time"
                  src="/eva_phone-call-fill.svg"
                  width={20}
                  height={20}
                  quality={100}
                />
              </li>
              <li className="flex">
                <Image
                  alt="time"
                  src="/clarity_email-solid.svg"
                  width={20}
                  height={20}
                  quality={100}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
