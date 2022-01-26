import { FC, MouseEvent, useState } from 'react';
import { Stack, Text } from '@whammytechvn/wt-components';
import IconCopy from 'components/icon/IconCopy';
import classNames from 'classnames';
import { toast } from 'react-toastify';
import IconButton from 'components/icon-button/IconButton';
import { getEllipsisTxt } from 'utils/format';

interface TextCopyableProps {
  value?: string | null;
  className?: string;
}

const TextCopyable: FC<TextCopyableProps> = ({ value, className }) => {
  const cxTextCopyable = classNames('justify-between items-center', className);
  const [_, setIsCopied] = useState(false);

  async function copyTextToClipboard(text: string) {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand('copy', true, text);
    }
  }

  const handleCopyClick = (e: MouseEvent<HTMLElement>) => {
    if (e) {
      e.preventDefault();
    }
    if (value) {
      copyTextToClipboard(value)
        .then(() => {
          setIsCopied(true);
          toast.info('Copy to Clipboard!');
          setTimeout(() => {
            setIsCopied(false);
          }, 1500);
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  return value ? (
    <Stack className={cxTextCopyable}>
      <Text>{getEllipsisTxt(value)}</Text>
      <IconButton icon={<IconCopy />} onClick={handleCopyClick} />
    </Stack>
  ) : null;
};

export default TextCopyable;
