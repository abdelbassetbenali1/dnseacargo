import Image from 'next/image';

interface FlagProps {
  code: string;
  size?: 's' | 'm' | 'l';
  alt?: string;
  className?: string;
}

export default function Flag({ code, size = 's', alt, className = '' }: FlagProps) {
  const flagSrc = `/flags/${size}/${code}.svg`;
  const flagAlt = alt || `${code} flag`;

  return (
    <Image
      src={flagSrc}
      alt={flagAlt}
      width={size === 's' ? 16 : size === 'm' ? 24 : 32}
      height={size === 's' ? 12 : size === 'm' ? 18 : 24}
      className={`inline-block ${className}`}
      priority={false}
    />
  );
}