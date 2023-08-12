const Footer = () => {
  return (
    <footer>
      <ul className="mt-2 text-center text-xs font-medium text-gray-500">
        <li>
          <a
            href="https://securecoding.software/"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            제 10회 SW개발보안 경진대회 | 소개딩 시즌5
          </a>
        </li>
        <li>C-Lab / 이석현 / 김관식 / 한관희 / 김정은</li>
        <li className="text-sm">
          <a
            href="https://github.com/KGU-C-Lab"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            Copyright © 2023 C-Lab. All rights reserved.
          </a>
        </li>
      </ul>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
