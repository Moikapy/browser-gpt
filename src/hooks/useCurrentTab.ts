import { useMemo, useState } from 'react';
import {usePrevious} from './usePrevious';
function useCurrentTab({onComplete = (e) => {}}) {
  const [url, setUrl] = useState<string>('');
  const prevUrl = usePrevious(url);
  async function getCurrentTabUrl() {
    if (typeof chrome !== 'undefined') {
      if (chrome && chrome.tabs) {
        const tabs = await chrome?.tabs?.query({active: true});
        return tabs[0].url;
      }
    }
  }

  useMemo(() => {
    if (typeof chrome !== 'undefined') {
      getCurrentTabUrl().then((url: string) => {
        prevUrl !== url && onComplete(url);
        prevUrl !== url && setUrl(url);
      });
    }
  }, [getCurrentTabUrl]);

  return {url};
}
export {useCurrentTab};