import React from 'react'
import {act} from 'react-dom/test-utils'
import {App} from './App'
import {render, cleanup} from '@testing-library/react'
import {singularStory, storyIds, emptySingularStory} from '../fixtures/index'
import {getStory,getStoryIds} from '../services/hnApi'
import {useInfiniteScroll} from '../hooks/useInfiniteScroll'
import {STORY_INCREMENT} from '../constants/index'

beforeEach(cleanup);

test('renders the application ', async() => {
    useInfiniteScroll.s
})

