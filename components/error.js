import Container from './container'

export default function Error({ errorCode }) {
  return (
      <Container>
        <div>
          {(
            <>
              {errorCode}
            </>
          )}
        </div>
      </Container>
  )
}
