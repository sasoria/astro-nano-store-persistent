import type { WritableAtom} from 'nanostores';
import { persistentAtom } from '@nanostores/persistent'

export const locale: WritableAtom<string> = persistentAtom('locale', 'en');

export function setLocale(language: string) {
    locale.set(language);
}