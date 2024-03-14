import React, {useEffect, useState, useContext} from 'react'
import {Functionality} from '../context/Functionality.js'
import EmployeePost from './EmployeePost.js'

export default function EmployeeBlog(props){

    const {blogInputs, setBlogInputs, handleBlogChange, /*getAllPosts, blog*/} = useContext(Functionality)

    useEffect(() => {
        //getAllPosts()
    },[])

    return(
        <div className="employeeBlog-wrapper">
            <form className="employeeBlog-form">
                <input
                    name="title"
                    className="employeeBlog-form-title"
                    placeholder="Title (required)"
                    onChange={handleBlogChange}
                    value={blogInputs.title}
                />
                <input
                    name="subtitle"
                    className="employeeBlog-form-subtitle"
                    placeholder="Subtitle (optional)"
                    onChange={handleBlogChange}
                    value={blogInputs.subtitle}
                />
                <input
                    name="author"
                    className="employeeBlog-form-author"
                    placeholder='Author (required)'
                    onChange={handleBlogChange}
                    value={blogInputs.author}
                />
                <input
                    name="date"
                    className="employeeBlog-form-date"
                    placeholder='Date (required)'
                    onChange={handleBlogChange}
                    value={blogInputs.date}
                />
                <input
                    name="content"
                    className="employeeBlog-form-content"
                    placeholder='Content (required)'
                    onChange={handleBlogChange}
                    value={blogInputs.content}
                />
                <input
                    name="img1"
                    className="employeeBlog-form-img1"
                    placeholder='Image #1 URL (optional)'
                    onChange={handleBlogChange}
                    value={blogInputs.img1}
                />
                <input
                    name="img2"
                    className="employeeBlog-form-img2"
                    placeholder='Image #2 URL (optional)'
                    onChange={handleBlogChange}
                    value={blogInputs.im2}
                />
                <input
                    name="img3"
                    className="employeeBlog-form-img3"
                    placeholder='Image #3 URL (optional)'
                    onChange={handleBlogChange}
                    value={blogInputs.img3}
                />
            </form>Blog Post Preview {/*thinking about splitting content up into 3 parts so we can have images in between paragraphs or just to the side if styling can't accomodate that.*/}
            <div className="employeeBlog-preview-wrapper">
            <img className="employeeBlog-preview-img1" src={blogInputs.img1}/>
                <h1 className="employeeBlog-preview-title">{blogInputs.title}</h1>
                <h2 className="employeeBlog-preview-subtitle">{blogInputs.subtitle}</h2>
                <h4 className="employeeBlog-preview-author">Written by {blogInputs.author}</h4><h4 className="employeeBlog-preview-date"> | {blogInputs.date}</h4>
                <p className="employeeBlog-preview-content">{blogInputs.content}</p>
                <img className="employeeBlog-preview-img2" src={blogInputs.img2}/>
                <img className="employeeBlog-preview-img3" src={blogInputs.img3}/>
            </div>
            <div className="employeeBlog-previous">
                {/* {blog && blog?.map(post => {
                    <EmployeePost post={post} key={post._id}/>
                })} */}
            </div>
        </div>
    )
}