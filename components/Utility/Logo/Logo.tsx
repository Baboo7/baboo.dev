import { ComponentProps, FunctionComponent } from 'react';
import Link from 'next/link';
import { cx } from 'class-variance-authority';
import { useI18n } from '@i18n';

export const Logo: FunctionComponent<ComponentProps<'svg'>> = ({ className }) => {
  const { t } = useI18n();

  return (
    <Link href="/" aria-label={`${t('metadata.owner.name')}'s logo`}>
      <svg
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 42 42"
        className={cx(
          'h-8 w-8 cursor-pointer text-gray-800 transition-colors hover:text-gray-500 dark:text-white dark:hover:text-gray-400 lg:h-11 lg:w-11',
          className,
        )}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.05 5.972C8.444 7.5 7.2 19.194 15.288 22.515c.978.402.993.294-.2 1.438A4052.494 4052.494 0 0 0 4.268 34.445a394.422 394.422 0 0 1-3.05 2.944c-.448.422-.814.813-.814.869 0 .201 32.61.122 33.87-.082 7.481-1.213 9.968-10.862 4.006-15.546-.874-.687-.872-.627-.054-1.195 5.787-4.019 3.72-13.677-3.287-15.368-1.127-.272-16.437-.354-17.89-.095Zm13.942 2.372c.052.083-.154.363-.505.69-.778.722-7.414 7.15-9.916 9.603-2.342 2.297-2.11 2.15-3.124 1.988-6.798-1.082-6.874-10.936-.096-12.297.81-.162 13.54-.147 13.641.016Zm4.923.625c4.83 2.547 4.177 9.788-1.04 11.547-.732.247-12.88.374-12.88.135 0-.053.61-.691 1.358-1.417 2.07-2.01 8.56-8.303 9.92-9.618 1.375-1.33 1.357-1.325 2.642-.647ZM21.008 23.386c6.218 1.927 5.971 10.517-.351 12.205-.76.203-1.378.221-7.379.221H6.265s2.817-2.648 5.054-4.821c2.236-2.173 4.868-4.73 5.849-5.681a121.2 121.2 0 0 0 1.97-1.94c.248-.275.95-.269 1.87.016Zm13.66.073c6.194 1.79 5.919 10.727-.378 12.291-.948.236-8.734.214-9.358.214-.069 0 .84-.631 1.184-1.077 2.534-3.294 2.43-8.077-.24-11.025-.186-.205-.265-.4-.216-.529.101-.262 8.049-.151 9.009.126Z"
          fill="currentColor"
        />
      </svg>
    </Link>
  );
};
