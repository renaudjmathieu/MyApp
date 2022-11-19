import React from 'react'
import { useGetPokemonByNameQuery } from '../../services/pokemon'
import Col from 'react-bootstrap/Col';

export const Pokemon = ({
  name,
  pollingInterval,
}: {
  name: string
  pollingInterval: number
}) => {
  const { data, error, isLoading, isFetching } = useGetPokemonByNameQuery(
    name,
    {
      pollingInterval,
    }
  )

  return (
    <>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <Col lg={3} >
          <img src={data.sprites.front_default} alt={data.species.name} />
          </Col>
        </>
      ) : null}
    </>
  )
}
