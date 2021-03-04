import Button from '@material-ui/core/Button';
import { useEffect, useState } from 'react';
import './App.css';
import News from './Components/News/News';

function App() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=6aff66dfacdf4af6bb4190f9ea54d647'
    fetch(url)
    .then(res => res.json())
    .then(data => setArticles(data.articles))

  },[])
  return (
    <div>
      <Button variant="contained">Default</Button>
      <Button variant="contained" color="primary">Primary</Button>
      <Button variant="contained" color="secondary">Secondary</Button>
      <Button variant="contained" disabled>Disabled</Button>
      <Button variant="contained" color="primary" href="#contained-buttons">Link</Button>
      <h2>Headlines : {articles.length}</h2>
      {
        articles.map(article => <News article={article}></News>)
      }

    </div>
  );
}

export default App;
