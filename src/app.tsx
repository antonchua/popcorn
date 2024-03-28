import {Layout} from "./components/layout/layout";

const KEY = "acc5d6f"
export const App = () => {
    // useEffect(() => {
    //     const fetchMovie = async (): Promise<void> => {
    //         try {
    //             const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=matrix`)
    //             const data = await res.json()
    //             console.log(data)
    //         }
    //         catch (err) {
    //             console.log(err)
    //         }
    //     }
    //     fetchMovie()
    // }, [])


  return (
      <>
        <Layout>
            <header style={{backgroundColor: "gray"}}>Header</header>
            <main style={{backgroundColor: "yellow"}}>Main</main>
            <footer style={{backgroundColor: "orange"}}>Footer</footer>
        </Layout>
      </>
  )
}
