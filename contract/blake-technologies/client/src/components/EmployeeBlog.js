import React, {useEffect, useState, useContext} from 'react'
import {Functionality} from '../context/Functionality.js'

export default function EmployeeBlog(props){

    const {blogInputs, setBlogInputs, handleBlogChange} = useContext(Functionality)

    console.log(blogInputs)

    return(
        <div className="blogPost-wrapper">
            <form className="blogPost-form">
                <input
                    name="title"
                    className="blogPost-form-title"
                    placeholder="Title (required)"
                    onChange={handleBlogChange}
                    value={blogInputs.title}
                />
                <input
                    name="subtitle"
                    className="blogPost-form-subtitle"
                    placeholder="Subtitle (optional)"
                    onChange={handleBlogChange}
                    value={blogInputs.subtitle}
                />
                <input
                    name="author"
                    className="blogPost-form-author"
                    placeholder='Author (required)'
                    onChange={handleBlogChange}
                    value={blogInputs.author}
                />
                <input
                    name="date"
                    className="blogPost-form-date"
                    placeholder='Date (required)'
                    onChange={handleBlogChange}
                    value={blogInputs.date}
                />
                <input
                    name="content"
                    className="blogPost-form-content"
                    placeholder='Content (required)'
                    onChange={handleBlogChange}
                    value={blogInputs.content}
                />
                <input
                    name="img1"
                    className="blogPost-form-img1"
                    placeholder='Image #1 URL (optional)'
                    onChange={handleBlogChange}
                    value={blogInputs.img1}
                />
                <input
                    name="img2"
                    className="blogPost-form-img2"
                    placeholder='Image #2 URL (optional)'
                    onChange={handleBlogChange}
                    value={blogInputs.im2}
                />
                <input
                    name="img3"
                    className="blogPost-form-img3"
                    placeholder='Image #3 URL (optional)'
                    onChange={handleBlogChange}
                    value={blogInputs.img3}
                />
            </form>
            <div className="blogPost-preview-wrapper">Blog Post Preview
                <h1 className="blogPost-preview-title"></h1>
                <h2 className="blogPost-preview-subtitle"></h2>
                <h4 className="blogPost-preview-author"></h4><h4 className="blogPost-preview-date"></h4>
                <p className="blogPost-preview-content"></p>
                <img className="blogPost-preview-img1" />
                <img className="blogPost-preview-img2" />
                <img className="blogPost-preview-img3" />
            </div>
        </div>
    )
}