import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import styled from '@emotion/styled';

import {
  loadInitialData,
} from '../redux/slice';

import PlanetsContainer from '../PlanetsContainer';

const Container = styled.div({
  margin: '1em 0',
});

const Title = styled.h1({
  fontSize: '1.5em',
});

export default function PlanetsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInitialData());
  });

  return (
    <Container>
      <Title>행성을 클릭해주세요</Title>
      <PlanetsContainer />
    </Container>
  );
}
