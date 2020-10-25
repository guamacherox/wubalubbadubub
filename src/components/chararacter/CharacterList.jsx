import React, { useEffect } from 'react';

import { GET_CHARACTERS } from './queries/chararacter';
import { useQuery } from '@apollo/client';
import styles from './character.module.css';
import classnames from 'classnames';
console.log('styles', styles);

const CharacterList = () => {
  console.count('render N times');

  useEffect(() => {
    console.log('Component List Characters Mounted');
  }, []);

  const { loading, data, error, fetchMore } = useQuery(GET_CHARACTERS, {
    variables: { page: 1 },
    notifyOnNetworkStatusChange: true,
  });
  console.log('CharacterList -> data', data);

  const requestMoreData = (whereTo) => {
    if (fetchMore) {
      console.log('requestMoreData -> whereTo', whereTo);
      fetchMore({
        variables: { page: whereTo },
        updateQuery: (prev, { fetchMoreResult }) => {
          console.log('requestMoreData -> prev', prev);
          if (!fetchMoreResult) return prev;
          return {
            characters: { ...fetchMoreResult.characters },
          };
        },
      });
    }
  };

  if (loading) return <p style={{ textAlign: 'center' }}>Loading...</p>;
  if (error) return <p style={{ textAlign: 'center' }}>Error :(</p>;

  const characters =
    data &&
    data.characters.results.map(({ id, name, species }) => (
      <li key={id}>
        <p>
          {name} | {species}
        </p>
      </li>
    ));

  return (
    <>
      <div className={classnames(styles.characterContainer, styles.characterContainerCentered)}>
        <div className={styles.characterContainerList}>
          <ul>{characters}</ul>
        </div>
      </div>
      <div className={classnames(styles.characterContainer, styles.characterContainerCentered)}>
        <button type="button" onClick={() => requestMoreData(data.characters.info.prev)}>
          Back!
        </button>
        &nbsp;
        <button type="button" onClick={() => requestMoreData(data.characters.info.next)}>
          Next!
        </button>
      </div>
    </>
  );
};

export default CharacterList;
