import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
const Blog = ({ blog ,handleAddToBookmark }) => {
    const { title, hashtag, coverImage, author, postedDate, id, authorImage, readingTime } = blog;

    return (
        <div>
            <p>Number {id}</p>
            <img className='w-full rounded-lg' src={coverImage} alt="" />
            <div className='flex mt-8 justify-between'>
                <div className='flex'>
                    <img className='w-12 h-12 rounded-full' src={authorImage} alt={`Author: ${author}`} />
                    <div className='ml-5'>
                        <h3 className='font-bold'>{author}</h3>
                        <p>{postedDate}</p>
                    </div>
                </div>
                <div className='flex text-rose-600 ml-2 text-xl justify-center items-center'>
                    <p>{readingTime} min read</p>
                    <button onClick= { () => handleAddToBookmark (blog)}><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p className='font-semibold text-slate-400'>
                {hashtag.map((hash, index) => (
                    <span key={index}><a href={`#${hash}`}>{hash}</a> </span>
                ))}

            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark :PropTypes.func
};

export default Blog;
