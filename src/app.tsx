import { Layout } from './components/layout/layout'
import { Header } from './components/header/header'
import { Main } from './components/main/main'

// const KEY = "acc5d6f"
// const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=matrix`)
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
