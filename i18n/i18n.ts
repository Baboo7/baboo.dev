import { useMemo } from 'react';
import * as en from './translations/en';

export { t, useI18n };

const t = (key: keyof typeof en.common) => en.common[key];

function useI18n() {
  const translation = useMemo(() => t, []);

  return {
    t: translation,
  };
}
