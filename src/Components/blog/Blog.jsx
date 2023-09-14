import PropTypes from 'prop-types';


const Blog = ({ blog, handleAddToBookmark, handleMarkedAsRead }) => {
  const {
    title,
    cover,
    reading_time,
    author,
    author_img,
    published_date,
    hashtags,
    id
  } = blog;
  return (
    <div className="mb-14 border-b-2">
      <img className="rounded-lg" src={cover} alt={`cover picture ${title}`} />
      <div className="flex justify-between items-center">
        <div className="flex gap-4 my-2 items-center">
          <div>
            <img className="w-14" src={author_img} alt="" />
          </div>
          <div>
            <p className="text-xl font-bold">{author}</p>
            <p>{published_date}</p>
          </div>
        </div>
        <div className="flex items-center gap-1 justify-between">
          <span>{reading_time} min read</span>
          <button onClick={() => handleAddToBookmark(blog)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="blue"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <h3 className="text-4xl font-bold">{title}</h3>
      {/* <p>{hashtags}</p> */}
      <p className="px-1">
        {hashtags.map((hash, index) => (
          <span key={index}>
            <a href="">{hash}</a>
          </span>
        ))}
      </p>
      <button
        onClick={() => handleMarkedAsRead(reading_time,id)}
        className="text-blue-500 bg-none font-bold underline px-1">
        Mark As Read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func,
  handleMarkedAsRead: PropTypes.func,
};
export default Blog;