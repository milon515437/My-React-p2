import PropTypes from 'prop-types';

const Bookmark = ({ bookmark }) => {
    const { title } = bookmark;
    return (
        <div className='bg-gray-300 m-3 shadow-lg rounded-lg'>
            <h3 className=' text-center text-3xl'>{title}</h3>
        </div>
    );
};
Bookmark.PropTypes = {
    bookmark: PropTypes.object
}
export default Bookmark;