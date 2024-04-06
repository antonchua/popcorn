import { Layout } from './components/layout/layout'
import { Header } from './components/header/header'
import { Main } from './components/main/main/main'

export const App = () => {
  return (
    <>
      <Layout>
        <Header />
        <Main />
        <footer style={{ backgroundColor: 'orange' }}>Footer</footer>
      </Layout>
    </>
  )
}
