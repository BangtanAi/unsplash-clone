import axios from 'axios';
import React from 'react';
import './index.scss';
import Pagination from '@material-ui/lab/Pagination';
import CircularProgress from '@material-ui/core/CircularProgress';
import Photo from './Photo';

function App() {
  const [text, setText] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [results, setResults] = React.useState([]);
  const [page, setPage] = React.useState();
  const [photoOpened, setPhotoOpened] = React.useState(false);
  const [photo, setPhoto] = React.useState();
  
  const onPhotoClick = (photo) => {
    setLoading(true);
    setPhoto(photo);
    setPhotoOpened(true);
    setLoading(false);
  }

  const fetchImages = async () => {
    setLoading(true);
    const response = await axios.get(
      `https://api.unsplash.com/search/photos?page=${page}&query=${text}&client_id=gLSSdfKNMYT6TQr4WU_bBzmf0r5FwHqRkgCqTd9I6Co&orientation=squarish&order_by=popular`,
    );
    const data = await response.data;
    console.log(results.length);
    setResults(data.results);
    console.log(data.total);
    setLoading(false);
  };
  const pageChange = (event, value) => {
    setPage(value);
    fetchImages(text, value);
  };
  React.useEffect(() => {
    fetchImages();
  }, []);
  if (loading) {
    return (
      <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      >
        <CircularProgress size={130} />
      </div>
    );
  }
  return (
    <div className="App">
      {photoOpened && <Photo setPhotoOpened={setPhotoOpened} photo={photo} />}
      <div className="searchBlock">
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={fetchImages}>Send</button>
      </div>
      {results.length > 0 ? (
        <div className="pagination">
          <Pagination
            count={10}
            variant="outlined"
            color="primary"
            size="large"
            onChange={pageChange}
            page={page}
          />
        </div>
      ) : null}

      <div className="gallery">
        {results.map((item, id) => {
          return <img onClick={()=>onPhotoClick(item.urls.regular)} className="item" key={id} src={item.urls.small} alt="galleryImg" />;
        })}
      </div>
    </div>
  );
}

export default App;
