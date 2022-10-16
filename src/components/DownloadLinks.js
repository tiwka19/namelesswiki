import React from 'react';

export const kebabLinksA13 = [
  {
    link: 'Nameless-AOSP_kebab-13.0-20221002-0739-Official.zip',
  },
];
export const kebabLinksA12 = [
  {
    link: 'Nameless-AOSP_kebab-12.1-20220823-2345-Official.zip',
  },
  {
    link: 'Nameless-AOSP_kebab-12.1-20220723-1310-Official.zip',
  },
];

export default function OP9R_8T_Links() {
  return (
    <ul>
      {kebabLinksA13?.map((item) => (
        <li key={item.id}>
          <a
            href={`https://sourceforge.net/projects/nameless-aosp/files/lemonadep/${item.link}/download`}>
            {item.link}
          </a>
        </li>
      ))}{' '}
    </ul>
  );
}

