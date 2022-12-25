import BlogList from './BlogList';
import { Bars } from 'react-loader-spinner';
import useFetch from './useFetch';

const Home = () => {
  const { data, isDataLoading, error } = useFetch(
    'http://localhost:8000/blogs'
  );

  return (
    <div className='home'>
      {error && <div>{error}</div>}
      {!error && isDataLoading && <Bars aria-label='bars-loading' />}
      {!isDataLoading && data && (
        <BlogList
          blogs={data}
          title='All Blogs'
        />
      )}
    </div>
  );
};

export default Home;
