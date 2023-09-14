import PropTypes from "prop-types";
import Bookmarked from "./Bookmarked";

const Bookmarks = ({ bookmarks, readingTimes }) => {
  return (
    <div className="md:w-1/3">
      <h2 className="text-2xl font-bold text-center">
        Bookmarked Blogs: {bookmarks.length}
      </h2>
      <div>
        <h3 className="text-xl text-red-500 text-center border-b-2 pb-4">
          Reading Times: {readingTimes}mins
        </h3>
      </div>
      {bookmarks.map((bookmark, idx) => (
        <Bookmarked key={idx} bookmark={bookmark}></Bookmarked>
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTimes: PropTypes.number
};
export default Bookmarks;
