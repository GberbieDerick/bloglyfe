import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const Category = (props) =>{

    const [blogs,setBlogs] = useState([]);

    const [currentCategory,setCurrentCategory] = useState('');

    useEffect(()=>{
        const category = props.match.params.id;
        setCurrentCategory(capitalizeFirstLetter(category))

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }



        const fetchData = async () =>{
            try {
                const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/blog/category`,{ category }, config);
                setBlogs(res.data);
                
            } catch (error) {
                
            }
        }

        fetchData();
    

    },[props.match.params.id]);

    const getCategoryBlogs = (props) =>{
        let list = [];
        let results = [];

        blogs.map(blogPost =>{

            return list.push(
                <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-primary">{capitalizeFirstLetter(blogPost.category)}</strong>
            <h3 className="mb-0">{blogPost.title}</h3>
            <div className="mb-1 text-muted">{blogPost.month} {blogPost.day}</div>
            <p className="card-text mb-auto">{blogPost.excerpt}</p>
                        <Link  to={`/blog/${blogPost.slug}`} className="stretched-link">Continue reading</Link>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                        <img width='200' height='250' src={blogPost.thumbnail} alt="Blog"/>
                    </div>
                    </div>

             );
        });


        for (let index = 0; index < list.length; index += 2) {
            results.push(
                <div key={index} className= 'row mb-2'>

                    <div className='col-md-6'>
                        {list[index]}

                    </div>
                    <div className='col-md-6'>
                    {list[index + 1]? list[index + 1]: null}

                    </div>
                </div>
            )
             
         }


         return results;


    }

    

    
    const capitalizeFirstLetter = (word) => {

        if (word) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }

        return '';
    };


    return (<div className='container mt-3'>
    <h3 className='display-4 '>{currentCategory} Category</h3>
    <div className="nav-scroller py-1 mb-2">
                        <nav className="nav d-flex justify-content-between">
                            <Link className="p-2 text-muted" to='/category/world'>World</Link>
                            <Link className="p-2 text-muted" to='/category/environment'>Environment</Link>
                            <Link className="p-2 text-muted" to='/category/technology'>Technology</Link>
                            <Link className="p-2 text-muted" to='/category/design'>Design</Link>
                            <Link className="p-2 text-muted" to='/category/culture'>Culture</Link>
                            <Link className="p-2 text-muted" to='/category/business'>Business</Link>
                            <Link className="p-2 text-muted" to='/category/politics'>Politics</Link>
                            <Link className="p-2 text-muted" to='/category/opinion'>Opinion</Link>
                            <Link className="p-2 text-muted" to='/category/science'>Science</Link>
                            <Link className="p-2 text-muted" to='/category/health'>Health</Link>
                            <Link className="p-2 text-muted" to='/category/style'>Style</Link>
                            <Link className="p-2 text-muted" to='/category/travel'>Travel</Link>
                        </nav>
                    </div>

                    {getCategoryBlogs()}

</div>
);

    
};

export default Category;