import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";

const Header = async () => {
  const client = createClient();

  const settings = await client.getSingle("settings");

  return (
    <>
      <header>
        <Link href="/">{settings.data.site_title}</Link>

        <nav>
          <ul>
            {settings.data.navigation.map(({ link, label }) => (
              <li key={label}>
                <PrismicNextLink field={link}>{label}</PrismicNextLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
