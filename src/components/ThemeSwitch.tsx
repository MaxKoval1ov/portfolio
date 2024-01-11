'use client';

import {JSX, useEffect, useState} from 'react';
import Image from 'next/image';
import {useTheme} from 'next-themes';

import {faMoon, faSun} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const {setTheme, resolvedTheme} = useTheme();

  const themeBtns: Record<string, JSX.Element> = {
    dark: <FontAwesomeIcon icon={faMoon} onClick={() => setTheme('light')} />,
    light: <FontAwesomeIcon icon={faSun} onClick={() => setTheme('dark')} />,
  } as const;

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <Image
        alt="Loading Light/Dark Toggle"
        height={36}
        priority={false}
        sizes="36x36"
        src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
        title="Loading Light/Dark Toggle"
        width={36}
      />
    );

  //   if (resolvedTheme === 'dark') {
  //     return;
  //   }

  //   if (resolvedTheme === 'light') {
  return themeBtns[resolvedTheme ? resolvedTheme : 'light'];
  //   }
}
