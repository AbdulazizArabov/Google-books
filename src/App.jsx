import './App.css';
import { TextInput } from '@mantine/core';
import { Button } from '@mantine/core';
import Cards from './component/Cards'
import { useState } from 'react'
import axios from 'axios'
import { Grid } from '@mantine/core'


function App() {
  const [value, setValue] = useState()
  const [data, setData] = useState([])



  const getBooks = () => {
    const param = {
      key: 'AIzaSyCsxbwDN9quTs6gPYZeIcbvNftyHosSr8c',
      q: value,
      maxResults: 10
    }
    axios.get(`https://www.googleapis.com/books/v1/volumes`, { params: param })
      .then(function (response) {
        console.log(response.data.items)
        setData(response.data.items)
      })
      .catch(function (error) {
        console.error(error)
      })


    // const getBooks = () => {
    //   const params = {
    //     key: 'AIzaSyCsxbwDN9quTs6gPYZeIcbvNftyHosSr8c',
    //     q: value,
    //     maxResults: 20,
    //   }
  }
  console.log(value)
  const Enter =(e) =>{
    console.log(e)
    if(e.code == "Enter"){
      getBooks() 
    }
  }

  return (
    <div className="App">
      <div className="back">
        <div className="container">
          <div className="search">
            <TextInput
              onChange={(event) => setValue(event.currentTarget.value)}
              placeholder="Your name"
              withAsterisk
              onKeyDown={(e) => Enter(e)}
            />
            <Button onClick={() => getBooks()}>
              Settings
            </Button>

          </div>
        </div>
      </div>
      <div className="container">
      <Grid>
        {
          data.map((item, index) => {
            return (
                <Grid.Col span={4}>
                  <Cards item={item} />
                </Grid.Col>
            )
          })
        }
      </Grid>
      </div>
      </div>
  );
}


export default App;
