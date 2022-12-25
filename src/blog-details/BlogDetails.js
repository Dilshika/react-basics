import { useParams } from 'react-router-dom';
import { Bars } from 'react-loader-spinner';

import useFetch from '../useFetch';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isDataLoading,
  } = useFetch(`http://localhost:8000/blogs/${id}`);
  const histroy = useHistory();

  const handleClick = () => {
    fetch(`http://localhost:8000/blogs/${blog.id}`, {
      method: 'DELETE',
    }).then(() => histroy.push(`/`));
  };
  return (
    <div className='blog-details'>
      {isDataLoading && <Bars />}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written By:{blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
};
export default BlogDetails;
