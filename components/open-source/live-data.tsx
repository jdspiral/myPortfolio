import * as React from 'react';
import { useState, useEffect } from 'react';
import { SimpleGrid, Box, useMediaQuery } from '@chakra-ui/react';
import { PageSlideFade } from '../shared/animations/page-transitions';
import RepositoryCard from './live-data-card';
import StackGrid from 'react-stack-grid';
import CardSkeleton from './card-skeleton';
import { GITHUB_API_URL } from 'data/constants';
import axios from 'axios';

const LiveData = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isLargerThan720] = useMediaQuery('(min-width: 720px)');
  const [isLargerThan982] = useMediaQuery('(min-width: 982px)');

  const fetchRepositories = async () => {
    try {
      const response = await axios.get(`${GITHUB_API_URL}/users/MA-Ahmad/repos`);
      const sortedRepos = response.data
        ?.sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, 8);
      setRepos(sortedRepos);
    } catch (error) {
      console.error('Failed to fetch repositories:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  const columnWidth = isLargerThan982 ? 390 : isLargerThan720 ? 300 : '100%';

  return (
    <PageSlideFade>
      {loading ? (
        <SimpleGrid columns={[1, 1, 2]} spacing={4} mt={4}>
          <CardSkeleton />
        </SimpleGrid>
      ) : (
        <Box mt={4}>
          <StackGrid columnWidth={columnWidth}>
            {repos?.map((repo, index) => (
              <RepositoryCard
                key={index}
                title={repo.name}
                description={repo.description}
                language={repo.language}
                url={repo.svn_url}
                stargazers_count={repo.stargazers_count}
                forks_count={repo.forks_count}
              />
            ))}
          </StackGrid>
        </Box>
      )}
    </PageSlideFade>
  );
};

export default LiveData;
