import Container from './container'
import styles from '../styles/Home.module.css'
import { ALERT_MESSAGE } from '../lib/constants'

export default function Alert({ preview }) {
  return (
      <Container>
        <div className={styles.alertbox}>
          {(
            <>
              {ALERT_MESSAGE}
            </>
          )}
        </div>
      </Container>
  )
}
