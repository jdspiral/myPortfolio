import { useEffect, useState } from 'react';
import {
  Flex,
  Avatar,
  Box,
  Text,
  Badge,
  Stack,
  Link,
  UnorderedList,
  ListItem,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { MotionBox, MotionFlex } from 'components/shared/animations/motion';
import Header from 'components/shared/header';
import NextLink from 'next/link';
import { useLinkColor } from 'components/theme';
import PopularArticles from './PopularArticles';
import { BlogPostProps } from 'interfaces/interface';
import { newContent } from 'data/data';

const ANIMATION_DURATION = 0.5;
const ORANGE = '#ff9400';
const emojis = ['👋', '👍', '🖐'];

const Home: React.FC<BlogPostProps> = (props) => {
  const { posts } = props;
  const linkColor = useLinkColor();
  const [showEmoji, setShowEmoji] = useState(false);
  const [emojiCounter, setEmojiCounter] = useState(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (emojiCounter >= 3) setEmojiCounter(0);
    }, 500);
    return () => clearInterval(interval);
  }, [emojiCounter]);

  return (
    <MotionBox
      initial={{ opacity: 0, translateY: 10 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: ANIMATION_DURATION }}
    >
      <Header>
      <Flex direction="column" align="center" mb={10}>
          <Flex
            direction={['column', 'column', 'row']}
            align={['center', 'center', 'flex-start']}
            justify="center"
          >
            {/* Profile Picture */}
            <Avatar size="2xl" src="/me.jpg" />

            {/* Text Section */}
            <VStack
              align={['center', 'center', 'flex-start']}
              spacing={4}
              ml={[0, 0, 8]}
              mt={[4, 4, 0]}
            >
              <Text fontSize="3xl" fontWeight="bold">
                Josh Hathcock
              </Text>
              <Text fontSize="lg" color={useColorModeValue('gray.600', 'gray.400')}>
                Expert Full Stack Engineer
              </Text>
              <Text fontSize="md" color={useColorModeValue('gray.600', 'gray.400')}>
                I specialize in building scalable web applications, using React, Next.js, Python, AWS, and other technologies.
              </Text>
            </VStack>
          </Flex>
        </Flex>
      </Header>
      {/* <Box mt={10}>
        <PopularArticles posts={posts} />
      </Box> */}
      {/* <UnorderedList>
        {newContent
          .filter((content) => content.link) // Ensure links are valid
          .map((content, index) => (
            <ListItem key={index}>
              <NextLink href={content.link} color={linkColor} aria-label={`Visit ${content.link}`} passHref>
                  {content.link}
              </NextLink>
            </ListItem>
          ))}
      </UnorderedList> */}
    </MotionBox>
  );
};

export default Home;
