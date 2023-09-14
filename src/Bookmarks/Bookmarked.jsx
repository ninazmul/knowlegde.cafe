import PropTypes from "prop-types";

const Bookmarked = ({ bookmark }) => {

    const {title} = bookmark;

  return (
            <div>
                <h3 className="text-xl font-bold bg-slate-200 m-4 p-2 rounded-md">{title}</h3>
            </div>
  );
};

Bookmarked.propTypes = {
    bookmark: PropTypes.object
}



export default Bookmarked;

