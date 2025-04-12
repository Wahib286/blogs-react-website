import { useContext } from 'react';
import React from 'react';
import { AppContext } from '../context/AppContext';
import { Spinner } from "./Spinner";

const Blogs = () => {
  // Step 3: consume context 
  const { loading, posts } = useContext(AppContext);

  return (
    <div className='w-11/12 max-w-[670px] pt-[80px] pb-20 mx-auto flex flex-col gap-y-8'>


      {
        loading ? <Spinner /> : (
          posts.length === 0 ? (
            <div className='text-center text-gray-500 font-medium'>
              <p>No Post Found</p>
            </div>
          ) : (
            posts.map((post) => (
              <div key={post.id} className='mb-8 border-b pb-4'>
                <p className='font-bold text-lg text-blue-800'>{post.title}</p>
                
                <p className='text-sm text-gray-600 mb-1'>
                  By <span className='italic'>{post.author}</span> on <span className='text-blue-800'>{post.category}</span>
                </p>

                <p className='text-xs text-gray-400 mb-2'>Posted on {post.date}</p>

                <p className='text-base text-gray-800 mb-3'>{post.content}</p>

                <div className='flex flex-wrap gap-2'>
                  {post.tags.map((tag, index) => (
                    <span key={index} className='text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full'>
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            ))
          )
        )
      }
    </div>
  );
};

export default Blogs;
