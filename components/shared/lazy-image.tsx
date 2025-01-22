import * as React from 'react';
import { BlurhashCanvas } from 'react-blurhash';
import Image from 'next/image';

type LazyImageProps = {
  src: string;
  blurHash: string;
  width?: number;
  height?: number;
  rounded?: string;
};

const LazyImage = ({ src, blurHash, width, height, rounded }: LazyImageProps) => {
  const [isLoading, setIsLoading] = React.useState(true);

  return (
    <div
      style={{
        position: 'relative',
        width: width || '100%',
        height: height || '100%',
        borderRadius: rounded ? '5px' : undefined,
        overflow: 'hidden',
      }}
    >
      {isLoading && (
        <BlurhashCanvas
          hash={blurHash}
          width={width || 200} // Provide default size if width/height are undefined
          height={height || 200}
          punch={1}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: rounded ? '5px' : undefined,
          }}
        />
      )}

      <Image
        src={src}
        alt="cover image"
        width={width}
        height={height}
        placeholder="empty" // Skip Next.js's blur placeholder since we're using Blurhash
        onLoadingComplete={() => setIsLoading(false)}
        style={{
          objectFit: 'cover',
          borderRadius: rounded ? '5px' : undefined,
          display: isLoading ? 'none' : 'block',
        }}
      />
    </div>
  );
};

export default LazyImage;
