import Head from 'next/head';
import { SEO_IMAGE } from 'data/constants';

type MetaProps = {
  title?: string;
  keywords?: string;
  description?: string;
  image?: string;
};

const Meta: React.FC<MetaProps> = ({
  title = 'Josh Hathcock - Full Stack Developer',
  keywords = 'web development, programming, web design, react js, chakra ui',
  description = 'Software Engineer.',
  image = 'path/to/seo-image.jpg', // Replace SEO_IMAGE with the actual default image path
}) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={image} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={title} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <title>{title.includes('Hathcock') ? title : title.concat(' | Josh Hathcock')}</title>
    </Head>
  )
}

export default Meta;
