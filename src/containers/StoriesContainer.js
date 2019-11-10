import React, { useEffect, useState } from 'react';
import { getStoryIds } from "../services/hnApi";
import { Story } from "../components/Story";
import { StoriesContainerWrapper, GlobalStyle } from '../styles/StoriesContainerStyles';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll'

export const StoriesContainer = () => {
  const [storyIds, setstoryIds] = useState([]);
  const {count} = useInfiniteScroll();
  useEffect(() => {
    getStoryIds().then(data => setstoryIds(data));
  }, []);
  return (
    <>
      <GlobalStyle />
      <StoriesContainerWrapper data-test-id='stories-container'>
        <h1>Hacker News Stories</h1>
        {storyIds.slice(0,count).map(storyId => <Story key={storyId} storyId={storyId} />)}
      </StoriesContainerWrapper>
    </>
  );
}

