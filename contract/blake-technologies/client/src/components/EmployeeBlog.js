import React, {useEffect, useState, useContext} from 'react'
import {Functionality} from '../context/Functionality.js'
import EmployeePost from './EmployeePost.js'

export default function EmployeeBlog(props){

    const {blogInputs, setBlogInputs, handleBlogChange, /*getAllPosts, blog*/} = useContext(Functionality)

    useEffect(() => {
        //getAllPosts()
    },[])

    function cssSplit(str){ //this turns the blogInput styles into styling object to use as jsx 
        var O= {},
        S= str.match(/([^ :;]+)/g) || [];
        while(S.length){
            O[S.shift()]= S.shift() || '';
        }
        return O;
    }
    //***important*** -> styling has to be written as if it were in object.style.whatever syntax. Ex: instead of padding-right: 20px; it needs to be paddingRight: 20px; -> there also needs to be a semi-colon separating all styling attributes
    const stylePage = cssSplit(blogInputs.stylePage)
    const styleTitle = cssSplit(blogInputs.styleTitle)
    const styleSubtitle = cssSplit(blogInputs.styleSubtitle)    
    const styleContent = cssSplit(blogInputs.styleContent)    
    const styleImg1 = cssSplit(blogInputs.styleImg1)    
    const styleImg2 = cssSplit(blogInputs.styleImg2) 
    const styleImg3 = cssSplit(blogInputs.styleImg3)    
   
    

    return(
        <div className="employeeBlog-wrapper">
            <form className="employeeBlog-form">
                <input
                    name="stylePage"
                    className="employeeBlog-form-stylePage"
                    placeholder="Style Page"
                    onChange={handleBlogChange}
                    value={blogInputs.stylePage}
                />
                <input
                    name="title"
                    className="employeeBlog-form-title"
                    placeholder="Title (required)"
                    onChange={handleBlogChange}
                    value={blogInputs.title}
                />
                <input
                    name="styleTitle"
                    className="employeeBlog-form-styleTitle"
                    placeholder="Style Title"
                    onChange={handleBlogChange}
                    value={blogInputs.styleTitle}
                />
                <input
                    name="subtitle"
                    className="employeeBlog-form-subtitle"
                    placeholder="Subtitle (optional)"
                    onChange={handleBlogChange}
                    value={blogInputs.subtitle}
                />
                <input
                    name="styleSubtitle"
                    className="employeeBlog-form-styleSubtitle"
                    placeholder="Style Subtitle"
                    onChange={handleBlogChange}
                    value={blogInputs.styleSubtitle}
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
                    name="styleContent"
                    className="employeeBlog-form-styleContent"
                    placeholder="Style Content"
                    onChange={handleBlogChange}
                    value={blogInputs.styleContent}
                />
                <input
                    name="img1"
                    className="employeeBlog-form-img1"
                    placeholder='Image #1 URL (optional)'
                    onChange={handleBlogChange}
                    value={blogInputs.img1}
                />
                <input
                    name="styleImg1"
                    className="employeeBlog-form-styleImg1"
                    placeholder="Style Image #1"
                    onChange={handleBlogChange}
                    value={blogInputs.styleImg1}
                />
                <input
                    name="img2"
                    className="employeeBlog-form-img2"
                    placeholder='Image #2 URL (optional)'
                    onChange={handleBlogChange}
                    value={blogInputs.img2}
                />
                <input
                    name="styleImg2"
                    className="employeeBlog-form-styleImg2"
                    placeholder="Style Image #2"
                    onChange={handleBlogChange}
                    value={blogInputs.styleImg2}
                />
                <input
                    name="img3"
                    className="employeeBlog-form-img3"
                    placeholder='Image #3 URL (optional)'
                    onChange={handleBlogChange}
                    value={blogInputs.img3}
                />
                <input
                    name="styleImg3"
                    className="employeeBlog-form-styleImg3"
                    placeholder="Style Image #3"
                    onChange={handleBlogChange}
                    value={blogInputs.styleImg3}
                />
                <button>Post</button>
            </form>Blog Post Preview {/*thinking about splitting content up into 3 parts so we can have images in between paragraphs or just to the side if styling can't accomodate that.*/}
            <div className="employeeBlog-preview-wrapper" style={stylePage}>
            <img className="employeeBlog-preview-img1" src={blogInputs.img1} style={styleImg1}/>
                <h1 className="employeeBlog-preview-title" style={styleTitle}>{blogInputs.title}</h1>
                <h2 className="employeeBlog-preview-subtitle" style={styleSubtitle}>{blogInputs.subtitle}</h2>
                <h4 className="employeeBlog-preview-author">Written by {blogInputs.author}</h4><h4 className="employeeBlog-preview-date"> | {blogInputs.date}</h4>
                <p className="employeeBlog-preview-content" style={styleContent}>{blogInputs.content}</p>
                <img className="employeeBlog-preview-img2" src={blogInputs.img2} style={styleImg2}/>
                <img className="employeeBlog-preview-img3" src={blogInputs.img3} style={styleImg3}/>
            </div>
            <div className="employeeBlog-previous">
                {/* {blog && blog?.map(post => {
                    <EmployeePost post={post} key={post._id}/>
                })} */}
            </div>
        </div>
    )
}