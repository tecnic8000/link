import { useState, useEffect } from 'react'
import axios from 'axios'

const Home = () => {
    const [items, setItems] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        fetchItems(currentPage)
    },[currentPage])

    const fetchItems = async (page) => {
        try {
            // DEV
            const response = await axios.get(`http://127.0.0.1:8000/api/store/?page=${page}`);
            // PRODUCTION
            // const response = await axios.get(`https://backend1-hbhl.onrender.com/api/store/?page=${page}`);
            setItems(response.data.results);
            setTotalPages(response.data.total_pages);  // Get correct total pages from Django

          
            //console.log(response.data)
          
            //console.log('OK --- 01')
        } catch (error) {
          console.error("Error fetching products:", error);
        }
    };
    const handleNext = () => {
        if (currentPage < totalPages) {
          setCurrentPage(prevPage => prevPage + 1);
        }
      };
    
    const handlePrev = () => {
        if (currentPage > 1) {
          setCurrentPage(prevPage => prevPage - 1);
        }
      };
    // console.log(totalPages)
    return (
        <div>
          <h2>Products</h2>
          {/*<ul>
            {items.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>*/}
          
          {/* Pagination Controls */}
          <div>
            <button disabled={currentPage === 1} onClick={handlePrev}>Prev</button>
            <span> Page {currentPage} of {totalPages} </span>
            <button disabled={currentPage === totalPages} onClick={handleNext}>Next</button>
          </div>
        </div>
      );
}

export default Home